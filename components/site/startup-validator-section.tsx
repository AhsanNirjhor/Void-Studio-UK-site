import type { ReactElement, SVGProps } from "react";
import {
  startupDeliverables,
  startupValidatorStats,
} from "@/components/site/data";
import { BoltIcon, CheckIcon } from "@/components/site/icons";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type ValidatorStatIcon = (typeof startupValidatorStats)[number]["icon"];
type DeliverableIcon = (typeof startupDeliverables)[number]["icon"];

const statIconMap: Record<
  ValidatorStatIcon,
  (props: SVGProps<SVGSVGElement>) => ReactElement
> = {
  target: TargetIcon,
  bolt: BoltIcon,
  check: CheckIcon,
};

const deliverableIconMap: Record<
  DeliverableIcon,
  (props: SVGProps<SVGSVGElement>) => ReactElement
> = {
  trend: TrendIcon,
  sparkles: SparklesIcon,
  rocket: RocketIcon,
  users: UsersIcon,
};

export function StartupValidatorSection() {
  return (
    <section className="border-b border-[#171b41] bg-[#161131] py-18">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <div className="text-center">
          <Badge className="rounded-full bg-linear-to-r from-[#5a1cf1] to-[#8a4dff] px-8 py-2.5 text-[0.75rem] tracking-[0.16em] text-white">
            <SparklesIcon className="size-3.5" />
            FREE AI ASSESSMENT TOOL
          </Badge>
          <h2 className="mx-auto mt-7 max-w-[980px] text-[4.15rem] font-semibold leading-[1.12] text-[#f2f3fc]">
            Is Your Startup Idea Actually Ready to Build?
          </h2>
          <p className="mx-auto mt-7 max-w-[980px] text-[1.2rem] leading-[1.45] text-[#9a9fbd]">
            Stop guessing. Our AI-powered{" "}
            <span className="font-semibold text-[#4dd7c9]">MVP Validator</span>{" "}
            analyzes your startup across 6 critical dimensions and tells you
            exactly where you stand-in under 10 minutes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {startupValidatorStats.map((item) => {
            const Icon = statIconMap[item.icon];
            return (
              <Card
                key={item.title}
                className="rounded-[16px] border-[#2d2778] bg-[#1c1d3b] px-8 py-10 text-center"
              >
                <div className="mx-auto flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#6a37f1] text-white shadow-[0_0_24px_rgba(116,70,255,0.35)]">
                  <Icon className="size-7" />
                </div>
                <p className="mt-6 text-[3rem] font-bold leading-none text-[#56dac9]">
                  {item.value}
                </p>
                <p className="mt-4 text-[1.85rem] font-semibold leading-[1.2] text-[#f0f2fd]">
                  {item.title}
                </p>
                <p className="mt-2 text-[1rem] text-[#8085a8]">{item.description}</p>
              </Card>
            );
          })}
        </div>

        <Card className="mt-12 rounded-[24px] border-[#2a2f58] bg-[#1b1f3d] px-6 py-12 sm:px-10">
          <h3 className="text-center text-[3rem] font-semibold leading-[1.14] text-[#f1f2fc]">
            What You&apos;ll Receive
          </h3>

          <div className="mt-9 grid gap-8 md:grid-cols-2">
            {startupDeliverables.map((item) => {
              const Icon = deliverableIconMap[item.icon];
              return (
                <div key={item.title} className="flex gap-5">
                  <div className="mt-1 flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-[#2b2458] text-[#7330ff]">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-[2rem] font-semibold leading-[1.22] text-[#f0f2fc]">
                        {item.title}
                      </h4>
                      <span className="rounded-md bg-[#2f5f67] px-3 py-1 text-[0.85rem] font-semibold text-[#65d8c7]">
                        {item.badge}
                      </span>
                    </div>
                    <p className="mt-2 text-[1.02rem] leading-[1.46] text-[#9a9ebb]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="mt-12 rounded-[20px] border-[#2a4653] bg-linear-to-r from-[#1b1f3d] to-[#143340] px-5 py-9 sm:px-9">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[760px]">
              <div className="flex items-center gap-2 text-[#4dd7c9]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} className="size-7 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-[2.1rem] leading-[1.4] text-[#f2f3fc]">
                &ldquo;The MVP Validator gave me more clarity than 10 advisor
                meetings combined. The AI pinpointed exactly where I was
                hand-waving and what to focus on next. Two weeks later, we had
                our first paying customer.&rdquo;
              </p>
              <p className="mt-6 text-[1.95rem] font-semibold text-[#56dac9]">
                - Sarah Chen, Founder @ LogisticsAI
              </p>
              <p className="mt-1 text-[1rem] text-[#77819f]">
                Raised £500k seed round · Now £50k MRR
              </p>
            </div>

            <div className="flex justify-center">
              <div className="flex h-[128px] w-[128px] items-center justify-center rounded-full bg-linear-to-br from-[#6758ff] to-[#66d7ce] text-white">
                <div className="text-center">
                  <p className="text-[3rem] font-bold leading-none">67</p>
                  <p className="mt-1 text-[1rem] font-medium text-[#d7e9ff]">
                    / 100
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
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

function RocketIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M14.9 9.1c1.7-1.7 2.4-4.1 2.1-6.4-2.3-.3-4.7.4-6.4 2.1L6.8 8.6a4.5 4.5 0 0 0-1.2 2.2L4.8 14l3.3-.8a4.5 4.5 0 0 0 2.2-1.2l4.6-2.9Z" />
      <path d="M14 10 10 6M7.1 13.7l-2.6 2.6M9.5 16.1 12 18.6" />
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

function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="none" {...props}>
      <path d="m12 2.6 2.7 5.5 6 1-4.4 4.3 1 6-5.3-2.8-5.3 2.8 1-6L3.3 9l6-1L12 2.6Z" />
    </svg>
  );
}
