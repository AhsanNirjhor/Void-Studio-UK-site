import { Button } from "@/components/ui/button";

export function ContactCtaSection() {
  return (
    <section id="contact" className="border-t border-[#2c2072] bg-[#321a77]">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 py-20 text-center">
        <h2 className="text-[3.8rem] font-semibold leading-[1.16] text-[#f4f6ff]">
          Ready to Eliminate Operational Waste?
        </h2>
        <p className="mx-auto mt-6 max-w-[760px] text-[1.22rem] leading-[1.45] text-[#d1cce7]">
          Book a free 30-minute discovery call and we&apos;ll show you exactly
          where AI and automation can cut costs in your business.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button
            className="h-13 rounded-lg bg-[#f2f2f5] px-8 text-[1rem] font-semibold text-[#1f1f2d] hover:bg-white"
            variant="ghost"
          >
            Book Discovery Call
          </Button>
          <Button
            variant="heroOutline"
            className="h-13 rounded-lg border-[#aca6cd] px-8 text-[1rem] font-semibold text-[#f2f3fb] hover:bg-white/10"
          >
            Email Us
          </Button>
        </div>

        <div className="mt-12 space-y-2 text-[1rem] text-[#b0a9d4]">
          <p>hello@voidstudio.co.uk</p>
          <p>Caerphilly Business Park, Wales</p>
        </div>
      </div>
    </section>
  );
}
