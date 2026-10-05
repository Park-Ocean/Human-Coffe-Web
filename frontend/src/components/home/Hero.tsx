import { Link } from 'react-router-dom'
import { HERO } from '../../data/site'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__media" aria-hidden="true">
        {HERO.video ? (
          <video autoPlay muted loop playsInline poster={HERO.poster}>
            <source src={HERO.video} type="video/mp4" />
          </video>
        ) : null}
        <span className="hero__scrim" />
        <span className="hero__grain" />
      </div>

      <div className="hero__inner">
        <span className="hero__eyebrow">{HERO.eyebrow}</span>

        <h1 className="hero__title">
          {HERO.lines.map((line) => (
            <span className={`hero__line hero__line--${line.style}`} key={line.text}>
              <span className="hero__line-inner">{line.text}</span>
            </span>
          ))}
        </h1>

        <div className="hero__foot">
          <p className="hero__sub">{HERO.sub}</p>

          <div className="hero__actions">
            <Link className="btn btn--lg" to={HERO.cta.to}>
              {HERO.cta.label} →
            </Link>
            <Link className="hero__alt" to={HERO.ctaAlt.to}>
              {HERO.ctaAlt.label} →
            </Link>
          </div>
        </div>
      </div>

      <a className="hero__scroll" href="#empezar" aria-label="Bajar a la siguiente sección">
        <span>Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>

      <div className="hero__ticker" aria-hidden="true">
        <div className="hero__ticker-track">
          {[...HERO.ticker, ...HERO.ticker].map((t, i) => (
            <span key={`${t}-${i}`}>
              {t}
              <i>✶</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
