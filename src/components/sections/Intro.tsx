import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import LinkButton from "@/components/ui/LinkButton";
import ZoomIn from "@/components/ui/ZoomIn";

const fade = (dir: string) => `linear-gradient(${dir}, transparent 0%, #000 22%, #000 78%, transparent 100%)`;

const blendMask: React.CSSProperties = {
  WebkitMaskImage: `${fade("to right")}, ${fade("to bottom")}`,
  maskImage: `${fade("to right")}, ${fade("to bottom")}`,
  WebkitMaskComposite: "source-in",
  maskComposite: "intersect",
};

export default function Intro() {
  return (
    <section className="flex flex-wrap items-center gap-14 px-[clamp(20px,5vw,72px)] py-[120px]">
      <div className="min-w-0 flex-[1_1_420px]">
        <Eyebrow>Our story</Eyebrow>
        <SectionTitle className="mb-7">From the first idea to the final toast.</SectionTitle>
        <p className="mb-5 text-muted">
          We are a luxury event planning and design studio. We shape each celebration around the people at its heart:
          the setting, the florals, the light, and the small rituals that make a day feel like theirs.
        </p>
        <p className="mb-8 text-muted">
          [YOUR STUDIO STORY: year founded, city, what you are known for. Replace this line with your real copy.]
        </p>
        <LinkButton href="#services" variant="text">
          Explore our services
        </LinkButton>
      </div>
      <ZoomIn className="min-w-0 flex-[1_1_380px]">
      <Image
        src="/images/image1.jpg"
        alt="Couple embracing under a veil at sunset"
        width={1280}
        height={1920}
        className="block h-[640px] w-full object-cover object-[center_35%]"
        style={blendMask}
      />
      </ZoomIn>
    </section>
  );
}
