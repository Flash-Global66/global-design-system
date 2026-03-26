import{G as d}from"./ConfigProvider-Br84NlF7.js";import"./vue.esm-bundler-C43JrhH2.js";import"./index-D5bIuBCX.js";import"./install-CfJGiCvs.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const p={title:"Colores/Foundations",parameters:{docs:{description:{component:`
**Esta story muestra las paletas de color fundamentales del sistema de diseño. 🎨** Cada paleta incluye variaciones de tonalidad desde el nivel 25 (más claro) hasta 900 (más oscuro). Los colores están organizados en categorías semánticas para facilitar su uso en componentes y diseños.

### Lista de paletas y colores 🌈:

- Neutral - Grey: Grises neutros para fondos, bordes y texto.
- Primaria - Ever Blue: Azul principal para acciones primarias y branding.
- Secundaria - Night Blue: Azul oscuro para contrastes y elementos secundarios.
- Success - Green: Verdes para indicar éxito o confirmación.
- Error - Red: Rojos para errores o acciones destructivas.
- Warning - Yellow: Amarillos para advertencias y alertas.
- Info - Blue: Azules claros para información y mensajes neutrales.

### Uso recomendado 📝:
- Referencia visual para diseñadores y desarrolladores
- Documentación del sistema de colores
- Pruebas de consistencia de temas

>**¡Nota!**
Al hacer click en el color automáticamente se copia la variante de tailwind en el portapapeles. 📋
        `}}}},r=()=>({components:{GConfigProvider:d},template:`
  <g-config-provider>
    <div>
      <div class="not-prose grid grid-cols-[auto_minmax(0,_1fr)] items-center gap-4">
        <div
          class="col-start-2 grid grid-cols-11 justify-items-center gap-1.5 font-medium text-primary-txt text-3 *:rotate-180 *:[writing-mode:vertical-lr] sm:gap-4 sm:*:rotate-0 sm:*:[writing-mode:horizontal-tb]"
        >
          <div>25</div>
          <div>50</div>
          <div>100</div>
          <div>200</div>
          <div>300</div>
          <div>400</div>
          <div>500</div>
          <div>600</div>
          <div>700</div>
          <div>800</div>
          <div>900</div>
        </div>
        <p class="font-medium text-3 text-primary-txt capitalize sm:pr-1">Paleta Neutral - Grey</p>
        <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
          <div
            class="bg-grey-25 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-grey-50 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-grey-100 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-grey-200 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-grey-300 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-grey-400 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-grey-500 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-grey-600 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-grey-700 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-grey-800 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-grey-900 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
        </div>
        <p class="font-medium text-3 text-primary-txt capitalize sm:pr-1">Paleta Primaria - Ever Blue</p>
        <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
          <div
            class="bg-[#F5F7FF] aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          ></div>
          <div
            class="bg-everBlue-50 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-everBlue-100 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-everBlue-200 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-everBlue-300 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-everBlue-400 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-everBlue-500 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-everBlue-600 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-everBlue-700 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-everBlue-800 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-everBlue-900 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
        </div>
        <p class="font-medium text-3 text-primary-txt capitalize sm:pr-1">Paleta Secundaria - Night Blue</p>
        <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
          <div
            class="bg-[#F5F7FF] aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          ></div>
          <div
            class="bg-nightBlue-50 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-nightBlue-100 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-nightBlue-200 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-nightBlue-300 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-nightBlue-400 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-nightBlue-500 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-nightBlue-600 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-nightBlue-700 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-nightBlue-800 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-nightBlue-900 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
        </div>
        <p class="font-medium text-3 text-primary-txt capitalize sm:pr-1">Paleta Success - Green</p>
        <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
          <div
            class="bg-[#F5F7FF] aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          ></div>
          <div
            class="bg-green-50 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-green-100 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-green-200 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-green-300 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-green-400 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-green-500 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-green-600 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-green-700 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-green-800 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-green-900 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
        </div>
        <p class="font-medium text-3 text-primary-txt capitalize sm:pr-1">Paleta Error - Red</p>
        <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
          <div
            class="bg-[#F5F7FF] aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          ></div>
          <div
            class="bg-red-50 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-red-100 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-red-200 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-red-300 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-red-400 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-red-500 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-red-600 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-red-700 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-red-800 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-red-900 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
        </div>
        <p class="font-medium text-3 text-primary-txt capitalize sm:pr-1">Paleta Warning - Yellow</p>
        <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
          <div
            class="bg-[#F5F7FF] aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          ></div>
          <div
            class="bg-yellow-50 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-yellow-100 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-yellow-200 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-yellow-300 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-yellow-400 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-yellow-500 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-yellow-600 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-yellow-700 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-yellow-800 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-yellow-900 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
        </div>
        <p class="font-medium text-3 text-primary-txt capitalize sm:pr-1">Paleta Info - blue</p>
        <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
          <div
            class="bg-[#F5F7FF] aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          ></div>
          <div
            class="bg-blue-50 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-blue-100 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-blue-200 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-blue-300 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-blue-400 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-blue-500 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-blue-600 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-blue-700 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-blue-800 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-blue-900 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
        </div>
      </div>
    </div>
  </g-config-provider>
  `,setup(){return{handleColorClick:async i=>{const l=[...i.target.classList].find(e=>e.startsWith("bg-")&&!e.startsWith("bg-[#")).split("-").slice(1).join("-");try{await navigator.clipboard.writeText(l)}catch(e){console.error("Error al copiar:",e)}}}}}),o=r.bind({});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => ({
  components: {
    GConfigProvider
  },
  template: \`
  <g-config-provider>
    <div>
      <div class="not-prose grid grid-cols-[auto_minmax(0,_1fr)] items-center gap-4">
        <div
          class="col-start-2 grid grid-cols-11 justify-items-center gap-1.5 font-medium text-primary-txt text-3 *:rotate-180 *:[writing-mode:vertical-lr] sm:gap-4 sm:*:rotate-0 sm:*:[writing-mode:horizontal-tb]"
        >
          <div>25</div>
          <div>50</div>
          <div>100</div>
          <div>200</div>
          <div>300</div>
          <div>400</div>
          <div>500</div>
          <div>600</div>
          <div>700</div>
          <div>800</div>
          <div>900</div>
        </div>
        <p class="font-medium text-3 text-primary-txt capitalize sm:pr-1">Paleta Neutral - Grey</p>
        <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
          <div
            class="bg-grey-25 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-grey-50 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-grey-100 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-grey-200 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-grey-300 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-grey-400 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-grey-500 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-grey-600 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-grey-700 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-grey-800 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-grey-900 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
        </div>
        <p class="font-medium text-3 text-primary-txt capitalize sm:pr-1">Paleta Primaria - Ever Blue</p>
        <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
          <div
            class="bg-[#F5F7FF] aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          ></div>
          <div
            class="bg-everBlue-50 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-everBlue-100 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-everBlue-200 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-everBlue-300 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-everBlue-400 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-everBlue-500 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-everBlue-600 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-everBlue-700 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-everBlue-800 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-everBlue-900 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
        </div>
        <p class="font-medium text-3 text-primary-txt capitalize sm:pr-1">Paleta Secundaria - Night Blue</p>
        <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
          <div
            class="bg-[#F5F7FF] aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          ></div>
          <div
            class="bg-nightBlue-50 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-nightBlue-100 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-nightBlue-200 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-nightBlue-300 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-nightBlue-400 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-nightBlue-500 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-nightBlue-600 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-nightBlue-700 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-nightBlue-800 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-nightBlue-900 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
        </div>
        <p class="font-medium text-3 text-primary-txt capitalize sm:pr-1">Paleta Success - Green</p>
        <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
          <div
            class="bg-[#F5F7FF] aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          ></div>
          <div
            class="bg-green-50 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-green-100 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-green-200 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-green-300 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-green-400 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-green-500 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-green-600 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-green-700 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-green-800 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-green-900 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
        </div>
        <p class="font-medium text-3 text-primary-txt capitalize sm:pr-1">Paleta Error - Red</p>
        <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
          <div
            class="bg-[#F5F7FF] aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          ></div>
          <div
            class="bg-red-50 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-red-100 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-red-200 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-red-300 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-red-400 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-red-500 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-red-600 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-red-700 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-red-800 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-red-900 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
        </div>
        <p class="font-medium text-3 text-primary-txt capitalize sm:pr-1">Paleta Warning - Yellow</p>
        <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
          <div
            class="bg-[#F5F7FF] aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          ></div>
          <div
            class="bg-yellow-50 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-yellow-100 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-yellow-200 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-yellow-300 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-yellow-400 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-yellow-500 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-yellow-600 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-yellow-700 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-yellow-800 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-yellow-900 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
        </div>
        <p class="font-medium text-3 text-primary-txt capitalize sm:pr-1">Paleta Info - blue</p>
        <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
          <div
            class="bg-[#F5F7FF] aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          ></div>
          <div
            class="bg-blue-50 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-blue-100 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-blue-200 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-blue-300 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-blue-400 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-blue-500 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-blue-600 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-blue-700 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-blue-800 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
          <div
            class="bg-blue-900 aspect-square rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10 cursor-pointer"
            @click="handleColorClick"
          ></div>
        </div>
      </div>
    </div>
  </g-config-provider>
  \`,
  setup() {
    const handleColorClick = async (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Extraer el color de las clases (ej: bg-grey-500)
      const colorClass = [...target.classList].find(className => className.startsWith('bg-') && !className.startsWith('bg-[#'))!;

      // Obtener el valor final del color
      const colorToCopy = colorClass.split('-').slice(1).join('-');
      try {
        await navigator.clipboard.writeText(colorToCopy);
      } catch (err) {
        console.error('Error al copiar:', err);
      }
    };
    return {
      handleColorClick
    };
  }
})`,...o.parameters?.docs?.source}}};const v=["Default"];export{o as Default,v as __namedExportsOrder,p as default};
