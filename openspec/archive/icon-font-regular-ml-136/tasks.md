# Tareas · íconos regular para ML-136

Restricciones que todo subagente recibe (detalle en `proposal.md`): los íconos se agregan solo con `yarn icon:add "<peso> <nombre>"` desde `components/icon-font/`, nunca editando `icon-sets.ts` ni `src/lib/*.ts` a mano; si `ensure-fa` falla por `FONT_AWESOME_TOKEN`, cortar y avisar; `CHANGELOG.md` y `version` no se tocan; no correr `yarn build`; commit sin attribution de IA.

---

- [x] **1 · Agregar los tres íconos en peso regular**
  - archivos: `components/icon-font/src/icon-sets.ts`, `components/icon-font/src/lib/far-regular-pro.ts`
  - depende de: ninguna
  - listo cuando: `yarn icon:add "regular chart-simple"`, `yarn icon:add "regular money-bills-simple"` y `yarn icon:add "regular chart-mixed-up-circle-dollar"` (desde `components/icon-font/`) terminan OK; los tres nombres están al final del bloque `regular` de `icon-sets.ts` y `far-regular-pro.ts` exporta `faChartSimple`, `faMoneyBillsSimple`, `faChartMixedUpCircleDollar` con `prefix: 'far'`; ningún otro archivo de `src/lib/` cambia
  - commit: `feat(icon-font): add chart-simple, money-bills-simple and chart-mixed-up-circle-dollar regular icons`
