// composables/useTheme.ts
import { ref, watch, onMounted } from 'vue'

const theme = ref('light')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

onMounted(() => {
  // Now we're on the client; localStorage is available.
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme) {
    theme.value = storedTheme
  }
})

// Watch for changes and update the Bootstrap theme attribute and localStorage
watch(
  theme,
  (newTheme) => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-bs-theme', newTheme)
      localStorage.setItem('theme', newTheme)
    }
  }
)

export function useTheme() {
  return { theme, toggleTheme }
}
