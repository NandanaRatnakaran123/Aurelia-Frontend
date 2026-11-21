import Image from "next/image";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { portfolio } from "@/lib/content";

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-[clamp(20px,5vw,72px)] py-[120px]">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[640px]">
          <Eyebrow>Portfolio</Eyebrow>
          <SectionTitle>
            Celebrations we have <em>made to be remembered</em>
          </SectionTitle>
        </div>
        <Link href="#inquire" className="border-b border-ink pb-1 text-[13px] font-normal uppercase tracking-[0.18em]">
          View all work
        </Link>
      </div>
      <div className="flex flex-wrap gap-8">
        {portfolio.map((p, i) => (
          <Link key={i} href="#inquire" className="block min-w-0 flex-[1_1_340px]">
            <div className="border border-gold/60 bg-beige p-2.5 shadow-[0_18px_40px_-14px_rgba(138,106,53,0.45),0_4px_12px_rgba(23,19,15,0.10)] transition duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_26px_50px_-14px_rgba(138,106,53,0.55),0_6px_16px_rgba(23,19,15,0.14)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <Image src={p.src} alt={p.alt} width={1200} height={900} className="block h-[440px] w-full object-cover" />
            </div>
            <p className="mt-[18px] text-xs font-normal uppercase tracking-[0.2em] text-gold-dark">{p.category}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
