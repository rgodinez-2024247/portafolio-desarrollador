import { projects } from '../data/projects'
import { Carousel } from '../components/Carousel'
import { NeonCard } from '../components/NeonCard'
import { ProjectCard } from '../components/ProjectCard'
import './Page.css'
import './Projects.css'

export function Projects() {
  const previewSlides = projects
    .filter((p) => p.status === 'live' && p.images.length > 0)
    .flatMap((p) =>
      p.images.map((image, index) => (
        <NeonCard
          key={`${p.id}-${index}`}
          className="preview-slide"
          accent={index % 2 === 0 ? 'cyan' : 'orange'}
        >
          <p className="preview-slide__label">Vista de interfaz</p>
          <h3>{p.title}</h3>
          <p>
            Captura {index + 1} de {p.images.length}. El detalle completo está
            en la tarjeta del proyecto.
          </p>
          <div className="preview-slide__frame">
            <img src={image} alt={`${p.title} captura ${index + 1}`} />
          </div>
        </NeonCard>
      )),
    )

  return (
    <section id="proyectos" className="page section">
      <header className="page__header">
        <p className="page__eyebrow">Mis aplicaciones</p>
        <h1>Proyectos</h1>
        <p className="page__lead">
          Haz clic en un proyecto activo para abrir su repositorio en GitHub.
          Hay slots listos para las ideas que vienen.
        </p>
      </header>

      {previewSlides.length > 0 && (
        <div className="projects-preview">
          <h2 className="section-title">Vistas de proyectos</h2>
          <Carousel items={previewSlides} label="Vistas de proyectos" />
        </div>
      )}

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
