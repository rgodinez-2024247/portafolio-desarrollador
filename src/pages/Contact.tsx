import { profile } from '../data/profile'
import { NeonCard } from '../components/NeonCard'
import './Page.css'

export function Contact() {
  const { github, linkedin, computrabajo, email } = profile.contact

  return (
    <section className="page">
      <header className="page__header">
        <p className="page__eyebrow">Redes profesionales</p>
        <h1>Conexión</h1>
        <p className="page__lead">
          LinkedIn ya está activo. Cuando tengas CompuTrabajo, lo conectamos
          aquí también.
        </p>
      </header>

      <div className="page__grid">
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
              {linkedin ? (
                <a href={linkedin} target="_blank" rel="noreferrer">
                  Ver perfil
                </a>
              ) : (
                <em className="pending">Pendiente — pásame tu URL</em>
              )}
            </li>
            <li>
              <span>CompuTrabajo</span>
              {computrabajo ? (
                <a href={computrabajo} target="_blank" rel="noreferrer">
                  Ver perfil
                </a>
              ) : (
                <em className="pending">Pendiente — pásame tu URL</em>
              )}
            </li>
          </ul>
        </NeonCard>

        <NeonCard accent="orange" className="stack-gap">
          <h2 className="section-title">Nota</h2>
          <p>
            LinkedIn ya está enlazado. Falta CompuTrabajo: en cuanto me pases la
            URL, la dejamos brillando en neón aquí.
          </p>
        </NeonCard>
      </div>
    </section>
  )
}
