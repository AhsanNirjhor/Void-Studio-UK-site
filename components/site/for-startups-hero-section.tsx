import type { SVGProps } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ForStartupsHeroSection() {
  return (
    <section className="services-grid-bg border-b border-[#161a42]">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 pb-18 pt-14">
        <Badge
          variant="outline"
          className="rounded-full border-[#3a2f78] bg-[#130f30] px-5 py-2 text-[0.74rem] tracking-[0.18em] text-[#7d69d2]"
        >
          <RocketIcon className="mr-2 size-3.5" />
          FOR STARTUPS
        </Badge>

        <h1 className="mt-8 max-w-[760px] text-[4.1rem] font-semibold leading-[1.08] text-[#f2f3fc]">
          From Idea to Market in Weeks, Not Months
        </h1>
        <p className="mt-7 max-w-[930px] text-[1.24rem] leading-[1.5] text-[#8e92b3]">
          Our MVP Builder Program empowers pre-seed to Series A startups to
          launch faster, validate smarter, and build scalable foundations-without
          the overhead of a full in-house team.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button
            variant="hero"
            className="h-14 rounded-xl px-8 text-[1.04rem] font-semibold"
          >
            <SparklesIcon className="size-4" />
            Try MVP Validator (Free)
          </Button>
          <Button
            variant="heroOutline"
            className="h-14 rounded-xl border-[#4e547a] px-8 text-[1.04rem] font-semibold"
          >
            Learn About MVP Builder
          </Button>
        </div>
      </div>
    </section>
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
