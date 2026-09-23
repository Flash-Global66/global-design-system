# Arquitectura Canónica de Componentes

**Última actualización:** Septiembre 2026
**Responsable:** Equipo de Diseño y Desarrollo

---

## 1. Por qué este patrón

El Design System es una **librería publicable** (`@flash-global66/g-*`), no una aplicación. Eso impone restricciones distintas a las de un proyecto Vue normal:

- El barrel `index.ts` es **obligatorio**: es el contrato de entrada del paquete npm. Mover archivos internos de `src/` nunca es un breaking change mientras `index.ts` mantenga sus exports.
- Los estilos se distribuyen como **SCSS fuente**: el `<style lang="scss" src="...">` en el SFC conecta los estilos al pipeline de compilación del consumidor (Vite los procesa directamente, sin paso de build previo en el DS).
- Las **clases CSS** (`gui-button`, `gui-button--variant-primary`, `is-disabled`) son un contrato con los consumidores en producción y no pueden cambiar sin una migración coordinada.
- Cada paquete se publica y versiona **por su cuenta** (versionado independiente vía Conventional Commits) — un cambio en un paquete no obliga a re-versionar los demás.

---

## 2. Estructura canónica de carpetas

Un paquete es **simple** (un solo elemento visual, ej. `g-inline`) o **complejo** (un elemento raíz con familia de subcomponentes, ej. `g-table`). La pregunta que decide cuál es: ¿el paquete tiene más de un elemento visual, o algún estado que dos o más de sus elementos necesitan compartir?

### Simple — un solo elemento

```
components/inline/
├── index.ts                         # barrel público obligatorio
├── package.json
├── vite.config.ts
├── tsconfig.json
├── CHANGELOG.md
├── src/
│   ├── Inline/                      # PascalCase — carpeta del elemento
│   │   ├── index.vue                # template puro + <style src="...">
│   │   ├── useInline.ts             # lógica reactiva del elemento
│   │   └── inline.style.scss        # estilos BEM (si el elemento necesita CSS propio)
│   ├── constants/
│   │   └── inline.constant.ts       # objeto de props y emits
│   └── types/
│       └── inline.type.ts           # tipos con nombre del paquete
└── tests/                           # espeja src/, en la raíz del paquete
    └── Inline/
        └── useInline.spec.ts
```

### Complejo — elemento raíz + familia de subcomponentes

```
components/table/
├── index.ts
├── package.json
├── vite.config.ts
├── tsconfig.json
├── CHANGELOG.md
├── src/
│   ├── Table/                       # elemento raíz
│   │   ├── index.vue                # ┐
│   │   ├── useTable.ts              # ├ en la raíz de la carpeta, solo el trío
│   │   ├── table.style.scss         # ┘ agrega con @use los .style.scss de los subcomponentes
│   │   ├── composables/             # use*.ts que solo usa Table (useKeyRender.ts, useStyle.ts)
│   │   ├── constants/               # table.constant.ts — tableProps
│   │   └── utils/                   # funciones puras que solo usa Table (+ types/ si los hubiera)
│   ├── components/                  # subcomponentes — solo si el paquete es complejo
│   │   ├── TableHeader/             # misma forma: trío + composables/ (useEvent.ts, useStyle.ts)
│   │   ├── TableBody/
│   │   └── TableColumn/             # trío + composables/ + constants/ + types/ + utils/
│   └── shared/                      # solo lo que importan 2+ elementos del paquete
│       ├── composables/             # use<Ctx>.ts — especializados
│       ├── constants/               # <ctx>.constant.ts
│       ├── types/                   # <ctx>.type.ts
│       ├── utils/                   # <ctx>.util.ts — funciones puras, sin reactividad
│       └── store/                   # <ctx>.store.ts — estado compartido con mutadores
└── tests/                           # espeja src/ capa por capa, en la raíz del paquete
    ├── Table/
    ├── components/
    │   └── TableHeader/
    └── shared/
        └── composables/
```

Un paquete con un solo elemento visual **siempre** es simple, sin importar cuánta lógica interna
tenga ese elemento — la lógica va en su propio `use<Nombre>.ts`, eso no lo convierte en complejo.

En un paquete complejo, **dónde vive una pieza lo decide cuántos elementos la importan**:

- **Un solo elemento** → una subcarpeta de la carpeta de ese elemento. Hay cuatro posibles, todas
  opcionales: `composables/`, `utils/`, `types/`, `constants/`. Ninguna otra (ni `styles/`, ni
  `store/`, ni una carpeta por feature como `cell-renderers/`) y sin `index.ts` adentro. En la raíz
  de la carpeta del elemento quedan solo `index.vue`, `use<Nombre>.ts` y `<nombre>.style.scss`.
- **Dos o más elementos del paquete** → `shared/`, cerrado a esas 5 subcarpetas: no hay
  `shared/helpers/` ni `shared/hooks/`. `store/` existe solo acá.
- **Dos o más paquetes** → `common/` (ver `common-package-architecture.md`).

Una pieza sube de nivel cuando aparece su segundo consumidor real, no por anticipado, y se mueve:
no queda copia abajo. En un paquete simple el elemento único no tiene subcarpetas: sus tipos y
constantes van a `src/types/` y `src/constants/`.

Los ejemplos canónicos de esta estructura son `components/inline/` (simple) y `components/table/`
(complejo). `table` ya sigue esta estructura; `inline` todavía tiene `Inline/defaults.ts` (su
destino es el `constants/` + `types/` del árbol de arriba) y queda pendiente de migrar.

---

## 3. Convenciones de naming

| Elemento                   | Convención                                 | Ejemplo                  |
| -------------------------- | ------------------------------------------ | ------------------------ |
| Carpeta del paquete        | kebab-case (nombre npm)                    | `table/`, `date-picker/` |
| Carpeta de elemento visual | PascalCase                                 | `Table/`, `TableHeader/` |
| Archivo `index.vue`        | siempre `index.vue`, nunca `<Name>.vue`    | `Table/index.vue`        |
| Carpeta de capa            | minúscula, nombre exacto de la capa        | `composables/`, `store/` |
| Composables                | `use<Nombre>.ts` camelCase                 | `useTable.ts`            |
| Constantes                 | `<contexto>.constant.ts`                   | `token.constant.ts`      |
| Tipos e interfaces         | `<contexto>.type.ts`                       | `cellRenderer.type.ts`   |
| Utils (función pura)       | `<contexto>.util.ts`                       | `table.util.ts`          |
| Stores                     | `<contexto>.store.ts`                      | `tableLayout.store.ts`   |
| Estilos                    | `<nombre>.style.scss` (singular)           | `table.style.scss`       |
| Tests                      | `<Nombre>.spec.ts` / `use<Nombre>.spec.ts` | `useTable.spec.ts`       |

**NUNCA** kebab-case en archivos fuente (`.vue`, `.ts`, `.scss`), y **nunca** `helper` en un nombre
de archivo — un archivo `*-helper.ts` casi siempre resulta ser dos cosas mezcladas: una función
reactiva (composable) y una función pura (util), que se separan cada una a su capa. El nombre del
paquete npm en kebab-case es la única excepción de casing.

---

## 4. Separación de responsabilidades

### 4.1 `index.vue` — Template puro

El componente Vue es una **capa delgada de presentación**. Solo declara props/emits, instancia el
composable principal y renderiza. Toda la reactividad, los event handlers y el cálculo de clases
viven en `use<Nombre>.ts`.

El bloque `<style>` conecta el SCSS al pipeline de Vite mediante el atributo nativo `src` — nunca
con reglas CSS escritas adentro del bloque:

```vue
<style lang="scss" src="./inline.style.scss"></style>
```

El `.style.scss` de un elemento existe si ese elemento necesita CSS propio, sin relación con si el
`.vue` tiene o no un bloque `<style>` — la entrega al consumidor siempre pasa por el subpath
`"./styles.scss"` del `package.json` del paquete (ver sección 5), apunte o no el `.vue` a su propio
archivo internamente. Ese `.style.scss` vive siempre en la raíz de la carpeta de su elemento,
nunca en una subcarpeta `styles/`: si un paquete legacy la trae, su contenido se fusiona en el
`.style.scss` del elemento al migrarlo.

### 4.2 `use<Nombre>.ts` — Composables: orquestador, especializado, o util

Hay tres clases de lógica, y la pregunta que las distingue es siempre la misma: **¿la función
necesita `ref`, `computed`, `watch` o un hook de ciclo de vida?**

- **Orquestador**: co-localizado junto a su elemento (`Table/useTable.ts`), es dueño del estado
  principal de ese elemento y coordina. Uno por elemento.
- **Especializado**: resuelve una responsabilidad reactiva sin ser dueño del elemento. Vive en
  `<Elemento>/composables/` si lo usa un solo elemento, o en `shared/composables/` si lo usan 2+.
- **Util**: si la función no necesita reactividad, no es un composable — es `<contexto>.util.ts`,
  en `<Elemento>/utils/` o `shared/utils/` con el mismo criterio (o `utils/` a secas en un paquete
  simple). Una función que solo arma VNodes con `h()` también es un util.

Una **clase con estado compartido** tampoco es un composable, aunque tenga `ref`s adentro. Caso real:
`TableLayout` (refs + métodos como `setHeight`) la crea `Table` y la observan `TableHeader`,
`TableBody` y `TableFooter`; vivía en `shared/composables/tableLayout.ts` y va a
`shared/store/tableLayout.store.ts`, con export con nombre. Todo archivo de `composables/` empieza
con `use` — uno que no, está en la capa equivocada.

### 4.3 Tipos y constantes

Un tipo con nombre (`interface`/`type`) va a `types/<contexto>.type.ts`; una constante de módulo o
el objeto de props de un elemento (`buildProps()` o un objeto plano) va a
`constants/<contexto>.constant.ts`. Los tipos de props (`interface <Nombre>Props`,
`ExtractPropTypes`, `InstanceType`) van a `types/`, no junto a la constante. Ninguno se declara
inline en un `.vue`, un composable o un util, y el nivel (`<Elemento>/`, `shared/` o `src/` en un
simple) lo decide quién los importa, como en la sección 2.

No hay excepción `defaults.ts`, tampoco para los elementos derivados de element-plus: el archivo que
co-localizaba props, interface e `InstanceType` se desarma en `constants/` + `types/` al migrar.

```ts
// src/Table/constants/table.constant.ts — solo lo importa Table
export const tableProps = {
  // export con nombre — nunca `export default`
  data: { type: Array as PropType<DefaultRow[]>, default: () => [] },
};

// src/shared/types/table.type.ts — también lo importa TableColumn
export interface TableProps<T> {
  data: T[];
  rowKey?: string | ((row: T) => string);
}
```

### 4.4 Estilos BEM

Todo `.scss` de un elemento usa los mixins BEM de `@flash-global66/g-utils/mixins` (`b`/`e`/`m`/`when`)
— nunca un selector escrito a mano. El bloque que recibe `@include b("<block>")` en el `.scss` tiene
que ser exactamente el mismo string que recibe `useNamespace('<block>')` en el composable del mismo
elemento: son las dos mitades de un mismo contrato.

```ts
// useInline.ts
const ns = useNamespace('inline');
```

```scss
// inline.style.scss
@use '@flash-global66/g-utils/mixins' as *;
@use '@flash-global66/g-utils/var-mixins' as *;
@use '@flash-global66/g-utils/tokens' as *;

@include b('inline') {
  @include m('shadow') {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
  @include when('disabled') {
    opacity: 0.5;
  }
}
```

Las clases en el template/composable salen de `useNamespace()` (`ns.b()`, `ns.e()`, `ns.m()`,
`ns.is()`), nunca de un string armado a mano — no se puede cruzar `.style.scss` con `.vue`/`.ts` en
ningún build para avisar si el bloque de uno cambió y el otro no.

### 4.5 `index.ts` — Barrel público

```ts
import { withInstall, type SFCWithInstall } from '@flash-global66/g-utils';
import Table from './src/Table/index.vue';

export const GTable: SFCWithInstall<typeof Table> & {
  Table: typeof Table;
} = withInstall(Table, { Table });

export default GTable;
export * from './src/shared/types/table.type';
export type TableInstance = InstanceType<typeof Table>;
```

`withInstall` adjunta el método `install(app)` para uso global con `app.use(GTable)`. Este barrel es
el único permitido en el paquete — un `index.ts` **dentro** de una capa (`components/index.ts`,
`shared/utils/index.ts`) sigue prohibido, porque oculta el archivo real.

### 4.6 Caso especial — elemento en `h()`/JSX en vez de `.vue`

El shell de un elemento puede ser `defineComponent({ setup, render() })` en vez de `index.vue`
**solo** cuando hay una de tres razones técnicas reales: factory de identidad dinámica en runtime,
virtualización real de listas, o composición de hijos cuyo orden depende de config en runtime. Un
componente nuevo del DS arranca siempre en SFC — `h()` no es una alternativa de igual peso, es la
excepción que se justifica caso por caso, y el archivo se nombra `.tsx` aunque no tenga JSX literal.
Los subcomponentes de un elemento en `h()` no heredan la excepción: si renderizan markup fijo, van a
SFC igual.

---

## 5. Campos de `package.json`

```json
{
  "name": "@flash-global66/g-<nombre>",
  "author": "Global66",
  "license": "MIT",
  "buildable": true,
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/types/index.d.ts"
    },
    "./styles.scss": "./src/<Nombre>/<nombre>.style.scss",
    "./*": "./*"
  },
  "files": ["dist", "src", "index.ts"],
  "scripts": {
    "build": "vite build",
    "build:types": "vue-tsc --project tsconfig.json"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  },
  "dependencies": {
    "@flash-global66/g-utils": "^0.15.6"
  },
  "peerDependencies": {
    "vue": "^3.2.0"
  }
}
```

Reglas clave:

- `exports["./styles.scss"]` apunta siempre al `.style.scss` del **elemento raíz** — en un paquete
  complejo, ese archivo agrega los estilos de sus subcomponentes con `@use`, pero el paquete sigue
  exportando un único subpath.
- `vue` siempre va en `peerDependencies`.
- **Un `@flash-global66/g-*` va en `peerDependencies` si el paquete lo renderiza como hijo visible
  en su `<template>`** — evita que el consumidor termine con dos instancias del mismo componente en
  su árbol. Si solo se usa por dentro (una función, un tipo, sin renderizarlo), va en
  `dependencies` normal. `components/button/` es el ejemplo que cumple esto: `g-form` y
  `g-icon-font` están en `peerDependencies` porque `Button.vue` los renderiza directo; `g-utils`
  queda en `dependencies` porque solo resuelve funciones internas.
- El `vite.config.ts` de cada paquete es mínimo (`entry` + `name`); los formatos de salida y los
  `externals` viven en `vite.config.base.ts` de la raíz y no se redeclaran por paquete.

---

## 6. Tests

La suite de tests espeja la estructura de `src/`, **en la raíz del paquete, fuera de `src/`**:

```
tests/
├── Table/
│   └── useTable.spec.ts
├── components/
│   └── TableHeader/
│       └── useTableHeader.spec.ts
└── shared/
    └── composables/
        └── useTableCellSelect.spec.ts
```

`common/g-utils` es hoy la referencia de cumplimiento más completa de este espejo — mirar ahí ante
la duda antes que en un paquete legacy sin migrar.

Ejecutar desde la raíz del monorepo:

```bash
yarn test
```

---

## 7. JSDoc en español

Toda la API pública se documenta en **español**. Los nombres de código permanecen en inglés.

```ts
/**
 * Genera clases BEM combinando namespace, bloque, elemento y modificador.
 *
 * @param block - Nombre del bloque BEM del componente (ej: `'button'`).
 * @returns Objeto con todos los métodos de generación BEM y el namespace activo.
 */
export const useNamespace = (block: string): NamespaceHelpers => { ... }
```

---

## Recursos relacionados

- [`docs/architecture/common-package-architecture.md`](common-package-architecture.md) — convención de paquetes utilitarios (`common/*`)
- Ejemplo canónico simple: `components/inline/`
- Ejemplo canónico complejo: `components/table/`
- Ejemplo canónico de `package.json` (peer vs. dependency): `components/button/`
