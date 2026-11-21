import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="bg-ink px-[clamp(20px,5vw,72px)] py-[120px] text-[#f3ead9]">
      <div className="mb-16 max-w-[700px]">
        <Eyebrow className="text-gold">Services</Eyebrow>
        <SectionTitle className="mb-5 text-white">Choose how much support you would like.</SectionTitle>
        <p className="text-dark-text">
          From full creative direction to day-of coordination, every service is delivered with the same care.
        </p>
      </div>
      <div className="flex flex-wrap gap-px border border-dark-line bg-dark-line">
        {services.map((s) => (
          <div key={s.no} className="group min-w-0 flex-[1_1_280px] overflow-hidden bg-ink pb-11">
            {/* thumbnail, faded into the dark card */}
            <div className="relative h-[240px] overflow-hidden">
              <Image
                src={s.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                style={{ objectPosition: s.position }}
                className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:scale-100 [mask-image:linear-gradient(to_bottom,black_45%,transparent)]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink" />
            </div>
            <div className="relative -mt-24 px-9">
              <p className="mb-5 font-serif text-[20px] text-gold">{s.no}</p>
              <h3 className="mb-3.5 font-serif text-[32px] font-medium text-white">{s.title}</h3>
              <p className="text-base text-dark-text">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
