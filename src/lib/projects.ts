import { Clock, ScanLine, MapPin, Shield, UserCheck, Globe, PawPrint, LucideIcon } from 'lucide-react'

export interface ProjectPreviewImages {
  marquee: string
  sticky: [string, string, string]
}

export interface Project {
  label: string
  title: string
  heroTitle?: string
  heroMeta?: string
  description: string
  tags: string[]
  links: { label: string; href: string }[]
  featured?: boolean
  stickyFeatured?: boolean
  showInHero?: boolean
  heroBadge?: string
  icon: LucideIcon
  iconUrl?: string
  previewImages?: ProjectPreviewImages
}

export const projects: Project[] = [
  {
    label: 'Personal · Live on App Store',
    title: 'Pawfect — Pet Health Scheduling',
    heroTitle: 'Pawfect',
    heroMeta: 'Pet Health · Launched',
    description:
      'Vet-validated health timeline for dog and cat owners — vaccinations, deworming, and life stage milestones in one beautiful offline-first app. India-first protocols with smart reminders and PDF export for vet visits.',
    tags: ['React Native', 'TypeScript', 'Offline-First', 'iOS', 'Android', 'Pet Care'],
    links: [{ label: 'Website', href: 'https://paw-fect.vercel.app/' }],
    featured: true,
    stickyFeatured: true,
    showInHero: true,
    heroBadge: 'Launched',
    icon: PawPrint,
    iconUrl: '/icons/pawfect-icon.png',
    previewImages: {
      marquee: '/previews/pawfect-2.png',
      sticky: ['/previews/pawfect-1.png', '/previews/pawfect-2.png', '/previews/pawfect-3.png'],
    },
  },
  {
    label: 'Personal · Live on Play Store',
    title: 'UNTIL — Time Awareness App',
    heroTitle: 'UNTIL',
    heroMeta: 'Time Awareness · Live',
    description:
      'A time and life awareness app showing day, month, year, and life progress. Built with clean architecture, MMKV caching, AI daily reflections (Claude Haiku), home/lock screen widgets, Dynamic Island on iOS, and floating overlay on Android. Paid tiers: yearly and lifetime.',
    tags: ['React Native', 'TypeScript', 'MMKV', 'Zustand', 'AI / Claude Haiku', 'iOS', 'Android'],
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=app.until.time' },
      { label: 'Website', href: 'https://developernick1-until.vercel.app/' },
    ],
    featured: true,
    stickyFeatured: true,
    showInHero: true,
    heroBadge: 'Play Store',
    icon: Clock,
    iconUrl: 'https://play-lh.googleusercontent.com/47Ho31IBz_BXuyYp_cdzsuKVNI8zHVMPRQwqIxpfW22jIaTpXtBAUnWEt8DqQ3we6UfZrU0A-bhkAsyy-AT1VlI=w512-rw',
    previewImages: {
      marquee: '/previews/until-1.webp',
      sticky: ['/previews/until-1.webp', '/previews/until-2.webp', '/previews/until-3.webp'],
    },
  },
  {
    label: 'Organization · Internal',
    title: 'DMG Events Lead Retrieval',
    heroTitle: 'DMG Events',
    heroMeta: 'Lead Retrieval · Live',
    description:
      'Built from scratch for DMG Events. QR-based lead capture at exhibitions and trade shows. Live on both iOS App Store and Google Play. Supports real-time sync, export, and multi-event deployment.',
    tags: ['React Native', 'QR Scanner', 'iOS', 'Android', 'Offline-First'],
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.dmg.newleadretrival.xporience' },
      { label: 'App Store', href: 'https://apps.apple.com/in/app/dmg-events-lead-retrieval/id1270582429' },
    ],
    showInHero: true,
    stickyFeatured: true,
    heroBadge: 'iOS + Android',
    icon: ScanLine,
    iconUrl: '/icons/dmg-events-icon.webp',
    previewImages: {
      marquee: '/previews/dmg-1.webp',
      sticky: ['/previews/dmg-1.webp', '/previews/dmg-2.webp', '/previews/dmg-3.webp'],
    },
  },
  {
    label: 'Organization · Internal',
    title: 'Expo Sharjah Lead Capture',
    heroTitle: 'Expo Sharjah',
    heroMeta: 'Lead Capture · Live',
    description:
      'Custom lead retrieval app for Expo Sharjah. Built from scratch with offline-first architecture, multi-space support, CSV export, and badge scanning. Live on iOS and Android.',
    tags: ['React Native', 'TypeScript', 'Offline-First', 'iOS', 'Android'],
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.xporience.exposharjahleadretrival' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/expo-sharjah-lead-capture/id6720764109' },
    ],
    showInHero: true,
    stickyFeatured: true,
    heroBadge: 'iOS + Android',
    icon: MapPin,
    iconUrl: '/icons/expo-sharjah-icon.webp',
    previewImages: {
      marquee: '/previews/sharjah-1.webp',
      sticky: ['/previews/sharjah-1.webp', '/previews/sharjah-2.webp', '/previews/sharjah-3.webp'],
    },
  },
  {
    label: 'Singapore · Live on Stores',
    title: 'BigFootSG',
    description:
      'Contributed to a Singapore-based consumer app — BigFootSG — live on both iOS App Store and Google Play in Singapore.',
    tags: ['React Native', 'iOS', 'Android', 'Consumer App'],
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.bigfootsg' },
      { label: 'App Store', href: 'https://apps.apple.com/sg/app/bigfootsg/id1627603425' },
    ],
    icon: Globe,
    iconUrl: 'https://play-lh.googleusercontent.com/ixQvuz_DSw7CK8iY5IA2eN52ZPhjs0xbhQJv0DsA435WbbxVqmmnulcH5yu9Sqnw6mBv=w512-rw',
    previewImages: {
      marquee: '/previews/bigfoot-1.webp',
      sticky: ['/previews/bigfoot-1.webp', '/previews/bigfoot-2.webp', '/previews/bigfoot-3.webp'],
    },
  },
  {
    label: 'Organization · Not on Stores',
    title: 'Event Badge Access Control',
    description:
      'Mobile app (PWA) for real-time badge scanning and access control at events. Zebra TC26/TC27 device support, multi-space management, offline sync, and CSV export. Used internally by event organizers.',
    tags: ['React Native', 'PWA', 'QR/Barcode', 'Offline Sync', 'Zebra Devices'],
    links: [{ label: 'Web Guide', href: 'https://badge-scanner-five.vercel.app/' }],
    icon: Shield,
    iconUrl: '/icons/access-control-icon.png',
    previewImages: {
      marquee: '/previews/access-control-2.png',
      sticky: [
        '/previews/access-control-1.png',
        '/previews/access-control-2.png',
        '/previews/access-control-3.png',
      ],
    },
  },
  {
    label: 'Organization · Not on Stores',
    title: 'ID Control App',
    description:
      'Internal app for onsite ID verification and registration reduction at events. Eliminates manual registration queues through QR-based pre-check and ID verification workflows.',
    tags: ['React Native', 'Check-In', 'Event Tech', 'TypeScript'],
    links: [{ label: 'Web Guide', href: 'https://id-control.vercel.app/' }],
    icon: UserCheck,
    iconUrl: '/icons/id-control-icon.png',
    previewImages: {
      marquee: '/previews/id-control-1.png',
      sticky: ['/previews/id-control-1.png', '/previews/id-control-2.png', '/previews/id-control-3.png'],
    },
  },
]

export const heroProjects = projects.filter(p => p.showInHero)
export const stickyProjects = projects.filter(p => p.stickyFeatured)
