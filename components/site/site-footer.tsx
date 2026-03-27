import Link from "next/link";
import { footerColumns } from "@/components/site/data";

const socials = ["LinkedIn", "Twitter", "GitHub"];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#171a3e] bg-[#070a1f]">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr_1fr_1fr]">
          <div>
            <h3 className="font-display text-[2.3rem] font-extrabold tracking-[-0.02em] text-[#f2f3ff]">
              Void Studio
            </h3>
            <p className="mt-4 max-w-[240px] text-[1rem] leading-[1.4] text-[#8a8ead]">
              Operational Intelligence. Built for Business.
            </p>
            <p className="mt-4 text-[0.95rem] leading-[1.35] text-[#6f7394]">
              Company No. 10730211
              <br />
              Registered in England & Wales
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-[1.1rem] font-semibold text-[#e6e8f7]">
                {column.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[1rem] text-[#7f83a5] transition-colors hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[#1d2248] pt-6">
          <div className="flex flex-col items-start justify-between gap-4 text-[0.95rem] text-[#6e7294] md:flex-row md:items-center">
            <p>© 2026 Void Studio Limited. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {socials.map((social) => (
                <Link
                  href="#"
                  key={social}
                  className="transition-colors hover:text-[#d4d9ff]"
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
