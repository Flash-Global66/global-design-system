import{d as Ae,r as i,H as we,c as S,x as ne,w as te,o as Ue,U as Re,e as h,j as me,m as ce,h as Te,u as l,a2 as de,l as N,s as z,b as A,q as Me,f as pe,k as fe,a1 as _e}from"./vue.esm-bundler-C43JrhH2.js";import{r as Fe}from"./index-CA6S_qzr.js";import{F as w}from"./index-B1PxvDbZ.js";import{Y as ke,G as $e}from"./index-DH2w0SzE.js";import{g as P,u as Be}from"./index-D5bIuBCX.js";import{c as je,G as v}from"./ConfigProvider-Br84NlF7.js";import{u as qe}from"./use-form-common-props-C2RO3VSy.js";import{U as E,I as re,C as Oe}from"./event-BB_Ol6Sd.js";import{v as ge}from"./index-F3mqkqXW.js";import{E as ve}from"./aria-BUADUvnR.js";import{i as Le}from"./index-DmfABaPz.js";import{a as We,b as be}from"./documentation-stories-DKOl0nGm.js";import"./index-BDKGuxIf.js";import"./install-CfJGiCvs.js";import"./index-CdSB2Bdf.js";import"./_arrayPush-BhjrZnJY.js";import"./index-BjhK0CHr.js";import"./index-D_xYoXKA.js";import"./index-Bn_3zeFh.js";import"./index-fhkPmQjX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./constants-Dnj8X3EN.js";import"./index-CvPWi8JN.js";import"./index-DVmIhHla.js";import"./index-Bjxdgq_P.js";import"./error-Cq9Fpw4b.js";/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ke=n=>typeof n=="string";class Xe extends Error{constructor(t){super(t),this.name="ElementPlusError"}}function He(n,t){throw new Xe(`[${n}] ${t}`)}const U=n=>n===void 0,b=n=>typeof n=="number",Ye=(n,t)=>(n.install=m=>{for(const a of[n,...Object.values({})])m.component(a.name,a)},n),ye={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},Je="update:modelValue",Qe="change",Ze="input",en=()=>Le&&/android/i.test(window.navigator.userAgent),nn=n=>{if(n.code&&n.code!=="Unidentified")return n.code;const t=he(n);if(t){if(Object.values(ye).includes(t))return t;switch(t){case" ":return ye.space;default:return""}}return""},he=n=>{let t=n.key&&n.key!=="Unidentified"?n.key:"";if(!t&&n.type==="keyup"&&en()){const m=n.target;t=m.value.charAt(m.selectionStart-1)}return t},rn={[Qe]:(n,t)=>t!==n,blur:n=>n instanceof FocusEvent,focus:n=>n instanceof FocusEvent,[Ze]:n=>b(n)||P(n),[Je]:n=>b(n)||P(n)},an=["aria-label"],tn=["aria-label"],on=Ae({name:"GInputNumber",__name:"input-number",props:{id:{default:void 0},step:{default:1},stepStrictly:{type:Boolean,default:!1},max:{default:Number.MAX_SAFE_INTEGER},min:{default:Number.MIN_SAFE_INTEGER},modelValue:{},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:void 0},size:{},controls:{type:Boolean,default:!0},controlsPosition:{default:""},valueOnClear:{default:null},name:{},placeholder:{},precision:{},validateEvent:{type:Boolean,default:!0},ariaLabel:{},inputmode:{default:void 0},align:{default:"center"},disabledScientific:{type:Boolean}},emits:rn,setup(n,{expose:t,emit:m}){const a=n,d=m,{t:I}=je(),p=Be("input-number"),y=i(),u=we({currentValue:a.modelValue,userInput:null}),{formItem:oe}=$e(),se=S(()=>b(a.modelValue)&&a.modelValue<=a.min),le=S(()=>b(a.modelValue)&&a.modelValue>=a.max),xe=S(()=>{const e=ie(a.step);return U(a.precision)?Math.max(ie(a.modelValue),e):(e>a.precision&&void 0,a.precision)}),X=S(()=>a.controls&&a.controlsPosition==="right"),Ve=qe(),V=ke(),H=S(()=>{if(u.userInput!==null)return u.userInput;let e=u.currentValue;if(P(e))return"";if(b(e)){if(Number.isNaN(e))return"";U(a.precision)||(e=e.toFixed(a.precision))}return e}),D=(e,r)=>{if(U(r)&&(r=xe.value),r===0)return Math.round(e);let o=String(e);const s=o.indexOf(".");if(s===-1||!o.replace(".","").split("")[s+r])return e;const f=o.length;return o.charAt(f-1)==="5"&&(o=`${o.slice(0,Math.max(0,f-1))}6`),Number.parseFloat(Number(o).toFixed(r))},ie=e=>{if(P(e))return 0;const r=e.toString(),o=r.indexOf(".");let s=0;return o!==-1&&(s=r.length-o-1),s},ue=(e,r=1)=>b(e)?e>=Number.MAX_SAFE_INTEGER&&r===1||e<=Number.MIN_SAFE_INTEGER&&r===-1?e:D(e+a.step*r):u.currentValue,Se=e=>{const r=nn(e),o=he(e);if(a.disabledScientific&&["e","E"].includes(o)){e.preventDefault();return}switch(r){case ve.up:{e.preventDefault(),Y();break}case ve.down:{e.preventDefault(),J();break}}},Y=()=>{if(a.readonly||V.value||le.value)return;const e=Number(H.value)||0,r=ue(e);C(r),d(re,u.currentValue),Z()},J=()=>{if(a.readonly||V.value||se.value)return;const e=Number(H.value)||0,r=ue(e,-1);C(r),d(re,u.currentValue),Z()},Q=(e,r)=>{const{max:o,min:s,step:f,precision:ee,stepStrictly:ze,valueOnClear:G}=a;o<s&&He("InputNumber","min should not be greater than max.");let c=Number(e);if(P(e)||Number.isNaN(c))return null;if(e===""){if(G===null)return null;c=Ke(G)?{min:s,max:o}[G]:G}return ze&&(c=D(Math.round(D(c/f))*f,ee),c!==e&&r&&d(E,c)),U(ee)||(c=D(c,ee)),(c>o||c<s)&&(c=c>o?o:s,r&&d(E,c)),c},C=(e,r=!0)=>{const o=u.currentValue,s=Q(e);if(!r){d(E,s);return}u.userInput=null,!(o===s&&e)&&(d(E,s),o!==s&&d(Oe,s,o),a.validateEvent&&oe?.validate?.("change").catch(f=>void 0),u.currentValue=s)},Ne=e=>{u.userInput=e;const r=e===""?null:Number(e);d(re,r),C(r,!1)},Ee=e=>{const r=e!==""?Number(e):"";(b(r)&&!Number.isNaN(r)||e==="")&&C(r),Z(),u.userInput=null},Pe=()=>{y.value?.focus?.()},Ie=()=>{y.value?.blur?.()},De=e=>{d("focus",e)},Ce=e=>{u.userInput=null,u.currentValue===null&&y.value?.ref&&(y.value.ref.value=""),d("blur",e),a.validateEvent&&oe?.validate?.("blur").catch(r=>void 0)},Z=()=>{u.currentValue!==a.modelValue&&(u.currentValue=a.modelValue)},Ge=e=>{document.activeElement===e.target&&e.preventDefault()};return te(()=>a.modelValue,(e,r)=>{const o=Q(e,!0);u.userInput===null&&o!==r&&(u.currentValue=o)},{immediate:!0}),te(()=>a.precision,()=>{u.currentValue=Q(a.modelValue)}),Ue(()=>{const{min:e,max:r,modelValue:o}=a,s=y.value?.ref;if(s){if(s.setAttribute("role","spinbutton"),Number.isFinite(r)?s.setAttribute("aria-valuemax",String(r)):s.removeAttribute("aria-valuemax"),Number.isFinite(e)?s.setAttribute("aria-valuemin",String(e)):s.removeAttribute("aria-valuemin"),s.setAttribute("aria-valuenow",u.currentValue||u.currentValue===0?String(u.currentValue):""),s.setAttribute("aria-disabled",String(V.value)),!b(o)&&o!=null){let f=Number(o);Number.isNaN(f)&&(f=null),d(E,f)}s.addEventListener("wheel",Ge,{passive:!1})}}),Re(()=>{y.value?.ref?.setAttribute("aria-valuenow",`${u.currentValue??""}`)}),t({focus:Pe,blur:Ie}),(e,r)=>(h(),ne("div",{class:N([l(p).b(),l(p).m(l(Ve)),l(p).is("disabled",l(V)),l(p).is("without-controls",!e.controls),l(p).is("controls-right",X.value),l(p).is(e.align,!!e.align)]),onDragstart:r[0]||(r[0]=_e(()=>{},["prevent"]))},[e.controls?me((h(),ne("span",{key:0,role:"button","aria-label":l(I)("el.inputNumber.decrease"),class:N([l(p).e("decrease"),l(p).is("disabled",se.value)]),onKeydown:de(J,["enter"])},[z(e.$slots,"decrease-icon",{},()=>[X.value?(h(),A(l(w),{key:0,name:"regular chevron-down"})):(h(),A(l(w),{key:1,name:"regular minus"}))])],42,an)),[[l(ge),J]]):ce("",!0),e.controls?me((h(),ne("span",{key:1,role:"button","aria-label":l(I)("el.inputNumber.increase"),class:N([l(p).e("increase"),l(p).is("disabled",le.value)]),onKeydown:de(Y,["enter"])},[z(e.$slots,"increase-icon",{},()=>[X.value?(h(),A(l(w),{key:0,name:"regular chevron-up"})):(h(),A(l(w),{key:1,name:"regular plus"}))])],42,tn)),[[l(ge),Y]]):ce("",!0),Te(l(Fe),{id:e.id,ref_key:"input",ref:y,type:"number",step:e.step,"model-value":H.value,placeholder:e.placeholder,readonly:e.readonly,disabled:l(V),max:e.max,min:e.min,name:e.name,"aria-label":e.ariaLabel,"validate-event":!1,inputmode:e.inputmode,onKeydown:Se,onBlur:Ce,onFocus:De,onInput:Ne,onChange:Ee},Me({_:2},[e.$slots.prefix?{name:"prefix",fn:pe(()=>[fe("span",{class:N(l(p).e("prefix"))},[z(e.$slots,"prefix")],2)]),key:"0"}:void 0,e.$slots.suffix?{name:"suffix",fn:pe(()=>[fe("span",{class:N(l(p).e("suffix"))},[z(e.$slots,"suffix")],2)]),key:"1"}:void 0]),1032,["id","step","model-value","placeholder","readonly","disabled","max","min","name","aria-label","inputmode"])],34))}}),g=Ye(on),sn="0.1.1",ae={"@flash-global66/g-config-provider":"^0.0.8","@flash-global66/g-form":"^0.1.0","@flash-global66/g-input":"^0.1.0","element-plus":"^2.9.0","lodash-unified":"^1.0.3",vue:"^3.2.0"},Rn={title:"Form/Input Number",component:g,parameters:{docs:{description:{component:`
El componente Input Number permite a los usuarios ingresar y modificar valores numéricos mediante teclado o botones de control.

> Versión actual: ${sn}

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
${We(ae)}

> Revisar la documentación de cada dependencia para mas información.


\`\`\`bash
# Dependencias global66
yarn add ${be(ae)}

# Dependencias externas
yarn add ${be(ae,!0)}
\`\`\`
`}}},argTypes:{modelValue:{control:"number",description:"Valor vinculado (v-model)",table:{type:{summary:"number | null"},defaultValue:{summary:"null"}}},step:{control:"number",description:"Paso incremental",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},stepStrictly:{control:"boolean",description:"Solo permite múltiplos del paso",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},max:{control:"number",description:"Valor máximo permitido",table:{type:{summary:"number"},defaultValue:{summary:"Number.MAX_SAFE_INTEGER"}}},min:{control:"number",description:"Valor mínimo permitido",table:{type:{summary:"number"},defaultValue:{summary:"Number.MIN_SAFE_INTEGER"}}},readonly:{control:"boolean",description:"Modo solo lectura",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Deshabilitar componente",table:{type:{summary:"boolean"},defaultValue:{summary:"undefined"}}},size:{control:"select",options:["large","default","small"],description:"Tamaño del componente",table:{type:{summary:"ComponentSize"},defaultValue:{summary:"default"}}},controls:{control:"boolean",description:"Mostrar botones de control",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},controlsPosition:{control:"select",options:["","right"],description:"Posición de los controles",table:{type:{summary:'"" | "right"'},defaultValue:{summary:'""'}}},valueOnClear:{control:"select",options:["min","max",0,null],description:"Valor al limpiar el input",table:{type:{summary:'"min" | "max" | number | null'},defaultValue:{summary:"null"}}},name:{control:"text",description:"Atributo name nativo",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},placeholder:{control:"text",description:"Texto de ayuda (placeholder)",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},precision:{control:"number",description:"Precisión de decimales",table:{type:{summary:"number"},defaultValue:{summary:"undefined"}}},validateEvent:{control:"boolean",description:"Activar validación de formulario",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},ariaLabel:{control:"text",description:"Etiqueta aria-label nativa",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},inputmode:{control:"text",description:"Modo de entrada nativo",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},align:{control:"select",options:["left","right","center"],description:"Alineación del texto",table:{type:{summary:'"left" | "right" | "center"'},defaultValue:{summary:"center"}}},disabledScientific:{control:"boolean",description:"Deshabilitar notación científica (e.g. 'e', 'E')",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},prefix:{description:"Contenido personalizado al inicio del input",table:{category:"Slots",type:{summary:"slot"}}},suffix:{description:"Contenido personalizado al final del input",table:{category:"Slots",type:{summary:"slot"}}},onChange:{action:"change",description:"Se dispara cuando el valor cambia",table:{category:"Eventos",type:{summary:"(cur: number | undefined, prev: number | undefined) => void"}}},onInput:{action:"input",description:"Se dispara cuando el input cambia",table:{category:"Eventos",type:{summary:"(val: number | null | undefined) => void"}}},onFocus:{action:"focus",description:"Se dispara cuando el input obtiene foco",table:{category:"Eventos",type:{summary:"(event: FocusEvent) => void"}}},onBlur:{action:"blur",description:"Se dispara cuando el input pierde foco",table:{category:"Eventos",type:{summary:"(event: FocusEvent) => void"}}}}},x=n=>({components:{GInputNumber:g,GConfigProvider:v},setup(){const t=i(n.modelValue??1);return te(()=>n.modelValue,m=>{t.value=m??1}),{args:n,modelValue:t}},template:`
    <g-config-provider>
      <g-input-number v-bind="args" v-model="modelValue" />
    </g-config-provider>
  `}),R={name:"Por defecto",parameters:{docs:{description:{story:"Ejemplo de uso del componente `g-input-number` con sus propiedades por defecto."}}},render:x,args:{modelValue:1,placeholder:"Ingresa un número"}},T={name:"Deshabilitado",parameters:{docs:{description:{story:"Ejemplo de uso del componente `g-input-number` deshabilitado."}}},render:x,args:{modelValue:1,disabled:!0,placeholder:"Input deshabilitado"}},M={name:"Solo lectura",parameters:{docs:{description:{story:"Si no se requiere que el valor pueda ser modificado, activa esta propiedad."}}},render:x,args:{modelValue:1,readonly:!0,placeholder:"Input solo lectura"}},_={name:"Controles a la derecha",parameters:{docs:{description:{story:"Ejemplo de uso del componente `g-input-number` con los controles a la derecha."}}},render:x,args:{modelValue:1,controlsPosition:"right"}},F={name:"Paso estricto",parameters:{docs:{description:{story:"Si necesitas que el valor sea siempre múltiplo del paso, activa esta propiedad."}}},render:x,args:{modelValue:2,step:2,stepStrictly:!0}},k={name:"Min/Max",parameters:{docs:{description:{story:"Si necesitas limitar el valor mínimo y máximo, limita el valor con las propiedades `min` y `max`."}}},render:x,args:{modelValue:5,min:0,max:10}},$={name:"Tamaño",parameters:{docs:{description:{story:"Usa el atributo `size` para configurar tamaños adicionales `large`, `default` o `small`."}}},render:()=>({components:{GInputNumber:g,GConfigProvider:v},setup(){const n=i(1),t=i(3),m=i(7);return{defaultValue:n,smallValue:t,largeValue:m}},template:`
      <g-config-provider>
        <div class="flex items-center gap-4">
          <g-input-number v-model="largeValue" size="large" />
          <g-input-number v-model="defaultValue" size="default" />
          <g-input-number v-model="smallValue" size="small" />
        </div>
      </g-config-provider>
    `})},B={name:"Alineación",parameters:{docs:{description:{story:"Usa el atributo `align` para configurar la alineación del texto con `left`, `right`, o `center`."}}},render:()=>({components:{GInputNumber:g,GConfigProvider:v},setup(){const n=i(123),t=i(456),m=i(789);return{leftValue:n,centerValue:t,rightValue:m}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-4">
          <g-input-number v-model="leftValue" align="left" />
          <g-input-number v-model="centerValue" align="center" />
          <g-input-number v-model="rightValue" align="right" />
        </div>
      </g-config-provider>
    `})},j={name:"Sin controles",parameters:{docs:{description:{story:"Configura `controls` a `false` para ocultar los botones de control."}}},render:()=>({components:{GInputNumber:g,GConfigProvider:v},setup(){return{modelValue:i(10)}},template:'<g-config-provider><g-input-number v-model="modelValue" :controls="false" /></g-config-provider>'})},q={name:"Paso personalizado",parameters:{docs:{description:{story:"Usa `step` para configurar el valor de incremento/decremento. Usa `stepStrictly` para asegurar que el valor sea siempre múltiplo del paso."}}},render:()=>({components:{GInputNumber:g,GConfigProvider:v},setup(){const n=i(2),t=i(10),m=i(0);return{step2:n,step10:t,stepStrictly:m}},template:`
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
    `})},O={name:"Precisión decimal",parameters:{docs:{description:{story:"Usa `precision` para configurar el número de decimales. Usa `step` con valores decimales para un control fino."}}},render:()=>({components:{GInputNumber:g,GConfigProvider:v},setup(){const n=i(1.23),t=i(1.2345),m=i(.5);return{precision2:n,precision4:t,decimalStep:m}},template:`
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
    `})},L={name:"Con placeholder",parameters:{docs:{description:{story:"Usa `placeholder` para mostrar una ayuda cuando el input está vacío."}}},render:()=>({components:{GInputNumber:g,GConfigProvider:v},setup(){return{modelValue:i(null)}},template:'<g-config-provider><g-input-number v-model="modelValue" placeholder="Ingresa un número" /></g-config-provider>'})},W={name:"Todos los tamaños",parameters:{docs:{description:{story:"Todos los tamaños disponibles con diferentes configuraciones."}}},render:()=>({components:{GInputNumber:g,GConfigProvider:v},setup(){const n=i(1),t=i(2),m=i(3),a=i(4),d=i(5),I=i(6);return{smallDefault:n,smallRight:t,defaultDefault:m,defaultRight:a,largeDefault:d,largeRight:I}},template:`
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
    `})};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};const Tn=["Default","Disabled","Readonly","ControlsRight","StepStrictly","MinMax","Size","Alignment","WithoutControls","CustomStep","DecimalPrecision","WithPlaceholder","AllSizes","WithPrefixSuffix"];export{B as Alignment,W as AllSizes,_ as ControlsRight,q as CustomStep,O as DecimalPrecision,R as Default,T as Disabled,k as MinMax,M as Readonly,$ as Size,F as StepStrictly,L as WithPlaceholder,K as WithPrefixSuffix,j as WithoutControls,Tn as __namedExportsOrder,Rn as default};
