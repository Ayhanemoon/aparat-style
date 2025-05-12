<template>
  <div class="sidebar" :class="{ 'active': sidebar }">
    <div class="sidebar__content">
      <div class="sidebar__brand">
        <h1>Aparat</h1>
      </div>
      <ul class="nav-menu">
        <menu-item label="Home" href="/" />
        <menu-item label="About" href="#about" />
        <menu-item label="Services" href="#services" />
        <menu-item label="Contact" href="#contact" />
      </ul>
    </div>
  </div>
</template>

<script setup>
import MenuItem from '@/components/Atoms/MenuItem.vue'

const { sidebar } = useLayout()

</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: $primary;
  padding: 2rem;
  transition: all 0.3s ease;
}

.sidebar.active {
  left: 0;
}

.sidebar__content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .sidebar__brand h1 {
    color: white;
    margin: 0;
  }
}

.nav-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-menu__item {
  margin: 0;
}

.nav-menu__link {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 1rem;
  display: block;
}

.nav-menu__link:hover {
  background-color: #0056b3;
}
</style>
