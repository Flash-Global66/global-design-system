#!/usr/bin/env node
/**
 * Integridad de los estilos que entrega el design system. Cada paquete publica su SCSS fuente vía
 * `exports["./styles.scss"]` y lo compila el consumidor (y Storybook, vía assets/scss/index.scss):
 * ni ESLint, ni Vitest, ni `yarn build` compilan ese entry, así que un `@use` roto solo aparecía al
 * abrir Storybook. Este script lo compila antes del merge:
 *
 *   1. Cada `exports["./styles.scss"]` de components/* y common/* existe y compila, resuelto por
 *      su subpath de paquete (prueba también que el `exports` map resuelve, como en el consumidor)
 *   2. Cada uno de esos paquetes tiene su `@use` en assets/scss/index.scss
 *   3. assets/scss/index.scss compila completo (lo que Storybook hace al arrancar)
 *
 * Compila con el resolver de Vite, el mismo que usa Storybook, incluido el PostCSS del repo.
 *
 * Uso:
 *   node scripts/check-styles.mjs   → exit 1 si algo no compila o falta registrar
 */

import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PROJECT_ROOT = process.cwd();
const PACKAGE_GROUPS = ['components', 'common'];
const STYLES_FILE = 'styles.scss';
const STYLES_EXPORT_KEY = `./${STYLES_FILE}`;
const STORYBOOK_STYLES_ENTRY = 'assets/scss/index.scss';
const VIRTUAL_IMPORTER_PATH = path.join(PROJECT_ROOT, 'check-styles.scss');
const SASS_ERROR_PREFIX = '[sass] ';

/**
 * Avisos de dependencias que salen en cada compilación y no dicen nada del SCSS del repo. Se
 * filtran por prefijo exacto sobre `console.warn`: un error de compilación se lanza, nunca se
 * emite como warning, así que el filtro no puede esconder uno.
 */
const KNOWN_NOISE_WARNING_PREFIXES = ['[baseline-browser-mapping]'];

const USE_RULE = /^\s*@use\s+["']([^"']+)["']/gm;
const BLOCK_COMMENT = /\/\*[\s\S]*?\*\//g;
const LINE_COMMENT = /^\s*\/\/.*$/gm;

// --- Lógica pura (testeada en scripts/tests/check-styles.spec.ts) ---------------------------

/** Devuelve el target de cada `@use` del archivo, ignorando los que están comentados. */
export function parseUseTargets(source) {
  const uncommented = source
    .replace(BLOCK_COMMENT, '')
    .replace(LINE_COMMENT, '');
  return [...uncommented.matchAll(USE_RULE)].map(([, target]) => target);
}

/**
 * Nombre del paquete de un specifier bare (`@scope/nombre/sub/path` → `@scope/nombre`).
 * Devuelve `null` para rutas relativas.
 */
export function getPackageNameFromSpecifier(specifier) {
  if (specifier.startsWith('.')) return null;
  const segments = specifier.split('/');
  return specifier.startsWith('@')
    ? segments.slice(0, 2).join('/')
    : segments[0];
}

/**
 * Paquetes registrados en el index de estilos. Acepta las dos formas vigentes: por subpath
 * (`@flash-global66/g-x/styles.scss`) y legacy por ruta relativa a cualquier archivo del paquete.
 *
 * @param indexDir - carpeta del index, relativa a la raíz del repo y en formato posix
 * @param packages - `{ name, dir }` con `dir` relativo a la raíz y en formato posix
 * @returns nombres de paquete registrados
 */
export function findRegisteredPackageNames({ useTargets, indexDir, packages }) {
  const registered = new Set();
  for (const target of useTargets) {
    const packageName = getPackageNameFromSpecifier(target);
    if (packageName) {
      registered.add(packageName);
      continue;
    }
    const targetPath = path.posix.join(indexDir, target);
    const owner = packages.find(({ dir }) => targetPath.startsWith(`${dir}/`));
    if (owner) registered.add(owner.name);
  }
  return registered;
}

/** Paquetes con `exports["./styles.scss"]` que no aparecen en el index de estilos. */
export function findUnregisteredPackages({ stylePackages, registeredNames }) {
  return stylePackages.filter(({ name }) => !registeredNames.has(name));
}

/**
 * Target de `exports["./styles.scss"]`: `undefined` si el paquete no lo declara y `null` si lo
 * declara con condiciones (objeto), que no son una ruta que se pueda verificar en disco.
 */
export function getStylesExportTarget(packageJson) {
  const target = packageJson.exports?.[STYLES_EXPORT_KEY];
  if (target === undefined) return undefined;
  return typeof target === 'string' ? target : null;
}

/** Mensaje de sass sin el prefijo que le agrega Vite; conserva el frame con la línea del `@use`. */
export function formatSassError(error) {
  const message = String(error?.message ?? error);
  return message.startsWith(SASS_ERROR_PREFIX)
    ? message.slice(SASS_ERROR_PREFIX.length)
    : message;
}

export function isKnownNoiseWarning(firstArgument) {
  return (
    typeof firstArgument === 'string' &&
    KNOWN_NOISE_WARNING_PREFIXES.some(prefix =>
      firstArgument.startsWith(prefix),
    )
  );
}

// --- Compilación y CLI ---------------------------------------------------------------------

function silenceKnownNoiseWarnings() {
  process.env.BROWSERSLIST_IGNORE_OLD_DATA = 'true';
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (!isKnownNoiseWarning(args[0])) originalWarn(...args);
  };
}

function readPackages() {
  return PACKAGE_GROUPS.flatMap(group => {
    const groupDir = path.join(PROJECT_ROOT, group);
    if (!existsSync(groupDir)) return [];
    return readdirSync(groupDir, { withFileTypes: true })
      .filter(entry => entry.isDirectory())
      .map(entry => path.join(groupDir, entry.name, 'package.json'))
      .filter(packageJsonPath => existsSync(packageJsonPath))
      .map(packageJsonPath => {
        const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
        const dir = path.relative(PROJECT_ROOT, path.dirname(packageJsonPath));
        return {
          name: packageJson.name,
          dir: dir.split(path.sep).join('/'),
          stylesTarget: getStylesExportTarget(packageJson),
        };
      });
  });
}

function toEntryLabel({ dir, stylesTarget }) {
  return stylesTarget
    ? path.posix.join(dir, stylesTarget)
    : `${dir} (exports condicional)`;
}

async function compileScss(source, { preprocessCSS, viteConfig }) {
  try {
    await preprocessCSS(source, VIRTUAL_IMPORTER_PATH, viteConfig);
    return null;
  } catch (error) {
    return formatSassError(error);
  }
}

async function checkPackageEntry(stylePackage, compiler) {
  const entry = toEntryLabel(stylePackage);
  const { name, dir, stylesTarget } = stylePackage;

  if (stylesTarget && !existsSync(path.join(PROJECT_ROOT, dir, stylesTarget))) {
    return {
      name,
      entry,
      message: `exports["${STYLES_EXPORT_KEY}"] apunta a un archivo que no existe: ${stylesTarget}`,
    };
  }

  const subpath = `${name}/${STYLES_FILE}`;
  const sassError = await compileScss(`@use "${subpath}";`, compiler);
  return (
    sassError && {
      name,
      entry,
      message: `no compila (@use "${subpath}"):\n${sassError}`,
    }
  );
}

function checkRegistration(stylePackages, packages) {
  const indexSource = readFileSync(
    path.join(PROJECT_ROOT, STORYBOOK_STYLES_ENTRY),
    'utf8',
  );
  const registeredNames = findRegisteredPackageNames({
    useTargets: parseUseTargets(indexSource),
    indexDir: path.posix.dirname(STORYBOOK_STYLES_ENTRY),
    packages,
  });

  return findUnregisteredPackages({ stylePackages, registeredNames }).map(
    stylePackage => ({
      name: stylePackage.name,
      entry: toEntryLabel(stylePackage),
      message: `no está registrado en ${STORYBOOK_STYLES_ENTRY}: Storybook no carga sus estilos. Agregar: @use "${stylePackage.name}/${STYLES_FILE}" as *;`,
    }),
  );
}

async function checkStorybookEntry(compiler) {
  const sassError = await compileScss(
    `@use "./${STORYBOOK_STYLES_ENTRY}";`,
    compiler,
  );
  return (
    sassError && {
      name: 'Storybook',
      entry: STORYBOOK_STYLES_ENTRY,
      message: `no compila:\n${sassError}`,
    }
  );
}

function indent(text, spaces) {
  const padding = ' '.repeat(spaces);
  return text
    .split('\n')
    .map(line => `${padding}${line}`)
    .join('\n');
}

function printReport({ failures, stylePackages, elapsedMs }) {
  const elapsed = `${(elapsedMs / 1000).toFixed(1)} s`;

  if (failures.length === 0) {
    console.log(
      `check-styles: ${stylePackages.length} paquete(s) con ${STYLES_EXPORT_KEY} compilan y están registrados; ${STORYBOOK_STYLES_ENTRY} compila (${elapsed}).`,
    );
    return;
  }

  console.log(`check-styles: ${failures.length} fallo(s) (${elapsed})\n`);
  for (const { name, entry, message } of failures) {
    console.log(`  ${name} → ${entry}\n${indent(message, 4)}\n`);
  }
}

async function runCli() {
  const startedAt = performance.now();
  silenceKnownNoiseWarnings();

  // Import diferido: esbuild (dependencia de Vite) no carga bajo el entorno jsdom de Vitest, y la
  // spec solo necesita la lógica pura de este módulo.
  const { preprocessCSS, resolveConfig } = await import('vite');
  const viteConfig = await resolveConfig(
    {
      configFile: false,
      css: {
        preprocessorOptions: {
          scss: { silenceDeprecations: ['legacy-js-api'] },
        },
      },
    },
    'serve',
  );
  const compiler = { preprocessCSS, viteConfig };

  const packages = readPackages();
  const stylePackages = packages.filter(
    ({ stylesTarget }) => stylesTarget !== undefined,
  );

  const failures = [];
  for (const stylePackage of stylePackages) {
    const failure = await checkPackageEntry(stylePackage, compiler);
    if (failure) failures.push(failure);
  }
  failures.push(...checkRegistration(stylePackages, packages));
  const storybookFailure = await checkStorybookEntry(compiler);
  if (storybookFailure) failures.push(storybookFailure);

  printReport({
    failures,
    stylePackages,
    elapsedMs: performance.now() - startedAt,
  });
  process.exit(failures.length === 0 ? 0 : 1);
}

const isMainModule =
  path.resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url);
if (isMainModule) {
  runCli();
}
