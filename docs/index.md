# Documentation Index

Welcome to the comprehensive documentation for the Global66 Design System. This documentation covers all public APIs, functions, and components with detailed examples and usage instructions.

## 📚 Documentation Structure

### Main Documentation
- **[README.md](./README.md)** - Complete overview of the design system, installation, getting started, and component catalog
- **[Quick Reference](./quick-reference.md)** - Concise reference guide for developers with common patterns and API signatures

### Component Documentation
- **[Button](./components/button.md)** - Primary action component with variants, states, and icon support
- **[Input](./components/input.md)** - Text input with validation, formatting, and various input types
- **[Form](./components/form.md)** - Form container with validation, state management, and complex form patterns

### API Documentation
- **[Utilities & APIs](./api/utilities.md)** - Utility functions, composables, theming system, and configuration APIs

## 🧩 Component Categories

### Form Components (11 components)
| Component | Package | Description |
|-----------|---------|-------------|
| [Button](./components/button.md) | `@flash-global66/g-button` | Primary action component |
| [Input](./components/input.md) | `@flash-global66/g-input` | Text input with validation |
| [Form](./components/form.md) | `@flash-global66/g-form` | Form container with validation |
| FormItem | `@flash-global66/g-form-item` | Individual form field wrapper |
| Select | `@flash-global66/g-select` | Dropdown selection component |
| Checkbox | `@flash-global66/g-checkbox` | Boolean selection component |
| Radio | `@flash-global66/g-radio` | Single selection from options |
| RadioGroup | `@flash-global66/g-radio-group` | Group of radio buttons |
| Switch | `@flash-global66/g-switch` | Toggle boolean state |
| SearchInput | `@flash-global66/g-search-input` | Input optimized for search |
| InputCode | `@flash-global66/g-input-code` | Code/PIN input component |

### Navigation Components (4 components)
| Component | Package | Description |
|-----------|---------|-------------|
| Menu | `@flash-global66/g-menu` | Navigation menu component |
| Pagination | `@flash-global66/g-pagination` | Page navigation controls |
| Link | `@flash-global66/g-link` | Styled link component |
| Segmented | `@flash-global66/g-segmented` | Segmented control navigation |

### Layout Components (6 components)
| Component | Package | Description |
|-----------|---------|-------------|
| Dialog | `@flash-global66/g-dialog` | Modal dialog component |
| DialogAlert | `@flash-global66/g-dialog-alert` | Alert dialog variant |
| Drawer | `@flash-global66/g-drawer` | Side panel component |
| Collapse | `@flash-global66/g-collapse` | Collapsible content panels |
| Table | `@flash-global66/g-table` | Data table with sorting/filtering |
| Scrollbar | `@flash-global66/g-scrollbar` | Custom scrollbar component |

### Feedback Components (5 components)
| Component | Package | Description |
|-----------|---------|-------------|
| Alert | `@flash-global66/g-alert` | Alert messages and notifications |
| Toast | `@flash-global66/g-toast` | Toast notification system |
| Progress | `@flash-global66/g-progress` | Progress indicator |
| Skeleton | `@flash-global66/g-skeleton` | Loading skeleton screens |
| Loader | `@flash-global66/g-loader` | Loading spinner component |

### Display Components (6 components)
| Component | Package | Description |
|-----------|---------|-------------|
| Avatar | `@flash-global66/g-avatar` | User avatar display |
| Badge | `@flash-global66/g-badge` | Status indicators and counts |
| Tag | `@flash-global66/g-tag` | Categorization tags |
| Icon | `@flash-global66/g-icon` | SVG icon component |
| IconFont | `@flash-global66/g-icon-font` | FontAwesome icon integration |
| Image | `@flash-global66/g-image` | Enhanced image component |

### Utility Components (8 components)
| Component | Package | Description |
|-----------|---------|-------------|
| Tooltip | `@flash-global66/g-tooltip` | Contextual help tooltips |
| Popover | `@flash-global66/g-popover` | Rich popover content |
| Dropdown | `@flash-global66/g-dropdown` | Dropdown menu component |
| DatePicker | `@flash-global66/g-date-picker` | Date selection component |
| TimePicker | `@flash-global66/g-time-picker` | Time selection component |
| AttachFile | `@flash-global66/g-attach-file` | File upload component |
| Teleport | `@flash-global66/g-teleport` | Portal/teleport utility |
| ConfigProvider | `@flash-global66/g-config-provider` | Global configuration |

### Advanced Components (5 components)
| Component | Package | Description |
|-----------|---------|-------------|
| InfiniteScroll | `@flash-global66/g-infinite-scroll` | Infinite scrolling directive |
| RovingFocusGroup | `@flash-global66/g-roving-focus-group` | Keyboard navigation utility |
| FocusTrap | `@flash-global66/g-focus-trap` | Focus management utility |
| Collection | `@flash-global66/g-collection` | Data collection utilities |
| Overlay | `@flash-global66/g-overlay` | Overlay backdrop component |

## 🛠️ API Reference

### Theming System
- **Color Palette** - Complete color system with semantic colors and variants
- **Typography** - Font families, sizes, and text utilities
- **Spacing & Layout** - Responsive breakpoints, spacing scale, and layout utilities
- **Shadows** - Elevation system with component-specific shadows

### Utility Functions
- **`useNamespace`** - BEM-style CSS class generation
- **`buildProps`** - Type-safe prop definition utility
- **Theme utilities** - `tGlobalTheme`, `tGlobalVariants`, `tGlobalPlugins`

### Type Definitions
- **Component Types** - Props, events, and instance types for all components
- **Form Types** - Validation rules, form data, and field types
- **Common Types** - Shared interfaces and utility types

### Configuration
- **Global Configuration** - ConfigProvider setup and options
- **Internationalization** - Language configuration and custom translations
- **Build Tools** - Component build configuration and TypeScript setup

## 📖 Usage Patterns

### Basic Setup
```typescript
import { createApp } from 'vue'
import { ConfigProvider } from '@flash-global66/g-config-provider'
import { es } from '@flash-global66/g-common/lang'

const app = createApp(App)
app.use(ConfigProvider, { locale: es, theme: 'global66' })
```

### Component Import
```typescript
import { GButton } from '@flash-global66/g-button'
import { GInput } from '@flash-global66/g-input'
import { GForm, GFormItem } from '@flash-global66/g-form'
```

### Form Pattern
```vue
<g-form :model="formData" :rules="rules" ref="formRef">
  <g-form-item label="Email" prop="email">
    <g-input v-model="formData.email" type="email" />
  </g-form-item>
  <g-button @click="submit">Submit</g-button>
</g-form>
```

## 🎯 Key Features

### ✅ Comprehensive Component Library
- **35+ Vue 3 Components** with consistent API design
- **TypeScript Support** with full type safety
- **Accessibility** built-in with ARIA compliance
- **Responsive Design** with mobile-first approach

### ✅ Developer Experience
- **Storybook Integration** for interactive documentation
- **Hot Module Replacement** for fast development
- **ESM/CJS Support** for flexible module usage
- **Tree Shaking** for optimized bundle sizes

### ✅ Design System
- **Consistent Design Tokens** across all components
- **Tailwind CSS Integration** with custom theme
- **Dark/Light Mode** support (planned)
- **Brand Customization** through theme configuration

### ✅ Form & Validation
- **Powerful Form System** with async-validator
- **Real-time Validation** with custom validators
- **Nested Object Support** for complex form structures
- **Error Handling** with accessible error messaging

## 🚀 Getting Started

1. **Installation**
   ```bash
   npm install @flash-global66/g-button @flash-global66/g-input @flash-global66/g-form
   ```

2. **Basic Usage**
   ```vue
   <template>
     <g-button variant="primary" @click="handleClick">
       Click me!
     </g-button>
   </template>
   ```

3. **Explore Examples**
   ```bash
   yarn storybook
   ```

## 📋 Documentation Checklist

### ✅ Completed Documentation
- [x] Main README with project overview
- [x] Component catalog with all 35+ components
- [x] Installation and setup instructions
- [x] Basic usage examples
- [x] Button component (complete with all variants, props, events)
- [x] Input component (complete with validation, formatting, icons)
- [x] Form component (complete with validation patterns)
- [x] Theming system documentation
- [x] Utility functions and APIs
- [x] TypeScript support and type definitions
- [x] Testing examples and patterns
- [x] Quick reference guide
- [x] Accessibility guidelines
- [x] Migration guides

### 📝 Additional Documentation (Future)
- [ ] Individual documentation for all remaining components
- [ ] Advanced patterns and recipes
- [ ] Performance optimization guide
- [ ] Contribution guidelines
- [ ] Design principles and guidelines
- [ ] Component design specs
- [ ] Integration guides for different frameworks
- [ ] Migration guides from other UI libraries

## 💡 Tips for Using This Documentation

1. **Start with the [Quick Reference](./quick-reference.md)** for immediate usage
2. **Use the [Main README](./README.md)** for comprehensive overview
3. **Check individual component docs** for detailed API reference
4. **Explore [Utilities & APIs](./api/utilities.md)** for advanced usage
5. **Run Storybook locally** for interactive examples

## 🤝 Contributing to Documentation

To improve this documentation:

1. **Report Issues** - Submit issues for unclear or missing documentation
2. **Suggest Improvements** - Propose better examples or explanations
3. **Add Examples** - Contribute real-world usage examples
4. **Update Content** - Keep documentation in sync with component updates

## 📞 Support

- **GitHub Issues**: [Submit documentation issues](https://github.com/Flash-Global66/global-design-system/issues)
- **Storybook**: Interactive component playground
- **Discord**: Join the development community

---

**Last Updated**: December 2024  
**Version**: 0.0.1  
**Contributors**: Global66 Design System Team

**© 2024 Global66. All rights reserved.**