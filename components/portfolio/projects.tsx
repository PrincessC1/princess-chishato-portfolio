import { ArrowUpRight, ShieldAlert } from 'lucide-react'
import { Reveal } from './reveal'
import { BulletList, GitHubIcon, LINKS, SectionHeading, TagList, external } from './shared'

const METRICS = ['10 calls', '12 bugs', '3 debugging iterations']

export function Projects() {
  return (
    <section aria-labelledby="projects-title" id="projects" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <Reveal>
        <SectionHeading index="03" label="Selected Projects" title="Things I've built and tested" id="projects-title" />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <article className="card-glow flex h-full flex-col rounded-xl border border-primary/30 bg-card p-6 md:p-8">
            <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">Featured Build</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">AI Voice Agent Testing Bot</h3>
            <p className="mt-2 font-mono text-sm text-primary">
              {'Python • FastAPI • Twilio • OpenAI Realtime API'}
            </p>

            <div className="mt-6">
              <BulletList
                items={[
                  'Built an automated "patient" voice bot that places real phone calls to a healthcare AI scheduling agent and holds natural conversations with it',
                  'Designed 10 patient scenarios: scheduling, rescheduling, cancellations, prescription refills, interruptions, vague requests, and unknown patients',
                  'Recorded and transcribed every call with timestamps, then documented 12 bugs',
                ]}
              />
            </div>

            <div className="mt-6 flex gap-3 rounded-lg border border-highlight/30 bg-highlight/5 p-4">
              <ShieldAlert className="mt-0.5 size-5 shrink-0 text-highlight" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-pretty">
                <span className="font-mono text-xs tracking-wider text-highlight uppercase">Headline finding: </span>
                the agent granted record access even after identity verification failed.
              </p>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Project metrics">
              {METRICS.map((m) => (
                <li
                  key={m}
                  className="rounded-md border border-highlight/40 bg-highlight/10 px-3 py-1.5 font-mono text-sm font-medium text-highlight"
                >
                  {m}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <TagList
                label="Technologies"
                tags={['Python', 'FastAPI', 'Twilio', 'WebSockets', 'OpenAI Realtime', 'AI Evaluation']}
              />
            </div>

            <div className="mt-auto pt-8">
              <a
                href={LINKS.voicebot}
                {...external}
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_28px_-6px] hover:shadow-primary/60"
              >
                <GitHubIcon className="size-4" />
                View Code
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </article>
        </Reveal>

        <Reveal className="lg:col-span-2" delay={100}>
          <article className="card-glow flex h-full flex-col rounded-xl border border-border bg-card p-6 md:p-8">
            <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">Project</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">Machine Learning Model Deployment</h3>
            <p className="mt-2 font-mono text-sm text-primary">{'Python • Flask • Docker'}</p>
            <div className="mt-6">
              <BulletList
                items={[
                  'Trained and evaluated a machine learning model end to end',
                  'Deployed it behind a Flask REST API in a Docker container so other applications can use it in production',
                ]}
              />
            </div>
            <div className="mt-auto pt-8">
              <TagList label="Technologies" tags={['Python', 'Flask', 'Docker', 'REST API', 'Model Deployment']} />
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
