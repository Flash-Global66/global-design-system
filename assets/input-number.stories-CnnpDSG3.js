import{d as Fe,r as i,E as Re,c as N,M as re,s as se,t as Me,_ as Te,o as x,y as te,e as ce,u as l,ac as pe,g as E,i as A,a as z,j as fe,b as _e,h as Ue,w as ge,f as ve,R as we,a0 as ke,L as Be}from"./iframe-Dct5CHxr.js";import{Y as $e}from"./index-DR8mscXh.js";import{R as F}from"./index-1T7U7QlS.js";import{L as je,a as R,B as qe,M as Le,i as I}from"./index-CZoNQBHQ.js";import{u as Oe,f as b}from"./useEmptyValues-BnYvcW4O.js";import{u as We}from"./useLocale-pH4k1Kvj.js";import{U as h,E as Y,I as X,C as xe}from"./event.constant-LtAI3-H4.js";import{i as Ke}from"./index-pMiYc9r3.js";import{w as Xe}from"./install.util-cBz1HN_T.js";import{v as be}from"./repeatClick.directive-BpayNHsr.js";import{G as v}from"./ConfigProvider-7dg58IlU.js";import{a as Ye,b as ye}from"./documentation-stories-DmJzCMmf.js";import"./preload-helper-Dch09mLN.js";import"./index-DWhPhD7W.js";import"./useAttrs-BZi71rd1.js";import"./useId-MLHLvdkG.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-GU5Cqqg3.js";const He=()=>Ke&&/android/i.test(window.navigator.userAgent),Je=n=>{if(n.code&&n.code!=="Unidentified")return n.code;const s=he(n);if(s){if(Object.values(Y).includes(s))return s;switch(s){case" ":return Y.space;default:return""}}return""},he=n=>{let s=n.key&&n.key!=="Unidentified"?n.key:"";if(!s&&n.type==="keyup"&&He()){const m=n.target;s=m.value.charAt(m.selectionStart-1)}return s},Qe={[xe]:(n,s)=>s!==n,blur:n=>n instanceof FocusEvent,focus:n=>n instanceof FocusEvent,[X]:n=>b(n)||I(n),[h]:n=>b(n)||I(n)},Ze=["aria-label"],en=["aria-label"],nn=Fe({name:"GInputNumber",__name:"input-number",props:{id:{default:void 0},step:{default:1},stepStrictly:{type:Boolean,default:!1},max:{default:Number.MAX_SAFE_INTEGER},min:{default:Number.MIN_SAFE_INTEGER},modelValue:{},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:void 0},size:{},controls:{type:Boolean,default:!0},controlsPosition:{default:""},valueOnClear:{default:null},name:{},placeholder:{},precision:{},validateEvent:{type:Boolean,default:!0},ariaLabel:{},inputmode:{default:void 0},align:{default:"center"},disabledScientific:{type:Boolean}},emits:Qe,setup(n,{expose:s,emit:m}){const r=n,c=m,{t:P}=We(),p=Oe("input-number"),y=i(),u=Re({currentValue:r.modelValue,userInput:null}),{formItem:le}=je(),ie=N(()=>b(r.modelValue)&&r.modelValue<=r.min),ue=N(()=>b(r.modelValue)&&r.modelValue>=r.max),Ve=N(()=>{const e=me(r.step);return R(r.precision)?Math.max(me(r.modelValue),e):(e>r.precision&&re(),r.precision)}),H=N(()=>r.controls&&r.controlsPosition==="right"),Se=qe(),S=Le(),J=N(()=>{if(u.userInput!==null)return u.userInput;let e=u.currentValue;if(I(e))return"";if(b(e)){if(Number.isNaN(e))return"";R(r.precision)||(e=e.toFixed(r.precision))}return e}),D=(e,a)=>{if(R(a)&&(a=Ve.value),a===0)return Math.round(e);let t=String(e);const o=t.indexOf(".");if(o===-1||!t.replace(".","").split("")[o+a])return e;const f=t.length;return t.charAt(f-1)==="5"&&(t=`${t.slice(0,Math.max(0,f-1))}6`),Number.parseFloat(Number(t).toFixed(a))},me=e=>{if(I(e))return 0;const a=e.toString(),t=a.indexOf(".");let o=0;return t!==-1&&(o=a.length-t-1),o},de=(e,a=1)=>b(e)?e>=Number.MAX_SAFE_INTEGER&&a===1||e<=Number.MIN_SAFE_INTEGER&&a===-1?e:D(e+r.step*a):u.currentValue,Ne=e=>{const a=Je(e),t=he(e);if(r.disabledScientific&&["e","E"].includes(t)){e.preventDefault();return}switch(a){case Y.up:{e.preventDefault(),Q();break}case Y.down:{e.preventDefault(),Z();break}}},Q=()=>{if(r.readonly||S.value||ue.value)return;const e=Number(J.value)||0,a=de(e);C(a),c(X,u.currentValue),ne()},Z=()=>{if(r.readonly||S.value||ie.value)return;const e=Number(J.value)||0,a=de(e,-1);C(a),c(X,u.currentValue),ne()},ee=(e,a)=>{const{max:t,min:o,step:f,precision:ae,stepStrictly:ze,valueOnClear:G}=r;t<o&&ke("InputNumber","min should not be greater than max.");let d=Number(e);if(I(e)||Number.isNaN(d))return null;if(e===""){if(G===null)return null;d=Be(G)?{min:o,max:t}[G]:G}return ze&&(d=D(Math.round(D(d/f))*f,ae),d!==e&&a&&c(h,d)),R(ae)||(d=D(d,ae)),(d>t||d<o)&&(d=d>t?t:o,a&&c(h,d)),d},C=(e,a=!0)=>{const t=u.currentValue,o=ee(e);if(!a){c(h,o);return}u.userInput=null,!(t===o&&e)&&(c(h,o),t!==o&&c(xe,o,t),r.validateEvent&&le?.validate?.("change").catch(f=>re()),u.currentValue=o)},Ee=e=>{u.userInput=e;const a=e===""?null:Number(e);c(X,a),C(a,!1)},Ie=e=>{const a=e!==""?Number(e):"";(b(a)&&!Number.isNaN(a)||e==="")&&C(a),ne(),u.userInput=null},Pe=()=>{y.value?.focus?.()},De=()=>{y.value?.blur?.()},Ce=e=>{c("focus",e)},Ge=e=>{u.userInput=null,u.currentValue===null&&y.value?.ref&&(y.value.ref.value=""),c("blur",e),r.validateEvent&&le?.validate?.("blur").catch(a=>re())},ne=()=>{u.currentValue!==r.modelValue&&(u.currentValue=r.modelValue)},Ae=e=>{document.activeElement===e.target&&e.preventDefault()};return se(()=>r.modelValue,(e,a)=>{const t=ee(e,!0);u.userInput===null&&t!==a&&(u.currentValue=t)},{immediate:!0}),se(()=>r.precision,()=>{u.currentValue=ee(r.modelValue)}),Me(()=>{const{min:e,max:a,modelValue:t}=r,o=y.value?.ref;if(o){if(o.setAttribute("role","spinbutton"),Number.isFinite(a)?o.setAttribute("aria-valuemax",String(a)):o.removeAttribute("aria-valuemax"),Number.isFinite(e)?o.setAttribute("aria-valuemin",String(e)):o.removeAttribute("aria-valuemin"),o.setAttribute("aria-valuenow",u.currentValue||u.currentValue===0?String(u.currentValue):""),o.setAttribute("aria-disabled",String(S.value)),!b(t)&&t!=null){let f=Number(t);Number.isNaN(f)&&(f=null),c(h,f)}o.addEventListener("wheel",Ae,{passive:!1})}}),Te(()=>{y.value?.ref?.setAttribute("aria-valuenow",`${u.currentValue??""}`)}),s({focus:Pe,blur:De}),(e,a)=>(x(),te("div",{class:E([l(p).b(),l(p).m(l(Se)),l(p).is("disabled",l(S)),l(p).is("without-controls",!e.controls),l(p).is("controls-right",H.value),l(p).is(e.align,!!e.align)]),onDragstart:a[0]||(a[0]=we(()=>{},["prevent"]))},[e.controls?ce((x(),te("span",{key:0,role:"button","aria-label":l(P)("el.inputNumber.decrease"),class:E([l(p).e("decrease"),l(p).is("disabled",ie.value)]),onKeydown:pe(Z,["enter"])},[A(e.$slots,"decrease-icon",{},()=>[H.value?(x(),z(l(F),{key:0,name:"regular chevron-down"})):(x(),z(l(F),{key:1,name:"regular minus"}))])],42,Ze)),[[l(be),Z]]):fe("",!0),e.controls?ce((x(),te("span",{key:1,role:"button","aria-label":l(P)("el.inputNumber.increase"),class:E([l(p).e("increase"),l(p).is("disabled",ue.value)]),onKeydown:pe(Q,["enter"])},[A(e.$slots,"increase-icon",{},()=>[H.value?(x(),z(l(F),{key:0,name:"regular chevron-up"})):(x(),z(l(F),{key:1,name:"regular plus"}))])],42,en)),[[l(be),Q]]):fe("",!0),_e(l($e),{id:e.id,ref_key:"input",ref:y,type:"number",step:e.step,"model-value":J.value,placeholder:e.placeholder,readonly:e.readonly,disabled:l(S),max:e.max,min:e.min,name:e.name,"aria-label":e.ariaLabel,"validate-event":!1,inputmode:e.inputmode,onKeydown:Ne,onBlur:Ge,onFocus:Ce,onInput:Ee,onChange:Ie},Ue({_:2},[e.$slots.prefix?{name:"prefix",fn:ge(()=>[ve("span",{class:E(l(p).e("prefix"))},[A(e.$slots,"prefix")],2)]),key:"0"}:void 0,e.$slots.suffix?{name:"suffix",fn:ge(()=>[ve("span",{class:E(l(p).e("suffix"))},[A(e.$slots,"suffix")],2)]),key:"1"}:void 0]),1032,["id","step","model-value","placeholder","readonly","disabled","max","min","name","aria-label","inputmode"])],34))}}),g=Xe(nn),an="0.2.16",oe={"lodash-unified":"^1.0.3",vue:"^3.2.0"},Sn={title:"Form/Input Number",component:g,parameters:{docs:{description:{component:`
El componente Input Number permite a los usuarios ingresar y modificar valores numéricos mediante teclado o botones de control.

> Versión actual: ${an}

## Características
- Entrada numérica controlada
- Botones de incremento y decremento
- Configuración de pasos (step) y precisión
- Límites máximo y mínimo
- Diferentes tamaños y estados (disabled, readonly)
- Soporte para decimales

### Instalación

\`\`\`bash
yarn add @flash-global66/g-input-number
\`\`\`

### Importación del componente

\`\`\`typescript
# importar donde se va a utilizar
import { GInputNumber } from '@flash-global66/g-input-number'

# recomendado importar en los estilos globales
import '@flash-global66/g-input-number/input-number.styles.scss'
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias: Puede que funcione con otras versiones, pero no se garantiza.
${Ye(oe)}

> Revisar la documentación de cada dependencia para mas información.


\`\`\`bash
# Dependencias global66
yarn add ${ye(oe)}

# Dependencias externas
yarn add ${ye(oe,!0)}
\`\`\`
`}}},argTypes:{modelValue:{control:"number",description:"Valor vinculado (v-model)",table:{type:{summary:"number | null"},defaultValue:{summary:"null"}}},step:{control:"number",description:"Paso incremental",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},stepStrictly:{control:"boolean",description:"Solo permite múltiplos del paso",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},max:{control:"number",description:"Valor máximo permitido",table:{type:{summary:"number"},defaultValue:{summary:"Number.MAX_SAFE_INTEGER"}}},min:{control:"number",description:"Valor mínimo permitido",table:{type:{summary:"number"},defaultValue:{summary:"Number.MIN_SAFE_INTEGER"}}},readonly:{control:"boolean",description:"Modo solo lectura",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Deshabilitar componente",table:{type:{summary:"boolean"},defaultValue:{summary:"undefined"}}},size:{control:"select",options:["large","default","small"],description:"Tamaño del componente",table:{type:{summary:"ComponentSize"},defaultValue:{summary:"default"}}},controls:{control:"boolean",description:"Mostrar botones de control",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},controlsPosition:{control:"select",options:["","right"],description:"Posición de los controles",table:{type:{summary:'"" | "right"'},defaultValue:{summary:'""'}}},valueOnClear:{control:"select",options:["min","max",0,null],description:"Valor al limpiar el input",table:{type:{summary:'"min" | "max" | number | null'},defaultValue:{summary:"null"}}},name:{control:"text",description:"Atributo name nativo",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},placeholder:{control:"text",description:"Texto de ayuda (placeholder)",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},precision:{control:"number",description:"Precisión de decimales",table:{type:{summary:"number"},defaultValue:{summary:"undefined"}}},validateEvent:{control:"boolean",description:"Activar validación de formulario",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},ariaLabel:{control:"text",description:"Etiqueta aria-label nativa",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},inputmode:{control:"text",description:"Modo de entrada nativo",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},align:{control:"select",options:["left","right","center"],description:"Alineación del texto",table:{type:{summary:'"left" | "right" | "center"'},defaultValue:{summary:"center"}}},disabledScientific:{control:"boolean",description:"Deshabilitar notación científica (e.g. 'e', 'E')",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},prefix:{description:"Contenido personalizado al inicio del input",table:{category:"Slots",type:{summary:"slot"}}},suffix:{description:"Contenido personalizado al final del input",table:{category:"Slots",type:{summary:"slot"}}},onChange:{action:"change",description:"Se dispara cuando el valor cambia",table:{category:"Eventos",type:{summary:"(cur: number | undefined, prev: number | undefined) => void"}}},onInput:{action:"input",description:"Se dispara cuando el input cambia",table:{category:"Eventos",type:{summary:"(val: number | null | undefined) => void"}}},onFocus:{action:"focus",description:"Se dispara cuando el input obtiene foco",table:{category:"Eventos",type:{summary:"(event: FocusEvent) => void"}}},onBlur:{action:"blur",description:"Se dispara cuando el input pierde foco",table:{category:"Eventos",type:{summary:"(event: FocusEvent) => void"}}}}},V=n=>({components:{GInputNumber:g,GConfigProvider:v},setup(){const s=i(n.modelValue??1);return se(()=>n.modelValue,m=>{s.value=m??1}),{args:n,modelValue:s}},template:`
    <g-config-provider>
      <g-input-number v-bind="args" v-model="modelValue" />
    </g-config-provider>
  `}),M={name:"Por defecto",parameters:{docs:{description:{story:"Ejemplo de uso del componente `g-input-number` con sus propiedades por defecto."}}},render:V,args:{modelValue:1,placeholder:"Ingresa un número"}},T={name:"Deshabilitado",parameters:{docs:{description:{story:"Ejemplo de uso del componente `g-input-number` deshabilitado."}}},render:V,args:{modelValue:1,disabled:!0,placeholder:"Input deshabilitado"}},_={name:"Solo lectura",parameters:{docs:{description:{story:"Si no se requiere que el valor pueda ser modificado, activa esta propiedad."}}},render:V,args:{modelValue:1,readonly:!0,placeholder:"Input solo lectura"}},U={name:"Controles a la derecha",parameters:{docs:{description:{story:"Ejemplo de uso del componente `g-input-number` con los controles a la derecha."}}},render:V,args:{modelValue:1,controlsPosition:"right"}},w={name:"Paso estricto",parameters:{docs:{description:{story:"Si necesitas que el valor sea siempre múltiplo del paso, activa esta propiedad."}}},render:V,args:{modelValue:2,step:2,stepStrictly:!0}},k={name:"Min/Max",parameters:{docs:{description:{story:"Si necesitas limitar el valor mínimo y máximo, limita el valor con las propiedades `min` y `max`."}}},render:V,args:{modelValue:5,min:0,max:10}},B={name:"Tamaño",parameters:{docs:{description:{story:"Usa el atributo `size` para configurar tamaños adicionales `large`, `default` o `small`."}}},render:()=>({components:{GInputNumber:g,GConfigProvider:v},setup(){const n=i(1),s=i(3),m=i(7);return{defaultValue:n,smallValue:s,largeValue:m}},template:`
      <g-config-provider>
        <div class="flex items-center gap-4">
          <g-input-number v-model="largeValue" size="large" />
          <g-input-number v-model="defaultValue" size="default" />
          <g-input-number v-model="smallValue" size="small" />
        </div>
      </g-config-provider>
    `})},$={name:"Alineación",parameters:{docs:{description:{story:"Usa el atributo `align` para configurar la alineación del texto con `left`, `right`, o `center`."}}},render:()=>({components:{GInputNumber:g,GConfigProvider:v},setup(){const n=i(123),s=i(456),m=i(789);return{leftValue:n,centerValue:s,rightValue:m}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-input-number v-model="leftValue" align="left" />
          <g-input-number v-model="centerValue" align="center" />
          <g-input-number v-model="rightValue" align="right" />
        </div>
      </g-config-provider>
    `})},j={name:"Sin controles",parameters:{docs:{description:{story:"Configura `controls` a `false` para ocultar los botones de control."}}},render:()=>({components:{GInputNumber:g,GConfigProvider:v},setup(){return{modelValue:i(10)}},template:'<g-config-provider><g-input-number v-model="modelValue" :controls="false" /></g-config-provider>'})},q={name:"Paso personalizado",parameters:{docs:{description:{story:"Usa `step` para configurar el valor de incremento/decremento. Usa `stepStrictly` para asegurar que el valor sea siempre múltiplo del paso."}}},render:()=>({components:{GInputNumber:g,GConfigProvider:v},setup(){const n=i(2),s=i(10),m=i(0);return{step2:n,step10:s,stepStrictly:m}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div>
            <p class="text-sm text-gray-600 mb-2">Paso: 2</p>
            <g-input-number v-model="step2" :step="2" />
          </div>
          <div>
            <p class="text-sm text-gray-600 mb-2">Paso: 10</p>
            <g-input-number v-model="step10" :step="10" />
          </div>
          <div>
            <p class="text-sm text-gray-600 mb-2">Paso: 2 (Estricto)</p>
            <g-input-number v-model="stepStrictly" :step="2" :step-strictly="true" />
          </div>
        </div>
      </g-config-provider>
    `})},L={name:"Precisión decimal",parameters:{docs:{description:{story:"Usa `precision` para configurar el número de decimales. Usa `step` con valores decimales para un control fino."}}},render:()=>({components:{GInputNumber:g,GConfigProvider:v},setup(){const n=i(1.23),s=i(1.2345),m=i(.5);return{precision2:n,precision4:s,decimalStep:m}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div>
            <p class="text-sm text-gray-600 mb-2">Precisión: 2</p>
            <g-input-number v-model="precision2" :precision="2" :step="0.01" />
          </div>
          <div>
            <p class="text-sm text-gray-600 mb-2">Precisión: 4</p>
            <g-input-number v-model="precision4" :precision="4" :step="0.0001" />
          </div>
          <div>
            <p class="text-sm text-gray-600 mb-2">Paso: 0.5</p>
            <g-input-number v-model="decimalStep" :step="0.5" />
          </div>
        </div>
      </g-config-provider>
    `})},O={name:"Con placeholder",parameters:{docs:{description:{story:"Usa `placeholder` para mostrar una ayuda cuando el input está vacío."}}},render:()=>({components:{GInputNumber:g,GConfigProvider:v},setup(){return{modelValue:i(null)}},template:'<g-config-provider><g-input-number v-model="modelValue" placeholder="Ingresa un número" /></g-config-provider>'})},W={name:"Todos los tamaños",parameters:{docs:{description:{story:"Todos los tamaños disponibles con diferentes configuraciones."}}},render:()=>({components:{GInputNumber:g,GConfigProvider:v},setup(){const n=i(1),s=i(2),m=i(3),r=i(4),c=i(5),P=i(6);return{smallDefault:n,smallRight:s,defaultDefault:m,defaultRight:r,largeDefault:c,largeRight:P}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-6">
          <div>
            <h3 class="text-lg font-semibold mb-4">Tamaño Pequeño</h3>
            <div class="flex items-center gap-4">
              <g-input-number v-model="smallDefault" size="small" />
              <g-input-number v-model="smallRight" size="small" controls-position="right" />
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Tamaño Por Defecto</h3>
            <div class="flex items-center gap-4">
              <g-input-number v-model="defaultDefault" size="default" />
              <g-input-number v-model="defaultRight" size="default" controls-position="right" />
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Tamaño Grande</h3>
            <div class="flex items-center gap-4">
              <g-input-number v-model="largeDefault" size="large" />
              <g-input-number v-model="largeRight" size="large" controls-position="right" />
            </div>
          </div>
        </div>
      </g-config-provider>
    `})},K={name:"Con Prefijo y Sufijo",parameters:{docs:{description:{story:"Usa los slots `prefix` y `suffix` para agregar contenido personalizado al input."}}},render:()=>({components:{GInputNumber:g,GConfigProvider:v},setup(){return{modelValue:i(10)}},template:`
      <g-config-provider>
        <g-input-number v-model="modelValue">
          <template #prefix>
            <span class="text-gray-500 font-medium">$</span>
          </template>
          <template #suffix>
            <span class="text-gray-500 font-medium">USD</span>
          </template>
        </g-input-number>
      </g-config-provider>
    `})},Nn=["Default","Disabled","Readonly","ControlsRight","StepStrictly","MinMax","Size","Alignment","WithoutControls","CustomStep","DecimalPrecision","WithPlaceholder","AllSizes","WithPrefixSuffix"];M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Por defecto',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de uso del componente \`g-input-number\` con sus propiedades por defecto.'
      }
    }
  },
  render,
  args: {
    modelValue: 1,
    placeholder: 'Ingresa un número'
  }
}`,...M.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Deshabilitado',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de uso del componente \`g-input-number\` deshabilitado.'
      }
    }
  },
  render,
  args: {
    modelValue: 1,
    disabled: true,
    placeholder: 'Input deshabilitado'
  }
}`,...T.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Solo lectura',
  parameters: {
    docs: {
      description: {
        story: 'Si no se requiere que el valor pueda ser modificado, activa esta propiedad.'
      }
    }
  },
  render,
  args: {
    modelValue: 1,
    readonly: true,
    placeholder: 'Input solo lectura'
  }
}`,..._.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Controles a la derecha',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de uso del componente \`g-input-number\` con los controles a la derecha.'
      }
    }
  },
  render,
  args: {
    modelValue: 1,
    controlsPosition: 'right'
  }
}`,...U.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Paso estricto',
  parameters: {
    docs: {
      description: {
        story: 'Si necesitas que el valor sea siempre múltiplo del paso, activa esta propiedad.'
      }
    }
  },
  render,
  args: {
    modelValue: 2,
    step: 2,
    stepStrictly: true
  }
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Min/Max',
  parameters: {
    docs: {
      description: {
        story: 'Si necesitas limitar el valor mínimo y máximo, limita el valor con las propiedades \`min\` y \`max\`.'
      }
    }
  },
  render,
  args: {
    modelValue: 5,
    min: 0,
    max: 10
  }
}`,...k.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Tamaño',
  parameters: {
    docs: {
      description: {
        story: 'Usa el atributo \`size\` para configurar tamaños adicionales \`large\`, \`default\` o \`small\`.'
      }
    }
  },
  render: () => ({
    components: {
      GInputNumber,
      GConfigProvider
    },
    setup() {
      const defaultValue = ref(1);
      const smallValue = ref(3);
      const largeValue = ref(7);
      return {
        defaultValue,
        smallValue,
        largeValue
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex items-center gap-4">
          <g-input-number v-model="largeValue" size="large" />
          <g-input-number v-model="defaultValue" size="default" />
          <g-input-number v-model="smallValue" size="small" />
        </div>
      </g-config-provider>
    \`
  })
}`,...B.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'Alineación',
  parameters: {
    docs: {
      description: {
        story: 'Usa el atributo \`align\` para configurar la alineación del texto con \`left\`, \`right\`, o \`center\`.'
      }
    }
  },
  render: () => ({
    components: {
      GInputNumber,
      GConfigProvider
    },
    setup() {
      const leftValue = ref(123);
      const centerValue = ref(456);
      const rightValue = ref(789);
      return {
        leftValue,
        centerValue,
        rightValue
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-input-number v-model="leftValue" align="left" />
          <g-input-number v-model="centerValue" align="center" />
          <g-input-number v-model="rightValue" align="right" />
        </div>
      </g-config-provider>
    \`
  })
}`,...$.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Sin controles',
  parameters: {
    docs: {
      description: {
        story: 'Configura \`controls\` a \`false\` para ocultar los botones de control.'
      }
    }
  },
  render: () => ({
    components: {
      GInputNumber,
      GConfigProvider
    },
    setup() {
      const modelValue = ref(10);
      return {
        modelValue
      };
    },
    template: '<g-config-provider><g-input-number v-model="modelValue" :controls="false" /></g-config-provider>'
  })
}`,...j.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Paso personalizado',
  parameters: {
    docs: {
      description: {
        story: 'Usa \`step\` para configurar el valor de incremento/decremento. Usa \`stepStrictly\` para asegurar que el valor sea siempre múltiplo del paso.'
      }
    }
  },
  render: () => ({
    components: {
      GInputNumber,
      GConfigProvider
    },
    setup() {
      const step2 = ref(2);
      const step10 = ref(10);
      const stepStrictly = ref(0);
      return {
        step2,
        step10,
        stepStrictly
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div>
            <p class="text-sm text-gray-600 mb-2">Paso: 2</p>
            <g-input-number v-model="step2" :step="2" />
          </div>
          <div>
            <p class="text-sm text-gray-600 mb-2">Paso: 10</p>
            <g-input-number v-model="step10" :step="10" />
          </div>
          <div>
            <p class="text-sm text-gray-600 mb-2">Paso: 2 (Estricto)</p>
            <g-input-number v-model="stepStrictly" :step="2" :step-strictly="true" />
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...q.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Precisión decimal',
  parameters: {
    docs: {
      description: {
        story: 'Usa \`precision\` para configurar el número de decimales. Usa \`step\` con valores decimales para un control fino.'
      }
    }
  },
  render: () => ({
    components: {
      GInputNumber,
      GConfigProvider
    },
    setup() {
      const precision2 = ref(1.23);
      const precision4 = ref(1.2345);
      const decimalStep = ref(0.5);
      return {
        precision2,
        precision4,
        decimalStep
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <div>
            <p class="text-sm text-gray-600 mb-2">Precisión: 2</p>
            <g-input-number v-model="precision2" :precision="2" :step="0.01" />
          </div>
          <div>
            <p class="text-sm text-gray-600 mb-2">Precisión: 4</p>
            <g-input-number v-model="precision4" :precision="4" :step="0.0001" />
          </div>
          <div>
            <p class="text-sm text-gray-600 mb-2">Paso: 0.5</p>
            <g-input-number v-model="decimalStep" :step="0.5" />
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...L.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Con placeholder',
  parameters: {
    docs: {
      description: {
        story: 'Usa \`placeholder\` para mostrar una ayuda cuando el input está vacío.'
      }
    }
  },
  render: () => ({
    components: {
      GInputNumber,
      GConfigProvider
    },
    setup() {
      const modelValue = ref(null);
      return {
        modelValue
      };
    },
    template: '<g-config-provider><g-input-number v-model="modelValue" placeholder="Ingresa un número" /></g-config-provider>'
  })
}`,...O.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Todos los tamaños',
  parameters: {
    docs: {
      description: {
        story: 'Todos los tamaños disponibles con diferentes configuraciones.'
      }
    }
  },
  render: () => ({
    components: {
      GInputNumber,
      GConfigProvider
    },
    setup() {
      const smallDefault = ref(1);
      const smallRight = ref(2);
      const defaultDefault = ref(3);
      const defaultRight = ref(4);
      const largeDefault = ref(5);
      const largeRight = ref(6);
      return {
        smallDefault,
        smallRight,
        defaultDefault,
        defaultRight,
        largeDefault,
        largeRight
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-6">
          <div>
            <h3 class="text-lg font-semibold mb-4">Tamaño Pequeño</h3>
            <div class="flex items-center gap-4">
              <g-input-number v-model="smallDefault" size="small" />
              <g-input-number v-model="smallRight" size="small" controls-position="right" />
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Tamaño Por Defecto</h3>
            <div class="flex items-center gap-4">
              <g-input-number v-model="defaultDefault" size="default" />
              <g-input-number v-model="defaultRight" size="default" controls-position="right" />
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Tamaño Grande</h3>
            <div class="flex items-center gap-4">
              <g-input-number v-model="largeDefault" size="large" />
              <g-input-number v-model="largeRight" size="large" controls-position="right" />
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...W.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Con Prefijo y Sufijo',
  parameters: {
    docs: {
      description: {
        story: 'Usa los slots \`prefix\` y \`suffix\` para agregar contenido personalizado al input.'
      }
    }
  },
  render: () => ({
    components: {
      GInputNumber,
      GConfigProvider
    },
    setup() {
      const modelValue = ref(10);
      return {
        modelValue
      };
    },
    template: \`
      <g-config-provider>
        <g-input-number v-model="modelValue">
          <template #prefix>
            <span class="text-gray-500 font-medium">$</span>
          </template>
          <template #suffix>
            <span class="text-gray-500 font-medium">USD</span>
          </template>
        </g-input-number>
      </g-config-provider>
    \`
  })
}`,...K.parameters?.docs?.source}}};export{$ as Alignment,W as AllSizes,U as ControlsRight,q as CustomStep,L as DecimalPrecision,M as Default,T as Disabled,k as MinMax,_ as Readonly,B as Size,w as StepStrictly,O as WithPlaceholder,K as WithPrefixSuffix,j as WithoutControls,Nn as __namedExportsOrder,Sn as default};
