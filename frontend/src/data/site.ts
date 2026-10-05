import type { CategoryId, ProductId } from './products'

export type CatalogFilter = CategoryId | 'all'

export const CATALOG_FILTERS: { key: CatalogFilter; label: string }[] = [
  { key: 'all', label: 'Todo' },
  { key: 'g', label: 'Molinos' },
  { key: 'm', label: 'Máquinas' },
]

export const SITE = {
  name: 'Human Coffe',
  email: 'hola@humancoffe.cl',
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
  { label: 'Guías', to: '/#guias' },
  { label: 'Contacto', to: '/#contacto' },
]

export const PDP_NAV: NavItem[] = [
  { label: 'Molinos', to: '/#catalogo' },
  { label: 'Máquinas', to: '/#catalogo' },
  { label: 'Compara', to: '/#compara' },
  { label: 'Guías', to: '/#guias' },
]

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
  video: '',
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
  rows: [
    ['WhatsApp', '+56 9 1234 5678'],
    ['Correo', 'hola@humancoffe.cl'],
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

export type Guide = {
  title: string
  tag: string
  time: string
  img: string
}

export const GUIDES: Guide[] = [
  {
    title: 'Single dosing: por qué pesar cada dosis',
    tag: 'Molinos',
    time: '6 min',
    img: '/assets/granos.png',
  },
  {
    title: 'Tu primer shot: 18 g in, 36 g out',
    tag: 'Espresso',
    time: '8 min',
    img: '/assets/origen.png',
  },
  {
    title: 'Cómo limpiar tu molino plano',
    tag: 'Mantención',
    time: '5 min',
    img: '/assets/tostador.png',
  },
]

export type Review = {
  quote: string
  who: string
  product: string
  color: string
  font: 'sans' | 'serif'
  size: string
}

export const REVIEWS: Review[] = [
  {
    quote: 'El DF54 llegó listo para usar y la retención es prácticamente cero.',
    who: 'Cliente — Santiago',
    product: 'DF54',
    color: '#D6E2CF',
    font: 'sans',
    size: '24px',
  },
  {
    quote: 'Por el precio, la H10B da un control de temperatura que no esperaba.',
    who: 'Cliente — Valparaíso',
    product: 'H10B',
    color: '#E3EBDD',
    font: 'serif',
    size: '32px',
  },
  {
    quote: 'Me asesoraron para elegir entre DF54 y DF64. Cero vueltas.',
    who: 'Cliente — Concepción',
    product: 'DF64',
    color: '#D6E2CF',
    font: 'sans',
    size: '24px',
  },
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

export const SHIPPING_ROWS: readonly (readonly [string, string])[] = [
  ['Santiago', '24–48 h hábiles'],
  ['Regiones', '2–5 días hábiles'],
  ['Garantía', '12 meses, servicio técnico en Chile'],
  ['Cambios', '10 días desde la entrega'],
]