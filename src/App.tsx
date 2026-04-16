import './App.css'
import heroBackdrop from './assets/hero-depth.svg'
import { ParallaxImage } from './components/ParallaxImage'
import { Reveal } from './components/Reveal'
import { experienceEntries, proofPoints } from './data/experience'
import { projects } from './data/projects'
import { aboutPoints, stackGroups } from './data/stack'

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="site-header__brand" href="#inicio" aria-label="Ir al inicio">
          MZO
        </a>
        <nav className="site-header__nav" aria-label="Secciones principales">
          <a href="#proyectos">Proyectos</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#stack">Stack</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero__aurora" aria-hidden="true" />
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__backdrop" aria-hidden="true">
            <ParallaxImage
              src={heroBackdrop}
              alt=""
              className="hero__backdrop-image"
              scale={1.16}
              orientation="up"
            />
          </div>

          <Reveal className="hero__content">
            <p className="eyebrow">Full stack engineer, Technical Lead</p>
            <h1>Manuel Zanon Olmos</h1>
            <p className="hero__lead">
              Desarrollo sistemas y productos digitales escalables que resuelven
              problemas reales.
            </p>
            <p className="hero__body">
              Trabajo con Node.js, NestJS, React, Angular y bases de datos para
              construir backends sólidos, flujos de negocio confiables y
              productos listos para operar en producción.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#proyectos">
                Ver proyectos
              </a>
              <a className="button button--ghost" href="#contacto">
                Hablemos
              </a>
            </div>
          </Reveal>
        </section>

        <section className="proof-strip" aria-label="Pruebas de experiencia">
          {proofPoints.map((point, index) => (
            <Reveal
              className="proof-strip__item"
              delay={index * 90}
              key={point.label}
            >
              <span>{point.label}</span>
              <strong>{point.value}</strong>
            </Reveal>
          ))}
        </section>

        <section className="section" id="proyectos">
          <Reveal className="section-heading">
            <p className="eyebrow">Proyectos seleccionados</p>
            <h2>
              Casos pensados para mostrar criterio técnico, foco en producto e
              impacto de negocio.
            </h2>
          </Reveal>

          <div className="projects">
            {projects.map((project, index) => (
              <Reveal
                as="article"
                className={`project project--${project.theme}`}
                delay={index * 120}
                key={project.slug}
              >
                <div className="project__copy">
                  <p className="project__index">
                    {String(index + 1).padStart(2, '0')} / {project.category}
                  </p>
                  <h3>{project.title}</h3>
                  <p className="project__summary">{project.summary}</p>

                  <dl className="project__details">
                    <div>
                      <dt>Problema real</dt>
                      <dd>{project.problem}</dd>
                    </div>
                    <div>
                      <dt>Solución desarrollada</dt>
                      <dd>{project.solution}</dd>
                    </div>
                    <div>
                      <dt>Resultado / impacto</dt>
                      <dd>{project.impact}</dd>
                    </div>
                  </dl>

                  <ul className="project__stack" aria-label={`Stack de ${project.title}`}>
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="project__actions">
                    <a
                      className="project__cta"
                      href={project.demoUrl ?? project.preview}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Ver proyecto
                    </a>
                    {project.githubUrl ? (
                      <a
                        className="project__cta project__cta--secondary"
                        href={project.githubUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Ver GitHub
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="project__visual">
                  {project.demoUrl ? (
                    <div className="project__frame-shell">
                      <div className="project__frame-bar" aria-hidden="true">
                        <span className="project__frame-dots" />
                        <span className="project__frame-dots" />
                        <span className="project__frame-dots" />
                        <p className="project__frame-pill">{project.demoUrl}</p>
                      </div>
                      <iframe
                        className="project__iframe"
                        loading="lazy"
                        src={project.demoUrl}
                        title={`Vista previa de ${project.title}`}
                      />
                    </div>
                  ) : (
                    <ParallaxImage
                      src={project.preview}
                      alt={project.previewAlt}
                      className="project__image"
                      scale={1.12}
                      orientation={index % 2 === 0 ? 'up right' : 'up left'}
                    />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section section--dense" id="experiencia">
          <Reveal className="section-heading">
            <p className="eyebrow">Experiencia profesional</p>
            <h2>
              Trabajo en sistemas productivos, mantenimiento real, despliegues y
              decisiones técnicas que afectan operación.
            </h2>
          </Reveal>

          <div className="experience-track" role="list">
            {experienceEntries.map((entry, index) => (
              <Reveal
                as="article"
                className="experience-track__item"
                delay={index * 100}
                key={entry.company}
              >
                <div className="experience-track__meta">
                  <span className="experience-track__marker" aria-hidden="true" />
                  <p>{entry.company}</p>
                  <span>{entry.role}</span>
                </div>
                <div className="experience-track__content">
                  <h3>{entry.headline}</h3>
                  <p>{entry.description}</p>
                  <ul>
                    {entry.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section section--dense" id="stack">
          <Reveal className="section-heading">
            <p className="eyebrow">Stack y tecnologías</p>
            <h2>
              Un stack orientado a productos de negocio: dominio, APIs,
              persistencia, interfaces y despliegue.
            </h2>
          </Reveal>

          <div className="stack-grid">
            {stackGroups.map((group, index) => (
              <Reveal
                as="article"
                className="stack-group"
                delay={index * 80}
                key={group.label}
              >
                <p className="stack-group__label">{group.label}</p>
                <div className="stack-group__items">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <p className="stack-group__summary">{group.summary}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section about" id="about">
          <Reveal className="about__content">
            <p className="eyebrow">About</p>
            <h2>
              Backend por convicción, full stack por contexto y producto por
              necesidad real.
            </h2>
            <div className="about__copy">
              {aboutPoints.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="cta-section" id="contacto">
          <Reveal className="cta-section__content">
            <p className="eyebrow">Próximo paso</p>
            <h2>
              ¿Tenés un proyecto o necesitás mejorar un sistema existente?
              Hablemos.
            </h2>
            <p>
              Puedo sumarme desde la arquitectura backend y acompañar también la
              implementación full stack cuando el producto lo necesita.
            </p>
            <p className="cta-section__email">manuzan123@hotmail.com</p>
            <div className="cta-section__actions">
              <a
                className="button button--primary"
                href="mailto:manuzan123@hotmail.com"
              >
                Enviar mail
              </a>
              <a
                className="button button--ghost"
                href="https://www.linkedin.com/in/manuel-zanon/"
                rel="noreferrer"
                target="_blank"
              >
                Ver LinkedIn
              </a>
            </div>
            {/* <ul className="cta-section__list">
              <li>Backend y APIs para productos que ya operan en producción.</li>
              <li>Evolución de sistemas existentes, mejoras y mantenimiento técnico.</li>
              <li>Landings y MVPs con foco comercial cuando el negocio necesita moverse rápido.</li>
            </ul> */}
          </Reveal>
        </section>
      </main>

      {/* <footer className="site-footer">
        <p>Manuel Zanon Olmos</p>
        <span>Córdoba, Argentina</span>
        <span>Full Stack Developer especializado en Node.js / NestJS</span>
      </footer> */}
    </div>
  )
}

export default App
