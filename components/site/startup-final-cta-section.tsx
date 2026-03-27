import { Button } from "@/components/ui/button";

export function StartupFinalCtaSection() {
  return (
    <section className="section-dark border-b border-[#171b41] py-28">
      <div className="mx-auto w-full max-w-[1120px] px-6 text-center">
        <h2 className="text-[4rem] font-semibold leading-[1.14] text-[#f1f2fc]">
          Ready to Build Your Startup?
        </h2>
        <p className="mx-auto mt-5 max-w-[760px] text-[1.2rem] leading-[1.45] text-[#8b90b0]">
          Book a free strategy call and we will help you scope, budget, and plan
          your MVP.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="hero"
            className="h-14 rounded-xl px-11 text-[1.05rem] font-semibold"
          >
            Book Strategy Call
          </Button>
          <Button
            variant="heroOutline"
            className="h-14 rounded-xl border-[#a3a7c6] px-11 text-[1.05rem] font-semibold text-[#edf0ff]"
          >
            View Startup Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}
