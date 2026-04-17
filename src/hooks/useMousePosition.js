import { useEffect, useState } from 'react'
import { debounce } from './useScrollProgress'

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = debounce((event) => {
      const x = event.clientX / window.innerWidth - 0.5
      const y = event.clientY / window.innerHeight - 0.5
      setPosition({ x, y })
    }, 12)

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return position
}

export default useMousePosition
