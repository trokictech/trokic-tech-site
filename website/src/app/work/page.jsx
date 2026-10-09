import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { ProjectFeature } from '@/components/ProjectFeature'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'Our work',
  description:
    'Explore Rallymetrica, a tennis application in development by TrokicTech.',
  alternates: { canonical: '/work/' },
}

export default function Work() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="OUR WORK"
        title="Built around"
        accent="real decisions."
      >
        <p>
          Every product begins with a decision someone has to make and the data
          that should inform it. Here is what we are building.
        </p>
      </PageIntro>
      <ProjectFeature detail />
      <Container className="mt-16">
        <FadeIn className="grid gap-10 border-t border-neutral-950/10 pt-12 lg:grid-cols-3">
          {[
            [
              'Every point recorded',
              "Score a match as it's played — a tap per point, or the full shot, down to where each ball landed. Detailed, Counter or Score-only, your choice per match.",
            ],
            [
              'Every match analyzed',
              "Momentum, aggression, serve and return breakdowns, pressure points and landing zones — on the phone the moment the match ends, with season trends across every match you've tracked.",
            ],
            [
              'Every student in view',
              'Coaches link to their players and follow matches live, point by point, from anywhere. Draw play patterns, assign them, and see how often each one is played and won.',
            ],
          ].map(([title, description]) => (
            <div key={title}>
              <h2 className="font-display text-xl font-semibold text-neutral-950">
                {title}
              </h2>
              <p className="mt-4 text-base text-neutral-600">{description}</p>
            </div>
          ))}
        </FadeIn>
      </Container>
      <ContactSection />
    </RootLayout>
  )
}
