export type Project = {
  id: string
  title: string
  description: string
  skills: string[]
  repoUrl: string | null
  images: string[]
  status: 'live' | 'coming-soon'
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'ice-team',
    title: 'Ice-team · Restaurante_ICE',
    description:
      'Sistema de gestión de restaurantes con arquitectura de microservicios: menús digitales, mesas, pedidos, reservaciones, eventos y reportes. Trabajo en equipo con SCRUM.',
    skills: [
      'ASP.NET Core 8',
      'C#',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'JWT',
      'Microservicios',
    ],
    repoUrl: 'https://github.com/rgodinez-2024247/Restaurante_ICE',
    images: [],
    status: 'live',
    tags: ['Backend', 'Equipo', 'Microservicios'],
  },
  {
    id: 'end-of-line',
    title: 'EndOfLine',
    description:
      'Proyecto colaborativo en Java. Espacio reservado para capturas y detalle ampliado cuando envíes las fotos e información del alcance.',
    skills: ['Java', 'Trabajo en equipo', 'Git'],
    repoUrl: 'https://github.com/dvelasquez-2024226/EndOfLine',
    images: [],
    status: 'live',
    tags: ['Java', 'Colaborativo'],
  },
  {
    id: 'slot-1',
    title: 'Próximo proyecto',
    description:
      'Slot listo para tu siguiente idea. Aquí irá el título, descripción, stack y enlace al repositorio.',
    skills: [],
    repoUrl: null,
    images: [],
    status: 'coming-soon',
    tags: ['Coming soon'],
  },
  {
    id: 'slot-2',
    title: 'Próximo proyecto',
    description:
      'Otro espacio reservado para expandir el portafolio sin romper el layout.',
    skills: [],
    repoUrl: null,
    images: [],
    status: 'coming-soon',
    tags: ['Coming soon'],
  },
]
