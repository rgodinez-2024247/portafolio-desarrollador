import kinalBreakRegistro from '../assets/projects/kinal-break-registro.png'
import restauranteIceInicio from '../assets/projects/restaurante-ice-inicio.png'
import restauranteIceSucursales from '../assets/projects/restaurante-ice-sucursales.png'

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
    id: 'restaurante-ice',
    title: 'Ice Team · Restaurante_ICE',
    description:
      'Sistema de gestión de restaurantes con microservicios: menús, mesas, pedidos, reservaciones, eventos y reportes. Arquitectura empresarial con autenticación JWT y trabajo bajo SCRUM.',
    skills: [
      'ASP.NET Core',
      'C#',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'JWT',
      'Microservicios',
    ],
    repoUrl: 'https://github.com/rgodinez-2024247/Restaurante_ICE',
    images: [restauranteIceInicio, restauranteIceSucursales],
    status: 'live',
    tags: ['Ice Team', 'Backend', 'Microservicios'],
  },
  {
    id: 'banco-ice',
    title: 'Ice Team · Banco-Ice',
    description:
      'Plataforma de gestión bancaria: cuentas, servicios y transacciones. Backend modular en Node.js/Express con PostgreSQL, servicio de autenticación en C#, panel admin en React y app móvil con Expo.',
    skills: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'C# / ASP.NET',
      'React',
      'Expo / React Native',
      'Docker',
    ],
    repoUrl: 'https://github.com/Ice-Team-Proyects/Banco-Ice',
    images: [],
    status: 'live',
    tags: ['Ice Team', 'Full-stack', 'Banca'],
  },
  {
    id: 'kinal-break',
    title: 'Ice Team · Kinal-Break',
    description:
      'Plataforma web para la cafetería de Kinal. Clientes React (admin, customer y user), APIs en Node/Express, autenticación ASP.NET y persistencia con PostgreSQL/MongoDB.',
    skills: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'C# / ASP.NET',
      'PostgreSQL',
      'MongoDB',
      'Docker',
    ],
    repoUrl: 'https://github.com/Ice-Team-Proyects/Kinal-Break',
    images: [kinalBreakRegistro],
    status: 'live',
    tags: ['Ice Team', 'Cafetería', 'Full-stack'],
  },
  {
    id: 'end-of-line',
    title: 'EndOfLine',
    description:
      'Aplicación web de concesionario en Java (JSP) con MySQL: gestión de empleados, clientes, inventario, proveedores y taller bajo un enfoque MVC.',
    skills: ['Java', 'JSP', 'MySQL', 'MVC', 'CSS'],
    repoUrl: 'https://github.com/dvelasquez-2024226/EndOfLine',
    images: [],
    status: 'live',
    tags: ['Java', 'Colaborativo', 'Web'],
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
