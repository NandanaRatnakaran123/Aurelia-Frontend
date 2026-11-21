import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import PressStrip from "@/components/sections/PressStrip";
import Portfolio from "@/components/sections/Portfolio";
import Films from "@/components/sections/Films";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Founder from "@/components/sections/Founder";
import Testimonials from "@/components/sections/Testimonials";
import Journal from "@/components/sections/Journal";
import Inquire from "@/components/sections/Inquire";
import { buildMetadata, organizationJsonLd } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildMetadata({ path: "/" });
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }} />
      <Hero />
      <Intro />
      <PressStrip />
      <Portfolio />
      <Films />
      <Services />
      <Process />
      <Founder />
      <Testimonials />
      <Journal />
      <Inquire />
    </>
  );
}
