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
 *   4. Todo paquete con SCSS propio (en su raíz o bajo src/) declara `exports["./styles.scss"]`,
 *      salvo los de MISSING_STYLES_EXPORT_ALLOWLIST; una entrada que ya no hace falta es un aviso
 *
 * Compila con el resolver de Vite, el mismo que usa Storybook, incluido el PostCSS del repo.
 *
 * Uso:
 *   node scripts/check-styles.mjs   → exit 1 si algo no compila, falta registrar o falta exportar
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
const SCSS_EXTENSION = '.scss';
const OWN_STYLES_SOURCE_DIR = 'src';
const NON_SOURCE_DIRS = ['node_modules', 'dist'];

/**
 * Paquetes con SCSS propio que todavía no declaran `exports["./styles.scss"]`. No es para paquetes
 * nuevos: cada entrada sale cuando su paquete lo declara, y el script avisa cuando una sobra.
 */
export const MISSING_STYLES_EXPORT_ALLOWLIST = [
  {
    name: '@flash-global66/g-config-provider',
    reason:
      'expone sus estilos como ./style (config.styles.scss); se estandariza a ./styles.scss',
  },
  {
    name: '@flash-global66/g-radio-group',
    reason:
      'radio-group.styles.scss solo se alcanza por ./*; se estandariza a ./styles.scss',
  },
  {
    name: '@flash-global66/g-badge',
    reason:
      'expone sus estilos como ./badge.styles.scss; se estandariza a ./styles.scss',
  },
  {
    name: '@flash-global66/g-popover',
    reason:
      'popover.styles.scss solo se alcanza por ./*; se estandariza a ./styles.scss',
  },
  {
    name: '@flash-global66/g-skeleton',
    reason:
      'skeleton.styles.scss y skeleton-item.styles.scss solo se alcanzan por ./*; se estandariza a un ./styles.scss que agregue ambos',
  },
  {
    name: '@flash-global66/g-input-code',
    reason:
      'input-code.styles.scss solo se alcanza por ./*; se estandariza a ./styles.scss',
  },
  {
    name: '@flash-global66/g-overlay',
    reason:
      'overlay.styles.scss solo se alcanza por ./*; se estandariza a ./styles.scss',
  },
  {
    name: '@flash-global66/g-menu',
    reason:
      'menu.styles.scss solo se alcanza por ./*; se estandariza a ./styles.scss',
  },
  {
    name: '@flash-global66/g-alert',
    reason:
      'alert.styles.scss es un placeholder sin uso (solo .prueba) que no carga nadie; hay que borrarlo o exportarlo',
  },
  {
    name: '@flash-global66/g-button-card',
    reason:
      'button-card.styles.scss no lo carga nadie (el .vue trae su propio <style scoped>); hay que borrarlo o exportarlo',
  },
  {
    name: '@flash-global66/g-form-item',
    reason:
      'form-item.styles.scss solo se alcanza por ./* y no está en assets/scss/index.scss; hay que exportarlo y registrarlo',
  },
];

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

/**
 * Si un `.scss` es estilo propio del paquete: está en su raíz (layout legacy) o bajo `src/`
 * (arquetipo). Deja afuera `styles/`, donde common/g-utils publica tokens y mixins por sus propios
 * subpaths, que se consumen con `@use` y no son una hoja de estilos del paquete.
 *
 * @param relativePath - ruta relativa a la carpeta del paquete, en formato posix
 */
export function isOwnStylesPath(relativePath) {
  if (!relativePath.endsWith(SCSS_EXTENSION)) return false;
  const segments = relativePath.split('/');
  if (segments.some(segment => NON_SOURCE_DIRS.includes(segment))) {
    return false;
  }
  return segments.length === 1 || segments[0] === OWN_STYLES_SOURCE_DIR;
}

/** Paquetes con SCSS propio que no declaran `exports["./styles.scss"]` ni están en la allowlist. */
export function findPackagesMissingStylesExport({ packages, allowlist }) {
  const allowlistedNames = new Set(allowlist.map(({ name }) => name));
  return packages.filter(
    ({ name, stylesTarget, ownStylesFiles }) =>
      ownStylesFiles.length > 0 &&
      stylesTarget === undefined &&
      !allowlistedNames.has(name),
  );
}

/**
 * Entradas de la allowlist que ya no hacen falta: su paquete ya declara `exports["./styles.scss"]`,
 * ya no tiene SCSS propio, o no existe.
 */
export function findStaleAllowlistEntries({ packages, allowlist }) {
  return allowlist.filter(({ name }) => {
    const allowlistedPackage = packages.find(
      stylePackage => stylePackage.name === name,
    );
    return (
      !allowlistedPackage ||
      allowlistedPackage.stylesTarget !== undefined ||
      allowlistedPackage.ownStylesFiles.length === 0
    );
  });
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

function listOwnStylesFiles(packageDir) {
  const rootFiles = readdirSync(packageDir, { withFileTypes: true })
    .filter(entry => entry.isFile())
    .map(entry => entry.name);
  const sourceDir = path.join(packageDir, OWN_STYLES_SOURCE_DIR);
  const sourceFiles = existsSync(sourceDir)
    ? readdirSync(sourceDir, { recursive: true }).map(file =>
        path.posix.join(OWN_STYLES_SOURCE_DIR, file.split(path.sep).join('/')),
      )
    : [];
  return [...rootFiles, ...sourceFiles].filter(isOwnStylesPath);
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
        const packageDir = path.dirname(packageJsonPath);
        const dir = path.relative(PROJECT_ROOT, packageDir);
        return {
          name: packageJson.name,
          dir: dir.split(path.sep).join('/'),
          stylesTarget: getStylesExportTarget(packageJson),
          ownStylesFiles: listOwnStylesFiles(packageDir),
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

function checkMissingStylesExports(packages) {
  return findPackagesMissingStylesExport({
    packages,
    allowlist: MISSING_STYLES_EXPORT_ALLOWLIST,
  }).map(({ name, dir, ownStylesFiles }) => ({
    name,
    entry: dir,
    message: `tiene SCSS propio (${ownStylesFiles.join(', ')}) pero no declara exports["${STYLES_EXPORT_KEY}"]: declararlo en su package.json apuntando al .style.scss (o .styles.scss) raíz del paquete, y registrarlo en ${STORYBOOK_STYLES_ENTRY}.`,
  }));
}

function checkStaleAllowlistEntries(packages) {
  return findStaleAllowlistEntries({
    packages,
    allowlist: MISSING_STYLES_EXPORT_ALLOWLIST,
  }).map(({ name, reason }) => ({
    name,
    entry: 'MISSING_STYLES_EXPORT_ALLOWLIST',
    message: `la entrada sobra: el paquete ya declara exports["${STYLES_EXPORT_KEY}"] (o ya no tiene SCSS propio). Borrarla de scripts/check-styles.mjs.\nMotivo registrado: ${reason}`,
  }));
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

function printFindings(findings) {
  for (const { name, entry, message } of findings) {
    console.log(`  ${name} → ${entry}\n${indent(message, 4)}\n`);
  }
}

function printReport({ failures, warnings, stylePackages, elapsedMs }) {
  const elapsed = `${(elapsedMs / 1000).toFixed(1)} s`;

  if (failures.length === 0) {
    console.log(
      `check-styles: ${stylePackages.length} paquete(s) con ${STYLES_EXPORT_KEY} compilan y están registrados; ${STORYBOOK_STYLES_ENTRY} compila; ningún paquete con SCSS propio queda sin exportarlo fuera de la allowlist (${elapsed}).`,
    );
  } else {
    console.log(`check-styles: ${failures.length} fallo(s) (${elapsed})\n`);
    printFindings(failures);
  }

  if (warnings.length > 0) {
    console.log(`\ncheck-styles: ${warnings.length} aviso(s)\n`);
    printFindings(warnings);
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
  failures.push(...checkMissingStylesExports(packages));

  printReport({
    failures,
    warnings: checkStaleAllowlistEntries(packages),
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
