# Manuel Zanon Olmos | Portfolio Experience

Portfolio personal construido como una experiencia interactiva para presentar perfil profesional, proyectos reales y criterio técnico.

La idea no fue hacer una landing genérica, sino una pieza que comunique:

- experiencia real en sistemas productivos
- foco backend con capacidad full stack
- criterio para arquitectura, producto y mantenimiento
- un perfil profesional orientado a resolver problemas de negocio

## Demo

- Portfolio: por correr localmente o desplegar en Vercel
- Sistema de turnos: [landing-turnos.vercel.app](https://landing-turnos.vercel.app)
- SaaS de reclutamiento: [recruitment-saas-landing.vercel.app](https://recruitment-saas-landing.vercel.app)
- Landing inmobiliaria: [real-estate-landing-drab.vercel.app](https://real-estate-landing-drab.vercel.app)

## Stack

- React 19
- TypeScript
- Vite
- CSS custom
- `simple-parallax-js`

## Qué incluye

- Hero editorial con profundidad visual
- Scroll storytelling
- Sección de proyectos como casos reales, no como cards genéricas
- Previews embebidas para demos externas
- CTAs a demo y GitHub en cada proyecto
- Timeline visual de experiencia profesional
- Stack técnico agrupado por capacidad
- Sección final de contacto con email y LinkedIn
- SEO base con meta tags y Open Graph
- Soporte para `prefers-reduced-motion`

## Estructura

```txt
src/
  assets/        # SVGs y recursos visuales
  components/    # Reveal, ParallaxImage
  data/          # contenido editable del portfolio
  hooks/         # hooks utilitarios
  App.tsx        # composición principal
  App.css        # estilos de la experiencia
  index.css      # tokens globales y tipografía
```

## Cómo levantar el proyecto

```bash
npm install
npm run dev
```

Abrir en `http://localhost:5173`

## Scripts

```bash
npm run dev      # entorno local
npm run build    # build de producción
npm run preview  # preview del build
npm run lint     # lint del proyecto
```

## Cómo personalizarlo

La mayor parte del contenido está separada en archivos de datos para que modificar el portfolio sea simple:

- `src/data/projects.ts`: proyectos, demos y repositorios
- `src/data/experience.ts`: experiencia profesional y proof points
- `src/data/stack.ts`: stack y textos del about

Los assets visuales están en `src/assets` y la composición general vive en `src/App.tsx`.

## Contacto

- Email: [manuzan123@hotmail.com](mailto:manuzan123@hotmail.com)
- LinkedIn: [manuel-zanon](https://www.linkedin.com/in/manuel-zanon/)
- GitHub: [ManuZann](https://github.com/ManuZann)

## Objetivo del proyecto

Este portfolio fue pensado para funcionar como:

- presentación profesional
- herramienta comercial freelance
- vitrina de proyectos reales
- base reutilizable para futuras iteraciones de marca personal
