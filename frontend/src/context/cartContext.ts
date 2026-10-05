import { createContext, useContext } from 'react'
import type { Product, ProductId } from '../data/products'

export type CartState = Record<ProductId, number>

export type CartLine = {
  product: Product
  qty: number
  lineTotal: number
}

export type CartApi = {
  lines: CartLine[]
  count: number
  total: number
  isEmpty: boolean
  isOpen: boolean
  qtyOf: (id: ProductId) => number
  add: (ids: ProductId[], qty?: number) => void
  setQty: (id: ProductId, qty: number) => void
  remove: (id: ProductId) => void
  clear: () => void
  open: () => void
  close: () => void
  toggle: () => void
}

export const CartContext = createContext<CartApi | null>(null)

export function useCart(): CartApi {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>')
  return ctx
}