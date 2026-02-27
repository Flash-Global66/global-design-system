import{d as h,b as w,f as L,T as y,e as i,x as p,m as u,k as g,y as x,r as n,w as f}from"./vue.esm-bundler-C43JrhH2.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as j,b as v}from"./documentation-stories-DKOl0nGm.js";import"./index-CvPWi8JN.js";import"./index-DVmIhHla.js";import"./index-Bjxdgq_P.js";import"./install-CfJGiCvs.js";import"./error-Cq9Fpw4b.js";const b=h({name:"Loader",props:{show:{default:!1,type:Boolean},message:{default:"",type:String}}}),C=""+new URL("preloader-C2KrFHCF.gif",import.meta.url).href,E={key:0,class:"gui-loader"},_={class:"flex flex-col items-center justify-center"},I={key:0,class:"mt-md text-inverse-txt text-4 font-medium max-w-96 mx-auto text-center drop-shadow-lg"};function k(e,d,s,z,D,T){return i(),w(y,{name:"fade"},{default:L(()=>[e.show?(i(),p("div",E,[g("div",_,[d[0]||(d[0]=g("img",{src:C,class:"h-20"},null,-1)),e.message?(i(),p("p",I,x(e.message),1)):u("",!0)])])):u("",!0)]),_:1})}const l=M(b,[["render",k]]);b.__docgenInfo={displayName:"Loader",exportName:"default",description:"",tags:{},props:[{name:"show",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"message",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/loader/Loader.vue"]};const a=n(!1),c=n("");n();n(!1);const S="0.2.2",m={"element-plus":"^2.9.0",vue:"^3.2.0"},O={title:"Feedback/Loader",component:l,parameters:{docs:{description:{component:`
El componente Loader es un indicador de carga global que se superpone a la interfaz. Útil para indicar procesos asíncronos bloqueantes y evitar interacciones indeseadas.

> Versión actual: ${S}

## Características
- Indicador de carga visual (spinner).
- Mensaje opcional personalizable.
- Iterador de mensajes para loaders extensos, con opción de aleatorizar mensajes.
- Control global mediante provider/composable.
- Fondo semitransparente para bloquear interacción.
- Transiciones suaves de entrada y salida.

## Instalación

\`\`\`bash
yarn add @flash-global66/g-loader
\`\`\`

## Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { Loader } from '@flash-global66/g-loader'

# importar el provider y métodos de control desde donde se debe disparar
import { showGLoader, setLoaderMessage } from '@flash-global66/g-loader'
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias: Puede que funcione con otras versiones, pero no se garantiza.
${j(m)}

> Revisar la documentación de cada dependencia para mas información.


\`\`\`bash
# Dependencias global66
yarn add ${v(m)}

# Dependencias externas
yarn add ${v(m,!0)}
\`\`\`

### Métodos de Control
Para controlar el loader desde cualquier parte de la aplicación:

- **showGLoader(show: boolean)**: Muestra u oculta el loader.
- **setLoaderMessage(config: string | SetLoaderMessageParams)**: Establece el mensaje del loader, con las siguientes condiciones:
  - Si config es un string único, se establece como el mensaje único del loader
  - Si config es un objeto con el formato \`\`\`{ messages: string[]; duration?: number; shuffle?: boolean; }\`\`\`, se iterarán los mensajes para mostrarse de acuerdo a la duración establecida en segundos.
  - Si se establece el parámetro shuffle en true, los mensajes se mostrarán de manera aleatoria.
}

\`\`\`typescript
// Mostrar loader
showGLoader(true);

// Establecer mensaje
setLoaderMessage('Cargando recursos...');

// o establecer array de mensajes
setLoaderMessage({ messages: ['Cargando recursos', 'Ya casi', 'Estamos terminando de mostrar el loader' ], duration: 5 });


// Ocultar loader
showGLoader(false);
\`\`\`
        `}}},argTypes:{show:{control:"boolean",description:"Controla la visibilidad del loader.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},message:{control:"text",description:"Mensaje opcional a mostrar debajo del spinner.",table:{type:{summary:"string"},defaultValue:{summary:""}}}}},o={name:"Básico",render:e=>({components:{Loader:l},template:`
      <div class="h-[500px] w-full relative transform scale-100 border border-gray-200 rounded-lg overflow-hidden">
         <Loader v-bind="args" />
         <div class="p-4">
           <h3 class="text-lg font-bold mb-2">Contenido de Ejemplo</h3>
           <p>El loader se mostrará sobre este contenedor.</p>
         </div>
      </div>
    `,setup(){return{args:e}}}),args:{show:!0}},r={name:"Con Mensaje",render:e=>({components:{Loader:l},template:`
      <div class="h-[500px] w-full relative transform scale-100 border border-gray-200 rounded-lg overflow-hidden">
         <Loader v-bind="args" />
         <div class="p-4">
           <h3 class="text-lg font-bold mb-2">Contenido de Ejemplo</h3>
           <p>El loader se mostrará sobre este contenedor.</p>
         </div>
      </div>
    `,setup(){return{args:e}}}),args:{show:!0,message:"Estamos procesando tu solicitud. Esto puede tomar unos momentos. Tomate un café"}},t={name:"Interactivo",parameters:{docs:{description:{story:"Esta historia demuestra el uso interactivo del loader. Haz clic en el botón para simular una carga de 3 segundos."}}},render:e=>({components:{Loader:l},template:`
      <div class="h-[500px] w-full relative transform scale-100 border border-gray-200 rounded-lg overflow-hidden flex flex-col items-center justify-center gap-4">
         <Loader :show="showLoader" :message="loaderMessage" />
         
         <div class="z-0 flex flex-col gap-4 items-center">
           <p class="text-gray-600">Interactúa con los controles para probar el loader global.</p>
           <button @click="toggleLoader" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              {{ showLoader ? 'Ocultar Loader' : 'Mostrar Loader (3s)' }}
           </button>
         </div>
      </div>
    `,setup(){return f(()=>e.show,s=>{a.value=!!s}),f(()=>e.message,s=>{c.value=s||""}),{args:e,showLoader:a,loaderMessage:c,toggleLoader:()=>{a.value=!a.value,a.value&&(c.value=e.message||"Cargando...",setTimeout(()=>{a.value=!1},3e3))}}}}),args:{show:!1,message:"Cargando datos..."}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const H=["Default","WithMessage","Interactive"];export{o as Default,t as Interactive,r as WithMessage,H as __namedExportsOrder,O as default};
