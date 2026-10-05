type QuantityStepperProps = {
  qty: number
  onDec: () => void
  onInc: () => void
}

export function QuantityStepper({ qty, onDec, onInc }: QuantityStepperProps) {
  return (
    <div className="stepper">
      <button type="button" onClick={onDec} aria-label="Quitar una unidad">
        −
      </button>
      <span aria-live="polite" aria-label={`Cantidad: ${qty}`}>
        {qty}
      </span>
      <button type="button" onClick={onInc} aria-label="Agregar una unidad">
        +
      </button>
    </div>
  )
}