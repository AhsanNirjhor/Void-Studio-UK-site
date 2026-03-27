import {
  ContactFaqSection,
  ContactPageHeroSection,
  ContactPageMainSection,
  SiteFooter,
  SiteHeader,
} from "@/components/site";

export default function ContactPage() {
  return (
    <div className="bg-[#040611] text-white">
      <SiteHeader />
      <main>
        <ContactPageHeroSection />
        <ContactPageMainSection />
        <ContactFaqSection />
      </main>
      <SiteFooter />
    </div>
  );
}
