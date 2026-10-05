import { Accordion } from '../ui/Accordion'
import { FAQS } from '../../data/site'

export function Faq() {
  return (
    <div className="faq">
      <Accordion
        items={FAQS.map((f) => ({
          title: f.q,
          content: <p className="faq__answer">{f.a}</p>,
        }))}
      />
    </div>
  )
}