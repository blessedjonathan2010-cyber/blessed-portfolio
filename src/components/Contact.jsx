import { useState } from 'react'
import { data } from '../data/portfolio'
import { GitHubIcon, LinkedInIcon, XIcon, MailIcon, MapPinIcon, ArrowRightIcon } from './icons'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project inquiry from ${form.name || 'your portfolio'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`
  }

  const socials = [
    { label: 'GitHub', href: data.socials.github, icon: GitHubIcon },
    { label: 'LinkedIn', href: data.socials.linkedin, icon: LinkedInIcon },
    { label: 'X', href: data.socials.x, icon: XIcon },
  ]

  const inputClasses =
    'w-full rounded-xl border border-line bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none transition focus:border-primary/50 focus:ring-1 focus:ring-primary/30'

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

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-line bg-card p-7 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted/70">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted/70">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted/70">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project, timeline and goals..."
                value={form.message}
                onChange={handleChange}
                className={`${inputClasses} resize-none`}
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-background transition hover:bg-primary-hover"
            >
              Send message
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}