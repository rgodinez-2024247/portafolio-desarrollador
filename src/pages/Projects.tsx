import { projects } from '../data/projects'
import { Carousel } from '../components/Carousel'
import { NeonCard } from '../components/NeonCard'
import { ProjectCard } from '../components/ProjectCard'
import './Page.css'
import './Projects.css'

export function Projects() {
  const live = projects.filter((p) => p.status === 'live')

  const previewSlides = live.map((p) => (
    <NeonCard key={p.id} className="preview-slide" accent="cyan">
      <p className="preview-slide__label">Vista general</p>
      <h3>{p.title}</h3>
      <p>
        {p.images.length > 0
          ? 'Captura disponible — detalle completo abajo.'
          : 'Cuando envíes las fotos de interfaz, aparecerán aquí en el carrusel.'}
      </p>
      <div className="preview-slide__frame">
        {p.images[0] ? (
          <img src={p.images[0]} alt={p.title} />
        ) : (
          <span>GRID PREVIEW // {p.title}</span>
        )}
      </div>
    </NeonCard>
  ))

  return (
    <section className="page">
      <header className="page__header">
        <p className="page__eyebrow">Portafolio de aplicaciones</p>
        <h1>Proyectos</h1>
        <p className="page__lead">
          Haz clic en un proyecto activo para abrir su repositorio en GitHub.
          Hay slots listos para las ideas que vienen.
        </p>
      </header>

      <div className="projects-preview">
        <h2 className="section-title">Vistas de proyectos</h2>
        <Carousel items={previewSlides} label="Vistas de proyectos" />
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
