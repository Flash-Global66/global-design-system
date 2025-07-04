# Button Component

**Package:** `@flash-global66/g-button`

A versatile button component with multiple variants, sizes, states, and icon support. Built with accessibility in mind and includes ripple effects for enhanced user interaction.

## Installation

```bash
npm install @flash-global66/g-button
# or
yarn add @flash-global66/g-button
```

## Basic Usage

```vue
<template>
  <div class="space-y-4">
    <!-- Basic buttons -->
    <g-button variant="primary" title="Primary Button" />
    <g-button variant="secondary" title="Secondary Button" />
    <g-button variant="tertiary" title="Tertiary Button" />
    
    <!-- With icons -->
    <g-button 
      variant="primary" 
      title="Save" 
      icon-left="solid save"
      @click="handleSave"
    />
    
    <!-- Loading state -->
    <g-button 
      variant="primary" 
      title="Loading..." 
      :loading="isLoading"
    />
    
    <!-- As link -->
    <g-button 
      variant="secondary"
      title="Visit Site"
      href="https://example.com"
      target="_blank"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GButton } from '@flash-global66/g-button'

const isLoading = ref(false)

const handleSave = () => {
  isLoading.value = true
  // Simulate async operation
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
</script>
```

## Props

### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Visual variant of the button |
| `size` | `'sm' \| 'md'` | `'md'` | Size of the button |
| `title` | `string` | `''` | Button text (takes precedence over slot) |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `loading` | `boolean` | `false` | Whether the button is in loading state |
| `full` | `boolean` | `false` | Whether the button should take full width |

### Icon Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `iconLeft` | `IconString` | `''` | Left icon using FontAwesome format (e.g., 'solid check') |
| `iconRight` | `IconString` | `''` | Right icon using FontAwesome format (e.g., 'solid arrow-right') |

### Link Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | `undefined` | URL to navigate to (converts button to anchor) |
| `target` | `string` | `undefined` | Where to open the link (`_blank`, `_self`, etc.) |
| `download` | `string` | `undefined` | Download attribute for file downloads |

### Behavior Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `typeNative` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type attribute |
| `autofocus` | `boolean` | `false` | Whether button gets focus on page load |
| `ariaLabel` | `string` | `''` | Accessible label for screen readers |

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `click` | `(event: MouseEvent)` | Fired when button is clicked (not when disabled) |
| `mousedown` | `(event: MouseEvent)` | Fired when mouse button is pressed down |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Button content (overridden by `title` prop) |

## Variants

### Primary
Used for the main call-to-action on a page.

```vue
<g-button variant="primary" title="Save Changes" />
<g-button variant="primary" title="Create Account" icon-left="solid plus" />
```

### Secondary
Used for secondary actions or as alternatives to the primary action.

```vue
<g-button variant="secondary" title="Cancel" />
<g-button variant="secondary" title="Learn More" icon-right="solid arrow-right" />
```

### Tertiary
Used for less prominent actions or when you need a button with minimal visual weight.

```vue
<g-button variant="tertiary" title="Skip" />
<g-button variant="tertiary" title="Back" icon-left="solid arrow-left" />
```

## Sizes

### Small (`sm`)
Compact button for smaller interfaces or secondary actions.

```vue
<g-button size="sm" variant="primary" title="Small Button" />
<g-button size="sm" variant="secondary" title="Cancel" />
```

### Medium (`md`)
Default size for most use cases.

```vue
<g-button size="md" variant="primary" title="Medium Button" />
<g-button size="md" variant="secondary" title="Cancel" />
```

## States

### Disabled
Prevents user interaction and shows disabled state.

```vue
<g-button variant="primary" title="Disabled" disabled />
<g-button variant="secondary" title="Disabled" disabled />
```

### Loading
Shows loading spinner and prevents interaction.

```vue
<template>
  <g-button 
    variant="primary" 
    title="Save Changes"
    :loading="isSaving"
    @click="saveData"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isSaving = ref(false)

const saveData = async () => {
  isSaving.value = true
  try {
    await api.saveData()
  } finally {
    isSaving.value = false
  }
}
</script>
```

## Icons

Icons are rendered using the FontAwesome integration. Specify icons using the format `"<weight> <icon-name>"`.

### Available Weights
- `solid` - Solid icons
- `regular` - Regular icons  
- `light` - Light icons
- `brands` - Brand icons
- `duotone` - Duotone icons

### Common Examples

```vue
<!-- Navigation icons -->
<g-button variant="tertiary" icon-left="solid arrow-left" title="Back" />
<g-button variant="primary" icon-right="solid arrow-right" title="Next" />

<!-- Action icons -->
<g-button variant="primary" icon-left="solid save" title="Save" />
<g-button variant="secondary" icon-left="solid download" title="Download" />
<g-button variant="tertiary" icon-left="solid trash" title="Delete" />

<!-- UI icons -->
<g-button variant="primary" icon-left="solid plus" title="Add Item" />
<g-button variant="secondary" icon-left="solid edit" title="Edit" />
<g-button variant="tertiary" icon-left="solid eye" title="View" />
```

## Link Behavior

When `href` is provided, the button renders as an anchor tag with button styling.

```vue
<!-- External link -->
<g-button 
  variant="primary"
  title="Visit Documentation"
  href="https://docs.example.com"
  target="_blank"
/>

<!-- File download -->
<g-button 
  variant="secondary"
  title="Download PDF"
  href="/files/document.pdf"
  download="document.pdf"
/>

<!-- Internal navigation -->
<g-button 
  variant="tertiary"
  title="Go to Settings"
  href="/settings"
/>
```

## Full Width

Use the `full` prop to make the button take the full width of its container.

```vue
<div class="w-full">
  <g-button 
    variant="primary" 
    title="Full Width Button"
    full
  />
</div>
```

## Form Integration

Buttons integrate seamlessly with forms and validation.

```vue
<template>
  <form @submit.prevent="handleSubmit">
    <g-form-item>
      <g-input v-model="email" placeholder="Email" />
    </g-form-item>
    
    <div class="flex gap-2">
      <g-button 
        type-native="submit"
        variant="primary"
        title="Submit"
        :loading="isSubmitting"
      />
      <g-button 
        type-native="button"
        variant="secondary"
        title="Reset"
        @click="resetForm"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  // Handle form submission
  setTimeout(() => {
    isSubmitting.value = false
  }, 2000)
}

const resetForm = () => {
  email.value = ''
}
</script>
```

## Accessibility

The button component includes comprehensive accessibility features:

- **Keyboard Navigation**: Full keyboard support with Enter and Space
- **Screen Reader Support**: Proper ARIA labels and roles
- **Focus Management**: Visible focus indicators
- **State Communication**: Loading and disabled states are announced

### ARIA Labels

```vue
<!-- Descriptive label for icon-only buttons -->
<g-button 
  variant="tertiary"
  icon-left="solid close"
  aria-label="Close dialog"
/>

<!-- Additional description -->
<g-button 
  variant="primary"
  title="Delete"
  aria-label="Delete selected items permanently"
/>
```

## Advanced Examples

### Confirmation Flow

```vue
<template>
  <div class="space-x-2">
    <g-button 
      v-if="!showConfirm"
      variant="tertiary"
      title="Delete Item"
      icon-left="solid trash"
      @click="showConfirm = true"
    />
    
    <template v-else>
      <g-button 
        variant="primary"
        title="Confirm Delete"
        :loading="isDeleting"
        @click="confirmDelete"
      />
      <g-button 
        variant="secondary"
        title="Cancel"
        @click="showConfirm = false"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showConfirm = ref(false)
const isDeleting = ref(false)

const confirmDelete = async () => {
  isDeleting.value = true
  // Perform deletion
  await new Promise(resolve => setTimeout(resolve, 1000))
  isDeleting.value = false
  showConfirm.value = false
}
</script>
```

### Button Group

```vue
<template>
  <div class="flex rounded-lg overflow-hidden border border-gray-7">
    <g-button 
      v-for="option in options"
      :key="option.value"
      :variant="activeOption === option.value ? 'primary' : 'tertiary'"
      :title="option.label"
      class="rounded-none border-0"
      @click="activeOption = option.value"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeOption = ref('grid')
const options = [
  { value: 'grid', label: 'Grid View' },
  { value: 'list', label: 'List View' },
  { value: 'card', label: 'Card View' }
]
</script>
```

## Styling

The button component uses Tailwind CSS classes with the Global66 design system. You can customize appearance through CSS custom properties or by extending the theme.

### CSS Classes

```scss
// Component uses BEM methodology
.gui-button {
  // Base button styles
  
  &--variant-primary {
    // Primary variant styles
  }
  
  &--variant-secondary {
    // Secondary variant styles  
  }
  
  &--variant-tertiary {
    // Tertiary variant styles
  }
  
  &--sm {
    // Small size styles
  }
  
  &--md {
    // Medium size styles
  }
  
  &.is-disabled {
    // Disabled state styles
  }
  
  &.is-loading {
    // Loading state styles
  }
}
```

## TypeScript Support

The component provides full TypeScript support with proper type definitions.

```typescript
import type { ButtonProps, ButtonInstance } from '@flash-global66/g-button'

// Component props type
const buttonProps: ButtonProps = {
  variant: 'primary',
  size: 'md',
  title: 'Click me',
  disabled: false
}

// Component instance type
const buttonRef = ref<ButtonInstance>()
```

## Testing

### Unit Testing

```typescript
import { mount } from '@vue/test-utils'
import { GButton } from '@flash-global66/g-button'

describe('GButton', () => {
  it('renders with correct variant', () => {
    const wrapper = mount(GButton, {
      props: {
        variant: 'primary',
        title: 'Test Button'
      }
    })
    
    expect(wrapper.classes()).toContain('gui-button--variant-primary')
    expect(wrapper.text()).toBe('Test Button')
  })
  
  it('emits click event', async () => {
    const wrapper = mount(GButton, {
      props: { title: 'Click me' }
    })
    
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
  
  it('does not emit when disabled', async () => {
    const wrapper = mount(GButton, {
      props: { 
        title: 'Click me',
        disabled: true
      }
    })
    
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
```

## Migration Guide

### From Element Plus Button

```vue
<!-- Element Plus -->
<el-button type="primary" size="small" loading>
  Save
</el-button>

<!-- Global66 Button -->
<g-button variant="primary" size="sm" loading title="Save" />
```

### Breaking Changes

- `type` prop renamed to `variant`
- `size` values changed: `small` → `sm`, `default` → `md`
- Icons use FontAwesome format instead of Element Plus icons
- Removed `round`, `circle`, and `plain` props
- New `title` prop for text content

---

**Related Components:**
- [IconButton](./icon-button.md) - Icon-only button variant
- [ButtonCard](./button-card.md) - Card-style button component
- [Link](./link.md) - Text link component