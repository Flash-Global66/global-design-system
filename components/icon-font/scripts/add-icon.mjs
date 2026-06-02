#!/usr/bin/env node
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const ICON_SETS_PATH = join(ROOT, 'src/icon-sets.ts');

const WEIGHT_TO_PKG = {
  solid:   '@fortawesome/pro-solid-svg-icons',
  regular: '@fortawesome/pro-regular-svg-icons',
  light:   '@fortawesome/pro-light-svg-icons',
  duotone: '@fortawesome/pro-duotone-svg-icons',
  brands:  '@fortawesome/free-brands-svg-icons',
  kit:     '@awesome.me/kit-3edc55bdad/icons',
};

function usage() {
  console.error('Usage: yarn icon:add "<weight> <icon-name>"');
  console.error('Weights: solid | regular | light | duotone | brands | kit');
  console.error('Example: yarn icon:add "solid coffee"');
  process.exit(1);
}

function kebabToCamel(name) {
  return name.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}
function toExportName(iconName) {
  const camel = kebabToCamel(iconName);
  return 'fa' + camel.charAt(0).toUpperCase() + camel.slice(1);
}

function parseArgs() {
  const arg = process.argv.slice(2).join(' ').trim();
  if (!arg) usage();
  const parts = arg.split(/\s+/);
  if (parts.length !== 2) usage();
  const [weight, iconName] = parts;
  if (!WEIGHT_TO_PKG[weight]) {
    console.error(`✗ Unknown weight "${weight}". Allowed: ${Object.keys(WEIGHT_TO_PKG).join(', ')}`);
    process.exit(1);
  }
  return { weight, iconName };
}

function iconExistsInPackage(weight, iconName) {
  const pkg = WEIGHT_TO_PKG[weight];
  let mod;
  try {
    mod = require(pkg);
  } catch (err) {
    throw new Error(`Cannot resolve "${pkg}". Install it locally with \`yarn add -D ${pkg}\` before running this command.`);
  }
  const lookup = weight === 'kit' ? mod.fak : mod;
  const exportName = toExportName(iconName);
  return Boolean(lookup?.[exportName]?.icon);
}

const CATEGORY_KEY = {
  solid: 'solid', regular: 'regular', light: 'light',
  duotone: 'duotone', brands: 'brands', kit: 'kit',
};

async function patchIconSets(weight, iconName, originalSource) {
  const key = CATEGORY_KEY[weight];
  const re = new RegExp(`(${key}\\s*:\\s*\\[)([\\s\\S]*?)(\\]\\s*as\\s*const)`, 'm');
  const match = originalSource.match(re);
  if (!match) throw new Error(`Cannot find icon-sets[${key}] in ${ICON_SETS_PATH}`);
  const body = match[2];
  if (new RegExp(`"${iconName}"`).test(body)) {
    return { changed: false, source: originalSource };
  }
  const trimmed = body.replace(/[\s,]+$/, '');
  const indentMatch = trimmed.match(/\n(\s+)"[^"]+"/);
  const indent = indentMatch ? indentMatch[1] : '    ';
  const newBody = `${trimmed},\n${indent}"${iconName}",\n  `;
  const updated = originalSource.replace(re, (_, open, _body, close) => `${open}${newBody}${close}`);
  await writeFile(ICON_SETS_PATH, updated, 'utf8');
  return { changed: true, source: updated };
}

async function main() {
  const { weight, iconName } = parseArgs();
  console.log(`▶ Adding ${weight} ${iconName}`);

  if (!iconExistsInPackage(weight, iconName)) {
    console.error(`✗ Icon "${iconName}" not found in ${WEIGHT_TO_PKG[weight]}. Check the name or weight.`);
    process.exit(1);
  }

  const original = await readFile(ICON_SETS_PATH, 'utf8');
  const { changed } = await patchIconSets(weight, iconName, original);
  if (!changed) {
    console.log(`  • "${iconName}" already present in icon-sets[${weight}], regenerating only`);
  } else {
    console.log(`  • icon-sets.ts patched`);
  }

  const result = spawnSync(process.execPath, [join(__dirname, 'extract-icons.mjs')], { stdio: 'inherit' });
  if (result.status !== 0) {
    console.error('✗ Extraction failed — reverting icon-sets.ts');
    await writeFile(ICON_SETS_PATH, original, 'utf8');
    process.exit(1);
  }
}

main().catch(async (err) => {
  console.error('\n✗ add-icon failed:', err.message);
  process.exit(1);
});
