import type { CategoryId, ProductId } from './products'

export type CatalogFilter = CategoryId | 'all'

export const CATALOG_FILTERS: { key: CatalogFilter; label: string }[] = [
  { key: 'all', label: 'Todo' },
  { key: 'g', label: 'Molinos' },
  { key: 'm', label: 'Máquinas' },
]

export const SITE = {
  name: 'Human Coffe',
  email: 'human.coffe.cl@gmail.com',
  tagline: 'Implementos para café de especialidad — Chile',
  promise: 'No vendemos café. Vendemos con qué hacerlo bien.',
} as const

export type NavItem = {
  label: string
  to: string
}

export const NAV: NavItem[] = [
  { label: 'Molinos', to: '/#catalogo' },
  { label: 'Máquinas', to: '/#catalogo' },
  { label: 'Accesorios', to: '/#categorias' },
  { label: 'Compara', to: '/#compara' },
  { label: 'Contacto', to: '/#contacto' },
]

export const PDP_NAV: NavItem[] = [
  { label: 'Molinos', to: '/#catalogo' },
  { label: 'Máquinas', to: '/#catalogo' },
  { label: 'Compara', to: '/#compara' },
]

export type MegaLink = { label: string; to: string }
export type MegaColumn = { heading: string; links: MegaLink[] }
export type MegaMenu = {
  label: string
  to: string
  columns: MegaColumn[]
  feature: { img: string; title: string; text: string }
}

export const MEGA: MegaMenu[] = [
  {
    label: 'Molinos',
    to: '/#catalogo',
    columns: [
      {
        heading: 'Por uso',
        links: [
          { label: 'Espresso', to: '/#catalogo' },
          { label: 'Filtro', to: '/#catalogo' },
          { label: 'Manuales', to: '/#catalogo' },
        ],
      },
      {
        heading: 'Por fresa',
        links: [
          { label: 'Planas 54 mm', to: '/#catalogo' },
          { label: 'Planas 64 mm', to: '/#catalogo' },
          { label: 'Cónicas', to: '/#catalogo' },
        ],
      },
    ],
    feature: {
      img: '/assets/tostador.png',
      title: 'Single dose',
      text: 'Retención casi nula y ajuste sin pasos para pesar cada dosis.',
    },
  },
  {
    label: 'Máquinas',
    to: '/#catalogo',
    columns: [
      {
        heading: 'Por sistema',
        links: [
          { label: 'Espresso', to: '/#catalogo' },
          { label: 'Superautomáticas', to: '/#catalogo' },
        ],
      },
      {
        heading: 'Por caldera',
        links: [
          { label: 'Termobloque', to: '/#catalogo' },
          { label: 'Doble caldera', to: '/#catalogo' },
        ],
      },
    ],
    feature: {
      img: '/assets/interior.png',
      title: 'Control PID',
      text: 'Temperatura estable para extraer y vaporizar sin tiempos muertos.',
    },
  },
  {
    label: 'Accesorios',
    to: '/#categorias',
    columns: [
      {
        heading: 'Preparación',
        links: [
          { label: 'Tampers', to: '/#categorias' },
          { label: 'WDT', to: '/#categorias' },
          { label: 'Balanzas', to: '/#categorias' },
        ],
      },
      {
        heading: 'Servicio',
        links: [
          { label: 'Filtros', to: '/#categorias' },
          { label: 'Termos', to: '/#categorias' },
          { label: 'Tazas', to: '/#categorias' },
        ],
      },
    ],
    feature: {
      img: '/assets/granos.png',
      title: 'Afina el ritual',
      text: 'Los detalles chicos que separan un shot correcto de uno memorable.',
    },
  },
]

export const VIDEOS = {
  hero: 'https://videos.pexels.com/video-files/19428460/19428460-hd_1920_1080_24fps.mp4',
  reveal: 'https://videos.pexels.com/video-files/19428460/19428460-hd_1920_1080_24fps.mp4',
  poster: '/assets/interior.png',
} as const

export const HERO = {
  eyebrow: 'Café de especialidad · Equipamiento · Chile',
  lines: [
    { text: 'Tu café.', style: 'solid' },
    { text: 'Tus reglas.', style: 'outline' },
    { text: 'Nuestras herramientas.', style: 'solid' },
  ],
  sub: 'Molinos, máquinas y accesorios para hacer espresso en casa. No vendemos café: vendemos con qué hacerlo bien.',
  cta: { label: 'Comprar ahora', to: '/#catalogo' },
  ctaAlt: { label: 'Cómo elegir', to: '/#empezar' },
  video: VIDEOS.hero,
  poster: '/assets/interior.png',
  ticker: ['Single dose', 'Fresas planas', 'Control PID', 'Doble caldera', 'Versión 220 V', 'Envío a todo Chile'],
} as const

export type EditorialBlock = {
  n: string
  img: string
  title: string
  text: string
}

export const EDITORIAL: EditorialBlock[] = [
  {
    n: '01',
    img: '/assets/granos.png',
    title: 'Empieza por el molino',
    text: 'El molino define más el sabor que la máquina. Fresas planas, retención baja y ajuste fino desde el primer día.',
  },
  {
    n: '02',
    img: '/assets/tostador.png',
    title: 'Suma la máquina',
    text: 'Doble caldera y control PID para extraer y vaporizar sin tiempos muertos ni adivinar la temperatura.',
  },
  {
    n: '03',
    img: '/assets/origen.png',
    title: 'Afina el ritual',
    text: 'Balanzas, tamper y WDT. Los detalles chicos que separan un shot correcto de uno memorable.',
  },
]

export type Stat = {
  value: number
  decimals?: number
  suffix: string
  label: string
}

export const STATS: Stat[] = [
  { value: 4.9, decimals: 1, suffix: '★', label: 'Valoración media' },
  { value: 3000, suffix: '+', label: 'Pedidos despachados' },
  { value: 12, suffix: ' meses', label: 'Garantía en equipos' },
  { value: 48, suffix: ' h', label: 'Despacho en Santiago' },
]

export type Value = {
  n: string
  title: string
  text: string
}

export const VALUES: Value[] = [
  {
    n: '01',
    title: 'Equipos honestos',
    text: 'Máquinas reparables y con repuestos disponibles en Chile. Nada pensado para durar un verano.',
  },
  {
    n: '02',
    title: 'Asesoría de verdad',
    text: 'Te preguntamos qué tomas y cuánto antes de recomendarte un equipo. Sin vender de más.',
  },
  {
    n: '03',
    title: 'Servicio técnico local',
    text: 'Garantía y reparación en Chile. No mandamos tu equipo al exterior ni te dejamos sin respuesta.',
  },
  {
    n: '04',
    title: 'Del grano a casa',
    text: 'Envío protegido a todo el país, con seguimiento y embalaje reforzado para equipos de precisión.',
  },
]

export const SHOWROOM = {
  title: 'Atención 1 a 1',
  text: 'Cuéntanos qué buscas y armamos una recomendación a tu medida. Coordinamos envío, retiro o una demo antes de comprar.',
  manifesto:
    'Creemos que el café de especialidad es, ante todo, un café más humano: hecho con tiempo, cuidado y las herramientas correctas.',
  rows: [
    ['WhatsApp', '+56 9 1234 5678'],
    ['Correo', 'human.coffe.cl@gmail.com'],
    ['Showroom', 'Providencia, Santiago'],
    ['Horario', 'Lun a Vie · 10:00–18:00'],
  ] as const,
} as const

export type Perk = {
  n: string
  title: string
  desc: string
  color: string
}

export const PERKS: Perk[] = [
  { n: '01', title: 'Envío a todo Chile', desc: 'Gratis sobre $150.000', color: '#E3EBDD' },
  { n: '02', title: 'Garantía 12 meses', desc: 'Servicio técnico local', color: '#8A8D84' },
  { n: '03', title: '6 cuotas sin interés', desc: 'Webpay · Mercado Pago', color: '#2F3A2C' },
  { n: '04', title: 'Asesoría experta', desc: 'Te ayudamos a elegir', color: '#D6E2CF' },
]

export type Faq = {
  q: string
  a: string
}

export const FAQS: Faq[] = [
  {
    q: '¿Venden café en grano?',
    a: 'No. Human Coffe es una tienda exclusiva de implementos: molinos, máquinas espresso y accesorios.',
  },
  {
    q: '¿Cuánto demora el envío?',
    a: 'Santiago 24–48 h hábiles. Regiones 2–5 días hábiles vía courier, con número de seguimiento.',
  },
  {
    q: '¿Los equipos son 220 V?',
    a: 'Sí. Todos los equipos que vendemos son versión 220 V con enchufe compatible para Chile.',
  },
  {
    q: '¿Qué garantía tienen?',
    a: '12 meses por defectos de fabricación, con servicio técnico y repuestos en Chile.',
  },
  {
    q: '¿Puedo pagar en cuotas?',
    a: 'Hasta 6 cuotas sin interés con tarjetas de crédito vía Webpay o Mercado Pago.',
  },
]

export type CompareRow = {
  key: string
  a: string
  b: string
}

export type CompareSet = {
  a: ProductId
  b: ProductId
  rows: CompareRow[]
}

export const COMPARE: Record<'g' | 'm', CompareSet> = {
  g: {
    a: 'df54',
    b: 'df64',
    rows: [
      { key: 'Fresas', a: '54 mm planas', b: '64 mm planas' },
      { key: 'Motor', a: '150 W', b: '250 W' },
      { key: 'Ajuste', a: 'Sin pasos', b: 'Sin pasos' },
      { key: 'Anti-estática', a: 'Ionizador', b: 'Generador de plasma' },
      { key: 'Fresas opcionales', a: 'Espresso / filtro', b: 'SSP, DLC y más' },
      { key: 'Ideal para', a: 'Partir en espresso', b: 'Espresso + filtro intensivo' },
    ],
  },
  m: {
    a: 'h10b',
    b: 'em3801',
    rows: [
      { key: 'Calentamiento', a: 'Termobloque', b: 'Doble caldera' },
      { key: 'Portafiltro', a: '51 mm', b: '58 mm' },
      { key: 'Control temp.', a: 'PID', b: 'PID' },
      { key: 'Bomba', a: '20 bar', b: '15 bar ULKA' },
      { key: 'Estanque', a: '1,3 L', b: '2,0 L' },
      {
        key: 'Ideal para',
        a: 'Espacios pequeños',
        b: 'Leche + espresso simultáneo',
      },
    ],
  },
}

export const COMPARE_TABS = [
  { key: 'g', label: 'Molinos' },
  { key: 'm', label: 'Máquinas' },
] as const

export const TOPBAR_MESSAGES = [
  'Solo implementos — no vendemos café',
  'Envío a todo Chile',
  'Garantía 12 meses',
  '6 cuotas sin interés',
  'Equipos 220 V',
]

export const TOPBAR_SHORT = [
  'Solo implementos — no vendemos café',
  'Envío a todo Chile',
  '6 cuotas sin interés',
]

export const BRANDS_MARQUEE = [
  'Turin',
  '✶',
  'HiBREW',
  '✶',
  'Mielux',
  '✶',
  'Molinos planos',
  '✶',
  'Espresso PID',
  '✶',
]

export const TRUST_BADGES = ['Despacho 24–72 h', 'Garantía 12 meses', 'Versión 220 V']

export type SocialId = 'instagram' | 'tiktok' | 'facebook' | 'whatsapp'

export type Social = {
  id: SocialId
  label: string
  href: string
}

export const SOCIAL: Social[] = [
  { id: 'instagram', label: 'Instagram', href: '' },
  { id: 'tiktok', label: 'TikTok', href: '' },
  { id: 'facebook', label: 'Facebook', href: '' },
  { id: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/56912345678' },
]

export const FOOTER_TICKER = [
  'Armá tu ritual',
  '✶',
  'Herramientas honestas',
  '✶',
  'Molinos espresso',
  '✶',
  'Despacho a todo Chile',
  '✶',
  'Servicio técnico local',
  '✶',
]

export const SHIPPING_ROWS: readonly (readonly [string, string])[] = [
  ['Santiago', '24–48 h hábiles'],
  ['Regiones', '2–5 días hábiles'],
  ['Garantía', '12 meses, servicio técnico en Chile'],
  ['Cambios', '10 días desde la entrega'],
]