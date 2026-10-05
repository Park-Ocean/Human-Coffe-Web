import { ProductCard } from '../ui/ProductCard'
import { productsByCategory } from '../../data/products'
import { CATALOG_FILTERS } from '../../data/site'
import type { CatalogFilter } from '../../data/site'

type CatalogProps = {
  filter: CatalogFilter
  onFilterChange: (next: CatalogFilter) => void
}

export function Catalog({ filter, onFilterChange }: CatalogProps) {
  const visible = productsByCategory(filter)

  return (
    <>
      <div className="cat-toolbar">
        {CATALOG_FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            className="chip"
            aria-pressed={filter === f.key}
            onClick={() => onFilterChange(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="cat-grid-products">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} to={`/producto/${p.id}`} />
        ))}
      </div>
    </>
  )
}