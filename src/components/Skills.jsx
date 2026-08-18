import { data } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const categories = [
  { key: 'core', title: 'Core', icon: 'M9 3v18M9 3a12 12 0 0 1 6 0', note: '' },
  { key: 'build', title: 'Build & Style', icon: 'M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z', note: '' },
  { key: 'workflow', title: 'Workflow', icon: 'M4 6h16M4 12h10M4 18h16', note: '' },
  { key: 'expanding', title: 'Expanding Into', icon: 'M4 20l16-16M4 4h16v16', note: 'in progress' },
]

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line/60 bg-card/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Skills" title="What I Do Best" subtitle={data.skills.blurb} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const skills = data.skills[category.key]
            const isExpanding = category.key === 'expanding'
            return (
              <div
                key={category.key}
                className={`flex flex-col rounded-2xl border p-6 transition ${
                  isExpanding
                    ? 'border-dashed border-line bg-card/40'
                    : 'border-line bg-card hover:border-primary/40'
                }`}
              >
                <svg
                  className="h-6 w-6 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={category.icon} />
                </svg>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {category.title}
                  {category.note && (
                    <span className="ml-2 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                      in progress
                    </span>
                  )}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5 text-sm text-muted">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="mb-8 font-display text-xl font-semibold text-foreground">Skill Levels</h3>
            <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {data.levels.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="font-semibold text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-card-hover">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary/70 to-primary"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-dashed border-line bg-card/40 p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-foreground">Currently Leveling Up</h3>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-medium text-primary">
                in progress
              </span>
            </div>
            <div className="mt-6 space-y-5">
              {data.learning.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="font-semibold text-primary/80">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-card-hover">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary/40 to-primary/80"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}