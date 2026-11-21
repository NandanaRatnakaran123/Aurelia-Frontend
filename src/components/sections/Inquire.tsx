import Eyebrow from "@/components/ui/Eyebrow";
import InquiryButton from "@/components/ui/InquiryButton";

export default function Inquire() {
  return (
    <section
      id="inquire"
      className="bg-gradient-to-b from-ink to-[#2a2218] px-[clamp(20px,5vw,72px)] py-[130px] text-center text-white"
    >
      <Eyebrow className="text-gold">Inquire</Eyebrow>
      <h2 className="mx-auto mb-6 max-w-[780px] font-serif text-[clamp(40px,6vw,80px)] font-normal leading-[1.05]">
        Let us create something wonderful.
      </h2>
      <p className="mx-auto mb-10 max-w-[520px] text-dark-text">
        Tell us about your date, your vision and your guest count.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <InquiryButton
          mode="inquiry"
          className="inline-block bg-gold px-11 py-5 text-[13px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-[#d8bb84] hover:text-ink"
        >
          Start your inquiry
        </InquiryButton>
        <InquiryButton
          mode="callback"
          className="inline-block border border-white px-11 py-[19px] text-[13px] font-normal uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/10"
        >
          Request a call back
        </InquiryButton>
      </div>
    </section>
  );
}
