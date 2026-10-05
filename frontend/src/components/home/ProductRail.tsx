import { useRef } from 'react'
import { ProductCard } from '../ui/ProductCard'
import { productsByCategory } from '../../data/products'
import { CATALOG_FILTERS } from '../../data/site'
import type { CatalogFilter } from '../../data/site'

type ProductRailProps = {
  filter: CatalogFilter
  onFilterChange: (next: CatalogFilter) => void
}

export function ProductRail({ filter, onFilterChange }: ProductRailProps) {
  const rail = useRef<HTMLDivElement>(null)
  const visible = productsByCategory(filter)

  function nudge(dir: number) {
    const el = rail.current
    if (!el) return
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 760), behavior: 'smooth' })
  }

  return (
    <div className="rail">
      <div className="rail__bar">
        <div className="rail__filters" role="group" aria-label="Filtrar productos">
          {CATALOG_FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className="pill"
              aria-pressed={filter === f.key}
              onClick={() => onFilterChange(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="rail__nav">
          <button type="button" aria-label="Anterior" onClick={() => nudge(-1)}>
            ←
          </button>
          <button type="button" aria-label="Siguiente" onClick={() => nudge(1)}>
            →
          </button>
        </div>
      </div>

      <div className="rail__track" ref={rail}>
        {visible.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            to={`/producto/${p.id}`}
            className="product-card--rail"
          />
        ))}
      </div>
    </div>
  )
}
