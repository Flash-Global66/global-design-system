#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const packageJsonPath = process.argv[2];

if (!packageJsonPath) {
  console.error('Usage: node scripts/check-package-entrypoints.js <package.json>');
  process.exit(1);
}

const absolutePackageJsonPath = path.resolve(process.cwd(), packageJsonPath);
const packageDir = path.dirname(absolutePackageJsonPath);
const packageJson = JSON.parse(fs.readFileSync(absolutePackageJsonPath, 'utf8'));

const runtimeSourceExtensions = /\.(ts|tsx|vue)$/;
const runtimeFields = ['main', 'module', 'browser', 'unpkg', 'jsdelivr'];
const errors = [];

function normalizeExportTarget(target) {
  if (typeof target === 'string') return [target];
  if (!target || typeof target !== 'object') return [];

  return Object.entries(target)
    .filter(([condition]) => condition !== 'types')
    .flatMap(([, value]) => normalizeExportTarget(value));
}

function assertRuntimeTarget(label, target) {
  if (!target) return;

  if (runtimeSourceExtensions.test(target)) {
    errors.push(`${label} points to source runtime file: ${target}`);
  }

  const targetPath = path.resolve(packageDir, target);
  if (!fs.existsSync(targetPath)) {
    errors.push(`${label} points to missing file: ${target}`);
  }
}

function assertTypesTarget(label, target) {
  if (!target) return;

  if (!target.endsWith('.d.ts')) {
    errors.push(`${label} must point to a .d.ts file: ${target}`);
  }

  const targetPath = path.resolve(packageDir, target);
  if (!fs.existsSync(targetPath)) {
    errors.push(`${label} points to missing file: ${target}`);
  }
}

for (const field of runtimeFields) {
  assertRuntimeTarget(field, packageJson[field]);
}

assertTypesTarget('types', packageJson.types);

if (packageJson.exports) {
  for (const [subpath, target] of Object.entries(packageJson.exports)) {
    for (const runtimeTarget of normalizeExportTarget(target)) {
      assertRuntimeTarget(`exports[${subpath}]`, runtimeTarget);
    }

    if (target && typeof target === 'object' && typeof target.types === 'string') {
      assertTypesTarget(`exports[${subpath}].types`, target.types);
    }
  }
}

if (errors.length > 0) {
  console.error(`Invalid package entrypoints for ${packageJson.name}:`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Package entrypoints are valid for ${packageJson.name}`);
