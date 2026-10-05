const nf = new Intl.NumberFormat('es-CL', { maximumFractionDigits: 0 })

export function clp(value: number): string {
  return `$${nf.format(Math.round(value))}`
}

export function installment(value: number, months = 6): string {
  return clp(value / months)
}