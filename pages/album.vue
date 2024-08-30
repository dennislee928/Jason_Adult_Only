<template>
  <div>
    <h1>Album</h1>
    <div v-if="error">{{ error }}</div>
    <div v-else>
      <div v-for="image in data.images" :key="image.id">
        <img :src="image.url" alt="Album Image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useJsonPorn } from "~/composables/useJsonPorn.ts";

const data = ref(null);
const error = ref(null);

onMounted(async () => {
  try {
    data.value = await useJsonPorn("album"); // You might need to adjust the API path and params
  } catch (err) {
    error.value = err.message;
  }
});
</script>
