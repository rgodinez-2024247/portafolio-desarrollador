import { profile } from '../data/profile'
import { NeonCard } from '../components/NeonCard'
import './Page.css'

export function About() {
  return (
    <section id="sobre-mi" className="page section">
      <header className="page__header">
        <p className="page__eyebrow">Identidad</p>
        <h1>Sobre mí</h1>
        <p className="page__lead">
          Lo esencial: quién soy en el ámbito del desarrollo y hacia dónde voy.
        </p>
      </header>

      <div className="page__grid">
        <NeonCard className="stack-gap">
          <h2 className="section-title">{profile.title}</h2>
          <p>{profile.about}</p>
          <p>{profile.goals}</p>
        </NeonCard>

        <NeonCard accent="orange" className="stack-gap">
          <h2 className="section-title">Datos generales</h2>
          <dl className="facts">
            <div>
              <dt>Nombre</dt>
              <dd>{profile.name}</dd>
            </div>
            <div>
              <dt>Edad</dt>
              <dd>{profile.age} años</dd>
            </div>
            <div>
              <dt>Ubicación</dt>
              <dd>{profile.city}</dd>
            </div>
            <div>
              <dt>Formación</dt>
              <dd>
                {profile.career} — {profile.school}
              </dd>
            </div>
            <div>
              <dt>Años desarrollando</dt>
              <dd>~{profile.yearsDeveloping} años</dd>
            </div>
            <div>
              <dt>Contacto</dt>
              <dd>
                <a href={`mailto:${profile.contact.email}`}>
                  {profile.contact.email}
                </a>
              </dd>
            </div>
          </dl>
        </NeonCard>
      </div>
    </section>
  )
}
