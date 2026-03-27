"use client";

import type { SVGProps } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/components/site/data";
import { SunIcon } from "@/components/site/icons";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#2b1d6f] bg-linear-to-b from-[#0a0d24]/95 to-[#070a1f]/95 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1160px] items-center justify-between gap-3 px-4 sm:h-20 sm:gap-5 sm:px-6">
        <Link
          href="/#home"
          className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-md pr-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/Logo_1.png"
            alt="Void Studio logo"
            width={32}
            height={32}
            className="h-7 w-7 object-contain sm:h-8 sm:w-8"
            priority
          />
          <span className="text-[1.38rem] font-extrabold leading-none tracking-[-0.02em] sm:text-[1.75rem] md:text-[1.9rem]">
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
        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <Button
            variant="default"
            size="icon"
            className="hidden h-10 w-10 rounded-xl border border-[#5030bb] p-0 shadow-none sm:inline-flex"
          >
            <SunIcon className="size-4 text-white" />
          </Button>
          <Link
            href="/#contact"
            className="hidden h-10 items-center rounded-xl border border-[#3d3276] px-4 sm:px-7 text-[0.92rem] font-semibold text-white transition-colors hover:border-[#6f57d9] hover:bg-[#110e2a] sm:inline-flex"
          >
            Contact
          </Link>
          <Button
            variant="ghost"
            className="hidden h-10 rounded-xl px-5 text-[0.92rem] font-semibold text-white xl:inline-flex"
          >
            Get Instant Quote
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-xl border-[#3d3276] p-0 text-white xl:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="border-t border-[#2b1d6f] bg-[#0b0f2a]/98 px-4 py-4 xl:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.label}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-[0.95rem] font-semibold text-[#b8b1df] transition-colors hover:bg-[#151a3a] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex gap-2">
            <Link
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex h-10 flex-1 items-center justify-center rounded-lg border border-[#3d3276] text-[0.92rem] font-semibold text-white"
            >
              Contact
            </Link>
            <Link
              href="/#home"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex h-10 flex-1 items-center justify-center rounded-lg bg-linear-to-r from-[#5a1cf1] to-[#8a4dff] text-[0.92rem] font-semibold text-white"
            >
              Get Instant Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function CloseIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="m18 6-12 12M6 6l12 12" />
    </svg>
  );
}
