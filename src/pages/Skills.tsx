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
          Estimados según el stack de Ice Team (Banco-Ice, Kinal-Break,
          Restaurante_ICE) y EndOfLine. Los afinamos si quieres ajustar alguno.
        </p>
      </header>

      <NeonCard>
        <SkillBars skills={profile.skills} />
      </NeonCard>
    </section>
  )
}
