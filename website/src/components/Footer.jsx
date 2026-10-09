import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32">
      <FadeIn>
        <div className="grid gap-12 border-t border-neutral-950/10 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-base font-semibold text-neutral-950">
              TrokicTech
            </p>
            <p className="mt-4 max-w-xs text-base text-neutral-600">
              Analytics delivered as products.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="text-sm font-semibold text-neutral-950">Explore</p>
            <ul
              role="list"
              className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-base text-neutral-600"
            >
              {[
                ['About', '/about/'],
                ['Our work', '/work/'],
                ['Our process', '/process/'],
                ['Contact', '/contact/'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition hover:text-brand-red-dark"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-sm font-semibold text-neutral-950">
              Get in touch
            </p>
            <a
              href="mailto:office@trokic.tech"
              className="mt-4 inline-block text-base text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition hover:text-brand-red-dark"
            >
              office@trokic.tech
            </a>
          </div>
        </div>
        <div className="mt-16 mb-12 flex flex-wrap items-center justify-between gap-6 border-t border-neutral-950/10 pt-8">
          <Link href="/" aria-label="TrokicTech home">
            <Logo className="block h-14 sm:h-16" fillOnHover />
          </Link>
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} TrokicTech LLC
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
