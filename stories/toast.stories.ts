import type { Meta, StoryObj } from "@storybook/vue3";
import { GToast, toast } from "@flash-global66/g-toast/index.ts";
import { GConfigProvider } from "@flash-global66/g-config-provider/index.ts";
import { GButton } from "@flash-global66/g-button/index.ts";

import { version, peerDependencies } from "@flash-global66/g-toast/package.json";
import { generatePeerDepsList, generatePeerDepsInstalls } from "../helper/documentation-stories";

const meta: Meta = {
  title: "Feedback/Toast",
  component: GToast,
  parameters: {
    docs: {
      description: {
        component: `
El componente Toast muestra un mensaje de notificación en una esquina de la página.

El sistema ofrece una API dual: una función principal \`toast({ type: 'success' })\` para máxima configuración y métodos de atajo \`toast.success()\`.

> Versión actual: ${version}

## Características
- 4 tipos predefinidos con iconos automáticos (success, info, warning, error)
- API dual para flexibilidad de uso
- Posicionamiento en 4 esquinas de pantalla
- Duración configurable y persistencia
- Soporte para contenido HTML
- Sistema de offset personalizable
- Cierre manual o automático

### Instalación

\`\`\`bash
yarn add @flash-global66/g-toast
\`\`\`

### Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { toast } from '@flash-global66/g-toast'

# para usar como plugin global en Vue
import { GToastPlugin } from '@flash-global66/g-toast'
app.use(GToastPlugin)

# recomendado importar en los estilos globales
import '@flash-global66/g-toast/toast.styles.scss'
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias: Puede que funcione con otras versiones, pero no se garantiza.
${generatePeerDepsList(peerDependencies)}

> Revisar la documentación de cada dependencia para mas información.

\`\`\`bash
# Dependencias global66
${generatePeerDepsInstalls(peerDependencies)}
\`\`\`

### Ejemplo de uso

\`\`\`typescript
<script setup lang="ts">
import { toast } from '@flash-global66/g-toast';

const showToast = () => {
  toast({
    type: 'success',
    message: 'Operación completada exitosamente'
  });
};
</script>

<template>
  <g-button @click="showToast">
    Mostrar Toast
  </g-button>
</template>
\`\`\`

## Ejemplos de uso

\`\`\`javascript
// Ejemplo básico
toast({
  type: 'success',
  message: 'Operación completada exitosamente'
})

// Ejemplo completo con todas las opciones
toast({
  type: 'success',
  message: 'Tu mensaje aquí',
  size: 'md',
  duration: 5000,
  position: 'top-right',
  showClose: true,
  showProgress: true,
  offset: 0
})

// Métodos de atajo
toast.success('Guardado exitosamente')
toast.error('Error al guardar')
toast.warning('Revisa los datos')
toast.info('Información importante')
\`\`\`

### Iconos por Tipo
- **success**: check-circle
- **info**: info-circle  
- **warning**: exclamation-triangle
- **error**: times-circle
        `,
      },
    },
  },
  argTypes: {
    // Props principales
    message: {
      description: "Contenido del mensaje del toast.",
      control: "text",
      table: {
        category: "Props",
        type: { summary: "string | VNode | (() => VNode)" },
      },
    },
    type: {
      description: "Tipo de notificación (requerido). Determina el icono y estilo visual.",
      control: "select",
      options: ["success", "info", "warning", "error"],
      table: {
        category: "Props",
        type: { summary: "ToastType" },
      },
    },
    size: {
      description: "Tamaño del toast. Afecta la altura, texto e iconos.",
      control: "select",
      options: ["sm", "md"],
      defaultValue: "md",
      table: {
        category: "Props",
        type: { summary: "ToastSize" },
        defaultValue: { summary: "md" },
      },
    },
    duration: {
      description: "Duración en milisegundos antes del cierre automático. Si es 0, no se cierra automáticamente.",
      control: "number",
      defaultValue: 5000,
      table: {
        category: "Props",
        type: { summary: "number" },
        defaultValue: { summary: "5000" },
      },
    },
    position: {
      description: "Posición del toast en la pantalla.",
      control: "select",
      options: ["top-right", "top-left", "bottom-right", "bottom-left"],
      defaultValue: "top-right",
      table: {
        category: "Props",
        type: { summary: "string" },
        defaultValue: { summary: "top-right" },
      },
    },
    showClose: {
      description: "Si el toast puede cerrarse manualmente con el botón X.",
      control: "boolean",
      defaultValue: true,
      table: {
        category: "Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    showProgress: {
      description: "Si debe mostrarse la barra de progreso indicando el tiempo restante.",
      control: "boolean",
      defaultValue: true,
      table: {
        category: "Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    offset: {
      description: "Offset en píxeles desde el borde de la pantalla.",
      control: "number",
      defaultValue: 0,
      table: {
        category: "Props",
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    dangerouslyUseHTMLString: {
      description: "Si el mensaje debe tratarse como HTML (usar con precaución).",
      control: "boolean",
      defaultValue: false,
      table: {
        category: "Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    customClass: {
      description: "Clase CSS personalizada para el toast.",
      control: "text",
      table: {
        category: "Props",
        type: { summary: "string" },
        defaultValue: { summary: '""' },
      },
    },
    zIndex: {
      description: "z-index inicial del toast.",
      control: "number",
      table: {
        category: "Props",
        type: { summary: "number" },
      },
    },

    // Events
    onClick: {
      description: "Se emite cuando se hace clic en el toast.",
      action: "clicked",
      table: {
        category: "Events",
        type: { summary: "() => void" },
      },
    },
    onClose: {
      description: "Se emite cuando el toast se cierra (antes de la animación).",
      action: "closed",
      table: {
        category: "Events",
        type: { summary: "() => void" },
      },
    },
    destroy: {
      description: "Se emite cuando el toast se destruye completamente (después de la animación).",
      action: "destroyed",
      table: {
        category: "Events",
        type: { summary: "() => void" },
      },
    },

    // Slots
    default: {
      description: "Contenido personalizado del mensaje. Por defecto muestra el prop `message`.",
      control: false,
      table: {
        category: "Slots",
        type: { summary: "VNode | string" },
      },
    },

    // Expose
    visible: {
      description: "Estado de visibilidad del toast (ref).",
      control: false,
      table: {
        category: "Expose",
        type: { summary: "Ref<boolean>" },
      },
    },
    close: {
      description: "Método para cerrar el toast manualmente.",
      control: false,
      table: {
        category: "Expose",
        type: { summary: "() => void" },
      },
    },
  },
  args: {
    message: "Operación completada exitosamente",
    type: "success",
    duration: 5000,
    position: "top-right",
    showClose: true,
    showProgress: true,
    size: "md",
    offset: 0,
    dangerouslyUseHTMLString: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Uso Básico",
  parameters: {
    docs: {
      description: {
        story: "Usa los controles de abajo para experimentar con diferentes configuraciones del toast.",
      },
      source: {
        code: `toast({
  type: 'success',
  message: 'Tu mensaje aquí',
  size: 'md',
  duration: 5000,
  position: 'top-right',
  showClose: true,
  showProgress: true,
  offset: 0
})`,
      },
    },
  },
  render: (args: any) => ({
    components: { GButton, GConfigProvider },
    setup() {
      const showToast = () => {
        toast({
          type: args.type,
          message: args.message,
          duration: args.duration,
          position: args.position,
          showClose: args.showClose,
          showProgress: args.showProgress,
          size: args.size,
          offset: args.offset,
          dangerouslyUseHTMLString: args.dangerouslyUseHTMLString,
        });
      };

      return {
        showToast,
      };
    },
    template: `
      <GConfigProvider>
        <GButton @click="showToast">
          Mostrar Toast
        </GButton>
      </GConfigProvider>
    `,
  }),
};

export const Primary: Story = {
  name: "Dos Formas de Uso",
  parameters: {
    docs: {
      description: {
        story: `
El sistema toast ofrece dos formas principales de uso:

1. **Método Principal**: \`toast({ type: 'success', message: 'Mensaje' })\` - Para configuración completa
2. **Métodos de Atajo**: \`toast.success('Mensaje')\` - Para uso rápido

Ambas APIs son equivalentes en funcionalidad, pero los atajos son más convenientes para casos simples.
        `,
      },
      source: {
        code: `// Método principal
toast({
  type: 'success',
  message: 'Mensaje de éxito',
  duration: 3000,
  position: 'top-right'
})

// Métodos de atajo
toast.success('Mensaje de éxito')
toast.info('Información')
toast.warning('Advertencia')
toast.error('Error')`,
      },
    },
  },
  render: () => ({
    components: { GButton, GConfigProvider },
    setup() {
      const showMainMethod = () => {
        toast({
          type: "success",
          message: 'Método principal - toast({ type: "success" })',
          duration: 3000,
          position: "top-right",
        });
      };

      const showShortcuts = () => {
        toast.success("Método de atajo - toast.success()");

        setTimeout(() => {
          toast.info("toast.info() - Información");
        }, 500);

        setTimeout(() => {
          toast.warning("toast.warning() - Advertencia");
        }, 1000);

        setTimeout(() => {
          toast.error("toast.error() - Error");
        }, 1500);
      };

      return {
        showMainMethod,
        showShortcuts,
      };
    },
    template: `
      <GConfigProvider>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <GButton @click="showMainMethod" type="primary">
            Método Principal
          </GButton>
          <GButton @click="showShortcuts" type="secondary">
            Métodos de Atajo
          </GButton>
        </div>
      </GConfigProvider>
    `,
  }),
};

export const AllTypes: Story = {
  name: "Tipos",
  parameters: {
    docs: {
      description: {
        story:
          "El componente tiene 4 tipos diferentes que ayudan a transmitir el contexto del mensaje: success, info, warning y error. Los iconos se asignan automáticamente según el tipo.",
      },
      source: {
        code: `toast({ type: 'success', message: 'Operación exitosa' })
toast({ type: 'info', message: 'Información importante' })
toast({ type: 'warning', message: 'Advertencia' })
toast({ type: 'error', message: 'Error en la operación' })`,
      },
    },
  },
  render: () => ({
    components: { GButton, GConfigProvider },
    setup() {
      const showSuccess = () => {
        toast.success("Operación completada exitosamente");
      };

      const showInfo = () => {
        toast.info("Aquí tienes información útil");
      };

      const showWarning = () => {
        toast.warning("Por favor revisa esto cuidadosamente");
      };

      const showError = () => {
        toast.error("Algo salió mal");
      };

      return {
        showSuccess,
        showInfo,
        showWarning,
        showError,
      };
    },
    template: `
      <GConfigProvider>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
          <GButton @click="showSuccess" type="success">
            Success Toast
          </GButton>
          <GButton @click="showInfo" type="info">
            Info Toast
          </GButton>
          <GButton @click="showWarning" type="warning">
            Warning Toast
          </GButton>
          <GButton @click="showError" type="error">
            Error Toast
          </GButton>
        </div>
      </GConfigProvider>
    `,
  }),
};

export const Positions: Story = {
  name: "Posiciones",
  parameters: {
    docs: {
      description: {
        story:
          "Los toasts pueden aparecer en cualquiera de las cuatro esquinas de la pantalla. La posición se mantiene consistente para múltiples toasts.",
      },
      source: {
        code: `toast({ type: 'success', message: 'Superior derecha', position: 'top-right' })
toast({ type: 'info', message: 'Superior izquierda', position: 'top-left' })
toast({ type: 'warning', message: 'Inferior derecha', position: 'bottom-right' })
toast({ type: 'error', message: 'Inferior izquierda', position: 'bottom-left' })`,
      },
    },
  },
  render: () => ({
    components: { GButton, GConfigProvider },
    setup() {
      const positions = [
        { key: "top-left", label: "Arriba Izquierda" },
        { key: "top-right", label: "Arriba Derecha" },
        { key: "bottom-left", label: "Abajo Izquierda" },
        { key: "bottom-right", label: "Abajo Derecha" },
      ] as const;

      const showToast = (position: (typeof positions)[number]["key"]) => {
        toast({
          type: "info",
          message: `Toast desde ${position}`,
          position,
          duration: 4000,
        });
      };

      return {
        positions,
        showToast,
      };
    },
    template: `
      <GConfigProvider>
        <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
          <div style="display: flex; gap: 16px;">
            <GButton 
              @click="showToast('top-left')" 
              type="primary"
              style="flex: 1;"
            >
              Arriba Izquierda
            </GButton>
            <GButton 
              @click="showToast('top-right')" 
              type="primary"
              style="flex: 1;"
            >
              Arriba Derecha
            </GButton>
          </div>
          <div style="display: flex; gap: 16px;">
            <GButton 
              @click="showToast('bottom-left')" 
              type="primary"
              style="flex: 1;"
            >
              Abajo Izquierda
            </GButton>
            <GButton 
              @click="showToast('bottom-right')" 
              type="primary"
              style="flex: 1;"
            >
              Abajo Derecha
            </GButton>
          </div>
        </div>
      </GConfigProvider>
    `,
  }),
};

export const DurationControl: Story = {
  name: "Control de Duración",
  parameters: {
    docs: {
      description: {
        story:
          "Controla cuánto tiempo permanecen visibles los toasts. La duración de 0 hace que el toast permanezca hasta que el usuario lo cierre manualmente.",
      },
      source: {
        code: `toast({ type: 'info', message: 'Rápido', duration: 2000 })
toast({ type: 'success', message: 'Normal', duration: 5000 })
toast({ type: 'warning', message: 'Largo', duration: 10000 })
toast({ type: 'error', message: 'Persistente', duration: 0 })`,
      },
    },
  },
  render: () => ({
    components: { GButton, GConfigProvider },
    setup() {
      const showQuick = () => {
        toast.success({ message: "Toast rápido (2s)", duration: 2000 });
      };

      const showNormal = () => {
        toast.info("Toast normal (5s por defecto)");
      };

      const showLong = () => {
        toast.warning({ message: "Toast largo (10s)", duration: 10000 });
      };

      const showPersistent = () => {
        toast.error({ message: "Toast persistente (cierre manual)", duration: 0 });
      };

      return {
        showQuick,
        showNormal,
        showLong,
        showPersistent,
      };
    },
    template: `
      <GConfigProvider>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <GButton @click="showQuick" type="success">
            Rápido (2s)
          </GButton>
          <GButton @click="showNormal" type="info">
            Normal (5s)
          </GButton>
          <GButton @click="showLong" type="warning">
            Largo (10s)
          </GButton>
          <GButton @click="showPersistent" type="error">
            Persistente (0)
          </GButton>
        </div>
      </GConfigProvider>
    `,
  }),
};

export const AdvancedUsage: Story = {
  name: "Configuración Avanzada",
  parameters: {
    docs: {
      description: {
        story: "Opciones avanzadas: contenido HTML, offset personalizado y sin botón de cerrar.",
      },
      source: {
        code: `// Contenido HTML
toast({
  type: 'info',
  message: '<strong>Texto</strong> con <em>formato</em>',
  dangerouslyUseHTMLString: true
})

// Offset personalizado
toast({
  type: 'success',
  message: 'Con offset',
  offset: 50
})

// Sin botón de cerrar
toast({
  type: 'warning',
  message: 'Sin botón X',
  showClose: false
})`,
      },
    },
  },
  render: () => ({
    components: { GButton, GConfigProvider },
    setup() {
      const showHTMLContent = () => {
        toast({
          type: "info",
          message: "<strong>Contenido HTML</strong> con <em>formato</em>",
          dangerouslyUseHTMLString: true,
          duration: 5000,
        });
      };

      const showWithOffset = () => {
        toast({
          type: "success",
          message: "Toast con offset personalizado (50px)",
          offset: 50,
          duration: 4000,
        });
      };

      const showNonClosable = () => {
        toast({
          type: "warning",
          message: "Toast sin botón de cerrar (solo auto-cierre)",
          showClose: false,
          duration: 6000,
        });
      };

      return {
        showHTMLContent,
        showWithOffset,
        showNonClosable,
      };
    },
    template: `
      <GConfigProvider>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <GButton @click="showHTMLContent" type="info">
            Contenido HTML
          </GButton>
          <GButton @click="showWithOffset" type="success">
            Offset Personalizado
          </GButton>
          <GButton @click="showNonClosable" type="warning">
            Sin botón de cerrar
          </GButton>
        </div>
      </GConfigProvider>
    `,
  }),
};

export const Sizes: Story = {
  name: "Tamaños",
  parameters: {
    docs: {
      description: {
        story: "El componente tiene dos tamaños disponibles: sm (pequeño) y md (mediano).",
      },
      source: {
        code: `// Tamaño pequeño
toast({
  type: 'success',
  size: 'sm',
  message: 'Toast pequeño'
})

// Tamaño mediano (por defecto)
toast({
  type: 'info',
  size: 'md',
  message: 'Toast mediano'
})`,
      },
    },
  },
  render: () => ({
    components: { GConfigProvider, GButton },
    setup() {
      const showSmallToast = () => {
        toast({
          type: "success",
          size: "sm",
          message: "Toast pequeño",
          duration: 4000,
        });
      };

      const showMediumToast = () => {
        toast({
          type: "info",
          size: "md",
          message: "Toast mediano",
          duration: 4000,
        });
      };

      return { showSmallToast, showMediumToast };
    },
    template: `
      <GConfigProvider>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <GButton @click="showSmallToast" type="primary">
            Toast SM
          </GButton>
          <GButton @click="showMediumToast" type="primary">
            Toast MD
          </GButton>
        </div>
      </GConfigProvider>
    `,
  }),
};
