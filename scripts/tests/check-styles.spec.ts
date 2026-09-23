/**
 * Unit tests de la lógica pura de scripts/check-styles.mjs: qué `@use` registra el index de
 * estilos de Storybook, qué paquetes con `exports["./styles.scss"]` quedan afuera, y cómo se
 * reporta un error de sass. La compilación real no se testea acá: la cubre el propio script.
 */
import { describe, it, expect } from 'vitest';
import {
  parseUseTargets,
  getPackageNameFromSpecifier,
  findRegisteredPackageNames,
  findUnregisteredPackages,
  getStylesExportTarget,
  formatSassError,
  isKnownNoiseWarning,
} from '../check-styles.mjs';

const PACKAGES = [
  { name: '@flash-global66/g-input', dir: 'components/input' },
  { name: '@flash-global66/g-input-number', dir: 'components/input-number' },
  { name: '@flash-global66/g-table', dir: 'components/table' },
];

describe('parseUseTargets', () => {
  it('returns the target of every @use, with either quote style', () => {
    const source = [
      '@use "@flash-global66/g-table/styles.scss" as *;',
      "@use '../../components/link/src/link.styles.scss' as *;",
    ].join('\n');

    expect(parseUseTargets(source)).toEqual([
      '@flash-global66/g-table/styles.scss',
      '../../components/link/src/link.styles.scss',
    ]);
  });

  it('ignores @use lines inside line and block comments', () => {
    const source = [
      '// @use "@flash-global66/g-old/styles.scss" as *;',
      '/* @use "@flash-global66/g-older/styles.scss" as *; */',
      '@use "@flash-global66/g-table/styles.scss" as *;',
    ].join('\n');

    expect(parseUseTargets(source)).toEqual([
      '@flash-global66/g-table/styles.scss',
    ]);
  });

  it('ignores rules that are not @use', () => {
    const source = [
      '@forward "tokens";',
      '* {',
      '  @apply font-montserrat;',
      '}',
    ].join('\n');

    expect(parseUseTargets(source)).toEqual([]);
  });
});

describe('getPackageNameFromSpecifier', () => {
  it('keeps scope and name of a scoped subpath', () => {
    expect(
      getPackageNameFromSpecifier('@flash-global66/g-table/styles.scss'),
    ).toBe('@flash-global66/g-table');
  });

  it('keeps the first segment of an unscoped subpath', () => {
    expect(getPackageNameFromSpecifier('some-lib/dist/styles.scss')).toBe(
      'some-lib',
    );
  });

  it('returns null for a relative path', () => {
    expect(
      getPackageNameFromSpecifier('../../components/link/src/link.styles.scss'),
    ).toBeNull();
  });
});

describe('findRegisteredPackageNames', () => {
  it('registers a package by its subpath', () => {
    const registered = findRegisteredPackageNames({
      useTargets: ['@flash-global66/g-table/styles.scss'],
      indexDir: 'assets/scss',
      packages: PACKAGES,
    });

    expect([...registered]).toEqual(['@flash-global66/g-table']);
  });

  it('registers a package by a legacy relative path to any of its files', () => {
    const registered = findRegisteredPackageNames({
      useTargets: [
        '../../components/input-number/src/input-number.styles.scss',
      ],
      indexDir: 'assets/scss',
      packages: PACKAGES,
    });

    expect([...registered]).toEqual(['@flash-global66/g-input-number']);
  });

  it('does not confuse a package with another whose dir starts the same', () => {
    const registered = findRegisteredPackageNames({
      useTargets: [
        '../../components/input-number/src/input-number.styles.scss',
      ],
      indexDir: 'assets/scss',
      packages: PACKAGES,
    });

    expect(registered.has('@flash-global66/g-input')).toBe(false);
  });

  it('ignores a relative path outside every package', () => {
    const registered = findRegisteredPackageNames({
      useTargets: ['./local-overrides.scss'],
      indexDir: 'assets/scss',
      packages: PACKAGES,
    });

    expect(registered.size).toBe(0);
  });
});

describe('findUnregisteredPackages', () => {
  it('returns the style packages missing from the registered set', () => {
    const stylePackages = PACKAGES;
    const registeredNames = new Set([
      '@flash-global66/g-input',
      '@flash-global66/g-table',
    ]);

    expect(
      findUnregisteredPackages({ stylePackages, registeredNames }),
    ).toEqual([
      {
        name: '@flash-global66/g-input-number',
        dir: 'components/input-number',
      },
    ]);
  });

  it('returns nothing when every package is registered', () => {
    const registeredNames = new Set(PACKAGES.map(({ name }) => name));

    expect(
      findUnregisteredPackages({ stylePackages: PACKAGES, registeredNames }),
    ).toEqual([]);
  });
});

describe('getStylesExportTarget', () => {
  it('returns the path declared in exports["./styles.scss"]', () => {
    const packageJson = {
      exports: { './styles.scss': './src/Table/table.style.scss' },
    };

    expect(getStylesExportTarget(packageJson)).toBe(
      './src/Table/table.style.scss',
    );
  });

  it('returns undefined when the package declares no styles export', () => {
    expect(
      getStylesExportTarget({ exports: { '.': './index.ts' } }),
    ).toBeUndefined();
    expect(getStylesExportTarget({ main: 'index.ts' })).toBeUndefined();
  });

  it('returns null for a conditional export, which is declared but not a single path', () => {
    const packageJson = {
      exports: { './styles.scss': { sass: './src/a.scss' } },
    };

    expect(getStylesExportTarget(packageJson)).toBeNull();
  });
});

describe('formatSassError', () => {
  it('strips the [sass] prefix Vite adds and keeps the frame with the failing @use', () => {
    const error = new Error(
      "[sass] Can't find stylesheet to import.\n  ╷\n4 │ @use './missing.scss' as *;",
    );

    expect(formatSassError(error)).toBe(
      "Can't find stylesheet to import.\n  ╷\n4 │ @use './missing.scss' as *;",
    );
  });

  it('leaves a message without the prefix untouched', () => {
    expect(formatSassError(new Error('Undefined mixin.'))).toBe(
      'Undefined mixin.',
    );
  });
});

describe('isKnownNoiseWarning', () => {
  it('matches the baseline-browser-mapping staleness warning', () => {
    expect(
      isKnownNoiseWarning(
        '[baseline-browser-mapping] The data in this module is over two months old.',
      ),
    ).toBe(true);
  });

  it('does not match a sass warning or a non-string argument', () => {
    expect(isKnownNoiseWarning('Deprecation Warning: slash-div')).toBe(false);
    expect(isKnownNoiseWarning(new Error('[baseline-browser-mapping]'))).toBe(
      false,
    );
  });
});
