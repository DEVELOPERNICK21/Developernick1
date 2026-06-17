import type { StaticImageData } from 'next/image'
import nickAvatarBeard from '@/assets/nick-avatar-beard-clean.png'
import modelCodeBrackets from '@/assets/model-code-brackets.png'
import modelSmartphone from '@/assets/model-smartphone.png'
import modelTerminal from '@/assets/model-terminal.png'
import modelAppShip from '@/assets/model-app-ship.png'

export const AVATAR_URL = nickAvatarBeard

export type Model3D = {
  src: string | StaticImageData
  alt: string
  className: string
  parallaxY?: number
  parallaxRotate?: number
  delay?: number
  x?: number
}

export const ABOUT_MODELS: Model3D[] = [
  {
    src: modelCodeBrackets,
    alt: 'Code brackets',
    className:
      'absolute top-[4%] left-[1%] w-[110px] sm:left-[2%] sm:w-[150px] md:left-[4%] md:w-[200px]',
    parallaxY: 80,
    parallaxRotate: 18,
    delay: 0.1,
    x: -80,
  },
  {
    src: modelTerminal,
    alt: 'Terminal',
    className:
      'absolute bottom-[8%] left-[3%] w-[90px] sm:left-[6%] sm:w-[130px] md:left-[10%] md:w-[170px]',
    parallaxY: 120,
    parallaxRotate: -22,
    delay: 0.25,
    x: -80,
  },
  {
    src: modelSmartphone,
    alt: 'Mobile app',
    className:
      'absolute top-[4%] right-[1%] w-[110px] sm:right-[2%] sm:w-[150px] md:right-[4%] md:w-[200px]',
    parallaxY: 90,
    parallaxRotate: -16,
    delay: 0.15,
    x: 80,
  },
  {
    src: modelAppShip,
    alt: 'Shipped product',
    className:
      'absolute bottom-[8%] right-[3%] w-[120px] sm:right-[6%] sm:w-[160px] md:right-[10%] md:w-[210px]',
    parallaxY: 110,
    parallaxRotate: 20,
    delay: 0.3,
    x: 80,
  },
]

export const HERO_FLOATING_MODELS: Model3D[] = [
  {
    src: modelCodeBrackets,
    alt: 'Code',
    className:
      'pointer-events-none absolute left-[3%] top-[52%] z-[15] w-14 opacity-75 sm:left-[8%] sm:top-[38%] sm:w-20 md:left-[10%] md:top-[32%] md:w-28 lg:w-32',
    parallaxY: 60,
    parallaxRotate: 12,
  },
  {
    src: modelSmartphone,
    alt: 'Mobile app',
    className:
      'pointer-events-none absolute right-[3%] top-[48%] z-[15] w-12 opacity-70 sm:right-[8%] sm:top-[34%] sm:w-[4.5rem] md:right-[10%] md:top-[28%] md:w-24 lg:w-28',
    parallaxY: 45,
    parallaxRotate: -10,
  },
  {
    src: modelTerminal,
    alt: 'Terminal',
    className:
      'pointer-events-none absolute bottom-[34%] left-[6%] z-[15] hidden w-20 opacity-70 sm:block md:bottom-[30%] md:left-[12%] md:w-28',
    parallaxY: 70,
    parallaxRotate: 15,
  },
  {
    src: modelAppShip,
    alt: 'Ship product',
    className:
      'pointer-events-none absolute bottom-[32%] right-[5%] z-[15] hidden w-24 opacity-70 sm:block md:bottom-[28%] md:right-[11%] md:w-32',
    parallaxY: 55,
    parallaxRotate: -12,
  },
]
