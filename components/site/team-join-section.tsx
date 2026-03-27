import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function TeamJoinSection() {
  return (
    <section className="section-dark border-b border-[#171b41] py-14">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <Card className="rounded-[16px] border-[#2a2f58] bg-[#1b1f3d] px-8 py-14 text-center">
          <h2 className="text-[3.1rem] font-semibold leading-[1.12] text-[#f1f2fc]">
            Want to Join Our Team?
          </h2>
          <p className="mx-auto mt-5 max-w-[830px] text-[1.25rem] leading-[1.5] text-[#8a8ead]">
            We are always looking for exceptional engineers, designers, and
            strategists who love building products that matter. Remote-first,
            flexible hours, and work on real client projects from day one.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="hero"
              className="h-13 rounded-lg px-9 text-[1.05rem] font-semibold"
            >
              Get in Touch
            </Button>
            <Button
              variant="heroOutline"
              className="h-13 rounded-lg border-[#757a9a] px-9 text-[1.05rem] font-semibold text-[#e8eaf7]"
            >
              Email: careers@voidstudio.co.uk
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
