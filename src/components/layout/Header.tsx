import Link from "next/link";
import { siteConfig } from "@/lib/seo";
import { navLinks } from "@/lib/content";
import InquiryButton from "@/components/ui/InquiryButton";
import Logo from "@/components/ui/Logo";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex flex-wrap items-center justify-between gap-x-10 gap-y-4 bg-transparent px-[clamp(20px,5vw,72px)] py-7">
      <Link href="/#top" aria-label={siteConfig.name} className="text-[34px] text-cream [text-shadow:0_2px_14px_rgba(15,12,9,0.8)]">
        <Logo name={siteConfig.name} markClassName="h-12 w-12 drop-shadow-[0_2px_10px_rgba(15,12,9,0.7)]" />
      </Link>
      <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-[34px] gap-y-3 text-[13px] font-normal uppercase tracking-[0.16em] text-white">
        {navLinks.map((l) => (
          <Link key={l.href} href={`/${l.href}`} className="py-2.5 hover:text-gold">
            {l.label}
          </Link>
        ))}
        <InquiryButton className="border border-white px-7 py-3.5 uppercase tracking-[0.16em] text-white hover:bg-white hover:text-ink">
          Inquire
        </InquiryButton>
      </nav>
    </header>
  );
}
