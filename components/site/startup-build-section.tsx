import { startupBuildCards } from "@/components/site/data";
import { Card } from "@/components/ui/card";

export function StartupBuildSection() {
  return (
    <section className="section-dark border-b border-[#171b41] py-18">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <h2 className="text-center text-[3.7rem] font-semibold leading-[1.14] text-[#f1f2fc]">
          What We Build with MVP Builder
        </h2>
        <p className="mx-auto mt-5 max-w-[920px] text-center text-[1.16rem] leading-[1.45] text-[#8f93b2]">
          From B2B SaaS platforms to AI-powered products, we have built MVPs
          across every major startup category. Here is what we excel at:
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {startupBuildCards.map((item) => (
            <Card
              key={item.title}
              className="rounded-[14px] border-[#2a2f58] bg-[#1b1f3d] p-7"
            >
              <h3 className="text-[2.05rem] font-semibold leading-[1.2] text-[#eef0fb]">
                {item.title}
              </h3>
              <p className="mt-4 text-[1.05rem] leading-[1.5] text-[#8489aa]">
                {item.description}
              </p>
              <div className="mt-5 border-t border-[#2b3158] pt-4 text-[0.98rem] leading-[1.4] text-[#7d82a4]">
                <span className="font-semibold text-[#d7daf0]">Examples:</span>{" "}
                {item.examples}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
