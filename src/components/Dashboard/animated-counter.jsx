import { useEffect, useState } from 'react'

function AnimatedCounter({ value, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let frame
    let start
    const duration = 900
    const tick = (time) => {
      if (!start) start = time
      const progress = Math.min((time - start) / duration, 1)
      setCount(Math.round(progress * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value])

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>
}

export default AnimatedCounter
