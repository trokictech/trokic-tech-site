import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { FocusSection } from '@/components/FocusSection'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'About',
  description:
    'TrokicTech is an analytics company. We design the statistical methods behind a decision and build them into mobile and web products that professionals use every day.',
  alternates: { canonical: '/about/' },
}

export default function About() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="ABOUT TROKICTECH"
        title="Rigorous analysis."
        accent="Elegantly delivered."
      >
        <p>
          TrokicTech is an analytics company. We design the statistical methods
          behind a decision and build them into mobile and web products that
          professionals use every day.
        </p>
      </PageIntro>
      <Container className="mt-16">
        <FadeIn className="grid gap-10 border-t border-neutral-950/10 pt-12 lg:grid-cols-[1fr_2fr]">
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Our perspective
          </h2>
          <div className="max-w-2xl space-y-6 text-lg text-neutral-600">
            <p>
              Data is only useful at the moment a decision is made. We design
              for that moment: the right metric, computed correctly, presented
              so that its meaning is immediate and its basis is clear.
            </p>
            <p>
              Our work joins statistical methodology with product design and
              software engineering. Every engagement begins with the decision
              our client needs to make; the metrics, the interface, and the
              analysis are built around it and refined through structured
              testing and feedback.
            </p>
          </div>
        </FadeIn>
      </Container>
      <FocusSection />
      <ContactSection />
    </RootLayout>
  )
}
