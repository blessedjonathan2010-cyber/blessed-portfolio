import { data } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import { DownloadIcon, FileTextIcon } from './icons'

export default function CVSection() {
  return (
    <section id="cv" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="CV" title="Download My Résumé" subtitle="A one-page PDF covering skills, stack and selected project outcomes." />

        <div className="flex flex-col items-start gap-8 rounded-3xl border border-line bg-card p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="flex items-start gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <FileTextIcon className="h-7 w-7" />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground">Full résumé (PDF)</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{data.cvNote}</p>
            </div>
          </div>
          <a
            href={data.cvFile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-background transition hover:bg-primary-hover"
          >
            <DownloadIcon />
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}