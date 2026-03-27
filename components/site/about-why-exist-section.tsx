import { aboutStats } from "@/components/site/data";
import { Card } from "@/components/ui/card";

export function AboutWhyExistSection() {
  return (
    <section className="section-dark border-b border-[#171b41]">
      <div className="mx-auto grid w-full max-w-[1120px] gap-10 px-6 py-14 lg:grid-cols-[1fr_0.92fr] lg:items-start">
        <div>
          <h2 className="text-[3.2rem] font-semibold leading-[1.12] text-[#f1f2fc]">
            Why We Exist
          </h2>
          <div className="mt-6 space-y-5 text-[1.15rem] leading-[1.5] text-[#8e92b3]">
            <p>
              We started Void Studio because we were tired of seeing SMEs get sold
              overpriced, overcomplicated technology solutions that never quite fit.
            </p>
            <p>
              Enterprise software vendors ignore you. Freelancers lack the breadth
              of expertise. Traditional agencies charge enterprise rates for
              cookie-cutter work.
            </p>
            <p>
              We saw a gap: ambitious SMEs who need enterprise-grade AI and custom
              software, but with SME-friendly pricing, timelines, and support. That
              is exactly what we built.
            </p>
            <p className="font-semibold text-[#f0f2fd]">
              We are not here to sell you software. We are here to solve problems
              and drive measurable business outcomes.
            </p>
          </div>
        </div>

        <Card className="rounded-[16px] border-[#2a2f58] bg-[#1b1f3d] p-9">
          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            {aboutStats.map((item) => (
              <div key={item.label}>
                <p className="text-[2.45rem] font-bold tracking-wide text-[#4dd7c9]">
                  {item.value}
                </p>
                <p className="mt-1 text-[1.05rem] text-[#8a8fab]">{item.label}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
