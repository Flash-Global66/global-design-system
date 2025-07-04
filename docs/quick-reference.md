# Quick Reference Guide

A concise reference for the Global66 Design System components and utilities.

## 📦 Installation

```bash
# Install specific components
npm install @flash-global66/g-button @flash-global66/g-input @flash-global66/g-form

# Or install the entire design system
npm install @flash-global66/global-design-system
```

## 🎨 Basic Setup

```typescript
// main.ts
import { createApp } from 'vue'
import { ConfigProvider } from '@flash-global66/g-config-provider'
import { es } from '@flash-global66/g-common/lang'

const app = createApp(App)

app.use(ConfigProvider, {
  locale: es,
  theme: 'global66'
})
```

## 🧱 Form Components

### Button
```vue
<g-button 
  variant="primary | secondary | tertiary"
  size="sm | md"
  title="Button Text"
  :disabled="false"
  :loading="false"
  :full="false"
  icon-left="solid save"
  icon-right="solid arrow-right"
  href="https://example.com"
  @click="handleClick"
/>
```

### Input
```vue
<g-input 
  v-model="value"
  type="text | email | password | number | tel | url"
  label="Field Label"
  placeholder="Enter text..."
  :disabled="false"
  :readonly="false"
  :loading="false"
  :maxlength="50"
  :show-word-limit="false"
  :show-password="false"
  prefix-icon="solid search"
  suffix-icon="solid times"
  help-text="Helper text"
  :message-error="errorMessage"
  @input="handleInput"
  @focus="handleFocus"
  @blur="handleBlur"
/>
```

### Form & FormItem
```vue
<g-form :model="formData" :rules="rules" ref="formRef">
  <g-form-item label="Username" prop="username">
    <g-input v-model="formData.username" />
  </g-form-item>
  
  <g-form-item>
    <g-button @click="submit">Submit</g-button>
  </g-form-item>
</g-form>
```

### Select
```vue
<g-select 
  v-model="selectedValue"
  :options="options"
  label="Select Option"
  placeholder="Choose..."
  :multiple="false"
  :filterable="false"
  :clearable="false"
  :disabled="false"
  :loading="false"
  @change="handleChange"
/>
```

### Checkbox & Radio
```vue
<!-- Checkbox -->
<g-checkbox 
  v-model="checked"
  label="Checkbox Label"
  :disabled="false"
  @change="handleChange"
/>

<!-- Radio Group -->
<g-radio-group v-model="radioValue">
  <g-radio value="option1">Option 1</g-radio>
  <g-radio value="option2">Option 2</g-radio>
</g-radio-group>
```

### Switch
```vue
<g-switch 
  v-model="switchValue"
  :disabled="false"
  :loading="false"
  active-text="On"
  inactive-text="Off"
  active-icon="solid check"
  inactive-icon="solid times"
  @change="handleChange"
/>
```

## 🗂️ Layout Components

### Dialog
```vue
<g-dialog 
  v-model="dialogVisible"
  title="Dialog Title"
  width="500px"
  :modal="true"
  :close-on-click-modal="true"
  :close-on-press-escape="true"
  @open="handleOpen"
  @close="handleClose"
>
  <p>Dialog content</p>
  
  <template #footer>
    <g-button @click="dialogVisible = false">Cancel</g-button>
    <g-button variant="primary" @click="confirm">Confirm</g-button>
  </template>
</g-dialog>
```

### Drawer
```vue
<g-drawer 
  v-model="drawerVisible"
  title="Drawer Title"
  direction="left | right | top | bottom"
  size="300px"
  @open="handleOpen"
  @close="handleClose"
>
  <p>Drawer content</p>
</g-drawer>
```

### Table
```vue
<g-table 
  :data="tableData"
  :columns="columns"
  :loading="false"
  :pagination="paginationConfig"
  @selection-change="handleSelection"
  @sort-change="handleSort"
/>
```

## 📢 Feedback Components

### Alert
```vue
<g-alert 
  type="success | warning | error | info"
  title="Alert Title"
  description="Alert description"
  :closable="true"
  :show-icon="true"
  @close="handleClose"
/>
```

### Toast
```vue
<!-- Programmatic usage -->
<script setup>
import { useToast } from '@flash-global66/g-toast'

const { showToast } = useToast()

const showSuccess = () => {
  showToast({
    type: 'success',
    title: 'Success!',
    message: 'Operation completed successfully'
  })
}
</script>
```

### Progress
```vue
<g-progress 
  :percentage="75"
  type="line | circle"
  :show-text="true"
  status="success | warning | error"
  :stroke-width="8"
/>
```

## 🎯 Display Components

### Avatar
```vue
<g-avatar 
  src="https://example.com/avatar.jpg"
  alt="User Avatar"
  size="small | medium | large"
  shape="circle | square"
/>
```

### Badge
```vue
<g-badge 
  :value="5"
  type="primary | success | warning | error"
  :max="99"
  :hidden="false"
>
  <g-button>Messages</g-button>
</g-badge>
```

### Tag
```vue
<g-tag 
  type="primary | success | warning | error"
  effect="light | dark | plain"
  size="small | medium | large"
  :closable="false"
  @close="handleClose"
>
  Tag Text
</g-tag>
```

## 🔧 Utility Components

### Tooltip
```vue
<g-tooltip 
  content="Tooltip text"
  placement="top | bottom | left | right"
  effect="dark | light"
  :disabled="false"
>
  <g-button>Hover me</g-button>
</g-tooltip>
```

### Popover
```vue
<g-popover 
  title="Popover Title"
  content="Popover content"
  trigger="click | hover | focus"
  placement="top | bottom | left | right"
  width="200px"
>
  <g-button>Click me</g-button>
</g-popover>
```

### Dropdown
```vue
<g-dropdown 
  trigger="click | hover"
  placement="bottom-start"
  @command="handleCommand"
>
  <g-button>Dropdown</g-button>
  
  <template #dropdown>
    <g-dropdown-menu>
      <g-dropdown-item command="action1">Action 1</g-dropdown-item>
      <g-dropdown-item command="action2">Action 2</g-dropdown-item>
    </g-dropdown-menu>
  </template>
</g-dropdown>
```

## 🗓️ Date & Time

### DatePicker
```vue
<g-date-picker 
  v-model="date"
  type="date | datetime | daterange | datetimerange"
  placeholder="Select date"
  format="YYYY-MM-DD"
  :disabled="false"
  :clearable="true"
  @change="handleDateChange"
/>
```

### TimePicker
```vue
<g-time-picker 
  v-model="time"
  placeholder="Select time"
  format="HH:mm:ss"
  :disabled="false"
  :clearable="true"
  @change="handleTimeChange"
/>
```

## 🖼️ Icon Usage

Icons use FontAwesome format: `"weight icon-name"`

```vue
<!-- Available weights -->
<g-icon-font name="solid home" />
<g-icon-font name="regular user" />
<g-icon-font name="light bell" />
<g-icon-font name="brands github" />
<g-icon-font name="duotone star" />

<!-- Common icons -->
<g-icon-font name="solid check" />      <!-- Success -->
<g-icon-font name="solid times" />      <!-- Close/Error -->
<g-icon-font name="solid exclamation-triangle" /> <!-- Warning -->
<g-icon-font name="solid info-circle" /> <!-- Info -->
<g-icon-font name="solid search" />     <!-- Search -->
<g-icon-font name="solid edit" />       <!-- Edit -->
<g-icon-font name="solid trash" />      <!-- Delete -->
<g-icon-font name="solid plus" />       <!-- Add -->
<g-icon-font name="solid download" />   <!-- Download -->
<g-icon-font name="solid upload" />     <!-- Upload -->
```

## 🎨 Theming

### Colors
```scss
// Primary colors
.text-blue-1   // #2C4398 - Primary brand
.text-blue-3   // #2746C7 - Medium blue
.text-blue-5   // #869EFF - Light blue

// Status colors
.text-green-1  // #00B682 - Success
.text-red-1    // #FF647C - Error
.text-yellow-1 // #FFD153 - Warning

// Neutral colors
.text-gray-1   // #343E68 - Dark text
.text-gray-6   // #B3BDE5 - Light text
.text-gray-9   // #F4F6FE - Background
```

### Shadows
```scss
.shadow-button    // Button shadow
.shadow-input     // Input shadow
.shadow-content   // Content shadow
.shadow-menu      // Menu shadow
```

## ⚡ Common Patterns

### Form Validation
```typescript
const rules = {
  username: [
    { required: true, message: 'Username is required' },
    { min: 3, max: 20, message: 'Username must be 3-20 characters' }
  ],
  email: [
    { required: true, message: 'Email is required' },
    { type: 'email', message: 'Please enter a valid email' }
  ],
  password: [
    { required: true, message: 'Password is required' },
    { min: 8, message: 'Password must be at least 8 characters' },
    {
      validator: (rule, value, callback) => {
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
          callback(new Error('Password must contain uppercase, lowercase, and number'))
        } else {
          callback()
        }
      }
    }
  ]
}
```

### Async Validation
```typescript
const rules = {
  username: [
    {
      asyncValidator: async (rule, value) => {
        if (!value) return
        const response = await fetch(`/api/check-username/${value}`)
        const { available } = await response.json()
        if (!available) {
          throw new Error('Username is already taken')
        }
      }
    }
  ]
}
```

### Form Methods
```typescript
// Form instance methods
formRef.value?.validate((valid, fields) => {
  if (valid) {
    console.log('Form is valid!')
  } else {
    console.log('Validation errors:', fields)
  }
})

formRef.value?.validateField('email', (errorMessage) => {
  if (errorMessage) {
    console.log('Email error:', errorMessage)
  }
})

formRef.value?.resetFields()
formRef.value?.clearValidate()
```

### Component Instance Methods
```typescript
// Input methods
inputRef.value?.focus()
inputRef.value?.blur()
inputRef.value?.select()

// Button methods  
buttonRef.value?.focus()
buttonRef.value?.blur()

// Dialog methods
dialogRef.value?.open()
dialogRef.value?.close()
```

## 📱 Responsive Design

```vue
<!-- Responsive classes -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- Content -->
</div>

<!-- Component responsive props -->
<g-button 
  :size="$store.state.isMobile ? 'sm' : 'md'"
  :full="$store.state.isMobile"
>
  Responsive Button
</g-button>
```

## 🛠️ Development Utilities

### TypeScript Support
```typescript
import type { 
  ButtonProps, 
  InputProps, 
  FormInstance,
  FormRules 
} from '@flash-global66/g-button'

// Component props
const props: ButtonProps = {
  variant: 'primary',
  size: 'md',
  disabled: false
}

// Form rules
const rules: FormRules = {
  email: [
    { required: true, message: 'Email is required' }
  ]
}
```

### Testing
```typescript
import { mount } from '@vue/test-utils'
import { GButton } from '@flash-global66/g-button'

const wrapper = mount(GButton, {
  props: { title: 'Test Button' }
})

expect(wrapper.text()).toBe('Test Button')
await wrapper.trigger('click')
expect(wrapper.emitted('click')).toHaveLength(1)
```

## 🔍 Debugging

### Common Issues
1. **Component not rendering**: Check if package is installed and imported correctly
2. **Styles not applied**: Ensure Tailwind CSS is configured with the theme
3. **Icons not showing**: Verify FontAwesome icons are available
4. **Form validation not working**: Check that `prop` attribute matches form data keys
5. **TypeScript errors**: Import types from the correct package

### Debug Tools
```vue
<script setup>
// Enable debug mode
const debugMode = import.meta.env.VITE_DEBUG_MODE === 'true'

// Log component props
if (debugMode) {
  console.log('Component props:', props)
}
</script>
```

---

## 📚 Full Documentation

For complete documentation with examples and advanced usage:

- [Main Documentation](./README.md)
- [Button Component](./components/button.md)
- [Input Component](./components/input.md)  
- [Form Component](./components/form.md)
- [Utilities & APIs](./api/utilities.md)

## 💬 Support

- **GitHub Issues**: [Submit an issue](https://github.com/Flash-Global66/global-design-system/issues)
- **Storybook**: Run `yarn storybook` for interactive examples
- **Discord**: Join our development community

---

**© 2024 Global66. All rights reserved.**