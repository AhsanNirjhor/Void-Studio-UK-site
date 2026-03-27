import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ServicesEnquirySection() {
  return (
    <section className="section-dark border-t border-[#171b41] py-18">
      <div className="mx-auto grid w-full max-w-[1120px] gap-10 px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <h2 className="text-[3.2rem] font-semibold leading-[1.16] text-[#f1f2fb]">
            Not sure which service fits?
          </h2>
          <p className="mt-5 max-w-[520px] text-[1.2rem] leading-[1.45] text-[#7f83a2]">
            Tell us about your business challenge and we&apos;ll recommend the
            right approach.
          </p>
        </div>

        <Card className="rounded-[16px] border-[#2a2f58] bg-[#1b1f3d] p-7">
          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-[1rem] font-medium text-[#e7e8f6]">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Smith"
                className="h-12 w-full rounded-lg border border-[#30345d] bg-[#0d1126] px-4 text-[1.05rem] text-[#daddf5] outline-none placeholder:text-[#6f7395] focus:border-[#6340ea]"
              />
            </div>
            <div>
              <label className="mb-2 block text-[1rem] font-medium text-[#e7e8f6]">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Your Company Ltd"
                className="h-12 w-full rounded-lg border border-[#30345d] bg-[#0d1126] px-4 text-[1.05rem] text-[#daddf5] outline-none placeholder:text-[#6f7395] focus:border-[#6340ea]"
              />
            </div>
            <div>
              <label className="mb-2 block text-[1rem] font-medium text-[#e7e8f6]">
                What challenge are you facing?
              </label>
              <select className="h-12 w-full rounded-lg border border-[#30345d] bg-[#0d1126] px-4 text-[1.05rem] text-[#daddf5] outline-none focus:border-[#6340ea]">
                <option>Select a challenge...</option>
                <option>Manual Operations</option>
                <option>Data & Reporting</option>
                <option>Compliance & Governance</option>
                <option>Custom Software Need</option>
              </select>
            </div>
            <Button
              type="submit"
              variant="hero"
              className="h-12 w-full rounded-lg text-[1.15rem] font-semibold"
            >
              Submit Enquiry
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
