// composables/useRoom.ts
import { useRuntimeConfig } from '#app'
import { useApi } from '~/composables/api'

export const usePinsApi = (query: string, bookmark = '') => {
  const getPins = async (fallback = true) => {
    const url = `/api/pins?q=${encodeURIComponent(query)}&limit=10&bookmark=${bookmark}`
    try {
      const data = await useApi(url, {
        key: `pins-${query}-${bookmark}`,
        initialCache: false,
        server: false // still run on client side
      })
      return data
    } catch (err) {
      console.error('Error fetching pins:', err)
      if (!fallback) return null
      return {
        pins: [], // fake fallback if needed
        bookmark: ''
      }
    }
  }

  return { getPins }
}