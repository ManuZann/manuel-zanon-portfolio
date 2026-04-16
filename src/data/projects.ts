import appointmentsPreview from '../assets/project-appointments.svg'
import realtyPreview from '../assets/project-realty.svg'
import recruitingPreview from '../assets/project-recruiting.svg'

export const projects = [
  {
    slug: 'sistema-turnos',
    category: 'Sistema de turnos',
    title: 'Gestión operativa de reservas, disponibilidad y atención.',
    summary:
      'Plataforma orientada a negocios que necesitan organizar su agenda, reducir fricción operativa y mantener una experiencia clara tanto para clientes como para el equipo interno.',
    problem:
      'La gestión manual de turnos genera solapamientos, pérdida de tiempo y falta de visibilidad sobre la operación diaria.',
    solution:
      'Diseñé una solución full stack con APIs en NestJS, reglas de disponibilidad, panel administrativo y flujos de confirmación preparados para operar de forma consistente.',
    impact:
      'La agenda se centraliza, el equipo gana trazabilidad y el negocio puede escalar reservas sin depender de coordinación manual.',
    stack: ['Node.js', 'NestJS', 'TypeScript', 'SQL', 'Docker'],
    demoUrl: 'https://landing-turnos.vercel.app',
    githubUrl: 'https://github.com/ManuZann/landing-turnos',
    preview: appointmentsPreview,
    previewAlt:
      'Sistema de turnos con calendario operativo, gestión de horarios y panel de reservas.',
    theme: 'appointments',
  },
  {
    slug: 'saas-reclutamiento',
    category: 'SaaS de reclutamiento',
    title: 'Plataforma de recruiting con lógica relacional y pipeline completo.',
    summary:
      'Producto orientado a equipos de RRHH y consultoras que necesitan gestionar candidatos, procesos y relaciones complejas más allá de un sistema lineal tradicional.',
    problem:
      'Los procesos de reclutamiento involucran múltiples actores, estados y relaciones entre datos que rápidamente superan estructuras simples.',
    solution:
      'Trabajé sobre una arquitectura con NestJS, React y Amazon Neptune para modelar relaciones complejas y permitir consultas más expresivas sobre el dominio.',
    impact:
      'El sistema queda preparado para escalar, mantener consistencia en el dominio y evolucionar el producto sin degradar la estructura de datos.',
    stack: ['NestJS', 'React', 'Amazon Neptune', 'TypeScript', 'AWS'],
    demoUrl: 'https://recruitment-saas-landing.vercel.app',
    githubUrl: 'https://github.com/ManuZann/recruitment-saas-landing',
    preview: recruitingPreview,
    previewAlt:
      'SaaS de reclutamiento con pipeline de candidatos, métricas y visualización relacional.',
    theme: 'recruiting',
  },
  {
    slug: 'landing-inmobiliaria',
    category: 'Landing inmobiliaria',
    title: 'Landing comercial orientada a captación y posicionamiento digital.',
    summary:
      'Sitio diseñado para inmobiliarias que necesitan comunicar valor, destacar propiedades y convertir tráfico en consultas comerciales de forma eficiente.',
    problem:
      'Muchas landings inmobiliarias son genéricas, tienen bajo rendimiento y no logran transformar el catálogo en una propuesta clara.',
    solution:
      'Desarrollé una interfaz moderna con foco en jerarquía visual, performance, SEO técnico y estructura preparada para generación de leads.',
    impact:
      'La marca mejora su presencia digital, transmite mayor confianza y aumenta la conversión de visitas en contactos reales.',
    stack: ['React', 'TypeScript', 'SEO', 'UI/UX', 'Deploy'],
    demoUrl: 'https://real-estate-landing-drab.vercel.app',
    githubUrl: 'https://github.com/ManuZann/real-estate-landing',
    preview: realtyPreview,
    previewAlt:
      'Landing inmobiliaria con propiedades destacadas, filtros y formularios de contacto.',
    theme: 'realty',
  },
];
