type GalleryProps = {
  images: string[]
  alt: string
  tag: string
  tagColor: string
  active: number
  onSelect: (index: number) => void
}

export function Gallery({ images, alt, tag, tagColor, active, onSelect }: GalleryProps) {
  return (
    <div className="pdp__gallery">
      <div className="pdp__main">
        <img src={images[active] ?? images[0]} alt={alt} />
        <span className="tag pdp__tag" style={{ background: tagColor }}>
          {tag}
        </span>
      </div>

      {images.length > 1 && (
        <div className="pdp__thumbs">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              className="pdp__thumb"
              aria-label={`Ver imagen ${i + 1} de ${alt}`}
              aria-pressed={i === active}
              style={{ outline: i === active ? '2px solid var(--deep)' : 'none' }}
              onClick={() => onSelect(i)}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}