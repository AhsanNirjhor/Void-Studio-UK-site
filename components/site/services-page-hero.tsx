import Link from "next/link";
import { BoltIcon } from "@/components/site/icons";
import { Button } from "@/components/ui/button";

export function ServicesPageHero() {
  return (
    <section className="services-grid-bg border-b border-[#151944]">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 pb-20 pt-14">
        <div className="flex items-center gap-3 text-[0.95rem] text-[#6f7397]">
          <Link href="/" className="hover:text-[#acb0d3]">
            Home
          </Link>
          <span>›</span>
          <span className="text-[#cfd3ef]">Services</span>
        </div>

        <h1 className="mt-8 max-w-[820px] text-[4.1rem] font-semibold leading-[1.08] text-[#f2f3fd]">
          Services Built Around Your Operations
        </h1>
        <p className="mt-7 max-w-[720px] text-[1.25rem] leading-[1.5] text-[#9094b4]">
          Every service we offer is designed to remove friction, reduce cost, and
          give you real-time intelligence over your business.
        </p>

        <Button
          variant="hero"
          className="mt-10 h-13 rounded-lg px-8 text-[1.05rem] font-semibold"
        >
          <BoltIcon className="size-5" />
          Get Instant Quote in 2 Minutes
        </Button>
      </div>
    </section>
  );
}
