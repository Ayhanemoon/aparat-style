<!-- pages/index.vue -->
<template>
  <div class="container my-4">
    <h1 class="mb-4">Aparat</h1>
    <div v-if="loading" class="text-center">
      <span class="spinner-border" role="status" aria-hidden="true"></span>
      <span class="visually-hidden">Loading...</span>
    </div>
    home
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const loading = ref(true)

onMounted(async () => {
  loading.value = false
})
</script>
