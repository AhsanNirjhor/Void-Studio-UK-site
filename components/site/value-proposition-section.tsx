import { whyUsPoints } from "@/components/site/data";
import { BoltIcon, CheckIcon } from "@/components/site/icons";
import { Card } from "@/components/ui/card";

export function ValuePropositionSection() {
  return (
    <section id="about" className="border-t border-[#131737] bg-[#050716]">
      <div className="mx-auto grid w-full max-w-[1120px] gap-10 px-4 sm:px-6 py-20 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <h2 className="max-w-[650px] text-5xl font-semibold leading-[1.18] text-[#f8f8ff] md:text-[3.8rem]">
            We don&apos;t sell software.
            <br />
            We build operational intelligence.
          </h2>
          <div className="mt-10 space-y-5">
            {whyUsPoints.map((point) => (
              <div key={point} className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#103f4a] text-[#64e0d3]">
                  <CheckIcon className="size-4" />
                </span>
                <p className="text-[1.2rem] font-medium leading-[1.4] text-[#d9d9e8]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Card className="rounded-[18px] border-[#30355f] bg-[#1a1d37] px-8 py-10">
          <BoltIcon className="size-8 text-[#6f37ff]" />
          <p className="mt-8 text-[1.5rem] leading-[1.46] text-[#e5e4f2]">
            &quot;Void Studio built us a custom AI dispatch system that cut our
            manual call handling by 72%. It&apos;s like having 3 extra staff
            members, but it never sleeps.&quot;
          </p>
          <div className="mt-8">
            <p className="text-[1.3rem] font-semibold text-[#f2f2ff]">
              James Mitchell
            </p>
            <p className="text-[1rem] text-[#8583a6]">
              Operations Director, Logistics Firm
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
