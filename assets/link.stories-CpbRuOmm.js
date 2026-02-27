import{_ as e}from"./Link-DjLAaiAZ.js";import{G as n}from"./ConfigProvider-Br84NlF7.js";import"./vue.esm-bundler-C43JrhH2.js";import"./index-B1PxvDbZ.js";import"./install-CfJGiCvs.js";import"./index-D5bIuBCX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={title:"Basic/Link",component:e,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["primary","secondary","tertiary"],description:"Tipo de estilo del link. Define la apariencia visual y el color del link.",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tamaño del link. Afecta tanto al tamaño del texto como de los íconos.",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},underline:{control:{type:"boolean"},description:"Define si el link muestra un underline permanente.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Deshabilita el link, impidiendo la interacción del usuario y aplicando estilos visuales de deshabilitado.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},href:{control:{type:"text"},description:"URL a la que apunta el link, igual que el atributo href nativo de HTML.",table:{type:{summary:"string"},defaultValue:{summary:""}}},target:{control:{type:"select"},options:["_blank","_self","_parent","_top"],description:"Define cómo se abre el link, igual que el atributo target nativo de HTML.",table:{type:{summary:"string"},defaultValue:{summary:"_self"}}},iconLeft:{control:{type:"text"},description:'Nombre del ícono a mostrar a la izquierda del texto. Utiliza el formato "peso nombre-del-icono" (ej: "regular chevron-left").',table:{type:{summary:"string"},defaultValue:{summary:""}}},iconRight:{control:{type:"text"},description:'Nombre del ícono a mostrar a la derecha del texto. Utiliza el formato "peso nombre-del-icono" (ej: "regular chevron-right").',table:{type:{summary:"string"},defaultValue:{summary:""}}},status:{control:{type:"select"},options:["default","inline"],description:"Status del link: default (link independiente) o inline (para texto con enlaces).",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},onClick:{action:"clicked"}},parameters:{docs:{description:{component:`
# Link Component

El componente Link proporciona un link versátil y personalizable para la navegación y acciones:

## Características
- Tres tipos de link (primary, secondary, tertiary)
- Opción para mostrar underline permanente
- Tres tamaños disponibles: small (sm), medium (md) y large (lg)
- Soporte para íconos a la izquierda y derecha
- Estados de hover, active y disabled
- Compatible con atributos nativos de links HTML

## Instalación

\`\`\`bash
yarn add @flash-global66/g-link
\`\`\`

## Dependencias
Este componente requiere:
- @flash-global66/g-icon-font

## Importación de estilos SASS
Para que el componente funcione correctamente, es necesario importar los estilos SASS:

\`\`\`scss
@use "@flash-global66/g-link/link.styles.scss" as *;
\`\`\`

## Uso básico

\`\`\`html
<template>
  <!-- Link primario (por defecto) -->
  <g-link href="https://empresas.global66.com/">link primario</g-link>
  
  <!-- Link secundario -->
  <g-link 
    type="secondary"
    icon-right="regular chevron-right"
    href="https://empresas.global66.com/"
    target="_blank"
  >
    link secundario con icono a la derecha
  </g-link>
  
  <!-- Link terciario -->
  <div class="bg-primary-def p-xs">
    <g-link 
      type="tertiary"
      icon-left="regular chevron-left"
      href="https://empresas.global66.com/"
      target="_blank"
    >
      link terciario con icono a la izquierda
    </g-link>
  </div>
  
  <!-- Link con underline permanente -->
  <g-link underline href="https://empresas.global66.com/">
    link con underline
  </g-link>
</template>

<script setup>
import { GLink } from '@flash-global66/g-link';
<\/script>
\`\`\`
`}}},args:{type:"primary",size:"md",underline:!1,disabled:!1,href:"https://empresas.global66.com/",target:"_blank",iconLeft:void 0,iconRight:void 0}},r={name:"Default link",args:{default:"default link"},render:d=>({components:{GLink:e,GConfigProvider:n},setup(){return{args:d}},template:`
      <g-config-provider>
        <g-link v-bind="args">{{ args.default }}</g-link>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"link básico con estilo por defecto y configuración estándar."},source:{code:`
<g-link href="https://empresas.global66.com/">link por defecto</g-link>`,language:"html",type:"auto"}}}},i={name:"Links con íconos",render:()=>({components:{GLink:e,GConfigProvider:n},template:`
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Link with right icon</h3>
            <g-link href="https://empresas.global66.com/" icon-right="regular chevron-right">Next page</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Link with left icon</h3>
            <g-link href="https://empresas.global66.com/" icon-left="regular chevron-left">Previous page</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Link with both icons</h3>
            <g-link href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular arrow-up-right-from-square">External link</g-link>
          </div>
        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"links con íconos a la izquierda, derecha o ambos lados para mejorar el contexto visual."},source:{code:`
<g-link href="https://empresas.global66.com/" icon-right="regular chevron-right">
  link con ícono a la derecha
</g-link>

<g-link href="https://empresas.global66.com/" icon-left="regular chevron-left">
  link con ícono a la izquierda
</g-link>

<g-link href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular arrow-up-right-from-square">
  link con íconos en ambos lados
</g-link>`,language:"html",type:"auto"}}}},o={name:"Tamaños de link",render:()=>({components:{GLink:e,GConfigProvider:n},template:`
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Small</h3>
            <g-link size="sm" href="https://empresas.global66.com/" icon-right="regular chevron-right">Small link</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Medium (Default)</h3>
            <g-link size="md" href="https://empresas.global66.com/" icon-right="regular chevron-right">Medium link</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Large</h3>
            <g-link size="lg" href="https://empresas.global66.com/" icon-right="regular chevron-right">Large link</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Todos los tamaños con íconos</h3>
            <div class="flex flex-col gap-4 items-start">
              <g-link size="sm" href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular chevron-right">Small link</g-link>
              <g-link size="md" href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular chevron-right">Medium link</g-link>
              <g-link size="lg" href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular chevron-right">Large link</g-link>
            </div>
          </div>
        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"links en diferentes tamaños: pequeño (sm), mediano (md) y grande (lg)."},source:{code:`
<g-link size="sm" href="https://empresas.global66.com/">link pequeño</g-link>

<g-link size="md" href="https://empresas.global66.com/">link mediano</g-link>

<g-link size="lg" href="https://empresas.global66.com/">link grande</g-link>`,language:"html",type:"auto"}}}},l={name:"Tipos de link",render:()=>({components:{GLink:e,GConfigProvider:n},template:`
      <g-config-provider>
        <div class="flex flex-col space-y-4">
        
          <div>
            <h3 class="mb-2 font-semibold">Primary</h3>
            <g-link type="primary" href="https://empresas.global66.com/">Link primario</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Secondary</h3>
            <g-link type="secondary" href="https://empresas.global66.com/">Link secundario</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Tertiary</h3>
            <div class="bg-primary-def p-xs">
              <g-link type="tertiary" href="https://empresas.global66.com/">Link terciario</g-link>
            </div>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Primary con underline</h3>
            <g-link type="primary" underline href="https://empresas.global66.com/">Link primario con underline</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Secondary con underline</h3>
            <g-link type="secondary" underline href="https://empresas.global66.com/">Link secundario con underline</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Tertiary con underline</h3>
            <div class="bg-primary-def p-xs">
              <g-link type="tertiary" underline href="https://empresas.global66.com/">Link terciario con underline</g-link>
            </div>
          </div>

        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"Links con diferentes tipos de estilo: primary y secondary, con y sin underline."},source:{code:`
<g-link type="primary" href="https://empresas.global66.com/">Link primario</g-link>

<g-link type="secondary" href="https://empresas.global66.com/">Link secundario</g-link>

<g-link type="primary" underline href="https://empresas.global66.com/">Link primario con underline</g-link>

<g-link type="secondary" underline href="https://empresas.global66.com/">Link secundario con underline</g-link>`,language:"html",type:"auto"}}}},a={name:"Links con íconos y underline",render:()=>({components:{GLink:e,GConfigProvider:n},template:`
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Primary con íconos y underline</h3>
            <g-link 
              type="primary" 
              underline 
              icon-left="regular arrow-left" 
              icon-right="regular arrow-right" 
              href="https://empresas.global66.com/"
            >
              Link con íconos y underline
            </g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Primary solo con ícono izquierdo y underline</h3>
            <g-link 
              type="primary" 
              underline 
              icon-left="regular external-link" 
              href="https://empresas.global66.com/"
            >
              Link con ícono izquierdo y underline
            </g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Secondary con íconos y underline</h3>
            <g-link 
              type="secondary" 
              underline 
              icon-left="regular envelope" 
              icon-right="regular arrow-up-right-from-square" 
              href="https://empresas.global66.com/"
              target="_blank"
            >
              Link secundario con íconos y underline
            </g-link>
          </div>

          <div>
            <h3 class="mb-2 font-semibold">Tertiary con íconos y underline</h3>
            <div class="bg-primary-def p-xs">
              <g-link 
                type="tertiary" 
                underline 
                icon-left="regular envelope" 
                icon-right="regular arrow-up-right-from-square" 
                href="https://empresas.global66.com/"
                target="_blank"
              >
                Link terciario con íconos y underline
              </g-link>
            </div>
          </div>
        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"Links que combinan íconos y underline permanente, mostrando diferentes variaciones."},source:{code:`
<g-link 
  type="primary" 
  underline 
  icon-left="regular arrow-left" 
  icon-right="regular arrow-right" 
  href="https://empresas.global66.com/"
>
  Link con íconos y underline
</g-link>

<g-link 
  type="primary" 
  underline 
  icon-left="regular external-link" 
  href="https://empresas.global66.com/"
>
  Link con ícono izquierdo y underline
</g-link>

<g-link 
  type="secondary" 
  underline 
  icon-left="regular envelope" 
  icon-right="regular arrow-up-right-from-square" 
  href="https://empresas.global66.com/"
  target="_blank"
>
  Link secundario con íconos y underline
</g-link>`,language:"html",type:"auto"}}}},s={name:"Link deshabilitado",args:{disabled:!0,default:"link deshabilitado",iconRight:"regular chevron-right"},render:d=>({components:{GLink:e,GConfigProvider:n},setup(){return{args:d}},template:`
      <g-config-provider>
        <g-link v-bind="args">{{ args.default }}</g-link>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"links en estado deshabilitado que no permiten interacción."},source:{code:`
<g-link disabled href="https://empresas.global66.com/">link deshabilitado</g-link>

<g-link disabled icon-right="regular chevron-right" href="https://empresas.global66.com/">
  link deshabilitado con ícono
</g-link>`,language:"html",type:"auto"}}}},t={name:"Links externos",render:()=>({components:{GLink:e,GConfigProvider:n},template:`
      <g-config-provider>
        <div class="flex flex-col space-y-4 items-start">
          <g-link href="https://empresas.global66.com/" target="_blank" icon-right="regular arrow-up-right-from-square">
            Abre en nueva pestaña
          </g-link>
          <g-link href="https://empresas.global66.com/" target="_self">
            Abre en la misma pestaña
          </g-link>
        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"links que apuntan a sitios externos, con diferentes configuraciones del atributo target."},source:{code:`
<g-link href="https://empresas.global66.com/" target="_blank" icon-right="regular arrow-up-right-from-square">
  Abre en nueva pestaña
</g-link>

<g-link href="https://empresas.global66.com/" target="_self">
  Abre en la misma pestaña
</g-link>`,language:"html",type:"auto"}}}},c={name:"Estados del link",render:()=>({components:{GLink:e,GConfigProvider:n},template:`
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Default Status</h3>
            <g-link status="default" href="https://empresas.global66.com/">Link con status default</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Inline Status</h3>
            <p class="mb-2">Este es un ejemplo de un párrafo con un <g-link status="inline" href="https://empresas.global66.com/">link inline</g-link> que está integrado dentro del texto.</p>
          </div>
        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"Links con diferentes estados: default (enlaces independientes) e inline (enlaces dentro de texto)."},source:{code:`
<!-- Status: Default -->
<g-link status="default" href="https://empresas.global66.com/">Link con status default</g-link>

<!-- Status: Inline (para enlaces dentro de texto) -->
<p>Este es un ejemplo de un párrafo con un <g-link status="inline" href="https://empresas.global66.com/">link inline</g-link> que está integrado dentro del texto.</p>`,language:"html",type:"auto"}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Default link",
  args: {
    default: "default link"
  },
  render: args => ({
    components: {
      GLink,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-link v-bind="args">{{ args.default }}</g-link>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "link básico con estilo por defecto y configuración estándar."
      },
      source: {
        code: \`
<g-link href="https://empresas.global66.com/">link por defecto</g-link>\`,
        language: "html",
        type: "auto"
      }
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Links con íconos",
  render: () => ({
    components: {
      GLink,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Link with right icon</h3>
            <g-link href="https://empresas.global66.com/" icon-right="regular chevron-right">Next page</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Link with left icon</h3>
            <g-link href="https://empresas.global66.com/" icon-left="regular chevron-left">Previous page</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Link with both icons</h3>
            <g-link href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular arrow-up-right-from-square">External link</g-link>
          </div>
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "links con íconos a la izquierda, derecha o ambos lados para mejorar el contexto visual."
      },
      source: {
        code: \`
<g-link href="https://empresas.global66.com/" icon-right="regular chevron-right">
  link con ícono a la derecha
</g-link>

<g-link href="https://empresas.global66.com/" icon-left="regular chevron-left">
  link con ícono a la izquierda
</g-link>

<g-link href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular arrow-up-right-from-square">
  link con íconos en ambos lados
</g-link>\`,
        language: "html",
        type: "auto"
      }
    }
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Tamaños de link",
  render: () => ({
    components: {
      GLink,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Small</h3>
            <g-link size="sm" href="https://empresas.global66.com/" icon-right="regular chevron-right">Small link</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Medium (Default)</h3>
            <g-link size="md" href="https://empresas.global66.com/" icon-right="regular chevron-right">Medium link</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Large</h3>
            <g-link size="lg" href="https://empresas.global66.com/" icon-right="regular chevron-right">Large link</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Todos los tamaños con íconos</h3>
            <div class="flex flex-col gap-4 items-start">
              <g-link size="sm" href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular chevron-right">Small link</g-link>
              <g-link size="md" href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular chevron-right">Medium link</g-link>
              <g-link size="lg" href="https://empresas.global66.com/" icon-left="regular link" icon-right="regular chevron-right">Large link</g-link>
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "links en diferentes tamaños: pequeño (sm), mediano (md) y grande (lg)."
      },
      source: {
        code: \`
<g-link size="sm" href="https://empresas.global66.com/">link pequeño</g-link>

<g-link size="md" href="https://empresas.global66.com/">link mediano</g-link>

<g-link size="lg" href="https://empresas.global66.com/">link grande</g-link>\`,
        language: "html",
        type: "auto"
      }
    }
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Tipos de link",
  render: () => ({
    components: {
      GLink,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col space-y-4">
        
          <div>
            <h3 class="mb-2 font-semibold">Primary</h3>
            <g-link type="primary" href="https://empresas.global66.com/">Link primario</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Secondary</h3>
            <g-link type="secondary" href="https://empresas.global66.com/">Link secundario</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Tertiary</h3>
            <div class="bg-primary-def p-xs">
              <g-link type="tertiary" href="https://empresas.global66.com/">Link terciario</g-link>
            </div>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Primary con underline</h3>
            <g-link type="primary" underline href="https://empresas.global66.com/">Link primario con underline</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Secondary con underline</h3>
            <g-link type="secondary" underline href="https://empresas.global66.com/">Link secundario con underline</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Tertiary con underline</h3>
            <div class="bg-primary-def p-xs">
              <g-link type="tertiary" underline href="https://empresas.global66.com/">Link terciario con underline</g-link>
            </div>
          </div>

        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "Links con diferentes tipos de estilo: primary y secondary, con y sin underline."
      },
      source: {
        code: \`
<g-link type="primary" href="https://empresas.global66.com/">Link primario</g-link>

<g-link type="secondary" href="https://empresas.global66.com/">Link secundario</g-link>

<g-link type="primary" underline href="https://empresas.global66.com/">Link primario con underline</g-link>

<g-link type="secondary" underline href="https://empresas.global66.com/">Link secundario con underline</g-link>\`,
        language: "html",
        type: "auto"
      }
    }
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Links con íconos y underline",
  render: () => ({
    components: {
      GLink,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Primary con íconos y underline</h3>
            <g-link 
              type="primary" 
              underline 
              icon-left="regular arrow-left" 
              icon-right="regular arrow-right" 
              href="https://empresas.global66.com/"
            >
              Link con íconos y underline
            </g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Primary solo con ícono izquierdo y underline</h3>
            <g-link 
              type="primary" 
              underline 
              icon-left="regular external-link" 
              href="https://empresas.global66.com/"
            >
              Link con ícono izquierdo y underline
            </g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Secondary con íconos y underline</h3>
            <g-link 
              type="secondary" 
              underline 
              icon-left="regular envelope" 
              icon-right="regular arrow-up-right-from-square" 
              href="https://empresas.global66.com/"
              target="_blank"
            >
              Link secundario con íconos y underline
            </g-link>
          </div>

          <div>
            <h3 class="mb-2 font-semibold">Tertiary con íconos y underline</h3>
            <div class="bg-primary-def p-xs">
              <g-link 
                type="tertiary" 
                underline 
                icon-left="regular envelope" 
                icon-right="regular arrow-up-right-from-square" 
                href="https://empresas.global66.com/"
                target="_blank"
              >
                Link terciario con íconos y underline
              </g-link>
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "Links que combinan íconos y underline permanente, mostrando diferentes variaciones."
      },
      source: {
        code: \`
<g-link 
  type="primary" 
  underline 
  icon-left="regular arrow-left" 
  icon-right="regular arrow-right" 
  href="https://empresas.global66.com/"
>
  Link con íconos y underline
</g-link>

<g-link 
  type="primary" 
  underline 
  icon-left="regular external-link" 
  href="https://empresas.global66.com/"
>
  Link con ícono izquierdo y underline
</g-link>

<g-link 
  type="secondary" 
  underline 
  icon-left="regular envelope" 
  icon-right="regular arrow-up-right-from-square" 
  href="https://empresas.global66.com/"
  target="_blank"
>
  Link secundario con íconos y underline
</g-link>\`,
        language: "html",
        type: "auto"
      }
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Link deshabilitado",
  args: {
    disabled: true,
    default: "link deshabilitado",
    iconRight: "regular chevron-right"
  },
  render: args => ({
    components: {
      GLink,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-link v-bind="args">{{ args.default }}</g-link>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "links en estado deshabilitado que no permiten interacción."
      },
      source: {
        code: \`
<g-link disabled href="https://empresas.global66.com/">link deshabilitado</g-link>

<g-link disabled icon-right="regular chevron-right" href="https://empresas.global66.com/">
  link deshabilitado con ícono
</g-link>\`,
        language: "html",
        type: "auto"
      }
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Links externos",
  render: () => ({
    components: {
      GLink,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col space-y-4 items-start">
          <g-link href="https://empresas.global66.com/" target="_blank" icon-right="regular arrow-up-right-from-square">
            Abre en nueva pestaña
          </g-link>
          <g-link href="https://empresas.global66.com/" target="_self">
            Abre en la misma pestaña
          </g-link>
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "links que apuntan a sitios externos, con diferentes configuraciones del atributo target."
      },
      source: {
        code: \`
<g-link href="https://empresas.global66.com/" target="_blank" icon-right="regular arrow-up-right-from-square">
  Abre en nueva pestaña
</g-link>

<g-link href="https://empresas.global66.com/" target="_self">
  Abre en la misma pestaña
</g-link>\`,
        language: "html",
        type: "auto"
      }
    }
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Estados del link",
  render: () => ({
    components: {
      GLink,
      GConfigProvider
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col space-y-4">
          <div>
            <h3 class="mb-2 font-semibold">Default Status</h3>
            <g-link status="default" href="https://empresas.global66.com/">Link con status default</g-link>
          </div>
          
          <div>
            <h3 class="mb-2 font-semibold">Inline Status</h3>
            <p class="mb-2">Este es un ejemplo de un párrafo con un <g-link status="inline" href="https://empresas.global66.com/">link inline</g-link> que está integrado dentro del texto.</p>
          </div>
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "Links con diferentes estados: default (enlaces independientes) e inline (enlaces dentro de texto)."
      },
      source: {
        code: \`
<!-- Status: Default -->
<g-link status="default" href="https://empresas.global66.com/">Link con status default</g-link>

<!-- Status: Inline (para enlaces dentro de texto) -->
<p>Este es un ejemplo de un párrafo con un <g-link status="inline" href="https://empresas.global66.com/">link inline</g-link> que está integrado dentro del texto.</p>\`,
        language: "html",
        type: "auto"
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const y=["Default","WithIcons","Sizes","Types","IconsWithUnderline","DisabledState","ExternalLinks","LinkStatus"];export{r as Default,s as DisabledState,t as ExternalLinks,a as IconsWithUnderline,c as LinkStatus,o as Sizes,l as Types,i as WithIcons,y as __namedExportsOrder,b as default};
