import { BRANDS_MARQUEE } from '../../data/site'

export function BrandMarquee() {
  return (
    <section className="brand-strip" aria-label="Marcas y características">
      <div className="brand-strip__track">
        {[...BRANDS_MARQUEE, ...BRANDS_MARQUEE].map((text, i) => (
          <span className="brand-strip__item" key={`${text}-${i}`}>
            {text}
          </span>
        ))}
      </div>
    </section>
  )
}
