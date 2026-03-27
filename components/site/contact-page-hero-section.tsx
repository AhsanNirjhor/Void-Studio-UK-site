import type { SVGProps } from "react";
import { Badge } from "@/components/ui/badge";

export function ContactPageHeroSection() {
  return (
    <section className="services-grid-bg border-b border-[#161a42]">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 pb-18 pt-14">
        <Badge
          variant="outline"
          className="rounded-full border-[#3a2f78] bg-[#130f30] px-5 py-2 text-[0.74rem] tracking-[0.18em] text-[#7d69d2]"
        >
          <EnvelopeIcon className="mr-2 size-3.5" />
          GET IN TOUCH
        </Badge>

        <h1 className="mt-8 max-w-[760px] text-[4.1rem] font-semibold leading-[1.08] text-[#f2f3fc]">
          Let&apos;s Build Something Great Together
        </h1>
        <p className="mt-7 max-w-[900px] text-[1.24rem] leading-[1.5] text-[#8e92b3]">
          Book a free 30-minute discovery call or send us a message. We typically
          respond within 24 hours.
        </p>
      </div>
    </section>
  );
}

function EnvelopeIcon(props: SVGProps<SVGSVGElement>) {
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
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
      <path d="m4.7 7.2 7.3 6 7.3-6" />
    </svg>
  );
}
