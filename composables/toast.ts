import { useNuxtApp } from '#app'

export const useToast = () => {
  const nuxtApp = useNuxtApp()
  const toast = nuxtApp.vueApp.config.globalProperties.$toast
  return {
    success: (msg: string) => toast && toast.open({ message: msg, type: 'success' }),
    error: (msg: string) => toast && toast.open({ message: msg, type: 'error' })
  }
}
