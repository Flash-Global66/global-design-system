# BMB-4337 · g-attach-file (tipo default): borrar un archivo elimina solo ese archivo

> **Rama:** `claude/calcifer-go-bmc-4337-64e073`
> **Base:** `ee000ea6`
> **HU:** `BMB-4337`

El diff desde `Base` incluye este `proposal.md`, su `tasks.md` y el delta de `specs/`: son el cambio, no trabajo de más.

## Qué encontré

- **Sin grafo:** el repo no tiene `.codegraph/`, así que el alcance se decidió con `rg`, no con `codegraph_impact`. El ticket se leyó con `jira_get_issue` (MCP `g66`).
- **No está hecho:** no hay ramas con `4337` (`git branch -a`) ni plan en `calcifer list-plans`. El ticket estaba en «Ready to work».
- **Causa raíz:** `components/attach-file/src/default-type.vue:216` hace `const removeFile = createRemoveFileHandler(props.modelValue, emit);`. El helper (`attach-file-helpers.ts:98-112`) se queda con ese array en una closure y en cada borrado hace `[...modelValue].splice(index, 1)`. Ese array es el del setup (vacío al montar), así que siempre emite `[]` y se borran todos.
- **drag-drop no tiene el bug** porque lo envuelve en un `computed` (`drag-drop-type.vue:228-230`). En el template, `removeFile(index)` desenvuelve el computed solo.
- **Alcance del helper:** `rg createRemoveFileHandler` da 3 resultados: la definición y las dos llamadas. No se exporta desde `components/attach-file/index.ts`, así que no es API pública.
- **Tests:** el paquete no tenía `tests/` (`vitest run components/attach-file` → «No test files found», exit 1). Vitest corre desde el worktree con el `node_modules` del checkout principal.

## Qué propongo, y qué queda afuera

Repetir en `default-type.vue` lo que ya funciona en drag-drop: `removeFile` pasa a ser un `computed` que arma el handler con `safeFiles.value`, así cada borrado parte de la lista vigente. Se agrega el primer spec del paquete, que reproduce el bug.

Cuando se mergee, lerna publica la versión patch por el commit `fix(attach-file)`.

**Fuera de este cambio:**

- **La parte de front-b2b** (subir la dependencia, sacar la `:key` y su comentario en `ConstitutiveDocuments`, revisar los otros consumidores con `multiple`). Es otro repo y necesita la versión publicada, que solo existe después del merge.
- Refactorizar la firma de `createRemoveFileHandler` (4 argumentos posicionales con booleanos).
- Migrar el paquete al arquetipo SFC.

## Con qué restricciones

- **Conventional Commits sin HU** (`ds-git-flow`). El CHANGELOG no se edita a mano: lo genera lerna.
- **Specs en `components/attach-file/tests/`**, nunca dentro de `src/` (`ds-component-layers`).
- **Sin comentarios nuevos** para explicar el `computed` (`code-comments.md`).
- **No usar `yarn lint`**: se lintea solo lo que se toca.

## Encontrado de paso

- `default-type.vue:52` y `:77` usan `:key="index"` en los `v-for` de archivos (`render-performance.md`). No causa este bug.
- La rama del worktree dice `bmc`, no `bmb`. Se renombra al abrir el PR (`ds-git-flow`).

## Cómo se verifica

Este cambio **altera comportamiento** (lo que el usuario ve al borrar), así que lleva delta en `specs/g-attach-file/`.

**Criterio del cambio entero:** con 3 archivos en un `GAttachFile` tipo default, borrar uno emite una lista con los otros 2, y después se puede agregar y borrar otra vez sin perder archivos. Lo cubre `components/attach-file/tests/DefaultType.spec.ts`.

Desde la raíz del worktree:

```bash
../../../node_modules/.bin/vitest run components/attach-file
```

→ `Test Files  1 passed (1)`, con `0 failed`. La cantidad de tests es **provisional**: la ronda 1 del verify pone el número real.

```bash
rg -c "createRemoveFileHandler\(props\.modelValue" components/attach-file/src
```

→ sin salida y exit 1. Antes del cambio devolvía `default-type.vue:1`.

```bash
../../../node_modules/.bin/eslint --ext .vue,.ts components/attach-file/src/default-type.vue components/attach-file/tests
```

→ exit 0.

```bash
git diff --name-only ee000ea6..HEAD -- components
```

→ solo `components/attach-file/src/default-type.vue` y `components/attach-file/tests/DefaultType.spec.ts`.
