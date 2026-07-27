import { profile } from '../data/profile'
import { NeonCard } from '../components/NeonCard'
import './Page.css'

export function Contact() {
  const { github, linkedin, computrabajo, email } = profile.contact

  return (
    <section id="contacto" className="page section">
      <header className="page__header">
        <p className="page__eyebrow">Redes profesionales</p>
        <h1>Conexión</h1>
      </header>

      <NeonCard className="stack-gap">
        <h2 className="section-title">Canales</h2>
        <ul className="link-list">
          <li>
            <span>GitHub</span>
            <a href={github} target="_blank" rel="noreferrer">
              {github.replace('https://', '')}
            </a>
          </li>
          <li>
            <span>Email</span>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            <span>LinkedIn</span>
            <a href={linkedin} target="_blank" rel="noreferrer">
              Ver perfil
            </a>
          </li>
          <li>
            <span>CompuTrabajo</span>
            <a href={computrabajo} target="_blank" rel="noreferrer">
              Ver perfil
            </a>
          </li>
        </ul>
      </NeonCard>
    </section>
  )
}
