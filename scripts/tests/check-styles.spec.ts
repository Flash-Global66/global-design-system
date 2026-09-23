/**
 * Unit tests de la lógica pura de scripts/check-styles.mjs: qué `@use` registra el index de
 * estilos de Storybook, qué paquetes con `exports["./styles.scss"]` quedan afuera, qué paquetes con
 * SCSS propio no lo exportan, qué `@use` apuntan a un subpath que su paquete no declara, y cómo se
 * reporta un error de sass. La compilación real no se testea acá: la cubre el propio script.
 */
import { describe, it, expect } from 'vitest';
import {
  parseUseTargets,
  getPackageNameFromSpecifier,
  findRegisteredPackageNames,
  findUnregisteredPackages,
  getStylesExportTarget,
  declaresExportsSubpath,
  findUndeclaredSubpathError,
  isOwnStylesPath,
  findPackagesMissingStylesExport,
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

describe('declaresExportsSubpath', () => {
  const EXPORTS = {
    '.': './index.ts',
    './styles.scss': './badge.styles.scss',
    './styles/*.scss': './src/styles/*.scss',
    './legacy/': './legacy/',
  };

  it('matches an exact subpath key', () => {
    expect(declaresExportsSubpath(EXPORTS, './styles.scss')).toBe(true);
    expect(declaresExportsSubpath(EXPORTS, '.')).toBe(true);
  });

  it('matches a wildcard pattern and a legacy folder key', () => {
    expect(declaresExportsSubpath(EXPORTS, './styles/tokens.scss')).toBe(true);
    expect(declaresExportsSubpath(EXPORTS, './legacy/a.scss')).toBe(true);
  });

  it('rejects a subpath no key declares, including an empty wildcard match', () => {
    expect(declaresExportsSubpath(EXPORTS, './nope.scss')).toBe(false);
    expect(declaresExportsSubpath(EXPORTS, './styles/.scss')).toBe(false);
  });

  it('treats a string or conditions-only exports as declaring only "."', () => {
    expect(declaresExportsSubpath('./index.ts', '.')).toBe(true);
    expect(declaresExportsSubpath('./index.ts', './styles.scss')).toBe(false);
    expect(
      declaresExportsSubpath({ import: './index.js' }, './styles.scss'),
    ).toBe(false);
  });
});

describe('findUndeclaredSubpathError', () => {
  const BADGE = {
    name: '@flash-global66/g-badge',
    dir: 'components/badge',
    exports: {
      '.': './index.ts',
      './badge.styles.scss': './badge.styles.scss',
    },
  };

  it('explains a @use whose package does not declare the subpath', () => {
    expect(
      findUndeclaredSubpathError({
        specifier: '@flash-global66/g-badge/styles.scss',
        packages: [BADGE],
      }),
    ).toBe(
      '@use "@flash-global66/g-badge/styles.scss" no resuelve: @flash-global66/g-badge no declara exports["./styles.scss"] en components/badge/package.json',
    );
  });

  it('returns null for a declared subpath', () => {
    expect(
      findUndeclaredSubpathError({
        specifier: '@flash-global66/g-badge/badge.styles.scss',
        packages: [BADGE],
      }),
    ).toBeNull();
  });

  it('leaves relative paths, external packages and packages without exports to Vite', () => {
    const withoutExports = { ...BADGE, exports: undefined };

    expect(
      findUndeclaredSubpathError({ specifier: './a.scss', packages: [BADGE] }),
    ).toBeNull();
    expect(
      findUndeclaredSubpathError({
        specifier: 'element-plus/theme-chalk/index.scss',
        packages: [BADGE],
      }),
    ).toBeNull();
    expect(
      findUndeclaredSubpathError({
        specifier: '@flash-global66/g-badge/styles.scss',
        packages: [withoutExports],
      }),
    ).toBeNull();
  });
});

describe('isOwnStylesPath', () => {
  it('accepts a .scss at the package root (legacy layout)', () => {
    expect(isOwnStylesPath('badge.styles.scss')).toBe(true);
  });

  it('accepts a .scss anywhere under src/ (archetype layout)', () => {
    expect(isOwnStylesPath('src/Table/table.style.scss')).toBe(true);
  });

  it('rejects the shared partials a package publishes under styles/', () => {
    expect(isOwnStylesPath('styles/mixins.scss')).toBe(false);
  });

  it('rejects files under node_modules or dist, and non-scss files', () => {
    expect(isOwnStylesPath('src/node_modules/lib/a.scss')).toBe(false);
    expect(isOwnStylesPath('src/dist/a.scss')).toBe(false);
    expect(isOwnStylesPath('src/Table/Table.vue')).toBe(false);
  });
});

const TABLE_PACKAGE = {
  name: '@flash-global66/g-table',
  stylesTarget: './src/Table/table.style.scss',
  ownStylesFiles: ['src/Table/table.style.scss'],
};
const BADGE_PACKAGE = {
  name: '@flash-global66/g-badge',
  stylesTarget: undefined,
  ownStylesFiles: ['badge.styles.scss'],
};
const HOOKS_PACKAGE = {
  name: '@flash-global66/g-hooks',
  stylesTarget: undefined,
  ownStylesFiles: [],
};

describe('findPackagesMissingStylesExport', () => {
  it('flags a package with its own scss and no styles export', () => {
    expect(
      findPackagesMissingStylesExport([TABLE_PACKAGE, BADGE_PACKAGE]),
    ).toEqual([BADGE_PACKAGE]);
  });

  it('ignores a package without scss of its own', () => {
    expect(findPackagesMissingStylesExport([HOOKS_PACKAGE])).toEqual([]);
  });

  it('does not flag a package with a conditional styles export', () => {
    const conditionalPackage = { ...BADGE_PACKAGE, stylesTarget: null };

    expect(findPackagesMissingStylesExport([conditionalPackage])).toEqual([]);
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
