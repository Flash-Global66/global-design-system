import { StoryFn, Meta } from '@storybook/vue3'
import { GConfigProvider } from '../components/config-provider'

export default {
  title: 'Colores/Semantic',
  parameters: {
    docs: {
      description: {
        component: `
**Esta guía detalla los colores semánticos organizados por categorías funcionales. 🌈** Cada color tiene un propósito específico en la interfaz y sigue convenciones de nombrado para facilitar su uso.

### Categorías Principales ✨

<br />

<div className="grid grid-cols-2 gap-6">

<div>
###  1️⃣ Colores Primarios
- **Base**: Acciones principales, branding y elementos clave.
  - primary: Color base para botones primarios y elementos destacados.
  - primaryHover: Estado hover de elementos primarios.
  - primaryPress: Estado activo/presionado.
  - primaryDisabled: Elementos primarios deshabilitados.
</div>

<div>
### 2️⃣ Colores de Feedback
- **Estados interactivos**: Comunican resultado de acciones.
  - success: Confirmación de operaciones exitosas.
  - warning: Alertas y advertencias.
  - error: Errores críticos o acciones destructivas.
  - info: Mensajes informativos neutrales.
</div>

<div>
### 3️⃣ Colores de Fondo
- **Contextos visuales**: Fondos para componentes y secciones.
  - primaryBg: Fondo principal.
  - secDefaultBg: Fondo secundario por defecto.
  - secPressBg: Fondo secundario en estado presionado.
  - inverseBg: Fondo invertido (contraste alto).
  - successBg: Fondo para estados exitosos.
  - errorBg: Fondo para errores.
  - warningBg: Fondo para advertencias.
  - infoBg: Fondo para información.
</div>

<div>
### 4️⃣ Colores de Texto
- **Jerarquía tipográfica**: Define importancia del contenido.
  - primary: Texto principal (ej: títulos).
  - secondary: Texto secundario (ej: subtítulos).
  - terciary: Texto terciario (detalles menos relevantes).
  - disabled: Texto deshabilitado.
  - inverse: Texto sobre fondos oscuros.
  - Estados: success, error, warning, info (para textos contextuales).
</div>

<div>
### 5️⃣ Colores de Iconos
- **Consistencia visual**: Acompañan al texto y acciones.
  - primary: Iconos principales.
  - secondary: Iconos secundarios.
  - terciary: Iconos de baja prioridad.
  - disabled: Iconos inactivos.
  - inverse: Iconos sobre fondos oscuros.
  - Estados: success, error, warning, info (iconos contextuales).
</div>

<div>
### 6️⃣ Colores de Bordes
- **Delimitación visual**: Separan componentes y secciones.
  - primary: Bordes principales.
  - secondary: Bordes secundarios.
  - disabled: Bordes deshabilitados.
  - inverse: Bordes sobre fondos oscuros.
  - Estados: success, warning, error, info (bordes contextuales).
</div>

</div>

> **Nota**: Click en cualquier color copia su nombre semántico al portapapeles. 📋
        `
      }
    }
  }
} as Meta

const Template: StoryFn = () => ({
  components: { GConfigProvider },
  template: `
  <g-config-provider>
    <div class="flex flex-row w-full flex-wrap justify-center items-center gap-8">
      <div class="w-[100%] w- rounded-md bg-transparent border-2 border-primary-bd p-4 h-32 relative">
        <div class="space-y-2">
          <div class="text-primary-txt flex flex-col gap-3">
            <h3 class="text-lg font-medium">Colores Primary</h3>
          </div>
          <div class="flex gap-0 absolute inset-x-0 bottom-0">
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">primary-def</span>
              <div class="w-full h-full rounded-bl-md bg-[var(--color-primary)] cursor-pointer" @click="() => handleColorClick('bg-primary-def text-primary-txt')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">primary-def-hover</span>
              <div class="w-full h-full bg-[var(--color-primary-hover)] cursor-pointer" @click="() => handleColorClick('bg-primary-def-hover text-primary-def-hover')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">primary-def-press</span>
              <div class="pt-1 w-full h-full bg-[var(--color-primary-press)] cursor-pointer" @click="() => handleColorClick('bg-primary-def-press text-primary-def-press')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">primary-def-disabled</span>
              <div class="w-full h-full rounded-br-md bg-[var(--color-primary-disabled)] cursor-pointer" @click="() => handleColorClick('bg-primary-def-disabled text-primary-def-disabled')"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-[100%] w- rounded-md bg-transparent border-2 border-primary-bd p-4 h-32 relative">
        <div class="space-y-2">
          <div class="text-primary-txt flex flex-col gap-3">
            <h3 class="text-lg font-medium">Colores Feedback</h3>
          </div>
          <div class="flex gap-0 absolute inset-x-0 bottom-0">
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">success</span>
              <div class="w-full h-full rounded-bl-md bg-[var(--color-success)] cursor-pointer" @click="() => handleColorClick('bg-success-def text-success-txt')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">warning</span>
              <div class="w-full h-full bg-[var(--color-warning)] cursor-pointer" @click="() => handleColorClick('bg-warning-def text-warning-def')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">error</span>
              <div class="w-full h-full bg-[var(--color-error)] cursor-pointer" @click="() => handleColorClick('bg-error-def text-error-def')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">info</span>
              <div class="w-full h-full rounded-br-md bg-[var(--color-info)] cursor-pointer" @click="() => handleColorClick('bg-info-def text-info-def')"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-[100%] w- rounded-md bg-transparent border-2 border-primary-bd p-4 h-32 relative">
        <div class="space-y-2">
          <div class="text-primary-txt flex flex-col gap-3">
            <h3 class="text-lg font-medium">Colores Background</h3>
          </div>
          <div class="flex gap-0 absolute inset-x-0 bottom-0">
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">primary-bg</span>
              <div class="w-full h-full rounded-bl-md bg-primary-bg cursor-pointer" @click="() => handleColorClick('bg-primary-bg')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">sec-def-bg</span>
              <div class="w-full h-full bg-sec-def-bg cursor-pointer" @click="() => handleColorClick('bg-sec-def-bg')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">sec-hover-bg</span>
              <div class="w-full h-full bg-sec-hover-bg cursor-pointer" @click="() => handleColorClick('bg-sec-hover-bg')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">sec-press-bg</span>
              <div class="w-full h-full bg-sec-press-bg cursor-pointer" @click="() => handleColorClick('bg-sec-press-bg')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">disab-lt-bg</span>
              <div class="w-full h-full bg-disab-lt-bg cursor-pointer" @click="() => handleColorClick('bg-disab-lt-bg')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">inverse-bg</span>
              <div class="w-full h-full bg-inverse-bg cursor-pointer" @click="() => handleColorClick('bg-inverse-bg')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">success-bg</span>
              <div class="w-full h-full bg-success-bg cursor-pointer" @click="() => handleColorClick('bg-success-bg')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">error-bg</span>
              <div class="w-full h-full bg-error-bg cursor-pointer" @click="() => handleColorClick('bg-error-bg')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">warning-bg</span>
              <div class="w-full h-full bg-warning-bg cursor-pointer" @click="() => handleColorClick('bg-warning-bg')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">info-bg</span>
              <div class="w-full h-full rounded-br-md bg-info-bg cursor-pointer" @click="() => handleColorClick('bg-info-bg')"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-[100%] w- rounded-md bg-transparent border-2 border-primary-bd p-4 h-32 relative">
        <div class="space-y-2">
          <div class="text-primary-txt flex flex-col gap-3">
            <h3 class="text-lg font-medium">Colores Text</h3>
          </div>
          <div class="flex gap-0 absolute inset-x-0 bottom-0">
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">primary-txt</span>
              <div class="w-full h-full rounded-bl-md bg-[var(--color-txt-primary)] cursor-pointer" @click="() => handleColorClick('text-primary-txt')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">secondary-txt</span>
              <div class="w-full h-full bg-[var(--color-txt-secondary)] cursor-pointer" @click="() => handleColorClick('text-secondary-txt')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">terciary-txt</span>
              <div class="w-full h-full bg-[var(--color-txt-terciary)] cursor-pointer" @click="() => handleColorClick('text-terciary-txt')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">disabled-txt</span>
              <div class="w-full h-full bg-[var(--color-txt-disabled)] cursor-pointer" @click="() => handleColorClick('text-disabled-txt')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">disab-lt-txt</span>
              <div class="w-full h-full bg-[var(--color-txt-disabled-light)] cursor-pointer" @click="() => handleColorClick('text-disab-lt-txt')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">inverse-txt</span>
              <div class="w-full h-full bg-[var(--color-txt-inverse)] cursor-pointer" @click="() => handleColorClick('text-inverse-txt')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">success-txt</span>
              <div class="w-full h-full bg-[var(--color-txt-success)] cursor-pointer" @click="() => handleColorClick('text-success-txt')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">error-txt</span>
              <div class="w-full h-full bg-[var(--color-txt-error)] cursor-pointer" @click="() => handleColorClick('text-error-txt')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">warning-txt</span>
              <div class="w-full h-full bg-[var(--color-txt-warning)] cursor-pointer" @click="() => handleColorClick('text-warning-txt')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">info-txt</span>
              <div class="w-full h-full rounded-br-md bg-[var(--color-txt-info)] cursor-pointer" @click="() => handleColorClick('text-info-txt')"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-[100%] w- rounded-md bg-transparent border-2 border-primary-bd p-4 h-32 relative">
        <div class="space-y-2">
          <div class="text-primary-txt flex flex-col gap-3">
            <h3 class="text-lg font-medium">Colores Icon</h3>
          </div>
          <div class="flex gap-0 absolute inset-x-0 bottom-0">
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">icon-primary</span>
              <div class="w-full h-full rounded-bl-md bg-[var(--color-icon-primary)] cursor-pointer" @click="() => handleColorClick('text-icon-primary')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">icon-secondary</span>
              <div class="w-full h-full bg-[var(--color-icon-secondary)] cursor-pointer" @click="() => handleColorClick('text-icon-secondary')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">icon-terciary</span>
              <div class="w-full h-full bg-[var(--color-icon-terciary)] cursor-pointer" @click="() => handleColorClick('text-icon-terciary')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">icon-disabled</span>
              <div class="w-full h-full bg-[var(--color-icon-disabled)] cursor-pointer" @click="() => handleColorClick('text-icon-disabled')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">icon-disab-lt</span>
              <div class="w-full h-full bg-[var(--color-icon-disabled-light)] cursor-pointer" @click="() => handleColorClick('text-icon-disab-lt')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">icon-inverse</span>
              <div class="w-full h-full bg-[var(--color-icon-inverse)] cursor-pointer" @click="() => handleColorClick('text-icon-inverse')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">icon-success</span>
              <div class="w-full h-full bg-[var(--color-icon-success)] cursor-pointer" @click="() => handleColorClick('text-icon-success')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">icon-error</span>
              <div class="w-full h-full bg-[var(--color-icon-error)] cursor-pointer" @click="() => handleColorClick('text-icon-error')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">icon-warning</span>
              <div class="w-full h-full bg-[var(--color-icon-warning)] cursor-pointer" @click="() => handleColorClick('text-icon-warning')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">icon-info</span>
              <div class="w-full h-full rounded-br-md bg-[var(--color-icon-info)] cursor-pointer" @click="() => handleColorClick('text-icon-info')"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-[100%] w- rounded-md bg-transparent border-2 border-primary-bd p-4 h-32 relative">
        <div class="space-y-2">
          <div class="text-primary-txt flex flex-col gap-3">
            <h3 class="text-lg font-medium">Colores Border</h3>
          </div>
          <div class="flex gap-0 absolute inset-x-0 bottom-0">
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">primary-bd</span>
              <div class="w-full h-full rounded-bl-md bg-[var(--color-border-primary-bd)] cursor-pointer" @click="() => handleColorClick('border-primary-bd')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">secondary-bd</span>
              <div class="w-full h-full bg-[var(--color-border-secondary)] cursor-pointer" @click="() => handleColorClick('border-secondary-bd')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">disabled-bd</span>
              <div class="w-full h-full bg-[var(--color-border-disabled)] cursor-pointer" @click="() => handleColorClick('border-disabled-bd')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">disab-lt-bd</span>
              <div class="w-full h-full bg-[var(--color-border-disabled-light)] cursor-pointer" @click="() => handleColorClick('border-disab-lt-bd')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">inverse-bd</span>
              <div class="w-full h-full bg-[var(--color-border-inverse)] cursor-pointer" @click="() => handleColorClick('border-inverse-bd')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">success-bd</span>
              <div class="w-full h-full bg-[var(--color-border-success)] cursor-pointer" @click="() => handleColorClick('border-success-bd')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">warning-bd</span>
              <div class="w-full h-full bg-[var(--color-border-warning)] cursor-pointer" @click="() => handleColorClick('border-warning-bd')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">error-bd</span>
              <div class="w-full h-full bg-[var(--color-border-error)] cursor-pointer" @click="() => handleColorClick('border-error-bd')"></div>
            </div>
            <div class="h-[70px] w-1/4 flex flex-col items-center justify-center min-w-0">
              <span class="text-primary-txt text-2 font-normal truncate pb-[5px] max-w-full inline-block">info-bd</span>
              <div class="w-full h-full rounded-br-md bg-[var(--color-border-info)] cursor-pointer" @click="() => handleColorClick('border-info-bd')"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </g-config-provider>
  `,
  setup() {
    const handleColorClick = async (color: string) => {
      try {
        await navigator.clipboard.writeText(color)
      } catch (err) {
        console.error('Error al copiar:', err)
      }
    }

    return { handleColorClick }
  }
})

export const Default = Template.bind({})
