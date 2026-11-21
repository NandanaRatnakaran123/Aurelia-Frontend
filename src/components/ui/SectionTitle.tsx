export default function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`font-serif text-[clamp(36px,4.6vw,60px)] font-normal leading-[1.1] ${className}`}>{children}</h2>;
}
