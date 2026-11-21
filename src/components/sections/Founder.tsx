import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";
import LinkButton from "@/components/ui/LinkButton";
import SlideIn from "@/components/ui/SlideIn";

export default function Founder() {
  return (
    <section className="flex flex-wrap items-center gap-14 overflow-x-clip px-[clamp(20px,5vw,72px)] pb-[120px]">
      <SlideIn from="left" className="min-w-0 flex-[1_1_380px]">
      <div className="relative flex translate-y-8 items-end justify-center">
        {/* soft backdrop that blends the cutout into the page */}
        <div
          aria-hidden="true"
          className="absolute inset-x-[8%] bottom-0 top-[12%] rounded-t-[999px] bg-gradient-to-b from-beige via-[#ead9b8] to-cream"
        />
        <Image
          src="/images/boss-cutout.webp"
          alt="Portrait of Nikhil Ragunath, founder"
          width={639}
          height={1318}
          className="relative block h-[520px] w-auto max-w-full object-contain [mask-image:linear-gradient(to_bottom,black_82%,transparent)]"
        />
      </div>
      </SlideIn>
      <SlideIn from="right" className="min-w-0 flex-[1_1_420px]">
        <Eyebrow>The team</Eyebrow>
        <SectionTitle className="mb-7">Meet NIKHIL RAGUNATH</SectionTitle>
        <p className="mb-5 text-muted">
          Nikhil Ragunath is the founder and creative director of Aurelia. With over a decade of experience
          designing weddings and celebrations, he began with a simple belief: every couple has a story worth
          telling, and the day should feel unmistakably theirs.
        </p>
        <p className="mb-5 text-muted">
          His approach blends thoughtful planning with an eye for detail, from the first floral sketch to the
          last dance. Guests can expect warm, personal service, seamless coordination and moments that are
          remembered long after the celebration ends.
        </p>
        <LinkButton href="#inquire" inquiry="callback" variant="text">
          Meet the whole team
        </LinkButton>
        <Image
          src="/images/team-banner.webp"
          alt="The Aurelia team seated together in a relaxed group portrait"
          width={1800}
          height={1223}
          sizes="(min-width: 640px) 300px, 70vw"
          className="mt-4 block h-auto w-[70%] max-w-[300px] rounded-[10px] object-cover [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)]"
        />
      </SlideIn>
    </section>
  );
}
