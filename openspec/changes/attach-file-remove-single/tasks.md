# Tareas · BMB-4337 borrado individual en g-attach-file (tipo default)

- [x] **1 · Spec que reproduce el borrado individual**
  - archivos: `components/attach-file/tests/DefaultType.spec.ts`
  - depende de: ninguna
  - listo cuando: el spec monta `components/attach-file/src/default-type.vue` con `modelValue: []` y `multiple`, le pasa 3 archivos con `setProps`, hace clic en la papelera del segundo y espera un `update:modelValue` con los otros 2 (primero y tercero, en orden). Otro caso borra después de una segunda alta (`setProps` con una lista nueva) y espera la lista nueva menos el borrado. Antes del fix queda **en rojo** por el bug
  - commit: `test(attach-file): cubre el borrado individual en el tipo default`

- [x] **2 · El handler de borrado lee el modelValue vigente**
  - archivos: `components/attach-file/src/default-type.vue`
  - depende de: 1
  - listo cuando: `removeFile` es un `computed(() => createRemoveFileHandler(safeFiles.value, emit))`, el spec de la tarea 1 pasa, y `rg "createRemoveFileHandler\(props\.modelValue" components/attach-file/src` no devuelve nada
  - commit: `fix(attach-file): el borrado en el tipo default usa la lista vigente`
