import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false, trickleSpeed: 300 })

let timeoutId: ReturnType<typeof setTimeout> | null = null

function debounceDone() {
  if (timeoutId)
    clearTimeout(timeoutId)
  timeoutId = setTimeout(() => {
    NProgress.done()
    timeoutId = null
  }, 300)
}

export function useNProgress() {
  return {
    start: NProgress.start,
    done: debounceDone,
  }
}
