<template>
  <div class="g-input-example">
    <h1>G-Input Implementation Example</h1>
    
    <!-- Basic Usage -->
    <section>
      <h2>Basic Input</h2>
      <g-input 
        v-model="formData.name" 
        label="Your Name" 
        placeholder="Enter your name"
      />
    </section>

    <!-- With Icons -->
    <section>
      <h2>Input with Icons</h2>
      <g-input 
        v-model="formData.email" 
        label="Email" 
        placeholder="user@example.com"
        prefix-icon="regular envelope"
        type="email"
      />
      
      <g-input 
        v-model="formData.search" 
        label="Search" 
        placeholder="Search..."
        suffix-icon="regular search"
      />
    </section>

    <!-- Password Input -->
    <section>
      <h2>Password Input</h2>
      <g-input 
        v-model="formData.password" 
        label="Password" 
        type="password"
        show-password
        prefix-icon="regular lock"
      />
    </section>

    <!-- With Character Counter -->
    <section>
      <h2>Input with Character Limit</h2>
      <g-input 
        v-model="formData.description" 
        label="Description" 
        placeholder="Write a short description"
        :maxlength="100"
        show-word-limit
        help-text="Maximum 100 characters"
      />
    </section>

    <!-- Loading State -->
    <section>
      <h2>Loading State</h2>
      <g-input 
        v-model="formData.username" 
        label="Username" 
        :loading="isCheckingUsername"
        help-text="Checking availability..."
      />
    </section>

    <!-- Error State -->
    <section>
      <h2>Error State</h2>
      <g-input 
        v-model="formData.phone" 
        label="Phone Number" 
        :message-error="phoneError"
        type="tel"
      />
    </section>

    <!-- Custom Slots -->
    <section>
      <h2>Custom Slots (Currency)</h2>
      <g-input 
        v-model="formData.price" 
        label="Price" 
        placeholder="0.00"
        type="number"
      >
        <template #prefix>
          <span>$</span>
        </template>
        <template #suffix>
          <span>USD</span>
        </template>
      </g-input>
    </section>

    <!-- With Formatter -->
    <section>
      <h2>Credit Card Input with Formatter</h2>
      <g-input 
        v-model="formData.creditCard" 
        label="Credit Card Number" 
        placeholder="1234 5678 9012 3456"
        :maxlength="19"
        :formatter="formatCreditCard"
        :parser="parseCreditCard"
        prefix-icon="regular credit-card"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { GInput } from '@flash-global66/g-input'
// If styles are not imported globally, uncomment the next line:
// import '@flash-global66/g-input/input.styles.scss'

// Form data
const formData = reactive({
  name: '',
  email: '',
  search: '',
  password: '',
  description: '',
  username: '',
  phone: '',
  price: '',
  creditCard: ''
})

// States
const isCheckingUsername = ref(false)
const phoneError = ref('')

// Credit card formatter
const formatCreditCard = (value: string) => {
  if (!value) return ''
  const numbers = value.replace(/\s/g, '')
  const groups = numbers.match(/.{1,4}/g) || []
  return groups.join(' ')
}

// Credit card parser (removes spaces)
const parseCreditCard = (value: string) => {
  return value.replace(/\s/g, '')
}

// Example: Check username availability
const checkUsername = async () => {
  if (!formData.username) return
  
  isCheckingUsername.value = true
  // Simulate API call
  setTimeout(() => {
    isCheckingUsername.value = false
  }, 2000)
}

// Example: Validate phone
const validatePhone = () => {
  if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
    phoneError.value = 'Please enter a valid 10-digit phone number'
  } else {
    phoneError.value = ''
  }
}
</script>

<style scoped>
.g-input-example {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

section {
  margin-bottom: 2rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #333;
}

.g-input {
  margin-bottom: 1rem;
}
</style>