import { data } from '../data/portfolio'
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon, PhoneIcon, ArrowRightIcon } from './icons'

export default function Contact() {
  const socials = [
    { label: 'GitHub', href: data.socials.github, icon: GitHubIcon },
    { label: 'LinkedIn', href: data.socials.linkedin, icon: LinkedInIcon },
  ]

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${data.email}&su=${encodeURIComponent('Project inquiry')}`

  return (
    <section id="contact" className="border-t border-line/60 bg-card/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">Contact</p>
            <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Let's build something exceptional.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Tell me about your product, timeline and the problem you're solving. I reply within one business day.
            </p>

            <div className="mt-8 space-y-4">
              <a href={`mailto:${data.email}`} className="flex items-center gap-3 text-sm text-muted transition hover:text-primary">
                <MailIcon className="h-4 w-4 text-primary" />
                {data.email}
              </a>
              <a href={`tel:${data.phone}`} className="flex items-center gap-3 text-sm text-muted transition hover:text-primary">
                <PhoneIcon className="h-4 w-4 text-primary" />
                {data.phone}
              </a>
              <p className="flex items-center gap-3 text-sm text-muted">
                <MapPinIcon className="h-4 w-4 text-primary" />
                {data.location}
              </p>
            </div>

            <div className="mt-8 flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card text-muted transition hover:border-primary/50 hover:text-primary"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-7 rounded-3xl border border-line bg-card p-8 sm:p-10">
            <h3 className="font-display text-2xl font-semibold text-foreground">Let's talk about your project</h3>
            <p className="text-sm leading-relaxed text-muted">
              Email me directly or reach out on the phone — I'll get back to you as soon as I can.
            </p>
            <a
              href={gmailUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-background transition hover:bg-primary-hover"
            >
              <MailIcon className="h-4 w-4" />
              Email Me
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href={`tel:${data.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:text-primary"
            >
              <PhoneIcon className="h-4 w-4" />
              {data.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}