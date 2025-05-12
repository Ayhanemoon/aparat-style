import axios from 'axios'
export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const { q = '', limit = '10', bookmark = '' } = query
  
    
    try {
      const url = `https://pingrid-api.fazlali.workers.dev/?q=${encodeURIComponent(q as string)}&limit=${limit}&bookmark=${bookmark}`
      
      const response = await axios.get(url)
      
      const data = response.data
      return data
    } catch (error) {
      console.error('API FETCH FAILED:', error.message || error)
      return {
        pins: [],
        bookmark: '',
        error: 'Unable to fetch from image API.'
      }
    }
  
  })