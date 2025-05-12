<template>
  <div class="search-bar-wrapper">
    <div class="search-bar container d-flex gap-2 align-items-center">
      <button class="btn btn-secondary" @click="goBack" :disabled="!canGoBack">
        Back
      </button>
      <input
        v-model="query"
        @keyup.enter="handleSearch"
        type="text"
        class="form-control"
        placeholder="Search for pins..."
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { usePinStore } from '@/stores/pinStore'
import { nextTick } from 'vue'
import { waitForImagesLoaded } from '@/utils/waitForImagesLoaded'

const pinStore = usePinStore()
const query = ref('')
const canGoBack = computed(() => pinStore.history.length > 0)

const handleSearch = () => {
  if (query.value.trim()) {
    pinStore.saveStateToHistory()
    pinStore.searchPins(query.value)
  }
}

const goBack = async () => {
  pinStore.pauseScrollWatch = true
  pinStore.restorePreviousState()
  query.value = pinStore.query

  await nextTick()
  await waitForImagesLoaded('.pin img')

  pinStore.restoreScroll()

  // Small delay to ensure scroll restore doesn’t trigger loadMore
  setTimeout(() => {
    pinStore.pauseScrollWatch = false
  }, 500)
}

</script>

<style scoped lang="scss">
.search-bar-wrapper {
  position: sticky;
  background: #1ECAF0;
  top: 0;
  z-index: 1000;
  padding: 0.75rem 0;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
</style>
