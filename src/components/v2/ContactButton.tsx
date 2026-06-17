interface ContactButtonProps {
  className?: string
  label?: string
}

export default function ContactButton({ className = '', label = 'Contact Me' }: ContactButtonProps) {
  return (
    <a
      href="mailto:developernick1@gmail.com"
      className={`inline-block rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-black transition-transform hover:scale-[1.03] active:scale-95 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
      style={{
        background: 'linear-gradient(123deg, #000428 7%, #00E5FF 37%, #00B8D4 72%, #004e64 100%)',
        boxShadow: '0px 4px 4px rgba(0, 229, 255, 0.25), 4px 4px 12px rgba(0, 184, 212, 0.4) inset',
        outline: '2px solid rgba(0, 229, 255, 0.6)',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </a>
  )
}
