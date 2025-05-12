<template>
  <button class="hamburger-menu" @click="toggleSidebar" aria-label="Toggle menu" :class="{'hamburger-menu--active': sidebar}">
    <span class="hamburger-menu__bar"></span>
    <span class="hamburger-menu__bar"></span>
    <span class="hamburger-menu__bar"></span>
  </button>
</template>

<script setup>
import { useLayout } from '~/composables/layout';

const { sidebar, toggleSidebar } = useLayout();
</script>

<style lang="scss" scoped>
.hamburger-menu {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 1000;
  flex-direction: column;
  justify-content: space-between;
  height: 21px;
  width: 30px;

  @media (max-width: 768px) {
    display: flex;
  }

  .hamburger-menu__bar {
    width: 30px;
    height: 4px;
    background-color: white;
    transition: all 0.3s ease;
  }
}

.hamburger-menu--active .hamburger-menu__bar:nth-child(1) {
  transform: rotate(45deg);
  position: relative;
  top: 6px;
}

.hamburger-menu--active .hamburger-menu__bar:nth-child(2) {
  opacity: 0;
}

.hamburger-menu--active .hamburger-menu__bar:nth-child(3) {
  transform: rotate(-45deg);
  position: relative;
  top: -6px;
}
</style>