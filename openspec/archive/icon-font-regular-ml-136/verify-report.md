# Verificación · icon-font-regular-ml-136

```yaml
veredicto: pasa
ronda: 1
fecha: 2026-10-22
tareas_a_medias: []
cumplidas: 1/1
a_medias: 0
de_mas: 0
comandos:
  - cmd: rg -c "prefix: 'far', iconName: '(chart-simple|money-bills-simple|chart-mixed-up-circle-dollar)'" components/icon-font/src/lib/far-regular-pro.ts
    exit: 0
    esperado: "3"
    obtenido: "3"
    coincide: true
  - cmd: rg -U -o 'regular: \[[^\]]*\]' components/icon-font/src/icon-sets.ts | rg -c '"(chart-simple|money-bills-simple|chart-mixed-up-circle-dollar)"'
    exit: 0
    esperado: "3"
    obtenido: "3"
    coincide: true
  - cmd: git diff --name-only 0994be94..HEAD -- components/
    exit: 0
    esperado: "components/icon-font/src/icon-sets.ts y components/icon-font/src/lib/far-regular-pro.ts, nada más"
    obtenido: "components/icon-font/src/icon-sets.ts / components/icon-font/src/lib/far-regular-pro.ts"
    coincide: true
  - cmd: rg -U -o 'regular: \[[^\]]*\]' components/icon-font/src/icon-sets.ts | rg -o '"[^"]+"' | sort | uniq -d
    exit: 0
    esperado: "vacío"
    obtenido: "vacío"
    coincide: true
  - cmd: calcifer check
    exit: 0
    esperado: "el plan no declara qué devuelve (no está en «Cómo se verifica»; lo pediste aparte)"
    obtenido: "4 archivos en el diff, ningún validador los cubre (SIN REVISAR); eslint, check-architecture y test los corre el CI, no se repiten acá"
    coincide: no_verificado
```

## Qué se cumplió

- **Tarea 1 · tres íconos en regular** (commit `9df12d89`):
  - `components/icon-font/src/icon-sets.ts` suma `"chart-simple"`, `"money-bills-simple"` y `"chart-mixed-up-circle-dollar"` al final del bloque `regular`, después de `"layer-group"`.
  - `components/icon-font/src/lib/far-regular-pro.ts` exporta `faChartSimple`, `faMoneyBillsSimple` y `faChartMixedUpCircleDollar` con `prefix: 'far'`.
  - Ningún otro archivo de `src/lib/` cambió (comando 3). Sin duplicados en `regular` (comando 4).
  - Mensaje de commit literal al declarado, sin attribution de IA. `CHANGELOG.md` y `package.json`: 0 líneas de diff.

## Qué quedó a medias

Nada.

## Qué se hizo de más

Nada. Fuera de `components/` solo están `proposal.md` y `tasks.md` del change, esperados.

## Observaciones (no tumban el veredicto)

- `calcifer check` sale con exit 0 pero «SIN REVISAR»: ningún validador del repo cubre esos archivos; no es lo mismo que una rama limpia.
- `yarn icon:add` no se re-ejecutó en el verify; que salió del script oficial lo sostiene la forma del diff, consistente con el generador.
- El `listo cuando` no tiene criterio ejecutable de que `yarn icon:add` «termina OK»: se infiere del resultado. Menor.
