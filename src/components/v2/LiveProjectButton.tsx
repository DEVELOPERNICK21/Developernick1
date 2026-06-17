interface LiveProjectButtonProps {
  href: string
  label?: string
  className?: string
}

export default function LiveProjectButton({
  href,
  label = 'Live Project',
  className = '',
}: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block shrink-0 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base ${className}`}
    >
      {label}
    </a>
  )
}
