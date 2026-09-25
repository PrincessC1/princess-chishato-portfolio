import { Reveal } from './reveal'
import { BulletList, SectionHeading, TagList } from './shared'

export function Experience() {
  return (
    <section aria-labelledby="experience-title" id="experience" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <Reveal>
        <SectionHeading index="02" label="Experience" title="Where I've done the work" id="experience-title" />
      </Reveal>

      <div className="grid gap-6">
        <Reveal>
          <article className="card-glow relative overflow-hidden rounded-xl border border-primary/30 bg-card p-6 md:p-9">
            <div
              className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-primary/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">Featured Role</span>
              <span className="rounded-full border border-highlight/40 bg-highlight/10 px-2.5 py-0.5 font-mono text-[11px] text-highlight">
                Remote
              </span>
            </div>
            <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <h3 className="text-2xl font-semibold tracking-tight">
                Centerpoint Transportation
                <span className="block text-lg font-normal text-muted-foreground md:inline md:before:content-['_·_']">
                  Data Analytics Intern
                </span>
              </h3>
              <p className="font-mono text-sm text-muted-foreground">Sep 2026 to present</p>
            </div>
            <div className="mt-6 max-w-3xl">
              <BulletList
                items={[
                  'Analyzes trip and booking data for a non-emergency medical and senior transportation company',
                  'Works under HIPAA data privacy standards with sensitive health-related records',
                ]}
              />
            </div>
            <div className="mt-6">
              <TagList
                label="Skills used"
                tags={['Python', 'SQL', 'Data Analysis', 'HIPAA', 'Operations Analytics']}
              />
            </div>
          </article>
        </Reveal>

        <Reveal delay={80}>
          <article className="card-glow rounded-xl border border-border bg-card p-6 md:p-9">
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <h3 className="text-2xl font-semibold tracking-tight">
                Human Services and Community Development
                <span className="block text-lg font-normal text-muted-foreground">Zimbabwe</span>
              </h3>
              <p className="font-mono text-sm text-highlight">5 years</p>
            </div>
            <div className="mt-6 max-w-3xl">
              <BulletList
                items={[
                  'Supported shelter, rehabilitation, and community programs for vulnerable women, children, and youth',
                  'Built trust with people in crisis and kept accurate records in fast-paced settings',
                ]}
              />
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
