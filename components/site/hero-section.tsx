import { BoltIcon } from "@/components/site/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const heroMetrics = [
  { value: "50+", label: "Projects Delivered" },
  { value: "25%", label: "Average Cost Reduction" },
  { value: "£2M+", label: "Value Created" },
];

export function HeroSection() {
  return (
    <section id="home" className="hero-gradient relative overflow-hidden">
      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col items-center px-6 pb-18 pt-28 text-center md:pb-24 md:pt-36">
        <Badge variant="cyan" className="rounded-full px-8 py-2.5 text-xs">
          [ AI-NATIVE AGENCY ]
        </Badge>
        <h1 className="mt-10 max-w-[920px] text-[2.8rem] font-semibold leading-[1.14] text-white md:text-[4rem]">
          We Build the Operational Intelligence Your Business Has Been Missing.
        </h1>
        <p className="mt-8 max-w-[860px] text-[1.15rem] leading-[1.5] text-[#b6a7d9] md:text-[1.35rem]">
          Custom AI automation, intelligent software and data systems that reduce
          operational costs by 25%+ for SMEs across logistics, finance, and
          professional services.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button
            variant="hero"
            size="lg"
            className="h-16 min-w-[290px] rounded-xl px-12 text-[1.2rem] font-semibold"
          >
            <BoltIcon className="size-5" />
            Get Instant Quote in 2 Minutes
          </Button>
          <Button
            variant="heroOutline"
            size="lg"
            className="h-16 min-w-[220px] rounded-xl px-12 text-[1.2rem] font-semibold"
          >
            See Our Work
          </Button>
        </div>
        <div className="mt-16 grid w-full max-w-[880px] grid-cols-1 gap-10 sm:grid-cols-3">
          {heroMetrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-[2.8rem] font-bold leading-none text-[#45d8c8]">
                {metric.value}
              </div>
              <div className="mt-3 text-[1.15rem] font-medium text-[#7f75a9]">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
