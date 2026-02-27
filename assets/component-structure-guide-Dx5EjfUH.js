import{af as e,ag as c}from"./index-Cx0cs9Aw.js";import{u as t}from"./index-dSk5yaT9.js";import"./iframe-bySc_Cox.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CeQnsxAM.js";import"./index-DrFu-skq.js";function s(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Concept/Guide/Estructura de Componentes"}),`
`,e.jsx(n.h3,{id:"estructura-de-componentes-en-b2b-ui-framework",children:"Estructura de Componentes en B2B UI Framework"}),`
`,e.jsx(n.h2,{id:"introducción",children:"Introducción"}),`
`,e.jsx(n.p,{children:"Esta guía establece los lineamientos para crear la estructura correcta de componentes en nuestra biblioteca B2B UI Framework. Una estructura estandarizada facilita el mantenimiento, la escalabilidad y la consistencia del código."}),`
`,e.jsx(n.h2,{id:"estructura-general-de-un-componente",children:"Estructura General de un Componente"}),`
`,e.jsx(n.p,{children:"Cada componente debe seguir la siguiente estructura de carpetas y archivos:"}),`
`,e.jsx(n.h3,{id:"creación-de-carpeta",children:"Creación de Carpeta"}),`
`,e.jsxs(n.p,{children:["Crear una carpeta con el nombre del componente en kebab-case dentro del directorio ",e.jsx(n.code,{children:"components"}),"."]}),`
`,e.jsx(n.h3,{id:"creación-de-archivos",children:"Creación de Archivos"}),`
`,e.jsx(n.p,{children:"La estructura básica de un componente es la siguiente:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-txt",children:`components/ 
└── my-component/
  ├── index.ts # Punto de entrada y exportaciones 
  ├── package.json # Configuración de paquete
  └── src/
    ├── my-component.ts # Lógica principal del componente
    ├── type.ts # Tipos y interfaces del componente
    ├── styles.scss # Estilos específicos del componente 
    ├── my-component.vue # Plantilla Vue del componente 
    └── hooks.ts # Hooks personalizados para el componente
    ├── hooks/
    │   ├── hook1.ts
    │   ├── hook2.ts
    │   └── ...
    ├── tests/
    │   ├── unit/
    │   │   ├── my-component.spec.ts
    └── ...
`})}),`
`,e.jsx(n.h2,{id:"configuración-de-packagejson",children:"Configuración de package.json"}),`
`,e.jsxs(n.p,{children:["El archivo ",e.jsx(n.code,{children:"package.json"})," debe seguir esta estructura base:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "name": "@flash-global66/g-my-component",
  "author": "Global66",
  "version": "1.0.0", // inicia en la version 1.0.0
  "license": "MIT",
  "exports": {
    "./styles.scss": "./src/my-component.styles.scss", // estilos específicos del componente
    "./*": "./*", // exportaciones
    ".": "./index.ts" // punto de entrada
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com" // registro de npm
  },
  "repository": {
    "url": "https://github.com/Flash-Global66/global-design-system.git" // url del repositorio
  },
  "dependencies": {
    // Dependencias específicas del componente
  }
}
`})})]})}function u(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{u as default};
