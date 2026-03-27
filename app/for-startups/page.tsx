import {
  ForStartupsHeroSection,
  SiteFooter,
  SiteHeader,
  StartupBuildSection,
  StartupFinalCtaSection,
  StartupMvpProgramSection,
  StartupPillarsSection,
  StartupPricingSection,
  StartupSuccessStoriesSection,
  StartupValidatorSection,
} from "@/components/site";

export default function ForStartupsPage() {
  return (
    <div className="bg-[#040611] text-white">
      <SiteHeader />
      <main>
        <ForStartupsHeroSection />
        <StartupValidatorSection />
        <StartupPillarsSection />
        <StartupMvpProgramSection />
        <StartupBuildSection />
        <StartupSuccessStoriesSection />
        <StartupPricingSection />
        <StartupFinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
