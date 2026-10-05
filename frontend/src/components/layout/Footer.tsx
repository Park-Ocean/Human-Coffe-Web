import { Link } from 'react-router-dom'
import { SITE } from '../../data/site'

const COLUMNS = [
  {
    heading: 'Tienda',
    links: [
      { label: 'Molinos', to: '/#catalogo' },
      { label: 'Máquinas', to: '/#catalogo' },
      { label: 'Accesorios', to: '/#categorias' },
      { label: 'Comparar', to: '/#compara' },
    ],
  },
  {
    heading: 'Aprende',
    links: [
      { label: 'Guías y recetas', to: '/#guias' },
      { label: 'Cómo elegir', to: '/#empezar' },
      { label: 'Preguntas frecuentes', to: '/#faq' },
    ],
  },
  {
    heading: 'Ayuda',
    links: [
      { label: 'Envíos y plazos', to: '/#contacto' },
      { label: 'Cambios y devoluciones', to: '/#contacto' },
      { label: 'Garantía y servicio técnico', to: '/#contacto' },
    ],
  },
  {
    heading: 'Contacto',
    links: [
      { label: SITE.email, to: '/#contacto' },
      { label: 'WhatsApp', to: '/#contacto' },
      { label: 'Instagram', to: '/#contacto' },
    ],
  },
]

const PAYMENTS = ['Webpay', 'Mercado Pago', 'Transferencia']
const YEAR = new Date().getFullYear()

export function Footer({ variant = 'full' }: { variant?: 'full' | 'slim' }) {
  if (variant === 'slim') {
    return (
      <footer className="footer footer--slim">
        <span className="footer__wordmark">{SITE.name}</span>
        <span className="footer__slim-meta">{SITE.email}</span>
      </footer>
    )
  }

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <img src="/assets/logo-human-coffe.png" alt="Human Coffe" />
          <p>{SITE.promise}</p>
        </div>

        <div className="footer__cols">
          {COLUMNS.map((col) => (
            <div className="footer__col" key={col.heading}>
              <span className="footer__heading">{col.heading}</span>
              {col.links.map((l) => (
                <Link key={l.label} to={l.to}>
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer__pay">
        <span className="footer__heading">Medios de pago</span>
        <div className="footer__pay-chips">
          {PAYMENTS.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
      </div>

      <div className="footer__wordmark" aria-hidden="true">
        {SITE.name}
      </div>

      <div className="footer__legal">
        <span>© {YEAR} {SITE.name}</span>
        <span>Santiago, Chile</span>
      </div>
    </footer>
  )
}
