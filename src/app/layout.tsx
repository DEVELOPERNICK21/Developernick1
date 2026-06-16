import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap', weight: ['400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Nick Kubde — React Native Developer',
  description: 'React Native developer with 5 years experience. 6 apps shipped on iOS and Android. Based in Pune, India.',
  keywords: ['React Native', 'developer', 'iOS', 'Android', 'Pune', 'mobile apps'],
  authors: [{ name: 'Nick Kubde' }],
  openGraph: {
    title: 'Nick Kubde — React Native Developer',
    description: '5 years. 6 apps. iOS and Android.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-brand-bg text-brand-text antialiased">{children}</body>
    </html>
  )
}
