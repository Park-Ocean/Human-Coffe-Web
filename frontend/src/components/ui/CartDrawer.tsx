import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/cartContext'
import { clp } from '../../lib/format'

export function CartDrawer() {
  const cart = useCart()

  useEffect(() => {
    document.body.style.overflow = cart.isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [cart.isOpen])

  return (
    <>
      <div
        className="cart-overlay"
        data-open={cart.isOpen}
        onClick={cart.close}
        aria-hidden="true"
      />

      <aside
        className="cart-drawer"
        data-open={cart.isOpen}
        aria-label="Tu carro"
        aria-hidden={!cart.isOpen}
      >
        <div className="cart-drawer__head">
          <b className="cart-drawer__title">Tu carro ({cart.count})</b>
          <button type="button" className="icon-btn" onClick={cart.close} aria-label="Cerrar carro">
            ✕
          </button>
        </div>

        <div className="cart-drawer__body">
          {cart.isEmpty && (
            <p className="mono" style={{ fontSize: 13 }}>
              Tu carro está vacío.
            </p>
          )}

          {cart.lines.map((line) => (
            <div className="cart-line" key={line.product.id}>
              <img
                className="cart-line__img"
                src={line.product.images[0]}
                alt={line.product.name}
              />
              <div className="cart-line__info">
                <b className="cart-line__name">{line.product.name}</b>
                <span className="cart-line__meta">
                  {line.qty} × {clp(line.product.price)}
                </span>
              </div>
              <button
                type="button"
                className="cart-line__remove"
                onClick={() => cart.remove(line.product.id)}
              >
                Quitar
              </button>
            </div>
          ))}
        </div>

        <div className="cart-drawer__foot">
          <div className="cart-drawer__row">
            <span>Subtotal</span>
            <b>{clp(cart.total)}</b>
          </div>
          <button type="button" className="btn btn--deep btn--block btn--lg">
            Ir a pagar →
          </button>
          <Link
            to="/"
            className="mono"
            style={{ fontSize: 11, textTransform: 'uppercase', textAlign: 'center' }}
            onClick={cart.close}
          >
            Seguir comprando
          </Link>
        </div>
      </aside>
    </>
  )
}