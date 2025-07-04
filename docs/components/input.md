# Input Component

**Package:** `@flash-global66/g-input`

A flexible input component with built-in validation, formatting, icons, and various input types. Designed for forms with comprehensive accessibility and state management.

## Installation

```bash
npm install @flash-global66/g-input
# or
yarn add @flash-global66/g-input
```

## Basic Usage

```vue
<template>
  <div class="space-y-4">
    <!-- Basic input -->
    <g-input 
      v-model="name" 
      label="Full Name"
      placeholder="Enter your full name"
    />
    
    <!-- With validation -->
    <g-input 
      v-model="email"
      label="Email Address"
      type="email"
      placeholder="user@example.com"
      :message-error="emailError"
      help-text="We'll never share your email"
    />
    
    <!-- Password input -->
    <g-input 
      v-model="password"
      label="Password"
      type="password"
      show-password
      :maxlength="50"
      show-word-limit
    />
    
    <!-- With icons -->
    <g-input 
      v-model="search"
      label="Search"
      placeholder="Search products..."
      prefix-icon="solid search"
      suffix-icon="solid times"
      @suffix-click="clearSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { GInput } from '@flash-global66/g-input'

const name = ref('')
const email = ref('')
const password = ref('')
const search = ref('')

const emailError = computed(() => {
  if (!email.value) return ''
  if (!email.value.includes('@')) return 'Please enter a valid email'
  return ''
})

const clearSearch = () => {
  search.value = ''
}
</script>
```

## Props

### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string \| number \| null \| undefined` | `''` | The input value (v-model) |
| `type` | `string` | `'text'` | HTML input type |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `disabled` | `boolean` | `false` | Whether input is disabled |
| `readonly` | `boolean` | `false` | Whether input is read-only |
| `loading` | `boolean` | `false` | Whether input is in loading state |

### Labeling Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `undefined` | Label text displayed above input |
| `helpText` | `string` | `undefined` | Help text displayed below input |
| `messageError` | `string` | `undefined` | Error message displayed below input |

### Validation Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `maxlength` | `string \| number` | `50` | Maximum character length |
| `minlength` | `string \| number` | `undefined` | Minimum character length |
| `showWordLimit` | `boolean` | `false` | Show character count |
| `validateEvent` | `boolean` | `true` | Whether to trigger form validation |

### Icon Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `prefixIcon` | `IconString` | `''` | Icon displayed at the start of input |
| `suffixIcon` | `IconString` | `''` | Icon displayed at the end of input |

### Password Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showPassword` | `boolean` | `false` | Show toggle for password visibility |

### Formatting Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `formatter` | `Function` | `undefined` | Function to format displayed value |
| `parser` | `Function` | `undefined` | Function to parse input value |

### Behavior Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `autocomplete` | `string` | `'off'` | HTML autocomplete attribute |
| `autofocus` | `boolean` | `false` | Whether input gets focus on mount |
| `tabindex` | `string \| number` | `0` | Tab index for keyboard navigation |
| `form` | `string` | `undefined` | Associates input with form element |

### Accessibility Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | `undefined` | HTML id attribute |
| `ariaLabel` | `string` | `undefined` | Accessible label for screen readers |
| `containerRole` | `string` | `undefined` | ARIA role for container |

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `update:modelValue` | `(value: string)` | Emitted when value changes |
| `input` | `(value: string)` | Emitted on input event |
| `change` | `(value: string)` | Emitted when value changes and input loses focus |
| `focus` | `(event: FocusEvent)` | Emitted when input receives focus |
| `blur` | `(event: FocusEvent)` | Emitted when input loses focus |
| `clear` | `()` | Emitted when input is cleared |
| `click` | `(event: MouseEvent)` | Emitted when input is clicked |
| `keydown` | `(event: KeyboardEvent)` | Emitted on keydown |
| `mouseenter` | `(event: MouseEvent)` | Emitted when mouse enters |
| `mouseleave` | `(event: MouseEvent)` | Emitted when mouse leaves |
| `compositionstart` | `(event: CompositionEvent)` | Emitted when composition starts |
| `compositionupdate` | `(event: CompositionEvent)` | Emitted when composition updates |
| `compositionend` | `(event: CompositionEvent)` | Emitted when composition ends |

## Input Types

### Text Input
```vue
<g-input 
  v-model="textValue"
  label="Text Input"
  placeholder="Enter text..."
/>
```

### Email Input
```vue
<g-input 
  v-model="email"
  type="email"
  label="Email"
  placeholder="user@example.com"
  autocomplete="email"
/>
```

### Password Input
```vue
<g-input 
  v-model="password"
  type="password"
  label="Password"
  show-password
  autocomplete="new-password"
/>
```

### Number Input
```vue
<g-input 
  v-model="age"
  type="number"
  label="Age"
  placeholder="Enter your age"
/>
```

### URL Input
```vue
<g-input 
  v-model="website"
  type="url"
  label="Website"
  placeholder="https://example.com"
/>
```

### Phone Input
```vue
<g-input 
  v-model="phone"
  type="tel"
  label="Phone Number"
  placeholder="+1 (555) 123-4567"
  autocomplete="tel"
/>
```

## Validation

### Form Integration

```vue
<template>
  <g-form :model="formData" :rules="rules" ref="formRef">
    <g-form-item label="Username" prop="username">
      <g-input 
        v-model="formData.username"
        placeholder="Enter username"
        :maxlength="20"
        show-word-limit
      />
    </g-form-item>
    
    <g-form-item label="Email" prop="email">
      <g-input 
        v-model="formData.email"
        type="email"
        placeholder="Enter email"
      />
    </g-form-item>
    
    <g-button 
      type-native="submit"
      variant="primary"
      title="Submit"
      @click="handleSubmit"
    />
  </g-form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const formRef = ref()
const formData = reactive({
  username: '',
  email: ''
})

const rules = {
  username: [
    { required: true, message: 'Username is required' },
    { min: 3, max: 20, message: 'Username must be 3-20 characters' }
  ],
  email: [
    { required: true, message: 'Email is required' },
    { type: 'email', message: 'Please enter a valid email' }
  ]
}

const handleSubmit = () => {
  formRef.value?.validate((valid: boolean) => {
    if (valid) {
      console.log('Form is valid!', formData)
    }
  })
}
</script>
```

### Real-time Validation

```vue
<template>
  <div class="space-y-4">
    <g-input 
      v-model="email"
      type="email"
      label="Email Address"
      placeholder="user@example.com"
      :message-error="emailError"
      @blur="validateEmail"
    />
    
    <g-input 
      v-model="password"
      type="password"
      label="Password"
      show-password
      :message-error="passwordError"
      help-text="Must contain at least 8 characters"
      @input="validatePassword"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const emailError = ref('')
const passwordError = ref('')

const validateEmail = () => {
  if (!email.value) {
    emailError.value = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    emailError.value = 'Please enter a valid email'
  } else {
    emailError.value = ''
  }
}

const validatePassword = () => {
  if (password.value.length > 0 && password.value.length < 8) {
    passwordError.value = 'Password must be at least 8 characters'
  } else {
    passwordError.value = ''
  }
}
</script>
```

## Formatting

### Currency Input

```vue
<template>
  <g-input 
    v-model="price"
    label="Price"
    placeholder="0.00"
    :formatter="formatCurrency"
    :parser="parseCurrency"
    prefix-icon="solid dollar-sign"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const price = ref('')

const formatCurrency = (value: string) => {
  if (!value) return ''
  const num = parseFloat(value.replace(/[^\d.]/g, ''))
  return isNaN(num) ? '' : `$${num.toFixed(2)}`
}

const parseCurrency = (value: string) => {
  return value.replace(/[^\d.]/g, '')
}
</script>
```

### Phone Number Formatting

```vue
<template>
  <g-input 
    v-model="phone"
    label="Phone Number"
    type="tel"
    placeholder="(555) 123-4567"
    :formatter="formatPhone"
    :parser="parsePhone"
    :maxlength="14"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const phone = ref('')

const formatPhone = (value: string) => {
  const cleaned = value.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return value
}

const parsePhone = (value: string) => {
  return value.replace(/\D/g, '')
}
</script>
```

## Icons

### Prefix Icons

```vue
<template>
  <div class="space-y-4">
    <!-- Search input -->
    <g-input 
      v-model="search"
      label="Search"
      placeholder="Search..."
      prefix-icon="solid search"
    />
    
    <!-- User input -->
    <g-input 
      v-model="username"
      label="Username"
      placeholder="Enter username"
      prefix-icon="regular user"
    />
    
    <!-- Email input -->
    <g-input 
      v-model="email"
      type="email"
      label="Email"
      placeholder="user@example.com"
      prefix-icon="regular envelope"
    />
  </div>
</template>
```

### Suffix Icons with Actions

```vue
<template>
  <div class="space-y-4">
    <!-- Clearable input -->
    <g-input 
      v-model="clearableValue"
      label="Clearable Input"
      placeholder="Type to see clear button"
      :suffix-icon="clearableValue ? 'solid times' : ''"
      @suffix-click="clearableValue = ''"
    />
    
    <!-- Copy to clipboard -->
    <g-input 
      v-model="apiKey"
      label="API Key"
      readonly
      suffix-icon="regular copy"
      @suffix-click="copyToClipboard"
    />
    
    <!-- Show/hide password -->
    <g-input 
      v-model="password"
      :type="showPassword ? 'text' : 'password'"
      label="Custom Password Toggle"
      :suffix-icon="showPassword ? 'regular eye-slash' : 'regular eye'"
      @suffix-click="showPassword = !showPassword"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const clearableValue = ref('')
const apiKey = ref('sk-1234567890abcdef')
const password = ref('')
const showPassword = ref(false)

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(apiKey.value)
    console.log('Copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>
```

## States

### Disabled State

```vue
<g-input 
  v-model="disabledValue"
  label="Disabled Input"
  placeholder="Cannot edit"
  disabled
/>
```

### Loading State

```vue
<template>
  <g-input 
    v-model="loadingValue"
    label="Loading Input"
    placeholder="Loading data..."
    :loading="isLoading"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loadingValue = ref('')
const isLoading = ref(false)

const handleInput = () => {
  isLoading.value = true
  // Simulate API call
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
}
</script>
```

### Read-only State

```vue
<g-input 
  v-model="readonlyValue"
  label="Read-only Input"
  readonly
  help-text="This value cannot be modified"
/>
```

## Advanced Features

### Character Limit

```vue
<g-input 
  v-model="limitedText"
  label="Limited Text Input"
  placeholder="Max 100 characters"
  :maxlength="100"
  show-word-limit
  help-text="Describe your project in 100 characters or less"
/>
```

### Auto-complete

```vue
<template>
  <g-input 
    v-model="autocompleteValue"
    label="Auto-complete Input"
    placeholder="Start typing..."
    autocomplete="name"
    list="suggestions"
  />
  
  <datalist id="suggestions">
    <option value="John Doe" />
    <option value="Jane Smith" />
    <option value="Bob Johnson" />
  </datalist>
</template>
```

### Composition Events (for IME)

```vue
<template>
  <g-input 
    v-model="compositionValue"
    label="Composition Input"
    placeholder="Type in any language"
    @compositionstart="handleCompositionStart"
    @compositionupdate="handleCompositionUpdate"
    @compositionend="handleCompositionEnd"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const compositionValue = ref('')

const handleCompositionStart = (event: CompositionEvent) => {
  console.log('Composition started:', event.data)
}

const handleCompositionUpdate = (event: CompositionEvent) => {
  console.log('Composition updating:', event.data)
}

const handleCompositionEnd = (event: CompositionEvent) => {
  console.log('Composition ended:', event.data)
}
</script>
```

## Form Patterns

### Multi-step Form

```vue
<template>
  <div class="space-y-6">
    <div v-if="step === 1" class="space-y-4">
      <h3 class="text-lg font-semibold">Personal Information</h3>
      <g-input 
        v-model="form.firstName"
        label="First Name"
        placeholder="Enter first name"
        required
      />
      <g-input 
        v-model="form.lastName"
        label="Last Name"
        placeholder="Enter last name"
        required
      />
    </div>
    
    <div v-if="step === 2" class="space-y-4">
      <h3 class="text-lg font-semibold">Contact Information</h3>
      <g-input 
        v-model="form.email"
        type="email"
        label="Email"
        placeholder="user@example.com"
        required
      />
      <g-input 
        v-model="form.phone"
        type="tel"
        label="Phone"
        placeholder="(555) 123-4567"
      />
    </div>
    
    <div class="flex justify-between">
      <g-button 
        v-if="step > 1"
        variant="secondary"
        title="Previous"
        @click="step--"
      />
      <g-button 
        v-if="step < 2"
        variant="primary"
        title="Next"
        @click="step++"
      />
      <g-button 
        v-if="step === 2"
        variant="primary"
        title="Submit"
        @click="submitForm"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const step = ref(1)
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
})

const submitForm = () => {
  console.log('Form submitted:', form)
}
</script>
```

### Search with Debouncing

```vue
<template>
  <div>
    <g-input 
      v-model="searchQuery"
      label="Search Users"
      placeholder="Type to search..."
      prefix-icon="solid search"
      :loading="isSearching"
      @input="debouncedSearch"
    />
    
    <div v-if="searchResults.length" class="mt-4">
      <div 
        v-for="result in searchResults"
        :key="result.id"
        class="p-2 border-b"
      >
        {{ result.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { debounce } from 'lodash-es'

const searchQuery = ref('')
const searchResults = ref([])
const isSearching = ref(false)

const searchUsers = async (query: string) => {
  if (!query.trim()) {
    searchResults.value = []
    return
  }
  
  isSearching.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500))
    searchResults.value = [
      { id: 1, name: `Result for "${query}" 1` },
      { id: 2, name: `Result for "${query}" 2` }
    ]
  } finally {
    isSearching.value = false
  }
}

const debouncedSearch = debounce(searchUsers, 300)

watch(searchQuery, (newQuery) => {
  debouncedSearch(newQuery)
})
</script>
```

## Accessibility

The Input component includes comprehensive accessibility features:

- **Label Association**: Proper `for` and `id` attributes
- **ARIA Support**: Full ARIA attributes for screen readers
- **Keyboard Navigation**: Standard keyboard interaction
- **Error Announcement**: Error messages are announced to screen readers
- **Focus Management**: Proper focus indicators and management

### Screen Reader Support

```vue
<template>
  <div>
    <!-- Properly labeled input -->
    <g-input 
      v-model="accessibleInput"
      label="Accessible Input"
      help-text="This input is properly labeled"
      aria-label="Enter your full name for the contact form"
    />
    
    <!-- Input with error state -->
    <g-input 
      v-model="errorInput"
      label="Input with Error"
      :message-error="errorMessage"
      aria-describedby="error-description"
    />
    <div id="error-description" class="sr-only">
      {{ errorMessage }}
    </div>
  </div>
</template>
```

## Styling

The Input component uses Tailwind CSS with the Global66 design system.

### CSS Classes

```scss
.gui-input {
  // Base input styles
  
  &__label {
    // Label styles
  }
  
  &__wrapper {
    // Input wrapper styles
  }
  
  &__inner {
    // Input field styles
  }
  
  &__prefix {
    // Prefix icon styles
  }
  
  &__suffix {
    // Suffix icon styles
  }
  
  &__help-text {
    // Help text styles
  }
  
  &__error {
    // Error message styles
  }
  
  &.is-disabled {
    // Disabled state styles
  }
  
  &.is-error {
    // Error state styles
  }
}
```

## TypeScript Support

```typescript
import type { InputProps, InputInstance } from '@flash-global66/g-input'

// Component props type
const inputProps: InputProps = {
  modelValue: '',
  type: 'text',
  placeholder: 'Enter text...',
  disabled: false
}

// Component instance type
const inputRef = ref<InputInstance>()

// Access input methods
inputRef.value?.focus()
inputRef.value?.blur()
inputRef.value?.select()
```

## Testing

```typescript
import { mount } from '@vue/test-utils'
import { GInput } from '@flash-global66/g-input'

describe('GInput', () => {
  it('updates value on input', async () => {
    const wrapper = mount(GInput, {
      props: {
        modelValue: '',
        'onUpdate:modelValue': (value: string) => wrapper.setProps({ modelValue: value })
      }
    })
    
    const input = wrapper.find('input')
    await input.setValue('test value')
    
    expect(wrapper.props('modelValue')).toBe('test value')
  })
  
  it('shows error message', () => {
    const wrapper = mount(GInput, {
      props: {
        messageError: 'This field is required'
      }
    })
    
    expect(wrapper.text()).toContain('This field is required')
  })
})
```

---

**Related Components:**
- [Form](./form.md) - Form container and validation
- [FormItem](./form-item.md) - Form field wrapper
- [SearchInput](./search-input.md) - Specialized search input
- [InputCode](./input-code.md) - Code/PIN input component