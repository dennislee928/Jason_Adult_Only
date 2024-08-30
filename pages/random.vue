
<template>
  <div>
    <h1>Random Image</h1>
    <div v-if="error">{{ error }}</div>
    <div v-else>
      <img :src="data.image_url" alt="Random Image" />
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
    data.value = await useJsonPorn('random')
  } catch (err) {
    error.value = err.message
  }
})
</script>
