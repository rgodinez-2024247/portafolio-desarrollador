import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { Carousel } from '../components/Carousel'
import { NeonCard } from '../components/NeonCard'
import './Home.css'

export function Home() {
  const highlights = projects
    .filter((p) => p.status === 'live')
    .map((p) => (
      <NeonCard key={p.id} className="home-slide" accent="cyan">
        <p className="home-slide__eyebrow">Proyecto destacado</p>
        <h2>{p.title}</h2>
        <p>{p.description}</p>
        {p.repoUrl && (
          <a href={p.repoUrl} target="_blank" rel="noreferrer">
            Ir al repositorio →
          </a>
        )}
      </NeonCard>
    ))

  return (
    <section className="home">
      <div className="home__hero">
        <p className="home__signal">SEÑAL ACTIVA // GRID 2010</p>
        <h1 className="home__name">{profile.name}</h1>
        <p className="home__title">{profile.title}</p>
        <p className="home__phrase">“{profile.welcomePhrase}”</p>
        <div className="home__actions">
          <Link className="btn btn--primary" to="/proyectos">
            Ver proyectos
          </Link>
          <Link className="btn btn--ghost" to="/sobre-mi">
            Sobre mí
          </Link>
        </div>
      </div>

      <div className="home__carousel-wrap">
        <Carousel items={highlights} label="Proyectos destacados" />
      </div>
    </section>
  )
}
