import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'Contact',
  description:
    'Contact TrokicTech at office@trokic.tech for company, software, and product inquiries.',
  alternates: { canonical: '/contact/' },
}

export default function Contact() {
  return (
    <RootLayout>
      <PageIntro eyebrow="CONTACT" title="Let’s start" accent="a conversation.">
        <p>
          Have a question about our products or our advisory services? Get in
          touch by email.
        </p>
      </PageIntro>
      <Container className="mt-16">
        <FadeIn className="grid overflow-hidden rounded-4xl bg-neutral-950 lg:grid-cols-[2fr_1fr]">
          <div className="p-8 sm:p-16">
            <p className="text-sm font-semibold tracking-wide text-neutral-400">
              COMPANY & PRODUCT INQUIRIES
            </p>
            <a
              href="mailto:office@trokic.tech"
              className="mt-6 block font-display text-3xl font-medium tracking-tight break-words text-white underline decoration-brand-red underline-offset-8 transition hover:text-brand-red-light sm:text-5xl"
            >
              office@trokic.tech
            </a>
            <p className="mt-8 max-w-lg text-base text-neutral-400">
              Tell us what you have in mind and include any details that will
              help us understand your inquiry.
            </p>
            <Button href="mailto:office@trokic.tech" invert className="mt-8">
              Write an email{' '}
              <span aria-hidden="true" className="ml-3">
                ↗︎
              </span>
            </Button>
          </div>
          <div className="border-t border-white/10 p-8 sm:p-16 lg:border-t-0 lg:border-l">
            <h2 className="font-display text-xl font-semibold text-white">
              TrokicTech
            </h2>
            <p className="mt-5 text-base text-neutral-400">
              Data analysis.
              <br />
              Mobile applications.
              <br />
              Web software.
              <br />
              Advisory.
            </p>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
