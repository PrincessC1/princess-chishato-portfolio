import { ArrowRight, MapPin } from 'lucide-react'
import { LinkedInIcon, LINKS, external } from './shared'
import { Reveal } from './reveal'

const FOCUS = ['Data Analytics', 'AI Evaluation', 'Machine Learning', 'Human Services']

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-name" className="relative">
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-5 pt-20 pb-24 md:px-8 md:pt-32 md:pb-36">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 font-mono text-xs text-primary">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Open to roles in Massachusetts
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="relative isolate mt-8 w-fit">
            <div
              className="pointer-events-none absolute top-1/2 left-[40%] -z-10 h-[140%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
              aria-hidden="true"
            />
            <h1
              id="hero-name"
              className="text-5xl leading-[0.95] font-semibold tracking-tighter text-balance sm:text-7xl md:text-8xl"
            >
              Princess <span className="text-muted-foreground/60">Chishato</span>
            </h1>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-primary md:text-base">
            {FOCUS.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="text-highlight" aria-hidden="true">
                    {'•'}
                  </span>
                )}
                {item}
              </span>
            ))}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
            Master of Professional Studies in Analytics from Northeastern University with five years of frontline human services
            experience. I build data tools and AI systems, and I never forget the people they are meant
            to serve.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_32px_-6px] hover:shadow-primary/60"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href={LINKS.linkedin}
              {...external}
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
          <p className="mt-8 flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <MapPin className="size-4 text-highlight" aria-hidden="true" />
            Boston, MA
          </p>
        </Reveal>
      </div>
    </section>
  )
}
