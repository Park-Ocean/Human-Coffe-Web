import { useState } from 'react'
import { TopBar } from '../components/layout/TopBar'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Reveal } from '../components/ui/Reveal'
import { Hero } from '../components/home/Hero'
import { Perks } from '../components/home/Perks'
import { Editorial } from '../components/home/Editorial'
import { Categories } from '../components/home/Categories'
import { ProductRail } from '../components/home/ProductRail'
import { Collections } from '../components/home/Collections'
import { SetupPack } from '../components/home/SetupPack'
import { Compare } from '../components/home/Compare'
import { Stats } from '../components/home/Stats'
import { BrandMarquee } from '../components/home/BrandMarquee'
import { Values } from '../components/home/Values'
import { RevealVideo } from '../components/home/RevealVideo'
import { Showroom } from '../components/home/Showroom'
import { Faq } from '../components/home/Faq'
import { Newsletter } from '../components/home/Newsletter'
import { NAV } from '../data/site'
import type { CatalogFilter } from '../data/site'

export function HomePage() {
  const [filter, setFilter] = useState<CatalogFilter>('all')

  return (
    <div className="page">
      <TopBar variant="scroll" />
      <Header nav={NAV} showSearch overlay />

      <main>
        {/* 01 · Descubrimiento */}
        <Hero />
        <Perks />

        {/* 02 · Exploración · categorías primero */}
        <Reveal as="section" id="categorias" className="section tone-mist tone-tex">
          <div className="section__head">
            <h2 className="section__title">
              Compra por
              <br />
              categoría
            </h2>
            <span className="section__meta">03 líneas</span>
          </div>
          <Categories onPick={setFilter} />
        </Reveal>

        {/* 03 · Catálogo · más vendidos */}
        <Reveal as="section" id="catalogo" className="section section--tight tone-cream">
          <div className="section__head section__head--ruled">
            <h2 className="section__title">Más vendidos</h2>
            <span className="section__meta">Despacho 24–72 h</span>
          </div>
          <ProductRail filter={filter} onFilterChange={setFilter} />
        </Reveal>

        {/* 04 · Colecciones · entrada visual */}
        <Reveal as="section" className="section tone-sage">
          <div className="section__head">
            <h2 className="section__title">Colecciones</h2>
            <span className="section__meta">Elige por dónde empezar</span>
          </div>
          <Collections />
        </Reveal>

        {/* 05 · Oferta destacada · pack */}
        <Reveal as="div">
          <SetupPack />
        </Reveal>

        {/* 05 · Educación · cómo elegir */}
        <div className="tone-sage">
          <Editorial />
        </div>

        {/* 06 · Decisión · compara */}
        <Reveal as="section" id="compara" className="section tone-cream">
          <div className="section__head">
            <h2 className="section__title">
              ¿Cuál es
              <br />
              para ti?
            </h2>
            <span className="section__meta">Compara lado a lado</span>
          </div>
          <Compare />
        </Reveal>

        {/* 07 · Marca y prueba */}
        <RevealVideo />
        <Stats />
        <BrandMarquee />

        {/* 08 · Confianza */}
        <Reveal as="div" className="tone-mist">
          <Values />
        </Reveal>

        {/* 09 · Asesoría 1 a 1 */}
        <Reveal as="div" className="tone-sage">
          <Showroom />
        </Reveal>

        {/* 10 · Dudas y captura */}
        <Reveal as="section" id="faq" className="section tone-cream">
          <div className="faq-section">
            <h2 className="section__title">
              Preguntas
              <br />
              frecuentes
            </h2>
            <Faq />
          </div>
        </Reveal>

        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}
