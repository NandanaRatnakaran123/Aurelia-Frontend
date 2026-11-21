export default function Eyebrow({ children, className = "text-gold-dark" }: { children: React.ReactNode; className?: string }) {
  return <p className={`mb-4 text-[13px] font-normal uppercase tracking-[0.28em] ${className}`}>{children}</p>;
}
