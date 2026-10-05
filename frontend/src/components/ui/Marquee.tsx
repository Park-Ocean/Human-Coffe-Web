type MarqueeProps = {
  items: readonly string[]
  durationSeconds?: number
  variant?: 'text' | 'brand'
}

export function Marquee({ items, durationSeconds = 28, variant = 'text' }: MarqueeProps) {
  const duration = variant === 'brand' ? 40 : durationSeconds
  const loop = [...items, ...items]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track" style={{ '--marquee-duration': `${duration}s` } as never}>
        {loop.map((text, i) => (
          <span
            key={`${text}-${i}`}
            className={
              variant === 'brand'
                ? 'marquee__item display w-625'
                : 'marquee__item mono caps'
            }
            style={variant === 'brand' ? { fontSize: 'clamp(48px, 7vw, 96px)' } : undefined}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}