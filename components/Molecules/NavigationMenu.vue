<template>
  <ul class="nav-menu">
    <menu-item label="Home" href="/" />
    <menu-item label="About" href="#about" />
    <menu-item label="Contact" href="#contact" />
  </ul>
</template>

<script setup>
import MenuItem from '@/components/Atoms/MenuItem.vue'
</script>

<style scoped>
.nav-menu {
  list-style: none;
  display: flex;
  gap: 2rem;
  padding: 0;
}

.nav-menu__item {
  margin: 0;
}

.nav-menu__link {
  color: white;
  text-decoration: none;
}
</style>
