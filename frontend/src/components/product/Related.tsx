import { Link } from 'react-router-dom'
import { RELATED, getProduct } from '../../data/products'
import type { ProductId } from '../../data/products'
import { clp } from '../../lib/format'

export function Related({ current }: { current: ProductId }) {
  const items = RELATED[current].map((id) => getProduct(id)!)

  return (
    <section className="related">
      <h2 className="related__title">Combina con</h2>
      <div className="related__grid">
        {items.map((r) => (
          <Link className="related-card" to={`/producto/${r.id}`} key={r.id}>
            <div className="related-card__media">
              <img src={r.images[0]} alt={r.name} loading="lazy" />
            </div>
            <div className="related-card__body">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="label muted">{r.brand}</span>
                <b className="related-card__name">{r.name}</b>
              </div>
              <b style={{ fontSize: 16 }}>{clp(r.price)}</b>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}