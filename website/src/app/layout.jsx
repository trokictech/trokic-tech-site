import '@/styles/tailwind.css'

const description =
  'TrokicTech builds mobile applications, web software, and focused digital tools. Explore our work and contact office@trokic.tech.'

export const metadata = {
  metadataBase: new URL('https://trokic.tech'),
  title: {
    template: '%s | TrokicTech',
    default: 'TrokicTech — Software built with purpose',
  },
  description,
  openGraph: {
    title: 'TrokicTech',
    description,
    url: 'https://trokic.tech',
    siteName: 'TrokicTech',
    type: 'website',
  },
  icons: { icon: '/icon.svg?v=20212d' },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <noscript>
          <style>
            {'[data-reveal]{opacity:1!important;transform:none!important}'}
          </style>
        </noscript>
        {children}
      </body>
    </html>
  )
}
