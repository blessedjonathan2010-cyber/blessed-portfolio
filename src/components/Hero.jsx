import { data } from '../data/portfolio'
import { ArrowRightIcon, DownloadIcon } from './icons'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {data.availability}
            </span>

            <h1 className="font-display text-4xl leading-tight font-semibold text-foreground sm:text-5xl lg:text-6xl">
              Hi, I'm {data.name}
              <br />
              <span className="text-primary">
                I'm a {data.role}
                <span className="cursor-blink">|</span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {data.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-background transition hover:bg-primary-hover"
              >
                View My Work
                <ArrowRightIcon />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:text-primary"
              >
                Let's Talk
              </a>
              <a
                href={data.cvFile}
                download
                className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-muted transition hover:text-foreground"
              >
                <DownloadIcon />
                Download CV
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
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
            <div className="mt-4 flex items-center justify-between rounded-2xl border border-line bg-card px-5 py-4">
              <div>
                <p className="text-xs text-muted/70">Open To</p>
                <p className="text-sm font-semibold text-foreground">Freelance & Full-time</p>
              </div>
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}