import { SHOWROOM } from '../../data/site'

export function Showroom() {
  return (
    <section className="showroom" id="contacto">
      <div className="showroom__info">
        <h2 className="showroom__title">{SHOWROOM.title}</h2>
        <p className="showroom__text">{SHOWROOM.text}</p>

        <dl className="showroom__rows">
          {SHOWROOM.rows.map(([key, value]) => (
            <div className="showroom__row" key={key}>
              <dt>{key}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <a className="btn btn--lg" href="https://wa.me/56912345678" target="_blank" rel="noreferrer">
          Escribir por WhatsApp →
        </a>
      </div>

      <div className="showroom__map" aria-hidden="true">
        <span className="showroom__pin" />
        <span className="showroom__map-label">Providencia · Santiago</span>
      </div>
    </section>
  )
}
