import { ArrowUpRight, Mail } from 'lucide-react'
import { Reveal } from './reveal'
import { GitHubIcon, HuggingFaceIcon, LinkedInIcon, LINKS, external } from './shared'

const CHANNELS = [
  { label: 'Email', value: 'rumbidzaikc@gmail.com', href: LINKS.email, icon: Mail },
  { label: 'LinkedIn', value: 'princess-chishato', href: LINKS.linkedin, icon: LinkedInIcon },
  { label: 'GitHub', value: 'PrincessC1', href: LINKS.github, icon: GitHubIcon },
  { label: 'Hugging Face', value: 'Pchishy', href: LINKS.huggingface, icon: HuggingFaceIcon },
]

export function Contact() {
  return (
    <section aria-labelledby="contact-title" id="contact" className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <div className="flex items-center justify-center gap-4 font-mono text-xs tracking-[0.2em] text-primary uppercase">
          <span>06</span>
          <span className="h-px w-12 bg-primary/60" aria-hidden="true" />
          <span className="text-muted-foreground">Contact</span>
        </div>
        <h2
          id="contact-title"
          className="mx-auto mt-6 max-w-4xl text-center text-4xl font-semibold tracking-tighter text-balance md:text-6xl"
        >
          {"Let's Build Data Systems That "}
          <span className="text-primary">Serve People.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-center text-lg text-pretty text-muted-foreground">
          Open to data analyst, AI evaluation, and mission-driven analytics roles.
        </p>
      </Reveal>

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CHANNELS.map((c, i) => {
          const Icon = c.icon
          return (
            <li key={c.label}>
              <Reveal delay={i * 80}>
                <a
                  href={c.href}
                  {...external}
                  className="card-glow group flex items-center gap-4 rounded-xl border border-border bg-card p-5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                      {c.label}
                    </span>
                    <span className="block truncate font-medium">{c.value}</span>
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-8 font-mono text-xs text-muted-foreground sm:flex-row md:px-8">
        <p>
          Princess Chishato <span className="text-highlight">{'•'}</span> Data with a human face
        </p>
        <p>{'© 2026 Boston, MA'}</p>
      </div>
    </footer>
  )
}
