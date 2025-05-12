<template>
  <div class="pin-grid container mt-4">
    <div class="grid">
      <div class="pin" v-for="pin in pins" :key="pin.id">
        <PinImage
          :src="getImageSrc(pin)"
          :alt="pin.title || 'Pin'"
          placeholder="https://via.placeholder.com/236x300?text=Loading..."
        />
        <div v-if="pin.title.length > 0 || pin.description.length > 0" class="pin-info mt-1">
          <h5 v-if="pin.title">{{ pin.title }}</h5>
          <p v-if="pin.description" class="text-truncate">{{ pin.description }}</p>
        </div>
      </div>
    </div>
    <!-- Loader Observer -->
    <div ref="loadTrigger" class="load-trigger text-center my-4" v-if="!isEnd">
      <span v-if="loading">Loading more...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePinStore } from '@/stores/pinStore'
import PinImage from '@/components/Atoms/PinImage.vue'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const pinStore = usePinStore()
const { pins, loading, bookmark } = storeToRefs(pinStore)
const loadTrigger = ref<HTMLElement | null>(null)
const isEnd = ref(false)

const getImageSrc = (pin: any) => {
  const pixelRatio = window.devicePixelRatio || 1
  if (pixelRatio >= 2 && pin.images['474x']) return pin.images['474x'].url
  return pin.images['236x']?.url || pin.images['170x']?.url || pin.images['orig']?.url
}

let observer: IntersectionObserver

const observeScroll = () => {
  if (observer) observer.disconnect()

  observer = new IntersectionObserver(
    async (entries) => {
      const [entry] = entries
      if (entry.isIntersecting && !loading.value && bookmark.value && !pinStore.pauseScrollWatch ) {
        await pinStore.loadMorePins()
        if (!bookmark.value) isEnd.value = true
      }
    },
    {
      root: null,
      threshold: 0.1
    }
  )

  if (loadTrigger.value) {
    observer.observe(loadTrigger.value)
  }
}

onMounted(() => {
  observeScroll()
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped lang="scss">
.grid {
  column-count: 1;
  column-gap: 1rem;

  @media (min-width: 576px) {
    column-count: 2;
  }
  @media (min-width: 768px) {
    column-count: 3;
  }
  @media (min-width: 992px) {
    column-count: 4;
  }
}

.pin {
  break-inside: avoid;
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &-img {
    width:100%
  }
}

.load-trigger {
  height: 60px;
}
</style>
