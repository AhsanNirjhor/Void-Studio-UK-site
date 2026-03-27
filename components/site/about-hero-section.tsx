import { Badge } from "@/components/ui/badge";

export function AboutHeroSection() {
  return (
    <section className="services-grid-bg border-b border-[#161a42]">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 pb-20 pt-14">
        <Badge
          variant="outline"
          className="rounded-full border-[#3a2f78] bg-[#130f30] px-5 py-2 text-[0.74rem] tracking-[0.18em] text-[#7d69d2]"
        >
          ABOUT VOID STUDIO
        </Badge>

        <h1 className="mt-8 max-w-[900px] text-[4.05rem] font-semibold leading-[1.1] text-[#f2f3fc]">
          AI-Powered Solutions for SMEs Who Want to Punch Above Their Weight
        </h1>
        <p className="mt-7 max-w-[850px] text-[1.24rem] leading-[1.5] text-[#8e92b3]">
          We are a UK-based technology studio specializing in AI automation and
          custom software for ambitious SMEs. No enterprise bloat. No generic
          templates. Just tailored solutions that actually move the needle.
        </p>
      </div>
    </section>
  );
}
