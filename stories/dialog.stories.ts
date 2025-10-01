import { StoryFn, Meta } from '@storybook/vue3'
import { ref } from 'vue'

// COMPONENTS
import { GDialog } from '@flash-global66/g-dialog/index.ts'
import { GButton } from '@flash-global66/g-button/index.ts'
import { GConfigProvider } from '../components/config-provider'
import { version } from '../components/dialog/package.json'

export default {
  title: 'Data/Dialog',
  component: GDialog,
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'Controla la visibilidad del dialog',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    title: {
      control: 'text',
      description: 'Título del dialog',
      table: {
        defaultValue: { summary: '' }
      }
    },
    width: {
      control: 'text',
      description: "Ancho del dialog. Requiere size-mode='fixed'.",
      table: {
        defaultValue: { summary: 'undefined' }
      }
    },
    sizeMode: {
      control: 'select',
      options: ['default', 'fixed', 'adaptive'],
      description: `Controla el comportamiento del ancho del dialog:
      - default: usa max-width predeterminado
      - fixed: usa width prop sin max-width
      - adaptive: se adapta al contenido con restricciones min/max`,
      table: {
        defaultValue: { summary: 'default' }
      }
    },
    draggable: {
      control: 'boolean',
      description: 'Permite arrastrar el dialog. No compatible con fullscreen',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    fullscreen: {
      control: 'boolean',
      description: 'El dialog ocupa toda la pantalla',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    showClose: {
      control: 'boolean',
      description: 'Mostrar botón de cerrar',
      table: {
        defaultValue: { summary: 'true' }
      }
    },
    alignCenter: {
      control: 'boolean',
      description: 'Alinear el dialog horizontal y verticalmente',
      table: {
        defaultValue: { summary: 'true' }
      }
    },
    appendToBody: {
      control: 'boolean',
      description: 'Añadir el dialog directamente al body del documento',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    headerClass: {
      control: 'text',
      description: 'Clases CSS personalizadas para el header',
      table: {
        defaultValue: { summary: '' }
      }
    },
    bodyClass: {
      control: 'text',
      description: 'Clases CSS personalizadas para el body',
      table: {
        defaultValue: { summary: '' }
      }
    },
    footerClass: {
      control: 'text',
      description: 'Clases CSS personalizadas para el footer',
      table: {
        defaultValue: { summary: '' }
      }
    },
    ariaLevel: {
      control: 'text',
      description: 'Nivel de encabezado ARIA para el título',
      table: {
        defaultValue: { summary: '2' }
      }
    },
    closeOnClickModal: {
      control: 'boolean',
      description: 'Si el dialog se cierra al hacer clic en el overlay',
      table: {
        defaultValue: { summary: 'true' }
      }
    },
    closeOnPressEscape: {
      control: 'boolean',
      description: 'Si el dialog se cierra al presionar ESC',
      table: {
        defaultValue: { summary: 'true' }
      }
    },
    destroyOnClose: {
      control: 'boolean',
      description: 'Destruir el contenido del dialog cuando se cierra',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    footerButtons: {
      control: 'object',
      description: `Array de configuración para los botones del footer (máximo 3 botones). Cada botón debe tener:
      - text: Texto del botón
      - onClick: Función a ejecutar al hacer clic
      - variant: Variante del botón (primary/secondary/tertiary)`,
      table: {
        defaultValue: { summary: '[]' },
        type: {
          summary:
            "Array<{ text: string, onClick: () => void, variant: 'primary' | 'secondary' | 'tertiary' }>"
        }
      }
    },
    'onUpdate:modelValue': {
      description: 'Se emite al actualizar la visibilidad del dialog',
      table: {
        category: 'Eventos',
        type: { summary: '(value: boolean) => void' }
      }
    },
    onOpen: {
      description: 'Se emite cuando el dialog se abre',
      table: {
        category: 'Eventos',
        type: { summary: '() => void' }
      }
    },
    onOpened: {
      description: 'Se emite cuando termina la animación de apertura del dialog',
      table: {
        category: 'Eventos',
        type: { summary: '() => void' }
      }
    },
    onClose: {
      description: 'Se emite cuando el dialog se cierra',
      table: {
        category: 'Eventos',
        type: { summary: '() => void' }
      }
    },
    onClosed: {
      description: 'Se emite cuando termina la animación de cierre del dialog',
      table: {
        category: 'Eventos',
        type: { summary: '() => void' }
      }
    },
    // Slots
    default: {
      description: 'Contenido principal del dialog',
      table: {
        category: 'Slots',
        type: { summary: 'slot' }
      }
    },
    header: {
      description: 'Contenido personalizado para el encabezado del dialog',
      table: {
        category: 'Slots',
        type: { summary: 'slot' }
      }
    },
    footer: {
      description: 'Contenido personalizado para el pie del dialog',
      table: {
        category: 'Slots',
        type: { summary: 'slot' }
      }
    },
    image: {
      description: 'Slot para mostrar una imagen en la parte superior del dialog',
      table: {
        category: 'Slots',
        type: { summary: 'slot' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
# Dialog Component

El componente Dialog proporciona una ventana modal configurable para mostrar información y acciones.

> Versión actual: ${version}

## Características
- Tres modos de tamaño: default, fixed y adaptive
- Soporte para imágenes y contenido personalizado
- Configuración flexible de botones en el footer (máximo 3)
- Drag & Drop (opción arrastrable)
- Fullscreen para mobile optimizado

## Instalación

\`\`\`bash
yarn add @flash-global66/g-dialog
\`\`\`

## Dependencias
Este componente requiere:
- @flash-global66/g-button
- @flash-global66/g-icon-font
- @flash-global66/g-focus-trap
- @flash-global66/g-teleport
- @flash-global66/g-overlay

\`\`\`bash
# Instalar dependencias requeridas
yarn add @flash-global66/g-button @flash-global66/g-icon-font @flash-global66/g-focus-trap @flash-global66/g-teleport @flash-global66/g-overlay
\`\`\`

## Importación de estilos SASS
Para que el componente funcione correctamente, es necesario importar los estilos SASS:

\`\`\`scss
// Importar estilos del Dialog
@use "@flash-global66/g-dialog/styles.scss" as *;

// Importar los estilos de los componentes dependientes
@use "@flash-global66/g-button/styles.scss" as *;
@use "@flash-global66/g-icon-font/styles.scss" as *;
\`\`\`

## Uso básico

\`\`\`html
<template>
  <g-button @click="dialogVisible = true">Abrir Dialog</g-button>

  <g-dialog
    v-model="dialogVisible"
    title="Título del Dialog"
    :footer-buttons="buttons"
    @close="closeDialog"
  >
    Contenido del Dialog
  </g-dialog>
</template>

<script setup>
import { ref } from 'vue';
import { GDialog } from '@flash-global66/g-dialog';
import { GButton } from '@flash-global66/g-button';

const dialogVisible = ref(false);
const closeDialog = () => {
  dialogVisible.value = false;
};
const buttons = [
  {
    text: 'Aceptar',
    onClick: closeDialog,
    variant: 'primary'
  },
  {
    text: 'Cancelar',
    onClick: closeDialog,
    variant: 'secondary'
  }
];
</script>
\`\`\`

## Layout de botones
- Con 3 botones: Se muestran 2 botones en la primera fila y 1 botón centrado debajo
- Con 2 botones: Se muestran uno encima del otro en columna
- Con 1 botón: Ocupa todo el ancho disponible
      `
      }
    }
  }
} as Meta<typeof GDialog>

const BasicTemplate: StoryFn<typeof GDialog> = (args) => ({
  components: { GDialog, GConfigProvider, GButton },
  setup() {
    const dialogVisible = ref(false)
    const handleClose = () => {
      dialogVisible.value = false
    }

    const processFooterButtons = () => {
      if (!args.footerButtons || args.footerButtons.length === 0) {
        return [
          {
            text: 'Aceptar',
            onClick: handleClose,
            variant: 'primary'
          },
          {
            text: 'Cancelar',
            onClick: () => (dialogVisible.value = false),
            variant: 'secondary'
          }
        ]
      }

      return args.footerButtons.map((button) => ({
        ...button,
        onClick: () => {
          dialogVisible.value = false
        }
      }))
    }

    return {
      args,
      dialogVisible,
      handleClose,
      processFooterButtons
    }
  },
  template: `
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog Básico</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        :footer-buttons="processFooterButtons()"
        @close="handleClose"
        append-to-body
      >
        <p>Este es un dialog básico con contenido de texto simple.</p>
      </g-dialog>
    </g-config-provider>
  `
})

export const Basic = BasicTemplate.bind({})
Basic.args = {
  title: 'Dialog Básico',
  showClose: true,
  footerButtons: [
    {
      text: 'Aceptar',
      onClick: () => {},
      variant: 'primary'
    },
    {
      text: 'Cancelar',
      onClick: () => {},
      variant: 'secondary'
    }
  ]
}
Basic.parameters = {
  docs: {
    description: {
      story: 'Dialog básico con contenido de texto y dos botones de acción.'
    },
    source: {
      code: `
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog Básico"
    :show-close="true"
    :footer-buttons="[
      {
        text: 'Aceptar',
        onClick: handleClose,
        variant: 'primary'
      },
      {
        text: 'Cancelar',
        onClick: () => dialogVisible = false,
        variant: 'secondary'
      }
    ]"
    @close="handleClose"
  >
    <p>Este es un dialog básico con contenido de texto simple.</p>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
</script>`,
      language: 'html',
      type: 'auto'
    }
  }
}

const ImageDialogTemplate: StoryFn<typeof GDialog> = (args) => ({
  components: { GDialog, GConfigProvider, GButton },
  setup() {
    const dialogVisible = ref(false)
    const handleClose = () => {
      dialogVisible.value = false
    }
    return {
      args,
      dialogVisible,
      handleClose
    }
  },
  template: `
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con Imagen</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        append-to-body
        @close="handleClose"
      >
        <template #header>
          <h2 class="text-primary-txt text-6 font-semibold">Dialog con Imagen</h2>
        </template>
        <template #image>
            <img 
              src="https://placehold.co/112x112"
              alt="Imagen"
              class="rounded mt-xl"
            />
        </template>
        <p>Este dialog muestra una imagen con un mensaje.</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Aceptar</g-button>
            <g-button full variant="secondary" @click="dialogVisible = false">Cancelar</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  `
})

export const WithImage = ImageDialogTemplate.bind({})
WithImage.args = {
  showClose: true,
  sizeMode: 'default'
}
WithImage.parameters = {
  docs: {
    description: {
      story: 'Dialog con imagen y botones configurados mediante la prop footerButtons.'
    },
    source: {
      code: `
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog con Imagen"
    :footer-buttons="[
      {
        text: 'Aceptar',
        onClick: handleConfirm,
        variant: 'primary'
      },
      {
        text: 'Cancelar',
        onClick: handleClose,
        variant: 'secondary'
      }
    ]"
    @close="handleClose"
  >
    <template #image>
      <img 
        src="https://placehold.co/112x112"
        alt="Imagen"
      />
    </template>
    <p>Este dialog muestra una imagen con un mensaje.</p>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
const handleConfirm = () => {
  dialogVisible.value = false;
};
</script>`
    }
  }
}

const NoCloseButtonTemplate: StoryFn<typeof GDialog> = (args) => ({
  components: { GDialog, GConfigProvider, GButton },
  setup() {
    const dialogVisible = ref(false)
    const handleClose = () => {
      dialogVisible.value = false
    }
    return { args, dialogVisible, handleClose }
  },
  template: `
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog sin Botón Cerrar</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Mensaje Importante"
        :show-close="false"
        append-to-body
        @close="handleClose"
      >
        <p class="text-center">Este dialog es un mensaje importante que requiere confirmación del usuario.</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Entendido</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  `
})

export const NoCloseButton = NoCloseButtonTemplate.bind({})
NoCloseButton.args = {
  title: 'Mensaje Importante',
  showClose: false,
  sizeMode: 'default'
}
NoCloseButton.parameters = {
  docs: {
    description: {
      story: 'Dialog sin botón de cerrar, con texto y un solo botón.'
    },
    source: {
      code: `
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Mensaje Importante"
    :show-close="false"
    @close="handleClose"
  >
    <p>Este dialog solo se cierra con el botón de acción.</p>
    <template #footer>
      <div class="flex flex-col gap-2 items-stretch">
        <g-button full @click="handleClose">Entiendo</g-button>
      </div>
    </template>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
</script>`,
      language: 'html',
      type: 'auto'
    }
  }
}

const CustomWidthTemplate: StoryFn<typeof GDialog> = (args) => ({
  components: { GDialog, GConfigProvider, GButton },
  setup() {
    const dialogVisible = ref(false)
    const handleClose = () => {
      dialogVisible.value = false
    }
    return { args, dialogVisible, handleClose }
  },
  template: `
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog Ancho</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Ancho Personalizado"
        width="800"
        size-mode="fixed"
        append-to-body
        @close="handleClose"
      >
        <p>Este dialog tiene un ancho personalizado de 800px.</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Aceptar</g-button>
            <g-button full variant="secondary" @click="dialogVisible = false">Cancelar</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  `
})

export const CustomWidth = CustomWidthTemplate.bind({})
CustomWidth.args = {
  title: 'Dialog con Ancho Personalizado',
  showClose: true,
  width: '800',
  sizeMode: 'fixed'
}
CustomWidth.parameters = {
  docs: {
    description: {
      story: "Dialog con ancho personalizado definido a 800px. Requiere size-mode='fixed'"
    },
    source: {
      code: `
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog con Ancho Personalizado"
    width="800"
    size-mode="fixed"
    :show-close="true"
    @close="handleClose"
  >
    <p>Este dialog tiene un ancho personalizado de 800px.</p>
    <template #footer>
      <div class="flex flex-col gap-2 items-stretch">
        <g-button full @click="handleClose">Aceptar</g-button>
        <g-button full variant="secondary" @click="dialogVisible = false">Cancelar</g-button>
      </div>
    </template>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
</script>`,
      language: 'html',
      type: 'auto'
    }
  }
}

const LargeImageTemplate: StoryFn<typeof GDialog> = (args) => ({
  components: { GDialog, GConfigProvider, GButton },
  setup() {
    const dialogVisible = ref(false)
    const handleClose = () => {
      dialogVisible.value = false
    }
    return { args, dialogVisible, handleClose }
  },
  template: `
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con Imagen Grande</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog Adaptable"
        size-mode="adaptive"
        @close="handleClose"
        append-to-body
      >
        <template #image> 
          <img 
            src="https://placehold.co/800x600"
            alt="Imagen grande de ejemplo"
            class="rounded"
          />
        </template>
        <p>Este dialog se adapta al contenido manteniendo márgenes seguros</p>
        <template #footer>
          <div class="flex flex-col gap-2 items-stretch">
            <g-button full @click="handleClose">Entendido</g-button>
          </div>
        </template>
      </g-dialog>
    </g-config-provider>
  `
})

export const WithLargeImage = LargeImageTemplate.bind({})
WithLargeImage.args = {
  title: 'Dialog Adaptable',
  showClose: true,
  sizeMode: 'adaptive'
}
WithLargeImage.parameters = {
  docs: {
    description: {
      story: 'Dialog que se adapta al contenido, útil para imágenes grandes o contenido variable.'
    },
    source: {
      code: `
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog Adaptable"
    size-mode="adaptive"
    @close="handleClose"
  >
    <template #image>
      <img 
        src="https://placehold.co/800x600"
        alt="Imagen grande de ejemplo"
        class="rounded"
      />
    </template>
    <p>Este dialog se adapta al contenido manteniendo márgenes seguros</p>
    <template #footer>
      <div class="flex flex-col gap-2 items-stretch">
        <g-button full @click="handleClose">Entendido</g-button>
      </div>
    </template>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
</script>`,
      language: 'html',
      type: 'auto'
    }
  }
}

const TwoButtonsTemplate: StoryFn<typeof GDialog> = (args) => ({
  components: { GDialog, GConfigProvider, GButton },
  setup() {
    const dialogVisible = ref(false)
    const handleClose = () => {
      dialogVisible.value = false
    }
    return { args, dialogVisible, handleClose }
  },
  template: `
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con 2 Botones</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Botones"
        :footer-buttons="[
          {
            text: 'Aceptar',
            onClick: handleClose,
            variant: 'primary'
          },
          {
            text: 'Cancelar',
            onClick: () => dialogVisible = false,
            variant: 'secondary'
          }
        ]"
        @close="handleClose"
        append-to-body
      >
        <p>Este dialog muestra dos botones.</p>
      </g-dialog>
    </g-config-provider>
  `
})

export const TwoButtonsStacked = TwoButtonsTemplate.bind({})
TwoButtonsStacked.args = {
  title: 'Dialog con Botones',
  showClose: true
}
TwoButtonsStacked.parameters = {
  docs: {
    description: {
      story: 'Dialog con dos botones.'
    },
    source: {
      code: `
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog con Botones"
    :footer-buttons="[
      {
        text: 'Aceptar',
        onClick: handleClose,
        variant: 'primary'
      },
      {
        text: 'Cancelar',
        onClick: () => dialogVisible = false,
        variant: 'secondary'
      }
    ]"
    @close="handleClose"
  >
    <p>Este dialog muestra dos botones.</p>
  </g-dialog>
</template>

<script setup lang="ts">
const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
</script>`,
      language: 'html',
      type: 'auto'
    }
  }
}

const ThreeButtonsTemplate: StoryFn<typeof GDialog> = (args) => ({
  components: { GDialog, GConfigProvider, GButton },
  setup() {
    const dialogVisible = ref(false)
    const handleClose = () => {
      dialogVisible.value = false
    }

    return {
      args,
      dialogVisible,
      handleClose
    }
  },
  template: `
    <g-config-provider>
      <g-button @click="dialogVisible = true">Abrir Dialog con 3 Botones</g-button>
      <g-dialog
        v-model="dialogVisible"
        v-bind="args"
        title="Dialog con Tres Botones"
        :footer-buttons="[
          {
            text: 'Guardar',
            onClick: handleClose,
            variant: 'primary'
          },
          {
            text: 'Cancelar',
            onClick: () => dialogVisible = false,
            variant: 'secondary'
          },
          {
            text: 'Ver detalles',
            onClick: handleClose,
            variant: 'tertiary'
          }
        ]"
        @close="handleClose"
        append-to-body
      >
        <p>Este dialog muestra tres botones con distribución especial: dos en la primera fila y uno centrado abajo.</p>
      </g-dialog>
    </g-config-provider>
  `
})

export const ThreeButtonsLayout = ThreeButtonsTemplate.bind({})
ThreeButtonsLayout.args = {
  title: 'Dialog con Tres Botones',
  showClose: true
}
ThreeButtonsLayout.parameters = {
  docs: {
    description: {
      story:
        'Dialog con tres botones: dos en la primera fila y uno centrado abajo. En móviles, todos los botones se muestran en columna.'
    },
    source: {
      code: `
<template>
  <g-dialog
    v-model="dialogVisible"
    title="Dialog con Tres Botones"
    :footer-buttons="[
      {
        text: 'Guardar',
        onClick: handleClose,
        variant: 'primary'
      },
      {
        text: 'Cancelar',
        onClick: handleClose,
        variant: 'secondary'
      },
      {
        text: 'Ver detalles',
        onClick: handleClose,
        variant: 'tertiary'
      }
    ]"
    @close="handleClose"
  >
    <p>Este dialog muestra tres botones con distribución especial: dos en la primera fila y uno centrado abajo.</p>
  </g-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
</script>`,
      language: 'html',
      type: 'auto'
    }
  }
}

const SizeModeComparisonTemplate: StoryFn<typeof GDialog> = (args) => ({
  components: { GDialog, GConfigProvider, GButton },
  setup() {
    const defaultDialogVisible = ref(false)
    const fixedDialogVisible = ref(false)
    const adaptiveDialogVisible = ref(false)

    const closeDefaultDialog = () => {
      defaultDialogVisible.value = false
    }

    const closeFixedDialog = () => {
      fixedDialogVisible.value = false
    }

    const closeAdaptiveDialog = () => {
      adaptiveDialogVisible.value = false
    }

    return {
      args,
      defaultDialogVisible,
      fixedDialogVisible,
      adaptiveDialogVisible,
      closeDefaultDialog,
      closeFixedDialog,
      closeAdaptiveDialog
    }
  },
  template: `
    <g-config-provider>
      <div class="flex flex-wrap gap-4">
        <g-button @click="defaultDialogVisible = true">Modo Default</g-button>
        <g-button @click="fixedDialogVisible = true">Modo Fixed</g-button>
        <g-button @click="adaptiveDialogVisible = true">Modo Adaptive</g-button>
      </div>
      
      <!-- Dialog con modo DEFAULT -->
      <g-dialog
        v-model="defaultDialogVisible"
        title="Dialog - Modo Default"
        size-mode="default"
        :footer-buttons="[
          { text: 'Aceptar', onClick: closeDefaultDialog, variant: 'primary' },
          { text: 'Cancelar', onClick: closeDefaultDialog, variant: 'secondary' }
        ]"
        append-to-body
        @close="closeDefaultDialog"
      >
        <p>Este dialog utiliza el modo <strong>default</strong>. Tiene un ancho máximo predefinido y se ajusta a pantallas más pequeñas.</p>
      </g-dialog>
      
      <!-- Dialog con modo FIXED -->
      <g-dialog
        v-model="fixedDialogVisible"
        title="Dialog - Modo Fixed"
        size-mode="fixed"
        width="600px"
        :footer-buttons="[
          { text: 'Aceptar', onClick: closeFixedDialog, variant: 'primary' },
          { text: 'Cancelar', onClick: closeFixedDialog, variant: 'secondary' }
        ]"
        append-to-body
        @close="closeFixedDialog"
      >
        <p>Este dialog utiliza el modo <strong>fixed</strong> con un ancho de 600px. No tiene restricciones de ancho máximo, pero se adaptará en pantallas pequeñas.</p>
      </g-dialog>
      
      <!-- Dialog con modo ADAPTIVE -->
      <g-dialog
        v-model="adaptiveDialogVisible"
        title="Dialog - Modo Adaptive"
        size-mode="adaptive"
        :footer-buttons="[
          { text: 'Aceptar', onClick: closeAdaptiveDialog, variant: 'primary' },
          { text: 'Cancelar', onClick: closeAdaptiveDialog, variant: 'secondary' }
        ]"
        append-to-body
        @close="closeAdaptiveDialog"
      >
        <template #image>
          <img 
            src="https://placehold.co/600x300"
            alt="Imagen de ejemplo"
            class="rounded"
          />
        </template>
        <p>Este dialog utiliza el modo <strong>adaptive</strong>. Se adapta automáticamente al contenido, respetando un tamaño mínimo y máximo.</p>
      </g-dialog>
    </g-config-provider>
  `
})

export const SizeModeComparison = SizeModeComparisonTemplate.bind({})
SizeModeComparison.args = {
  showClose: true
}
SizeModeComparison.parameters = {
  docs: {
    description: {
      story: 'Comparativa de los tres modos de tamaño disponibles: default, fixed y adaptive.'
    },
    source: {
      code: `
<!-- MODO DEFAULT -->
<g-dialog
  v-model="dialogVisible"
  title="Dialog - Modo Default"
  size-mode="default"
  :footer-buttons="[
    { text: 'Aceptar', onClick: handleClose, variant: 'primary' },
    { text: 'Cancelar', onClick: handleClose, variant: 'secondary' }
  ]"
>
  <p>Este dialog utiliza el modo default con ancho máximo predefinido.</p>
</g-dialog>

<!-- MODO FIXED -->
<g-dialog
  v-model="dialogVisible"
  title="Dialog - Modo Fixed"
  size-mode="fixed"
  width="600px"
  :footer-buttons="[
    { text: 'Aceptar', onClick: handleClose, variant: 'primary' },
    { text: 'Cancelar', onClick: handleClose, variant: 'secondary' }
  ]"
>
  <p>Este dialog utiliza el modo fixed con un ancho específico de 600px.</p>
</g-dialog>

<!-- MODO ADAPTIVE -->
<g-dialog
  v-model="dialogVisible"
  title="Dialog - Modo Adaptive"
  size-mode="adaptive"
  :footer-buttons="[
    { text: 'Aceptar', onClick: handleClose, variant: 'primary' },
    { text: 'Cancelar', onClick: handleClose, variant: 'secondary' }
  ]"
>
  <template #image>
    <img src="https://placehold.co/600x300" alt="Imagen de ejemplo" class="rounded" />
  </template>
  <p>Este dialog utiliza el modo adaptive que se adapta al contenido.</p>
</g-dialog>`,
      language: 'html',
      type: 'auto'
    }
  }
}
