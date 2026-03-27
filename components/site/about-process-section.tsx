import { aboutProcessSteps } from "@/components/site/data";

export function AboutProcessSection() {
  return (
    <section className="section-dark border-b border-[#171b41] py-14">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <h2 className="text-center text-[3.2rem] font-semibold leading-[1.12] text-[#f1f2fc]">
          How We Work
        </h2>

        <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {aboutProcessSteps.map((step) => (
            <div key={step.number}>
              <p className="text-[4.35rem] font-bold leading-none text-[#251971]">
                {step.number}
              </p>
              <h3 className="mt-3 text-[1.95rem] font-semibold text-[#eef0fb]">
                {step.title}
              </h3>
              <p className="mt-3 text-[1.02rem] leading-[1.48] text-[#8387a8]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
