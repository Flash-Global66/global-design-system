<template>
  <div class="container">
    <h2>Simple G-Input Example</h2>
    
    <!-- Basic g-input -->
    <g-input 
      v-model="userName" 
      label="Username" 
      placeholder="Enter your username"
    />

    <!-- g-input with icon -->
    <g-input 
      v-model="email" 
      label="Email Address" 
      type="email"
      prefix-icon="regular envelope"
    />

    <!-- Display values -->
    <div class="values">
      <p>Username: {{ userName }}</p>
      <p>Email: {{ email }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { GInput } from '@flash-global66/g-input'

// Define reactive variables
const userName = ref('')
const email = ref('')
</script>

<style scoped>
.container {
  padding: 20px;
  max-width: 400px;
}

h2 {
  margin-bottom: 20px;
}

.g-input {
  margin-bottom: 16px;
}

.values {
  margin-top: 20px;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.values p {
  margin: 4px 0;
}
</style>