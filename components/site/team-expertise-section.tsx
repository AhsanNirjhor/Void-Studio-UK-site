import type { ReactElement, SVGProps } from "react";
import { teamExpertiseCards } from "@/components/site/data";
import { Card } from "@/components/ui/card";

type ExpertiseIcon = (typeof teamExpertiseCards)[number]["icon"];

const iconMap: Record<ExpertiseIcon, (props: SVGProps<SVGSVGElement>) => ReactElement> = {
  code: CodeIcon,
  brain: BrainIcon,
  shield: ShieldIcon,
  palette: PaletteIcon,
  trend: TrendIcon,
  users: UsersIcon,
};

export function TeamExpertiseSection() {
  return (
    <section className="section-dark border-b border-[#171b41] py-14">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <h2 className="text-center text-[3.2rem] font-semibold leading-[1.12] text-[#f1f2fc]">
          Our Collective Expertise
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {teamExpertiseCards.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Card
                key={item.title}
                className="rounded-[14px] border-[#2a2f58] bg-[#1b1f3d] p-7"
              >
                <Icon className="size-7 text-[#672ff0]" />
                <h3 className="mt-6 text-[1.95rem] font-semibold leading-[1.2] text-[#eef0fb]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[1.05rem] leading-[1.48] text-[#8387a8]">
                  {item.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <span className="mt-2 inline-block h-2 w-2 rounded-full bg-[#4dd7c9]" />
                      <span className="text-[1rem] text-[#d4d7ec]">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m9 18-6-6 6-6M15 6l6 6-6 6" />
    </svg>
  );
}

function BrainIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M8.5 4.5a3 3 0 0 0-3 3v.3a3.4 3.4 0 0 0-1.8 5.7A3.4 3.4 0 0 0 6.4 19h1.1M15.5 4.5a3 3 0 0 1 3 3v.3a3.4 3.4 0 0 1 1.8 5.7 3.4 3.4 0 0 1-2.7 5.5h-1.1" />
      <path d="M8.5 4.5v15M15.5 4.5v15M8.5 10.2h7M8.5 14h7" />
    </svg>
  );
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M12 3.7 5.4 6.2v5.7c0 4.2 2.7 7.7 6.6 8.9 3.9-1.2 6.6-4.7 6.6-8.9V6.2L12 3.7Z" />
    </svg>
  );
}

function PaletteIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M12 3.6a8.4 8.4 0 0 0 0 16.8h1.5a2.2 2.2 0 0 0 0-4.4h-1.1a2.2 2.2 0 0 1 0-4.4h2.8A5.2 5.2 0 0 0 20.4 6 8.4 8.4 0 0 0 12 3.6Z" />
      <path d="M7.6 8.9h.01M11 7.3h.01M14.6 8.9h.01" />
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
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M17 7h4v4" />
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
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3.5 18c0-2.8 2.4-5 5.5-5s5.5 2.2 5.5 5" />
      <circle cx="17.7" cy="9.2" r="2.3" />
      <path d="M15.5 18c.3-2 1.9-3.4 4-3.4.4 0 .7.1 1 .1" />
    </svg>
  );
}
