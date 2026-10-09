'use client'

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Logo } from '@/components/Logo'

const RootLayoutContext = createContext(null)

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

function Header({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  invert = false,
}) {
  let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="TrokicTech home"
          className="shrink-0"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Logo
            className="block h-7 min-[360px]:h-8 sm:h-10"
            invert={invert}
            filled={logoHovered}
          />
        </Link>
        <div className="flex shrink-0 items-center gap-x-4 sm:gap-x-8">
          <Button
            href="/contact/"
            invert={invert}
            className="whitespace-nowrap"
          >
            Get in touch
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded ? 'true' : 'false'}
            aria-controls={panelId}
            className={clsx(
              'group -m-2.5 rounded-full p-2.5 transition',
              invert ? 'hover:bg-white/10' : 'hover:bg-neutral-950/10',
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={clsx(
                'h-6 w-6',
                invert
                  ? 'fill-white group-hover:fill-neutral-200'
                  : 'fill-neutral-950 group-hover:fill-neutral-700',
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  )
}

function NavigationRow({ children }) {
  return (
    <div className="bg-neutral-950">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 sm:grid-cols-4">
          {children}
        </div>
      </Container>
    </div>
  )
}

function NavigationItem({ href, children }) {
  return (
    <Link
      href={href}
      className="border-b border-white/10 py-4 transition hover:text-brand-red-light sm:py-5"
    >
      {children}
    </Link>
  )
}

function Navigation() {
  return (
    <nav
      aria-label="Main navigation"
      className="mt-px font-display text-lg font-medium tracking-tight text-white sm:text-2xl"
    >
      <NavigationRow>
        <NavigationItem href="/work/">Our work</NavigationItem>
        <NavigationItem href="/about/">About us</NavigationItem>
        <NavigationItem href="/process/">Our process</NavigationItem>
        <NavigationItem href="/contact/">Contact</NavigationItem>
      </NavigationRow>
    </nav>
  )
}

function RootLayoutInner({ children }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let [isTransitioning, setIsTransitioning] = useState(false)
  let openRef = useRef(null)
  let closeRef = useRef(null)
  let navRef = useRef(null)
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (!expanded) return
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setIsTransitioning(true)
        setExpanded(false)
        window.setTimeout(() => openRef.current?.focus({ preventScroll: true }))
      }
      if (event.key === 'Tab') {
        let items = navRef.current?.querySelectorAll('a[href], button')
        if (!items?.length) return
        let first = items[0]
        let last = items[items.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [expanded])

  useEffect(() => {
    function onClick(event) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setIsTransitioning(false)
        setExpanded(false)
        window.setTimeout(() => openRef.current?.focus({ preventScroll: true }))
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <MotionConfig
      transition={
        shouldReduceMotion || !isTransitioning ? { duration: 0 } : undefined
      }
    >
      <header>
        <a
          href="#main-content"
          className="fixed top-4 left-6 z-[100] -translate-y-24 rounded-full bg-brand-red-dark px-5 py-3 text-white focus:translate-y-0"
        >
          Skip to content
        </a>
        <div
          className="absolute top-2 right-0 left-0 z-40 pt-14"
          aria-hidden={expanded ? 'true' : undefined}
          inert={expanded ? true : undefined}
        >
          <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setIsTransitioning(true)
              setExpanded((expanded) => !expanded)
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true }),
              )
            }}
          />
        </div>

        <motion.div
          layout
          ref={navRef}
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
          aria-hidden={expanded ? undefined : 'true'}
          inert={expanded ? undefined : true}
        >
          <motion.div layout className="bg-neutral-800">
            <div className="bg-neutral-950 py-8">
              <Header
                invert
                panelId={panelId}
                icon={XIcon}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setIsTransitioning(true)
                  setExpanded((expanded) => !expanded)
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true }),
                  )
                }}
              />
            </div>
            <Navigation />
            <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
              <Container>
                <div className="grid grid-cols-1 gap-y-5 pt-6 pb-8 sm:grid-cols-2">
                  <div>
                    <h2 className="font-display text-base font-semibold text-white">
                      TrokicTech
                    </h2>
                    <p className="mt-2 max-w-sm text-sm text-neutral-400">
                      Analytics delivered as products.
                    </p>
                  </div>
                  <div className="sm:pl-3">
                    <h2 className="font-display text-base font-semibold text-white">
                      Start a conversation
                    </h2>
                    <a
                      href="mailto:office@trokic.tech"
                      className="mt-2 inline-block text-sm text-white underline decoration-white/30 underline-offset-4 hover:text-brand-red-light"
                    >
                      office@trokic.tech
                    </a>
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        inert={expanded ? true : undefined}
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-50 stroke-neutral-950/5"
            yOffset={-96}
            interactive
          />

          <main
            id="main-content"
            tabIndex={-1}
            className="w-full flex-auto outline-none"
          >
            {children}
          </main>

          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
