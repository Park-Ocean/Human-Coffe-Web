import { useState } from 'react'
import { Link } from 'react-router-dom'
import { COMPARE, COMPARE_TABS } from '../../data/site'
import { getProduct } from '../../data/products'

export function Compare() {
  const [tab, setTab] = useState<'g' | 'm'>('g')
  const set = COMPARE[tab]
  const a = getProduct(set.a)!
  const b = getProduct(set.b)!

  return (
    <div className="compare">
      <div className="compare__tabs" role="group" aria-label="Comparar categoría">
        {COMPARE_TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            className="pill"
            aria-pressed={tab === t.key}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="compare__table">
        <div className="compare__row compare__row--head">
          <span className="compare__key-head">Compara</span>
          <Link className="compare__product" to={`/producto/${a.id}`}>
            <img src={a.images[0]} alt={a.name} loading="lazy" />
            <b>{a.name}</b>
          </Link>
          <Link className="compare__product" to={`/producto/${b.id}`}>
            <img src={b.images[0]} alt={b.name} loading="lazy" />
            <b>{b.name}</b>
          </Link>
        </div>

        {set.rows.map((r) => {
          const diff = r.a !== r.b

          return (
            <div
              className={`compare__row${diff ? ' compare__row--diff' : ''}`}
              key={r.key}
            >
              <span className="compare__key">
                {r.key}
                {diff && (
                  <i className="compare__flag" aria-label="Difieren entre sí">
                    dif
                  </i>
                )}
              </span>
              <span className="compare__cell">{r.a}</span>
              <span className="compare__cell">{r.b}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
