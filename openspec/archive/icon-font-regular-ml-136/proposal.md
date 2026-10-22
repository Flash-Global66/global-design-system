# chart-simple, money-bills-simple y chart-mixed-up-circle-dollar en peso regular (g-icon-font 0.27.0 → 0.28.0 vía pipeline)

> **Rama:** `claude/g-icon-font-missing-icons-548f81`
> **Base:** `0994be94`
> **HU:** `ML-136`

El diff desde `Base` incluye este `proposal.md` y su `tasks.md`: son el cambio, no trabajo de más.

## Qué encontré

- Sin `.codegraph/` en este repo: se decidió con `rg` + `git`, no con grafo.
- El worktree nació de `ee000ea6` (`main` local, 55 commits atrás de `origin/release`, paquete en `0.26.1`). Se llevó la rama a `origin/release` (`0994be94`, paquete en `0.27.0`) antes de tomar `Base`: la rama no tenía commits propios.
- En `origin/release` (`components/icon-font/src/icon-sets.ts`): `chart-mixed-up-circle-dollar` solo en `solid` (l.106), `chart-simple` en `solid` (l.125) y `light` (l.282), `money-bills-simple` solo en `solid` (l.126). Ninguno en `regular`.
- `yarn icon:add "<peso> <nombre>"` (`components/icon-font/package.json:24`) valida contra el paquete FA Pro vendorizado, parchea `ICON_SETS` y regenera `src/lib/far-regular-pro.ts`.
- `IconString` (`src/types.ts:5`) se deriva de `ICON_SETS`: los nombres nuevos quedan tipados solos. El paquete no tiene tests; la story lee `ICON_SETS` dinámicamente.

## Qué propongo, y qué queda afuera

Agregar los tres íconos al peso `regular` con `yarn icon:add`, en un solo commit `feat(icon-font)`. La versión la sube lerna en el publish.

**Queda afuera:** consumirlos en front-b2b, otros pesos de estos íconos, tocar `CHANGELOG.md` o `version`, editar `src/lib/*.ts` a mano, `yarn build`.

Este cambio no altera comportamiento de lo existente: solo agrega íconos al catálogo. Sin `specs/`.

## Con qué restricciones

- `ds-icons`: nunca editar `src/lib/fa*-*.ts` ni `icon-sets.ts` a mano; siempre `yarn icon:add`. Si `ensure-fa` falla por token, cortar y avisar.
- `ds-package-lifecycle`: `CHANGELOG.md` y `version` no se editan.
- `ds-git-flow`: base `release`, Conventional Commits, sin attribution de IA.

## Cómo se verifica

1. `rg -c "prefix: 'far', iconName: '(chart-simple|money-bills-simple|chart-mixed-up-circle-dollar)'" components/icon-font/src/lib/far-regular-pro.ts` → **3** (líneas de export; en `Base` no imprime nada = 0)
2. `rg -U -o 'regular: \[[^\]]*\]' components/icon-font/src/icon-sets.ts | rg -c '"(chart-simple|money-bills-simple|chart-mixed-up-circle-dollar)"'` → **3** (líneas dentro del bloque `regular`; en `Base` = 0)
3. `git diff --name-only 0994be94..HEAD -- components/` → exactamente `components/icon-font/src/icon-sets.ts` y `components/icon-font/src/lib/far-regular-pro.ts`
4. `rg -U -o 'regular: \[[^\]]*\]' components/icon-font/src/icon-sets.ts | rg -o '"[^"]+"' | sort | uniq -d` → vacío
