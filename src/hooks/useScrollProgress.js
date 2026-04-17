import { useEffect, useState } from 'react'

export const debounce = (callback, delay = 80) => {
  let timerId
  return (...args) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => callback(...args), delay)
  }
}

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = debounce(() => {
      const scrolled = window.scrollY
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(maxHeight > 0 ? Math.min(scrolled / maxHeight, 1) : 0)
    }, 16)

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return progress
}

export default useScrollProgress
