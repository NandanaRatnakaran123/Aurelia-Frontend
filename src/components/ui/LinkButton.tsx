import Link from "next/link";
import InquiryButton from "./InquiryButton";
import type { InquiryMode } from "@/features/inquiry/inquirySlice";

type Variant = "gold" | "outline-light" | "outline-dark" | "text";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-ink px-9 py-[18px] font-medium hover:text-ink hover:bg-[#d8bb84]",
  "outline-light": "border border-white text-white px-9 py-[17px] font-normal hover:text-white hover:bg-white/10",
  "outline-dark": "border border-ink text-ink px-8 py-4 font-normal hover:text-ink hover:bg-ink/5",
  text: "border-b border-gold-dark pb-1 text-gold-dark font-normal hover:text-gold-dark",
};

export default function LinkButton({
  href,
  variant = "gold",
  className = "",
  inquiry,
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  /** When set, the button opens the inquiry / call-back pop-up instead of navigating. */
  inquiry?: InquiryMode;
  children: React.ReactNode;
}) {
  const classes = `inline-block text-[13px] uppercase tracking-[0.18em] transition-colors ${variants[variant]} ${className}`;
  if (inquiry) {
    return (
      <InquiryButton mode={inquiry} className={classes}>
        {children}
      </InquiryButton>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
