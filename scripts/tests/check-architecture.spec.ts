/**
 * Unit tests de los predicados deterministas de scripts/check-architecture.js —
 * las 5 reglas mecánicas del arquetipo (docs/architecture/component-architecture.md
 * + rules ds-*.md) que un ESLint genérico no atrapa sin una regla local propia.
 */
import { describe, it, expect } from 'vitest';
import {
  isNestedBarrelFile,
  isBareTypesFile,
  hasHelperInName,
  findExportDefaultLines,
  findHandWrittenGuiClassLines,
} from '../check-architecture.js';

describe('isNestedBarrelFile', () => {
  it('flags any index.ts (el único permitido vive en la raíz del paquete, fuera de src/)', () => {
    expect(isNestedBarrelFile('index.ts')).toBe(true);
  });

  it('ignores index.vue — es el elemento SFC, no un barrel', () => {
    expect(isNestedBarrelFile('index.vue')).toBe(false);
  });

  it('ignores a regular composable file', () => {
    expect(isNestedBarrelFile('useTableColumn.ts')).toBe(false);
  });
});

describe('isBareTypesFile', () => {
  it('flags a file literally named types.ts', () => {
    expect(isBareTypesFile('types.ts')).toBe(true);
  });

  it('ignores a file named with its context, per ds-types-location.md', () => {
    expect(isBareTypesFile('cellRenderer.type.ts')).toBe(false);
  });
});

describe('hasHelperInName', () => {
  it('flags store/helper.ts', () => {
    expect(hasHelperInName('helper.ts')).toBe(true);
  });

  it('flags a *-helper.ts suffix', () => {
    expect(hasHelperInName('utils-helper.ts')).toBe(true);
  });

  it('is case-insensitive', () => {
    expect(hasHelperInName('Helper.ts')).toBe(true);
  });

  it('ignores a filename that legitimately contains the substring in another word', () => {
    // ninguna palabra real del repo cae en este caso, pero el predicado no debe
    // depender de límites de palabra que rompan con sufijos compuestos
    expect(hasHelperInName('useTableColumn.ts')).toBe(false);
  });

  it('only applies to .ts/.vue files', () => {
    expect(hasHelperInName('helper.md')).toBe(false);
  });
});

describe('findExportDefaultLines', () => {
  it('flags a top-level export default', () => {
    const source = [
      'import { ref } from "vue";',
      '',
      'export default function useThing() {}',
    ].join('\n');

    expect(findExportDefaultLines(source)).toEqual([3]);
  });

  it('flags export default even in the EP-derived defaults.ts exception', () => {
    // ds-types-location.md: la excepción de defaults.ts cubre DÓNDE vive el
    // contrato, no CÓMO se exporta — sigue exigiendo export con nombre.
    const source = [
      'export interface TableProps {',
      '  data: unknown[];',
      '}',
      '',
      'export default {',
      '  data: { type: Array },',
      '};',
    ].join('\n');

    expect(findExportDefaultLines(source)).toEqual([5]);
  });

  it('reports every occurrence, with 1-based line numbers', () => {
    const source = [
      'export default {};',
      'const x = 1;',
      'export default x;',
    ].join('\n');

    expect(findExportDefaultLines(source)).toEqual([1, 3]);
  });

  it('ignores a named export', () => {
    const source = 'export const tableProps = {};';

    expect(findExportDefaultLines(source)).toEqual([]);
  });

  it('ignores export default mentioned inside a string, since it never starts the line', () => {
    const source = '  const msg = "no uses export default acá";';

    expect(findExportDefaultLines(source)).toEqual([]);
  });
});

describe('findHandWrittenGuiClassLines', () => {
  it('flags a hand-written gui- class string', () => {
    const source = "return h('div', { class: 'gui-table-cell-select' });";

    expect(findHandWrittenGuiClassLines(source)).toEqual([1]);
  });

  it('flags it regardless of quote style', () => {
    const source = [
      'h("div", { class: "gui-table-cell-input" })',
      "h('span', { class: `gui-table-cell-input-error` })",
    ].join('\n');

    expect(findHandWrittenGuiClassLines(source)).toEqual([1, 2]);
  });

  it('ignores a line-comment even if it mentions a gui- class', () => {
    const source = "  // legacy: solía ser 'gui-table-cell-select'";

    expect(findHandWrittenGuiClassLines(source)).toEqual([]);
  });

  it('ignores classes that come from useNamespace (ns.b()/ns.e()/ns.m())', () => {
    const source = [
      "const ns = useNamespace('table');",
      "const classes = [ns.b(), ns.e('cell'), ns.m('sm')];",
    ].join('\n');

    expect(findHandWrittenGuiClassLines(source)).toEqual([]);
  });
});
