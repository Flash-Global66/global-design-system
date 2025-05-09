import{d as ee,r as b,c as x,b as $,e as i,f as v,h as k,j as te,v as re,u as t,k as E,t as y,m as f,l,s as S,x as V,F as ae,y as oe,z as ne,p as se,W as ie,T as le,A as de}from"./vue.esm-bundler-CAwYpNIe.js";import{G as ce}from"./index-BON1s_yN.js";import{s as pe,G as ue}from"./index-CfncYtRd.js";import{o as me,s as ye,e as fe}from"./index-Bc0xIGp-.js";import{y as w}from"./index-P3S_mHJ6.js";import{u as be}from"./index-BZoaT_Nw.js";import{f as ge,a as ve,G as z}from"./ConfigProvider-BOxJGivF.js";import{Y as we}from"./index-CJRGzAfa.js";import{_ as Ce}from"./index-DuUlJSr7.js";import"./error-Cq9Fpw4b.js";import"./style-ByBodnvE.js";import"./vnode-DMsebQTc.js";import"./index-DyHzSxrf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-DDhz3fsR.js";import"./index-D91dGCGa.js";import"./index-DXAv6EHR.js";import"./index-Cgifd4Ll.js";import"./index-DHlulF0o.js";import"./_initCloneObject-Q0zbkYJq.js";import"./_arrayPush-DLozo812.js";import"./castArray-CWz00HzK.js";import"./use-form-item-Uxm-S5ZD.js";import"./constants-Dnj8X3EN.js";import"./event-BB_Ol6Sd.js";import"./index-DYisi-wq.js";/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const he=Object.prototype.hasOwnProperty,L=(e,o)=>he.call(e,o),R=e=>typeof e=="string",_=e=>e!==null&&typeof e=="object",xe=e=>typeof e=="number",ke=e=>R(e)?!Number.isNaN(Number(e)):!1;function Ee(e,o="px"){if(!e)return"";if(xe(e)||ke(e))return`${e}${o}`;if(R(e))return e}const N="__epPropKey",Ae=e=>_(e)&&!!e[N],Be=(e,o)=>{if(!_(e)||Ae(e))return e;const{values:a,required:s,default:g,type:n,validator:d}=e,p={type:n,required:!!s,validator:a||d?c=>{let u=!1,m=[];if(a&&(m=Array.from(a),L(e,"default")&&m.push(g),u||(u=m.includes(c))),d&&(u||(u=d(c))),!u&&m.length>0){const h=[...new Set(m)].map(D=>JSON.stringify(D)).join(", ");de(`Invalid prop: validation failed${o?` for prop "${o}"`:""}. Expected one of [${h}], got value ${JSON.stringify(c)}.`)}return u}:void 0,[N]:!0};return L(e,"default")&&(p.default=g),p},Ge=e=>ge(Object.entries(e).map(([o,a])=>[o,Be(a,o)])),Te=(e,o)=>(e.install=a=>{for(const s of[e,...Object.values({})])a.component(s.name,s)},e),ze=Ge({...fe,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},description:{type:String,default:""},modalFade:{type:Boolean,default:!0},headerAriaLevel:{type:String,default:"2"}}),De=me,je=["aria-label","aria-labelledby","aria-describedby"],Oe=["id","aria-level"],Se=["id"],Ve=ee({name:"GDrawer",inheritAttrs:!1,__name:"drawer",props:ze,emits:De,setup(e,{expose:o}){const a=e,s=b(),g=b(),n=ve("drawer"),d=x(()=>a.direction==="rtl"||a.direction==="ltr"),p=x(()=>Ee(a.size)),c=x(()=>a.closeOnPressEscape),u=x(()=>a.closeOnClickModal),{afterEnter:m,afterLeave:h,beforeLeave:D,visible:j,rendered:H,titleId:P,bodyId:M,zIndex:I,onModalClick:J,onOpenAutoFocus:U,onCloseAutoFocus:K,onFocusoutPrevented:W,onCloseRequested:Y,handleClose:F,displayButtons:Z,buttonLayoutClass:Q}=ye(a,s,{closeOnClickModal:u,closeOnPressEscape:c});return o({handleClose:F,afterEnter:m,afterLeave:h}),(r,q)=>(i(),$(t(ue),{to:r.appendTo,disabled:r.appendTo!=="body"?!1:!r.appendToBody},{default:v(()=>[k(le,{name:t(n).b("fade"),onAfterEnter:t(m),onAfterLeave:t(h),onBeforeLeave:t(D)},{default:v(()=>[te(k(t(ce),{mask:r.modal,"overlay-class":r.modalClass,"z-index":t(I),onClick:t(J)},{default:v(()=>[k(t(pe),{loop:"",trapped:t(j),"focus-trap-el":s.value,"focus-start-el":g.value,onFocusAfterTrapped:t(U),onFocusAfterReleased:t(K),onFocusoutPrevented:t(W),onReleaseRequested:t(Y)},{default:v(()=>[E("div",se({ref_key:"drawerRef",ref:s,"aria-modal":"true","aria-label":r.title||void 0,"aria-labelledby":r.title?void 0:t(P),"aria-describedby":t(M)},r.$attrs,{class:[t(n).b(),r.direction,t(j)&&"open"],style:d.value?"width: "+p.value:"height: "+p.value,role:"dialog",onClick:q[0]||(q[0]=ie(()=>{},["stop"]))}),[E("span",{ref_key:"focusStartRef",ref:g,class:l(t(n).e("sr-focus")),tabindex:"-1"},null,2),E("header",{class:l([t(n).e("header"),r.headerClass])},[E("div",{class:l(t(n).em("header","container-close"))},[k(t(be),{icon:"regular times",onClick:t(F)},null,8,["onClick"])],2),r.$slots.customHeader||r.title||r.description?(i(),y("div",{key:0,class:l(t(n).em("header","container-title"))},[r.title||r.description?(i(),y("div",{key:0,class:l(t(n).em("header","title-description"))},[r.title?(i(),y("h5",{key:0,id:t(P),role:"heading","aria-level":r.headerAriaLevel,class:l(t(n).e("title"))},V(r.title),11,Oe)):f("",!0),r.description?(i(),y("span",{key:1,class:l(t(n).e("description"))},V(r.description),3)):f("",!0)],2)):f("",!0),r.$slots.customHeader?S(r.$slots,"customHeader",{key:1}):f("",!0)],2)):f("",!0)],2),t(H)?(i(),y("div",{key:0,id:t(M),class:l([t(n).e("body"),r.bodyClass])},[S(r.$slots,"default")],10,Se)):f("",!0),r.$slots.footer||a.footerButtons?.length?(i(),y("div",{key:1,class:l([t(n).e("footer"),r.footerClass])},[S(r.$slots,"footer",{},()=>[a.footerButtons?.length?(i(),y("div",{key:0,class:l([t(n).em("footer","buttons"),t(Q)])},[(i(!0),y(ae,null,oe(t(Z),(O,X)=>(i(),$(t(w),{key:X,variant:O.variant,full:"",onClick:O.onClick},{default:v(()=>[ne(V(O.text),1)]),_:2},1032,["variant","onClick"]))),128))],2)):f("",!0)])],2)):f("",!0)],16,je)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[re,t(j)]])]),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}}),C=Te(Ve),it={title:"Feedback/Drawer",component:C,parameters:{docs:{description:{component:`✨ \`GDrawer\` - Componente de diálogo extensible de cualquier lado de la pantalla.

Un elemento de diálogo que se desliza desde el borde de la ventana para revelar contenido adicional. Puede ser usado para mostrar información adicional, formularios, mensajes, etc.

> Este componente usa la versión \`2.9.6\` de Element Plus.

**Características principales:**

- Título y descripción
- Posición y tamaño personalizado
- Botones de acción en el pie
- Cierre con clic fuera del drawer
- Cierre con tecla ESC
- Cierre con botón de cierre
- Contenido personalizado

🚀 **Instalación**

\`\`\`bash
yarn add @flash-global66/g-drawer
\`\`\`

🪝 **Dependencias**

Este componente requiere:

> - @flash-global66/g-overlay
> - @flash-global66/g-focus-trap
> - @flash-global66/g-teleport
> - @flash-global66/g-dialog
> - @flash-global66/g-button
> - @flash-global66/g-icon-button

📥 **Importación básica**

\`\`\`typescript
import { GDrawer } from '@flash-global66/g-drawer'
import '@flash-global66/g-drawer/styles.scss'
\`\`\`
`}}},argTypes:{modelValue:{name:"v-model",description:"Estado de visibilidad del drawer",control:"boolean",table:{category:"Estado y Configuración Principal",type:{summary:"boolean"},defaultValue:{summary:"false"}}},lockScroll:{name:"lock-scroll",description:"Bloquear scroll del body",control:"boolean",table:{category:"Estado y Configuración Principal",type:{summary:"boolean"},defaultValue:{summary:"true"}}},destroyOnClose:{name:"destroy-on-close",description:"Destruir al cerrar",control:"boolean",table:{category:"Estado y Configuración Principal",type:{summary:"boolean"},defaultValue:{summary:"false"}}},title:{name:"title",description:"Título del drawer",control:"text",table:{category:"Apariencia y Estilo",type:{summary:"string"},defaultValue:{summary:"''"}}},description:{name:"description",description:"Descripción del drawer",control:"text",table:{category:"Apariencia y Estilo",type:{summary:"string"},defaultValue:{summary:"''"}}},footerButtons:{name:"footer-buttons",control:"object",description:"Array de configuración para los botones del footer (máximo 3 botones)",table:{category:"Apariencia y Estilo",defaultValue:{summary:"[]"},type:{summary:"FooterButton[]",detail:`{
  text: string,
  onClick: () => void,
  variant: 'primary' | 'secondary' | 'tertiary'
}`}}},width:{name:"width",description:"Ancho del drawer",control:"text",table:{category:"Apariencia y Estilo",type:{summary:"string | number"},defaultValue:{summary:"'30%'"}}},direction:{name:"direction",description:"Dirección de apertura del drawer",control:"select",options:["ltr","rtl","ttb","btt"],table:{category:"Apariencia y Estilo",type:{summary:"string"},defaultValue:{summary:"'rtl'"}}},modalFade:{name:"modalFade",description:"Efecto de desvanecimiento del modal",control:"boolean",table:{category:"Apariencia y Estilo",type:{summary:"boolean"},defaultValue:{summary:"true"}}},modal:{description:"Debe mostrar la capa de sombra",control:"boolean",table:{category:"Apariencia y Estilo",type:{summary:"boolean"},defaultValue:{summary:"true"}}},zIndex:{description:"Z-index del drawer",control:"number",table:{category:"Apariencia y Estilo",type:{summary:"number"},defaultValue:{summary:""}}},modalClass:{name:"modal-class",description:"Clase del modal",control:"text",table:{category:"Apariencia y Estilo",type:{summary:"string"},defaultValue:{summary:"''"}}},bodyClass:{name:"body-class",description:"Clase del body",control:"text",table:{category:"Apariencia y Estilo",type:{summary:"string"},defaultValue:{summary:"''"}}},footerClass:{name:"footer-class",description:"Clase del footer",control:"text",table:{category:"Apariencia y Estilo",type:{summary:"string"},defaultValue:{summary:"''"}}},closeOnClickModal:{name:"close-on-click-modal",description:"Cerrar al hacer clic en el modal",control:"boolean",table:{category:"Comportamiento y Temporización",type:{summary:"boolean"},defaultValue:{summary:"true"}}},closeOnPressEscape:{name:"close-on-press-escape",description:"Cerrar al presionar ESC",control:"boolean",table:{category:"Comportamiento y Temporización",type:{summary:"boolean"},defaultValue:{summary:"true"}}},beforeClose:{name:"before-close",description:"Detiene el cierre si se establece",control:!1,table:{category:"Comportamiento y Temporización",type:{summary:"() => void"}}},openDelay:{name:"open-delay",description:"Retraso en abrir el drawer",control:"number",table:{category:"Comportamiento y Temporización",type:{summary:"number"},defaultValue:{summary:"0"}}},closeDelay:{name:"close-delay",description:"Retraso en cerrar el drawer",control:"number",table:{category:"Comportamiento y Temporización",type:{summary:"number"},defaultValue:{summary:"0"}}},appendToBody:{name:"append-to-body",description:"Si el drawer debe ser anexado al body",control:"boolean",table:{category:"Ubicación en el DOM",type:{summary:"boolean"},defaultValue:{summary:"false"}}},appendTo:{name:"append-to",description:"Elemento al que se anexa el drawer",control:"text",table:{category:"Ubicación en el DOM",type:{summary:"string"},defaultValue:{summary:"body"}}},open:{name:"open",description:"Se activa cuando se abre el drawer",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},opened:{description:"Se activa al finalizar la animación de apertura",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},close:{name:"close",description:"Se activa cuando se cierra el drawer",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},closed:{description:"Se activa al finalizar la animación de cierre",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},openAutoFocus:{name:"open-auto-focus",description:"Enfoca contenido después de abrir",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},closeAutoFocus:{name:"close-auto-focus",description:"Enfoca contenido después de cerrar",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},handleClose:{name:"handle-close",description:"Método para cerrar el drawer",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},afterEnter:{name:"after-enter",description:"Evento post transición de entrada",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},afterLeave:{name:"after-leave",description:"Evento post transición de salida",table:{category:"Eventos y Métodos",type:{summary:"() => void"}}},default:{description:"Contenido principal del drawer",table:{category:"Slots",type:{summary:"Slot"}},control:!1},customHeader:{name:"custom-header",description:"Header personalizado",table:{category:"Slots",type:{summary:"Slot"}},control:!1},footer:{description:"Contenido del footer",table:{category:"Slots",type:{summary:"Slot"}},control:!1}},args:{title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",width:"30%",modalFade:!0,direction:"rtl",appendToBody:!0,appendTo:"body",lockScroll:!0,closeOnClickModal:!0,closeOnPressEscape:!0,openDelay:0,closeDelay:0,destroyOnClose:!1,modal:!0,modalClass:"",bodyClass:"",footerClass:"",zIndex:10,footerButtons:[{text:"Guardar",onClick:()=>{},variant:"primary"}]}},A={name:"Básico",render:e=>({components:{GDrawer:C,GConfigProvider:z,GButton:w},setup(){return{drawer:b(!1),args:e}},template:`
      <g-config-provider>
        <g-button @click="drawer = true">
          Abrir drawer
        </g-button>
        <g-drawer v-model="drawer" v-bind="args">
          <span>Contenido personalizado!</span>
        </g-drawer>
      </g-config-provider>
    `})},B={name:"Todas las combinaciones de botones",parameters:{docs:{description:{story:`Este ejemplo muestra cómo se ven los botones en el footer del drawer.

- Botones de acción en el footer
- Variante de botones
- Organización de botones en el footer`}}},render:()=>({components:{GDrawer:C,GConfigProvider:z,GButton:w},setup(){const e=b(!1),o=b([]),a=()=>{e.value=!1},s=d=>{e.value=!0,o.value=n(d)},g={1:{text:"Guardar",onClick:a,variant:"primary"},2:{text:"Cancelar",onClick:a,variant:"secondary"},3:{text:"Eliminar",onClick:a,variant:"tertiary"}},n=d=>{const p=[];for(let c=0;c<d;c++)p.push(g[c+1]);return p};return{drawer:e,handleClose:a,handleOpen:s,buttons:o}},template:`
      <g-config-provider>
        <div class="flex gap-4">
          <g-button @click="handleOpen(1)">
            Abrir drawer con 1 botón
          </g-button>
          <g-button @click="handleOpen(2)">
            Abrir drawer con 2 botones
          </g-button>
          <g-button @click="handleOpen(3)">
            Abrir drawer con 3 botones
          </g-button>
        </div>

        <g-drawer 
          v-model="drawer" 
          title="Botones" 
          description="Este es un ejemplo de cómo se ven los botones en el footer del drawer."
          append-to-body
          :footer-buttons="buttons"
          @close="handleClose"
        >
          <span>Contenido personalizado!</span>
        </g-drawer>
      </g-config-provider>
    `})},G={name:"Todas las direcciones",parameters:{docs:{description:{story:`Este ejemplo muestra cómo se ven los drawers en todas las direcciones.

- Dirección de apertura
- Título y descripción`}}},render:()=>({components:{GDrawer:C,GConfigProvider:z,GButton:w,GRadioGroup:Ce},setup(){const e=b(!1),o=b("rtl");return{drawer:e,directions:[{value:"ltr",label:"Izquierda a derecha"},{value:"rtl",label:"Derecha a izquierda"},{value:"ttb",label:"Arriba a abajo"},{value:"btt",label:"Abajo a arriba"}],direction:o}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-8">
          <g-radio-group
            v-model="direction"
            :options="directions"
          />
          <g-button @click="drawer = true">
            Abrir drawer
          </g-button>
        </div>
        <g-drawer 
          v-model="drawer" 
          title="Dirección" 
          description="Este es un ejemplo de cómo se ven los drawers en todas las direcciones."
          append-to-body
          :direction="direction"
          :footer-buttons="[
            {
              text: 'Guardar',
              onClick: () => (drawer = false),
              variant: 'primary'
            }
          ]"
        >
          <span>Contenido personalizado!</span>
        </g-drawer>
      </g-config-provider>
    `})},T={name:"Con header personalizado",parameters:{docs:{description:{story:`Este ejemplo muestra cómo se ve un drawer con un header personalizado.

- Header personalizado
- Título y descripción`}}},render:()=>({components:{GDrawer:C,GConfigProvider:z,GButton:w,GTag:we},setup(){const e=b(!1),o=Array(12).fill({send:"$100.000,00 CLP",convert:"$87.000,00 CLP"});return{drawer:e,items:o}},template:`
      <g-config-provider>
        <g-button @click="drawer = true">
          Abrir drawer
        </g-button>
        <g-drawer 
          v-model="drawer" 
          title="Detalle Completo" 
          description="Transacción creada por: Michael Murduck
 Aprobador: Joan Rojas"
          append-to-body
          :footer-buttons="[
            { 
              text: 'Guardar', 
              onClick: () => (drawer = false), 
              variant: 'primary' 
            },
            { 
              text: 'Cancelar', 
              onClick: () => (drawer = false), 
              variant: 'secondary' 
            }
          ]"
        >
          <template #customHeader>
            <div class="flex justify-start items-center flex-row gap-2">
              <g-tag text="warning" type="warning" effect="light" />
              <g-tag text="success" type="success" effect="light" />
              <g-tag text="info" type="info" effect="light" />
            </div>
          </template>
          <div class="flex flex-col gap-1 justify-center items-center">
            <template v-for="(item, index) in items" :key="index">
              <div class="w-full flex justify-between py-3 border-b border-dashed border-gray-300">
                <span class="text-4 font-semibold text-primary-txt">Tú envias:</span>
                <span class="text-4 font-semibold text-[#434A5C]">{{ item.send }}</span>
              </div>
              <div class="w-full flex justify-between py-3 border-b border-dashed border-gray-300">
                <span class="text-4 font-semibold text-primary-txt">Monto a convertir:</span>
                <span class="text-4 font-semibold text-[#434A5C]">{{ item.convert }}</span>
              </div>
            </template>
          </div>
        </g-drawer>
      </g-config-provider>
    `})};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Básico',
  render: args => ({
    components: {
      GDrawer,
      GConfigProvider,
      GButton
    },
    setup() {
      const drawer = ref(false);
      return {
        drawer,
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-button @click="drawer = true">
          Abrir drawer
        </g-button>
        <g-drawer v-model="drawer" v-bind="args">
          <span>Contenido personalizado!</span>
        </g-drawer>
      </g-config-provider>
    \`
  })
}`,...A.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Todas las combinaciones de botones',
  parameters: {
    docs: {
      description: {
        story: \`Este ejemplo muestra cómo se ven los botones en el footer del drawer.

- Botones de acción en el footer
- Variante de botones
- Organización de botones en el footer\`
      }
    }
  },
  render: () => ({
    components: {
      GDrawer,
      GConfigProvider,
      GButton
    },
    setup() {
      const drawer = ref<boolean>(false);
      const buttons = ref<FooterButton[]>([]);
      const handleClose = () => {
        drawer.value = false;
      };
      const handleOpen = (quantity: number) => {
        drawer.value = true;
        buttons.value = buildButtons(quantity);
      };
      const mapTypesButtons: Record<number, FooterButton> = {
        1: {
          text: 'Guardar',
          onClick: handleClose,
          variant: 'primary'
        },
        2: {
          text: 'Cancelar',
          onClick: handleClose,
          variant: 'secondary'
        },
        3: {
          text: 'Eliminar',
          onClick: handleClose,
          variant: 'tertiary'
        }
      };
      const buildButtons = (quantity: number) => {
        const buttons: FooterButton[] = [];
        for (let i = 0; i < quantity; i++) {
          buttons.push(mapTypesButtons[i + 1]);
        }
        return buttons;
      };
      return {
        drawer,
        handleClose,
        handleOpen,
        buttons
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex gap-4">
          <g-button @click="handleOpen(1)">
            Abrir drawer con 1 botón
          </g-button>
          <g-button @click="handleOpen(2)">
            Abrir drawer con 2 botones
          </g-button>
          <g-button @click="handleOpen(3)">
            Abrir drawer con 3 botones
          </g-button>
        </div>

        <g-drawer 
          v-model="drawer" 
          title="Botones" 
          description="Este es un ejemplo de cómo se ven los botones en el footer del drawer."
          append-to-body
          :footer-buttons="buttons"
          @close="handleClose"
        >
          <span>Contenido personalizado!</span>
        </g-drawer>
      </g-config-provider>
    \`
  })
}`,...B.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Todas las direcciones',
  parameters: {
    docs: {
      description: {
        story: \`Este ejemplo muestra cómo se ven los drawers en todas las direcciones.

- Dirección de apertura
- Título y descripción\`
      }
    }
  },
  render: () => ({
    components: {
      GDrawer,
      GConfigProvider,
      GButton,
      GRadioGroup
    },
    setup() {
      const drawer = ref<boolean>(false);
      const direction = ref<string>('rtl');
      const directions = [{
        value: 'ltr',
        label: 'Izquierda a derecha'
      }, {
        value: 'rtl',
        label: 'Derecha a izquierda'
      }, {
        value: 'ttb',
        label: 'Arriba a abajo'
      }, {
        value: 'btt',
        label: 'Abajo a arriba'
      }];
      return {
        drawer,
        directions,
        direction
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-8">
          <g-radio-group
            v-model="direction"
            :options="directions"
          />
          <g-button @click="drawer = true">
            Abrir drawer
          </g-button>
        </div>
        <g-drawer 
          v-model="drawer" 
          title="Dirección" 
          description="Este es un ejemplo de cómo se ven los drawers en todas las direcciones."
          append-to-body
          :direction="direction"
          :footer-buttons="[
            {
              text: 'Guardar',
              onClick: () => (drawer = false),
              variant: 'primary'
            }
          ]"
        >
          <span>Contenido personalizado!</span>
        </g-drawer>
      </g-config-provider>
    \`
  })
}`,...G.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Con header personalizado',
  parameters: {
    docs: {
      description: {
        story: \`Este ejemplo muestra cómo se ve un drawer con un header personalizado.

- Header personalizado
- Título y descripción\`
      }
    }
  },
  render: () => ({
    components: {
      GDrawer,
      GConfigProvider,
      GButton,
      GTag
    },
    setup() {
      const drawer = ref<boolean>(false);
      const items = Array(12).fill({
        send: '$100.000,00 CLP',
        convert: '$87.000,00 CLP'
      });
      return {
        drawer,
        items
      };
    },
    template: \`
      <g-config-provider>
        <g-button @click="drawer = true">
          Abrir drawer
        </g-button>
        <g-drawer 
          v-model="drawer" 
          title="Detalle Completo" 
          description="Transacción creada por: Michael Murduck\\n Aprobador: Joan Rojas"
          append-to-body
          :footer-buttons="[
            { 
              text: 'Guardar', 
              onClick: () => (drawer = false), 
              variant: 'primary' 
            },
            { 
              text: 'Cancelar', 
              onClick: () => (drawer = false), 
              variant: 'secondary' 
            }
          ]"
        >
          <template #customHeader>
            <div class="flex justify-start items-center flex-row gap-2">
              <g-tag text="warning" type="warning" effect="light" />
              <g-tag text="success" type="success" effect="light" />
              <g-tag text="info" type="info" effect="light" />
            </div>
          </template>
          <div class="flex flex-col gap-1 justify-center items-center">
            <template v-for="(item, index) in items" :key="index">
              <div class="w-full flex justify-between py-3 border-b border-dashed border-gray-300">
                <span class="text-4 font-semibold text-primary-txt">Tú envias:</span>
                <span class="text-4 font-semibold text-[#434A5C]">{{ item.send }}</span>
              </div>
              <div class="w-full flex justify-between py-3 border-b border-dashed border-gray-300">
                <span class="text-4 font-semibold text-primary-txt">Monto a convertir:</span>
                <span class="text-4 font-semibold text-[#434A5C]">{{ item.convert }}</span>
              </div>
            </template>
          </div>
        </g-drawer>
      </g-config-provider>
    \`
  })
}`,...T.parameters?.docs?.source}}};const lt=["Basic","withAllTypesOfButtons","allDirections","withCustomHeader"];export{A as Basic,lt as __namedExportsOrder,G as allDirections,it as default,B as withAllTypesOfButtons,T as withCustomHeader};
