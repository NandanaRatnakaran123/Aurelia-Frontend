import Eyebrow from "@/components/ui/Eyebrow";
import FadeUp from "@/components/ui/FadeUp";
import { process } from "@/lib/content";

const svgProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-9 w-9",
  "aria-hidden": true,
};

const icons = [
  // Consult: conversation
  <svg key="consult" {...svgProps}>
    <path d="M8 10h22a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H19l-7 6v-6H8a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3Z" />
    <path d="M37 18h3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-3v6l-7-6h-6" />
    <path d="M13 17h13M13 22h8" />
  </svg>,
  // Design: compass and pencil
  <svg key="design" {...svgProps}>
    <path d="M10 38 36 12l4 4-26 26-7 2 3-6Z" />
    <path d="m31 17 4 4M10 38l4 4" />
    <path d="M38 6l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z" />
  </svg>,
  // Curate: blossom
  <svg key="curate" {...svgProps}>
    <circle cx="24" cy="24" r="4" />
    <path d="M24 20c-4-6-3-12 0-14 3 2 4 8 0 14ZM28 24c6-4 12-3 14 0-2 3-8 4-14 0ZM24 28c4 6 3 12 0 14-3-2-4-8 0-14ZM20 24c-6 4-12 3-14 0 2-3 8-4 14 0Z" />
  </svg>,
  // Celebrate: raised glasses
  <svg key="celebrate" {...svgProps}>
    <path d="M10 8h12l-1 10a5 5 0 0 1-10 0L10 8ZM16 23v15M10 40h12" />
    <path d="M26 8h12l-1 10a5 5 0 0 1-10 0L26 8ZM32 23v15M26 40h12" />
    <path d="M24 2v3M17 4l1 2M31 4l-1 2" />
  </svg>,
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-ink px-[clamp(20px,5vw,72px)] py-[120px] text-cream">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.18),transparent_65%)]" />
      <div className="pointer-events-none absolute -bottom-52 -left-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(201,169,110,0.10),transparent_65%)]" />

      <FadeUp className="relative mx-auto mb-20 max-w-[760px] text-center">
        <Eyebrow>The process</Eyebrow>
        <h2 className="font-serif text-[clamp(36px,5vw,60px)] font-normal leading-[1.1] text-cream">
          Four steps, <em className="text-gold">without a single visible seam.</em>
        </h2>
        <div className="mx-auto mt-8 flex items-center justify-center gap-3 text-gold" aria-hidden="true">
          <span className="h-px w-16 bg-gold/50" />
          <span className="text-[10px]">◆</span>
          <span className="h-px w-16 bg-gold/50" />
        </div>
      </FadeUp>

      <div className="relative">
        {/* connecting gold thread (desktop) */}
        <div
          className="pointer-events-none absolute left-[6%] right-[6%] top-[34px] hidden h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent lg:block"
          aria-hidden="true"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((s, i) => (
            <FadeUp key={s.no} delay={i * 180}>
              <div className="group relative h-full border border-dark-line bg-footer/60 px-7 pb-9 pt-[72px] transition duration-500 hover:-translate-y-2 hover:border-gold/70 hover:shadow-[0_24px_50px_-18px_rgba(201,169,110,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <div className="absolute left-1/2 top-0 flex h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/70 bg-ink text-gold shadow-[0_0_30px_rgba(201,169,110,0.25)] transition duration-500 group-hover:bg-gold group-hover:text-ink">
                  {icons[i]}
                </div>
                <span
                  className="pointer-events-none absolute right-4 top-3 select-none font-serif text-[88px] italic leading-none text-gold/10 transition duration-500 group-hover:text-gold/20"
                  aria-hidden="true"
                >
                  {s.no}
                </span>
                <p className="mb-2 text-center text-xs font-normal uppercase tracking-[0.28em] text-gold">Step {i + 1}</p>
                <h3 className="mb-3 text-center font-serif text-[32px] font-medium text-cream">{s.title}</h3>
                <div className="mx-auto mb-4 h-px w-10 bg-gold/60 transition-all duration-500 group-hover:w-20" />
                <p className="text-center text-base text-dark-text">{s.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
