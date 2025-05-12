<template>
  <div class="default-layout">
    <main-header />
    <main-sidebar />
    <main>
      <transition name="page" mode="out-in">
        <NuxtPage />
      </transition>
    </main>
    <main-footer />
  </div>
</template>

<script setup lang="ts">
import MainHeader from '@/components/Organisms/MainHeader.vue';
import MainFooter from '@/components/Organisms/MainFooter.vue';
import MainSidebar from '@/components/Organisms/MainSidebar.vue';

</script>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  background-color: $bg-color;
  flex: 1;
}

.sidebar.active + main {
  margin-left: 0;
}

.page-enter-active, .page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from, .page-leave-to {
  opacity: 0;
}

.page-enter-to, .page-leave-from {
  opacity: 1;
}
</style>