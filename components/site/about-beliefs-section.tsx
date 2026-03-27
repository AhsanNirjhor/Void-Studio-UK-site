import type { ReactElement, SVGProps } from "react";
import { beliefCards } from "@/components/site/data";
import { Card } from "@/components/ui/card";

type IconName = (typeof beliefCards)[number]["icon"];

const iconMap: Record<
  IconName,
  (props: SVGProps<SVGSVGElement>) => ReactElement
> = {
  target: TargetIcon,
  bolt: BoltIcon,
  users: UsersIcon,
  brain: BrainIcon,
  code: CodeIcon,
  badge: BadgeIcon,
};

export function AboutBeliefsSection() {
  return (
    <section className="section-dark border-b border-[#171b41] py-14">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <h2 className="text-center text-[3.2rem] font-semibold leading-[1.12] text-[#f1f2fc]">
          What We Believe
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {beliefCards.map((item) => {
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
              </Card>
            );
          })}
        </div>
      </div>
    </section>
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

function BoltIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="m13.5 2.7-8.2 10.2h5.5l-1.1 8.4 8-10.2h-5.3z" />
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

function BadgeIcon(props: SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="9" r="4.2" />
      <path d="m9.2 13.3-1 7 3.8-2 3.8 2-1-7" />
    </svg>
  );
}
