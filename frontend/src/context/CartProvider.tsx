import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { CartContext } from './cartContext'
import type { CartState } from './cartContext'
import { getProduct } from '../data/products'
import type { ProductId } from '../data/products'

const STORAGE_KEY = 'human-coffe:cart'

const EMPTY: CartState = { df54: 0, df64: 0, em3801: 0, h10b: 0 }

function readStorage(): CartState {
  if (typeof window === 'undefined') return EMPTY
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return EMPTY
    const parsed: unknown = JSON.parse(raw)
    if (typeof parsed !== 'object' || parsed === null) return EMPTY
    const next: CartState = { ...EMPTY }
    for (const key of Object.keys(EMPTY) as ProductId[]) {
      const value = (parsed as Record<string, unknown>)[key]
      if (typeof value === 'number' && Number.isFinite(value) && value > 0) {
        next[key] = Math.floor(value)
      }
    }
    return next
  } catch {
    return EMPTY
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartState>(readStorage)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
    } catch {
    }
  }, [cart])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  const add = useCallback((ids: ProductId[], qty = 1) => {
    setCart((prev) => {
      const next = { ...prev }
      for (const id of ids) next[id] = (next[id] ?? 0) + qty
      return next
    })
    setIsOpen(true)
  }, [])

  const setQty = useCallback((id: ProductId, qty: number) => {
    setCart((prev) => ({ ...prev, [id]: Math.max(0, Math.floor(qty)) }))
  }, [])

  const remove = useCallback((id: ProductId) => {
    setCart((prev) => ({ ...prev, [id]: 0 }))
  }, [])

  const clear = useCallback(() => setCart(EMPTY), [])

  const api = useMemo(() => {
    const lines = (Object.keys(cart) as ProductId[])
      .map((id) => {
        const product = getProduct(id)
        const qty = cart[id]
        if (!product || qty <= 0) return null
        return { product, qty, lineTotal: product.price * qty }
      })
      .filter((line): line is NonNullable<typeof line> => line !== null)

    return {
      lines,
      count: lines.reduce((acc, l) => acc + l.qty, 0),
      total: lines.reduce((acc, l) => acc + l.lineTotal, 0),
      isEmpty: lines.length === 0,
      isOpen,
      qtyOf: (id: ProductId) => cart[id] ?? 0,
      add,
      setQty,
      remove,
      clear,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((v) => !v),
    }
  }, [cart, isOpen, add, setQty, remove, clear])

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>
}