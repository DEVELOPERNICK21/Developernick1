import type { StaticImageData } from 'next/image'
import nickAvatarBeard from '@/assets/nick-avatar-beard-clean.png'
import modelCodeBrackets from '@/assets/model-code-brackets.png'
import modelSmartphone from '@/assets/model-smartphone.png'
import modelTerminal from '@/assets/model-terminal.png'
import modelAppShip from '@/assets/model-app-ship.png'

// Bearded 3D portrait for the magnetic hero (checkerboard removed)
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
      'pointer-events-none absolute -left-4 top-[28%] w-16 opacity-80 sm:left-8 sm:w-24 md:w-32',
    parallaxY: 60,
    parallaxRotate: 12,
  },
  {
    src: modelSmartphone,
    alt: 'Mobile app',
    className:
      'pointer-events-none absolute -right-2 top-[22%] w-14 opacity-75 sm:right-10 sm:w-20 md:w-28',
    parallaxY: 45,
    parallaxRotate: -10,
  },
  {
    src: modelTerminal,
    alt: 'Terminal',
    className:
      'pointer-events-none absolute bottom-[32%] left-[8%] hidden w-20 opacity-70 sm:block md:w-28',
    parallaxY: 70,
    parallaxRotate: 15,
  },
  {
    src: modelAppShip,
    alt: 'Ship product',
    className:
      'pointer-events-none absolute bottom-[30%] right-[6%] hidden w-24 opacity-70 sm:block md:w-32',
    parallaxY: 55,
    parallaxRotate: -12,
  },
]
