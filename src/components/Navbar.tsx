import { NavLink } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/sobre-mi', label: 'Sobre mí' },
  { to: '/habilidades', label: 'Habilidades' },
  { to: '/experiencia', label: 'Trayectoria' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Conexión' },
]

export function Navbar() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <NavLink to="/" className="nav__brand" end>
          <span className="nav__brand-mark">RG</span>
          <span className="nav__brand-text">PORTAFOLIO</span>
        </NavLink>
        <nav className="nav__links" aria-label="Principal">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `nav__link${isActive ? ' nav__link--active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="nav__scanline" aria-hidden />
    </header>
  )
}
