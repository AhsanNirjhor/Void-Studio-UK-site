import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/components/site/data";
import { SunIcon } from "@/components/site/icons";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2b1d6f] bg-linear-to-b from-[#0a0d24]/95 to-[#070a1f]/95 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-[1160px] items-center justify-between gap-5 px-6">
        <Link
          href="/#home"
          className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-md pr-2"
        >
          <Image
            src="/Logo_1.png"
            alt="Void Studio logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            priority
          />
          <span className="font-display text-[1.75rem] font-extrabold leading-none tracking-[-0.02em] md:text-[1.9rem]">
            <span className="text-white">Void</span>{" "}
            <span className="text-[#d2ccff]">Studio</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="text-[0.92rem] font-semibold text-[#a9a2d8] transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2.5">
          <Button
            variant="default"
            size="icon"
            className="h-10 w-10 rounded-xl border border-[#5030bb] p-0 shadow-none"
          >
            <SunIcon className="size-4 text-white" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-10 rounded-xl border-[#3d3276] px-7 text-[0.92rem] font-semibold shadow-none sm:inline-flex"
          >
            Contact
          </Button>
          <Button
            variant="ghost"
            className="hidden h-10 rounded-xl px-5 text-[0.92rem] font-semibold text-white xl:inline-flex"
          >
            Get Instant Quote
          </Button>
        </div>
      </div>
    </header>
  );
}
