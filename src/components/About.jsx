import { data } from '../data/portfolio'
import { CheckIcon } from './icons'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div className="mx-auto w-full max-w-sm lg:sticky lg:top-28">
            <div className="glow-primary rounded-3xl border border-line bg-card p-3">
              <div className="overflow-hidden rounded-2xl">
                {data.photo ? (
                  <img src={data.photo} alt={`${data.name}, ${data.role}`} className="aspect-[4/5] w-full object-cover" />
                ) : (
                  <div className="flex aspect-[4/5] items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 via-card to-background">
                    <span className="font-display text-7xl font-semibold text-primary/70">{`${data.firstName[0]}${data.lastName[0]}`.toUpperCase()}</span>
                  </div>
                )}
              </div>
            </div>
            <p className="mt-5 text-center text-xs font-medium uppercase tracking-[0.25em] text-muted/70">About Me</p>
          </div>

          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">About</p>
            <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">Who I Am</h2>

            {data.aboutParagraphs.map((paragraph, i) => (
              <p key={i} className="mt-6 text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {data.aboutBullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3 text-sm text-muted">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {data.infoList.map((item) => (
                <div key={item.label} className="bg-background px-6 py-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted/70">{item.label}</p>
                  <p className="mt-1.5 text-sm font-semibold break-words text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}