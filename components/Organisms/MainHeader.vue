<template>
  <header class="header">
    <div class="header__brand">
      <h1>Aparat</h1>
      <span @click="toggleTheme" class="theme-toggle">
        <i :class="theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'"></i> 
        </span>
    </div>
    <div class="header__menu">
      <navigation-menu />
    </div>
    <hamburger-menu />
  </header>
</template>

<script setup>
import { ref } from 'vue';
import NavigationMenu from '@/components/Molecules/NavigationMenu.vue';
import HamburgerMenu from '@/components/Molecules/HamburgerMenu.vue';
import { useTheme } from '@/composables/theme'
const { theme, toggleTheme } = useTheme()

</script>

<style lang="scss" scoped>
.header {
  background-color: $primary;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__brand{ 
  display: flex;
  
  h1 {
    color: white;
    margin: 0;
  }

  .theme-toggle {
    cursor: pointer;
    font-size: 32px;
    color: white;
    margin-left: 5px;
  }
}

.header__menu {
  display: flex;
  gap: 2rem;
}

/* Mobile Menu */
.header__menu.active {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 0;
  background-color: $primary;
  width: 100%;
  padding: 1rem;
}

/* Mobile View */
@media (max-width: 768px) {
  .header__menu {
    display: none; /* Hide menu by default */
  }

  .header__menu.active {
    display: flex; /* Show the menu when the active class is added */
  }
}
</style>