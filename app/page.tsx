import { SiteNav } from '@/components/portfolio/site-nav'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Experience } from '@/components/portfolio/experience'
import { Projects } from '@/components/portfolio/projects'
import { Education, Skills } from '@/components/portfolio/education-skills'
import { Contact, SiteFooter } from '@/components/portfolio/contact'

export default function Page() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip">
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[1200px]" aria-hidden="true" />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
