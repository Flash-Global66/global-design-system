import{R as q,d as de,c as h,r as t,w as Z,o as me,x as b,k as B,m as u,a2 as ue,u as r,l as v,b as x,y as H,s as _,n as ve,a1 as pe,e as l,D as ge,ak as ee,V as fe,H as he}from"./vue.esm-bundler-C43JrhH2.js";import{F as w}from"./index-B1PxvDbZ.js";import{H as be,G as xe}from"./index-DH2w0SzE.js";import{m as R,e as M,u as we}from"./index-D5bIuBCX.js";import{b as ye,d as Se,w as Ce}from"./install-CfJGiCvs.js";import{u as De}from"./index-CdSB2Bdf.js";import{e as Ne,G as m}from"./ConfigProvider-Br84NlF7.js";import{u as Ae,a as Ie}from"./use-form-common-props-C2RO3VSy.js";import{b as Pe}from"./style-c1qAcfu9.js";import{d as Te,t as Ve}from"./error-Cq9Fpw4b.js";import{G as ke,a as Fe}from"./index-BocNJzgi.js";import{G as Ee}from"./index-1xDgUv1h.js";import{G as Oe}from"./index-G8MyKf0F.js";import{g as D,a as ze,b as ae}from"./documentation-stories-DKOl0nGm.js";import"./index-fhkPmQjX.js";import"./index-DmfABaPz.js";import"./_arrayPush-BhjrZnJY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./constants-Dnj8X3EN.js";import"./index-CRx4dHSJ.js";import"./index-BDKGuxIf.js";import"./event-BB_Ol6Sd.js";import"./typescript-Bp3YSIOJ.js";import"./index-BjhK0CHr.js";import"./index-D_xYoXKA.js";import"./index-Bn_3zeFh.js";import"./index-CvPWi8JN.js";import"./index-DVmIhHla.js";import"./index-Bjxdgq_P.js";const Ge=a=>["",...Ne].includes(a),$="update:modelValue",j="change",K="input",Re=ye({modelValue:{type:[Boolean,String,Number],default:!1},disabled:Boolean,loading:Boolean,size:{type:String,validator:Ge},width:{type:[String,Number],default:""},inlinePrompt:Boolean,inactiveActionIcon:{type:String},activeActionIcon:{type:String},activeIcon:{type:String},inactiveIcon:{type:String},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:Se(Function)},id:String,tabindex:{type:[String,Number]},...De(["ariaLabel"])}),Le={[$]:a=>R(a)||q(a)||M(a),[j]:a=>R(a)||q(a)||M(a),[K]:a=>R(a)||q(a)||M(a)},qe=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex"],Be=["aria-hidden"],He=["aria-hidden"],Me=["aria-hidden"],te="GSwitch",W=de({name:te,__name:"switch",props:Re,emits:Le,setup(a,{expose:n,emit:c}){const i=a,p=c,{formItem:g}=xe(),L=Ae(),o=we("switch"),{inputId:ne}=be(i,{formItemContext:g}),S=Ie(h(()=>i.loading)),J=t(i.modelValue!==!1),y=t(),ie=t(),oe=h(()=>[o.b(),o.m(L.value),o.is("disabled",S.value),o.is("checked",s.value)]),se=h(()=>[o.e("label"),o.em("label","left"),o.is("active",!s.value)]),re=h(()=>[o.e("label"),o.em("label","right"),o.is("active",s.value)]),ce=h(()=>({width:Pe(i.width)}));Z(()=>i.modelValue,()=>{J.value=!0});const Q=h(()=>J.value?i.modelValue:!1),s=h(()=>Q.value===i.activeValue);[i.activeValue,i.inactiveValue].includes(Q.value)||(p($,i.inactiveValue),p(j,i.inactiveValue),p(K,i.inactiveValue)),Z(s,e=>{y.value.checked=e,i.validateEvent&&g?.validate?.("change").catch(f=>Te())});const C=()=>{const e=s.value?i.inactiveValue:i.activeValue;p($,e),p(j,e),p(K,e),ge(()=>{y.value.checked=s.value})},X=()=>{if(S.value)return;const{beforeChange:e}=i;if(!e){C();return}const f=e();[ee(f),R(f)].includes(!0)||Ve(te,"beforeChange must return type `Promise<boolean>` or `boolean`"),ee(f)?f.then(Y=>{Y&&C()}).catch(Y=>{}):f&&C()},le=()=>{y.value?.focus?.()};return me(()=>{y.value.checked=s.value}),n({focus:le,checked:s}),(e,f)=>(l(),b("div",{class:v(oe.value),onClick:pe(X,["prevent"])},[B("input",{id:r(ne),ref_key:"input",ref:y,class:v(r(o).e("input")),type:"checkbox",role:"switch","aria-checked":s.value,"aria-disabled":r(S),"aria-label":e.ariaLabel,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:r(S),tabindex:e.tabindex,onChange:C,onKeydown:ue(X,["enter"])},null,42,qe),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(l(),b("span",{key:0,class:v(se.value)},[e.inactiveIcon?(l(),x(r(w),{key:0,name:e.inactiveIcon},null,8,["name"])):u("",!0),!e.inactiveIcon&&e.inactiveText?(l(),b("span",{key:1,"aria-hidden":s.value},H(e.inactiveText),9,Be)):u("",!0)],2)):u("",!0),B("span",{ref_key:"core",ref:ie,class:v(r(o).e("core")),style:ve(ce.value)},[e.inlinePrompt?(l(),b("div",{key:0,class:v(r(o).e("inner"))},[e.activeIcon||e.inactiveIcon?(l(),x(r(w),{key:0,name:s.value?e.activeIcon:e.inactiveIcon,class:v(r(o).is("icon"))},null,8,["name","class"])):e.activeText||e.inactiveText?(l(),b("span",{key:1,class:v(r(o).is("text")),"aria-hidden":!s.value},H(s.value?e.activeText:e.inactiveText),11,He)):u("",!0)],2)):u("",!0),B("div",{class:v(r(o).e("action"))},[e.loading?(l(),x(r(w),{key:0,name:"solid spinner",spin:"",class:v(r(o).is("loading"))},null,8,["class"])):s.value?_(e.$slots,"active-action",{key:1},()=>[e.activeActionIcon?(l(),x(r(w),{key:0,name:e.activeActionIcon},null,8,["name"])):u("",!0)]):s.value?u("",!0):_(e.$slots,"inactive-action",{key:2},()=>[e.inactiveActionIcon?(l(),x(r(w),{key:0,name:e.inactiveActionIcon},null,8,["name"])):u("",!0)])],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(l(),b("span",{key:1,class:v(re.value)},[e.activeIcon?(l(),x(r(w),{key:0,name:e.activeIcon},null,8,["name"])):u("",!0),!e.activeIcon&&e.activeText?(l(),b("span",{key:1,"aria-hidden":!s.value},H(e.activeText),9,Me)):u("",!0)],2)):u("",!0)],2))}});W.__docgenInfo={exportName:"default",displayName:"switch",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"manual focus to the switch component"}]},{name:"checked",tags:[{title:"description",content:"whether Switch is checked"}]}],slots:[{name:"active-action"},{name:"inactive-action"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/switch/src/switch.vue"]};const d=Ce(W,{Switch:W}),Ue="1.1.0",U={"@flash-global66/g-form":"^0.1.1","@flash-global66/g-icon-font":"^0.10.0","element-plus":"^2.9.0",vue:"^3.2.0"},wa={title:"Form/Switch",component:d,parameters:{docs:{description:{component:`
El componente Switch se utiliza para alternar entre dos estados opuestos.

> Versión actual: ${Ue}

## Características
- Estados binarios claros (on/off)
- Soporte para iconos personalizados usando IconFont
- Textos descriptivos configurables
- Diferentes tamaños disponibles (large, default, small)
- Estados de carga y deshabilitado
- Validación de formularios integrada con soporte para @flash-global66/g-form
- Accesibilidad completa con ARIA
- Funciones de prevención de cambio (beforeChange)
- Slots personalizados para acciones
- Soporte para valores extendidos (string, number, boolean)

## Integración con Formularios

El componente Switch está completamente integrado con el sistema de formularios:

- **Validación automática**: Cuando se usa dentro de un \`g-form-item\`, activa automáticamente la validación del campo padre
- **Control de eventos**: La prop \`validateEvent\` permite controlar cuándo se dispara la validación
- **Estados de formulario**: Respeta los estados disabled y size heredados del formulario padre
- **Función beforeChange**: Permite validación personalizada antes de cambiar el valor

### Instalación

\`\`\`bash
yarn add @flash-global66/g-switch
\`\`\`

### Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { GSwitch } from '@flash-global66/g-switch'

# recomendado importar en los estilos globales
import '@flash-global66/g-switch/switch.styles.scss'
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias: Puede que funcione con otras versiones, pero no se garantiza.
${ze(U)}

> Revisar la documentación de cada dependencia para más información.

\`\`\`bash
# Dependencias global66
yarn add ${ae(U)}

# Dependencias externas
yarn add ${ae(U,!0)}
\`\`\`

### Ejemplo de uso básico

\`\`\`html
<script setup lang="ts">
import { ref } from 'vue';
import { GSwitch } from '@flash-global66/g-switch';

const value = ref(false);
<\/script>

<template>
  <g-switch v-model="value" />
</template>
\`\`\`

### Ejemplo con validación de formulario

\`\`\`html
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { GForm, GFormItem } from '@flash-global66/g-form';
import { GSwitch } from '@flash-global66/g-switch';

const formData = reactive({
  acceptTerms: false
});

const rules = {
  acceptTerms: [
    { required: true, message: 'Debes aceptar los términos y condiciones' }
  ]
};
<\/script>

<template>
  <g-form :model="formData" :rules="rules">
    <g-form-item label="Términos y condiciones" prop="acceptTerms">
      <g-switch 
        v-model="formData.acceptTerms"
        active-text="Acepto"
        inactive-text="No acepto"
        active-icon="solid check"
        inactive-icon="solid times"
      />
    </g-form-item>
  </g-form>
</template>
\`\`\`
`}}},argTypes:{modelValue:{description:"Valor de enlace del Switch (v-model). Debe ser equivalente a active-value o inactive-value.",control:"boolean",table:{category:"Principales",type:{summary:"boolean | string | number"},defaultValue:{summary:"false"}}},activeValue:{description:"Valor del switch cuando está en estado activo.",control:"text",table:{category:"Principales",type:{summary:"boolean | string | number"},defaultValue:{summary:"true"}}},inactiveValue:{description:"Valor del switch cuando está en estado inactivo.",control:"text",table:{category:"Principales",type:{summary:"boolean | string | number"},defaultValue:{summary:"false"}}},size:{description:"Tamaño del Switch.",control:"select",options:["","large","default","small"],table:{category:"Apariencia",type:{summary:"'large' | 'default' | 'small'"},defaultValue:{summary:"default"}}},width:{description:"Ancho personalizado del Switch.",control:"text",table:{category:"Apariencia",type:{summary:"number | string"},defaultValue:{summary:"auto"}}},inlinePrompt:{description:"Si el icono o texto se muestra dentro del punto del switch.",control:"boolean",table:{category:"Apariencia",type:{summary:"boolean"},defaultValue:{summary:"false"}}},activeIcon:{description:"Icono mostrado cuando está en estado activo.",control:"select",options:["",...D()],table:{category:"Iconos",type:{summary:"IconString"},defaultValue:{summary:"—"}}},inactiveIcon:{description:"Icono mostrado cuando está en estado inactivo.",control:"select",options:["",...D()],table:{category:"Iconos",type:{summary:"IconString"},defaultValue:{summary:"—"}}},activeActionIcon:{description:"Icono mostrado en la acción cuando está en estado activo.",control:"select",options:["",...D()],table:{category:"Iconos",type:{summary:"IconString"},defaultValue:{summary:"—"}}},inactiveActionIcon:{description:"Icono mostrado en la acción cuando está en estado inactivo.",control:"select",options:["",...D()],table:{category:"Iconos",type:{summary:"IconString"},defaultValue:{summary:"—"}}},activeText:{description:"Texto mostrado cuando está en estado activo.",control:"text",table:{category:"Texto",type:{summary:"string"},defaultValue:{summary:""}}},inactiveText:{description:"Texto mostrado cuando está en estado inactivo.",control:"text",table:{category:"Texto",type:{summary:"string"},defaultValue:{summary:""}}},disabled:{description:"Si el Switch está deshabilitado.",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{description:"Si el Switch está en estado de carga.",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},validateEvent:{description:"Si debe activar la validación del formulario cuando cambia el valor.",control:"boolean",table:{category:"Validación y Formularios",type:{summary:"boolean"},defaultValue:{summary:"true"}}},beforeChange:{description:"Función ejecutada antes del cambio. Si retorna false o una Promise rechazada, previene el cambio.",table:{category:"Validación y Formularios",type:{summary:"() => boolean | Promise<boolean>"},defaultValue:{summary:"—"}}},name:{description:"Atributo name nativo del input del Switch.",control:"text",table:{category:"Atributos HTML",type:{summary:"string"},defaultValue:{summary:""}}},id:{description:"ID para el input del Switch.",control:"text",table:{category:"Atributos HTML",type:{summary:"string"},defaultValue:{summary:"auto-generado"}}},tabindex:{description:"Orden de tabulación del input.",control:"text",table:{category:"Atributos HTML",type:{summary:"string | number"},defaultValue:{summary:"—"}}},ariaLabel:{description:"Etiqueta ARIA para accesibilidad cuando no hay texto visible.",control:"text",table:{category:"Accesibilidad",type:{summary:"string"},defaultValue:{summary:"—"}}},onChange:{description:"Se dispara cuando el valor del switch cambia.",table:{category:"Eventos",type:{summary:"(value: boolean | string | number) => void"}}},"onUpdate:modelValue":{description:"Se dispara para actualizar el v-model.",table:{category:"Eventos",type:{summary:"(value: boolean | string | number) => void"}}},"active-action":{description:"Contenido personalizado para la acción cuando está activo.",table:{category:"Slots",type:{summary:"slot"}}},"inactive-action":{description:"Contenido personalizado para la acción cuando está inactivo.",table:{category:"Slots",type:{summary:"slot"}}}},args:{modelValue:!1,disabled:!1,loading:!1,size:"",width:"",inlinePrompt:!1,activeIcon:"",inactiveIcon:"",activeActionIcon:"",inactiveActionIcon:"",activeText:"",inactiveText:"",activeValue:!0,inactiveValue:!1,name:"",validateEvent:!0,id:"",tabindex:"",ariaLabel:""}},N={name:"Uso básico",parameters:{docs:{description:{story:"El uso más básico del Switch. Vincula v-model a una variable de tipo Boolean. Las variables CSS --el-switch-on-color y --el-switch-off-color deciden el color de fondo en dos estados."},source:{code:'<g-switch v-model="value" />'}}},render:a=>({components:{GSwitch:d,GConfigProvider:m},setup(){const n=fe(a,"modelValue");return{args:a,value:n}},template:`
      <g-config-provider>
        <div class="space-y-4">
          <g-switch 
            v-model="value"
            v-bind="args"
          />
          <p>Valor actual: {{ value }}</p>
        </div>
      </g-config-provider>
    `})},A={name:"Tamaños",parameters:{docs:{description:{story:"El Switch está disponible en diferentes tamaños: large, default (por defecto) y small."},source:{code:`<g-switch v-model="value" size="large" />
<g-switch v-model="value" />
<g-switch v-model="value" size="small" />`}}},render:()=>({components:{GSwitch:d,GConfigProvider:m},setup(){const a=t(!0),n=t(!0),c=t(!0);return{valueLarge:a,valueDefault:n,valueSmall:c}},template:`
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-16">Large:</span>
            <g-switch v-model="valueLarge" size="large" />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-16">Default:</span>
            <g-switch v-model="valueDefault" />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-16">Small:</span>
            <g-switch v-model="valueSmall" size="small" />
          </div>
        </div>
      </g-config-provider>
    `})},I={name:"Descripción de texto",parameters:{docs:{description:{story:"Puedes agregar los atributos active-text e inactive-text para mostrar textos. Usa el atributo inline-prompt para controlar si el texto se muestra dentro del punto."},source:{code:`<!-- Con texto -->
<g-switch
  v-model="value"
  active-text="Pagar por año"
  inactive-text="Pagar por mes"
/>

<!-- Inline prompt -->
<g-switch
  v-model="value"
  active-text="Pagar por año"
  inactive-text="Pagar por mes"
  inline-prompt
  width="160px"
/>

<!-- Texto corto -->
<g-switch
  v-model="value"
  active-text="On"
  inactive-text="Off"
  inline-prompt
/>`}}},render:()=>({components:{GSwitch:d,GConfigProvider:m},setup(){const a=t(!0),n=t(!0),c=t(!0),i=t(!0);return{value1:a,value2:n,value3:c,value4:i}},template:`
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Con texto:</span>
            <g-switch
              v-model="value1"
              active-text="Pagar por año"
              inactive-text="Pagar por mes"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Inline prompt:</span>
            <g-switch
              v-model="value2"
              active-text="Pagar por año"
              inactive-text="Pagar por mes"
              inline-prompt
              width="160px"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Texto corto:</span>
            <g-switch
              v-model="value3"
              active-text="On"
              inactive-text="Off"
              inline-prompt
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Solo activo:</span>
            <g-switch
              v-model="value4"
              active-text="Abierto"
              inline-prompt
            />
          </div>
        </div>
      </g-config-provider>
    `})},P={name:"Iconos personalizados",parameters:{docs:{description:{story:"Puedes agregar los atributos active-icon e inactive-icon para mostrar iconos. Usa el atributo inline-prompt para controlar si el icono se muestra dentro del punto."},source:{code:`<!-- Aprobado/Rechazado -->
<g-switch
  v-model="value"
  active-icon="solid check"
  inactive-icon="solid times"
/>

<!-- Inline prompt -->
<g-switch
  v-model="value"
  active-icon="solid check"
  inactive-icon="solid times"
  inline-prompt
/>

<!-- Tema claro/oscuro -->
<g-switch
  v-model="value"
  active-icon="solid lightbulb"
  inactive-icon="regular circle-xmark"
  inline-prompt
/>`}}},render:()=>({components:{GSwitch:d,GConfigProvider:m},setup(){const a=t(!0),n=t(!0),c=t(!0),i=t(!0);return{value1:a,value2:n,value3:c,value4:i}},template:`
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-6">
            <span class="w-40 text-sm">Aprobado/Rechazado:</span>
            <g-switch
              v-model="value1"
              active-icon="solid check"
              inactive-icon="solid times"
            />
          </div>
          <div class="flex items-center gap-6">
            <span class="w-40 text-sm">Inline prompt:</span>
            <g-switch
              v-model="value2"
              active-icon="solid check"
              inactive-icon="solid times"
              inline-prompt
            />
          </div>
          <div class="flex items-center gap-6">
            <span class="w-40 text-sm">Tema claro/oscuro:</span>
            <g-switch
              v-model="value3"
              active-icon="solid lightbulb"
              inactive-icon="regular circle-xmark"
              inline-prompt
            />
          </div>
          <div class="flex items-center gap-6">
            <span class="w-40 text-sm">Visibilidad:</span>
            <g-switch
              v-model="value4"
              active-icon="regular eye"
              inactive-icon="regular eye-slash"
              inline-prompt
            />
          </div>
        </div>
      </g-config-provider>
    `})},T={name:"Tipos de valor extendidos",parameters:{docs:{description:{story:"Puedes configurar los atributos active-value e inactive-value. Ambos reciben un valor de tipo Boolean, String o Number."},source:{code:`<!-- Números -->
<g-switch
  v-model="value"
  :active-value="100"
  :inactive-value="0"
  active-text="100"
  inactive-text="0"
/>

<!-- Strings -->
<g-switch
  v-model="value"
  active-value="yes"
  inactive-value="no"
  active-text="Sí"
  inactive-text="No"
/>

<!-- Mixto -->
<g-switch
  v-model="value"
  :active-value="1"
  inactive-value="off"
  active-text="On"
  inactive-text="Off"
/>`}}},render:()=>({components:{GSwitch:d,GConfigProvider:m},setup(){const a=t(100),n=t("yes"),c=t(1);return{value1:a,value2:n,value3:c}},template:`
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Números:</span>
            <g-switch
              v-model="value1"
              :active-value="100"
              :inactive-value="0"
              active-text="100"
              inactive-text="0"
            />
            <span class="text-sm">Valor: {{ value1 }}</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Strings:</span>
            <g-switch
              v-model="value2"
              active-value="yes"
              inactive-value="no"
              active-text="Sí"
              inactive-text="No"
            />
            <span class="text-sm">Valor: {{ value2 }}</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Mixto:</span>
            <g-switch
              v-model="value3"
              :active-value="1"
              inactive-value="off"
              active-text="On"
              inactive-text="Off"
            />
            <span class="text-sm">Valor: {{ value3 }}</span>
          </div>
        </div>
      </g-config-provider>
    `})},V={name:"Deshabilitado",parameters:{docs:{description:{story:"Agregar el atributo disabled deshabilita el Switch."},source:{code:`<g-switch v-model="value" disabled />

<!-- Con texto -->
<g-switch
  v-model="value"
  disabled
  active-text="Activo"
  inactive-text="Inactivo"
/>`}}},render:()=>({components:{GSwitch:d,GConfigProvider:m},setup(){const a=t(!0),n=t(!1);return{value1:a,value2:n}},template:`
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Deshabilitado ON:</span>
            <g-switch v-model="value1" disabled />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Deshabilitado OFF:</span>
            <g-switch v-model="value2" disabled />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Con texto:</span>
            <g-switch
              v-model="value1"
              disabled
              active-text="Activo"
              inactive-text="Inactivo"
            />
          </div>
        </div>
      </g-config-provider>
    `})},k={name:"Estado de carga",parameters:{docs:{description:{story:"Configurar el atributo loading a true indica un estado de carga en el Switch."},source:{code:`<g-switch v-model="value" loading />

<!-- Con texto -->
<g-switch
  v-model="value"
  loading
  active-text="Guardando..."
  inactive-text="Desconectado"
/>`}}},render:()=>({components:{GSwitch:d,GConfigProvider:m},setup(){const a=t(!0),n=t(!1);return{value1:a,value2:n}},template:`
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Cargando ON:</span>
            <g-switch v-model="value1" loading />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Cargando OFF:</span>
            <g-switch v-model="value2" loading />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Con texto:</span>
            <g-switch
              v-model="value1"
              loading
              active-text="Guardando..."
              inactive-text="Desconectado"
            />
          </div>
        </div>
      </g-config-provider>
    `})},F={name:"Prevenir cambio",parameters:{docs:{description:{story:"Configura la propiedad before-change. Si se devuelve false o se devuelve una Promise que luego es rechazada, se detendrá el cambio."},source:{code:`<!-- Con confirmación -->
<g-switch
  v-model="value"
  :before-change="beforeChange"
  active-text="Activar"
  inactive-text="Desactivar"
/>

<script setup>
const beforeChange = () => {
  return confirm('¿Estás seguro de que quieres cambiar el estado?');
};

// Con Promise
const beforeChangeAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(confirm('¿Confirmar cambio después de 1 segundo?'));
    }, 1000);
  });
};
<\/script>`}}},render:()=>({components:{GSwitch:d,GConfigProvider:m},setup(){const a=t(!1),n=t(!1);return{value1:a,value2:n,beforeChange1:()=>confirm("¿Estás seguro de que quieres cambiar el estado?"),beforeChange2:()=>new Promise(p=>{setTimeout(()=>{p(confirm("¿Confirmar cambio después de 1 segundo?"))},1e3)})}},template:`
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Con confirmación:</span>
            <g-switch
              v-model="value1"
              :before-change="beforeChange1"
              active-text="Activar"
              inactive-text="Desactivar"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Con Promise:</span>
            <g-switch
              v-model="value2"
              :before-change="beforeChange2"
              active-text="Confirmar"
              inactive-text="Cancelar"
            />
          </div>
        </div>
      </g-config-provider>
    `})},E={name:"Iconos de acción personalizados",parameters:{docs:{description:{story:"Puedes agregar los atributos active-action-icon e inactive-action-icon para mostrar iconos en las acciones."},source:{code:`<!-- Encendido/Apagado -->
<g-switch
  v-model="value"
  active-action-icon="solid check-circle"
  inactive-action-icon="regular circle-xmark"
/>

<!-- Configuración -->
<g-switch
  v-model="value"
  active-action-icon="regular gear"
  inactive-action-icon="regular gear"
  active-text="Avanzado"
  inactive-text="Básico"
/>

<!-- Notificaciones -->
<g-switch
  v-model="value"
  active-action-icon="regular bell"
  inactive-action-icon="regular circle-xmark"
  width="60px"
/>`}}},render:()=>({components:{GSwitch:d,GConfigProvider:m},setup(){const a=t(!0),n=t(!1),c=t(!0);return{value1:a,value2:n,value3:c}},template:`
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span>Encendido/Apagado:</span>
            <g-switch
              v-model="value1"
              active-action-icon="solid check-circle"
              inactive-action-icon="regular circle-xmark"
            />
          </div>
          <div class="flex items-center gap-4">
            <span>Configuración:</span>
            <g-switch
              v-model="value2"
              active-action-icon="regular gear"
              inactive-action-icon="regular gear"
              active-text="Avanzado"
              inactive-text="Básico"
            />
          </div>
          <div class="flex items-center gap-4">
            <span>Notificaciones:</span>
            <g-switch
              v-model="value3"
              active-action-icon="regular bell"
              inactive-action-icon="regular circle-xmark"
              width="60px"
            />
          </div>
        </div>
      </g-config-provider>
    `})},O={name:"Slots de acción personalizados",parameters:{docs:{description:{story:"Puedes usar los slots active-action e inactive-action para personalizar las acciones."},source:{code:`<!-- Con badges -->
<g-switch v-model="value" width="80px">
  <template #active-action>
    <span class="bg-green-500 text-white text-sm px-2 py-1.5 rounded font-medium">ON</span>
  </template>
  <template #inactive-action>
    <span class="bg-red-500 text-white text-sm px-2 py-1.5 rounded font-medium">OFF</span>
  </template>
</g-switch>

<!-- Con números -->
<g-switch v-model="value" width="60px">
  <template #active-action>
    <span class="text-sm font-bold">1</span>
  </template>
  <template #inactive-action>
    <span class="text-sm font-bold">0</span>
  </template>
</g-switch>`}}},render:()=>({components:{GSwitch:d,GConfigProvider:m},setup(){const a=t(!0),n=t(!1);return{value1:a,value2:n}},template:`
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Con badges:</span>
            <g-switch v-model="value1" width="80px">
              <template #active-action>
                <span class="bg-green-500 text-white text-sm px-2 py-1.5 rounded font-medium">ON</span>
              </template>
              <template #inactive-action>
                <span class="bg-red-500 text-white text-sm px-2 py-1.5 rounded font-medium">OFF</span>
              </template>
            </g-switch>
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Con números:</span>
            <g-switch v-model="value2" width="60px">
              <template #active-action>
                <span class="text-sm font-bold">1</span>
              </template>
              <template #inactive-action>
                <span class="text-sm font-bold">0</span>
              </template>
            </g-switch>
          </div>
        </div>
      </g-config-provider>
    `})},z={name:"Ancho personalizado",parameters:{docs:{description:{story:"Puedes personalizar el ancho del Switch usando la propiedad width."},source:{code:`<!-- Ancho 40px -->
<g-switch v-model="value" width="40px" />

<!-- Ancho 100px -->
<g-switch
  v-model="value"
  width="100px"
  active-text="On"
  inactive-text="Off"
  inline-prompt
/>

<!-- Ancho 140px -->
<g-switch
  v-model="value"
  width="140px"
  active-text="Habilitado"
  inactive-text="Deshabilitado"
  inline-prompt
/>`}}},render:()=>({components:{GSwitch:d,GConfigProvider:m},setup(){const a=t(!0),n=t(!0),c=t(!0);return{value1:a,value2:n,value3:c}},template:`
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Ancho 40px:</span>
            <g-switch v-model="value1" width="40px" />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Ancho 100px:</span>
            <g-switch
              v-model="value2"
              width="100px"
              active-text="On"
              inactive-text="Off"
              inline-prompt
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Ancho 140px:</span>
            <g-switch
              v-model="value3"
              width="140px"
              active-text="Habilitado"
              inactive-text="Deshabilitado"
              inline-prompt
            />
          </div>
        </div>
      </g-config-provider>
    `})},G={name:"Validación de formulario",parameters:{docs:{description:{story:"Ejemplo completo de Switch con validación de formulario usando g-form, g-form-item, g-input y g-button. Muestra cómo integrar el switch con el sistema de formularios del design system para validación automática."},source:{code:`<g-form 
  ref="formRef"
  :model="formData" 
  :rules="formRules"
  label-width="auto"
>
  <g-form-item label="Nombre de usuario" prop="username">
    <g-input 
      v-model="formData.username"
      placeholder="Ingresa tu nombre de usuario"
      prefix-icon="regular user"
    />
  </g-form-item>
  
  <g-form-item label="Acepto términos y condiciones" prop="acceptTerms">
    <g-switch 
      v-model="formData.acceptTerms"
      :active-value="true"
      :inactive-value="false"
      active-text="Acepto términos"
      inactive-text="No acepto"
    />
  </g-form-item>
  
  <g-form-item label="Habilitar notificaciones por email" prop="enableNotifications">
    <g-switch 
      v-model="formData.enableNotifications"
      active-text="Notificaciones ON"
      inactive-text="Notificaciones OFF"
    />
  </g-form-item>
  
  <g-form-item>
    <g-button @click="submitForm" variant="primary">
      Registrar usuario
    </g-button>
    <g-button @click="resetForm" variant="secondary">
      Limpiar formulario
    </g-button>
  </g-form-item>
</g-form>

<script setup>
import { ref, reactive } from 'vue';

const formRef = ref();
const formData = reactive({
  username: "",
  acceptTerms: false,
  enableNotifications: true,
});

const formRules = {
  username: [
    { required: true, message: "El nombre de usuario es requerido", trigger: "blur" },
    { min: 3, message: "El nombre de usuario debe tener al menos 3 caracteres", trigger: "blur" },
  ],
  acceptTerms: [
    { 
      validator: (rule, value, callback) => {
        if (value === true) {
          callback();
        } else {
          callback(new Error("Debes aceptar los términos y condiciones"));
        }
      },
      trigger: "change",
      required: true
    },
  ]
};

const submitForm = async () => {
  const valid = await formRef.value.validate();
  if (valid) {
    // Procesar formulario
  }
};

const resetForm = () => {
  formRef.value?.resetFields();
};
<\/script>`}}},render:()=>({components:{GSwitch:d,GConfigProvider:m,GForm:Fe,GFormItem:ke,GInput:Oe,GButton:Ee},setup(){const a=t(),n=he({username:"",acceptTerms:!1,enableNotifications:!0});return{formRef:a,formData:n,formRules:{username:[{required:!0,message:"El nombre de usuario es requerido",trigger:"blur"},{min:3,message:"El nombre de usuario debe tener al menos 3 caracteres",trigger:"blur"}],acceptTerms:[{validator:(g,L,o)=>{L===!0?o():o(new Error("Debes aceptar los términos y condiciones"))},trigger:"change",required:!0}]},submitForm:async()=>{if(a.value)try{const g=await a.value.validate();alert(g?`¡Formulario válido!
Usuario: ${n.username}
Términos: ${n.acceptTerms?"Aceptados":"No aceptados"}
Notificaciones: ${n.enableNotifications?"Habilitadas":"Deshabilitadas"}`:"Por favor, corrige los errores del formulario antes de continuar.")}catch(g){console.log("📋 ERRORES DE VALIDACIÓN:",g),alert("Por favor, corrige los errores del formulario antes de continuar.")}},resetForm:()=>{a.value?.resetFields()}}},template:`
      <g-config-provider>
        <div class="max-w-md space-y-6">
          <h3 class="text-lg font-medium text-gray-900">Registro de usuario</h3>
          
          <g-form 
            ref="formRef"
            :model="formData" 
            :rules="formRules"
            label-width="auto"
            class="space-y-4"
          >
            <g-form-item label="Nombre de usuario" prop="username">
              <g-input 
                v-model="formData.username"
                placeholder="Ingresa tu nombre de usuario"
                prefix-icon="regular user"
              />
            </g-form-item>
            
            <g-form-item label="Acepto términos y condiciones" prop="acceptTerms">
              <g-switch 
                v-model="formData.acceptTerms"
                :active-value="true"
                :inactive-value="false"
                active-text="Acepto términos"
                inactive-text="No acepto"
              />
            </g-form-item>
            
            <g-form-item label="Habilitar notificaciones por email" prop="enableNotifications">
              <g-switch 
                v-model="formData.enableNotifications"
                active-text="Notificaciones ON"
                inactive-text="Notificaciones OFF"
              />
            </g-form-item>
            
            <g-form-item class="pt-4">
              <div class="flex gap-3">
                <g-button 
                  @click="submitForm"
                  variant="primary"
                >
                  Registrar usuario
                </g-button>
                <g-button 
                  @click="resetForm"
                  variant="secondary"
                >
                  Limpiar formulario
                </g-button>
              </div>
            </g-form-item>
          </g-form>
          
          <div class="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 class="font-medium mb-3 text-sm text-gray-900">Estado del formulario:</h4>
            <div class="text-sm space-y-2 text-gray-600">
              <div class="flex justify-between">
                <span><strong>Usuario:</strong></span>
                <span>{{ formData.username || 'No ingresado' }}</span>
              </div>
              <div class="flex justify-between">
                <span><strong>Términos:</strong></span>
                <span class="flex items-center">
                  {{ formData.acceptTerms ? 'Aceptados' : 'No aceptados' }}
                  <span :class="formData.acceptTerms ? 'text-green-600' : 'text-red-600'" class="ml-2">
                    {{ formData.acceptTerms ? 'SÍ' : 'NO' }}
                  </span>
                </span>
              </div>
              <div class="flex justify-between">
                <span><strong>Notificaciones:</strong></span>
                <span class="flex items-center">
                  {{ formData.enableNotifications ? 'Habilitadas' : 'Deshabilitadas' }}
                  <span :class="formData.enableNotifications ? 'text-green-600' : 'text-red-600'" class="ml-2">
                    {{ formData.enableNotifications ? 'SÍ' : 'NO' }}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    `})};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Uso básico",
  parameters: {
    docs: {
      description: {
        story: "El uso más básico del Switch. Vincula v-model a una variable de tipo Boolean. Las variables CSS --el-switch-on-color y --el-switch-off-color deciden el color de fondo en dos estados."
      },
      source: {
        code: \`<g-switch v-model="value" />\`
      }
    }
  },
  render: (args: any) => ({
    components: {
      GSwitch,
      GConfigProvider
    },
    setup() {
      const value = toRef(args, "modelValue");
      return {
        args,
        value
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-4">
          <g-switch 
            v-model="value"
            v-bind="args"
          />
          <p>Valor actual: {{ value }}</p>
        </div>
      </g-config-provider>
    \`
  })
}`,...N.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Tamaños",
  parameters: {
    docs: {
      description: {
        story: "El Switch está disponible en diferentes tamaños: large, default (por defecto) y small."
      },
      source: {
        code: \`<g-switch v-model="value" size="large" />
<g-switch v-model="value" />
<g-switch v-model="value" size="small" />\`
      }
    }
  },
  render: () => ({
    components: {
      GSwitch,
      GConfigProvider
    },
    setup() {
      const valueLarge = ref(true);
      const valueDefault = ref(true);
      const valueSmall = ref(true);
      return {
        valueLarge,
        valueDefault,
        valueSmall
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-16">Large:</span>
            <g-switch v-model="valueLarge" size="large" />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-16">Default:</span>
            <g-switch v-model="valueDefault" />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-16">Small:</span>
            <g-switch v-model="valueSmall" size="small" />
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...A.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Descripción de texto",
  parameters: {
    docs: {
      description: {
        story: "Puedes agregar los atributos active-text e inactive-text para mostrar textos. Usa el atributo inline-prompt para controlar si el texto se muestra dentro del punto."
      },
      source: {
        code: \`<!-- Con texto -->
<g-switch
  v-model="value"
  active-text="Pagar por año"
  inactive-text="Pagar por mes"
/>

<!-- Inline prompt -->
<g-switch
  v-model="value"
  active-text="Pagar por año"
  inactive-text="Pagar por mes"
  inline-prompt
  width="160px"
/>

<!-- Texto corto -->
<g-switch
  v-model="value"
  active-text="On"
  inactive-text="Off"
  inline-prompt
/>\`
      }
    }
  },
  render: () => ({
    components: {
      GSwitch,
      GConfigProvider
    },
    setup() {
      const value1 = ref(true);
      const value2 = ref(true);
      const value3 = ref(true);
      const value4 = ref(true);
      return {
        value1,
        value2,
        value3,
        value4
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Con texto:</span>
            <g-switch
              v-model="value1"
              active-text="Pagar por año"
              inactive-text="Pagar por mes"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Inline prompt:</span>
            <g-switch
              v-model="value2"
              active-text="Pagar por año"
              inactive-text="Pagar por mes"
              inline-prompt
              width="160px"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Texto corto:</span>
            <g-switch
              v-model="value3"
              active-text="On"
              inactive-text="Off"
              inline-prompt
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Solo activo:</span>
            <g-switch
              v-model="value4"
              active-text="Abierto"
              inline-prompt
            />
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...I.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Iconos personalizados",
  parameters: {
    docs: {
      description: {
        story: "Puedes agregar los atributos active-icon e inactive-icon para mostrar iconos. Usa el atributo inline-prompt para controlar si el icono se muestra dentro del punto."
      },
      source: {
        code: \`<!-- Aprobado/Rechazado -->
<g-switch
  v-model="value"
  active-icon="solid check"
  inactive-icon="solid times"
/>

<!-- Inline prompt -->
<g-switch
  v-model="value"
  active-icon="solid check"
  inactive-icon="solid times"
  inline-prompt
/>

<!-- Tema claro/oscuro -->
<g-switch
  v-model="value"
  active-icon="solid lightbulb"
  inactive-icon="regular circle-xmark"
  inline-prompt
/>\`
      }
    }
  },
  render: () => ({
    components: {
      GSwitch,
      GConfigProvider
    },
    setup() {
      const value1 = ref(true);
      const value2 = ref(true);
      const value3 = ref(true);
      const value4 = ref(true);
      return {
        value1,
        value2,
        value3,
        value4
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-6">
            <span class="w-40 text-sm">Aprobado/Rechazado:</span>
            <g-switch
              v-model="value1"
              active-icon="solid check"
              inactive-icon="solid times"
            />
          </div>
          <div class="flex items-center gap-6">
            <span class="w-40 text-sm">Inline prompt:</span>
            <g-switch
              v-model="value2"
              active-icon="solid check"
              inactive-icon="solid times"
              inline-prompt
            />
          </div>
          <div class="flex items-center gap-6">
            <span class="w-40 text-sm">Tema claro/oscuro:</span>
            <g-switch
              v-model="value3"
              active-icon="solid lightbulb"
              inactive-icon="regular circle-xmark"
              inline-prompt
            />
          </div>
          <div class="flex items-center gap-6">
            <span class="w-40 text-sm">Visibilidad:</span>
            <g-switch
              v-model="value4"
              active-icon="regular eye"
              inactive-icon="regular eye-slash"
              inline-prompt
            />
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...P.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Tipos de valor extendidos",
  parameters: {
    docs: {
      description: {
        story: "Puedes configurar los atributos active-value e inactive-value. Ambos reciben un valor de tipo Boolean, String o Number."
      },
      source: {
        code: \`<!-- Números -->
<g-switch
  v-model="value"
  :active-value="100"
  :inactive-value="0"
  active-text="100"
  inactive-text="0"
/>

<!-- Strings -->
<g-switch
  v-model="value"
  active-value="yes"
  inactive-value="no"
  active-text="Sí"
  inactive-text="No"
/>

<!-- Mixto -->
<g-switch
  v-model="value"
  :active-value="1"
  inactive-value="off"
  active-text="On"
  inactive-text="Off"
/>\`
      }
    }
  },
  render: () => ({
    components: {
      GSwitch,
      GConfigProvider
    },
    setup() {
      const value1 = ref(100);
      const value2 = ref("yes");
      const value3 = ref(1);
      return {
        value1,
        value2,
        value3
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Números:</span>
            <g-switch
              v-model="value1"
              :active-value="100"
              :inactive-value="0"
              active-text="100"
              inactive-text="0"
            />
            <span class="text-sm">Valor: {{ value1 }}</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Strings:</span>
            <g-switch
              v-model="value2"
              active-value="yes"
              inactive-value="no"
              active-text="Sí"
              inactive-text="No"
            />
            <span class="text-sm">Valor: {{ value2 }}</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Mixto:</span>
            <g-switch
              v-model="value3"
              :active-value="1"
              inactive-value="off"
              active-text="On"
              inactive-text="Off"
            />
            <span class="text-sm">Valor: {{ value3 }}</span>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...T.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Deshabilitado",
  parameters: {
    docs: {
      description: {
        story: "Agregar el atributo disabled deshabilita el Switch."
      },
      source: {
        code: \`<g-switch v-model="value" disabled />

<!-- Con texto -->
<g-switch
  v-model="value"
  disabled
  active-text="Activo"
  inactive-text="Inactivo"
/>\`
      }
    }
  },
  render: () => ({
    components: {
      GSwitch,
      GConfigProvider
    },
    setup() {
      const value1 = ref(true);
      const value2 = ref(false);
      return {
        value1,
        value2
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Deshabilitado ON:</span>
            <g-switch v-model="value1" disabled />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Deshabilitado OFF:</span>
            <g-switch v-model="value2" disabled />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Con texto:</span>
            <g-switch
              v-model="value1"
              disabled
              active-text="Activo"
              inactive-text="Inactivo"
            />
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...V.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Estado de carga",
  parameters: {
    docs: {
      description: {
        story: "Configurar el atributo loading a true indica un estado de carga en el Switch."
      },
      source: {
        code: \`<g-switch v-model="value" loading />

<!-- Con texto -->
<g-switch
  v-model="value"
  loading
  active-text="Guardando..."
  inactive-text="Desconectado"
/>\`
      }
    }
  },
  render: () => ({
    components: {
      GSwitch,
      GConfigProvider
    },
    setup() {
      const value1 = ref(true);
      const value2 = ref(false);
      return {
        value1,
        value2
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Cargando ON:</span>
            <g-switch v-model="value1" loading />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Cargando OFF:</span>
            <g-switch v-model="value2" loading />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Con texto:</span>
            <g-switch
              v-model="value1"
              loading
              active-text="Guardando..."
              inactive-text="Desconectado"
            />
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...k.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Prevenir cambio",
  parameters: {
    docs: {
      description: {
        story: "Configura la propiedad before-change. Si se devuelve false o se devuelve una Promise que luego es rechazada, se detendrá el cambio."
      },
      source: {
        code: \`<!-- Con confirmación -->
<g-switch
  v-model="value"
  :before-change="beforeChange"
  active-text="Activar"
  inactive-text="Desactivar"
/>

<script setup>
const beforeChange = () => {
  return confirm('¿Estás seguro de que quieres cambiar el estado?');
};

// Con Promise
const beforeChangeAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(confirm('¿Confirmar cambio después de 1 segundo?'));
    }, 1000);
  });
};
<\/script>\`
      }
    }
  },
  render: () => ({
    components: {
      GSwitch,
      GConfigProvider
    },
    setup() {
      const value1 = ref(false);
      const value2 = ref(false);
      const beforeChange1 = () => {
        return confirm("¿Estás seguro de que quieres cambiar el estado?");
      };
      const beforeChange2 = () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(confirm("¿Confirmar cambio después de 1 segundo?"));
          }, 1000);
        });
      };
      return {
        value1,
        value2,
        beforeChange1,
        beforeChange2
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Con confirmación:</span>
            <g-switch
              v-model="value1"
              :before-change="beforeChange1"
              active-text="Activar"
              inactive-text="Desactivar"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Con Promise:</span>
            <g-switch
              v-model="value2"
              :before-change="beforeChange2"
              active-text="Confirmar"
              inactive-text="Cancelar"
            />
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...F.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Iconos de acción personalizados",
  parameters: {
    docs: {
      description: {
        story: "Puedes agregar los atributos active-action-icon e inactive-action-icon para mostrar iconos en las acciones."
      },
      source: {
        code: \`<!-- Encendido/Apagado -->
<g-switch
  v-model="value"
  active-action-icon="solid check-circle"
  inactive-action-icon="regular circle-xmark"
/>

<!-- Configuración -->
<g-switch
  v-model="value"
  active-action-icon="regular gear"
  inactive-action-icon="regular gear"
  active-text="Avanzado"
  inactive-text="Básico"
/>

<!-- Notificaciones -->
<g-switch
  v-model="value"
  active-action-icon="regular bell"
  inactive-action-icon="regular circle-xmark"
  width="60px"
/>\`
      }
    }
  },
  render: () => ({
    components: {
      GSwitch,
      GConfigProvider
    },
    setup() {
      const value1 = ref(true);
      const value2 = ref(false);
      const value3 = ref(true);
      return {
        value1,
        value2,
        value3
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span>Encendido/Apagado:</span>
            <g-switch
              v-model="value1"
              active-action-icon="solid check-circle"
              inactive-action-icon="regular circle-xmark"
            />
          </div>
          <div class="flex items-center gap-4">
            <span>Configuración:</span>
            <g-switch
              v-model="value2"
              active-action-icon="regular gear"
              inactive-action-icon="regular gear"
              active-text="Avanzado"
              inactive-text="Básico"
            />
          </div>
          <div class="flex items-center gap-4">
            <span>Notificaciones:</span>
            <g-switch
              v-model="value3"
              active-action-icon="regular bell"
              inactive-action-icon="regular circle-xmark"
              width="60px"
            />
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...E.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Slots de acción personalizados",
  parameters: {
    docs: {
      description: {
        story: "Puedes usar los slots active-action e inactive-action para personalizar las acciones."
      },
      source: {
        code: \`<!-- Con badges -->
<g-switch v-model="value" width="80px">
  <template #active-action>
    <span class="bg-green-500 text-white text-sm px-2 py-1.5 rounded font-medium">ON</span>
  </template>
  <template #inactive-action>
    <span class="bg-red-500 text-white text-sm px-2 py-1.5 rounded font-medium">OFF</span>
  </template>
</g-switch>

<!-- Con números -->
<g-switch v-model="value" width="60px">
  <template #active-action>
    <span class="text-sm font-bold">1</span>
  </template>
  <template #inactive-action>
    <span class="text-sm font-bold">0</span>
  </template>
</g-switch>\`
      }
    }
  },
  render: () => ({
    components: {
      GSwitch,
      GConfigProvider
    },
    setup() {
      const value1 = ref(true);
      const value2 = ref(false);
      return {
        value1,
        value2
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Con badges:</span>
            <g-switch v-model="value1" width="80px">
              <template #active-action>
                <span class="bg-green-500 text-white text-sm px-2 py-1.5 rounded font-medium">ON</span>
              </template>
              <template #inactive-action>
                <span class="bg-red-500 text-white text-sm px-2 py-1.5 rounded font-medium">OFF</span>
              </template>
            </g-switch>
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Con números:</span>
            <g-switch v-model="value2" width="60px">
              <template #active-action>
                <span class="text-sm font-bold">1</span>
              </template>
              <template #inactive-action>
                <span class="text-sm font-bold">0</span>
              </template>
            </g-switch>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...O.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "Ancho personalizado",
  parameters: {
    docs: {
      description: {
        story: "Puedes personalizar el ancho del Switch usando la propiedad width."
      },
      source: {
        code: \`<!-- Ancho 40px -->
<g-switch v-model="value" width="40px" />

<!-- Ancho 100px -->
<g-switch
  v-model="value"
  width="100px"
  active-text="On"
  inactive-text="Off"
  inline-prompt
/>

<!-- Ancho 140px -->
<g-switch
  v-model="value"
  width="140px"
  active-text="Habilitado"
  inactive-text="Deshabilitado"
  inline-prompt
/>\`
      }
    }
  },
  render: () => ({
    components: {
      GSwitch,
      GConfigProvider
    },
    setup() {
      const value1 = ref(true);
      const value2 = ref(true);
      const value3 = ref(true);
      return {
        value1,
        value2,
        value3
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="w-32">Ancho 40px:</span>
            <g-switch v-model="value1" width="40px" />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Ancho 100px:</span>
            <g-switch
              v-model="value2"
              width="100px"
              active-text="On"
              inactive-text="Off"
              inline-prompt
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="w-32">Ancho 140px:</span>
            <g-switch
              v-model="value3"
              width="140px"
              active-text="Habilitado"
              inactive-text="Deshabilitado"
              inline-prompt
            />
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...z.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Validación de formulario",
  parameters: {
    docs: {
      description: {
        story: "Ejemplo completo de Switch con validación de formulario usando g-form, g-form-item, g-input y g-button. Muestra cómo integrar el switch con el sistema de formularios del design system para validación automática."
      },
      source: {
        code: \`<g-form 
  ref="formRef"
  :model="formData" 
  :rules="formRules"
  label-width="auto"
>
  <g-form-item label="Nombre de usuario" prop="username">
    <g-input 
      v-model="formData.username"
      placeholder="Ingresa tu nombre de usuario"
      prefix-icon="regular user"
    />
  </g-form-item>
  
  <g-form-item label="Acepto términos y condiciones" prop="acceptTerms">
    <g-switch 
      v-model="formData.acceptTerms"
      :active-value="true"
      :inactive-value="false"
      active-text="Acepto términos"
      inactive-text="No acepto"
    />
  </g-form-item>
  
  <g-form-item label="Habilitar notificaciones por email" prop="enableNotifications">
    <g-switch 
      v-model="formData.enableNotifications"
      active-text="Notificaciones ON"
      inactive-text="Notificaciones OFF"
    />
  </g-form-item>
  
  <g-form-item>
    <g-button @click="submitForm" variant="primary">
      Registrar usuario
    </g-button>
    <g-button @click="resetForm" variant="secondary">
      Limpiar formulario
    </g-button>
  </g-form-item>
</g-form>

<script setup>
import { ref, reactive } from 'vue';

const formRef = ref();
const formData = reactive({
  username: "",
  acceptTerms: false,
  enableNotifications: true,
});

const formRules = {
  username: [
    { required: true, message: "El nombre de usuario es requerido", trigger: "blur" },
    { min: 3, message: "El nombre de usuario debe tener al menos 3 caracteres", trigger: "blur" },
  ],
  acceptTerms: [
    { 
      validator: (rule, value, callback) => {
        if (value === true) {
          callback();
        } else {
          callback(new Error("Debes aceptar los términos y condiciones"));
        }
      },
      trigger: "change",
      required: true
    },
  ]
};

const submitForm = async () => {
  const valid = await formRef.value.validate();
  if (valid) {
    // Procesar formulario
  }
};

const resetForm = () => {
  formRef.value?.resetFields();
};
<\/script>\`
      }
    }
  },
  render: () => ({
    components: {
      GSwitch,
      GConfigProvider,
      GForm,
      GFormItem,
      GInput,
      GButton
    },
    setup() {
      const formRef = ref<FormInstance>();
      const formData = reactive({
        username: "",
        acceptTerms: false,
        enableNotifications: true
      });
      const formRules = {
        username: [{
          required: true,
          message: "El nombre de usuario es requerido",
          trigger: "blur"
        }, {
          min: 3,
          message: "El nombre de usuario debe tener al menos 3 caracteres",
          trigger: "blur"
        }],
        acceptTerms: [{
          validator: (rule: any, value: any, callback: Function) => {
            if (value === true) {
              callback();
            } else {
              callback(new Error("Debes aceptar los términos y condiciones"));
            }
          },
          trigger: "change",
          required: true
        }]
      };
      const submitForm = async () => {
        if (!formRef.value) return;
        try {
          const valid = await formRef.value.validate();
          if (valid) {
            alert(\`¡Formulario válido!\\nUsuario: \${formData.username}\\nTérminos: \${formData.acceptTerms ? "Aceptados" : "No aceptados"}\\nNotificaciones: \${formData.enableNotifications ? "Habilitadas" : "Deshabilitadas"}\`);
          } else {
            alert("Por favor, corrige los errores del formulario antes de continuar.");
          }
        } catch (fields) {
          console.log("📋 ERRORES DE VALIDACIÓN:", fields);
          alert("Por favor, corrige los errores del formulario antes de continuar.");
        }
      };
      const resetForm = () => {
        formRef.value?.resetFields();
      };
      return {
        formRef,
        formData,
        formRules,
        submitForm,
        resetForm
      };
    },
    template: \`
      <g-config-provider>
        <div class="max-w-md space-y-6">
          <h3 class="text-lg font-medium text-gray-900">Registro de usuario</h3>
          
          <g-form 
            ref="formRef"
            :model="formData" 
            :rules="formRules"
            label-width="auto"
            class="space-y-4"
          >
            <g-form-item label="Nombre de usuario" prop="username">
              <g-input 
                v-model="formData.username"
                placeholder="Ingresa tu nombre de usuario"
                prefix-icon="regular user"
              />
            </g-form-item>
            
            <g-form-item label="Acepto términos y condiciones" prop="acceptTerms">
              <g-switch 
                v-model="formData.acceptTerms"
                :active-value="true"
                :inactive-value="false"
                active-text="Acepto términos"
                inactive-text="No acepto"
              />
            </g-form-item>
            
            <g-form-item label="Habilitar notificaciones por email" prop="enableNotifications">
              <g-switch 
                v-model="formData.enableNotifications"
                active-text="Notificaciones ON"
                inactive-text="Notificaciones OFF"
              />
            </g-form-item>
            
            <g-form-item class="pt-4">
              <div class="flex gap-3">
                <g-button 
                  @click="submitForm"
                  variant="primary"
                >
                  Registrar usuario
                </g-button>
                <g-button 
                  @click="resetForm"
                  variant="secondary"
                >
                  Limpiar formulario
                </g-button>
              </div>
            </g-form-item>
          </g-form>
          
          <div class="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 class="font-medium mb-3 text-sm text-gray-900">Estado del formulario:</h4>
            <div class="text-sm space-y-2 text-gray-600">
              <div class="flex justify-between">
                <span><strong>Usuario:</strong></span>
                <span>{{ formData.username || 'No ingresado' }}</span>
              </div>
              <div class="flex justify-between">
                <span><strong>Términos:</strong></span>
                <span class="flex items-center">
                  {{ formData.acceptTerms ? 'Aceptados' : 'No aceptados' }}
                  <span :class="formData.acceptTerms ? 'text-green-600' : 'text-red-600'" class="ml-2">
                    {{ formData.acceptTerms ? 'SÍ' : 'NO' }}
                  </span>
                </span>
              </div>
              <div class="flex justify-between">
                <span><strong>Notificaciones:</strong></span>
                <span class="flex items-center">
                  {{ formData.enableNotifications ? 'Habilitadas' : 'Deshabilitadas' }}
                  <span :class="formData.enableNotifications ? 'text-green-600' : 'text-red-600'" class="ml-2">
                    {{ formData.enableNotifications ? 'SÍ' : 'NO' }}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...G.parameters?.docs?.source}}};const ya=["Primary","Sizes","TextDescription","CustomIcons","ExtendedValueTypes","Disabled","Loading","PreventSwitching","CustomActionIcons","CustomActionSlots","CustomWidth","FormValidation"];export{E as CustomActionIcons,O as CustomActionSlots,P as CustomIcons,z as CustomWidth,V as Disabled,T as ExtendedValueTypes,G as FormValidation,k as Loading,F as PreventSwitching,N as Primary,A as Sizes,I as TextDescription,ya as __namedExportsOrder,wa as default};
