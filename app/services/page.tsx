import {
  ServicesCatalogSection,
  ServicesEngagementSection,
  ServicesEnquirySection,
  ServicesPageHero,
  SiteFooter,
  SiteHeader,
} from "@/components/site";

export default function ServicesPage() {
  return (
    <div className="bg-[#040611] text-white">
      <SiteHeader />
      <main>
        <ServicesPageHero />
        <ServicesCatalogSection />
        <ServicesEngagementSection />
        <ServicesEnquirySection />
      </main>
      <SiteFooter />
    </div>
  );
}
