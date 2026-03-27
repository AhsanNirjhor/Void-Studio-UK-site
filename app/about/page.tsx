import {
  AboutAudienceSection,
  AboutBeliefsSection,
  AboutCtaSection,
  AboutHeroSection,
  AboutProcessSection,
  AboutWhyExistSection,
  SiteFooter,
  SiteHeader,
} from "@/components/site";

export default function AboutPage() {
  return (
    <div className="bg-[#040611] text-white">
      <SiteHeader />
      <main>
        <AboutHeroSection />
        <AboutWhyExistSection />
        <AboutBeliefsSection />
        <AboutAudienceSection />
        <AboutProcessSection />
        <AboutCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
