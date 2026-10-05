import type { ColorOption } from '../../data/products'

type ColorPickerProps = {
  colors: ColorOption[]
  active: number
  onSelect: (index: number) => void
}

export function ColorPicker({ colors, active, onSelect }: ColorPickerProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <span className="pdp__color-head">Color — {colors[active].name}</span>
      <div className="pdp__swatches">
        {colors.map((c, i) => (
          <button
            key={c.name}
            type="button"
            className="swatch"
            aria-label={c.name}
            aria-pressed={i === active}
            title={c.name}
            style={{
              background: c.hex,
              outline: i === active ? '2px solid var(--deep)' : 'none',
            }}
            onClick={() => onSelect(i)}
          />
        ))}
      </div>
    </div>
  )
}