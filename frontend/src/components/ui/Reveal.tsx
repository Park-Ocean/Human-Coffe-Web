import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  id?: string
  as?: 'div' | 'section'
  delay?: number
}

export function Reveal({ children, className, id, as: Tag = 'div', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [revealed, setRevealed] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    setRevealed(false)
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          setRevealed(true)
          io.disconnect()
        }
      },
      { threshold: 0.08 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const style = delay ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={className ? `reveal ${className}` : 'reveal'}
      data-revealed={revealed}
      style={style}
    >
      {children}
    </Tag>
  )
}
