import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { HeadingAccent } from '@/components/HeadingAccent'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32">
      <FadeIn className="relative overflow-hidden rounded-4xl bg-neutral-950 px-8 py-16 sm:px-16 sm:py-24">
        <div className="relative z-10 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-wide text-neutral-300">
              LET’S TALK
            </p>
            <h2 className="mt-5 font-display text-4xl font-medium tracking-tight text-balance text-white sm:text-5xl">
              Good software starts{' '}
              <HeadingAccent>with a conversation.</HeadingAccent>
            </h2>
            <a
              href="mailto:office@trokic.tech"
              className="mt-6 inline-block text-lg text-neutral-300 underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              office@trokic.tech
            </a>
          </div>
          <Button
            href="/contact/"
            invert
            className="shrink-0 self-start px-6 py-3 sm:self-auto"
          >
            Get in touch{' '}
            <span aria-hidden="true" className="ml-2">
              ↗︎
            </span>
          </Button>
        </div>
        <svg
          viewBox="0 0 400 400"
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -bottom-40 w-[32rem] fill-none stroke-white/10"
        >
          <circle cx="200" cy="200" r="190" />
          <circle cx="200" cy="200" r="150" />
          <circle cx="200" cy="200" r="110" />
        </svg>
      </FadeIn>
    </Container>
  )
}
