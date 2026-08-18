import { data } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import { ArrowRightIcon } from './icons'

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="How I Can Help"
          subtitle="Focused engagements, scoped clearly, delivered with production quality."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service) => (
            <a
              key={service.num}
              href="#contact"
              className="group relative overflow-hidden rounded-2xl border border-line bg-card p-7 transition hover:border-primary/40 hover:bg-card-hover"
            >
              <span className="font-display text-5xl font-semibold text-foreground/10 transition group-hover:text-primary/25">
                {service.num}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
              <span className="mt-5 flex items-center gap-2 text-xs font-semibold text-primary opacity-0 transition group-hover:opacity-100">
                Start a project <ArrowRightIcon className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}