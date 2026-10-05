import { EDITORIAL } from '../../data/site'

export function Editorial() {
  return (
    <section className="editorial" id="empezar">
      <div className="editorial__sticky">
        <span className="editorial__kicker">La ruta</span>
        <h2 className="editorial__title">
          ¿Por dónde
          <br />
          empezar?
        </h2>
        <p className="editorial__lead">
          Tres pasos para pasar del café de cápsula al espresso real. Sin comprar de más ni
          arrepentirte después.
        </p>
      </div>

      <div className="editorial__steps">
        {EDITORIAL.map((b) => (
          <article className="step" key={b.n}>
            <span className="step__n">{b.n}</span>
            <div className="step__media">
              <img src={b.img} alt="" loading="lazy" />
            </div>
            <div className="step__body">
              <h3 className="step__title">{b.title}</h3>
              <p className="step__text">{b.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
