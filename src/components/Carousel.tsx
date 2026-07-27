import { useEffect, useState, type ReactNode } from 'react'
import './Carousel.css'

type Props = {
  items: ReactNode[]
  intervalMs?: number
  label?: string
}

export function Carousel({ items, intervalMs = 5000, label = 'Carrusel' }: Props) {
  const [index, setIndex] = useState(0)
  const count = items.length

  useEffect(() => {
    if (count <= 1) return
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % count)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [count, intervalMs])

  if (count === 0) return null

  return (
    <div className="carousel" aria-roledescription="carousel" aria-label={label}>
      <div className="carousel__viewport">
        {items.map((item, i) => (
          <div
            key={i}
            className={`carousel__slide${i === index ? ' carousel__slide--active' : ''}`}
            aria-hidden={i !== index}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="carousel__controls">
        <button
          type="button"
          className="carousel__btn"
          onClick={() => setIndex((prev) => (prev - 1 + count) % count)}
          aria-label="Anterior"
        >
          ◂
        </button>
        <div className="carousel__dots" role="tablist">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`carousel__dot${i === index ? ' carousel__dot--active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir a diapositiva ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          className="carousel__btn"
          onClick={() => setIndex((prev) => (prev + 1) % count)}
          aria-label="Siguiente"
        >
          ▸
        </button>
      </div>
    </div>
  )
}
