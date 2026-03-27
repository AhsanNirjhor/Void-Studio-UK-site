import type { ReactElement, SVGProps } from "react";
import { workStats } from "@/components/site/data";
import { Badge } from "@/components/ui/badge";

type StatIcon = (typeof workStats)[number]["icon"];

const iconMap: Record<StatIcon, (props: SVGProps<SVGSVGElement>) => ReactElement> = {
  briefcase: BriefcaseIcon,
  users: UsersIcon,
  trend: TrendIcon,
  clock: ClockIcon,
};

export function WorkPageHeroSection() {
  return (
    <>
      <section className="services-grid-bg border-b border-[#161a42]">
        <div className="mx-auto w-full max-w-[1120px] px-4 pb-20 pt-14 sm:px-6 sm:pb-24">
          <Badge
            variant="outline"
            className="rounded-full border-[#3a2f78] bg-[#130f30] px-5 py-2 text-[0.74rem] tracking-[0.18em] text-[#7d69d2]"
          >
            <BriefcaseIcon className="mr-2 size-3.5" />
            OUR WORK
          </Badge>

          <h1 className="mt-8 max-w-[940px] text-[clamp(2.6rem,6vw,5.25rem)] font-semibold leading-[1.08] text-[#f2f3fc]">
            Case Studies &amp; Client Success Stories
          </h1>
          <p className="mt-7 max-w-[980px] text-[1.24rem] leading-[1.5] text-[#8e92b3]">
            Real projects. Real results. See how we have helped SMEs across the UK
            automate operations, scale efficiently, and gain competitive advantage
            through AI and custom software.
          </p>
        </div>
      </section>

      <section className="section-dark border-b border-[#171b41]">
        <div className="mx-auto w-full max-w-[1120px] px-4 py-12 sm:px-6 sm:py-14">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {workStats.map((stat) => {
              const Icon = iconMap[stat.icon];

              return (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center text-[#5f2cef] md:h-12 md:w-12">
                    <Icon className="size-8" />
                  </div>
                  <p className="mt-4 text-[3.25rem] font-semibold leading-none tracking-tight text-[#4ed9cb]">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[1.35rem] text-[#767b9c]">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function BriefcaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="6" y="7.2" width="12" height="13" rx="2.2" />
      <path d="M9 7.2V5.6A1.6 1.6 0 0 1 10.6 4h2.8A1.6 1.6 0 0 1 15 5.6v1.6" />
      <path d="M6 12h12" />
    </svg>
  );
}

function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.3 11.3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.2-.7a2.4 2.4 0 1 0 0-4.8" />
      <path d="M4 18.7c.6-2.7 2.8-4.2 5.3-4.2s4.7 1.5 5.3 4.2M15.2 14.9c1.6.1 3 .9 3.8 2.4" />
    </svg>
  );
}

function TrendIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m4 16 5.2-5.2 3.6 3.6L20 7.1" />
      <path d="M15.5 7H20v4.5" />
    </svg>
  );
}

function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.5l3 1.8" />
    </svg>
  );
}
