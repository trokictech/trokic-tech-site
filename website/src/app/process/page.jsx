import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'Our process',
  description:
    'How TrokicTech turns data into a product people can act on: define, build, and validate.',
  alternates: { canonical: '/process/' },
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="OUR PROCESS" title="Clarity" accent="at every step.">
        <p>
          A disciplined approach to turning data into a product people can act
          on.
        </p>
      </PageIntro>
      <Container className="mt-16">
        <FadeInStagger className="space-y-0">
          {[
            [
              '01',
              'Define',
              'Start with the decision.',
              'Identify the decision the product must support, the data available to inform it, and the constraints that matter. We specify the metrics and their methodology before any screen is drawn, so every design and engineering choice has a direction.',
            ],
            [
              '02',
              'Build',
              'Make the analysis tangible.',
              'Engineer the statistical core, then design the interface around it: the primary flows, the visualizations, and the features that surround them. Scope stays focused so the analysis that matters most receives the attention it deserves.',
            ],
            [
              '03',
              'Validate',
              'Prove it, then refine it.',
              'Verify the numbers against known outcomes, test usability with the people who will rely on the product, and resolve what the testing surfaces. Feedback drives each iteration, from the first report to the smallest interaction.',
            ],
          ].map(([number, title, subtitle, description]) => (
            <FadeIn
              key={number}
              className="grid gap-6 border-t border-neutral-950/10 py-12 sm:grid-cols-[5rem_1fr] lg:grid-cols-[5rem_1fr_1fr]"
            >
              <span className="font-mono text-lg text-brand-red-dark">
                /{number}
              </span>
              <div>
                <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950">
                  {title}
                </h2>
                <p className="mt-3 text-base font-semibold text-neutral-950">
                  {subtitle}
                </p>
              </div>
              <p className="text-lg text-neutral-600 sm:col-start-2 lg:col-start-auto">
                {description}
              </p>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
      <ContactSection />
    </RootLayout>
  )
}
