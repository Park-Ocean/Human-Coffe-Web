import { Link } from 'react-router-dom'
import { Marquee } from '../ui/Marquee'
import { FOOTER_TICKER, SITE, SOCIAL } from '../../data/site'
import type { Social, SocialId } from '../../data/site'

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

function SocialIcon({ id }: { id: SocialId }) {
  if (id === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0-2.16C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.35 2.67.94 3.34.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.85 5.85 0 0 0 2.12-1.38c.66-.66 1.08-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.85 5.85 0 0 0-1.38-2.12A5.85 5.85 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
      </svg>
    )
  }

  if (id === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.07C24 5.44 18.63.07 12 .07S0 5.44 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.61 23.02 24 18.06 24 12.07Z" />
      </svg>
    )
  }

  if (id === 'tiktok') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.53.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.18-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35ZM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88Zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.48-8.41Z" />
    </svg>
  )
}

function SocialButton({ social }: { social: Social }) {
  const content = (
    <>
      <SocialIcon id={social.id} />
      <span className="sr-only">{social.label}</span>
    </>
  )

  if (!social.href) {
    return (
      <span className="footer__social-btn" aria-disabled="true" title={`${social.label} · pronto`}>
        {content}
      </span>
    )
  }

  return (
    <a
      className="footer__social-btn"
      href={social.href}
      target="_blank"
      rel="noreferrer"
      aria-label={social.label}
    >
      {content}
    </a>
  )
}

export function Footer({ variant = 'full' }: { variant?: 'full' | 'slim' }) {
  if (variant === 'slim') {
    return (
      <footer className="footer footer--slim">
        <span className="footer__wordmark">{SITE.name}</span>
        <span className="footer__slim-meta">{SITE.email}</span>
      </footer>
    )
  }

  const whatsapp = SOCIAL.find((s) => s.id === 'whatsapp')

  return (
    <footer className="footer">
      <div className="footer__marquee">
        <Marquee items={FOOTER_TICKER} />
      </div>

      <div className="footer__top">
        <div className="footer__brand">
          <img src="/assets/logo-human-coffe.png" alt="Human Coffe" />
          <p>{SITE.promise}</p>
          <div className="footer__social">
            {SOCIAL.map((s) => (
              <SocialButton key={s.id} social={s} />
            ))}
          </div>
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

      <div className="footer__reach">
        <div className="footer__reach-copy">
          <span className="footer__heading">Atención 1 a 1</span>
          <b className="footer__reach-title">¿No sabes qué equipo te conviene?</b>
          <p>
            Cuéntanos cómo tomas tu café y te recomendamos molino, máquina o accesorios sin venderte
            de más.
          </p>
        </div>

        <div className="footer__reach-actions">
          <span className="footer__seal" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <defs>
                <path
                  id="footer-seal-path"
                  d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                  fill="none"
                />
              </defs>
              <text>
                <textPath href="#footer-seal-path" startOffset="0">
                  Síguenos ✶ Human Coffe ✶
                </textPath>
              </text>
            </svg>
          </span>

          {whatsapp && (
            <a className="footer__wsp" href={whatsapp.href} target="_blank" rel="noreferrer">
              <SocialIcon id="whatsapp" />
              Háblanos por WhatsApp
            </a>
          )}
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
        <span>
          © {YEAR} {SITE.name}
        </span>
        <span>Santiago, Chile · Solo implementos, no vendemos café</span>
      </div>
    </footer>
  )
}
