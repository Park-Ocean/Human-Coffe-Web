import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/cartContext'
import type { NavItem } from '../../data/site'

type HeaderProps = {
  nav: NavItem[]
  showSearch?: boolean
  interactiveCart?: boolean
}

export function Header({ nav, showSearch = false, interactiveCart = true }: HeaderProps) {
  const cart = useCart()
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menu])

  return (
    <header className="header" data-menu={menu}>
      <span className="header__progress" aria-hidden="true" />

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

      <Link className="header__brand" to="/" aria-label="Human Coffe — inicio">
        <img src="/assets/logo-human-coffe.png" alt="Human Coffe" />
      </Link>

      <nav className="header__nav" data-open={menu} aria-label="Principal">
        {nav.map((item, i) => (
          <Link key={item.label} to={item.to} onClick={() => setMenu(false)} style={{ '--i': i } as never}>
            {item.label}
          </Link>
        ))}
        <Link className="header__nav-cta" to="/#catalogo" onClick={() => setMenu(false)}>
          Comprar ahora →
        </Link>
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
      </div>
    </header>
  )
}
