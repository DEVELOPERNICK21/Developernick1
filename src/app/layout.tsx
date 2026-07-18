import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono, Kanit, Playfair_Display } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap', weight: ['400', '500', '600'] })
const kanit = Kanit({
  subsets: ['latin'],
  variable: '--font-kanit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  style: ['italic'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Developer Nick — React Native Developer',
  description: 'React Native developer with 5 years experience. 6 apps shipped on iOS and Android. Based in Pune, India.',
  keywords: ['React Native', 'developer', 'iOS', 'Android', 'Pune', 'mobile apps', 'Developer Nick'],
  authors: [{ name: 'Nick Kubde' }],
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: '32x32' }],
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'Developer Nick — React Native Developer',
    description: '5 years. 6 apps. iOS and Android.',
    type: 'website',
    images: [{ url: '/icon.jpg' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} ${kanit.variable} ${playfair.variable}`}
    >
      <body className="bg-brand-bg text-brand-text antialiased">{children}</body>
    </html>
  )
}
