import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

const projectUrl = 'https://rallymetrica.com/'

export function ProjectFeature({ detail = false }) {
  return (
    <Container className="mt-24 sm:mt-32">
      <FadeIn className="overflow-hidden rounded-4xl bg-neutral-950">
        <div className="grid lg:grid-cols-2">
          <div className="flex min-w-0 flex-col items-start px-8 py-12 sm:px-12 sm:py-16 lg:p-16">
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-sm font-semibold tracking-wide text-neutral-400">
                PRODUCT IN FOCUS
              </p>
              <span className="rounded-full border border-brand-grey/30 bg-brand-grey/10 px-3 py-1 text-sm text-brand-grey">
                In development
              </span>
            </div>
            <h2 className="mt-8 font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
              <Link href={projectUrl}>
                Rallymetrica<span className="text-rallymetrica-accent">.</span>
              </Link>
            </h2>
            <p className="mt-6 max-w-md text-xl text-neutral-300">
              A clearer picture of every point.
            </p>
            <p className="mt-5 max-w-md text-base text-neutral-400">
              A match-tracking app for tennis players and coaches. Score a match
              point by point — down to where each shot landed — and the app
              returns momentum, aggression, serve and return breakdowns, and
              season trends. Coaches link to their students and follow every
              match live, point by point, from anywhere.
            </p>
            {detail && (
              <p className="mt-6 text-base text-neutral-300">
                Designed around a point-by-point record, a full statistics
                engine, and reports a player can read at the end of the match.
              </p>
            )}
            <Button href={projectUrl} invert className="mt-8">
              Explore the project{' '}
              <span aria-hidden="true" className="ml-3">
                ↗︎
              </span>
            </Button>
            <div className="@container mt-12 w-full">
              <p className="flex w-full items-center justify-between text-[clamp(0.3125rem,2.5cqw,0.75rem)] leading-6 tracking-wide whitespace-nowrap text-neutral-300">
                <span>TENNIS</span>{' '}
                <span aria-hidden="true" className="text-rallymetrica-accent">
                  |
                </span>{' '}
                <span>MOBILE APP</span>{' '}
                <span aria-hidden="true" className="text-rallymetrica-accent">
                  |
                </span>{' '}
                <span>MATCH ANALYTICS</span>{' '}
                <span aria-hidden="true" className="text-rallymetrica-accent">
                  |
                </span>{' '}
                <span>DATA DRIVEN COACHING</span>
              </p>
            </div>
          </div>
          <div className="relative flex min-h-96 items-center justify-center overflow-hidden border-t border-white/10 bg-neutral-900 p-10 lg:border-t-0 lg:border-l">
            <svg
              viewBox="0 0 520 620"
              aria-hidden="true"
              className="absolute h-full w-full fill-none stroke-brand-grey/20"
              strokeWidth="1.2"
            >
              <path d="M80 35h360v550H80zM125 35v550M395 35v550M125 175h270v270H125zM260 175v270M80 310h360" />
              <circle cx="260" cy="310" r="145" strokeDasharray="3 10" />
              <circle cx="260" cy="310" r="205" strokeDasharray="3 10" />
            </svg>
            <div className="relative flex w-full max-w-xs flex-col items-center">
              <Link
                href={projectUrl}
                aria-label="Visit Rallymetrica"
                className="rounded-[2.5rem] border border-white/10 bg-neutral-950/90 p-8 shadow-2xl shadow-black/50 motion-safe:transition-transform motion-safe:duration-500 motion-safe:hover:-rotate-3"
              >
                <Image
                  src="/rallymetrica.svg"
                  width={160}
                  height={160}
                  alt="Rallymetrica logo"
                  className="h-40 w-40"
                />
              </Link>
              <p className="mt-8 font-mono text-sm tracking-widest text-brand-grey">
                RECORD. ANALYZE. IMPROVE.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
