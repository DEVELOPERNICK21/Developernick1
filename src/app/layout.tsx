import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Kanit, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
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
  openGraph: {
    title: 'Developer Nick — React Native Developer',
    description: '5 years. 6 apps. iOS and Android.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${kanit.variable} ${playfair.variable}`}>
      <body className="bg-brand-bg font-sans text-brand-text antialiased">{children}</body>
    </html>
  )
}
