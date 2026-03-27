import { processSteps } from "@/components/site/data";

export function ProcessSection() {
  return (
    <section id="process" className="section-dark">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 pb-20 pt-24">
        <h2 className="text-center text-5xl font-semibold text-[#f8f8ff] md:text-[3.8rem]">
          How It Works
        </h2>
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step.number}>
              <div className="flex items-center gap-5">
                {index > 0 ? (
                  <span className="h-px w-10 bg-[#261c64]" />
                ) : (
                  <span className="h-px w-10 opacity-0" />
                )}
                <span className="text-[4.8rem] font-bold leading-none text-[#2a197c]">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-6 text-[2.1rem] font-semibold text-[#f4f5ff]">
                {step.title}
              </h3>
              <p className="mt-3 text-[1.1rem] leading-[1.45] text-[#8f8cab]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
