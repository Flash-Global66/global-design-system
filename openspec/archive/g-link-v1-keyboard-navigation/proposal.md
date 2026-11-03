# g-link 1.0.0: migración al arquetipo y operable con teclado sin `href`

> **Rama:** `erik/BMB-4254/fix/g-link-navigation`
> **Base:** `55ca1e8a`
> **HU:** `BMB-4254`

El diff desde `Base` incluye este `proposal.md`, su `tasks.md` y el delta de `specs/`: son el cambio, no trabajo de más.

## Qué encontré

**Sin `.codegraph/` en este repo**: el alcance se midió con `grep` y con un script que recorre etiquetas multilínea (`count-glinks.mjs` en el scratchpad). El MCP `g66` no conectó en esta sesión (`-32602`), y front-b2b se leyó del clon local `~/Desktop/global66/front-b2b`.

**La causa, en el DS**

- `components/link/src/Link.vue:4-5` hace `:href="disabled || !href ? undefined : href"`. Un g-link sin `href` se renderiza como `<a>` sin href, sin `role` y sin `tabindex`, así que Tab no llega a él y Enter no hace nada.
- `components/link/src/link.styles.scss:10` aplica `outline-none` a todo g-link. Ninguno muestra foco con teclado, tampoco los que tienen href.
- `components/link/src/link.ts:74-76` declara el emit `click: (evt) => evt instanceof MouseEvent`.

**Lo lejos que está g-link del arquetipo** (molde: `components/inline/`, el único paquete simple ya migrado)

| Hoy                                                                                                    | Arquetipo                                                                                   |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| `src/Link.vue` suelto, con la lógica adentro                                                           | `src/Link/index.vue` y `src/Link/useLink.ts`                                                |
| `src/link.ts`, con props, emits y tipos juntos                                                         | `src/Link/constants/link.constant.ts` y `src/Link/types/link.type.ts` (`ds-types-location`) |
| `src/link.styles.scss`                                                                                 | `src/Link/link.style.scss` (`ds-sfc-trio`)                                                  |
| `index.ts` con `export * from './src/link'`                                                            | exports con nombre y `withInstall`, como `components/inline/index.ts`                       |
| no buildable: sin `vite.config.ts`, `tsconfig.json` ni `files`, y se consume como fuente               | `buildable`, `dist/` y `files`, como `components/inline/package.json`                       |
| `@flash-global66/g-icon-font` se renderiza en el template pero **no está declarado** en `package.json` | va en `peerDependencies`, junto a `vue` (`ds-package-manifest`)                             |
| sin `tests/`                                                                                           | `tests/` en la raíz del paquete, espejando `src/`                                           |

**Lo que se reutiliza del DS**

- `components/chip/src/chip.vue:10-14`: `role="button"`, `tabindex`, Enter/Espacio y `aria-disabled`.
- `EVENT_CODE.enter / numpadEnter / space` de `@flash-global66/g-utils`, usado en `components/tooltip/src/trigger.ts:30`.
- El foco como en `components/pagination/src/pagination.styles.scss:40`: `&:focus-visible { @apply outline-primary-def outline; }`.
- Los tests con `@testing-library/vue` y `@testing-library/user-event`, como `components/collapse/tests/Collapse.spec.ts:4`.
- Las stories con argTypes agrupados en `Props (Padre)`, `Eventos (Padre)` y `Slots (Padre)`, como `stories/collapse.stories.ts:123-228`.
- Hoy `stories/link.stories.ts` tiene los 9 props y `onClick`, sin categorías, y no documenta los slots `default` ni `icon`.

**Versión 1.0.0**: con 0.x, lerna baja un breaking change a minor (`node_modules/lerna/dist/index.js:3685-3687`), así que publicaría `0.1.0`. Los 6 paquetes que hoy están en 1.x nacieron así; ninguno pasó de 0.x a 1.0.0. Probado con semver: `inc('1.0.0-0', patch|minor|major)` siempre da `1.0.0`. **Decidido**: el PR deja `"version": "1.0.0-0"` y el pipeline publica `1.0.0`.

**Gotcha del worktree**: `node_modules/@flash-global66/g-link` es un symlink a `../../components/link` del **checkout principal**. Todo lo que resuelve por nombre de paquete (`check-styles`, Storybook) mide el código de `release`, no el de esta rama. Por eso los estilos se compilan **por ruta**. Línea base: `link.styles.scss` compila a 220 líneas (`g-link.antes.css` en el scratchpad).

**Números reales de la HU, medidos hoy en front-b2b** (`origin/release` @ `8a19f61c9`, 2026-11-03)

| Dato de la HU                                      | Hoy                                                                                                                                                    |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| g-link con `@click` y sin `href`                   | **33**: coincide                                                                                                                                       |
| «10+ módulos»                                      | **15 áreas**: 12 en `src/modules/` y 3 en `src/shared/`                                                                                                |
| del dashboard                                      | **6**: coincide (`WalletItem` ×2, `MultiWalletCarousel` ×2, `RecentMovements`, `AdditionalAccountsPanel`)                                              |
| restantes                                          | **27**: coincide                                                                                                                                       |
| «`goto` en dos sitios»                             | `goto` en 2 (`MultiWalletCarousel:67`, `WalletItem:159`) más `to` en 1 (`RecentMovements:55`)                                                          |
| `Login/index.vue:206`                              | coincide                                                                                                                                               |
| precedente `CompensationAccountRegistration:88-93` | el g-link va de la línea 88 a la 94                                                                                                                    |
| total                                              | 59 g-link en 49 archivos: 26 con `href`, 33 sin. Ninguno sin `href` ni `@click`                                                                        |
| imports                                            | 40 desde `@flash-global66/g-link` y **9 por deep import `@flash-global66/g-link/index.js`**. Además, 3 specs hacen `vi.mock('@flash-global66/g-link')` |
| versión                                            | `"@flash-global66/g-link": "0.0.32"`. front-admin no usa g-link                                                                                        |

**Trabajo previo que se cierra**: en front-b2b hay una rama local sin push, `erik/BMB-4254/fix/ver-mas-operable-con-teclado` (worktree `.claude/worktrees/bmb-4254`), con el commit `ae4255a79`: 6 parches `href="#"` + `TODO(BMB-4254)` y un `eslint-disable` que menciona la HU. Ninguno de esos cambios llegó a `release`.

## Qué propongo, y qué queda afuera

g-link se migra al arquetipo de paquete simple y pasa a ser buildable, **sin cambiar comportamiento** en ese paso. Después: sin `href`, g-link se expone como botón accesible (`role="button"`, `tabindex="0"`, activable con Enter, NumpadEnter y Espacio); con `disabled`, lleva `aria-disabled="true"` y queda fuera del Tab. La activación por teclado llama a `el.click()`, así que el consumidor sigue recibiendo `click` con un `MouseEvent`. Todo g-link muestra un anillo `:focus-visible` con `outline-primary-def`, salvo el tertiary, que lo muestra blanco porque va sobre fondo `primary-def`. Se publica como **1.0.0**, y la story documenta todos los props, el evento y los slots.

**Este cambio altera comportamiento**: lleva un delta en `specs/g-link/`.

**Afuera**

- Cambiar `<a>` por `<button>`, porque arrastra estilos de user agent y rompe selectores.
- Cambiar la firma del emit `click`.
- `g-menu` (hallazgo F5).
- Agregar props nuevas.
- Lo de front-b2b, que es la fase 2 de abajo y va en otro repo.

**Fase 2 · front-b2b** (rama nueva `erik/BMB-4254/fix/update-g-link-version-with-more-accessibility`, otro PR, bloqueada hasta que se publique g-link 1.0.0)

1. **Al aprobar este plan**: quitar el worktree `.claude/worktrees/bmb-4254` y borrar la rama local `erik/BMB-4254/fix/ver-mas-operable-con-teclado`. El commit `ae4255a79` queda solo en el reflog. Crear la rama nueva desde `origin/release`.
2. Después de publicar: subir `@flash-global66/g-link` de `0.0.32` a `1.0.0` y pasar los 9 deep imports `/index.js` al entry del paquete. También sacar los atributos muertos `goto="#"` ×2 y `to` ×1, y ajustar los 3 `vi.mock` si hace falta.
3. Verificar: los specs de front-b2b pasan, y en el navegador «Ver más» se alcanza con Tab, se activa con Enter, la URL no queda con `#` y el foco se ve.

**Jira, al aprobar este plan**: actualizar la descripción de BMB-4254 con los números de la tabla y el nuevo alcance (g-link 1.0.0 más el bump en front-b2b), y agregar un comentario por cada criterio que cambia: el 1 (`href="#"`), el 2 (`grep` = 0), el 4 (las clases de foco) y el 5 (`TODO(BMB-4254)`). El 3 y el 6 se mantienen.

## Con qué restricciones

- `ds-sfc-trio`, `ds-component-layers`, `ds-types-location` y `ds-naming`. El procedimiento es el del skill `ds-component-authoring`: mover con `git mv` sin reescribir, comparar el CSS antes y después, y espejar `tests/`.
- `ds-package-manifest`: plantilla de `inline`. `g-icon-font` y `vue` van en `peerDependencies` y `g-utils` en `dependencies`. `vite.config.ts` lleva solo `entry` + `name`, y `tsconfig.json` excluye `tests` (como `afa4c29e`).
- `ds-styles-delivery`: el `.scss` movido tiene que compilar **igual** que antes, comparado por ruta.
- `exports-imports`: nada de `export *` ni `export default` en el `index.ts` nuevo (se aparta de `inline`, que tiene un default).
- `accessibility`, `code-comments` y `jsdoc`: el JSDoc de `href` describe el caso sin href, y no van comentarios en línea.
- `function-declarations`: handlers con `function`.
- La versión sale de los commits. Lo único a mano es `"version": "1.0.0-0"`, que fue decisión tuya. `CHANGELOG.md` no se toca.
- Commits en Conventional Commits puro, sin `[BMB-4254]` (`ds-package-lifecycle`). El breaking va con `!` y el footer `BREAKING CHANGE:`.
- En este worktree `yarn` no corre (`GBP_PACKAGE_TOKEN`). Se usan los binarios del principal: `../../../node_modules/.bin/<bin>` desde la raíz del worktree.

## Encontrado de paso

- `vitest --project storybook` no arranca dentro de este worktree. Por eso la prueba en navegador queda para la fase 2, sobre front-b2b.
- `components/inline/index.ts` combina `export default` con exports con nombre, y rollup avisa al build («named and default exports together»). No se toca aquí.

## Cómo se verifica

El diff desde `Base` incluye este `proposal.md`, su `tasks.md` y el delta de `specs/`: son el cambio, no trabajo de más. Todos los comandos se corren desde la raíz del worktree.

```bash
../../../node_modules/.bin/vitest run --project unit 2>&1 | tail -4
```

Línea base (hoy): `Test Files 83 passed (83)` · `Tests 709 passed (709)`. Después: **0 failed**, `Test Files` ≥ 85 y `Tests` > 709. Es una cota: los tests nuevos los fija el apply.

```bash
../../../node_modules/.bin/vitest run --project unit components/link 2>&1 | tail -4
```

Hoy: «No test files found». Después: 2 archivos, todos en verde.

```bash
../../../node_modules/.bin/eslint components/link stories/link.stories.ts --ext .vue,.ts --max-warnings 0; echo "exit=$?"
```

Línea base: sin salida y `exit=0`. Después: igual.

```bash
node --input-type=module -e 'import { preprocessCSS, resolveConfig } from "vite"; const c = await resolveConfig({ configFile: false }, "serve"); const { code } = await preprocessCSS(`@use "${process.argv[1]}";`, `${process.cwd()}/check.scss`, c); process.stdout.write(code);' "$PWD/components/link/src/Link/link.style.scss" 2>/dev/null > $SCRATCH/g-link.despues.css; diff $SCRATCH/g-link.antes.css $SCRATCH/g-link.despues.css
```

`$SCRATCH` es el scratchpad de esta sesión. Línea base: 220 líneas, `exit=0`. Después de la tarea 1, `diff` vacío. Después de la 4, solo las dos reglas `:focus-visible`: la base (`primary-def`) y la del tertiary (blanco).

```bash
(cd components/link && ../../../../../node_modules/.bin/vite build --outDir $SCRATCH/link-dist --emptyOutDir 2>&1 | tail -3) && ls $SCRATCH/link-dist
```

Se probó sobre `inline` y devuelve `index.js`, `index.mjs` y `✓ built`. Para link es **provisional** hasta la tarea 2: tiene que listar `index.js` e `index.mjs`.

```bash
git diff --name-only 55ca1e8a..HEAD -- . ':!openspec' | sort
```

Invariante: solo `components/link/**` y `stories/link.stories.ts`.

**Criterio del cambio entero**: un g-link sin `href` y con `@click` se alcanza con Tab y se activa con Enter o Espacio, y el consumidor recibe el mismo `click` que con el mouse. Con `href` se comporta como antes, salvo el anillo de foco. El paquete compila a `dist`, su CSS es el de antes más las reglas `:focus-visible` (la base y la del tertiary), y la story documenta todos los props, el evento y los slots. En navegador real se comprueba en la fase 2, sobre «Ver más» en front-b2b.

**Costo estimado** (lo preguntaste): cinco tareas en el DS, las 2, 3 y 4 en paralelo después de la 1. Es cerca de un día de trabajo con review incluido. Los riesgos son la entrega del SCSS movido (mitigado con el diff por ruta) y el `dist` en front-b2b (mitigado pasando los 9 deep imports al entry). La fase 2 en front-b2b son unas horas más, una vez publicado.
