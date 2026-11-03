# Tareas · g-link 1.0.0 operable con teclado

Restricciones que todo subagente recibe (detalle en `proposal.md`): mover con `git mv`, sin reescribir; molde `components/inline/`; nada de `export *` ni `export default`; tipos en `types/`, props y emits en `constants/`; sin comentarios en línea; `CHANGELOG.md` no se toca y la única versión a mano es `"version": "1.0.0-0"` (tarea 2); commits en Conventional Commits puro, sin `[BMB-4254]`. En este worktree `yarn` no corre: usar `../../../node_modules/.bin/<bin>` desde la raíz. `node_modules/@flash-global66/g-link` apunta al checkout principal, así que los estilos se comparan compilando **por ruta** contra `g-link.antes.css`, cuya línea base está en el scratchpad de la sesión del plan. Si ya no está, se regenera con `git show 55ca1e8a:components/link/src/link.styles.scss` a un archivo temporal y se compila por ruta.

---

- [x] **1 · Migrar g-link al arquetipo sin cambiar comportamiento**
  - archivos: `components/link/src/Link.vue` → `components/link/src/Link/index.vue`, `components/link/src/Link/useLink.ts`, `components/link/src/link.ts` → `components/link/src/Link/constants/link.constant.ts`, `components/link/src/Link/types/link.type.ts`, `components/link/src/link.styles.scss` → `components/link/src/Link/link.style.scss`, `components/link/index.ts`, `components/link/package.json` (solo `exports["./styles.scss"]`), `components/link/tests/Link/index.spec.ts`
  - depende de: ninguna
  - listo cuando: antes de mover se escribe un spec de caracterización del comportamiento actual (clases BEM, `href`/`target`, `disabled` sin href y sin emitir, `click` con `MouseEvent`, iconos y slot `icon`), y sigue verde después de mover. La compilación por ruta de `link.style.scss` da un `diff` **vacío** contra `g-link.antes.css`. `index.ts` exporta `GLink`, `linkProps`, `linkEmits`, `LinkProps`, `LinkEmits` y `LinkInstance` sin `export *` ni default. `stories/link.stories.ts` y `stories/table.stories.ts` siguen importando sin cambios.
  - commit: `refactor(link): migra g-link al arquetipo de paquete simple`

- [x] **2 · g-link buildable y en camino a 1.0.0**
  - archivos: `components/link/package.json`, `components/link/vite.config.ts`, `components/link/tsconfig.json`
  - depende de: 1
  - listo cuando: `package.json` sigue la plantilla de `inline` (`buildable`, `exports` con `dist`, `files`, `scripts.build`/`build:types`, `peerDependencies` con `vue` y `@flash-global66/g-icon-font`, `"version": "1.0.0-0"`). `vite build --outDir <scratch>` produce `index.mjs` e `index.js`. `vue-tsc --project tsconfig.json` termina sin errores y no compila `tests/`.
  - commit: `build(link): g-link pasa a ser buildable`

- [x] **3 · Sin href, g-link es un botón operable con teclado**
  - archivos: `components/link/src/Link/index.vue`, `components/link/src/Link/useLink.ts`, `components/link/src/Link/constants/link.constant.ts`, `components/link/tests/Link/index.spec.ts`, `components/link/tests/Link/useLink.spec.ts`
  - depende de: 1
  - listo cuando: los specs prueban lo siguiente. **Sin `href`**: `role="button"` y `tabindex="0"`; `user.tab()` lo enfoca; Enter, NumpadEnter y Espacio emiten `click` una sola vez con un `MouseEvent`; Espacio no hace scroll (`preventDefault`). **Con `disabled` y sin href**: `aria-disabled="true"`, sin `tabindex`, y ni el teclado ni el click emiten. **Con `href`**: sin `role`, sin `tabindex` y sin activación propia por Espacio, y `href`/`target` quedan como hoy. Las teclas viven en una constante de `link.constant.ts` construida con `EVENT_CODE`, y el JSDoc de `href` describe el caso sin href.
  - commit: `feat(link)!: sin href se expone como botón operable con teclado`, con el footer `BREAKING CHANGE: g-link se publica compilado (dist) y un g-link sin href pasa a tener role="button" y entrar en el orden de tabulación.`

- [x] **4 · Anillo de foco visible en todo g-link**
  - archivos: `components/link/src/Link/link.style.scss`
  - depende de: 1
  - listo cuando: el bloque `b(link)` tiene `&:focus-visible { @apply outline outline-primary-def; }`, y el `diff` de la compilación por ruta contra `g-link.antes.css` muestra **solo** las líneas de esa regla.
  - commit: `fix(link): muestra el foco al navegar con teclado`

- [ ] **5 · Story de g-link con el patrón Props / Eventos / Slots**
  - archivos: `stories/link.stories.ts`
  - depende de: 3, 4
  - listo cuando: los argTypes de los 9 props (`type`, `size`, `underline`, `disabled`, `href`, `target`, `iconLeft`, `iconRight`, `status`) van en `Props`, con descripción, tipo y default leídos de `link.constant.ts`; `click` va en `Eventos`; `default` e `icon` van en `Slots`. Las stories que ya existen se mantienen, y se agrega `WithoutHref`, con un link sin href, uno `disabled` y su descripción de teclado. `eslint` del archivo da 0 problemas.
  - commit: `docs(link): story con todos los props, eventos y slots de g-link`

Tarea 1 primero. Las tareas 2, 3 y 4 corren en paralelo después de la 1 (archivos disjuntos). La 5 espera a la 3 y a la 4.
