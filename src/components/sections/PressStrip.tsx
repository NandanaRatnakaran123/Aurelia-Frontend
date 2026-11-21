import { marqueeItems } from "@/lib/content";

const edgeFade = "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {marqueeItems.map((item, i) => (
        <li key={i} className="flex items-center whitespace-nowrap">
          <span className="font-serif text-2xl italic">{item}</span>
          <span className="mx-10 text-[10px] text-gold" aria-hidden="true">
            ◆
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function PressStrip() {
  return (
    <section
      aria-label="What we do"
      className="group overflow-hidden border-y border-line py-11 text-muted"
      style={{ WebkitMaskImage: edgeFade, maskImage: edgeFade }}
    >
      <div className="flex w-max animate-marquee motion-reduce:animate-none group-hover:[animation-play-state:paused]">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
