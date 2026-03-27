import type { ReactElement, SVGProps } from "react";
import { startupPillars } from "@/components/site/data";
import { BoltIcon, CodeIcon } from "@/components/site/icons";
import { Card } from "@/components/ui/card";

type PillarIcon = (typeof startupPillars)[number]["icon"];

const iconMap: Record<PillarIcon, (props: SVGProps<SVGSVGElement>) => ReactElement> =
  {
    bolt: BoltIcon,
    trend: TrendIcon,
    shield: ShieldIcon,
    users: UsersIcon,
    code: CodeIcon,
    target: TargetIcon,
  };

export function StartupPillarsSection() {
  return (
    <section className="section-dark border-b border-[#171b41] py-18">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <h2 className="text-center text-[3.75rem] font-semibold leading-[1.15] text-[#f1f2fc]">
          Empowering Startups to Move Fast & Build Right
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {startupPillars.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Card
                key={item.title}
                className="rounded-[14px] border-[#2a2f58] bg-[#1b1f3d] p-7"
              >
                <Icon className="size-8 text-[#672ff0]" />
                <h3 className="mt-5 text-[2.05rem] font-semibold leading-[1.2] text-[#eef0fb]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[1.02rem] leading-[1.5] text-[#7f84a6]">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
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

function TargetIcon(props: SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.2" />
      <circle cx="12" cy="12" r="1.8" />
    </svg>
  );
}
