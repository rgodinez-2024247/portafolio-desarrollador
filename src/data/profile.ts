export const profile = {
  name: 'Rigoberto Godinez Fajardo',
  shortName: 'Rigoberto Godinez',
  age: 20,
  city: 'Ciudad de Guatemala',
  title: 'Perito Técnico en Informática',
  school: 'Fundación Kinal',
  career: 'Perito Técnico en Informática',
  welcomePhrase: 'El código es el camino. El diseño es la luz.',
  yearsDeveloping: 3,
  about: `Tengo 20 años y estudio informática en Kinal. Los últimos 3 años los he dedicado a aprender frente a la computadora y a aplicar lo aprendido en proyectos reales con mi equipo. Me desenvuelvo bien socialmente, aporto ideas con claridad y me siento cómodo hablando en público; siempre estoy dispuesto a colaborar y a ayudar.`,
  goals:
    'Seguir creciendo como desarrollador full-stack, aportar en proyectos de equipo con impacto real y construir un portafolio que refleje evolución constante.',
  contact: {
    email: 'rgodinez-2024247@kinal.edu.gt',
    github: 'https://github.com/rgodinez-2024247',
    linkedin:
      'https://gt.linkedin.com/in/rigoberto-god%C3%ADnez-fajardo-51812b425',
    computrabajo:
      'https://candidato.gt.computrabajo.com/candidate/cv/edit/?&s=true',
  },
  education: [
    {
      place: 'Fundación Kinal',
      role: 'Perito Técnico en Informática',
      period: '3 años · En curso',
      detail:
        'Formación técnica en programación, bases de datos, desarrollo web y trabajo colaborativo con metodologías ágiles.',
    },
  ],
  experience: [
    {
      place: 'Ice Team',
      role: 'Desarrollador colaborativo',
      period: 'Actual',
      detail:
        'Participación en Restaurante_ICE, Banco-Ice y Kinal-Break: microservicios, APIs, clientes React y autenticación con ASP.NET.',
    },
    {
      place: 'Proyecto EndOfLine',
      role: 'Desarrollador Java',
      period: 'Académico',
      detail:
        'Aplicación web de concesionario con Java, JSP, MySQL y arquitectura MVC en equipo.',
    },
  ],
  // Estimados a partir del stack real de Ice Team + EndOfLine
  skills: [
    { name: 'JavaScript', level: 85 },
    { name: 'React (Vite)', level: 80 },
    { name: 'C# / ASP.NET', level: 78 },
    { name: 'Node.js / Express', level: 75 },
    { name: 'Git & GitHub', level: 82 },
    { name: 'PostgreSQL', level: 72 },
    { name: 'HTML & CSS', level: 70 },
    { name: 'Docker', level: 68 },
    { name: 'Java', level: 68 },
    { name: 'MongoDB', level: 65 },
    { name: 'React Native / Expo', level: 60 },
  ],
} as const
