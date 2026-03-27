import {
  SiteFooter,
  SiteHeader,
  TeamCoreSection,
  TeamCtaSection,
  TeamExpertiseSection,
  TeamImpactSection,
  TeamJoinSection,
  TeamPageHeroSection,
} from "@/components/site";

export default function TeamPage() {
  return (
    <div className="bg-[#040611] text-white">
      <SiteHeader />
      <main>
        <TeamPageHeroSection />
        <TeamImpactSection />
        <TeamCoreSection />
        <TeamExpertiseSection />
        <TeamJoinSection />
        <TeamCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
