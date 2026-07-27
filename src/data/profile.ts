export const profile = {
  name: 'Rigoberto Godinez Fajardo',
  shortName: 'Rigoberto Godinez',
  age: 20,
  city: 'Ciudad de Guatemala',
  title: 'Desarrollador en formación',
  school: 'Fundación Kinal',
  career: 'Perito Técnico en Computación',
  welcomePhrase: 'El código es el camino. El diseño es la luz.',
  yearsDeveloping: 2,
  about: `Estudiante de Perito Técnico en Computación en Kinal. Me apasiona construir software limpio, interfaces con carácter y sistemas que resuelvan problemas reales. Busco crecer como desarrollador uniendo lógica, diseño y trabajo en equipo.`,
  goals:
    'Consolidar una base sólida en desarrollo web y backend, aportar en proyectos reales y seguir formando un portafolio que demuestre evolución constante.',
  contact: {
    email: 'rgodinez-2024247@kinal.edu.gt',
    github: 'https://github.com/rgodinez-2024247',
    linkedin: '', // por confirmar
    computrabajo: '', // por confirmar
  },
  education: [
    {
      place: 'Fundación Kinal',
      role: 'Perito Técnico en Computación',
      period: 'En curso',
      detail:
        'Formación técnica enfocada en programación, bases de datos y desarrollo de software.',
    },
  ],
  experience: [
    {
      place: 'Proyectos académicos / equipo',
      role: 'Desarrollador colaborativo',
      period: 'Actual',
      detail:
        'Participación en proyectos de equipo (Ice-team / Restaurante_ICE, EndOfLine) aplicando metodologías ágiles y stacks modernos.',
    },
  ],
  skills: [
    { name: 'JavaScript / TypeScript', level: 70 },
    { name: 'React', level: 65 },
    { name: 'HTML & CSS', level: 80 },
    { name: 'Java', level: 60 },
    { name: 'C# / ASP.NET', level: 55 },
    { name: 'PostgreSQL', level: 50 },
    { name: 'Git & GitHub', level: 75 },
  ],
} as const
