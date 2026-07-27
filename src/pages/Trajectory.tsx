import { profile } from '../data/profile'
import { NeonCard } from '../components/NeonCard'
import './Page.css'

export function Trajectory() {
  return (
    <section id="experiencia" className="page section">
      <header className="page__header">
        <p className="page__eyebrow">Curriculum virtual</p>
        <h1>Educación y experiencia</h1>
        <p className="page__lead">
          Enfoque en trayectoria vinculada a programación y proyectos de equipo.
        </p>
      </header>

      <div className="page__grid">
        <div className="stack-gap">
          <h2 className="section-title">Educación</h2>
          {profile.education.map((item) => (
            <NeonCard key={item.place} className="stack-gap">
              <p className="meta-line">{item.period}</p>
              <h3 className="card-heading">{item.role}</h3>
              <p className="card-sub">{item.place}</p>
              <p>{item.detail}</p>
            </NeonCard>
          ))}
        </div>

        <div className="stack-gap">
          <h2 className="section-title">Experiencia</h2>
          {profile.experience.map((item) => (
            <NeonCard key={item.place} accent="orange" className="stack-gap">
              <p className="meta-line">{item.period}</p>
              <h3 className="card-heading">{item.role}</h3>
              <p className="card-sub">{item.place}</p>
              <p>{item.detail}</p>
            </NeonCard>
          ))}
        </div>
      </div>
    </section>
  )
}
