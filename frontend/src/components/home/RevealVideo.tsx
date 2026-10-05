import { useInView } from '../../hooks/useInView'
import { VIDEOS } from '../../data/site'

export function RevealVideo() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3)

  return (
    <section className="reveal-video">
      <div className="reveal-video__sticky">
        <div className="reveal-video__frame" ref={ref} data-open={inView}>
          <video
            className="reveal-video__media"
            autoPlay
            muted
            loop
            playsInline
            poster={VIDEOS.poster}
          >
            <source src={VIDEOS.reveal} type="video/mp4" />
          </video>
          <span className="reveal-video__scrim" />
          <div className="reveal-video__copy">
            <span className="reveal-video__label">El ritual</span>
            <h2 className="reveal-video__title">
              Herramientas para un
              <br />
              café más humano
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
