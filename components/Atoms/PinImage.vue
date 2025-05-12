<template>
    <div class="pin-image-wrapper">
      <img
        :src="imageSrc"
        :alt="alt"
        @load="loaded = true"
        @error="onError"
        class="img-fluid rounded"
        :class="{ 'is-loading': !loaded }"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  
  const props = defineProps<{
    src: string
    alt?: string
    placeholder?: string
  }>()
  
  const loaded = ref(false)
  const hasError = ref(false)
  
  const imageSrc = computed(() =>
    hasError.value
      ? props.placeholder || 'https://via.placeholder.com/236x300?text=Unavailable'
      : props.src
  )
  
  const onError = () => {
    hasError.value = true
    loaded.value = true
  }
  </script>
  
  <style scoped>
  img {
    display: block;
    width: 100%;
    object-fit: cover;
    transition: filter 0.3s ease;
  }
  
  img.is-loading {
    filter: blur(10px) grayscale(0.6);
    background-color: #eee;
  }
  </style>
  