import { operationalCards } from "@/components/site/data";
import { BoltIcon, CheckIcon, WarningIcon } from "@/components/site/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function OperationalGapSection() {
  return (
    <section id="operational-gap" className="section-dark border-t border-[#1f1a4f]">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 pb-16 pt-20">
        <div className="mx-auto max-w-[900px] text-center">
          <Badge
            variant="amber"
            className="rounded-full px-8 py-2.5 text-xs text-[#cf9b44]"
          >
            THE OPERATIONAL GAP
          </Badge>
          <h2 className="mt-10 text-5xl font-semibold leading-[1.2] text-white md:text-[3.7rem]">
            Your business runs on 2026 ambitions.
            <span className="mt-2 block text-[#6f6c95]">But 2015 tools.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-[880px] text-[1.2rem] leading-[1.42] text-[#9b99bc] md:text-[1.35rem]">
            We see it every week: profitable SMEs hemorrhaging time and money
            because their operations run on outdated systems, manual processes, and
            disconnected platforms.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {operationalCards.map((item) => (
            <Card
              key={item.title}
              className="rounded-[18px] border-[#2c315f] bg-[#171a34] p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#272742] text-[#dfaa4f]">
                  <WarningIcon className="size-5" />
                </div>
                <div className="rounded-lg bg-[#302b40] px-4 py-1.5 text-[0.95rem] font-bold text-[#dba04a]">
                  {item.chip}
                </div>
              </div>
              <h3 className="mt-8 text-[2rem] font-semibold leading-[1.2] text-[#f8f8fd]">
                {item.title}
              </h3>
              <p className="mt-4 text-[1.1rem] leading-[1.48] text-[#9a98b8]">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 border-t border-[#1d2248] pt-8 text-center">
          <p className="text-[1.35rem] text-[#8e8da9] md:text-[1.55rem]">
            <span className="font-bold text-[#f4f6ff]">Sound familiar?</span>{" "}
            This isn&apos;t a technology problem—it&apos;s a competitive
            disadvantage.
          </p>
          <p className="mt-6 inline-flex items-center gap-3 text-[1.35rem] font-semibold text-[#44d2bf] md:text-[1.55rem]">
            <CheckIcon className="size-5" />
            Void Studio can help you cut these costs by 40-60% in 8-12 weeks
          </p>
          <div className="mt-8">
            <Button
              variant="hero"
              size="lg"
              className="h-16 w-full rounded-xl px-8 text-[1.05rem] font-semibold sm:w-auto sm:px-14 sm:text-[1.2rem]"
            >
              <BoltIcon className="size-5" />
              Get Your Free Quote in 2 Minutes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
