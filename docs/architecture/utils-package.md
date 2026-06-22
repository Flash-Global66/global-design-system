# Convención de Paquetes Utilitarios

**Última actualización:** Junio 2026
**Responsable:** Equipo de Diseño y Desarrollo

---

## 1. Propósito

Los paquetes utilitarios (`g-utils`, `g-hooks`, `g-tokens`, etc.) son **librerías de infraestructura** compartidas por los componentes del DS. No son componentes Vue publicables — son las herramientas que los componentes usan internamente.

| Aspecto          | Paquete de componente            | Paquete utilitario                                           |
| ---------------- | -------------------------------- | ------------------------------------------------------------ |
| Contiene `.vue`  | Sí                               | No                                                           |
| `buildable`      | `true`                           | `false` (source-only)                                        |
| Distribuido como | Bundle compilado (`dist/`)       | Código fuente (TS + SCSS)                                    |
| Compilado por    | El propio paquete (`vite build`) | El consumidor (Vitest `deps.inline`, bundler del consumidor) |

---

## 2. Estructura canónica

```
common/<package-name>/
├── index.ts                    # barrel público
├── package.json                # buildable: false — ver sección 3
├── src/
│   ├── utils/                  # funciones TS puras
│   │   └── <name>.util.ts      # sufijo .util.ts
│   ├── composables/            # hooks Vue
│   │   └── use<Name>.ts        # prefijo use
│   └── types/                  # tipos compartidos
│       └── <name>.type.ts      # sufijo .type.ts
├── styles/                     # mixins y config SCSS (si aplica)
│   ├── config.scss             # variables $namespace y separadores BEM
│   ├── function.scss           # funciones Sass puras (sin output CSS)
│   └── mixins.scss             # mixins b/e/m/when
└── tests/                      # espeja src/
    ├── utils/
    │   └── <name>.util.spec.ts
    └── composables/
        └── use<Name>.spec.ts
```

El paquete `common/g-utils/` es el ejemplo canónico de esta estructura.

---

## 3. package.json de un paquete utilitario

```json
{
  "name": "@flash-global66/g-utils",
  "version": "0.1.0",
  "buildable": false,
  "type": "module",
  "exports": {
    ".": "./index.ts",
    "./mixins": "./styles/mixins.scss",
    "./config": "./styles/config.scss"
  },
  "sideEffects": ["**/*.scss"],
  "peerDependencies": {
    "vue": "^3.2.0"
  }
}
```

**`sideEffects: ["**/\*.scss"]`\*\* — los bundlers asumen por defecto que los módulos son puros (tree-shakeable). Los archivos SCSS sí tienen efectos globales (modifican el DOM con estilos), por lo que esta bandera le indica al bundler que no los elimine aunque no vea un import explícito desde JS. Solo SCSS — g-utils no produce CSS; es source-only.

Diferencias clave respecto al `package.json` de un componente:

- `"buildable": false` — no se compila a `dist`; se distribuye como código fuente.
- No hay `main`, `module`, `types` — el consumidor resuelve desde el source.
- `exports` incluye entradas SCSS para que Sass resuelva los mixins por nombre de paquete.

---

## 4. Namespace `gui` — estabilidad y flexibilidad

El namespace `gui` (Global UI) es el estándar del DS. Está configurado como valor por defecto en dos capas independientes:

**Capa SCSS (build-time):** `g-utils/styles/config.scss` define `$namespace: 'gui' !default`. El `!default` permite que el sistema de módulos de Sass lo sobrescriba si un consumidor lo necesita, pero por defecto todos los componentes generan clases `gui-*` sin declaración explícita.

**Capa TypeScript (runtime):** el composable `useNamespace` usa `'gui'` como `defaultNamespace`. Esto se propaga mediante `provide/inject` — si un `ConfigProvider` llama a `provide(namespaceContextKey, ref('otro-namespace'))`, todos los componentes descendientes adoptan ese namespace en runtime sin recompilar.

La consecuencia de esta arquitectura: si en el futuro el DS necesita un namespace diferente, **solo hay que cambiarlo en el provider** (un solo punto). Los componentes y sus estilos no necesitan modificarse.

---

## 5. Distribución de estilos

El DS usa un modelo **source-first**: los estilos se distribuyen como SCSS, y el bundler del consumidor (Vite) los procesa directamente. No hay un paso de compilación previo en el DS.

El bloque `<style lang="scss" src="...">` en el SFC es el punto de entrada — Vite detecta el SCSS, lo pasa por Sass (con `@use '@flash-global66/g-utils/mixins'`) y lo inyecta como CSS en el bundle del consumidor. El consumidor necesita Sass configurado en su pipeline.

```vue
<!-- Button.vue — Vite procesa este bloque como parte del SFC -->
<style lang="scss" src="./styles/button.style.scss"></style>
```

`exports["./styles.scss"]` en `package.json` del componente permite que otros consumidores (ej: tests, otros paquetes del DS) accedan al SCSS fuente directamente por nombre de paquete si lo necesitan.

---

## 6. Convenciones de naming

- `src/utils/*.util.ts` — funciones puras, sin estado global
- `src/composables/use<Name>.ts` — solo composables Vue (`ref`, `computed`, `inject`, etc.)
- `src/types/*.type.ts` — solo tipos e interfaces, sin lógica
- `styles/` — SCSS sin output CSS propio; solo variables, funciones y mixins
- Tests en `tests/` espejando exactamente la estructura de `src/`

**NUNCA** kebab-case en archivos fuente. Los nombres de paquete npm son la única excepción.

---

## 7. Resolución en tests y builds

`g-utils` es source-only, por lo que los consumidores deben configurar su pipeline para compilar el código TypeScript de `@flash-global66/*`. En Vitest:

```ts
// vitest.config.ts (raíz del monorepo)
export default defineConfig({
  test: {
    deps: {
      inline: [/@flash-global66\/.*/],
    },
  },
});
```

En un bundler (Vite), el workspace resolution ya lo maneja automáticamente porque `exports["."]` apunta al source `.ts`.

---

## 8. JSDoc en español

Igual que en los componentes, toda la API pública se documenta en español:

```ts
/**
 * Construye y valida el mapa completo de props de un componente Vue.
 *
 * @param props - Objeto con las definiciones de todas las props del componente.
 * @returns El mismo objeto con cada prop procesada y validada.
 */
export const buildProps = <T extends Record<string, any>>(props: T): T => { ... }
```

Los nombres de código (variables, funciones, tipos) permanecen en inglés.

---

## 9. Extensión del patrón

Este mismo patrón aplica a todos los paquetes utilitarios futuros del DS:

| Paquete                    | Contenido esperado                                                     |
| -------------------------- | ---------------------------------------------------------------------- |
| `@flash-global66/g-hooks`  | Composables de uso general no ligados a un componente específico       |
| `@flash-global66/g-tokens` | Design tokens (colores, espaciado, tipografía) como variables CSS y TS |

La estructura de carpetas y las reglas de naming son **idénticas** a las de `g-utils`.

---

## Recursos relacionados

- [`docs/architecture/component-architecture.md`](component-architecture.md) — arquitectura canónica de componentes
