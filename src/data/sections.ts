export const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'experiencia', label: 'Trayectoria' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Conexión' },
] as const

export type SectionId = (typeof sections)[number]['id']

export function scrollToSection(id: SectionId) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
