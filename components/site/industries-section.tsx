import { industries } from "@/components/site/data";

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="border-y border-[#1c1f3f] bg-[#0b0e26] py-12"
    >
      <div className="mx-auto max-w-[1400px]">
        <p className="text-center text-[1rem] font-semibold uppercase tracking-wide text-[#5f5f7e]">
          INDUSTRIES WE SERVE
        </p>
        <div className="hidden-scrollbar mt-7 flex items-center gap-4 overflow-x-auto px-4 pb-2">
          {industries.map((industry) => (
            <div
              key={industry}
              className="inline-flex shrink-0 items-center gap-3 rounded-full border border-[#293058] bg-[#1a1f3b] px-4 sm:px-6 py-3 text-[1.05rem] font-semibold text-[#e4e6f6]"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#45d4c4]" />
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
