import { Badge } from "@/components/ui/badge";

export function TeamPageHeroSection() {
  return (
    <section className="services-grid-bg border-b border-[#161a42]">
      <div className="mx-auto w-full max-w-[1120px] px-6 pb-18 pt-14">
        <Badge
          variant="outline"
          className="rounded-full border-[#3a2f78] bg-[#130f30] px-5 py-2 text-[0.74rem] tracking-[0.18em] text-[#7d69d2]"
        >
          OUR TEAM
        </Badge>

        <h1 className="mt-8 max-w-[720px] text-[4.1rem] font-semibold leading-[1.08] text-[#f2f3fc]">
          The Minds Behind Void Studio
        </h1>
        <p className="mt-7 max-w-[860px] text-[1.24rem] leading-[1.5] text-[#8e92b3]">
          A lean, high-impact team of engineers, designers, and strategists who
          have built software for startups and SMEs across the UK. No account
          managers. No middlemen. Just people who build.
        </p>
      </div>
    </section>
  );
}
