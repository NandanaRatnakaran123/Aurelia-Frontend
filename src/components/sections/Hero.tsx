import BackgroundVideo from "./BackgroundVideo";
import LinkButton from "@/components/ui/LinkButton";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[760px] flex-col justify-end overflow-hidden bg-ink text-white">
      <BackgroundVideo />
      <div className="absolute inset-0 bg-ink/30" />
      <div className="absolute inset-x-0 top-0 h-[220px] bg-gradient-to-b from-ink/85 via-ink/45 to-ink/0" />
      <div className="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-b from-ink/0 to-ink/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(201,169,110,0.22),transparent_60%)]" />
      <div className="relative max-w-[900px] px-[clamp(20px,5vw,72px)] pb-[88px]">
        <p className="mb-[18px] text-[13px] font-normal uppercase tracking-[0.28em] text-[#e6d3ac]">
          Luxury weddings &amp; celebrations
        </p>
        <h1 className="mb-7 font-serif text-[clamp(46px,8vw,104px)] font-normal leading-[1.02] text-white">
          Celebrations crafted
          <br />
          <em className="font-normal text-[#f1e3c4]">to be treasured.</em>
        </h1>
        <div className="flex flex-wrap gap-4">
          <LinkButton href="#portfolio">Discover our celebrations</LinkButton>
          <LinkButton href="#inquire" inquiry="inquiry" variant="outline-light">
            Start an inquiry
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
