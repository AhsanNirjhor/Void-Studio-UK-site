import { startupPricingPlans } from "@/components/site/data";
import { CheckIcon } from "@/components/site/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function StartupPricingSection() {
  return (
    <section className="section-dark border-b border-[#171b41] py-18">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <h2 className="text-center text-[3.7rem] font-semibold leading-[1.14] text-[#f1f2fc]">
          MVP Builder Program
        </h2>

        <div className="mt-9 grid gap-5 lg:grid-cols-3 lg:items-start">
          {startupPricingPlans.map((plan) => (
            <Card
              key={plan.title}
              className={[
                "rounded-[16px] border-[#2a2f58] bg-[#1b1f3d] p-7",
                plan.featured
                  ? "border-[#6235f3] bg-[#1a1d3a] shadow-[0_0_0_1px_rgba(98,53,243,0.2)]"
                  : "",
              ].join(" ")}
            >
              {plan.popular ? (
                <span className="inline-flex rounded-full bg-[#6731ef] px-4 py-1.5 text-[0.8rem] font-semibold text-white">
                  MOST POPULAR
                </span>
              ) : null}
              <h3 className="mt-5 text-[2.05rem] font-semibold leading-[1.2] text-[#eef0fb]">
                {plan.title}
              </h3>
              <p className="mt-2 text-[3.25rem] font-bold tracking-[0.02em] text-[#55dac9]">
                {plan.price}
              </p>
              <p className="text-[1rem] text-[#767c9f]">{plan.timeline}</p>
              <p className="mt-4 text-[1.02rem] text-[#7f84a6]">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 size-5 shrink-0 text-[#4dd7c9]" />
                    <span className="text-[1rem] leading-[1.4] text-[#e6e9f8]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? "hero" : "heroOutline"}
                className={[
                  "mt-7 h-14 w-full rounded-xl text-[1.05rem] font-semibold",
                  plan.featured
                    ? ""
                    : "border-[#4f567f] text-[#eef1ff] hover:border-[#858db6]",
                ].join(" ")}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-center text-[1.1rem] text-[#7b819f]">
          <span className="font-semibold text-[#d6daed]">Equity Partnerships:</span>{" "}
          We consider equity for exceptional teams with strong traction. Reach out
          to discuss.
        </p>
      </div>
    </section>
  );
}
