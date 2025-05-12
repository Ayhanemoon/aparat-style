<!-- pages/index.vue -->
<template>
  <div class="container my-4">
    <div v-if="loading" class="text-center">
      <span class="spinner-border" role="status" aria-hidden="true"></span>
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else class="content-wrapper">
      <search-bar />
      <pin-grid />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SearchBar from '@/components/Atoms/SearchBar.vue'
import PinGrid from '@/components/Molecules/PinGrid.vue'

const loading = ref(true)

onMounted(async () => {
  loading.value = false
})
</script>
