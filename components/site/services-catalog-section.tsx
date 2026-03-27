import { detailedServices } from "@/components/site/data";
import { Button } from "@/components/ui/button";

export function ServicesCatalogSection() {
  return (
    <section className="section-dark pb-14 pt-4">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        {detailedServices.map((service) => (
          <article
            key={service.number}
            className="grid gap-8 border-b border-[#1a1e45] py-12 lg:grid-cols-[1fr_260px]"
          >
            <div>
              <div className="flex items-start gap-5">
                <span className="text-[5.4rem] font-bold leading-none text-[#22166d]">
                  {service.number}
                </span>
                <div>
                  <h2 className="text-[3.05rem] font-semibold leading-[1.16] text-[#f0f1fb]">
                    {service.title}
                  </h2>
                  <p className="mt-6 max-w-[830px] text-[1.18rem] leading-[1.55] text-[#7f83a5]">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-[1rem] text-[#d2d5ea] md:text-[1.08rem]"
                      >
                        <span className="mt-2 inline-block h-2 w-2 rounded-full bg-[#4cd8c8]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#2c315c] bg-[#1b1f3c] px-4 py-1.5 text-[0.9rem] text-[#71769a]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pt-3">
              <p className="text-[1rem] text-[#7d82a2]">Typical Range</p>
              <p className="mt-2 text-[2.1rem] font-bold tracking-wide text-[#4dd7c9]">
                {service.range}
              </p>
              <Button
                variant="hero"
                className="mt-5 h-13 w-full rounded-lg text-[1.05rem] font-semibold"
              >
                Explore This Service
                <span aria-hidden>→</span>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
