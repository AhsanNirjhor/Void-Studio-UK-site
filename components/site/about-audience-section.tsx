import { audienceCards } from "@/components/site/data";
import { Card } from "@/components/ui/card";

export function AboutAudienceSection() {
  return (
    <section className="section-dark border-b border-[#171b41] py-14">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <h2 className="text-center text-[3.2rem] font-semibold leading-[1.12] text-[#f1f2fc]">
          Who We Work With
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {audienceCards.map((card) => (
            <Card
              key={card.title}
              className="rounded-[14px] border-[#2a2f58] bg-[#1b1f3d] p-7"
            >
              <h3 className="text-[1.95rem] font-semibold leading-[1.2] text-[#eef0fb]">
                {card.title}
              </h3>
              <p className="mt-4 text-[1.05rem] leading-[1.48] text-[#8387a8]">
                {card.description}
              </p>
              <div className="mt-5 border-t border-[#2a2f58] pt-4 text-[1rem] text-[#8f93b1]">
                <span className="font-semibold text-[#d9dcef]">Common sectors:</span>{" "}
                {card.sectors}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
