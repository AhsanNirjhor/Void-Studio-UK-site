import type { ReactElement, SVGProps } from "react";
import {
  contactBudgetOptions,
  contactInfoItems,
  contactServiceOptions,
} from "@/components/site/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type ContactIcon = (typeof contactInfoItems)[number]["icon"];

const iconMap: Record<ContactIcon, (props: SVGProps<SVGSVGElement>) => ReactElement> =
  {
    mail: MailIcon,
    phone: PhoneIcon,
    location: LocationIcon,
  };

export function ContactPageMainSection() {
  return (
    <section className="section-dark border-b border-[#171b41] py-14">
      <div className="mx-auto grid w-full max-w-[1120px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <h2 className="text-[2.2rem] font-semibold leading-[1.2] text-[#f0f2fb]">
            Contact Information
          </h2>

          <div className="mt-8 space-y-6">
            {contactInfoItems.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1d1845] text-[#6c37f2]">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-[1rem] text-[#6f7496]">{item.label}</p>
                    <p className="mt-1 text-[1.2rem] font-semibold text-[#eef0fb]">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Card className="mt-8 rounded-[14px] border-[#2a2f58] bg-[#1b1f3d] p-6">
            <h3 className="text-[2rem] font-semibold leading-[1.2] text-[#f1f2fc]">
              Prefer to Schedule a Call?
            </h3>
            <p className="mt-4 text-[1.1rem] leading-[1.45] text-[#7f84a6]">
              Book a free 30-minute discovery call directly into our calendar.
            </p>
            <Button
              variant="hero"
              className="mt-6 h-12 w-full rounded-lg text-[1.05rem] font-semibold"
            >
              Book a Call
            </Button>
          </Card>
        </div>

        <Card className="rounded-[16px] border-[#2a2f58] bg-[#1b1f3d] p-6 sm:p-8">
          <form className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Your Name *" placeholder="John Smith" />
              <FormField label="Email Address *" placeholder="john@company.com" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Company Name" placeholder="Your Company Ltd" />
              <FormField label="Phone Number" placeholder="+44 20 1234 5678" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FormSelect
                label="Service Interested In"
                placeholder="Select a service"
                options={contactServiceOptions}
              />
              <FormSelect
                label="Estimated Budget"
                placeholder="Select a range"
                options={contactBudgetOptions}
              />
            </div>

            <div>
              <label className="mb-2 block text-[1rem] font-medium text-[#e7e8f6]">
                Tell Us About Your Project *
              </label>
              <textarea
                placeholder="Tell us about your challenge, goals, and timeline..."
                rows={5}
                className="w-full resize-none rounded-lg border border-[#30345d] bg-[#0d1126] px-4 py-3 text-[1.05rem] text-[#daddf5] outline-none placeholder:text-[#6f7395] focus:border-[#6340ea]"
              />
            </div>

            <Button
              variant="hero"
              className="h-13 w-full rounded-lg text-[1.15rem] font-semibold"
            >
              Send Message
              <PaperPlaneIcon className="size-4" />
            </Button>
            <p className="text-center text-[0.92rem] text-[#70749a]">
              By submitting this form, you agree to our privacy policy. We will
              never share your information.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  placeholder: string;
};

function FormField({ label, placeholder }: FormFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-[1rem] font-medium text-[#e7e8f6]">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="h-12 w-full rounded-lg border border-[#30345d] bg-[#0d1126] px-4 text-[1.05rem] text-[#daddf5] outline-none placeholder:text-[#6f7395] focus:border-[#6340ea]"
      />
    </div>
  );
}

type FormSelectProps = {
  label: string;
  placeholder: string;
  options: string[];
};

function FormSelect({ label, placeholder, options }: FormSelectProps) {
  return (
    <div>
      <label className="mb-2 block text-[1rem] font-medium text-[#e7e8f6]">
        {label}
      </label>
      <select className="h-12 w-full rounded-lg border border-[#30345d] bg-[#0d1126] px-4 text-[1.05rem] text-[#daddf5] outline-none focus:border-[#6340ea]">
        <option>{placeholder}</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
      <path d="m4.7 7.2 7.3 6 7.3-6" />
    </svg>
  );
}

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5.5 4.8h3.2l1.2 4.1-1.9 1.6a13.5 13.5 0 0 0 5.6 5.6l1.6-1.9 4.1 1.2v3.2a2 2 0 0 1-2.2 2c-6.9-.8-12.4-6.3-13.2-13.2a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

function LocationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 20s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function PaperPlaneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 2 11 13" />
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
    </svg>
  );
}
