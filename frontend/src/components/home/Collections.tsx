import { Link } from 'react-router-dom'

type Item = {
  title: string
  note: string
  img: string
  to: string
}

const ITEMS: Item[] = [
  {
    title: 'Molinos',
    note: 'Single dose · fresas planas',
    img: '/assets/col-molinos.jpg',
    to: '/#catalogo',
  },
  {
    title: 'Máquinas y accesorios',
    note: 'Espresso PID · preparación',
    img: '/assets/col-maquinas.jpg',
    to: '/#catalogo',
  },
]

export function Collections() {
  return (
    <div className="collection-grid">
      {ITEMS.map((it) => (
        <Link className="collection-card" to={it.to} key={it.title}>
          <div className="collection-card__media">
            <img src={it.img} alt={it.title} loading="lazy" />
          </div>
          <div className="collection-card__content">
            <span className="collection-card__title">{it.title}</span>
            <span className="collection-card__arrow" aria-hidden="true">
              →
            </span>
          </div>
          <span className="collection-card__note">{it.note}</span>
        </Link>
      ))}
    </div>
  )
}
