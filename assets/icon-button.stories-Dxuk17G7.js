import{G as e}from"./index-Cw62VlXt.js";import{G as o}from"./ConfigProvider-Br84NlF7.js";import{g as u,a as p,b as l}from"./documentation-stories-DKOl0nGm.js";import"./vue.esm-bundler-C43JrhH2.js";import"./install-CfJGiCvs.js";import"./error-Cq9Fpw4b.js";import"./index-D5bIuBCX.js";import"./index-B1PxvDbZ.js";import"./index-DmfABaPz.js";import"./use-form-item-BgBoyOyI.js";import"./constants-Dnj8X3EN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CvPWi8JN.js";import"./index-DVmIhHla.js";import"./index-Bjxdgq_P.js";const b="0.3.0",d={"@flash-global66/g-icon-font":"^0.10.0","element-plus":"^2.9.0",vue:"^3.2.0"},P={title:"Basic/IconButton",component:e,parameters:{docs:{description:{component:`
El componente IconButton permite crear botones circulares que solo contienen un ícono. Es útil para acciones comunes donde el ícono es universalmente reconocido o cuando el espacio es limitado en la interfaz.

> Versión actual: ${b}

## Características
- Múltiples variantes visuales (grey, black, blue)
- Dos tamaños disponibles (medium, small)
- Opción para mostrar borde
- Compatible con enlaces (href)
- Efecto ripple al hacer clic

### Instalación

\`\`\`bash
yarn add @flash-global66/g-icon-button
\`\`\`

### Importación del componente
\`\`\`typescript
import { GIconButton } from '@flash-global66/g-icon-button'
import '@flash-global66/g-icon-button/styles.scss'
\`\`\`

## Dependencias

Este componente requiere:

${p(d)}

\`\`\`bash
# Dependencias global66
yarn add ${l(d)}

# Dependencias externas
yarn add ${l(d,!0)}
\`\`\`

### Ejemplo de uso

\`\`\`html
<script setup lang="ts">
import { GIconButton } from '@flash-global66/g-icon-button';
<\/script>

<template>
  <g-icon-button
    variant="grey"
    icon="solid check"
    size="medium"
  />
</template>
\`\`\`
`}}},argTypes:{variant:{control:"select",options:["grey","black","blue"],description:"Variante visual del icono botón",table:{type:{summary:"string"},category:"Principales"}},size:{control:"select",options:["medium","small"],description:"Tamaño del icono botón",table:{type:{summary:"string"},category:"Principales"}},border:{control:"boolean",description:"Muestra un borde alrededor del botón",table:{type:{summary:"boolean"},category:"Principales"}},rounded:{control:"boolean",description:"Hace que el borde sea completamente redondeado (requiere border: true)",table:{type:{summary:"boolean"},category:"Principales"}},icon:{description:"Icono a mostrar en el botón.",control:"select",options:u(),table:{type:{summary:"string"},defaultValue:{summary:"solid check"}}},autofocus:{control:"boolean",description:"El icono botón obtiene el foco automáticamente al cargar la página (HTML autofocus) \n\n⚠️ **Nota:** No se puede usar con el atributo `href`",table:{category:"Comportamiento",type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Deshabilita el icono botón",table:{category:"Comportamiento",type:{summary:"boolean"}}},download:{control:"text",description:"Especifica que el elemento se descargará cuando el usuario haga clic en el enlace",table:{defaultValue:{summary:"undefined"},category:"Enlaces",type:{summary:"string"}}},href:{control:"text",description:"Convierte el icono botón en un enlace",table:{category:"Enlaces",type:{summary:"string"}}},target:{control:"text",description:"Atributo target del enlace",table:{category:"Enlaces",type:{summary:"string"}}},type:{control:"select",options:["button","submit","reset"],description:"Especifica el tipo de botón (solo cuando no se usa href).",table:{type:{summary:"string"},defaultValue:{summary:"button"},category:"Principales"}},onClick:{description:"Evento para el clic en el botón.",table:{category:"Eventos"}},onMousedown:{description:"Evento para cuando se presiona el mouse sobre el botón.",table:{category:"Eventos"}}},args:{icon:"solid check",variant:"grey",size:"medium",disabled:!1,border:!1,type:"button"}},n={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico del componente IconButton. Desde los controles puedes probar todas las propiedades disponibles."},source:{code:`
<g-icon-button
  variant="grey"
  icon="solid check"
  size="medium"
/>
`,language:"html"}}},render:m=>({components:{GIconButton:e,GConfigProvider:o},setup(){return{args:m}},template:`
      <g-config-provider>
        <g-icon-button v-bind="args" />
      </g-config-provider>
    `})},i={name:"Variantes",parameters:{docs:{description:{story:"El componente tiene 3 variantes diferentes: grey, black y blue. Cada una establece un esquema de color apropiado para diferentes contextos."},source:{code:`
<g-icon-button variant="grey" icon="solid user" />
<g-icon-button variant="black" icon="solid envelope" />
<g-icon-button variant="blue" icon="solid question-circle" />
`,language:"html"}}},render:()=>({components:{GIconButton:e,GConfigProvider:o},template:`
      <g-config-provider>
        <div class="flex items-center space-x-md">
          <g-icon-button 
            variant="grey"
            icon="solid user"
          />
          <g-icon-button 
            variant="black"
            icon="solid envelope"
          />
          <g-icon-button 
            variant="blue"
            icon="solid question-circle"
          />
        </div>
      </g-config-provider>
    `})},r={name:"Tamaños",parameters:{docs:{description:{story:"El componente tiene dos tamaños disponibles: medium (mediano) y small (pequeño)."},source:{code:`
<g-icon-button size="medium" icon="solid paper-plane" />
<g-icon-button size="small" icon="solid paper-plane" />
`,language:"html"}}},render:()=>({components:{GIconButton:e,GConfigProvider:o},template:`
      <g-config-provider>
        <div class="flex items-center space-x-md">
          <g-icon-button 
            size="medium"
            icon="solid paper-plane"
          />
          <g-icon-button 
            size="small"
            icon="solid paper-plane"
          />
        </div>
      </g-config-provider>
    `})},a={name:"Con borde",parameters:{docs:{description:{story:"El componente puede mostrarse con un borde utilizando la propiedad border. Esta propiedad puede aplicarse a ambos tamaños (medium y small)."},source:{code:`
<!-- Tamaño medium con borde -->
<g-icon-button variant="grey" icon="solid lock" border size="medium" />
<g-icon-button variant="black" icon="solid lock" border size="medium" />
<g-icon-button variant="blue" icon="solid lock" border size="medium" />

<!-- Tamaño small con borde -->
<g-icon-button variant="grey" icon="solid lock" border size="small" />
<g-icon-button variant="black" icon="solid lock" border size="small" />
<g-icon-button variant="blue" icon="solid lock" border size="small" />
`,language:"html"}}},render:()=>({components:{GIconButton:e,GConfigProvider:o},template:`
      <g-config-provider>
        <div class="space-y-md">
          <div>
            <h3 class="text-sm font-medium mb-2">Tamaño medium con borde</h3>
            <div class="flex items-center space-x-md">
              <g-icon-button variant="grey" icon="solid lock" border size="medium" />
              <g-icon-button variant="black" icon="solid lock" border size="medium" />
              <g-icon-button variant="blue" icon="solid lock" border size="medium" />
            </div>
          </div>
          
          <div>
            <h3 class="text-sm font-medium mb-2">Tamaño small con borde</h3>
            <div class="flex items-center space-x-md">
              <g-icon-button variant="grey" icon="solid lock" border size="small" />
              <g-icon-button variant="black" icon="solid lock" border size="small" />
              <g-icon-button variant="blue" icon="solid lock" border size="small" />
            </div>
          </div>
        </div>
      </g-config-provider>
    `})},t={name:"Borde completamente redondeado",parameters:{docs:{description:{story:"Cuando se usan las propiedades border y rounded juntas, el componente muestra un borde completamente redondeado (rounded-full)."},source:{code:`
<!-- Tamaño medium con borde redondeado -->
<g-icon-button variant="grey" icon="solid lock" border rounded size="medium" />
<g-icon-button variant="black" icon="solid lock" border rounded size="medium" />
<g-icon-button variant="blue" icon="solid lock" border rounded size="medium" />

<!-- Tamaño small con borde redondeado -->
<g-icon-button variant="grey" icon="solid lock" border rounded size="small" />
<g-icon-button variant="black" icon="solid lock" border rounded size="small" />
<g-icon-button variant="blue" icon="solid lock" border rounded size="small" />
`,language:"html"}}},render:()=>({components:{GIconButton:e,GConfigProvider:o},template:`
      <g-config-provider>
        <div class="space-y-md">
          <div>
            <h3 class="text-sm font-medium mb-2">Tamaño medium con borde redondeado</h3>
            <div class="flex items-center space-x-md">
              <g-icon-button variant="grey" icon="solid lock" border rounded size="medium" />
              <g-icon-button variant="black" icon="solid lock" border rounded size="medium" />
              <g-icon-button variant="blue" icon="solid lock" border rounded size="medium" />
            </div>
          </div>
          
          <div>
            <h3 class="text-sm font-medium mb-2">Tamaño small con borde redondeado</h3>
            <div class="flex items-center space-x-md">
              <g-icon-button variant="grey" icon="solid lock" border rounded size="small" />
              <g-icon-button variant="black" icon="solid lock" border rounded size="small" />
              <g-icon-button variant="blue" icon="solid lock" border rounded size="small" />
            </div>
          </div>
        </div>
      </g-config-provider>
    `})},s={name:"Deshabilitado",parameters:{docs:{description:{story:"El componente puede deshabilitarse utilizando la propiedad disabled."},source:{code:`
<g-icon-button 
  variant="grey"
  icon="regular ban"
  disabled
/>
`,language:"html"}}},render:()=>({components:{GIconButton:e,GConfigProvider:o},template:`
      <g-config-provider>
        <div class="flex items-center space-x-md">
          <g-icon-button 
            variant="grey"
            icon="regular ban"
            disabled
          />
          <g-icon-button 
            variant="black"
            icon="solid user-slash"
            disabled
          />
          <g-icon-button 
            variant="blue"
            icon="solid times-circle"
            disabled
          />
        </div>
      </g-config-provider>
    `})},c={name:"Como enlace",parameters:{docs:{description:{story:"El componente puede funcionar como un enlace utilizando la propiedad href."},source:{code:`
<g-icon-button
  variant="blue"
  icon="solid arrow-up-from-bracket"
  href="https://www.example.com"
  target="_blank"
/>
`,language:"html"}}},render:()=>({components:{GIconButton:e,GConfigProvider:o},template:`
      <g-config-provider>
        <g-icon-button 
          variant="blue"
          icon="solid arrow-up-from-bracket"
          href="https://www.example.com"
          target="_blank"
        />
      </g-config-provider>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo básico del componente IconButton. Desde los controles puedes probar todas las propiedades disponibles.'
      },
      source: {
        code: \`
<g-icon-button
  variant="grey"
  icon="solid check"
  size="medium"
/>
\`,
        language: 'html'
      }
    }
  },
  render: args => ({
    components: {
      GIconButton,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-icon-button v-bind="args" />
      </g-config-provider>
    \`
  })
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Variantes',
  parameters: {
    docs: {
      description: {
        story: 'El componente tiene 3 variantes diferentes: grey, black y blue. Cada una establece un esquema de color apropiado para diferentes contextos.'
      },
      source: {
        code: \`
<g-icon-button variant="grey" icon="solid user" />
<g-icon-button variant="black" icon="solid envelope" />
<g-icon-button variant="blue" icon="solid question-circle" />
\`,
        language: 'html'
      }
    }
  },
  render: () => ({
    components: {
      GIconButton,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="flex items-center space-x-md">
          <g-icon-button 
            variant="grey"
            icon="solid user"
          />
          <g-icon-button 
            variant="black"
            icon="solid envelope"
          />
          <g-icon-button 
            variant="blue"
            icon="solid question-circle"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Tamaños',
  parameters: {
    docs: {
      description: {
        story: 'El componente tiene dos tamaños disponibles: medium (mediano) y small (pequeño).'
      },
      source: {
        code: \`
<g-icon-button size="medium" icon="solid paper-plane" />
<g-icon-button size="small" icon="solid paper-plane" />
\`,
        language: 'html'
      }
    }
  },
  render: () => ({
    components: {
      GIconButton,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="flex items-center space-x-md">
          <g-icon-button 
            size="medium"
            icon="solid paper-plane"
          />
          <g-icon-button 
            size="small"
            icon="solid paper-plane"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Con borde',
  parameters: {
    docs: {
      description: {
        story: 'El componente puede mostrarse con un borde utilizando la propiedad border. Esta propiedad puede aplicarse a ambos tamaños (medium y small).'
      },
      source: {
        code: \`
<!-- Tamaño medium con borde -->
<g-icon-button variant="grey" icon="solid lock" border size="medium" />
<g-icon-button variant="black" icon="solid lock" border size="medium" />
<g-icon-button variant="blue" icon="solid lock" border size="medium" />

<!-- Tamaño small con borde -->
<g-icon-button variant="grey" icon="solid lock" border size="small" />
<g-icon-button variant="black" icon="solid lock" border size="small" />
<g-icon-button variant="blue" icon="solid lock" border size="small" />
\`,
        language: 'html'
      }
    }
  },
  render: () => ({
    components: {
      GIconButton,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="space-y-md">
          <div>
            <h3 class="text-sm font-medium mb-2">Tamaño medium con borde</h3>
            <div class="flex items-center space-x-md">
              <g-icon-button variant="grey" icon="solid lock" border size="medium" />
              <g-icon-button variant="black" icon="solid lock" border size="medium" />
              <g-icon-button variant="blue" icon="solid lock" border size="medium" />
            </div>
          </div>
          
          <div>
            <h3 class="text-sm font-medium mb-2">Tamaño small con borde</h3>
            <div class="flex items-center space-x-md">
              <g-icon-button variant="grey" icon="solid lock" border size="small" />
              <g-icon-button variant="black" icon="solid lock" border size="small" />
              <g-icon-button variant="blue" icon="solid lock" border size="small" />
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Borde completamente redondeado',
  parameters: {
    docs: {
      description: {
        story: 'Cuando se usan las propiedades border y rounded juntas, el componente muestra un borde completamente redondeado (rounded-full).'
      },
      source: {
        code: \`
<!-- Tamaño medium con borde redondeado -->
<g-icon-button variant="grey" icon="solid lock" border rounded size="medium" />
<g-icon-button variant="black" icon="solid lock" border rounded size="medium" />
<g-icon-button variant="blue" icon="solid lock" border rounded size="medium" />

<!-- Tamaño small con borde redondeado -->
<g-icon-button variant="grey" icon="solid lock" border rounded size="small" />
<g-icon-button variant="black" icon="solid lock" border rounded size="small" />
<g-icon-button variant="blue" icon="solid lock" border rounded size="small" />
\`,
        language: 'html'
      }
    }
  },
  render: () => ({
    components: {
      GIconButton,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="space-y-md">
          <div>
            <h3 class="text-sm font-medium mb-2">Tamaño medium con borde redondeado</h3>
            <div class="flex items-center space-x-md">
              <g-icon-button variant="grey" icon="solid lock" border rounded size="medium" />
              <g-icon-button variant="black" icon="solid lock" border rounded size="medium" />
              <g-icon-button variant="blue" icon="solid lock" border rounded size="medium" />
            </div>
          </div>
          
          <div>
            <h3 class="text-sm font-medium mb-2">Tamaño small con borde redondeado</h3>
            <div class="flex items-center space-x-md">
              <g-icon-button variant="grey" icon="solid lock" border rounded size="small" />
              <g-icon-button variant="black" icon="solid lock" border rounded size="small" />
              <g-icon-button variant="blue" icon="solid lock" border rounded size="small" />
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Deshabilitado',
  parameters: {
    docs: {
      description: {
        story: 'El componente puede deshabilitarse utilizando la propiedad disabled.'
      },
      source: {
        code: \`
<g-icon-button 
  variant="grey"
  icon="regular ban"
  disabled
/>
\`,
        language: 'html'
      }
    }
  },
  render: () => ({
    components: {
      GIconButton,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="flex items-center space-x-md">
          <g-icon-button 
            variant="grey"
            icon="regular ban"
            disabled
          />
          <g-icon-button 
            variant="black"
            icon="solid user-slash"
            disabled
          />
          <g-icon-button 
            variant="blue"
            icon="solid times-circle"
            disabled
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Como enlace',
  parameters: {
    docs: {
      description: {
        story: 'El componente puede funcionar como un enlace utilizando la propiedad href.'
      },
      source: {
        code: \`
<g-icon-button
  variant="blue"
  icon="solid arrow-up-from-bracket"
  href="https://www.example.com"
  target="_blank"
/>
\`,
        language: 'html'
      }
    }
  },
  render: () => ({
    components: {
      GIconButton,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <g-icon-button 
          variant="blue"
          icon="solid arrow-up-from-bracket"
          href="https://www.example.com"
          target="_blank"
        />
      </g-config-provider>
    \`
  })
}`,...c.parameters?.docs?.source}}};const D=["Primary","Variants","Sizes","Border","RoundedBorder","Disabled","AsLink"];export{c as AsLink,a as Border,s as Disabled,n as Primary,t as RoundedBorder,r as Sizes,i as Variants,D as __namedExportsOrder,P as default};
