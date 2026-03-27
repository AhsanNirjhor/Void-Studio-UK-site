import { teamPageStats } from "@/components/site/data";
import { Card } from "@/components/ui/card";

export function TeamImpactSection() {
  return (
    <section className="section-dark border-b border-[#171b41]">
      <div className="mx-auto grid w-full max-w-[1120px] gap-10 px-6 py-14 lg:grid-cols-[1fr_0.92fr] lg:items-start">
        <div>
          <h2 className="text-[3.2rem] font-semibold leading-[1.12] text-[#f1f2fc]">
            Small Team, Big Impact
          </h2>
          <div className="mt-6 space-y-5 text-[1.15rem] leading-[1.5] text-[#8e92b3]">
            <p>
              We are deliberately small. No bloated teams, no layers of
              management, no unnecessary overhead. Every person on our team is a
              maker—someone who designs, builds, or ships.
            </p>
            <p>
              This structure allows us to move fast, stay agile, and keep costs
              down for our clients. You work directly with the people building your
              product, not account managers reading from scripts.
            </p>
          </div>
        </div>

        <Card className="rounded-[16px] border-[#2a2f58] bg-[#1b1f3d] p-9">
          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            {teamPageStats.map((item) => (
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
