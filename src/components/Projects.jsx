import { data } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import { ArrowRightIcon } from './icons'

export default function Projects() {
  return (
    <section id="projects" className="border-y border-line/60 bg-card/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          subtitle="My bootcamp and capstone builds — open any of them for the stack and a short description."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.projects.map((project) =>
            project.link ? (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition hover:border-primary/40"
              >
                <ProjectContent project={project} />
              </a>
            ) : (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-dashed border-line bg-card/40 transition hover:border-primary/30"
              >
                <ProjectContent project={project} />
              </article>
            )
          )}
        </div>
      </div>
    </section>
  )
}

function ProjectContent({ project }) {
  return (
    <>
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-card via-background to-background">
            <span className="px-4 text-center font-display text-2xl font-semibold text-muted/40 transition group-hover:text-primary/50">
              {project.title}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium text-muted/70">
          {project.year} · {project.role}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold text-foreground">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-background px-3 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-primary">
          {project.link ? 'Visit live site' : 'Coming soon'}
          {project.link && <ArrowRightIcon className="h-4 w-4" />}
        </span>
      </div>
    </>
  )
}