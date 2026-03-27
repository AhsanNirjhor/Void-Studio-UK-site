import { contactFaqs } from "@/components/site/data";
import { Card } from "@/components/ui/card";

export function ContactFaqSection() {
  return (
    <section className="section-dark border-b border-[#171b41] py-14">
      <div className="mx-auto w-full max-w-[980px] px-4 sm:px-6">
        <h2 className="text-center text-[3.5rem] font-semibold leading-[1.14] text-[#f1f2fc]">
          Common Questions Before You Reach Out
        </h2>

        <div className="mt-10 space-y-4">
          {contactFaqs.map((item) => (
            <Card
              key={item.question}
              className="rounded-[14px] border-[#2a2f58] bg-[#1b1f3d] px-6 py-6 sm:px-8"
            >
              <h3 className="text-[2rem] font-semibold leading-[1.2] text-[#f0f2fb]">
                {item.question}
              </h3>
              <p className="mt-3 text-[1.08rem] leading-[1.48] text-[#7f84a6]">
                {item.answer}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
