#!/usr/bin/env node
// Arnés de paridad byte-exacta para el port de SCSS de element-plus
// (ep-extraction-scss). Compila un target vía dart-sass (API programática
// `sass.compile`), normaliza el CSS resultante y lo compara contra un
// baseline commiteado en scripts/scss-parity/baseline/<nombre>.css mediante
// un diff unificado simple. Sale con código != 0 si hay cualquier
// diferencia — así lo pueden usar tanto humanos como CI.
//
// Uso:
//   node scripts/scss-parity.mjs                    // compara TODOS los targets registrados
//   node scripts/scss-parity.mjs <nombre...>        // compara solo los targets indicados
//   node scripts/scss-parity.mjs --update           // (re)genera el baseline de TODOS los targets
//   node scripts/scss-parity.mjs --update <nombre>  // (re)genera el baseline de un target puntual
//
// Los targets se registran en scripts/scss-parity/targets.json como
// { "nombre": "ruta/relativa/al/entry.scss" }. Cada WU de la migración añade
// aquí sus propios slices (config-provider, grupos de componentes, etc.).

import { compile } from 'sass';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve, join } from 'node:path';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');
const baselineDir = join(__dirname, 'scss-parity', 'baseline');
const targetsPath = join(__dirname, 'scss-parity', 'targets.json');
const nodeModulesDir = join(repoRoot, 'node_modules');
const scopePrefix = '@flash-global66/';

// Resuelve un specifier `@scope/paquete[/subpath]` contra el mapa `exports`
// del `package.json` del paquete instalado en node_modules, igual que lo
// haría el bundler del consumidor (Vite) al resolver imports de paquete.
function resolvePackageExport(pkgName, subpath) {
  const pkgJsonPath = join(nodeModulesDir, pkgName, 'package.json');
  if (!existsSync(pkgJsonPath)) return null;
  const pkgJson = JSON.parse(readFileSync(pkgJsonPath, 'utf8'));
  const exportsMap = pkgJson.exports || {};
  const key = subpath ? `./${subpath}` : '.';
  const target = exportsMap[key];
  if (!target) return null;
  return resolve(join(nodeModulesDir, pkgName), target);
}

// Importer dart-sass (`FileImporter`) que intercepta specifiers `bare` con
// prefijo `@flash-global66/` (ej. `@flash-global66/g-utils/base`) y los
// resuelve vía el `exports` map del paquete, en vez de depender de
// `loadPaths` (que solo resuelve paths relativos a una carpeta, no el
// `exports` map de un paquete npm).
const flashPackageImporter = {
  findFileUrl(url) {
    if (!url.startsWith(scopePrefix)) return null;
    const rest = url.slice(scopePrefix.length);
    const slashIdx = rest.indexOf('/');
    const pkgSuffix = slashIdx === -1 ? rest : rest.slice(0, slashIdx);
    const subpath = slashIdx === -1 ? '' : rest.slice(slashIdx + 1);
    const pkgName = `${scopePrefix}${pkgSuffix}`;
    const filePath = resolvePackageExport(pkgName, subpath);
    if (!filePath || !existsSync(filePath)) return null;
    return pathToFileURL(filePath);
  },
};

function loadTargets() {
  if (!existsSync(targetsPath)) {
    console.error(`[scss-parity] no se encontró el registro de targets: ${targetsPath}`);
    process.exit(1);
  }
  return JSON.parse(readFileSync(targetsPath, 'utf8'));
}

// Normaliza el CSS compilado para que la comparación no dependa de detalles
// no significativos (fin de línea, comentario de sourcemap, espacios finales).
function normalize(css) {
  return css
    .replace(/\r\n/g, '\n')
    .replace(/\/\*# sourceMappingURL=.*\*\/\s*$/m, '')
    .replace(/[ \t]+$/gm, '')
    .replace(/\n+$/, '\n');
}

function compileTarget(entryRelPath) {
  const entryAbsPath = resolve(repoRoot, entryRelPath);
  if (!existsSync(entryAbsPath)) {
    throw new Error(`entry no encontrado: ${entryRelPath}`);
  }
  const result = compile(entryAbsPath, {
    style: 'expanded',
    sourceMap: false,
    // `loadPaths` resuelve paths relativos a node_modules/repoRoot (ej.
    // `element-plus/theme-chalk/src/...`); el importer cubre el `exports`
    // map de paquetes `@flash-global66/*` que node_modules resuelve por
    // subpath export, no por path de archivo literal.
    loadPaths: [nodeModulesDir, repoRoot],
    importers: [flashPackageImporter],
  });
  return normalize(result.css);
}

// Diff unificado minimalista línea a línea (suficiente para reportar
// mismatches de CSS generado; no requiere dependencias externas).
function unifiedDiff(baseline, compiled) {
  const baseLines = baseline.split('\n');
  const compLines = compiled.split('\n');
  const max = Math.max(baseLines.length, compLines.length);
  const out = [];
  for (let i = 0; i < max; i++) {
    const b = baseLines[i];
    const c = compLines[i];
    if (b !== c) {
      if (b !== undefined) out.push(`- ${b}`);
      if (c !== undefined) out.push(`+ ${c}`);
    }
  }
  return out.length > 0 ? out.join('\n') : null;
}

function runOne(name, entryRelPath, { update }) {
  const baselinePath = join(baselineDir, `${name}.css`);
  const css = compileTarget(entryRelPath);

  if (update || !existsSync(baselinePath)) {
    mkdirSync(baselineDir, { recursive: true });
    writeFileSync(baselinePath, css, 'utf8');
    console.log(
      `[scss-parity] baseline ${update ? 'actualizado' : 'creado (no existía)'}: ${name}`
    );
    return true;
  }

  const baseline = readFileSync(baselinePath, 'utf8');
  const diff = unifiedDiff(baseline, css);
  if (diff) {
    console.error(`[scss-parity] MISMATCH en "${name}" (${entryRelPath}):`);
    console.error(`--- baseline: ${baselinePath}`);
    console.error(`+++ compilado ahora`);
    console.error(diff);
    return false;
  }
  console.log(`[scss-parity] OK: ${name}`);
  return true;
}

function main() {
  const args = process.argv.slice(2);
  const update = args.includes('--update');
  const names = args.filter((arg) => arg !== '--update');

  const targets = loadTargets();
  const selected = names.length > 0 ? names : Object.keys(targets);

  const unknown = selected.filter((name) => !(name in targets));
  if (unknown.length > 0) {
    console.error(`[scss-parity] target(s) desconocido(s): ${unknown.join(', ')}`);
    console.error(`[scss-parity] targets disponibles: ${Object.keys(targets).join(', ')}`);
    process.exit(1);
  }

  let allOk = true;
  for (const name of selected) {
    try {
      const ok = runOne(name, targets[name], { update });
      allOk = allOk && ok;
    } catch (error) {
      console.error(`[scss-parity] ERROR compilando "${name}": ${error.message}`);
      allOk = false;
    }
  }

  process.exit(allOk ? 0 : 1);
}

main();
