import { pricingTiers } from "@/components/site/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section className="section-dark border-t border-[#191c43]">
      <div className="mx-auto w-full max-w-[1120px] px-6 pb-20 pt-16">
        <h2 className="text-center text-[3.5rem] font-semibold leading-[1.16] text-[#f7f8ff]">
          Transparent, outcome-focused pricing
        </h2>
        <p className="mt-4 text-center text-[1.05rem] text-[#7f82a2] md:text-[1.2rem]">
          From £500 setup to full enterprise deployments
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.title}
              className={cn(
                "rounded-[14px] border-[#2a2e57] bg-[#1b1f3c] p-8",
                tier.highlighted && "border-[#5531e2]",
              )}
            >
              <h3 className="text-[2.35rem] font-semibold text-[#eff0fb]">
                {tier.title}
              </h3>
              <p className="mt-2 text-[2rem] font-bold text-[#4dd7c9]">{tier.price}</p>
              <p className="mt-4 text-[1rem] leading-[1.45] text-[#8185a6]">
                {tier.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            variant="hero"
            className="h-13 rounded-lg px-10 text-[1.05rem] font-semibold"
          >
            Get a Custom Proposal
          </Button>
        </div>
      </div>
      <div className="h-4 w-full bg-[#4d1bb4]" />
    </section>
  );
}
