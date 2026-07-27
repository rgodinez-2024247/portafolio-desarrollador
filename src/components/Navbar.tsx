import { profile } from '../data/profile'
import { scrollToSection, sections } from '../data/sections'
import { useActiveSection } from '../hooks/useActiveSection'
import './Navbar.css'

export function Navbar() {
  const active = useActiveSection()

  return (
    <header className="nav">
      <div className="nav__inner">
        <button
          type="button"
          className="nav__brand"
          onClick={() => scrollToSection('inicio')}
          aria-label={`Ir al inicio — ${profile.name}`}
        >
          <span className="nav__brand-mark">RG</span>
          <span className="nav__brand-copy">
            <span className="nav__brand-name">Rigoberto</span>
            <span className="nav__brand-surname">Godinez</span>
          </span>
        </button>
        <nav className="nav__links" aria-label="Principal">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`nav__link${
                active === section.id ? ' nav__link--active' : ''
              }`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="nav__scanline" aria-hidden />
    </header>
  )
}
