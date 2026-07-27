import type { Project } from '../data/projects'
import { NeonCard } from './NeonCard'
import './ProjectCard.css'

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  const isLive = project.status === 'live' && Boolean(project.repoUrl)

  const content = (
    <>
      <div className="project-card__top">
        <span className="project-card__status">
          {project.status === 'live' ? 'ONLINE' : 'STANDBY'}
        </span>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>
      {project.skills.length > 0 && (
        <ul className="project-card__skills">
          {project.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      )}
      <div className="project-card__media">
        {project.images.length > 0 ? (
          <>
            <img src={project.images[0]} alt={`Vista de ${project.title}`} />
            {project.images.length > 1 && (
              <span className="project-card__shots">
                +{project.images.length - 1} captura
                {project.images.length > 2 ? 's' : ''}
              </span>
            )}
          </>
        ) : (
          <div className="project-card__placeholder">
            {project.status === 'live'
              ? 'Capturas pendientes — se añaden cuando envíes las fotos'
              : 'Espacio reservado para un nuevo proyecto'}
          </div>
        )}
      </div>
      {isLive && <span className="project-card__cta">Abrir repositorio →</span>}
    </>
  )

  if (isLive && project.repoUrl) {
    return (
      <a
        className="project-card__link"
        href={project.repoUrl}
        target="_blank"
        rel="noreferrer"
      >
        <NeonCard
          className="project-card"
          accent={project.id === 'end-of-line' ? 'orange' : 'cyan'}
          as="article"
        >
          {content}
        </NeonCard>
      </a>
    )
  }

  return (
    <NeonCard className="project-card project-card--soon" as="article">
      {content}
    </NeonCard>
  )
}
