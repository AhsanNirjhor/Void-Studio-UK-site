import type { ReactElement, SVGProps } from "react";
import { startupProgramHighlights } from "@/components/site/data";
import { CheckIcon } from "@/components/site/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type ProgramIcon = (typeof startupProgramHighlights)[number]["icon"];

const iconMap: Record<ProgramIcon, (props: SVGProps<SVGSVGElement>) => ReactElement> =
  {
    clock: ClockIcon,
    check: CheckIcon,
    users: UsersIcon,
  };

export function StartupMvpProgramSection() {
  return (
    <section className="section-dark border-b border-[#171b41] py-18">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <Card className="rounded-[24px] border-[#2f3075] bg-linear-to-r from-[#130d35] to-[#0f2633] px-6 py-14 text-center sm:px-10">
          <Badge className="rounded-full bg-linear-to-r from-[#5a1cf1] to-[#8a4dff] px-7 py-2 text-[0.74rem] tracking-[0.18em] text-white">
            <SparklesIcon className="size-3.5" />
            MVP BUILDER PROGRAM
          </Badge>

          <h2 className="mx-auto mt-6 max-w-[980px] text-[4.2rem] font-semibold leading-[1.12] text-[#f2f3fc]">
            Your Idea, Our Execution, Market-Ready in 4-8 Weeks
          </h2>
          <p className="mx-auto mt-6 max-w-[980px] text-[1.18rem] leading-[1.5] text-[#9b9fbe]">
            The MVP Builder Program is designed for founders who need to validate
            fast. We take your vision and turn it into a working product that real
            customers can use-without the 6-month timelines and enterprise
            overhead.
          </p>

          <div className="mx-auto mt-9 grid max-w-[900px] gap-6 md:grid-cols-3">
            {startupProgramHighlights.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={item.title} className="text-center">
                  <div className="mx-auto flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#2a215f] text-[#6e3bff]">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="mt-4 text-[2.1rem] font-semibold leading-[1.2] text-[#eef0fb]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[1rem] text-[#7f84a6]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <Button
            variant="hero"
            className="mt-9 h-14 w-full rounded-xl px-8 text-[1rem] font-semibold sm:w-auto sm:px-11 sm:text-[1.12rem]"
          >
            Start Your MVP Builder Journey
          </Button>
        </Card>
      </div>
    </section>
  );
}

function SparklesIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" />
      <path d="M5 15.5 6 18l2.5 1-2.5 1L5 22l-1-2.5-2.5-1 2.5-1L5 15.5Z" />
      <path d="M19 13.5 20 16l2.5 1-2.5 1L19 20.5 18 18l-2.5-1 2.5-1 1-2.5Z" />
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
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5.2l3.2 2" />
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
