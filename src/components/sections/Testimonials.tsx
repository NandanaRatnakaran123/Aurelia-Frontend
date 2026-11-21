import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="words" className="bg-beige px-[clamp(20px,5vw,72px)] py-[120px]">
      <Eyebrow className="text-center text-gold-dark">Kind words</Eyebrow>
      <SectionTitle className="mx-auto mb-16 max-w-[700px] text-center">
        Said by the people we celebrated with
      </SectionTitle>
      <div className="flex flex-wrap gap-8">
        {testimonials.map((t, i) => (
          <figure key={i} className="min-w-0 flex-[1_1_300px] bg-cream px-9 py-10">
            <blockquote className="mb-6 font-serif text-2xl italic leading-[1.4]">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="text-xs font-normal uppercase tracking-[0.2em] text-gold-dark">{t.author}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
