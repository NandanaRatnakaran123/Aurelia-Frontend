/** Aurelia monogram: gold "A" with a rising-sun arch inside a double ring. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={`text-gold ${className}`}>
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="32" cy="32" r="26.4" stroke="currentColor" strokeWidth="0.6" opacity="0.7" />
      <path d="M32.6 17.5 L20.2 47.5" stroke="currentColor" strokeWidth="3.2" />
      <path d="M31.4 17.5 L43.8 47.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M26.4 40 C29 35 35 35 37.6 40" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M32 35.6 V38.2" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      <path d="M15.8 47.5 H24.6 M39.4 47.5 H48.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M32 7.6 C32.5 10.4 33.4 11.3 36.2 11.8 C33.4 12.3 32.5 13.2 32 16 C31.5 13.2 30.6 12.3 27.8 11.8 C30.6 11.3 31.5 10.4 32 7.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Mark + wordmark lockup. Text colour comes from the parent (cream on dark, ink on light). */
export default function Logo({
  name,
  markClassName = "h-12 w-12",
  className = "",
}: {
  name: string;
  markClassName?: string;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-3.5 ${className}`}>
      <LogoMark className={markClassName} />
      <span className="font-serif font-medium uppercase tracking-[0.16em]">{name}</span>
    </span>
  );
}
