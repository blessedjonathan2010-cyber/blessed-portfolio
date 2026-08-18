import { data } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-line/60 bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted/70">
          © {data.year} {data.name}. All rights reserved.
        </p>
        <p className="text-sm text-muted/70">Built with React &amp; Tailwind CSS.</p>
        <a href="#top" className="text-sm font-medium text-muted transition hover:text-primary">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}