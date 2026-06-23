import { useEffect, useRef, useState } from 'react'

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const transforms = {
    up: 'translateY(0)',
    down: 'translateY(0)',
    left: 'translateX(0)',
    right: 'translateX(0)'
  }

  const hiddenTransforms = {
    up: 'translateY(24px)',
    down: 'translateY(-24px)',
    left: 'translateX(-24px)',
    right: 'translateX(24px)'
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? transforms[direction] : hiddenTransforms[direction],
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
