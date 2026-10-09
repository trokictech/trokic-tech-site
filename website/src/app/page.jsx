import Link from 'next/link'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { FocusSection } from '@/components/FocusSection'
import { HeadingAccent } from '@/components/HeadingAccent'
import { ProjectFeature } from '@/components/ProjectFeature'
import { RootLayout } from '@/components/RootLayout'

export const metadata = { alternates: { canonical: '/' } }

export default function Home() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_18rem]">
            <h1 className="max-w-4xl font-display text-[clamp(2.75rem,7.2vw,6rem)] leading-[1.06] font-medium tracking-[-0.045em] text-neutral-950">
              Software built
              <br />
              with <HeadingAccent>purpose.</HeadingAccent>
            </h1>
            <div className="border-l border-neutral-950/15 pl-6 lg:mb-2">
              <p className="max-w-sm text-lg text-neutral-600">
                We turn data into decision-grade intelligence — mobile
                applications, web platforms, and advisory services built for the
                professionals who rely on them daily.
              </p>
              <Link
                href="/about/"
                className="mt-5 inline-flex items-center gap-3 text-base font-semibold text-neutral-950 transition hover:text-brand-red-dark"
              >
                Meet TrokicTech <span aria-hidden="true">↗︎</span>
              </Link>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Button href="/work/" className="px-6 py-3">
              Explore our work{' '}
              <span aria-hidden="true" className="ml-3">
                ↗︎
              </span>
            </Button>
            <a
              href="mailto:office@trokic.tech"
              className="text-base text-neutral-600 transition hover:text-brand-red-dark"
            >
              office@trokic.tech
            </a>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-neutral-950/10 py-7 text-sm text-neutral-500">
            <span>DECISION-GRADE BY DESIGN.</span>
            <div className="flex gap-6">
              <span>Analysis</span>
              <span>Mobile</span>
              <span>Web</span>
              <span>Advisory</span>
            </div>
          </div>
        </FadeIn>
      </Container>
      <ProjectFeature />
      <FocusSection />
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="grid gap-8 border-t border-neutral-950/10 pt-12 lg:grid-cols-2">
          <h2 className="max-w-lg font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
            From the first idea.
            <br />
            <HeadingAccent>To the finer details.</HeadingAccent>
          </h2>
          <div className="max-w-lg text-lg text-neutral-600">
            <p>
              We start with the decision, not the screen. Our analysts define
              the metrics, our designers build the product around them, and both
              are refined through structured testing and client feedback
            </p>
            <Link
              href="/process/"
              className="mt-6 inline-flex gap-3 font-semibold text-neutral-950 hover:text-brand-red-dark"
            >
              How we build <span aria-hidden="true">↗︎</span>
            </Link>
          </div>
        </FadeIn>
      </Container>
      <ContactSection />
    </RootLayout>
  )
}
