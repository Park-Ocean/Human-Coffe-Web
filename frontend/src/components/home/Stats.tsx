import { useEffect, useRef } from 'react'
import { STATS } from '../../data/site'
import { useInView } from '../../hooks/useInView'

function format(value: number, decimals: number) {
  return decimals > 0
    ? value.toFixed(decimals).replace('.', ',')
    : Math.round(value).toLocaleString('es-CL')
}

function Counter({
  value,
  decimals = 0,
  suffix,
  active,
}: {
  value: number
  decimals?: number
  suffix: string
  active: boolean
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !active) return

    const reduce =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce) {
      el.textContent = format(value, decimals) + suffix
      return
    }

    let raf = 0
    const duration = 1200
    const start = performance.now()

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      el.textContent = format(value * eased, decimals) + suffix
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, value, decimals, suffix])

  return <span ref={ref}>{format(value, decimals) + suffix}</span>
}

export function Stats() {
  const { ref, inView } = useInView<HTMLElement>(0.3)

  return (
    <section className="stats" ref={ref}>
      {STATS.map((s) => (
        <div className="stat" key={s.label}>
          <b className="stat__value">
            <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} active={inView} />
          </b>
          <span className="stat__label">{s.label}</span>
        </div>
      ))}
    </section>
  )
}
