import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import LinkButton from "@/components/ui/LinkButton";

export default function Journal() {
  return (
    <section id="journal" className="flex flex-wrap items-center gap-14 px-[clamp(20px,5vw,72px)] py-[120px]">
      <div className="min-w-0 flex-[1_1_420px]">
        <Eyebrow>Journal</Eyebrow>
        <SectionTitle className="mb-7">The planning checklist, in one place.</SectionTitle>
        <p className="mb-8 text-muted">
          Timelines, venue questions and styling ideas from our planners, written to make your own planning calmer.
        </p>
        <LinkButton href="#journal" variant="outline-dark">
          Read the guide
        </LinkButton>
      </div>
      <Image
        src="/images/decor1.webp"
        alt="Bright reception hall styled with white florals, tall candles and clear chairs"
        width={1920}
        height={900}
        sizes="(min-width: 900px) 50vw, 90vw"
        className="block h-[480px] min-w-0 flex-[1_1_380px] object-cover [mask-image:linear-gradient(to_right,transparent,black_18%),linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
      />
    </section>
  );
}
