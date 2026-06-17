import Image from 'next/image'
import logoImg from '@/assets/developernick1.jpg'

export default function ClassicLogo({ size = 28 }: { size?: number }) {
  return (
    <Image
      src={logoImg}
      alt="Developer Nick"
      width={size}
      height={size}
      className="rounded-full"
    />
  )
}
