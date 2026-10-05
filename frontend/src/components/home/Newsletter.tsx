import { useState } from 'react'
import type { FormEvent } from 'react'

export function Newsletter() {
  const [subscribed, setSubscribed] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <section className="newsletter">
      <div>
        <span className="newsletter__kicker">Únete al club</span>
        <h2 className="newsletter__title">
          10% en tu
          <br />
          primera compra
        </h2>
      </div>

      <form className="newsletter__form" onSubmit={onSubmit}>
        <input
          type="email"
          required
          placeholder="tu@email.cl"
          aria-label="Correo electrónico"
        />
        <button type="submit">{subscribed ? '¡Listo! ✓' : 'Quiero mi 10%'}</button>
      </form>
    </section>
  )
}
