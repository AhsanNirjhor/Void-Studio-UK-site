import { Button } from "@/components/ui/button";

export function TeamCtaSection() {
  return (
    <section className="section-dark border-b border-[#171b41] py-14">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 text-center">
        <h2 className="text-[3.5rem] font-semibold leading-[1.12] text-[#f1f2fc]">
          Ready to Work with Us?
        </h2>
        <p className="mx-auto mt-4 max-w-[760px] text-[1.2rem] text-[#8084a4]">
          Book a free discovery call and meet the team who will bring your vision
          to life.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="hero"
            className="h-13 rounded-lg px-9 text-[1.05rem] font-semibold"
          >
            Book Discovery Call
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
