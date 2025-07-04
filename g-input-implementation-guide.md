# G-Input Implementation Guide

## Installation

If you're using the component from the workspace:
```bash
yarn add @flash-global66/g-input
```

## Basic Implementation

### 1. Import the Component

```typescript
import { GInput } from '@flash-global66/g-input'
// Import styles if not globally imported
import '@flash-global66/g-input/input.styles.scss'
```

### 2. Simple Usage

```vue
<template>
  <g-input 
    v-model="inputValue" 
    label="Your Label" 
    placeholder="Enter text..."
  />
</template>

<script setup>
import { ref } from 'vue'
import { GInput } from '@flash-global66/g-input'

const inputValue = ref('')
</script>
```

## Available Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `v-model` | `string \| number \| null` | - | Two-way binding for input value |
| `label` | `string` | - | Floating label text |
| `placeholder` | `string` | - | Placeholder text |
| `type` | `string` | `'text'` | Input type: text, password, email, number, tel, url |
| `prefixIcon` | `string` | - | Icon at the start of input |
| `suffixIcon` | `string` | - | Icon at the end of input |
| `showPassword` | `boolean` | `false` | Toggle password visibility |
| `loading` | `boolean` | `false` | Show loading state |
| `disabled` | `boolean` | `false` | Disable input |
| `readonly` | `boolean` | `false` | Make input readonly |
| `maxlength` | `number` | - | Maximum character length |
| `minlength` | `string \| number` | - | Minimum character length |
| `showWordLimit` | `boolean` | `false` | Show character counter |
| `helpText` | `string` | - | Helper text below input |
| `messageError` | `string` | - | Error message |
| `formatter` | `(value: string) => string` | - | Format display value |
| `parser` | `(value: string) => string` | - | Parse value before emit |
| `autofocus` | `boolean` | `false` | Auto-focus on mount |
| `validateEvent` | `boolean` | `true` | Trigger form validation |

## Common Use Cases

### 1. Email Input with Validation
```vue
<g-input 
  v-model="email" 
  label="Email" 
  type="email"
  prefix-icon="regular envelope"
  :message-error="emailError"
/>
```

### 2. Password with Toggle
```vue
<g-input 
  v-model="password" 
  label="Password" 
  type="password"
  show-password
  prefix-icon="regular lock"
/>
```

### 3. Phone Number with Formatter
```vue
<g-input 
  v-model="phone" 
  label="Phone" 
  type="tel"
  :formatter="formatPhone"
  :parser="parsePhone"
/>
```

### 4. Input with Character Limit
```vue
<g-input 
  v-model="bio" 
  label="Bio" 
  :maxlength="200"
  show-word-limit
  help-text="Tell us about yourself"
/>
```

### 5. Currency Input with Slots
```vue
<g-input 
  v-model="price" 
  label="Price" 
  type="number"
>
  <template #prefix>
    <span>$</span>
  </template>
  <template #suffix>
    <span>USD</span>
  </template>
</g-input>
```

## Available Slots

- `prefix`: Content before the input field
- `suffix`: Content after the input field

## Exposed Methods

When using ref on g-input, you can access these methods:

```vue
<template>
  <g-input ref="inputRef" v-model="value" />
</template>

<script setup>
import { ref } from 'vue'

const inputRef = ref()
const value = ref('')

// Available methods:
// inputRef.value.focus()    - Focus the input
// inputRef.value.blur()     - Blur the input
// inputRef.value.select()   - Select all text
// inputRef.value.clear()    - Clear the input
</script>
```

## Form Integration

G-Input works seamlessly with form components:

```vue
<g-form @submit="handleSubmit">
  <g-form-item prop="username" label="Username">
    <g-input v-model="form.username" />
  </g-form-item>
  
  <g-form-item prop="email" label="Email">
    <g-input v-model="form.email" type="email" />
  </g-form-item>
</g-form>
```

## Styling

The component uses CSS classes that can be customized:
- `.g-input`: Main container
- `.g-input__wrapper`: Input wrapper
- `.g-input__inner`: The actual input element
- `.g-input__prefix`: Prefix content area
- `.g-input__suffix`: Suffix content area

## Icons

The component supports FontAwesome icons. Use the format:
- `regular <icon-name>` for regular icons
- `solid <icon-name>` for solid icons
- `light <icon-name>` for light icons

Example: `prefix-icon="regular user"`, `suffix-icon="solid search"`