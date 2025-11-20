import{d as h,b as w,f as L,T as y,e as d,x as m,m as u,k as g,y as x,r as p,w as f}from"./vue.esm-bundler-C43JrhH2.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as M,b as v}from"./documentation-stories-B6UwFlZA.js";import"./index-CvPWi8JN.js";import"./index-DtEa0mpY.js";import"./index-ZrO6PWlN.js";import"./install-CfJGiCvs.js";import"./error-Cq9Fpw4b.js";const b=h({name:"Loader",props:{show:{default:!1,type:Boolean},message:{default:"",type:String}}}),E=""+new URL("preloader-C2KrFHCF.gif",import.meta.url).href,_={key:0,class:"gui-loader"},j={class:"flex flex-col items-center justify-center"},I={key:0,class:"mt-md text-inverse-txt text-4 font-medium max-w-96 mx-auto text-center"};function k(e,l,o,z,T,$){return d(),w(y,{name:"fade"},{default:L(()=>[e.show?(d(),m("div",_,[g("div",j,[l[0]||(l[0]=g("img",{src:E,class:"h-20"},null,-1)),e.message?(d(),m("p",I,x(e.message),1)):u("",!0)])])):u("",!0)]),_:1})}const n=C(b,[["render",k]]);b.__docgenInfo={displayName:"Loader",exportName:"default",description:"",tags:{},props:[{name:"show",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"message",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/loader/Loader.vue"]};const a=p(!1),i=p("");p(!1);const D="0.1.0",c={"element-plus":"^2.9.0",vue:"^3.2.0"},P={title:"Feedback/Loader",component:n,parameters:{docs:{description:{component:`
El componente Loader es un indicador de carga global que se superpone a la interfaz. Útil para indicar procesos asíncronos bloqueantes.

> Versión actual: ${D}

## Características
- Indicador de carga visual (spinner)
- Mensaje opcional personalizable
- Control global mediante provider/composable
- Fondo semitransparente para bloquear interacción
- Transiciones suaves de entrada y salida

## Instalación

\`\`\`bash
yarn add @flash-global66/g-loader
\`\`\`

## Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { Loader } from '@flash-global66/g-loader'

# importar el provider y métodos de control
import { showGLoader, setLoaderMessage } from '@flash-global66/g-loader'
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias: Puede que funcione con otras versiones, pero no se garantiza.
${M(c)}

> Revisar la documentación de cada dependencia para mas información.


\`\`\`bash
# Dependencias global66
yarn add ${v(c)}

# Dependencias externas
yarn add ${v(c,!0)}
\`\`\`

### Métodos de Control
Para controlar el loader desde cualquier parte de la aplicación:

- **showGLoader(show: boolean)**: Muestra u oculta el loader.
- **setLoaderMessage(message: string)**: Establece el mensaje del loader.

\`\`\`typescript
// Mostrar loader
showGLoader(true);

// Establecer mensaje
setLoaderMessage('Cargando recursos...');

// Ocultar loader
showGLoader(false);
\`\`\`
        `}}},argTypes:{show:{control:"boolean",description:"Controla la visibilidad del loader.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},message:{control:"text",description:"Mensaje opcional a mostrar debajo del spinner.",table:{type:{summary:"string"},defaultValue:{summary:""}}}}},s={name:"Básico",render:e=>({components:{Loader:n},template:`
      <div class="h-[500px] w-full relative transform scale-100 border border-gray-200 rounded-lg overflow-hidden">
         <Loader v-bind="args" />
         <div class="p-4">
           <h3 class="text-lg font-bold mb-2">Contenido de Ejemplo</h3>
           <p>El loader se mostrará sobre este contenedor.</p>
         </div>
      </div>
    `,setup(){return{args:e}}}),args:{show:!0}},r={name:"Con Mensaje",render:e=>({components:{Loader:n},template:`
      <div class="h-[500px] w-full relative transform scale-100 border border-gray-200 rounded-lg overflow-hidden">
         <Loader v-bind="args" />
         <div class="p-4">
           <h3 class="text-lg font-bold mb-2">Contenido de Ejemplo</h3>
           <p>El loader se mostrará sobre este contenedor.</p>
         </div>
      </div>
    `,setup(){return{args:e}}}),args:{show:!0,message:"Estamos procesando tu solicitud. Esto puede tomar unos momentos. Tomate un café"}},t={name:"Interactivo",parameters:{docs:{description:{story:"Esta historia demuestra el uso interactivo del loader. Haz clic en el botón para simular una carga de 3 segundos."}}},render:e=>({components:{Loader:n},template:`
      <div class="h-[500px] w-full relative transform scale-100 border border-gray-200 rounded-lg overflow-hidden flex flex-col items-center justify-center gap-4">
         <Loader :show="showLoader" :message="loaderMessage" />
         
         <div class="z-0 flex flex-col gap-4 items-center">
           <p class="text-gray-600">Interactúa con los controles para probar el loader global.</p>
           <button @click="toggleLoader" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              {{ showLoader ? 'Ocultar Loader' : 'Mostrar Loader (3s)' }}
           </button>
         </div>
      </div>
    `,setup(){return f(()=>e.show,o=>{a.value=!!o}),f(()=>e.message,o=>{i.value=o||""}),{args:e,showLoader:a,loaderMessage:i,toggleLoader:()=>{a.value=!a.value,a.value&&(i.value=e.message||"Cargando...",setTimeout(()=>{a.value=!1},3e3))}}}}),args:{show:!1,message:"Cargando datos..."}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Básico',
  render: args => ({
    components: {
      Loader
    },
    template: \`
      <div class="h-[500px] w-full relative transform scale-100 border border-gray-200 rounded-lg overflow-hidden">
         <Loader v-bind="args" />
         <div class="p-4">
           <h3 class="text-lg font-bold mb-2">Contenido de Ejemplo</h3>
           <p>El loader se mostrará sobre este contenedor.</p>
         </div>
      </div>
    \`,
    setup() {
      return {
        args
      };
    }
  }),
  args: {
    show: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Con Mensaje',
  render: args => ({
    components: {
      Loader
    },
    template: \`
      <div class="h-[500px] w-full relative transform scale-100 border border-gray-200 rounded-lg overflow-hidden">
         <Loader v-bind="args" />
         <div class="p-4">
           <h3 class="text-lg font-bold mb-2">Contenido de Ejemplo</h3>
           <p>El loader se mostrará sobre este contenedor.</p>
         </div>
      </div>
    \`,
    setup() {
      return {
        args
      };
    }
  }),
  args: {
    show: true,
    message: 'Estamos procesando tu solicitud. Esto puede tomar unos momentos. Tomate un café'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Interactivo',
  parameters: {
    docs: {
      description: {
        story: 'Esta historia demuestra el uso interactivo del loader. Haz clic en el botón para simular una carga de 3 segundos.'
      }
    }
  },
  render: args => ({
    components: {
      Loader
    },
    template: \`
      <div class="h-[500px] w-full relative transform scale-100 border border-gray-200 rounded-lg overflow-hidden flex flex-col items-center justify-center gap-4">
         <Loader :show="showLoader" :message="loaderMessage" />
         
         <div class="z-0 flex flex-col gap-4 items-center">
           <p class="text-gray-600">Interactúa con los controles para probar el loader global.</p>
           <button @click="toggleLoader" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              {{ showLoader ? 'Ocultar Loader' : 'Mostrar Loader (3s)' }}
           </button>
         </div>
      </div>
    \`,
    setup() {
      watch(() => args.show, val => {
        showLoader.value = !!val;
      });
      watch(() => args.message, val => {
        loaderMessage.value = val || '';
      });
      const toggleLoader = () => {
        showLoader.value = !showLoader.value;
        if (showLoader.value) {
          loaderMessage.value = args.message || 'Cargando...';
          setTimeout(() => {
            showLoader.value = false;
          }, 3000);
        }
      };
      return {
        args,
        showLoader,
        loaderMessage,
        toggleLoader
      };
    }
  }),
  args: {
    show: false,
    message: 'Cargando datos...'
  }
}`,...t.parameters?.docs?.source}}};const H=["Default","WithMessage","Interactive"];export{s as Default,t as Interactive,r as WithMessage,H as __namedExportsOrder,P as default};
