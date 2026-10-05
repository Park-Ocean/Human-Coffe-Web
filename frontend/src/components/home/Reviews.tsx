import { REVIEWS } from '../../data/site'

const FONT_CLASS = {
  sans: "w-875",
  serif: "serif",
} as const

export function Reviews() {
  return (
    <div className="reviews-grid">
      {REVIEWS.map((r) => (
        <figure className="review" key={r.who} style={{ background: r.color }}>
          <span className="mono" style={{ fontSize: 13 }}>
            ★★★★★
          </span>
          <blockquote
            className={`review__quote ${FONT_CLASS[r.font]}`}
            style={{ fontSize: r.size }}
          >
            “{r.quote}”
          </blockquote>
          <figcaption className="review__foot">
            <span>{r.who}</span>
            <span>{r.product}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}