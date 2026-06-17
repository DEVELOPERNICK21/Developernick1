interface StoreLinkButtonProps {
  href: string
  label?: string
  className?: string
}

export default function StoreLinkButton({
  href,
  label = 'View App',
  className = '',
}: StoreLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full border-2 border-brand-accent px-8 py-3 text-sm font-medium uppercase tracking-widest text-brand-accent transition-colors hover:bg-brand-accent/10 sm:px-10 sm:py-3.5 sm:text-base ${className}`}
    >
      {label}
    </a>
  )
}
