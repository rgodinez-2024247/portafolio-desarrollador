import { profile } from '../data/profile'
import { NeonCard } from '../components/NeonCard'
import { SkillBars } from '../components/SkillBars'
import './Page.css'

export function Skills() {
  return (
    <section className="page">
      <header className="page__header">
        <p className="page__eyebrow">Capacidades</p>
        <h1>Habilidades</h1>
        <p className="page__lead">
          Niveles aproximados — los afinamos juntos cuando me digas tus % reales.
        </p>
      </header>

      <NeonCard>
        <SkillBars skills={profile.skills} />
      </NeonCard>
    </section>
  )
}
