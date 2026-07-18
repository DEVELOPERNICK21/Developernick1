import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#050505',
          surface: '#0E0E0E',
          border: '#1F1F1F',
          accent: '#00E5FF',
          accent2: '#00B8D4',
          text: '#F5F5F5',
          light: '#D7E2EA',
          muted: '#6B7280',
          tag: '#111118',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        kanit: ['var(--font-kanit)', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(0, 229, 255, 0.25)',
        'glow-lg': '0 0 40px rgba(0, 229, 255, 0.35)',
      },
    },
  },
  plugins: [],
}

export default config
