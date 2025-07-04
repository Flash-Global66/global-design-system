# Form Component

**Package:** `@flash-global66/g-form`

A powerful form container component that provides data binding, validation, and state management for complex forms. Built on async-validator with comprehensive error handling and accessibility features.

## Installation

```bash
npm install @flash-global66/g-form
# or
yarn add @flash-global66/g-form
```

## Basic Usage

```vue
<template>
  <g-form 
    :model="formData" 
    :rules="validationRules"
    ref="formRef"
    @validate="handleValidation"
  >
    <g-form-item label="Username" prop="username">
      <g-input 
        v-model="formData.username"
        placeholder="Enter username"
      />
    </g-form-item>
    
    <g-form-item label="Email" prop="email">
      <g-input 
        v-model="formData.email"
        type="email"
        placeholder="user@example.com"
      />
    </g-form-item>
    
    <g-form-item label="Password" prop="password">
      <g-input 
        v-model="formData.password"
        type="password"
        show-password
      />
    </g-form-item>
    
    <g-form-item>
      <g-button 
        type-native="submit"
        variant="primary"
        title="Create Account"
        :loading="isSubmitting"
        @click="handleSubmit"
      />
      <g-button 
        variant="secondary"
        title="Reset"
        @click="resetForm"
      />
    </g-form-item>
  </g-form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { GForm, GFormItem } from '@flash-global66/g-form'
import { GInput } from '@flash-global66/g-input'
import { GButton } from '@flash-global66/g-button'

const formRef = ref()
const isSubmitting = ref(false)

const formData = reactive({
  username: '',
  email: '',
  password: ''
})

const validationRules = {
  username: [
    { required: true, message: 'Username is required' },
    { min: 3, max: 20, message: 'Username must be 3-20 characters' }
  ],
  email: [
    { required: true, message: 'Email is required' },
    { type: 'email', message: 'Please enter a valid email address' }
  ],
  password: [
    { required: true, message: 'Password is required' },
    { min: 8, message: 'Password must be at least 8 characters' }
  ]
}

const handleSubmit = () => {
  formRef.value?.validate((valid: boolean) => {
    if (valid) {
      isSubmitting.value = true
      // Submit form data
      console.log('Submitting:', formData)
      setTimeout(() => {
        isSubmitting.value = false
      }, 2000)
    }
  })
}

const resetForm = () => {
  formRef.value?.resetFields()
}

const handleValidation = (prop: string, isValid: boolean, message: string) => {
  console.log(`Field ${prop} validation:`, { isValid, message })
}
</script>
```

## Props

### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `model` | `object` | `undefined` | Form data object containing all field values |
| `rules` | `FormRules` | `undefined` | Validation rules object |
| `disabled` | `boolean` | `false` | Whether to disable all form components |

### Validation Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `validateOnRuleChange` | `boolean` | `true` | Whether to trigger validation when rules change |
| `scrollToError` | `boolean` | `false` | Scroll to first error field on validation failure |
| `scrollIntoViewOptions` | `object \| boolean` | `undefined` | Options for scrollIntoView behavior |

## Events

| Event | Parameters | Description |
|-------|------------|-------------|
| `validate` | `(prop: string, isValid: boolean, message: string)` | Emitted when a field is validated |

## Form Instance Methods

The form component exposes several methods through template refs:

```typescript
interface FormInstance {
  validate: (callback?: (valid: boolean, fields?: any) => void) => Promise<boolean>
  validateField: (props: string | string[], callback?: (errorMessage?: string) => void) => void
  resetFields: (props?: string | string[]) => void
  scrollToField: (prop: string) => void
  clearValidate: (props?: string | string[]) => void
}
```

### Method Examples

```vue
<template>
  <g-form ref="formRef" :model="formData" :rules="rules">
    <!-- Form items -->
  </g-form>
  
  <div class="space-x-2">
    <g-button @click="validateAll">Validate All</g-button>
    <g-button @click="validateEmail">Validate Email</g-button>
    <g-button @click="resetForm">Reset Form</g-button>
    <g-button @click="clearErrors">Clear Errors</g-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formRef = ref()

// Validate entire form
const validateAll = () => {
  formRef.value?.validate((valid, fields) => {
    if (valid) {
      console.log('Form is valid!')
    } else {
      console.log('Validation errors:', fields)
    }
  })
}

// Validate specific field
const validateEmail = () => {
  formRef.value?.validateField('email', (errorMessage) => {
    if (errorMessage) {
      console.log('Email validation error:', errorMessage)
    } else {
      console.log('Email is valid!')
    }
  })
}

// Reset all fields
const resetForm = () => {
  formRef.value?.resetFields()
}

// Clear validation errors
const clearErrors = () => {
  formRef.value?.clearValidate()
}
</script>
```

## Validation Rules

The form uses [async-validator](https://github.com/yiminghe/async-validator) for validation. Rules are defined per field.

### Basic Rules

```typescript
const rules = {
  // Required field
  username: [
    { required: true, message: 'Username is required' }
  ],
  
  // Type validation
  email: [
    { type: 'email', message: 'Please enter a valid email' }
  ],
  
  // Length validation
  password: [
    { min: 8, max: 20, message: 'Password must be 8-20 characters' }
  ],
  
  // Number validation
  age: [
    { type: 'number', min: 18, max: 100, message: 'Age must be 18-100' }
  ],
  
  // Array validation
  tags: [
    { type: 'array', min: 1, message: 'Please select at least one tag' }
  ]
}
```

### Custom Validators

```typescript
const rules = {
  username: [
    { required: true, message: 'Username is required' },
    {
      validator: (rule, value, callback) => {
        if (!/^[a-zA-Z0-9_]+$/.test(value)) {
          callback(new Error('Username can only contain letters, numbers, and underscores'))
        } else {
          callback()
        }
      }
    }
  ],
  
  password: [
    { required: true, message: 'Password is required' },
    {
      validator: (rule, value, callback) => {
        const hasUpper = /[A-Z]/.test(value)
        const hasLower = /[a-z]/.test(value)
        const hasNumber = /\d/.test(value)
        
        if (!hasUpper || !hasLower || !hasNumber) {
          callback(new Error('Password must contain uppercase, lowercase, and number'))
        } else {
          callback()
        }
      }
    }
  ],
  
  confirmPassword: [
    { required: true, message: 'Please confirm your password' },
    {
      validator: (rule, value, callback) => {
        if (value !== formData.password) {
          callback(new Error('Passwords do not match'))
        } else {
          callback()
        }
      }
    }
  ]
}
```

### Async Validators

```typescript
const rules = {
  username: [
    { required: true, message: 'Username is required' },
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
  ],
  
  email: [
    { required: true, message: 'Email is required' },
    { type: 'email', message: 'Please enter a valid email' },
    {
      asyncValidator: async (rule, value) => {
        if (!value) return
        
        try {
          await api.validateEmail(value)
        } catch (error) {
          throw new Error('Email address is not valid')
        }
      }
    }
  ]
}
```

## Form Patterns

### Registration Form

```vue
<template>
  <g-form 
    :model="registration" 
    :rules="registrationRules"
    ref="registrationForm"
    class="max-w-md mx-auto space-y-6"
  >
    <div class="text-center mb-6">
      <h2 class="text-2xl font-bold">Create Account</h2>
      <p class="text-gray-6 mt-2">Join our platform today</p>
    </div>
    
    <g-form-item label="Full Name" prop="fullName">
      <g-input 
        v-model="registration.fullName"
        placeholder="Enter your full name"
        prefix-icon="regular user"
      />
    </g-form-item>
    
    <g-form-item label="Email Address" prop="email">
      <g-input 
        v-model="registration.email"
        type="email"
        placeholder="user@example.com"
        prefix-icon="regular envelope"
        autocomplete="email"
      />
    </g-form-item>
    
    <g-form-item label="Password" prop="password">
      <g-input 
        v-model="registration.password"
        type="password"
        placeholder="Create a strong password"
        show-password
        :maxlength="50"
        show-word-limit
      />
    </g-form-item>
    
    <g-form-item label="Confirm Password" prop="confirmPassword">
      <g-input 
        v-model="registration.confirmPassword"
        type="password"
        placeholder="Confirm your password"
        show-password
      />
    </g-form-item>
    
    <g-form-item prop="agreeToTerms">
      <g-checkbox 
        v-model="registration.agreeToTerms"
        label="I agree to the Terms of Service and Privacy Policy"
      />
    </g-form-item>
    
    <g-form-item>
      <g-button 
        variant="primary"
        title="Create Account"
        :loading="isCreating"
        full
        @click="handleRegistration"
      />
    </g-form-item>
  </g-form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const registrationForm = ref()
const isCreating = ref(false)

const registration = reactive({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false
})

const registrationRules = {
  fullName: [
    { required: true, message: 'Full name is required' },
    { min: 2, message: 'Name must be at least 2 characters' }
  ],
  email: [
    { required: true, message: 'Email is required' },
    { type: 'email', message: 'Please enter a valid email address' }
  ],
  password: [
    { required: true, message: 'Password is required' },
    { min: 8, message: 'Password must be at least 8 characters' },
    {
      validator: (rule, value, callback) => {
        const hasUpper = /[A-Z]/.test(value)
        const hasLower = /[a-z]/.test(value)
        const hasNumber = /\d/.test(value)
        
        if (!hasUpper || !hasLower || !hasNumber) {
          callback(new Error('Password must contain uppercase, lowercase, and number'))
        } else {
          callback()
        }
      }
    }
  ],
  confirmPassword: [
    { required: true, message: 'Please confirm your password' },
    {
      validator: (rule, value, callback) => {
        if (value !== registration.password) {
          callback(new Error('Passwords do not match'))
        } else {
          callback()
        }
      }
    }
  ],
  agreeToTerms: [
    {
      validator: (rule, value, callback) => {
        if (!value) {
          callback(new Error('You must agree to the terms'))
        } else {
          callback()
        }
      }
    }
  ]
}

const handleRegistration = () => {
  registrationForm.value?.validate(async (valid) => {
    if (valid) {
      isCreating.value = true
      try {
        // Register user
        await api.register(registration)
        console.log('Account created successfully!')
      } catch (error) {
        console.error('Registration failed:', error)
      } finally {
        isCreating.value = false
      }
    }
  })
}
</script>
```

### Dynamic Form Fields

```vue
<template>
  <g-form :model="dynamicForm" :rules="dynamicRules" ref="formRef">
    <g-form-item label="Project Name" prop="projectName">
      <g-input v-model="dynamicForm.projectName" />
    </g-form-item>
    
    <!-- Dynamic team members -->
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold">Team Members</h3>
        <g-button 
          variant="secondary"
          title="Add Member"
          icon-left="solid plus"
          @click="addTeamMember"
        />
      </div>
      
      <div 
        v-for="(member, index) in dynamicForm.teamMembers"
        :key="member.id"
        class="p-4 border border-gray-7 rounded-lg space-y-4"
      >
        <div class="flex justify-between items-center">
          <h4 class="font-medium">Member {{ index + 1 }}</h4>
          <g-button 
            v-if="dynamicForm.teamMembers.length > 1"
            variant="tertiary"
            icon-left="solid trash"
            aria-label="Remove member"
            @click="removeTeamMember(index)"
          />
        </div>
        
        <div class="grid grid-cols-2 gap-4">
          <g-form-item 
            :label="`Name ${index + 1}`"
            :prop="`teamMembers.${index}.name`"
          >
            <g-input 
              v-model="member.name"
              placeholder="Full name"
            />
          </g-form-item>
          
          <g-form-item 
            :label="`Email ${index + 1}`"
            :prop="`teamMembers.${index}.email`"
          >
            <g-input 
              v-model="member.email"
              type="email"
              placeholder="user@example.com"
            />
          </g-form-item>
        </div>
        
        <g-form-item 
          :label="`Role ${index + 1}`"
          :prop="`teamMembers.${index}.role`"
        >
          <g-select 
            v-model="member.role"
            :options="roleOptions"
            placeholder="Select role"
          />
        </g-form-item>
      </div>
    </div>
    
    <g-form-item>
      <g-button 
        variant="primary"
        title="Create Project"
        @click="handleSubmit"
      />
    </g-form-item>
  </g-form>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const formRef = ref()
let memberIdCounter = 1

const dynamicForm = reactive({
  projectName: '',
  teamMembers: [
    { id: memberIdCounter++, name: '', email: '', role: '' }
  ]
})

const roleOptions = [
  { label: 'Developer', value: 'developer' },
  { label: 'Designer', value: 'designer' },
  { label: 'Manager', value: 'manager' },
  { label: 'QA', value: 'qa' }
]

const dynamicRules = computed(() => {
  const rules = {
    projectName: [
      { required: true, message: 'Project name is required' }
    ]
  }
  
  // Add rules for each team member
  dynamicForm.teamMembers.forEach((_, index) => {
    rules[`teamMembers.${index}.name`] = [
      { required: true, message: 'Name is required' }
    ]
    rules[`teamMembers.${index}.email`] = [
      { required: true, message: 'Email is required' },
      { type: 'email', message: 'Please enter a valid email' }
    ]
    rules[`teamMembers.${index}.role`] = [
      { required: true, message: 'Role is required' }
    ]
  })
  
  return rules
})

const addTeamMember = () => {
  dynamicForm.teamMembers.push({
    id: memberIdCounter++,
    name: '',
    email: '',
    role: ''
  })
}

const removeTeamMember = (index: number) => {
  dynamicForm.teamMembers.splice(index, 1)
  // Clear validation for removed fields
  formRef.value?.clearValidate([
    `teamMembers.${index}.name`,
    `teamMembers.${index}.email`,
    `teamMembers.${index}.role`
  ])
}

const handleSubmit = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log('Creating project:', dynamicForm)
    }
  })
}
</script>
```

### Multi-step Form

```vue
<template>
  <div class="max-w-2xl mx-auto">
    <!-- Progress indicator -->
    <div class="mb-8">
      <div class="flex items-center justify-between mb-2">
        <span 
          v-for="(step, index) in steps"
          :key="step.key"
          :class="[
            'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium',
            currentStep >= index ? 'bg-blue-3 text-white' : 'bg-gray-7 text-gray-4'
          ]"
        >
          {{ index + 1 }}
        </span>
      </div>
      <div class="text-center">
        <h2 class="text-xl font-semibold">{{ steps[currentStep].title }}</h2>
        <p class="text-gray-6">{{ steps[currentStep].description }}</p>
      </div>
    </div>
    
    <g-form 
      :model="multiStepForm" 
      :rules="currentStepRules"
      ref="stepFormRef"
    >
      <!-- Step 1: Basic Information -->
      <div v-if="currentStep === 0" class="space-y-4">
        <g-form-item label="Company Name" prop="companyName">
          <g-input 
            v-model="multiStepForm.companyName"
            placeholder="Enter company name"
          />
        </g-form-item>
        
        <g-form-item label="Industry" prop="industry">
          <g-select 
            v-model="multiStepForm.industry"
            :options="industryOptions"
            placeholder="Select industry"
          />
        </g-form-item>
        
        <g-form-item label="Company Size" prop="companySize">
          <g-radio-group v-model="multiStepForm.companySize">
            <g-radio value="1-10">1-10 employees</g-radio>
            <g-radio value="11-50">11-50 employees</g-radio>
            <g-radio value="51-200">51-200 employees</g-radio>
            <g-radio value="200+">200+ employees</g-radio>
          </g-radio-group>
        </g-form-item>
      </div>
      
      <!-- Step 2: Contact Information -->
      <div v-if="currentStep === 1" class="space-y-4">
        <g-form-item label="Primary Contact" prop="primaryContact">
          <g-input 
            v-model="multiStepForm.primaryContact"
            placeholder="Full name"
          />
        </g-form-item>
        
        <g-form-item label="Email" prop="email">
          <g-input 
            v-model="multiStepForm.email"
            type="email"
            placeholder="contact@company.com"
          />
        </g-form-item>
        
        <g-form-item label="Phone" prop="phone">
          <g-input 
            v-model="multiStepForm.phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
          />
        </g-form-item>
      </div>
      
      <!-- Step 3: Preferences -->
      <div v-if="currentStep === 2" class="space-y-4">
        <g-form-item label="Services Interested In" prop="services">
          <g-checkbox-group v-model="multiStepForm.services">
            <g-checkbox value="consulting">Consulting</g-checkbox>
            <g-checkbox value="development">Development</g-checkbox>
            <g-checkbox value="design">Design</g-checkbox>
            <g-checkbox value="support">Support</g-checkbox>
          </g-checkbox-group>
        </g-form-item>
        
        <g-form-item label="Budget Range" prop="budget">
          <g-select 
            v-model="multiStepForm.budget"
            :options="budgetOptions"
            placeholder="Select budget range"
          />
        </g-form-item>
        
        <g-form-item label="Additional Comments" prop="comments">
          <g-input 
            v-model="multiStepForm.comments"
            type="textarea"
            :rows="4"
            placeholder="Any additional information..."
          />
        </g-form-item>
      </div>
    </g-form>
    
    <!-- Navigation -->
    <div class="flex justify-between mt-8">
      <g-button 
        v-if="currentStep > 0"
        variant="secondary"
        title="Previous"
        @click="previousStep"
      />
      
      <div class="ml-auto space-x-2">
        <g-button 
          v-if="currentStep < steps.length - 1"
          variant="primary"
          title="Next"
          @click="nextStep"
        />
        <g-button 
          v-else
          variant="primary"
          title="Submit"
          :loading="isSubmitting"
          @click="submitForm"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const stepFormRef = ref()
const currentStep = ref(0)
const isSubmitting = ref(false)

const steps = [
  {
    key: 'basic',
    title: 'Basic Information',
    description: 'Tell us about your company'
  },
  {
    key: 'contact',
    title: 'Contact Details',
    description: 'How can we reach you?'
  },
  {
    key: 'preferences',
    title: 'Preferences',
    description: 'What are you looking for?'
  }
]

const multiStepForm = reactive({
  // Step 1
  companyName: '',
  industry: '',
  companySize: '',
  
  // Step 2
  primaryContact: '',
  email: '',
  phone: '',
  
  // Step 3
  services: [],
  budget: '',
  comments: ''
})

const industryOptions = [
  { label: 'Technology', value: 'technology' },
  { label: 'Healthcare', value: 'healthcare' },
  { label: 'Finance', value: 'finance' },
  { label: 'Education', value: 'education' },
  { label: 'Other', value: 'other' }
]

const budgetOptions = [
  { label: '$10k - $25k', value: '10k-25k' },
  { label: '$25k - $50k', value: '25k-50k' },
  { label: '$50k - $100k', value: '50k-100k' },
  { label: '$100k+', value: '100k+' }
]

const stepRules = {
  0: {
    companyName: [
      { required: true, message: 'Company name is required' }
    ],
    industry: [
      { required: true, message: 'Please select an industry' }
    ],
    companySize: [
      { required: true, message: 'Please select company size' }
    ]
  },
  1: {
    primaryContact: [
      { required: true, message: 'Primary contact is required' }
    ],
    email: [
      { required: true, message: 'Email is required' },
      { type: 'email', message: 'Please enter a valid email' }
    ],
    phone: [
      { required: true, message: 'Phone number is required' }
    ]
  },
  2: {
    services: [
      { type: 'array', min: 1, message: 'Please select at least one service' }
    ],
    budget: [
      { required: true, message: 'Please select a budget range' }
    ]
  }
}

const currentStepRules = computed(() => stepRules[currentStep.value])

const nextStep = () => {
  stepFormRef.value?.validate((valid) => {
    if (valid) {
      currentStep.value++
    }
  })
}

const previousStep = () => {
  currentStep.value--
}

const submitForm = () => {
  stepFormRef.value?.validate(async (valid) => {
    if (valid) {
      isSubmitting.value = true
      try {
        await api.submitForm(multiStepForm)
        console.log('Form submitted successfully!')
      } catch (error) {
        console.error('Submission failed:', error)
      } finally {
        isSubmitting.value = false
      }
    }
  })
}
</script>
```

## Accessibility

The Form component includes comprehensive accessibility features:

- **Semantic Structure**: Proper form markup and fieldset usage
- **Label Association**: All form items are properly labeled
- **Error Announcement**: Validation errors are announced to screen readers
- **Keyboard Navigation**: Full keyboard support for form navigation
- **Focus Management**: Automatic focus on error fields when scrollToError is enabled

### Screen Reader Support

```vue
<template>
  <g-form 
    :model="accessibleForm"
    :rules="accessibleRules"
    role="form"
    aria-label="User registration form"
  >
    <fieldset>
      <legend class="text-lg font-semibold mb-4">Personal Information</legend>
      
      <g-form-item label="Full Name" prop="fullName" required>
        <g-input 
          v-model="accessibleForm.fullName"
          aria-describedby="name-help"
        />
        <div id="name-help" class="text-sm text-gray-6 mt-1">
          Enter your first and last name
        </div>
      </g-form-item>
      
      <g-form-item label="Email" prop="email" required>
        <g-input 
          v-model="accessibleForm.email"
          type="email"
          aria-describedby="email-help"
          autocomplete="email"
        />
        <div id="email-help" class="text-sm text-gray-6 mt-1">
          We'll use this to send you important updates
        </div>
      </g-form-item>
    </fieldset>
  </g-form>
</template>
```

## TypeScript Support

```typescript
import type { FormInstance, FormProps, FormRules } from '@flash-global66/g-form'

// Form data interface
interface UserForm {
  username: string
  email: string
  password: string
}

// Form rules type
const rules: FormRules = {
  username: [
    { required: true, message: 'Username is required' }
  ],
  email: [
    { type: 'email', message: 'Please enter a valid email' }
  ]
}

// Component instance type
const formRef = ref<FormInstance>()

// Access form methods with full type safety
formRef.value?.validate((valid: boolean, fields?: any) => {
  if (valid) {
    console.log('Form is valid')
  }
})
```

## Testing

```typescript
import { mount } from '@vue/test-utils'
import { GForm, GFormItem } from '@flash-global66/g-form'
import { GInput } from '@flash-global66/g-input'

describe('GForm', () => {
  it('validates form fields', async () => {
    const formData = { username: '' }
    const rules = {
      username: [{ required: true, message: 'Username is required' }]
    }
    
    const wrapper = mount(GForm, {
      props: { model: formData, rules },
      slots: {
        default: () => h(GFormItem, {
          prop: 'username',
          label: 'Username'
        }, () => h(GInput, { modelValue: formData.username }))
      }
    })
    
    const form = wrapper.vm
    const isValid = await form.validate()
    
    expect(isValid).toBe(false)
  })
  
  it('emits validate event', async () => {
    const wrapper = mount(GForm, {
      props: {
        model: { username: 'test' },
        rules: { username: [{ required: true }] }
      }
    })
    
    await wrapper.vm.validate()
    
    expect(wrapper.emitted('validate')).toBeTruthy()
  })
})
```

---

**Related Components:**
- [FormItem](./form-item.md) - Individual form field wrapper
- [Input](./input.md) - Text input component  
- [Select](./select.md) - Dropdown selection
- [Checkbox](./checkbox.md) - Boolean selection
- [Radio](./radio.md) - Single choice selection