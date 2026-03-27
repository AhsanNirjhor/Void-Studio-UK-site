import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const engagementCards = [
  {
    icon: "🎯",
    title: "Project-Based",
    description:
      "Fixed-scope, fixed-price engagements. Perfect for one-time builds, migrations, or defined automation projects.",
    price: "£500 - £25k",
  },
  {
    icon: "🔁",
    title: "Retainer / SaaS",
    description:
      "Ongoing monthly support, maintenance, and iterative development. Scale up or down as your needs change.",
    price: "£100 - £400/mo",
  },
  {
    icon: "⚡",
    title: "Hybrid",
    description:
      "Initial project build followed by a retainer for support and new features. The best of both worlds.",
    price: "Custom pricing",
    highlighted: true,
  },
];

export function ServicesEngagementSection() {
  return (
    <section className="section-dark border-t border-[#171b41] py-14">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <h2 className="text-center text-[3.5rem] font-semibold leading-[1.14] text-[#f1f2fc]">
          How Clients Typically Engage
        </h2>
        <p className="mt-4 text-center text-[1.2rem] text-[#7f83a2]">
          Choose the model that fits your business stage and budget
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {engagementCards.map((card) => (
            <Card
              key={card.title}
              className={cn(
                "rounded-[14px] border-[#2a2f59] bg-[#1b1f3d] p-8",
                card.highlighted && "border-[#5531e2]",
              )}
            >
              <p className="text-[2.2rem]">{card.icon}</p>
              <h3 className="mt-4 text-[2.1rem] font-semibold text-[#f1f2fb]">
                {card.title}
              </h3>
              <p className="mt-4 text-[1.15rem] leading-[1.5] text-[#8387a8]">
                {card.description}
              </p>
              <p className="mt-6 text-[1.7rem] font-bold tracking-wide text-[#4dd7c9]">
                {card.price}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
