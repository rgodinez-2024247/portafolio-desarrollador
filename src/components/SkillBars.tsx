import './SkillBars.css'

type Skill = {
  name: string
  level: number
}

export function SkillBars({ skills }: { skills: readonly Skill[] }) {
  return (
    <ul className="skills">
      {skills.map((skill) => (
        <li key={skill.name} className="skills__item">
          <div className="skills__meta">
            <span>{skill.name}</span>
            <span className="skills__pct">{skill.level}%</span>
          </div>
          <div
            className="skills__track"
            role="meter"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={skill.level}
            aria-label={skill.name}
          >
            <div
              className="skills__fill"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}
