import { GraduationCap } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading, TagList } from './shared'

const EDUCATION = [
  { school: 'Northeastern University', degree: 'M.S. in Analytics' },
  { school: "Women's University in Africa", degree: 'B.S. in Community Development' },
]

const SKILLS = [
  { group: 'Languages', items: ['Python', 'SQL'] },
  {
    group: 'Data & AI',
    items: ['Data analysis', 'Machine learning', 'Model deployment', 'AI agent evaluation', 'Data visualization'],
  },
  { group: 'Tools', items: ['Flask', 'FastAPI', 'Docker', 'Git', 'Twilio'] },
  {
    group: 'Human Services',
    items: ['Trauma-informed care', 'Harm reduction', 'De-escalation', 'Case documentation', 'Program coordination'],
  },
]

export function Education() {
  return (
    <section aria-labelledby="education-title" id="education" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <Reveal>
        <SectionHeading index="04" label="Education" title="Grounded in both disciplines" id="education-title" />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {EDUCATION.map((edu, i) => (
          <Reveal key={edu.school} delay={i * 80}>
            <article className="card-glow flex h-full items-start gap-5 rounded-xl border border-border bg-card p-6 md:p-8">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                <GraduationCap className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{edu.school}</h3>
                <p className="mt-1 font-mono text-sm text-highlight">{edu.degree}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section aria-labelledby="skills-title" id="skills" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <Reveal>
        <SectionHeading index="05" label="Skills" title="The full toolkit" id="skills-title" />
      </Reveal>
      <div className="grid overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 gap-px">
        {SKILLS.map((s, i) => (
          <Reveal key={s.group} delay={i * 60} className="h-full">
            <div className="h-full bg-card p-6 transition-colors hover:bg-accent/40 md:p-8">
              <h3 className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-primary uppercase">
                <span className="text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                {s.group}
              </h3>
              <TagList label={s.group} tags={s.items} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
