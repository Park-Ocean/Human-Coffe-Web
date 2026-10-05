import { useId, useState } from 'react'
import type { ReactNode } from 'react'
import type { SpecRow } from '../../data/products'

type Item = {
  title: string
  content: ReactNode
}

type AccordionProps = {
  items: Item[]
  className?: string
  triggerClassName?: string
}

export function Accordion({ items, className, triggerClassName }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <div className={className}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div className="accordion" key={item.title}>
            <button
              type="button"
              className={`accordion__trigger ${triggerClassName ?? ''}`}
              aria-expanded={isOpen}
              aria-controls={`${baseId}-panel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{item.title}</span>
              <span className="accordion__icon" aria-hidden="true">
                +
              </span>
            </button>
            <div
              className="accordion__panel"
              id={`${baseId}-panel-${i}`}
              data-open={isOpen}
              role="region"
            >
              <div className="accordion__inner">{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function SpecList({ rows, spacer = 14 }: { rows: readonly SpecRow[]; spacer?: number }) {
  return (
    <>
      {rows.map(([key, value]) => (
        <div className="spec-row" key={key}>
          <span className="spec-row__key">{key}</span>
          <span>{value}</span>
        </div>
      ))}
      <div style={{ height: spacer }} />
    </>
  )
}