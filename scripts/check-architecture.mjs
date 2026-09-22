#!/usr/bin/env node
/**
 * Validador determinista del arquetipo de componente (docs/architecture/component-architecture.md
 * + rules ds-*.md). Cubre lo que un ESLint genérico no atrapa sin una regla local propia, y que
 * hoy solo se detecta si alguien abre el archivo por otra razón:
 *
 *   1. Ningún `index.ts` dentro de `src/` (barrel dentro de una capa)  → ds-component-layers.md, principio 4
 *   2. Ningún archivo de tipos llamado `types.ts` a secas              → ds-types-location.md
 *   3. Ningún archivo con "helper" en el nombre                       → ds-composables-layers.md / ds-naming.md
 *   4. Ningún `export default` en un `.ts` de `src/` (incluido `defaults.ts`) → ds-types-location.md
 *   5. Ninguna clase `gui-*` escrita a mano en `.ts`/`.vue`/`.tsx`     → ds-styles-bem.md
 *
 * Deliberadamente afuera (son juicio, no mecánica — quedan para review humano):
 *   - si el trío de un elemento SFC está completo o tiene archivos de más
 *   - si un composable mezcla lógica pura con reactiva
 *   - si conviene fusionar dos composables en uno
 *
 * Uso:
 *   node scripts/check-architecture.js                        → reporte completo (exit 0)
 *   node scripts/check-architecture.js components/table        → solo ese paquete
 *   node scripts/check-architecture.js <ruta> [<ruta>…]        → N rutas: lo que le pasa lint-staged
 *   node scripts/check-architecture.js --ci [rutas…]           → exit 1 si hay violaciones
 */

import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const PROJECT_ROOT = process.cwd();
const IGNORED_DIRS = new Set([
  'node_modules',
  'dist',
  '.git',
  'coverage',
  'storybook-static',
]);

// --- Predicados puros (testeados en scripts/tests/check-architecture.spec.ts) -------------

/** ds-component-layers.md, principio 4: único barrel permitido = index.ts en la raíz del paquete. */
export function isNestedBarrelFile(fileName) {
  return fileName === 'index.ts';
}

/** ds-types-location.md: el archivo de tipos se nombra `[contexto].type.ts`, nunca `types.ts` a secas. */
export function isBareTypesFile(fileName) {
  return fileName === 'types.ts';
}

/** ds-composables-layers.md / ds-naming.md: "helper" no es una capa reconocida. */
export function hasHelperInName(fileName) {
  const lower = fileName.toLowerCase();
  return (
    /helper/.test(lower) && (lower.endsWith('.ts') || lower.endsWith('.vue'))
  );
}

const EXPORT_DEFAULT_LINE = /^\s*export\s+default\b/;

/**
 * ds-types-location.md: "Ningún archivo de esta capa usa export default, incluido defaults.ts".
 * Devuelve los números de línea (1-based) donde aparece.
 */
export function findExportDefaultLines(source) {
  return source
    .split('\n')
    .map((line, index) => (EXPORT_DEFAULT_LINE.test(line) ? index + 1 : null))
    .filter(lineNumber => lineNumber !== null);
}

const HAND_WRITTEN_GUI_CLASS = /['"`]gui-[\w-]*/;

/**
 * ds-styles-bem.md: las clases salen de `ns.b()/ns.e()/ns.m()/ns.is()` (useNamespace),
 * nunca de un string literal armado a mano. Ignora comentarios de línea/bloque.
 * Devuelve los números de línea (1-based) donde aparece una clase `gui-*` literal.
 */
export function findHandWrittenGuiClassLines(source) {
  return source
    .split('\n')
    .map((line, index) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('//') || trimmed.startsWith('*')) return null;
      return HAND_WRITTEN_GUI_CLASS.test(line) ? index + 1 : null;
    })
    .filter(lineNumber => lineNumber !== null);
}

// --- Recorrido de archivos y CLI -----------------------------------------------------------

function toRelative(absolutePath) {
  return path.relative(PROJECT_ROOT, absolutePath).split(path.sep).join('/');
}

function walk(absoluteDir, onFile) {
  let entries;
  try {
    entries = readdirSync(absoluteDir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    if (entry.name.startsWith('.') || IGNORED_DIRS.has(entry.name)) continue;
    const entryPath = path.join(absoluteDir, entry.name);
    if (entry.isDirectory()) {
      walk(entryPath, onFile);
    } else if (entry.isFile()) {
      onFile(entryPath);
    }
  }
}

function statSyncSafe(p) {
  try {
    return statSync(p);
  } catch {
    return null;
  }
}

function isInsidePackageSrc(absolutePath) {
  return (
    absolutePath.includes(`${path.sep}src${path.sep}`) ||
    path.basename(absolutePath) === 'src'
  );
}

/**
 * Recolecta los archivos a revisar. Sin argumentos, recorre el `src/` de cada
 * paquete de `components/*` y `common/*` (auditoría completa). Con argumentos
 * (el caso de lint-staged y del step de CI, que pasan archivos sueltos), revisa
 * solo esos archivos — o, si alguno es un directorio, lo recorre — sin subir a
 * auditar el paquete entero por un solo archivo tocado.
 */
function collectFilesToCheck(paths) {
  const files = [];
  const onFile = f => {
    if (isInsidePackageSrc(f)) files.push(f);
  };

  if (paths.length === 0) {
    for (const group of ['components', 'common']) {
      const groupDir = path.join(PROJECT_ROOT, group);
      let pkgs;
      try {
        pkgs = readdirSync(groupDir, { withFileTypes: true });
      } catch {
        continue;
      }
      for (const pkg of pkgs) {
        if (!pkg.isDirectory()) continue;
        const src = path.join(groupDir, pkg.name, 'src');
        if (statSyncSafe(src)?.isDirectory()) walk(src, onFile);
      }
    }
    return files;
  }

  for (const inputPath of paths) {
    const absolute = path.resolve(PROJECT_ROOT, inputPath);
    const stat = statSyncSafe(absolute);
    if (!stat) continue;
    if (stat.isDirectory()) {
      walk(absolute, onFile);
    } else if (stat.isFile()) {
      onFile(absolute);
    }
  }
  return files;
}

function checkFile(filePath, relativePath, violations) {
  const fileName = path.basename(filePath);

  if (isNestedBarrelFile(fileName)) {
    violations.push({
      path: relativePath,
      message:
        'barrel `index.ts` dentro de src/ — prohibido por ds-component-layers.md (principio 4). El único barrel permitido es el `index.ts` en la raíz del paquete, fuera de src/.',
    });
  }

  if (isBareTypesFile(fileName)) {
    violations.push({
      path: relativePath,
      message:
        'archivo de tipos llamado "types.ts" a secas — ds-types-location.md pide `[contexto].type.ts`.',
    });
  }

  if (hasHelperInName(fileName)) {
    violations.push({
      path: relativePath,
      message:
        '"helper" en el nombre del archivo — ds-composables-layers.md/ds-naming.md: no es una capa reconocida (es un composable, un util, o ambos mezclados).',
    });
  }

  if (filePath.endsWith('.ts')) {
    const source = readFileSync(filePath, 'utf8');
    for (const lineNumber of findExportDefaultLines(source)) {
      violations.push({
        path: `${relativePath}:${lineNumber}`,
        message:
          '`export default` — ds-types-location.md: "sin excepción, ni siquiera en defaults.ts". Usar export con nombre (ver exports-imports.md).',
      });
    }
  }

  if (/\.(ts|tsx|vue)$/.test(filePath)) {
    const source = readFileSync(filePath, 'utf8');
    for (const lineNumber of findHandWrittenGuiClassLines(source)) {
      violations.push({
        path: `${relativePath}:${lineNumber}`,
        message:
          'clase `gui-*` escrita a mano — ds-styles-bem.md: las clases salen de `ns.b()/ns.e()/ns.m()/ns.is()` (useNamespace), nunca de un string literal.',
      });
    }
  }
}

function runCli() {
  const args = process.argv.slice(2);
  const ciMode = args.includes('--ci');
  const explicitPaths = args.filter(arg => arg !== '--ci');

  const filesToCheck = collectFilesToCheck(explicitPaths);

  if (filesToCheck.length === 0) {
    console.log(
      'check-architecture: nada para revisar (ninguna ruta de entrada cae dentro de un src/ de paquete).',
    );
    process.exit(0);
  }

  const violations = [];
  for (const filePath of filesToCheck) {
    checkFile(filePath, toRelative(filePath), violations);
  }

  if (violations.length === 0) {
    console.log(
      `check-architecture: 0 violaciones en ${filesToCheck.length} archivo(s).`,
    );
    process.exit(0);
  }

  console.log(`check-architecture: ${violations.length} violación(es)\n`);
  for (const { path: p, message } of violations) {
    console.log(`  ${p}\n    ${message}\n`);
  }

  process.exit(ciMode ? 1 : 0);
}

const isMainModule =
  path.resolve(process.argv[1] ?? '') ===
  path.resolve(new URL(import.meta.url).pathname);
if (isMainModule) {
  runCli();
}
