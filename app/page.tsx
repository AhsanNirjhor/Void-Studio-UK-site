import {
  CaseStudiesSection,
  ContactCtaSection,
  HeroSection,
  IndustriesSection,
  OperationalGapSection,
  ProcessSection,
  PricingSection,
  ServicesSection,
  SiteHeader,
  SiteFooter,
  TeamSection,
  ValuePropositionSection,
} from "@/components/site";

export default function Home() {
  return (
    <div className="bg-[#040611] text-white">
      <SiteHeader />
      <main>
        <HeroSection />
        <OperationalGapSection />
        <ServicesSection />
        <IndustriesSection />
        <ProcessSection />
        <ValuePropositionSection />
        <CaseStudiesSection />
        <TeamSection />
        <PricingSection />
        <ContactCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
