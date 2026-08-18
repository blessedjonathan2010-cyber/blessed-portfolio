export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-14">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{subtitle}</p>}
    </div>
  )
}