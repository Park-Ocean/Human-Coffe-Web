import { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { TopBar } from '../components/layout/TopBar'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Gallery } from '../components/product/Gallery'
import { ColorPicker } from '../components/product/ColorPicker'
import { QuantityStepper } from '../components/product/QuantityStepper'
import { ProductPanels } from '../components/product/ProductPanels'
import { Related } from '../components/product/Related'
import { Toast } from '../components/product/Toast'
import { getProduct } from '../data/products'
import type { Product, ProductId } from '../data/products'
import { PDP_NAV, TRUST_BADGES } from '../data/site'
import { clp } from '../lib/format'
import { useCart } from '../context/cartContext'

const FALLBACK_ID: ProductId = 'h10b'
const TOAST_MS = 2200

function ProductView({ product }: { product: Product }) {
  const cart = useCart()
  const [img, setImg] = useState(0)
  const [color, setColor] = useState(0)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const [toast, setToast] = useState('')
  const toastTimer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(toastTimer.current), [])

  const colors = product.colors.length > 0 ? product.colors : [{ name: 'Único', hex: '#C9C9C4' }]

  function addToCart() {
    cart.add([product.id], qty)
    setAdded(true)
    setToast(`${qty} × ${product.name} en tu carro`)
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(''), TOAST_MS)
  }

  return (
    <>
      <section className="pdp">
        <Gallery
          images={product.images}
          alt={product.name}
          tag={product.tag}
          tagColor={product.tagColor}
          active={img}
          onSelect={setImg}
        />

        <div className="pdp__info">
          <span className="label">
            {product.brand} · {product.type} · ★★★★★ ({product.reviews})
          </span>

          <h1 className="pdp__title">{product.name}</h1>
          <p className="pdp__desc">{product.desc}</p>

          <div className="pdp__pricing">
            <b>{clp(product.price)}</b>
            <span className="mono" style={{ fontSize: 12 }}>
              o 6 × {clp(product.price / 6)} sin interés
            </span>
          </div>

          <ColorPicker colors={colors} active={color} onSelect={setColor} />

          <div className="pdp__buy">
            <QuantityStepper
              qty={qty}
              onDec={() => setQty((q) => Math.max(1, q - 1))}
              onInc={() => setQty((q) => q + 1)}
            />
            <button type="button" className="btn btn--deep btn--lg" onClick={addToCart}>
              {added ? 'Agregado ✓ — agregar otro' : `Agregar al carro — ${clp(product.price * qty)}`}
            </button>
          </div>

          <div className="pdp__trust">
            {TRUST_BADGES.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <ProductPanels product={product} />
        </div>
      </section>

      <Related current={product.id} />
      <Toast message={toast} />
    </>
  )
}

export function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const product = getProduct(id)

  if (!product) return <Navigate to={`/producto/${FALLBACK_ID}`} replace />

  return (
    <div className="texture">
      <TopBar variant="static" />
      <Header nav={PDP_NAV} interactiveCart={false} />

      <nav className="crumbs" aria-label="Migas de pan">
        <Link to="/">Inicio</Link>
        <span>/</span>
        <Link to={{ pathname: '/', hash: '#catalogo' }}>{product.typePlural}</Link>
        <span>/</span>
        <span>
          {product.brand} {product.name}
        </span>
      </nav>

      <main>
        <ProductView key={product.id} product={product} />
      </main>

      <Footer variant="slim" />
    </div>
  )
}