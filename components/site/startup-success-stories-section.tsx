import { startupSuccessStories } from "@/components/site/data";
import { CheckIcon } from "@/components/site/icons";
import { Card } from "@/components/ui/card";

export function StartupSuccessStoriesSection() {
  return (
    <section className="section-dark border-b border-[#171b41] py-18">
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <h2 className="text-center text-[3.7rem] font-semibold leading-[1.14] text-[#f1f2fc]">
          Startup Success Stories
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {startupSuccessStories.map((story) => (
            <Card
              key={story.title}
              className="rounded-[14px] border-[#2a2f58] bg-[#1b1f3d] p-7"
            >
              <p className="text-[0.95rem] font-semibold tracking-[0.04em] text-[#52d7c8]">
                ● {story.stage}
              </p>
              <h3 className="mt-4 text-[2.2rem] font-semibold leading-[1.18] text-[#eef0fb]">
                {story.title}
              </h3>

              <div className="mt-4">
                <p className="text-[1.05rem] font-semibold text-[#f1f2fb]">Challenge</p>
                <p className="mt-1 text-[1.02rem] leading-[1.45] text-[#7f84a6]">
                  {story.challenge}
                </p>
              </div>

              <div className="mt-4">
                <p className="text-[1.05rem] font-semibold text-[#f1f2fb]">
                  Our Solution
                </p>
                <p className="mt-1 text-[1.02rem] leading-[1.45] text-[#7f84a6]">
                  {story.solution}
                </p>
              </div>

              <div className="mt-5 border-t border-[#2b3158] pt-5">
                <div className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 size-5 shrink-0 text-[#4dd7c9]" />
                  <p className="text-[1.05rem] font-semibold leading-[1.45] text-[#eef0fb]">
                    {story.outcome}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
