import { useCart } from '../../context/cartContext'
import { SETUP, getProduct, setupTotals } from '../../data/products'
import { clp } from '../../lib/format'

export function SetupPack() {
  const cart = useCart()
  const [a, b] = SETUP.ids.map((id) => getProduct(id)!)
  const { full, price } = setupTotals()

  return (
    <section className="spotlight">
      <div className="spotlight__media">
        <div className="spotlight__shot spotlight__shot--a">
          <img src={a.images[0]} alt={a.name} loading="lazy" />
        </div>
        <div className="spotlight__shot spotlight__shot--b">
          <img src={b.images[0]} alt={b.name} loading="lazy" />
        </div>
        <span className="spotlight__save">Ahorra 8%</span>
      </div>

      <div className="spotlight__copy">
        <span className="spotlight__kicker">El pack completo</span>
        <h2 className="spotlight__title">
          {SETUP.title}
          <br />
          {a.name} + {b.name}
        </h2>
        <p className="spotlight__text">{SETUP.text}</p>

        <div className="spotlight__price">
          <s>{clp(full)}</s>
          <b>{clp(price)}</b>
          <span className="spotlight__save-note">Ahorras {clp(full - price)}</span>
        </div>

        <button type="button" className="btn btn--lg spotlight__cta" onClick={() => cart.add([...SETUP.ids])}>
          Añadir el pack al carrito →
        </button>
        <span className="spotlight__reassure">Envío gratis · 6 cuotas sin interés</span>
      </div>
    </section>
  )
}
