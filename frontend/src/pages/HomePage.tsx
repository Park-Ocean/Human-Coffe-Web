import { useState } from 'react'
import { Link } from 'react-router-dom'
import { TopBar } from '../components/layout/TopBar'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Reveal } from '../components/ui/Reveal'
import { Hero } from '../components/home/Hero'
import { Perks } from '../components/home/Perks'
import { Editorial } from '../components/home/Editorial'
import { Categories } from '../components/home/Categories'
import { ProductRail } from '../components/home/ProductRail'
import { Concept } from '../components/home/Concept'
import { SetupPack } from '../components/home/SetupPack'
import { Compare } from '../components/home/Compare'
import { Stats } from '../components/home/Stats'
import { BrandMarquee } from '../components/home/BrandMarquee'
import { Reviews } from '../components/home/Reviews'
import { Values } from '../components/home/Values'
import { Showroom } from '../components/home/Showroom'
import { Guides } from '../components/home/Guides'
import { Faq } from '../components/home/Faq'
import { Newsletter } from '../components/home/Newsletter'
import { NAV } from '../data/site'
import type { CatalogFilter } from '../data/site'

export function HomePage() {
  const [filter, setFilter] = useState<CatalogFilter>('all')

  return (
    <div className="texture">
      <TopBar variant="scroll" />
      <Header nav={NAV} showSearch />

      <main>
        {/* 01 · Descubrimiento */}
        <Hero />
        <Perks />

        {/* 02 · Exploración */}
        <Editorial />

        <Reveal as="section" id="categorias" className="section">
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

        {/* 03 · Consideración */}
        <Reveal as="section" id="catalogo" className="section section--tight">
          <div className="section__head section__head--ruled">
            <h2 className="section__title">Más vendidos</h2>
            <span className="section__meta">Despacho 24–72 h</span>
          </div>
          <ProductRail filter={filter} onFilterChange={setFilter} />
        </Reveal>

        <Concept />

        <Reveal as="div">
          <SetupPack />
        </Reveal>

        <Reveal as="section" id="compara" className="section">
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

        {/* 04 · Decisión y confianza */}
        <Stats />
        <BrandMarquee />
        <Reveal as="div">
          <Values />
        </Reveal>
        <Reveal as="div">
          <Showroom />
        </Reveal>

        {/* 05 · Post-compra y fidelización */}
        <Reveal as="section" id="guias" className="section">
          <div className="section__head">
            <h2 className="section__title">
              Guías y
              <br />
              recetas
            </h2>
            <Link to={{ pathname: '/', hash: '#guias' }} className="section__link">
              Ver todas →
            </Link>
          </div>
          <Guides />
        </Reveal>

        <Reveal as="section" className="section section--tight">
          <div className="section__head section__head--ruled">
            <h2 className="section__title">Reseñas</h2>
            <span className="section__meta">★ 4,9 / 5 · clientes verificados</span>
          </div>
          <Reviews />
        </Reveal>

        <Reveal as="section" id="faq" className="section">
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
