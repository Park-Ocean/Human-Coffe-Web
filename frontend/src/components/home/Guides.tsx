import { Link } from 'react-router-dom'
import { GUIDES } from '../../data/site'

export function Guides() {
  return (
    <div className="guides-grid">
      {GUIDES.map((g) => (
        <Link className="guide" to={{ pathname: '/', hash: '#guias' }} key={g.title}>
          <div className="guide__media">
            <img src={g.img} alt={g.title} loading="lazy" />
            <span className="guide__scrim" />
            <span className="guide__time">{g.time}</span>
          </div>
          <div className="guide__body">
            <span className="label muted">{g.tag}</span>
            <span className="guide__title">{g.title}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}