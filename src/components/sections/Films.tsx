import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import LinkButton from "@/components/ui/LinkButton";

export default function Films() {
  return (
    <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-ink text-center text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/image3.jpg"
        src="/video/video.mp4"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="relative max-w-[760px] px-[clamp(20px,5vw,72px)] py-20">
        <Eyebrow className="text-[#e6d3ac]">Films</Eyebrow>
        <SectionTitle className="mb-7 text-white">Relive the moments in motion.</SectionTitle>
        <LinkButton href="#inquire" inquiry="inquiry" variant="outline-light" className="px-[34px] py-4">
          Watch our films
        </LinkButton>
      </div>
    </section>
  );
}
