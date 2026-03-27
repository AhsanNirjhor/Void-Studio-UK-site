import { Button } from "@/components/ui/button";

export function AboutCtaSection() {
  return (
    <section className="section-dark border-b border-[#171b41] py-14">
      <div className="mx-auto w-full max-w-[1120px] px-6 text-center">
        <h2 className="text-[3.5rem] font-semibold leading-[1.12] text-[#f1f2fc]">
          Ready to Work Together?
        </h2>
        <p className="mt-4 text-[1.2rem] text-[#8084a4]">
          Book a free discovery call and let us show you what is possible.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="hero"
            className="h-13 rounded-lg px-9 text-[1.05rem] font-semibold"
          >
            Get in Touch
          </Button>
          <Button
            variant="heroOutline"
            className="h-13 rounded-lg border-[#a3a7c6] px-9 text-[1.05rem] font-semibold text-[#edf0ff]"
          >
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
