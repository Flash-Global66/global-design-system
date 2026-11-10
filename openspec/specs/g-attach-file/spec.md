### Requirement: Borrado individual en el tipo default

Cuando el usuario pulsa la papelera de un archivo en un `GAttachFile` de tipo default, el componente SHALL emitir `update:modelValue` con la lista vigente sin ese archivo, conservando el resto y su orden.

#### Scenario: Borrar uno de tres archivos

- **GIVEN** un `GAttachFile` tipo default con `multiple` que se montó sin archivos y después recibió tres
- **WHEN** se pulsa la papelera del segundo archivo
- **THEN** emite `update:modelValue` con el primero y el tercero, en ese orden

#### Scenario: Borrar después de una nueva alta

- **GIVEN** un `GAttachFile` tipo default al que, después de un borrado, le llega una lista nueva de archivos
- **WHEN** se pulsa la papelera de uno de ellos
- **THEN** emite `update:modelValue` con la lista nueva menos ese archivo, sin perder los demás
