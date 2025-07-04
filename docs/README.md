# Global66 Design System Documentation

## 📚 Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Components](#components)
- [Theming System](#theming-system)
- [Internationalization](#internationalization)
- [API Reference](#api-reference)
- [Development](#development)

## Overview

The Global66 Design System is a comprehensive Vue 3 component library built with TypeScript, Tailwind CSS, and modern development tools. It provides a consistent set of reusable UI components, utilities, and design tokens for building web applications.

### Key Features

- **35+ Vue 3 Components** - Comprehensive UI component library
- **TypeScript Support** - Full type safety and IntelliSense
- **Tailwind CSS** - Utility-first styling with custom theme
- **Storybook Integration** - Interactive component documentation
- **Internationalization** - Built-in i18n support
- **Accessibility** - ARIA compliant components
- **Modern Tooling** - Vite, Lerna, ESM support

### Technology Stack

- **Vue 3** - Composition API, `<script setup>`, TypeScript
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS** - Styling and theming
- **Element Plus** - Base component utilities
- **Storybook** - Component documentation
- **Lerna** - Monorepo management
- **Vite** - Build tooling

## Installation

### Prerequisites

- Node.js 20+
- Yarn package manager
- Git

### Setup

1. **Clone the repository:**
```bash
git clone https://github.com/Flash-Global66/global-design-system.git
cd global-design-system
```

2. **Enable Yarn:**
```bash
corepack enable yarn
corepack use yarn@latest
```

3. **Install dependencies:**
```bash
yarn install
```

4. **Start development server:**
```bash
yarn storybook
```

### Package Installation

To use individual components in your project:

```bash
# Install specific components
npm install @flash-global66/g-button
npm install @flash-global66/g-input
npm install @flash-global66/g-form

# Or install via yarn
yarn add @flash-global66/g-button
```

## Getting Started

### Basic Usage

```vue
<template>
  <div>
    <!-- Button component -->
    <g-button 
      variant="primary" 
      size="md"
      title="Click me!"
      @click="handleClick"
    />
    
    <!-- Input component -->
    <g-input
      v-model="inputValue"
      placeholder="Enter text..."
      :error="inputError"
    />
    
    <!-- Form component -->
    <g-form :model="formData" :rules="formRules">
      <g-form-item label="Name" prop="name">
        <g-input v-model="formData.name" />
      </g-form-item>
    </g-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GButton } from '@flash-global66/g-button'
import { GInput } from '@flash-global66/g-input'
import { GForm, GFormItem } from '@flash-global66/g-form'

const inputValue = ref('')
const inputError = ref('')
const formData = ref({ name: '' })
const formRules = ref({
  name: [{ required: true, message: 'Name is required' }]
})

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

### Global Configuration

```ts
// main.ts
import { createApp } from 'vue'
import { ConfigProvider } from '@flash-global66/g-config-provider'
import { es } from '@flash-global66/g-common/lang'

const app = createApp(App)

// Configure theme and locale
app.use(ConfigProvider, {
  locale: es,
  theme: 'global66'
})
```

## Components

### Form Components

| Component | Package | Description |
|-----------|---------|-------------|
| [Button](#button) | `@flash-global66/g-button` | Primary action component with variants and states |
| [Input](#input) | `@flash-global66/g-input` | Text input with validation and formatting |
| [Checkbox](#checkbox) | `@flash-global66/g-checkbox` | Boolean selection component |
| [Radio](#radio) | `@flash-global66/g-radio` | Single selection from options |
| [RadioGroup](#radio-group) | `@flash-global66/g-radio-group` | Group of radio buttons |
| [Switch](#switch) | `@flash-global66/g-switch` | Toggle boolean state |
| [Select](#select) | `@flash-global66/g-select` | Dropdown selection component |
| [Form](#form) | `@flash-global66/g-form` | Form container with validation |
| [FormItem](#form-item) | `@flash-global66/g-form-item` | Individual form field wrapper |
| [SearchInput](#search-input) | `@flash-global66/g-search-input` | Input optimized for search |
| [InputCode](#input-code) | `@flash-global66/g-input-code` | Code/PIN input component |

### Navigation Components

| Component | Package | Description |
|-----------|---------|-------------|
| [Menu](#menu) | `@flash-global66/g-menu` | Navigation menu component |
| [Pagination](#pagination) | `@flash-global66/g-pagination` | Page navigation controls |
| [Link](#link) | `@flash-global66/g-link` | Styled link component |
| [Segmented](#segmented) | `@flash-global66/g-segmented` | Segmented control navigation |

### Layout Components

| Component | Package | Description |
|-----------|---------|-------------|
| [Dialog](#dialog) | `@flash-global66/g-dialog` | Modal dialog component |
| [DialogAlert](#dialog-alert) | `@flash-global66/g-dialog-alert` | Alert dialog variant |
| [Drawer](#drawer) | `@flash-global66/g-drawer` | Side panel component |
| [Collapse](#collapse) | `@flash-global66/g-collapse` | Collapsible content panels |
| [Table](#table) | `@flash-global66/g-table` | Data table with sorting/filtering |
| [Scrollbar](#scrollbar) | `@flash-global66/g-scrollbar` | Custom scrollbar component |

### Feedback Components

| Component | Package | Description |
|-----------|---------|-------------|
| [Alert](#alert) | `@flash-global66/g-alert` | Alert messages and notifications |
| [Toast](#toast) | `@flash-global66/g-toast` | Toast notification system |
| [Progress](#progress) | `@flash-global66/g-progress` | Progress indicator |
| [Skeleton](#skeleton) | `@flash-global66/g-skeleton` | Loading skeleton screens |
| [Loader](#loader) | `@flash-global66/g-loader` | Loading spinner component |

### Display Components

| Component | Package | Description |
|-----------|---------|-------------|
| [Avatar](#avatar) | `@flash-global66/g-avatar` | User avatar display |
| [Badge](#badge) | `@flash-global66/g-badge` | Status indicators and counts |
| [Tag](#tag) | `@flash-global66/g-tag` | Categorization tags |
| [Icon](#icon) | `@flash-global66/g-icon` | SVG icon component |
| [IconFont](#icon-font) | `@flash-global66/g-icon-font` | FontAwesome icon integration |
| [Image](#image) | `@flash-global66/g-image` | Enhanced image component |

### Utility Components

| Component | Package | Description |
|-----------|---------|-------------|
| [Tooltip](#tooltip) | `@flash-global66/g-tooltip` | Contextual help tooltips |
| [Popover](#popover) | `@flash-global66/g-popover` | Rich popover content |
| [Dropdown](#dropdown) | `@flash-global66/g-dropdown` | Dropdown menu component |
| [DatePicker](#date-picker) | `@flash-global66/g-date-picker` | Date selection component |
| [TimePicker](#time-picker) | `@flash-global66/g-time-picker` | Time selection component |
| [AttachFile](#attach-file) | `@flash-global66/g-attach-file` | File upload component |
| [Teleport](#teleport) | `@flash-global66/g-teleport` | Portal/teleport utility |
| [ConfigProvider](#config-provider) | `@flash-global66/g-config-provider` | Global configuration |

### Advanced Components

| Component | Package | Description |
|-----------|---------|-------------|
| [InfiniteScroll](#infinite-scroll) | `@flash-global66/g-infinite-scroll` | Infinite scrolling directive |
| [RovingFocusGroup](#roving-focus-group) | `@flash-global66/g-roving-focus-group` | Keyboard navigation utility |
| [FocusTrap](#focus-trap) | `@flash-global66/g-focus-trap` | Focus management utility |
| [Collection](#collection) | `@flash-global66/g-collection` | Data collection utilities |
| [Overlay](#overlay) | `@flash-global66/g-overlay` | Overlay backdrop component |

## Theming System

The design system uses a comprehensive theming system built on Tailwind CSS with custom design tokens.

### Color Palette

```typescript
// Available color families
const colors = {
  blue: {
    1: '#2C4398',    // Primary brand blue
    2: '#1433B4',    // Dark blue
    3: '#2746C7',    // Medium blue
    4: '#3F5EDF',    // Light blue
    5: '#869EFF',    // Lighter blue
    // ... more variants
  },
  gray: {
    1: '#343E68',    // Dark gray
    2: '#4F5A95',    // Medium gray
    3: '#5D6EB5',    // Light gray
    // ... more variants
  },
  green: {
    1: '#00B682',    // Success green
    2: '#00C48C',    // Success light
    // ... more variants
  },
  red: {
    1: '#FF647C',    // Error red
    2: '#FFB1BD',    // Error light
    // ... more variants
  },
  yellow: {
    1: '#FFD153',    // Warning yellow
    2: '#FCE5A9',    // Warning light
    // ... more variants
  }
}
```

### Typography

```scss
// Font families
.font-montserrat { font-family: 'Montserrat', sans-serif; }

// Font sizes
.text-8px { font-size: 8px; }
.text-13px { font-size: 13px; }
```

### Shadows

```scss
// Custom shadows
.shadow-content { box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04); }
.shadow-button { box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1); }
.shadow-input { box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04); }
```

## Internationalization

The design system includes built-in internationalization support.

### Available Locales

- **Spanish (es)** - Complete translation
- **English (en)** - Partial support

### Usage

```typescript
import { es } from '@flash-global66/g-common/lang'

// Configure locale globally
app.use(ConfigProvider, {
  locale: es
})

// Available translations include:
// - Date picker labels
// - Form validation messages
// - Common UI text
```

### Date Picker Translations

```typescript
const es = {
  datepicker: {
    now: "Ahora",
    today: "Hoy", 
    cancel: "Cancelar",
    clear: "Limpiar",
    confirm: "Aceptar",
    // ... more translations
  }
}
```

## API Reference

### Component Props Patterns

All components follow consistent prop patterns:

#### Size Props
```typescript
type Size = 'sm' | 'md' | 'lg'
```

#### Variant Props
```typescript
type Variant = 'primary' | 'secondary' | 'tertiary'
```

#### State Props
```typescript
interface StateProps {
  disabled?: boolean
  loading?: boolean
  error?: boolean
}
```

#### Accessibility Props
```typescript
interface A11yProps {
  ariaLabel?: string
  ariaDescribedBy?: string
  role?: string
}
```

### Common Utilities

#### Namespace Utility
```typescript
import { useNamespace } from 'element-plus'

// Creates BEM-style CSS classes
const ns = useNamespace('button', ref('gui'))
ns.b() // 'gui-button'
ns.m('primary') // 'gui-button--primary'
ns.e('content') // 'gui-button__content'
ns.is('disabled', true) // 'is-disabled'
```

#### Build Props Utility
```typescript
import { buildProps } from 'element-plus/es/utils'

// Type-safe prop definitions
export const componentProps = buildProps({
  size: {
    type: String as PropType<Size>,
    default: 'md'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
```

## Development

### Project Structure

```
global-design-system/
├── components/                 # Individual component packages
│   ├── button/                # Button component
│   │   ├── src/              # Source files
│   │   ├── index.ts          # Main export
│   │   └── package.json      # Package definition
│   └── ...                   # Other components
├── common/                    # Shared utilities
│   ├── lang/                 # Internationalization
│   └── tailwind/             # Theme configuration
├── stories/                   # Storybook stories
├── docs/                     # Documentation
└── scripts/                  # Build scripts
```

### Build Commands

```bash
# Build all components
yarn build

# Build TypeScript definitions
yarn build:types

# Start Storybook
yarn storybook

# Build Storybook
yarn build-storybook
```

### Component Development

1. **Create component directory** in `components/`
2. **Define props and types** in `src/component.ts`
3. **Implement component** in `src/component.vue`
4. **Export component** in `index.ts`
5. **Add Storybook story** in `stories/`
6. **Write tests** (if applicable)

### Publishing

Components are published to GitHub Package Registry:

```bash
# Publish all updated packages
yarn build:publish
```

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests and documentation
5. Submit a pull request

For detailed contributing guidelines, see the project README.

---

**© 2024 Global66. All rights reserved.**