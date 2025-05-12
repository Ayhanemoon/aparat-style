import { defineStore } from 'pinia'
import { usePinsApi } from '@/composables/pins'

export const usePinStore = defineStore('pinStore', {
  state: () => ({
    pins: [],
    bookmark: '',
    query: '',
    loading: false,
    savedScroll: 0,
    pauseScrollWatch: false,
    history: [] as {
        query: string
        pins: any[]
        bookmark: string
        scroll: number
      }[]
  }),
  actions: {
    async searchPins(query: string, bookmark: string) {
      this.loading = true
      this.query = query
      this.pins = []
      this.bookmark = ''

      try {
        const { getPins } = usePinsApi(query, bookmark)
        const data = await getPins()
        this.pins = data.pins
        this.bookmark = data.bookmark
      } catch (error) {
        console.error('Error fetching pins:', error)
      } finally {
        this.loading = false
      }
    },
    async loadMorePins() {
        if (!this.bookmark || this.loading) return
        this.loading = true
        try {
          const { getPins } = usePinsApi(this.query, this.bookmark)
          const data = await getPins()
          if (data?.pins?.length) {
            this.pins.push(...data.pins)
            this.bookmark = data.bookmark
          } else {
            this.bookmark = ''
          }
        } catch (error) {
          console.warn('Load more error:', error)
          this.bookmark = '' // prevent retry loop
        } finally {
          this.loading = false
        }
    },
    saveScroll() {
        this.savedScroll = window.scrollY
    },
    restoreScroll() {
        window.scrollTo({ top: this.savedScroll || 0, behavior: 'auto' })
    },
    saveStateToHistory() {
        this.history.push({
          query: this.query,
          pins: [...this.pins],
          bookmark: this.bookmark,
          scroll: window.scrollY
        })
    },
    restorePreviousState() {
        const last = this.history.pop()
        if (!last) return
  
        this.query = last.query
        this.pins = last.pins
        this.bookmark = last.bookmark
        this.savedScroll = last.scroll
  
        this.restoreScroll()
    } 
  }
})