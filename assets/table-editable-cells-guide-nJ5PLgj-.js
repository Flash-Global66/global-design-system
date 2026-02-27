import{af as e,ag as i}from"./index-Cx0cs9Aw.js";import{u as s}from"./index-dSk5yaT9.js";import"./iframe-bySc_Cox.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CeQnsxAM.js";import"./index-DrFu-skq.js";function c(l){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Componentes/Tablas/Celdas editables en Table"}),`
`,e.jsx(n.h1,{id:"guía-celdas-editables-en-gtable",children:"Guía: Celdas editables en GTable"}),`
`,e.jsxs(n.p,{children:["Esta guía describe cómo implementar ",e.jsx(n.strong,{children:"celdas editables"})," en la tabla (",e.jsx(n.code,{children:"GTable"}),"): qué son, cuándo conviene usarlas y las dos formas de implementación (rápida con ",e.jsx(n.code,{children:"cell-type"})," o personalizada con ",e.jsx(n.code,{children:"GCellEdit"}),")."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"qué-son-las-celdas-editables",children:"¿Qué son las celdas editables?"}),`
`,e.jsxs(n.p,{children:["Una ",e.jsx(n.strong,{children:"celda editable"})," es una celda en la que el usuario puede hacer clic para pasar a “modo edición”: se muestra un control (input, select, etc.) sobre la celda, el usuario modifica el valor y, al confirmar (Enter, blur o clic fuera), se cierra la edición y se actualiza el dato de la fila."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Flujo habitual:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vista normal:"})," se muestra el valor actual (texto o etiqueta)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Al hacer clic:"})," la celda pasa a modo edición y aparece el control (input o select)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Al salir:"})," Enter, blur del control o ",e.jsx(n.strong,{children:"clic fuera de la celda"})," cierra el modo edición y se guarda el valor."]}),`
`]}),`
`,e.jsxs(n.p,{children:["La tabla emite eventos (",e.jsx(n.code,{children:"cell-edit-open"}),", ",e.jsx(n.code,{children:"cell-edit-close"}),", ",e.jsx(n.code,{children:"cell-edit-change"}),", ",e.jsx(n.code,{children:"cell-edit-validate"}),") que permiten sincronizar estado, enviar analytics o ejecutar validación externa."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"dos-formas-de-implementar",children:"Dos formas de implementar"}),`
`,e.jsxs(n.p,{children:["Puedes elegir entre ",e.jsx(n.strong,{children:"dos enfoques"})," según el grado de personalización que necesites:"]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Enfoque"}),e.jsx("th",{children:"Cuándo usarlo"}),e.jsx("th",{children:"Qué necesitas"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("strong",{children:["Columna con ",e.jsx("code",{children:"cell-type"})]})}),e.jsx("td",{children:"Input o select estándar, sin diseño propio"}),e.jsxs("td",{children:[e.jsx("code",{children:'cell-type="input"'})," o ",e.jsx("code",{children:'cell-type="select"'})," + composable + ",e.jsx("code",{children:":cell-options"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("strong",{children:["Columna con ",e.jsx("code",{children:"GCellEdit"})]})}),e.jsx("td",{children:"Vista y edición totalmente personalizadas (varios controles, otro diseño)"}),e.jsxs("td",{children:["Slot ",e.jsx("code",{children:"#default"})," de la columna + componente ",e.jsx("code",{children:"GCellEdit"})," con slots ",e.jsx("code",{children:"#view"})," y ",e.jsx("code",{children:"#edit"})]})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"1-implementación-rápida-cell-type-input-o-select",children:["1. Implementación rápida: ",e.jsx(n.code,{children:"cell-type"})," (input o select)"]}),`
`,e.jsxs(n.p,{children:["Cuando la celda solo debe mostrar y editar un valor con un ",e.jsx(n.strong,{children:"input"})," o un ",e.jsx(n.strong,{children:"select"})," estándar, no hace falta definir template: basta con usar ",e.jsx(n.code,{children:"cell-type"})," y un composable."]}),`
`,e.jsx(n.h3,{id:"celda-tipo-input",children:"Celda tipo input"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Importa ",e.jsx(n.code,{children:"useTableCellInput"})," (la tabla usa internamente el componente ",e.jsx(n.code,{children:"GInput"}),")."]}),`
`,e.jsxs(n.li,{children:["Obtén ",e.jsx(n.code,{children:"cellOptions"})," con ",e.jsx(n.code,{children:"useTableCellInput(tableData, { placeholder, useRowIndex: true, ... })"}),"."]}),`
`,e.jsxs(n.li,{children:["En la columna: ",e.jsx(n.code,{children:'cell-type="input"'})," y ",e.jsx(n.code,{children:':cell-options="cellOptions"'}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<template>
  <g-table :data="tableData" border>
    <g-table-column prop="name" label="Nombre" />
    <g-table-column
      prop="comment"
      label="Comentario"
      cell-type="input"
      :cell-options="cellOptions"
    />
  </g-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GTable, GTableColumn, useTableCellInput } from '@flash-global66/g-table'

const tableData = ref([
  { name: 'Fila 1', comment: 'Texto inicial' },
  { name: 'Fila 2', comment: '' }
])

const { cellOptions } = useTableCellInput(tableData, {
  placeholder: 'Escriba un comentario...',
  useRowIndex: true
})
<\/script>
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clic"})," en la celda → se abre el input."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Blur"})," o ",e.jsx(n.strong,{children:"Enter"})," → se cierra la edición y se actualiza ",e.jsx(n.code,{children:"row.comment"}),"."]}),`
`,e.jsxs(n.li,{children:["Opciones útiles: ",e.jsx(n.code,{children:"placeholder"}),", ",e.jsx(n.code,{children:"emptyActionText"})," (texto cuando la celda está vacía), ",e.jsx(n.code,{children:"expandColspan"}),", ",e.jsx(n.code,{children:"expandDirection"}),", ",e.jsx(n.code,{children:"rules"})," (validación)."]}),`
`]}),`
`,e.jsx(n.h3,{id:"celda-tipo-select",children:"Celda tipo select"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Importa ",e.jsx(n.code,{children:"useTableCellSelect"}),"."]}),`
`,e.jsxs(n.li,{children:["Define las opciones como ",e.jsx(n.code,{children:"{ value, title }"})," (o ",e.jsx(n.code,{children:"label"}),")."]}),`
`,e.jsxs(n.li,{children:["Obtén ",e.jsx(n.code,{children:"cellOptions"})," con ",e.jsx(n.code,{children:"useTableCellSelect(tableData, { options, useRowIndex: true })"}),"."]}),`
`,e.jsxs(n.li,{children:["En la columna: ",e.jsx(n.code,{children:'cell-type="select"'})," y ",e.jsx(n.code,{children:':cell-options="cellOptions"'}),"."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<template>
  <g-table :data="tableData" border>
    <g-table-column prop="name" label="Nombre" />
    <g-table-column
      prop="status"
      label="Estado"
      cell-type="select"
      :cell-options="cellOptions"
    />
  </g-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GTable, GTableColumn, useTableCellSelect } from '@flash-global66/g-table'

const tableData = ref([
  { name: 'María', status: 'active' },
  { name: 'Juan', status: 'pending' }
])

const statusOptions = [
  { value: 'active', title: 'Activo' },
  { value: 'pending', title: 'Pendiente' },
  { value: 'inactive', title: 'Inactivo' }
]

const { cellOptions } = useTableCellSelect(tableData, {
  options: statusOptions,
  useRowIndex: true
})
<\/script>
`})}),`
`,e.jsxs(n.p,{children:["El label del select en modo edición se configura con la prop ",e.jsx(n.code,{children:"input-label"})," en ",e.jsx(n.code,{children:"GTableColumn"})," o con ",e.jsx(n.code,{children:"label"})," en las opciones del composable."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"2-implementación-personalizada-gcelledit",children:["2. Implementación personalizada: ",e.jsx(n.code,{children:"GCellEdit"})]}),`
`,e.jsxs(n.p,{children:["Cuando necesitas ",e.jsx(n.strong,{children:"vista y edición totalmente personalizadas"})," (varios controles, otro diseño o tipo de input), usa una columna con slot ",e.jsx(n.code,{children:"#default"})," y, dentro, el componente ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"GCellEdit"})}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"GCellEdit"})," se encarga de:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Alternar entre ",e.jsx(n.strong,{children:"vista"})," y ",e.jsx(n.strong,{children:"edición"})," (con transición)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Expandir"})," el overlay hacia la izquierda o la derecha (",e.jsx(n.code,{children:"expand-direction"}),", ",e.jsx(n.code,{children:"expand-colspan"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cerrar al hacer clic fuera"})," de la celda."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Enfocar automáticamente"})," el primer input, textarea o select dentro del slot ",e.jsx(n.code,{children:"#edit"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Solo tienes que definir ",e.jsx(n.strong,{children:"qué mostrar en vista"})," y ",e.jsx(n.strong,{children:"qué mostrar en edición"}),"."]}),`
`,e.jsx(n.h3,{id:"estructura-básica",children:"Estructura básica"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<g-table-column prop="miCampo" label="Mi columna" width="200">
  <template #default="{ row, column, $index }">
    <g-cell-edit
      v-model="row.isEditing"
      :row="row"
      :column="column"
      :index="$index"
      prop="miCampo"
      expand-direction="left"
      expand-colspan="1"
    >
      <template #view="{ toggle }">
        <!-- Contenido cuando NO está editando (solo lectura) -->
        <div class="w-full flex items-center justify-between">
          <span>{{ row.miCampo }}</span>
        </div>
      </template>

      <template #edit="{ close }">
        <!-- Contenido cuando SÍ está editando (inputs, botones, etc.) -->
        <div class="flex items-center gap-2 w-full px-2">
          <g-input
            v-model="row.miCampo"
            size="small"
            class="w-full"
            @keydown.enter="close"
            @blur="close"
          />
        </div>
      </template>
    </g-cell-edit>
  </template>
</g-table-column>
`})}),`
`,e.jsx(n.h3,{id:"props-que-debes-proporcionar",children:"Props que debes proporcionar"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:'v-model="row.isEditing"'})}),e.jsx(n.br,{}),`
`,"Controla si esa fila está en modo edición. Cada fila debe tener una propiedad booleana (por ejemplo ",e.jsx(n.code,{children:"isEditing"}),"); puede ser la misma para todas las filas o una por columna, según tu modelo de datos."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"row"})," y ",e.jsx(n.code,{children:"column"})]}),e.jsx(n.br,{}),`
`,"La fila y la columna que recibe el slot ",e.jsx(n.code,{children:"#default"})," de ",e.jsx(n.code,{children:"GTableColumn"}),"; la tabla y los eventos los usan para identificar la celda."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"index"})}),e.jsx(n.br,{}),`
`,"Índice de la fila (corresponde a ",e.jsx(n.code,{children:"$index"})," del slot)."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"prop"})}),e.jsx(n.br,{}),`
`,"Nombre de la propiedad del ",e.jsx(n.code,{children:"row"})," que se edita (por ejemplo ",e.jsx(n.code,{children:'"miCampo"'}),"). Se usa para la expansión del overlay y para los eventos."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"expand-direction"})}),e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:'"left"'})," o ",e.jsx(n.code,{children:'"right"'}),": dirección en la que crece el overlay al editar."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"expand-colspan"})}),e.jsx(n.br,{}),`
`,"Número de columnas que abarca el overlay (incluida la actual). Por ejemplo: ",e.jsx(n.code,{children:"1"})," = solo la celda; ",e.jsx(n.code,{children:"2"})," = celda actual más una columna en la dirección indicada."]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"slots",children:"Slots"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:'#view="{ toggle }"'})}),e.jsx(n.br,{}),`
`,"Contenido en modo solo lectura. El usuario entra en edición al hacer clic (o con foco y Enter/Espacio); internamente se llama a ",e.jsx(n.code,{children:"toggle"}),". No es necesario llamar a ",e.jsx(n.code,{children:"toggle"})," manualmente si usas el área clicable que envuelve el slot por defecto."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:'#edit="{ close }"'})}),e.jsx(n.br,{}),`
`,"Contenido en modo edición. Debes llamar a ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"close"})})," cuando quieras cerrar (por ejemplo en ",e.jsx(n.code,{children:"@keydown.enter"})," y ",e.jsx(n.code,{children:"@blur"})," del input). Si incluyes un input, textarea o select, el componente le dará foco al abrir y cerrará la edición al hacer ",e.jsx(n.strong,{children:"clic fuera"})," de la celda."]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"cómo-cerrar-la-edición",children:"Cómo cerrar la edición"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Desde dentro del slot ",e.jsx(n.code,{children:"#edit"}),":"]})," llama a ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"close()"})})," (por ejemplo en ",e.jsx(n.code,{children:"@keydown.enter"})," y ",e.jsx(n.code,{children:"@blur"})," del input)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Desde fuera:"})," un ",e.jsx(n.strong,{children:"clic en cualquier lugar fuera de la celda"})," cierra la edición automáticamente (el componente escucha ",e.jsx(n.code,{children:"mousedown"})," en el documento y llama a ",e.jsx(n.code,{children:"close"})," cuando el clic es fuera del contenedor de la celda)."]}),`
`]}),`
`,e.jsxs(n.p,{children:["No es necesario usar ",e.jsx(n.code,{children:"autofocus"})," en el input: si hay un input, textarea o select en ",e.jsx(n.code,{children:"#edit"}),", el componente intenta enfocarlo al abrir."]}),`
`,e.jsx(n.h3,{id:"datos-de-ejemplo",children:"Datos de ejemplo"}),`
`,e.jsx(n.p,{children:"Cada fila debe incluir una propiedad que indique si está en modo edición. Por ejemplo:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const tableData = ref([
  { name: 'Producto A', miCampo: 'Valor 1', isEditing: false },
  { name: 'Producto B', miCampo: 'Valor 2', isEditing: false }
])
`})}),`
`,e.jsxs(n.p,{children:["Al abrir o cerrar la edición, ",e.jsx(n.code,{children:"row.isEditing"})," se actualiza automáticamente mediante el ",e.jsx(n.code,{children:"v-model"})," de ",e.jsx(n.code,{children:"GCellEdit"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"expansión-del-overlay-columnas-que-abarca",children:"Expansión del overlay (columnas que abarca)"}),`
`,e.jsxs(n.p,{children:["Tanto con ",e.jsx(n.code,{children:"cell-type"})," como con ",e.jsx(n.code,{children:"GCellEdit"})," puedes hacer que, al editar, el overlay ",e.jsx(n.strong,{children:"ocupe más de una columna"})," (útil para inputs largos o selects con mucho texto)."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"expand-colspan"})}),e.jsx(n.br,{}),`
`,"Número de columnas que abarca el overlay (incluida la actual). Por ejemplo: ",e.jsx(n.code,{children:"2"})," = celda actual más una columna."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:e.jsx(n.code,{children:"expand-direction"})})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"right"'}),": el overlay crece hacia la derecha (valor por defecto cuando la columna no es la última)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"left"'}),": el overlay crece hacia la izquierda (recomendable en las últimas columnas)."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["En columnas con ",e.jsx(n.code,{children:"cell-type"}),", estas opciones se configuran en el composable (",e.jsx(n.code,{children:"expandColspan"}),", ",e.jsx(n.code,{children:"expandDirection"}),") o en las props de ",e.jsx(n.code,{children:"GTableColumn"})," (",e.jsx(n.code,{children:"expand-colspan"}),", ",e.jsx(n.code,{children:"expand-direction"}),"). En ",e.jsx(n.code,{children:"GCellEdit"})," son props directas del componente."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"eventos-de-la-tabla",children:"Eventos de la tabla"}),`
`,e.jsxs(n.p,{children:["La tabla emite estos eventos al usar celdas editables (tanto con ",e.jsx(n.code,{children:"cell-type"})," como con ",e.jsx(n.code,{children:"GCellEdit"}),"):"]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Evento"}),e.jsx("th",{children:"Cuándo se emite"}),e.jsx("th",{children:"Parámetros"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"cell-edit-open"})}),e.jsx("td",{children:"La celda entra en modo edición (clic o foco)"}),e.jsx("td",{children:e.jsx("code",{children:"(row, column)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"cell-edit-close"})}),e.jsx("td",{children:"La celda sale de modo edición (blur, Enter o clic fuera)"}),e.jsx("td",{children:e.jsx("code",{children:"(row, column)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"cell-edit-change"})}),e.jsx("td",{children:"El valor de la celda cambió (input o select)"}),e.jsx("td",{children:e.jsx("code",{children:"(row, column, newValue, oldValue)"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"cell-edit-validate"})}),e.jsx("td",{children:"Finalizó la validación de la celda (solo si hay reglas)"}),e.jsxs("td",{children:[e.jsx("code",{children:"(row, column, result)"})," con ",e.jsx("code",{children:"result.valid"})," y ",e.jsx("code",{children:"result.message"})]})]})]})]}),`
`,e.jsx(n.p,{children:"Puedes usarlos para registrar logs, enviar analytics, sincronizar con un backend o mostrar mensajes de error globales."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`<g-table
  :data="tableData"
  @cell-edit-open="onOpen"
  @cell-edit-close="onClose"
  @cell-edit-change="onChange"
  @cell-edit-validate="onValidate"
>
  <!-- columnas -->
</g-table>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"validación-columnas-con-cell-typeinput",children:["Validación (columnas con ",e.jsx(n.code,{children:'cell-type="input"'}),")"]}),`
`,e.jsxs(n.p,{children:["En columnas ",e.jsx(n.strong,{children:"tipo input"})," puedes definir reglas compatibles con ",e.jsx(n.code,{children:"async-validator"})," (igual que en ",e.jsx(n.code,{children:"GForm"}),") mediante las opciones del composable:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const { cellOptions } = useTableCellInput(tableData, {
  placeholder: 'Email',
  useRowIndex: true,
  rules: [
    { required: true, message: 'Requerido', trigger: 'blur' },
    { type: 'email', message: 'Email inválido', trigger: 'blur' }
  ]
})
`})}),`
`,e.jsxs(n.p,{children:["Si defines reglas, al salir de la celda se ejecuta la validación y se emite ",e.jsx(n.code,{children:"cell-edit-validate"}),". También puedes usar ",e.jsx(n.code,{children:"onValidationFailed"})," y ",e.jsx(n.code,{children:"onValidationSuccess"})," en las opciones del composable."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"resumen-rápido",children:"Resumen rápido"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Solo input o select estándar:"})," usa ",e.jsx(n.code,{children:'cell-type="input"'})," o ",e.jsx(n.code,{children:'cell-type="select"'})," con ",e.jsx(n.code,{children:"useTableCellInput"})," / ",e.jsx(n.code,{children:"useTableCellSelect"})," y ",e.jsx(n.code,{children:":cell-options"}),". No hace falta template."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Vista y edición totalmente personalizadas:"})," usa una columna con slot ",e.jsx(n.code,{children:"#default"})," y dentro ",e.jsx(n.code,{children:"GCellEdit"})," con slots ",e.jsx(n.code,{children:"#view"})," y ",e.jsx(n.code,{children:"#edit"}),". En ",e.jsx(n.code,{children:"#edit"})," llama a ",e.jsx(n.code,{children:"close"})," para cerrar; si incluyes un input, recibirá el foco al abrir y la edición se cerrará también al hacer clic fuera."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cerrar al hacer clic fuera:"})," ya está implementado en ",e.jsx(n.code,{children:"GCellEdit"}),"; no requiere código adicional."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reaccionar a apertura, cierre o cambio:"})," escucha en ",e.jsx(n.code,{children:"GTable"})," los eventos ",e.jsx(n.code,{children:"cell-edit-open"}),", ",e.jsx(n.code,{children:"cell-edit-close"}),", ",e.jsx(n.code,{children:"cell-edit-change"})," y, si usas validación, ",e.jsx(n.code,{children:"cell-edit-validate"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Para ver ejemplos en vivo, en Storybook consulta las historias de ",e.jsx(n.strong,{children:"Table"})," relacionadas con celdas editables (input, select, GCellEdit, eventos y expansión)."]})]})}function j(l={}){const{wrapper:n}={...s(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(c,{...l})}):c(l)}export{j as default};
