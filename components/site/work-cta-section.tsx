import Link from "next/link";

export function WorkCtaSection() {
  return (
    <section className="section-dark border-b border-[#171b41] py-18 sm:py-24">
      <div className="mx-auto w-full max-w-[1120px] px-4 text-center sm:px-6">
        <h2 className="text-[clamp(2.3rem,4.2vw,4.4rem)] font-semibold leading-[1.12] text-[#f2f3fd]">
          Ready to Be Our Next Success Story?
        </h2>
        <p className="mx-auto mt-5 max-w-[900px] text-[1.24rem] leading-[1.48] text-[#8a8fb2]">
          Book a free discovery call and we will show you how we can transform
          your operations.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex h-14 min-w-[220px] items-center justify-center rounded-xl bg-linear-to-r from-[#5a1cf1] to-[#8a4dff] px-8 text-[1.08rem] font-semibold text-white transition-all hover:from-[#6530f4] hover:to-[#9260ff]"
          >
            Get in Touch
          </Link>
          <Link
            href="/services"
            className="inline-flex h-14 min-w-[220px] items-center justify-center rounded-xl border border-[#7e73b8] px-8 text-[1.08rem] font-semibold text-white transition-colors hover:border-[#9b91d0] hover:bg-white/5"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
