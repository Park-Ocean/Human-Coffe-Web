export type ProductId = 'df54' | 'df64' | 'em3801' | 'h10b'

export type CategoryId = 'g' | 'm'

export type SpecRow = readonly [key: string, value: string]

export type ColorOption = {
  name: string
  hex: string
}

export type Product = {
  id: ProductId
  brand: string
  name: string
  type: 'Molino' | 'Máquina'
  typePlural: string
  category: CategoryId
  sub: string
  desc: string
  price: number
  reviews: number
  tag: string
  tagColor: string
  images: string[]
  colors: ColorOption[]
  specs: SpecRow[]
  box: SpecRow[]
}

const TURIN = 'https://www.turingrinders.com/cdn/shop/files/'
const HIBREW = 'https://www.hibrew.com/cdn/shop/files/'
const MIELUX =
  'https://omo-oss-image1.thefastimg.com/portal-saas/pg2025111018300981385/cms/image/206acb26-2192-4b93-82cb-7d5e0cd0fbdf.jpg?vf=B7gH3s'

export const PRODUCTS: Product[] = [
  {
    id: 'df54',
    brand: 'Turin',
    name: 'DF54',
    type: 'Molino',
    typePlural: 'Molinos',
    category: 'g',
    sub: 'Plano 54 mm · single dose · ajuste sin pasos',
    desc: 'Molino single dose de fresas planas de 54 mm. Ajuste sin pasos, retención casi nula y tamaño compacto que cabe bajo cualquier mueble de cocina.',
    price: 289990,
    reviews: 212,
    tag: 'Más vendido',
    tagColor: '#E3EBDD',
    images: [
      TURIN + 'DF54_White_1_1024x1024@2x.jpg?v=1737056050',
      TURIN + 'DF54_4_5cfe09f7-3a3f-40f3-a598-a3be601845b8_1024x1024@2x.jpg?v=1737056050',
      TURIN + 'DF54_White_2_1024x1024@2x.jpg?v=1737056050',
    ],
    colors: [
      { name: 'Blanco', hex: '#C5D6BB' },
      { name: 'Negro', hex: '#1B1D19' },
    ],
    specs: [
      ['Fresas', '54 mm planas, acero inoxidable'],
      ['Ajuste', 'Sin pasos'],
      ['Motor', '150 W'],
      ['Retención', '< 0,1 g'],
      ['Anti-estática', 'Ionizador de plasma'],
      ['Medidas', '17,8 × 11,4 × 30,5 cm'],
      ['Peso', '4,5 kg'],
    ],
    box: [
      ['Incluye', 'Vaso dosificador, fuelle, brocha'],
      ['Uso', 'Espresso, V60, AeroPress, prensa'],
    ],
  },
  {
    id: 'df64',
    brand: 'Turin',
    name: 'DF64 Gen 2',
    type: 'Molino',
    typePlural: 'Molinos',
    category: 'g',
    sub: 'Plano 64 mm · compatible con fresas SSP',
    desc: 'El molino single dose de 64 mm de referencia. Generador de plasma contra la estática, cuerpo de aluminio y compatibilidad con fresas aftermarket SSP.',
    price: 449990,
    reviews: 95,
    tag: 'Pro',
    tagColor: '#8A8D84',
    images: [
      TURIN +
        'DF64_Gen_2_black_cup_new_base_b3af45a4-69df-45b8-ad3d-3ccfbcf05154_1024x1024@2x.jpg?v=1737056278',
      TURIN + 'DF64_Gen_2_White_with_Black_Dosing_Cup_1024x1024@2x.jpg?v=1737056278',
      TURIN + 'DF64_Gen_2_White_with_Black_Dosing_Cup_2_1024x1024@2x.jpg?v=1737056278',
    ],
    colors: [
      { name: 'Negro', hex: '#1B1D19' },
      { name: 'Blanco', hex: '#C5D6BB' },
    ],
    specs: [
      ['Fresas', '64 mm planas, acero inoxidable'],
      ['Ajuste', 'Sin pasos'],
      ['Motor', '250 W'],
      ['Anti-estática', 'Generador de plasma'],
      ['Fuelle', 'Hasta 50 g'],
      ['Apagado', 'Automático a los 45 s'],
      ['Peso', '6,8 kg'],
    ],
    box: [
      ['Incluye', 'Vaso dosificador, cuña de silicona, brocha'],
      ['Upgrade', 'Fresas SSP / DLC compatibles'],
    ],
  },
  {
    id: 'em3801',
    brand: 'Mielux',
    name: 'EM3801',
    type: 'Máquina',
    typePlural: 'Máquinas',
    category: 'm',
    sub: 'Doble caldera · PID · portafiltro 58 mm',
    desc: 'Máquina espresso de doble caldera con control PID: extrae y vaporiza leche al mismo tiempo. Portafiltro comercial de 58 mm, manómetro y flujómetro.',
    price: 529990,
    reviews: 38,
    tag: 'Nuevo',
    tagColor: '#8A8D84',
    images: [MIELUX],
    colors: [{ name: 'Acero', hex: '#C9C9C4' }],
    specs: [
      ['Calentamiento', 'Doble caldera'],
      ['Control', 'PID'],
      ['Bomba', 'ULKA 15 bar'],
      ['Portafiltro', '58 mm'],
      ['Indicadores', 'Manómetro + flujómetro'],
      ['Estanque', '2,0 L'],
      ['Potencia', '2800 W'],
    ],
    box: [
      ['Incluye', 'Portafiltro 58 mm, tamper, filtros 1 y 2 tazas'],
      ['Medidas', '43,5 × 24,7 × 34,2 cm'],
    ],
  },
  {
    id: 'h10b',
    brand: 'HiBREW',
    name: 'H10B',
    type: 'Máquina',
    typePlural: 'Máquinas',
    category: 'm',
    sub: 'Compacta · 20 bar · PID · portafiltro 51 mm',
    desc: 'Espresso compacta en acero inoxidable con PID, pre-infusión programable y manómetro. Lista para extraer en menos de un minuto.',
    price: 189990,
    reviews: 154,
    tag: 'Precio top',
    tagColor: '#E3EBDD',
    images: [
      HIBREW + 'H10b_a5bcea15-0586-4893-aaa8-4f879f8c6239.jpg?v=1745574250&width=1400',
      HIBREW + 'sku-1.jpg?v=1788157150&width=800',
      HIBREW + '02_87fa01a5-7479-48c6-a29c-208d8a80f711.jpg?v=1745574250&width=750',
    ],
    colors: [
      { name: 'Plata', hex: '#C9C9C4' },
      { name: 'Negro', hex: '#1B1D19' },
    ],
    specs: [
      ['Presión', '20 bar'],
      ['Portafiltro', '51 mm aluminio'],
      ['Control', 'PID, temperatura ajustable'],
      ['Pre-infusión', 'Programable'],
      ['Lanceta', 'Vapor 270°'],
      ['Estanque', '1,3 L'],
      ['Medidas', '31 × 13 × 28 cm'],
    ],
    box: [
      ['Incluye', 'Portafiltro, canastos 1 y 2 tazas, tamper'],
      ['Calentamiento', 'Termobloque'],
    ],
  },
]

const BY_ID = new Map<ProductId, Product>(PRODUCTS.map((p) => [p.id, p]))

export function getProduct(id: string | undefined): Product | undefined {
  return id ? BY_ID.get(id as ProductId) : undefined
}

export function productsByCategory(category: CategoryId | 'all'): Product[] {
  return category === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === category)
}

export const RELATED: Record<ProductId, ProductId[]> = {
  df54: ['h10b', 'em3801', 'df64'],
  df64: ['em3801', 'h10b', 'df54'],
  em3801: ['df64', 'df54', 'h10b'],
  h10b: ['df54', 'df64', 'em3801'],
}
export const SETUP = {
  ids: ['df54', 'h10b'] as const,
  discount: 0.08,
  title: 'Setup de inicio:',
  text: 'Molino plano de 54 mm y máquina con PID. La combinación más simple para pasar del café de cápsula al espresso real.',
}

export function setupTotals(): { full: number; price: number } {
  const full = SETUP.ids.reduce((acc, id) => acc + BY_ID.get(id)!.price, 0)
  return { full, price: Math.round((full * (1 - SETUP.discount)) / 10) * 10 }
}