// utils/waitForImagesLoaded.ts
export const waitForImagesLoaded = (selector = 'img') => {
    const images = Array.from(document.querySelectorAll(selector)) as HTMLImageElement[]
  
    return Promise.allSettled(
      images.map(img => {
        if (img.complete) return Promise.resolve()
        return new Promise(resolve => {
          img.onload = img.onerror = resolve
        })
      })
    )
}
  