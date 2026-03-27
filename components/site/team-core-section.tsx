import type { SVGProps } from "react";
import { teamCoreMembers } from "@/components/site/data";
import { Card } from "@/components/ui/card";

export function TeamCoreSection() {
  return (
    <section className="section-dark border-b border-[#171b41] py-14">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <h2 className="text-center text-[3.2rem] font-semibold leading-[1.12] text-[#f1f2fc]">
          Meet the Core Team
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {teamCoreMembers.map((member) => (
            <Card
              key={member.name}
              className="rounded-[14px] border-[#2a2f58] bg-[#1b1f3d] p-6"
            >
              <div className="h-[72px] w-[72px] rounded-full bg-linear-to-r from-[#6f6ce6] to-[#68c2d0]" />
              <h3 className="mt-4 text-[2rem] font-semibold leading-[1.2] text-[#eef0fb]">
                {member.name}
              </h3>
              <p className="mt-1 text-[1.05rem] font-semibold text-[#672ff0]">
                {member.role}
              </p>

              <p className="mt-4 text-[1rem] leading-[1.5] text-[#868aa9]">
                {member.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[#2d3158] bg-[#0f1328] px-3 py-1 text-[0.85rem] text-[#7e82a4]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 border-t border-[#2b2f56] pt-4">
                <div className="flex items-center gap-3">
                  {member.socials.map((social) => (
                    <span key={social} className="text-[#676b8e]">
                      {social === "linkedin" && <LinkedInIcon className="size-4" />}
                      {social === "github" && <GitHubIcon className="size-4" />}
                      {social === "twitter" && <TwitterIcon className="size-4" />}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M7 9v8M7 6.5v.1M11 17v-4.5A2.5 2.5 0 0 1 13.5 10 2.5 2.5 0 0 1 16 12.5V17" />
      <rect x="4" y="4" width="16" height="16" rx="2.2" />
    </svg>
  );
}

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M9 18c-4 1.2-4-2-5.5-2.5M14.5 21v-3.2a2.8 2.8 0 0 0-.8-2.2c2.7-.3 5.5-1.3 5.5-5.8a4.5 4.5 0 0 0-1.2-3.2 4.2 4.2 0 0 0-.1-3.1s-1-.3-3.2 1.2a11 11 0 0 0-5.8 0C6.7 3.2 5.7 3.5 5.7 3.5a4.2 4.2 0 0 0-.1 3.1 4.5 4.5 0 0 0-1.2 3.2c0 4.4 2.8 5.5 5.5 5.8a2.8 2.8 0 0 0-.8 2.2V21" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" {...props}>
      <path d="M22 5.7a8.5 8.5 0 0 1-2.4.7A4.1 4.1 0 0 0 21.4 4a8.4 8.4 0 0 1-2.7 1A4.1 4.1 0 0 0 12 8.5a11.7 11.7 0 0 1-8.5-4.3 4.1 4.1 0 0 0 1.3 5.5A4.1 4.1 0 0 1 3 9.2v.1A4.1 4.1 0 0 0 6.3 13a4.1 4.1 0 0 1-1.8.1 4.1 4.1 0 0 0 3.8 2.8A8.3 8.3 0 0 1 2 17.7 11.7 11.7 0 0 0 8.3 19.5c7.6 0 11.8-6.3 11.8-11.8v-.5A8.4 8.4 0 0 0 22 5.7Z" />
    </svg>
  );
}
