import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/cartContext'
import { MEGA } from '../../data/site'
import type { NavItem } from '../../data/site'

type HeaderProps = {
  nav: NavItem[]
  showSearch?: boolean
  interactiveCart?: boolean
  overlay?: boolean
}

export function Header({
  nav,
  showSearch = false,
  interactiveCart = true,
  overlay = false,
}: HeaderProps) {
  const cart = useCart()
  const [solid, setSolid] = useState(false)
  const [menu, setMenu] = useState(false)
  const [openMega, setOpenMega] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menu])

  const activeMega = MEGA.find((m) => m.label === openMega)
  const isSolid = solid || !overlay

  return (
    <header
      className="header"
      data-solid={isSolid}
      data-menu={menu}
      data-mega={openMega ? 'true' : 'false'}
      onMouseLeave={() => setOpenMega(null)}
    >
      <div className="header__bar">
        <Link className="header__brand" to="/" aria-label="Human Coffe — inicio">
          <img src="/assets/logo-human-coffe.png" alt="Human Coffe" />
        </Link>

        <nav className="header__nav" aria-label="Principal">
          {nav.map((item) => {
            const mega = MEGA.find((m) => m.label === item.label)

            if (!mega) {
              return (
                <Link
                  key={item.label}
                  className="header__link"
                  to={item.to}
                  onMouseEnter={() => setOpenMega(null)}
                >
                  {item.label}
                </Link>
              )
            }

            return (
              <Link
                key={item.label}
                className="header__link header__link--mega"
                to={item.to}
                aria-expanded={openMega === item.label}
                onMouseEnter={() => setOpenMega(item.label)}
                onFocus={() => setOpenMega(item.label)}
              >
                {item.label}
                <span className="header__caret" aria-hidden="true">
                  ▾
                </span>
              </Link>
            )
          })}
        </nav>

        <div className="header__actions">
          {showSearch && (
            <button type="button" className="header__icon" aria-label="Buscar">
              ⌕
            </button>
          )}

          {interactiveCart ? (
            <button
              type="button"
              className="header__cart"
              onClick={cart.toggle}
              aria-expanded={cart.isOpen}
            >
              <span className="header__cart-label">Carro</span>
              <b>{cart.count}</b>
            </button>
          ) : (
            <Link className="header__cart" to="/#catalogo">
              <span className="header__cart-label">Carro</span>
              <b>{cart.count}</b>
            </Link>
          )}

          <button
            type="button"
            className="header__burger"
            aria-label={menu ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menu}
            onClick={() => setMenu((m) => !m)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {activeMega && (
        <div className="mega">
          <div className="mega__inner">
            <Link className="mega__feature" to={activeMega.to} onClick={() => setOpenMega(null)}>
              <img src={activeMega.feature.img} alt="" />
              <b>{activeMega.feature.title}</b>
              <span>{activeMega.feature.text}</span>
            </Link>

            {activeMega.columns.map((col) => (
              <div className="mega__col" key={col.heading}>
                <span className="mega__heading">{col.heading}</span>
                {col.links.map((l) => (
                  <Link key={l.label} to={l.to} onClick={() => setOpenMega(null)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      <nav className="header__drawer" data-open={menu} aria-label="Menú móvil">
        {nav.map((item, i) => (
          <Link
            key={item.label}
            to={item.to}
            onClick={() => setMenu(false)}
            style={{ '--i': i } as never}
          >
            {item.label}
          </Link>
        ))}
        <Link className="header__nav-cta" to="/#catalogo" onClick={() => setMenu(false)}>
          Comprar ahora →
        </Link>
      </nav>
    </header>
  )
}
