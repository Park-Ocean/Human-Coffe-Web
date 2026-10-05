import { Link } from 'react-router-dom'
import type { CategoryId } from '../../data/products'

type Card = {
  word: string
  wordClass: string
  count: string
  note: string
  img: string
  filter?: CategoryId
}

const CARDS: Card[] = [
  {
    word: 'Molinos',
    wordClass: 'cat-card__word--serif',
    count: 'A / 02 modelos',
    note: 'Fresas planas · single dose',
    img: '/assets/tostador.png',
    filter: 'g',
  },
  {
    word: 'Máquinas',
    wordClass: 'cat-card__word--block',
    count: 'B / 02 modelos',
    note: 'Espresso con control PID',
    img: '/assets/interior.png',
    filter: 'm',
  },
  {
    word: 'Accesorios',
    wordClass: 'cat-card__word--heavy',
    count: 'C / Próximamente',
    note: 'Tampers · balanzas · WDT',
    img: '/assets/concreto.png',
  },
]

type CategoriesProps = {
  onPick: (category: CategoryId) => void
}

export function Categories({ onPick }: CategoriesProps) {
  return (
    <div className="cat-grid">
      {CARDS.map((card) => {
        const inner = (
          <>
            <span className="cat-card__index">{card.count}</span>
            <span className={`cat-card__word ${card.wordClass}`}>{card.word}</span>
            <span className="cat-card__note">{card.note}</span>
            <span className="cat-card__arrow" aria-hidden="true">
              →
            </span>
          </>
        )

        const style = { backgroundImage: `url(${card.img})` }

        if (!card.filter) {
          return (
            <div className="cat-card" key={card.word} style={style}>
              {inner}
            </div>
          )
        }

        return (
          <Link
            className="cat-card"
            to={{ pathname: '/', hash: '#catalogo' }}
            key={card.word}
            style={style}
            onClick={() => onPick(card.filter!)}
          >
            {inner}
          </Link>
        )
      })}
    </div>
  )
}
