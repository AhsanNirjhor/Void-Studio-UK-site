import { InstantQuoteWizardSection, SiteHeader } from "@/components/site";

export default function InstantQuotePage() {
  return (
    <div className="bg-[#07091a] text-white">
      <SiteHeader />
      <main>
        <InstantQuoteWizardSection />
      </main>
    </div>
  );
}
