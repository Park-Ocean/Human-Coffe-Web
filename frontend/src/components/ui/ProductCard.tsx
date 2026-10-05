import { Link } from 'react-router-dom'
import { useCart } from '../../context/cartContext'
import { clp } from '../../lib/format'
import type { Product } from '../../data/products'

export function Stars({ count }: { count: number }) {
  return (
    <span className="stars" aria-label={`${count} reseñas`}>
      ★★★★★ <span className="stars__count">({count})</span>
    </span>
  )
}

type ProductCardProps = {
  product: Product
  to: string
  className?: string
}

export function ProductCard({ product: p, to, className }: ProductCardProps) {
  const cart = useCart()

  return (
    <article className={`product-card${className ? ` ${className}` : ''}`}>
      <Link className="product-card__media" to={to}>
        <img src={p.images[0]} alt={p.name} loading="lazy" />
        <span className="tag product-card__tag" style={{ background: p.tagColor }}>
          {p.tag}
        </span>
        <span className="product-card__hover" aria-hidden="true">
          Ver equipo →
        </span>
      </Link>

      <div className="product-card__body">
        <span className="product-card__meta">
          {p.brand} · {p.type}
        </span>
        <Link className="product-card__name" to={to}>
          {p.name}
        </Link>
        <span className="product-card__sub">{p.sub}</span>
        <Stars count={p.reviews} />
      </div>

      <div className="product-card__foot">
        <div className="product-card__price">
          <b>{clp(p.price)}</b>
          <span>6 × {clp(p.price / 6)} sin interés</span>
        </div>
        <button
          type="button"
          className="product-card__add"
          onClick={() => cart.add([p.id])}
          aria-label={`Agregar ${p.name} al carro`}
        >
          +
        </button>
      </div>
    </article>
  )
}
