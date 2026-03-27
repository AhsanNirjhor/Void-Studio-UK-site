import { caseStudies } from "@/components/site/data";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="border-t border-[#1c2051] bg-[#070918] pb-24 pt-6">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <h2 className="text-center text-5xl font-semibold text-[#f8f8ff] md:text-[3.8rem]">
          Real Projects, Real Results
        </h2>
        <p className="mx-auto mt-4 max-w-[780px] text-center text-[1.2rem] leading-[1.42] text-[#8383a3]">
          See how we have helped SMEs automate operations and drive measurable
          outcomes
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <Card
              key={study.title}
              className={cn(
                "rounded-[18px] border-[#2c315f] bg-[#171a34] px-8 py-8",
                study.highlighted && "border-[#6338f0]",
              )}
            >
              <div className="inline-flex items-center gap-3 text-[0.95rem] font-semibold tracking-wide text-[#44d4c3]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#44d4c3]" />
                {study.sector}
              </div>
              <h3
                className={cn(
                  "mt-5 text-[2.1rem] font-semibold leading-[1.2] text-[#f6f7ff]",
                  study.highlighted && "text-[#6f37ff]",
                )}
              >
                {study.title}
              </h3>
              <div className="mt-7 grid grid-cols-1 gap-2 text-[0.98rem] font-medium leading-[1.35] text-[#d2d3e4] md:grid-cols-3 md:gap-4">
                {study.metrics.map((metric) => (
                  <p key={metric}>{metric}</p>
                ))}
              </div>
              <div className="muted-line mt-7 border-t" />
              <div className="mt-6 flex flex-wrap gap-3">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[#242a4e] bg-[#0f1328] px-3 py-1.5 text-[0.85rem] font-semibold text-[#6e7296]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
