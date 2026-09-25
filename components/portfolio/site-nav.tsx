'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { GitHubIcon, HuggingFaceIcon, LinkedInIcon, LINKS, external } from './shared'

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-lg">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:px-8"
      >
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-medium">
          <span className="flex size-7 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary">
            PC
          </span>
          <span className="hidden sm:inline">princess.chishato</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-3 py-2 font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={LINKS.github}
            {...external}
            aria-label="GitHub profile (opens in a new tab)"
            className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <GitHubIcon className="size-5" />
          </a>
          <a
            href={LINKS.huggingface}
            {...external}
            aria-label="Hugging Face profile (opens in a new tab)"
            className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <HuggingFaceIcon className="size-5" />
          </a>
          <a
            href={LINKS.linkedin}
            {...external}
            className="hidden items-center gap-2 rounded-md border border-primary/50 px-3.5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:flex"
          >
            <LinkedInIcon className="size-4" />
            LinkedIn
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex size-9 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border lg:hidden">
          <ul className="mx-auto grid max-w-6xl gap-1 px-5 py-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 font-mono text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="sm:hidden">
              <a
                href={LINKS.linkedin}
                {...external}
                className="mt-2 flex items-center justify-center gap-2 rounded-md border border-primary/50 px-3 py-2.5 text-sm font-medium text-primary"
              >
                <LinkedInIcon className="size-4" />
                LinkedIn
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
