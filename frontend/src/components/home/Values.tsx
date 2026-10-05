import { VALUES } from '../../data/site'

export function Values() {
  return (
    <section className="values">
      <div className="values__intro">
        <h2 className="values__title">
          Por qué
          <br />
          Human
        </h2>
        <p className="values__lead">
          Una tienda de implementos, no de café. Elegimos pocas cosas y las explicamos bien.
        </p>
      </div>

      <ul className="values__list">
        {VALUES.map((v) => (
          <li className="value" key={v.n}>
            <span className="value__n">{v.n}</span>
            <h3 className="value__title">{v.title}</h3>
            <p className="value__text">{v.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
