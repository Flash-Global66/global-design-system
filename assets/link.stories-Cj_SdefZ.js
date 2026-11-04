import{r as m}from"./iframe-DuQGJgeK.js";import{O as e}from"./index-3dW0Pyt4.js";import{G as n}from"./ConfigProvider-DLTKJczo.js";import"./preload-helper-Dch09mLN.js";import"./index-KU-LIuJg.js";import"./install.util-cBz1HN_T.js";import"./useEmptyValues-2wdCfCck.js";import"./event.constant-LtAI3-H4.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const E={title:"Basic/Link",component:e,tags:["autodocs"],argTypes:{type:{name:"type",control:{type:"select"},options:["primary","secondary","tertiary"],description:"Tipo de estilo del link. Define la apariencia visual y el color del link.",table:{category:"Props (Padre)",type:{summary:"'primary' | 'secondary' | 'tertiary'"},defaultValue:{summary:"primary"}}},size:{name:"size",control:{type:"select"},options:["sm","md","lg"],description:"Tamaño del link. Afecta tanto al tamaño del texto como de los íconos.",table:{category:"Props (Padre)",type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"md"}}},underline:{name:"underline",control:{type:"boolean"},description:"Define si el link muestra un underline permanente.",table:{category:"Props (Padre)",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{name:"disabled",control:{type:"boolean"},description:'Deshabilita el link: aplica estilos de deshabilitado, expone `aria-disabled="true"` y lo saca del orden de Tab.',table:{category:"Props (Padre)",type:{summary:"boolean"},defaultValue:{summary:"false"}}},href:{name:"href",control:{type:"text"},description:'URL a la que apunta el link, igual que el atributo href nativo de HTML. Sin `href` el link se expone como botón (`role="button"`): se alcanza con Tab y se activa con Enter o Espacio.',table:{category:"Props (Padre)",type:{summary:"string"},defaultValue:{summary:"''"}}},target:{name:"target",control:{type:"select"},options:["_blank","_self","_parent","_top"],description:"Define cómo se abre el link, igual que el atributo target nativo de HTML.",table:{category:"Props (Padre)",type:{summary:"'_blank' | '_parent' | '_self' | '_top' | string"},defaultValue:{summary:"_self"}}},iconLeft:{name:"icon-left",control:{type:"text"},description:'Nombre del ícono a mostrar a la izquierda del texto. Utiliza el formato "peso nombre-del-icono" (ej: "regular chevron-left").',table:{category:"Props (Padre)",type:{summary:"IconString"},defaultValue:{summary:"''"}}},iconRight:{name:"icon-right",control:{type:"text"},description:'Nombre del ícono a mostrar a la derecha del texto. Utiliza el formato "peso nombre-del-icono" (ej: "regular chevron-right").',table:{category:"Props (Padre)",type:{summary:"IconString"},defaultValue:{summary:"''"}}},status:{name:"status",control:{type:"select"},options:["default","inline"],description:"Status del link: default (link independiente) o inline (para texto con enlaces).",table:{category:"Props (Padre)",type:{summary:"'default' | 'inline'"},defaultValue:{summary:"default"}}},onClick:{name:"click",action:"clicked",description:"Evento que se dispara al hacer click en el link. Sin `href` también se dispara con Enter, Enter del teclado numérico o Espacio. Con `disabled` no se dispara.",control:!1,table:{category:"Eventos (Padre)",type:{summary:"Function",detail:"(evt: MouseEvent) => void"}}},default:{name:"default",description:"Slot con el contenido (texto) del link.",control:!1,table:{category:"Slots (Padre)",type:{summary:"Slot"}}},icon:{name:"icon",description:"Slot para un ícono personalizado, que se renderiza después del ícono derecho.",control:!1,table:{category:"Slots (Padre)",type:{summary:"Slot"}}}},parameters:{docs:{description:{component:`
# Link Component

El componente Link proporciona un link versátil y personalizable para la navegación y acciones:

## Características
- Tres tipos de link (primary, secondary, tertiary)
- Opción para mostrar underline permanente
- Tres tamaños disponibles: small (sm), medium (md) y large (lg)
- Soporte para íconos a la izquierda y derecha
- Estados de hover, active y disabled
- Sin \`href\` se expone como botón operable con teclado (Tab, Enter y Espacio)
- Anillo de foco visible al navegar con teclado
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
@use "@flash-global66/g-link/styles.scss" as *;
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
`}}},args:{type:"primary",size:"md",underline:!1,disabled:!1,href:"https://empresas.global66.com/",target:"_blank",iconLeft:void 0,iconRight:void 0}},r={name:"Default link",args:{default:"default link"},render:i=>({components:{GLink:e,GConfigProvider:n},setup(){return{args:i}},template:`
      <g-config-provider>
        <g-link v-bind="args">{{ args.default }}</g-link>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"link básico con estilo por defecto y configuración estándar."},source:{code:`
<g-link href="https://empresas.global66.com/">link por defecto</g-link>`,language:"html",type:"auto"}}}},o={name:"Links con íconos",render:()=>({components:{GLink:e,GConfigProvider:n},template:`
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
</g-link>`,language:"html",type:"auto"}}}},a={name:"Tamaños de link",render:()=>({components:{GLink:e,GConfigProvider:n},template:`
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

<g-link type="secondary" underline href="https://empresas.global66.com/">Link secundario con underline</g-link>`,language:"html",type:"auto"}}}},s={name:"Links con íconos y underline",render:()=>({components:{GLink:e,GConfigProvider:n},template:`
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
</g-link>`,language:"html",type:"auto"}}}},t={name:"Link deshabilitado",args:{disabled:!0,default:"link deshabilitado",iconRight:"regular chevron-right"},render:i=>({components:{GLink:e,GConfigProvider:n},setup(){return{args:i}},template:`
      <g-config-provider>
        <g-link v-bind="args">{{ args.default }}</g-link>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"links en estado deshabilitado que no permiten interacción."},source:{code:`
<g-link disabled href="https://empresas.global66.com/">link deshabilitado</g-link>

<g-link disabled icon-right="regular chevron-right" href="https://empresas.global66.com/">
  link deshabilitado con ícono
</g-link>`,language:"html",type:"auto"}}}},c={name:"Links externos",render:()=>({components:{GLink:e,GConfigProvider:n},template:`
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
</g-link>`,language:"html",type:"auto"}}}},d={name:"Estados del link",render:()=>({components:{GLink:e,GConfigProvider:n},template:`
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
<p>Este es un ejemplo de un párrafo con un <g-link status="inline" href="https://empresas.global66.com/">link inline</g-link> que está integrado dentro del texto.</p>`,language:"html",type:"auto"}}}},g={name:"Sin href (botón con teclado)",render:()=>({components:{GLink:e,GConfigProvider:n},setup(){const i=m(0);function p(){i.value+=1}return{clickCount:i,handleLinkClick:p}},template:`
      <g-config-provider>
        <div class="flex flex-col space-y-4 items-start">
          <div>
            <h3 class="mb-2 font-semibold">Sin href</h3>
            <g-link @click="handleLinkClick">Activar con Enter o Espacio</g-link>
            <p class="mt-2">Activaciones: {{ clickCount }}</p>
          </div>

          <div>
            <h3 class="mb-2 font-semibold">Sin href y disabled</h3>
            <g-link disabled @click="handleLinkClick">Link deshabilitado, fuera del Tab</g-link>
          </div>
        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:'Sin `href` el link se comporta como un botón (`role="button"`): se alcanza con Tab y se activa con Enter, Enter del teclado numérico o Espacio, además del click. Con `disabled` expone `aria-disabled="true"`, queda fuera del orden de Tab y no dispara `click`. Al navegar con teclado todo link muestra un anillo de foco.'},source:{code:`
<g-link @click="handleClick">Activar con Enter o Espacio</g-link>

<g-link disabled @click="handleClick">Link deshabilitado, fuera del Tab</g-link>`,language:"html",type:"auto"}}}},S=["Default","WithIcons","Sizes","Types","IconsWithUnderline","DisabledState","ExternalLinks","LinkStatus","WithoutHref"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Default link',
  args: {
    default: 'default link'
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
        story: 'link básico con estilo por defecto y configuración estándar.'
      },
      source: {
        code: \`
<g-link href="https://empresas.global66.com/">link por defecto</g-link>\`,
        language: 'html',
        type: 'auto'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Links con íconos',
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
        story: 'links con íconos a la izquierda, derecha o ambos lados para mejorar el contexto visual.'
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
        language: 'html',
        type: 'auto'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Tamaños de link',
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
        story: 'links en diferentes tamaños: pequeño (sm), mediano (md) y grande (lg).'
      },
      source: {
        code: \`
<g-link size="sm" href="https://empresas.global66.com/">link pequeño</g-link>

<g-link size="md" href="https://empresas.global66.com/">link mediano</g-link>

<g-link size="lg" href="https://empresas.global66.com/">link grande</g-link>\`,
        language: 'html',
        type: 'auto'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Tipos de link',
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
        story: 'Links con diferentes tipos de estilo: primary y secondary, con y sin underline.'
      },
      source: {
        code: \`
<g-link type="primary" href="https://empresas.global66.com/">Link primario</g-link>

<g-link type="secondary" href="https://empresas.global66.com/">Link secundario</g-link>

<g-link type="primary" underline href="https://empresas.global66.com/">Link primario con underline</g-link>

<g-link type="secondary" underline href="https://empresas.global66.com/">Link secundario con underline</g-link>\`,
        language: 'html',
        type: 'auto'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Links con íconos y underline',
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
        story: 'Links que combinan íconos y underline permanente, mostrando diferentes variaciones.'
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
        language: 'html',
        type: 'auto'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Link deshabilitado',
  args: {
    disabled: true,
    default: 'link deshabilitado',
    iconRight: 'regular chevron-right'
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
        story: 'links en estado deshabilitado que no permiten interacción.'
      },
      source: {
        code: \`
<g-link disabled href="https://empresas.global66.com/">link deshabilitado</g-link>

<g-link disabled icon-right="regular chevron-right" href="https://empresas.global66.com/">
  link deshabilitado con ícono
</g-link>\`,
        language: 'html',
        type: 'auto'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Links externos',
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
        story: 'links que apuntan a sitios externos, con diferentes configuraciones del atributo target.'
      },
      source: {
        code: \`
<g-link href="https://empresas.global66.com/" target="_blank" icon-right="regular arrow-up-right-from-square">
  Abre en nueva pestaña
</g-link>

<g-link href="https://empresas.global66.com/" target="_self">
  Abre en la misma pestaña
</g-link>\`,
        language: 'html',
        type: 'auto'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Estados del link',
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
        story: 'Links con diferentes estados: default (enlaces independientes) e inline (enlaces dentro de texto).'
      },
      source: {
        code: \`
<!-- Status: Default -->
<g-link status="default" href="https://empresas.global66.com/">Link con status default</g-link>

<!-- Status: Inline (para enlaces dentro de texto) -->
<p>Este es un ejemplo de un párrafo con un <g-link status="inline" href="https://empresas.global66.com/">link inline</g-link> que está integrado dentro del texto.</p>\`,
        language: 'html',
        type: 'auto'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Sin href (botón con teclado)',
  render: () => ({
    components: {
      GLink,
      GConfigProvider
    },
    setup() {
      const clickCount = ref(0);
      function handleLinkClick() {
        clickCount.value += 1;
      }
      return {
        clickCount,
        handleLinkClick
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col space-y-4 items-start">
          <div>
            <h3 class="mb-2 font-semibold">Sin href</h3>
            <g-link @click="handleLinkClick">Activar con Enter o Espacio</g-link>
            <p class="mt-2">Activaciones: {{ clickCount }}</p>
          </div>

          <div>
            <h3 class="mb-2 font-semibold">Sin href y disabled</h3>
            <g-link disabled @click="handleLinkClick">Link deshabilitado, fuera del Tab</g-link>
          </div>
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Sin \`href\` el link se comporta como un botón (\`role="button"\`): se alcanza con Tab y se activa con Enter, Enter del teclado numérico o Espacio, además del click. Con \`disabled\` expone \`aria-disabled="true"\`, queda fuera del orden de Tab y no dispara \`click\`. Al navegar con teclado todo link muestra un anillo de foco.'
      },
      source: {
        code: \`
<g-link @click="handleClick">Activar con Enter o Espacio</g-link>

<g-link disabled @click="handleClick">Link deshabilitado, fuera del Tab</g-link>\`,
        language: 'html',
        type: 'auto'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};export{r as Default,t as DisabledState,c as ExternalLinks,s as IconsWithUnderline,d as LinkStatus,a as Sizes,l as Types,o as WithIcons,g as WithoutHref,S as __namedExportsOrder,E as default};
