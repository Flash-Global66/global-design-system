import{d as b,a as h,w,T as L,o as i,y as p,f as u,z as x,j as g,r as t,s as f}from"./iframe-Dct5CHxr.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as E,b as v}from"./documentation-stories-DmJzCMmf.js";import"./preload-helper-Dch09mLN.js";import"./index-GU5Cqqg3.js";import"./install.util-cBz1HN_T.js";const j=b({name:"Loader",props:{show:{default:!1,type:Boolean},message:{default:"",type:String}}}),M=""+new URL("preloader-C2KrFHCF.gif",import.meta.url).href,C={key:0,class:"gui-loader"},_={class:"flex flex-col items-center justify-center"},I={key:0,class:"mt-md text-inverse-txt text-4 font-medium max-w-96 mx-auto text-center drop-shadow-lg"};function z(e,l,s,D,k,T){return i(),h(L,{name:"fade"},{default:w(()=>[e.show?(i(),p("div",C,[u("div",_,[l[0]||(l[0]=u("img",{src:M,class:"h-20"},null,-1)),e.message?(i(),p("p",I,x(e.message),1)):g("",!0)])])):g("",!0)]),_:1})}const d=y(j,[["render",z]]),a=t(!1),c=t("");t();t(!1);const S="0.2.4",m={vue:"^3.2.0"},G={title:"Feedback/Loader",component:d,parameters:{docs:{description:{component:`
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
${E(m)}

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
        `}}},argTypes:{show:{control:"boolean",description:"Controla la visibilidad del loader.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},message:{control:"text",description:"Mensaje opcional a mostrar debajo del spinner.",table:{type:{summary:"string"},defaultValue:{summary:""}}}}},o={name:"Básico",render:e=>({components:{Loader:d},template:`
      <div class="h-[500px] w-full relative transform scale-100 border border-gray-200 rounded-lg overflow-hidden">
         <Loader v-bind="args" />
         <div class="p-4">
           <h3 class="text-lg font-bold mb-2">Contenido de Ejemplo</h3>
           <p>El loader se mostrará sobre este contenedor.</p>
         </div>
      </div>
    `,setup(){return{args:e}}}),args:{show:!0}},r={name:"Con Mensaje",render:e=>({components:{Loader:d},template:`
      <div class="h-[500px] w-full relative transform scale-100 border border-gray-200 rounded-lg overflow-hidden">
         <Loader v-bind="args" />
         <div class="p-4">
           <h3 class="text-lg font-bold mb-2">Contenido de Ejemplo</h3>
           <p>El loader se mostrará sobre este contenedor.</p>
         </div>
      </div>
    `,setup(){return{args:e}}}),args:{show:!0,message:"Estamos procesando tu solicitud. Esto puede tomar unos momentos. Tomate un café"}},n={name:"Interactivo",parameters:{docs:{description:{story:"Esta historia demuestra el uso interactivo del loader. Haz clic en el botón para simular una carga de 3 segundos."}}},render:e=>({components:{Loader:d},template:`
      <div class="h-[500px] w-full relative transform scale-100 border border-gray-200 rounded-lg overflow-hidden flex flex-col items-center justify-center gap-4">
         <Loader :show="showLoader" :message="loaderMessage" />
         
         <div class="z-0 flex flex-col gap-4 items-center">
           <p class="text-gray-600">Interactúa con los controles para probar el loader global.</p>
           <button @click="toggleLoader" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              {{ showLoader ? 'Ocultar Loader' : 'Mostrar Loader (3s)' }}
           </button>
         </div>
      </div>
    `,setup(){return f(()=>e.show,s=>{a.value=!!s}),f(()=>e.message,s=>{c.value=s||""}),{args:e,showLoader:a,loaderMessage:c,toggleLoader:()=>{a.value=!a.value,a.value&&(c.value=e.message||"Cargando...",setTimeout(()=>{a.value=!1},3e3))}}}}),args:{show:!1,message:"Cargando datos..."}},O=["Default","WithMessage","Interactive"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{o as Default,n as Interactive,r as WithMessage,O as __namedExportsOrder,G as default};
