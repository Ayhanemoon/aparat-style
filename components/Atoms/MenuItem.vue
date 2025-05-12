<template>
  <li class="menu-item">
    <a :href="href" class="menu-item__link">{{ label }}</a>
  </li>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.menu-item {
  list-style: none;
}

.menu-item__link {
  text-decoration: none;
  color: white;
  font-size: 1rem;
}

.menu-item__link:hover {
  text-decoration: underline;
}
</style>
