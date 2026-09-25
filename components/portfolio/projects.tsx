import { ArrowUpRight, ShieldAlert } from 'lucide-react'
import { Reveal } from './reveal'
import { BulletList, GitHubIcon, HuggingFaceIcon, LINKS, SectionHeading, TagList, external } from './shared'

const METRICS = ['10 calls', '12 bugs', '3 debugging iterations']

type Project = {
  title: string
  dates: string
  summary: string
  bullets?: string[]
  badges?: string[]
  tags: string[]
  link?: { href: string; label: string }
}

const PROJECTS: Project[] = [
  {
    title: 'News Text Classification Microservice',
    dates: 'Nov 2025 to Dec 2025',
    summary:
      'Flask REST API for real-time text classification using TF-IDF and Logistic Regression, containerized with Docker and deployed on Hugging Face Spaces.',
    bullets: [
      "Benchmarked against Google Cloud Natural Language API: my model scored 91.45% vs. Google's 53.50% on AG News, at lower cost and latency.",
    ],
    badges: ['91.45% accuracy', '+38 pts vs Google Cloud'],
    tags: ['Python', 'NLP', 'Flask', 'Docker', 'Hugging Face'],
    link: { href: LINKS.newsClassifier, label: 'Live API' },
  },
  {
    title: 'NYC Motor Vehicle Collision Analysis',
    dates: 'Sep 2025 to Dec 2025',
    summary:
      'Analyzed 1.6M+ crash records to find drivers of accident severity. Random Forest, XGBoost, and Decision Tree models reached up to 86% accuracy; threshold tuning raised high-risk recall from 0.07 to 0.46, and K-Means clustering surfaced crash hotspots.',
    badges: ['1.6M+ records', '86% accuracy', 'Recall 0.07 to 0.46'],
    tags: ['Python', 'XGBoost', 'Random Forest', 'K-Means'],
  },
  {
    title: 'Instacart Customer Segmentation',
    dates: 'May 2025 to Jun 2025',
    summary:
      'Processed 33M+ transactions with PySpark, then used PCA and K-Means to find three customer segments linked to an estimated $70M revenue opportunity.',
    badges: ['33M+ transactions', '3 segments', '$70M opportunity'],
    tags: ['PySpark', 'Spark', 'PCA', 'K-Means'],
  },
  {
    title: 'SGC Vendor Engagement Dashboard',
    dates: 'Jan 2026 to Mar 2026 · Capstone',
    summary:
      'Tableau and Qlik dashboards unifying multi-source vendor data to analyze supplier diversity and service coverage for procurement decisions.',
    tags: ['Tableau', 'Qlik', 'Data Integration'],
  },
  {
    title: 'Transfer Learning Image Classification',
    dates: 'Oct 2025 to Nov 2025',
    summary: 'ResNet18 fine-tuned to 81%+ validation accuracy using data augmentation and early stopping.',
    badges: ['81%+ accuracy'],
    tags: ['PyTorch', 'ResNet18', 'Computer Vision'],
  },
]

const [FIRST, ...REST] = PROJECTS

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-glow flex h-full flex-col rounded-xl border border-border bg-card p-6 md:p-8">
      <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">Project</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-balance">{project.title}</h3>
      <p className="mt-2 font-mono text-sm text-primary">{project.dates}</p>
      <p className="mt-5 leading-relaxed text-pretty text-muted-foreground">{project.summary}</p>
      {project.bullets && (
        <div className="mt-5">
          <BulletList items={project.bullets} />
        </div>
      )}
      {project.badges && (
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Project metrics">
          {project.badges.map((b) => (
            <li
              key={b}
              className="rounded-md border border-highlight/40 bg-highlight/10 px-3 py-1.5 font-mono text-sm font-medium text-highlight"
            >
              {b}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-auto pt-8">
        <TagList label="Technologies" tags={project.tags} />
        {project.link && (
          <a
            href={project.link.href}
            {...external}
            className="group mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_28px_-6px] hover:shadow-primary/60"
          >
            <HuggingFaceIcon className="size-4" />
            {project.link.label}
            <ArrowUpRight
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  )
}

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
          <ProjectCard project={FIRST} />
        </Reveal>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {REST.map((project, i) => (
          <Reveal key={project.title} delay={i * 60} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
