import Link from "next/link";
import { serviceCards } from "@/components/site/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  return (
    <section id="services" className="section-dark">
      <div className="mx-auto w-full max-w-[1120px] px-6 pb-14 pt-24">
        <div className="text-center">
          <h2 className="text-5xl font-semibold leading-[1.1] text-[#f7f8ff] md:text-[3.8rem]">
            What We Build For You
          </h2>
          <div className="mx-auto mt-5 h-1.5 w-11 rounded-full bg-[#40d7c7]" />
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card
                key={card.title}
                className={cn(
                  "relative rounded-[18px] border-[#2c315f] bg-[#171a34] p-8",
                  card.highlighted &&
                    "border-[#6547ef] shadow-[inset_0_1px_0_#4ad8d5]",
                )}
              >
                <Icon className="size-7 text-[#45d4c4]" />
                <h3 className="mt-7 text-[2rem] font-semibold leading-[1.26] text-[#f8f8fd]">
                  {card.title}
                </h3>
                <p className="mt-4 text-[1.1rem] leading-[1.45] text-[#8f8caf]">
                  {card.description}
                </p>
                <Link
                  href="#"
                  className="mt-7 inline-flex items-center gap-3 text-[1.1rem] font-semibold text-[#4ad8ca] transition-colors hover:text-[#6de9dd]"
                >
                  Learn More
                  <span aria-hidden>→</span>
                </Link>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            variant="hero"
            size="lg"
            className="h-16 rounded-xl px-14 text-[1.2rem] font-semibold"
          >
            View All Services & Pricing
            <span aria-hidden>→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
