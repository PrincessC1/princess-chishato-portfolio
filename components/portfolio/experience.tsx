import { Award } from 'lucide-react'
import { Reveal } from './reveal'
import { BulletList, SectionHeading, TagList } from './shared'

const ROLES = [
  {
    org: 'African Women Leaders Network',
    title: 'Program Support Associate',
    dates: 'Aug 2019 to Dec 2024',
    items: [
      'Coordinated regional forums and workshops, stakeholder communication, and program reporting for community-focused initiatives',
      'Supported young women in shelters and survivors of gender-based violence',
    ],
  },
  {
    org: 'Troops for Sustainable Development',
    title: 'Deputy Project Manager',
    dates: 'Jan 2020 to Dec 2022',
    items: [
      'Built budgeting and cost-tracking tools and evaluated program effectiveness',
      'Coordinated communication among stakeholders',
    ],
  },
  {
    org: 'Zimbabwe Gender Commission',
    title: 'Public Education Intern',
    dates: 'Aug 2019 to Aug 2020',
    items: [
      'Delivered public lectures and awareness campaigns on sexual harassment',
      'Analyzed engagement metrics to assess outcomes and presented reports to support policy decisions',
    ],
  },
  {
    org: 'Porcie Mak Contractors',
    title: 'Administrative and Budget Assistant',
    dates: 'Jan 2024 to Dec 2024',
    items: [
      'Managed budgeting and cost tracking in Excel',
      'Maintained structured records to support operational decisions',
    ],
  },
]

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

        <Reveal delay={60}>
          <article className="card-glow flex flex-col gap-5 rounded-xl border border-highlight/40 bg-highlight/5 p-6 md:flex-row md:items-start md:p-8">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-highlight/40 bg-highlight/10 text-highlight">
              <Award className="size-6" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.2em] text-highlight uppercase">Fellowship</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
                    UN Internship Fellowship Program
                    <span className="block text-base font-normal text-muted-foreground md:inline md:before:content-['_·_']">
                      Second Cohort
                    </span>
                  </h3>
                </div>
                <p className="font-mono text-sm text-muted-foreground">Sep 2019 to Aug 2020</p>
              </div>
              <p className="mt-4 max-w-3xl leading-relaxed text-pretty text-muted-foreground">
                Competitively selected. Research, analysis, and reporting on sustainable development, peace and
                security, and gender equity.
              </p>
            </div>
          </article>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {ROLES.map((role, i) => (
            <Reveal key={role.org} delay={80 + i * 60} className="h-full">
              <article className="card-glow flex h-full flex-col rounded-xl border border-border bg-card p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono text-xs text-muted-foreground">{role.dates}</p>
                  <p className="font-mono text-xs text-highlight">Harare, Zimbabwe</p>
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {role.org}
                  <span className="block text-base font-normal text-muted-foreground">{role.title}</span>
                </h3>
                <div className="mt-5">
                  <BulletList items={role.items} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
