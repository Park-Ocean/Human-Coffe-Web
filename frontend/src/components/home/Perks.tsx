import { PERKS } from '../../data/site'

export function Perks() {
  return (
    <section className="perks">
      {PERKS.map((k) => (
        <div className="perk" key={k.n}>
          <span className="perk__badge" style={{ background: k.color }}>
            {k.n}
          </span>
          <div className="perk__text">
            <b className="perk__title">{k.title}</b>
            <span className="perk__desc">{k.desc}</span>
          </div>
        </div>
      ))}
    </section>
  )
}