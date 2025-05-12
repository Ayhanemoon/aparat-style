// composables/useApi.ts
import { useFetch } from '#app'
import { useToast } from '~/composables/toast'

export const useApi = async (url: string, options = {}) => {
  const toast = useToast()
  try {
    const { data, error } = await useFetch(url, options)
    if (error.value) {
      toast.error(`Error: ${error.value.message || 'Something went wrong'}`)
      throw error.value
    }
    toast.success('Operation succeeded!')
    return data.value
  } catch (err: any) {
    toast.error(`Error: ${err.message || 'Unexpected error'}`)
    throw err
  }
}
