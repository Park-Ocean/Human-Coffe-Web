import { Accordion, SpecList } from '../ui/Accordion'
import { SHIPPING_ROWS } from '../../data/site'
import type { Product } from '../../data/products'

export function ProductPanels({ product }: { product: Product }) {
  return (
    <div className="pdp__panels">
      <Accordion
        items={[
          {
            title: 'Especificaciones',
            content: <SpecList rows={product.specs} />,
          },
          {
            title: 'En la caja',
            content: <SpecList rows={product.box} />,
          },
          {
            title: 'Envío y garantía',
            content: <SpecList rows={SHIPPING_ROWS} />,
          },
        ]}
      />
    </div>
  )
}