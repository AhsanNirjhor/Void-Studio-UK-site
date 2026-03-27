import {
  SiteFooter,
  SiteHeader,
  WorkCtaSection,
  WorkPageHeroSection,
  WorkProjectsSection,
} from "@/components/site";

export default function WorkPage() {
  return (
    <div className="bg-[#040611] text-white">
      <SiteHeader />
      <main>
        <WorkPageHeroSection />
        <WorkProjectsSection />
        <WorkCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
