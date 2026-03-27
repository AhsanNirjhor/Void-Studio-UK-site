import { teamMembers, teamStats } from "@/components/site/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const avatarStyles: Record<"purple" | "teal" | "blue", string> = {
  purple: "bg-linear-to-r from-[#5f29df] to-[#7e52f2]",
  teal: "bg-linear-to-r from-[#61c2b1] to-[#66c6a9]",
  blue: "bg-linear-to-r from-[#6f6ce6] to-[#68c2d0]",
};

export function TeamSection() {
  return (
    <section id="team" className="section-dark border-t border-[#1a1d44]">
      <div className="mx-auto grid w-full max-w-[1120px] gap-10 px-6 py-16 lg:grid-cols-[1fr_0.98fr]">
        <div>
          <Badge
            variant="outline"
            className="rounded-full border-[#3a2f78] bg-[#130f30] px-5 py-2 text-[0.74rem] tracking-[0.18em] text-[#7d69d2]"
          >
            THE TEAM
          </Badge>

          <h2 className="mt-8 max-w-[540px] text-[3.7rem] font-semibold leading-[1.1] text-[#f4f5ff]">
            Small Team. Zero Overhead. Maximum Impact.
          </h2>
          <p className="mt-7 max-w-[600px] text-[1rem] leading-[1.5] text-[#9898b5] md:text-[1.15rem]">
            No account managers. No layers of bureaucracy. Just engineers,
            designers, and strategists who build. You work directly with the
            people who create your product.
          </p>

          <div className="mt-10 divide-y divide-[#21254d] border-y border-[#21254d]">
            {teamStats.map((item) => (
              <div key={item.label} className="flex items-center justify-between py-4">
                <p className="text-[1rem] text-[#7f84a8]">{item.label}</p>
                <p className="text-[1.05rem] font-semibold text-[#4dd7c9]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <Button
            variant="hero"
            className="mt-8 h-13 rounded-lg px-8 text-[1rem] font-semibold"
          >
            Meet the Full Team
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className={cn(
                "rounded-[14px] border-[#2a2e57] bg-[#1b1f3c] px-4 py-4",
                member.wide && "col-span-2 lg:col-span-3",
              )}
            >
              <div
                className={cn(
                  "h-[86px] rounded-full",
                  member.wide ? "w-[56px]" : "w-full",
                  avatarStyles[member.avatar],
                )}
              />
              <div className={cn(member.wide ? "mt-[-74px] ml-[72px]" : "mt-3")}>
                <p className="text-[1rem] font-semibold text-[#ebecf7]">{member.name}</p>
                <p className="text-[0.88rem] text-[#7f83a5]">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
