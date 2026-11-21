import Link from "next/link";
import { siteConfig } from "@/lib/seo";
import Logo from "@/components/ui/Logo";

const heading = "mb-3.5 text-xs uppercase tracking-[0.22em] text-gold";

export default function Footer() {
  return (
    <footer className="bg-footer px-[clamp(20px,5vw,72px)] pb-10 pt-[72px] text-[15px] text-dark-text">
      <div className="mb-14 flex flex-wrap justify-between gap-x-16 gap-y-10">
        <div className="min-w-0 flex-[1_1_260px]">
          <Logo name={siteConfig.name} markClassName="h-11 w-11" className="mb-4 text-[28px] text-white" />
          <p>
            hello@aurelia.example
            <br />
            +91 98765 43210
            <br />
            12 Marine Drive, Ernakulam, Kochi, Kerala, India
          </p>
        </div>
        <div className="min-w-0 flex-[1_1_160px]">
          <p className={heading}>Explore</p>
          <ul className="leading-8">
            <li><Link href="/#portfolio">Portfolio</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#process">Process</Link></li>
            <li><Link href="/#journal">Journal</Link></li>
          </ul>
        </div>
        <div className="min-w-0 flex-[1_1_160px]">
          <p className={heading}>Follow</p>
          <ul className="leading-8">
            <li><Link href="/#top">Instagram</Link></li>
            <li><Link href="/#top">Pinterest</Link></li>
            <li><Link href="/#top">YouTube</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-dark-line pt-6 text-[13px] text-[#a89c85]">
        &copy; {new Date().getFullYear()} {siteConfig.name} Events. Photo credits: [PHOTOGRAPHER].
      </div>
    </footer>
  );
}
