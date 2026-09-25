import { Database, HeartHandshake } from 'lucide-react'
import { CountUp } from './count-up'
import { Reveal } from './reveal'
import { SectionHeading } from './shared'

const STATS = [
  { value: 5, suffix: '', label: 'Years of frontline human services' },
  { value: 10, suffix: '', label: 'Automated AI test calls designed and executed' },
  { value: 12, suffix: '', label: 'Bugs documented in a healthcare AI agent' },
  { value: 33, suffix: 'M+', label: 'Transaction records processed with PySpark' },
]

function WorldCard({
  icon,
  eyebrow,
  title,
  children,
}: {
  icon: React.ReactNode
  eyebrow: string
  title: string
  children: React.ReactNode
}) {
  return (
    <article className="card-glow h-full rounded-xl border border-border bg-card p-6 md:p-7">
      <div className="flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
          {icon}
        </span>
        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">{eyebrow}</p>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
      <div className="mt-5 leading-relaxed text-pretty text-muted-foreground">{children}</div>
    </article>
  )
}

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <Reveal>
        <SectionHeading index="01" label="About" title="Two worlds, one mission" id="about-title" />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-center">
        <Reveal>
          <div className="grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-0">
            <WorldCard icon={<HeartHandshake className="size-5" aria-hidden="true" />} eyebrow="World one" title="The Field">
              <p>
                Five years in Zimbabwe supporting vulnerable women, children, and youth: survivors of
                gender-based violence, young women in shelters, and communities reached through public
                education on sexual harassment.
              </p>
              <p className="mt-3 font-mono text-xs text-foreground/80">B.S. in Community Development</p>
            </WorldCard>

            <div className="flex items-center justify-center md:w-16" aria-hidden="true">
              <div className="relative h-12 w-px bg-gradient-to-b from-primary/0 via-primary to-primary/0 shadow-[0_0_16px_2px] shadow-primary/50 md:h-px md:w-full md:bg-gradient-to-r">
                <span className="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-highlight shadow-[0_0_18px_4px] shadow-highlight/50" />
              </div>
            </div>

            <WorldCard icon={<Database className="size-5" aria-hidden="true" />} eyebrow="World two" title="The Data">
              <p>
                Master of Professional Studies in Analytics, with hands-on work in Python, SQL, machine learning, API deployment,
                and AI agent testing.
              </p>
              <p className="mt-3 font-mono text-xs text-foreground/80">M.P.S. in Analytics</p>
            </WorldCard>
          </div>
          <p className="mt-8 text-center font-mono text-sm text-pretty text-muted-foreground">
            <span className="text-primary">Where they meet:</span> analytics that improve real programs
            for real people.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <dl className="grid grid-cols-2 gap-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="card-glow flex flex-col rounded-xl border border-border bg-card p-5">
                <dt className="order-2 mt-2 text-sm leading-snug text-muted-foreground">{stat.label}</dt>
                <dd className="order-1 font-mono text-4xl font-semibold tracking-tight text-highlight md:text-5xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
