import IslandButton from '@/components/classic/IslandButton'

interface ContactButtonProps {
  className?: string
  label?: string
}

export default function ContactButton({ className = '', label = 'Contact Me' }: ContactButtonProps) {
  return (
    <IslandButton href="mailto:developernick1@gmail.com" className={className}>
      {label}
    </IslandButton>
  )
}
