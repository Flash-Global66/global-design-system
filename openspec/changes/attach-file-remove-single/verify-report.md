# Verificación · attach-file-remove-single

```yaml
veredicto: pasa
ronda: 1
fecha: 2026-11-10
tareas_a_medias: []
cumplidas: 2/2
a_medias: 0
de_mas: 2
escenarios: 1/2
comandos:
  - cmd: ../../../node_modules/.bin/vitest run components/attach-file
    exit: 0
    esperado: 'Test Files  1 passed (1), 0 failed (cantidad de tests provisional)'
    obtenido: 'Test Files  1 passed (1) · Tests  4 passed (4)'
    coincide: true
  - cmd: rg -c "createRemoveFileHandler\(props\.modelValue" components/attach-file/src
    exit: 1
    esperado: 'sin salida y exit 1'
    obtenido: 'sin salida y exit 1'
    coincide: true
  - cmd: ../../../node_modules/.bin/eslint --ext .vue,.ts components/attach-file/src/default-type.vue components/attach-file/tests
    exit: 0
    esperado: 'exit 0'
    obtenido: 'exit 0, sin salida'
    coincide: true
  - cmd: git diff --name-only ee000ea6..HEAD -- components
    exit: 0
    esperado: 'solo components/attach-file/src/default-type.vue y components/attach-file/tests/DefaultType.spec.ts'
    obtenido: 'components/attach-file/src/default-type.vue, components/attach-file/tests/DefaultType.spec.ts'
    coincide: true
  - cmd: 'vitest run components/attach-file sobre ea81ce54 (spec sin el fix, worktree temporal)'
    exit: 1
    esperado: 'en rojo por el bug (listo cuando de la tarea 1)'
    obtenido: 'Test Files 1 failed (1) · Tests 3 failed | 1 passed (4): los tres de borrado reciben [] en vez de los 2 restantes'
    coincide: true
  - cmd: calcifer check origin/main
    exit: 0
    esperado: 'el plan no lo declara'
    obtenido: 'SIN REVISAR: ningún validador local cubre los 5 archivos (eslint y test delegados a CI)'
    coincide: no_verificado
```

## Veredicto: pasa

Las dos tareas cumplen su `listo cuando`, los cuatro comandos de «Cómo se verifica» devuelven lo que el plan dice, y el spec estaba en rojo antes del fix. Hay dos cosas para leer: un escenario tiene evidencia incompleta y hay dos casos de test que no pidió ninguna tarea.

**Cumplidas: 2 de 2**

- **Tarea 1.** Prueba: `components/attach-file/tests/DefaultType.spec.ts`.
  - Monta `default-type.vue` con `modelValue: []` y `multiple`, le pasa 3 archivos con `setProps`, hace clic en la segunda papelera y espera `[first, third]`.
  - Otro caso hace una segunda alta con `setProps` (`[x, y, z]`), borra y espera `[y, z]`.
  - Confirmé que estaba en rojo antes del fix. En `ea81ce54` fallan 3 de 4 tests con `expected [] to deeply equal [File, File]`. Lo corrí en un worktree temporal que después borré.
- **Tarea 2.** Prueba: `components/attach-file/src/default-type.vue:216-218`.
  - `removeFile` quedó como `computed(() => createRemoveFileHandler(safeFiles.value, emit))`.
  - El spec de la tarea 1 pasa (4/4).
  - El `rg` no devuelve nada y sale con exit 1.
- Los mensajes de commit son los que declara cada tarea.
- El `proposal.md` no se tocó después de `df35f8fd`.

**A medias:** ninguna.

**De más (2, aceptables):**

- `DefaultType.spec.ts`, caso «muestra una papelera por cada archivo cargado después de un setProps». Ninguna tarea lo pide. Pasa también sin el fix, así que no cubre el bug: comprueba que el test encuentra bien las papeleras.
- `DefaultType.spec.ts`, caso «emite también change con los otros dos archivos al borrar el segundo». Ninguna tarea lo pide. Cubre otro evento, `change`, con la misma causa raíz, y estaba en rojo antes del fix.
- Los dos están dentro del archivo declarado y no tocan código de producción. Ningún criterio los revisó, pero son aceptables.
- **No lo cuento como de más:** el commit `ea81ce54 style(attach-file): formatea el spec del tipo default`.
  - El diff final de ese archivo es el de la tarea 1; el commit solo cambia el formato.
  - Lo que sí es un desvío de proceso: el commit de la tarea 1 se hizo con `--no-verify`, se saltó el prettier de lint-staged y hizo falta un commit que ninguna tarea declara.

**Escenarios: 1/2 con evidencia**

- «Borrar uno de tres archivos»: lo cubre `DefaultType.spec.ts` › «emite los otros dos archivos, en orden, al borrar el segundo de tres».
- «Borrar después de una nueva alta»: **probado en parte, lo cuento sin evidencia.**
  - El escenario parte de que el componente recibe la lista nueva _después de un borrado_.
  - El test «borra sobre la lista nueva después de una segunda alta» hace dos `setProps` seguidos sin borrar nada en el medio. Ese borrado previo nunca se ejecuta.
  - Lo mismo pasa con el «Criterio del cambio entero» del proposal: pide borrar, agregar y borrar otra vez, y ningún test hace esa secuencia.
  - La evidencia no lo contradice, así que no tumba el veredicto. Si se archiva así, `openspec/specs/` va a afirmar algo que ningún test ejercita.

**Hallazgos sobre el plan**

- El `listo cuando` de la tarea 1 («otro caso borra después de una segunda alta») pide menos que su propio escenario y que el criterio del proposal. Por eso la tarea cumple y el escenario queda incompleto.
- La cantidad provisional de tests ya tiene número real: **4 tests**, `Test Files 1 passed (1) · Tests 4 passed (4)`.
- Los warnings de Vue por la prop `showUploadButton` faltante salen en la consola del test. No afectan el resultado.

**Validación y comandos**

- **`calcifer check`:** sin argumentos sale con exit 1 porque no sabe contra qué rama comparar (`origin/develop`, `origin/main` y `origin/release` tienen el mismo ancestro).
  - Lo corrí contra `origin/main`, porque la Base `ee000ea6` es exactamente `origin/main`. Exit 0, pero dice «SIN REVISAR»: deja eslint y tests a CI y no revisó ninguno de los 5 archivos.
  - Lo que cubre el lint y los tests acá son los comandos del plan, que corrí yo. Por eso esa fila va con `no_verificado`.
- **Comandos del plan:** los cuatro coinciden con lo declarado (detalle en la cabecera). No corrí la suite entera del repo.
- **`calcifer rules`:** ninguna rule de los dos archivos tocados choca con lo que pedían las tareas.
