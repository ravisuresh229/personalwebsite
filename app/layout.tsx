import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ravi Suresh | Health AI & Web Solutions',
  description: 'Portfolio of Ravi Suresh – Health AI innovator, former medical student, and web engineer specializing in healthcare technology solutions.',
  keywords: ['Health AI', 'Healthcare Technology', 'Web Development', 'Machine Learning', 'Portfolio', 'Ravi Suresh'],
  authors: [{ name: 'Ravi Suresh' }],
  creator: 'Ravi Suresh',
  publisher: 'Ravi Suresh',
  robots: 'index, follow',
  openGraph: {
    title: 'Ravi Suresh | Health AI & Web Solutions',
    description: 'Portfolio of Ravi Suresh – Health AI innovator and web engineer specializing in healthcare technology solutions.',
    url: 'https://ravisuresh.com',
    siteName: 'Ravi Suresh Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ravi Suresh - Health AI Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravi Suresh | Health AI & Web Solutions',
    description: 'Portfolio of Ravi Suresh – Health AI innovator and web engineer specializing in healthcare technology solutions.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3B82F6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 