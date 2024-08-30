
<template>
  <div>
    <h1>Categories</h1>
    <div v-if="error">{{ error }}</div>
    <div v-else>
      <ul>
        <li v-for="category in data" :key="category.id">{{ category.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useJsonPorn } from '~/composables/useJsonPorn.ts'

const data = ref(null)
const error = ref(null)

onMounted(async () => {
  try {
    data.value = await useJsonPorn('categories')
  } catch (err) {
    error.value = err.message
  }
})
</script>
