import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { HeadingAccent } from '@/components/HeadingAccent'
import { RootLayout } from '@/components/RootLayout'

export default function NotFound() {
  return (
    <RootLayout>
      <Container className="py-32 text-center">
        <p className="font-mono text-base text-brand-red-dark">404</p>
        <h1 className="mt-6 font-display text-4xl font-medium text-neutral-950">
          Page <HeadingAccent>not found.</HeadingAccent>
        </h1>
        <p className="mt-4 text-base text-neutral-600">
          The page you are looking for is unavailable.
        </p>
        <Button href="/" className="mt-8">
          Back to home
        </Button>
      </Container>
    </RootLayout>
  )
}
