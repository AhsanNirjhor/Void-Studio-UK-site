"use client";

import type { ReactNode, SVGProps } from "react";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type ServiceKey =
  | "ai"
  | "accounting"
  | "custom"
  | "data"
  | "compliance"
  | "consulting";

type SizeKey = "startup" | "small" | "medium" | "enterprise";
type TimelineKey = "asap" | "oneTwo" | "three" | "sixPlus";
type IntegrationKey = "none" | "basic" | "moderate" | "complex";
type SupportKey = "basic" | "standard" | "premium";
type IndustryKey =
  | "professional"
  | "logistics"
  | "healthcare"
  | "hospitality"
  | "finance"
  | "legal"
  | "manufacturing";
type UrgencyKey = "normal" | "high" | "critical";
type FeatureKey =
  | "auth"
  | "dashboard"
  | "mobile"
  | "api"
  | "reporting"
  | "payments"
  | "email"
  | "analytics"
  | "collaboration"
  | "documents"
  | "workflows"
  | "thirdParty";

type Estimate = {
  low: number;
  high: number;
};

type OptionItem<T extends string> = {
  key: T;
  title: string;
  description?: string;
  suffix?: string;
  icon?: ReactNode;
};

const TOTAL_STEPS = 8;

const services: OptionItem<ServiceKey>[] = [
  { key: "ai", title: "AI Automation & Agents", icon: <BoltIcon className="size-5" /> },
  { key: "accounting", title: "Accounting Automation", icon: <TrendIcon className="size-5" /> },
  { key: "custom", title: "Custom Software", icon: <RocketIcon className="size-5" /> },
  { key: "data", title: "Data & Business Intelligence", icon: <TargetIcon className="size-5" /> },
  { key: "compliance", title: "Compliance & Governance", icon: <ShieldIcon className="size-5" /> },
  { key: "consulting", title: "Consulting & Strategy", icon: <UsersIcon className="size-5" /> },
];

const businessSizes: OptionItem<SizeKey>[] = [
  { key: "startup", title: "Startup", description: "1-10 employees, early stage" },
  { key: "small", title: "Small Business", description: "10-50 employees" },
  { key: "medium", title: "Medium Business", description: "50-250 employees" },
  { key: "enterprise", title: "Enterprise", description: "250+ employees" },
];

const timelines: OptionItem<TimelineKey>[] = [
  { key: "asap", title: "ASAP (2-4 weeks)", suffix: "+50%" },
  { key: "oneTwo", title: "1-2 Months", suffix: "+20%" },
  { key: "three", title: "3 Months", suffix: "Standard" },
  { key: "sixPlus", title: "6+ Months", suffix: "Discounted" },
];

const featureOptions: OptionItem<FeatureKey>[] = [
  { key: "auth", title: "User Authentication & Permissions" },
  { key: "dashboard", title: "Real-time Data Dashboard" },
  { key: "mobile", title: "Mobile Responsive Design" },
  { key: "api", title: "API Integration" },
  { key: "reporting", title: "Automated Reporting" },
  { key: "payments", title: "Payment Processing" },
  { key: "email", title: "Email Notifications" },
  { key: "analytics", title: "Advanced Analytics" },
  { key: "collaboration", title: "Multi-user Collaboration" },
  { key: "documents", title: "Document Management" },
  { key: "workflows", title: "Custom Workflows" },
  { key: "thirdParty", title: "Third-party Integrations" },
];

const integrations: OptionItem<IntegrationKey>[] = [
  { key: "none", title: "No Integrations", description: "Standalone system" },
  { key: "basic", title: "Basic (1-2 systems)", description: "E.g., Stripe, email provider" },
  { key: "moderate", title: "Moderate (3-5 systems)", description: "E.g., CRM, accounting, analytics" },
  { key: "complex", title: "Complex (6+ systems)", description: "Enterprise-level integrations" },
];

const supports: OptionItem<SupportKey>[] = [
  { key: "basic", title: "Basic Support", description: "30-day bug fixes, email support" },
  { key: "standard", title: "Standard Support", description: "90-day support, minor updates" },
  { key: "premium", title: "Premium Support", description: "Ongoing maintenance, priority support, updates" },
];

const industries: OptionItem<IndustryKey>[] = [
  { key: "professional", title: "Professional Services" },
  { key: "logistics", title: "Logistics & Fleet" },
  { key: "healthcare", title: "Healthcare" },
  { key: "hospitality", title: "Hospitality" },
  { key: "finance", title: "Finance & FinTech" },
  { key: "legal", title: "Legal" },
  { key: "manufacturing", title: "Manufacturing" },
];

const urgencyLevels: OptionItem<UrgencyKey>[] = [
  { key: "normal", title: "Standard timeline (2-3 months)" },
  { key: "high", title: "High priority (within 1 month)" },
  { key: "critical", title: "Critical (ASAP)" },
];

const servicePriceMap: Record<ServiceKey, Estimate> = {
  ai: { low: 2000, high: 5000 },
  accounting: { low: 2500, high: 7000 },
  custom: { low: 3000, high: 12000 },
  data: { low: 2200, high: 6500 },
  compliance: { low: 2000, high: 6000 },
  consulting: { low: 1200, high: 4000 },
};

const sizeMultipliers: Record<SizeKey, { low: number; high: number }> = {
  startup: { low: 1, high: 1 },
  small: { low: 1.6, high: 1.9 },
  medium: { low: 2, high: 2.6 },
  enterprise: { low: 2.7, high: 3.4 },
};

const timelineMultipliers: Record<TimelineKey, { low: number; high: number }> = {
  asap: { low: 1.5, high: 1.7 },
  oneTwo: { low: 1.3, high: 1.5 },
  three: { low: 1, high: 1 },
  sixPlus: { low: 0.9, high: 0.9 },
};

const featurePriceMap: Record<FeatureKey, Estimate> = {
  auth: { low: 700, high: 2200 },
  dashboard: { low: 1000, high: 3000 },
  mobile: { low: 900, high: 2400 },
  api: { low: 800, high: 2800 },
  reporting: { low: 700, high: 2000 },
  payments: { low: 900, high: 2800 },
  email: { low: 400, high: 1200 },
  analytics: { low: 1200, high: 3800 },
  collaboration: { low: 1000, high: 3000 },
  documents: { low: 900, high: 2600 },
  workflows: { low: 1200, high: 3600 },
  thirdParty: { low: 1000, high: 3200 },
};

const integrationAddons: Record<IntegrationKey, Estimate> = {
  none: { low: 0, high: 0 },
  basic: { low: 500, high: 1500 },
  moderate: { low: 1800, high: 5500 },
  complex: { low: 3500, high: 9000 },
};

const supportAddons: Record<SupportKey, Estimate> = {
  basic: { low: 900, high: 2400 },
  standard: { low: 2500, high: 6000 },
  premium: { low: 5000, high: 12000 },
};

const urgencyAddons: Record<UrgencyKey, Estimate> = {
  normal: { low: 0, high: 0 },
  high: { low: 3000, high: 6000 },
  critical: { low: 5000, high: 9000 },
};

const industryAddons: Record<IndustryKey, Estimate> = {
  professional: { low: 0, high: 0 },
  logistics: { low: 400, high: 1000 },
  healthcare: { low: 900, high: 2500 },
  hospitality: { low: 300, high: 900 },
  finance: { low: 1200, high: 3200 },
  legal: { low: 1000, high: 3000 },
  manufacturing: { low: 700, high: 1800 },
};

export function InstantQuoteWizardSection() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<ServiceKey[]>(["ai"]);
  const [selectedSize, setSelectedSize] = useState<SizeKey>("medium");
  const [selectedTimeline, setSelectedTimeline] = useState<TimelineKey>("oneTwo");
  const [selectedFeatures, setSelectedFeatures] = useState<FeatureKey[]>([]);
  const [selectedIntegration, setSelectedIntegration] = useState<IntegrationKey>("basic");
  const [selectedSupport, setSelectedSupport] = useState<SupportKey>("standard");
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryKey>("professional");
  const [selectedUrgency, setSelectedUrgency] = useState<UrgencyKey>("high");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");

  const estimate = useMemo(() => {
    let range = getBaseEstimate(selectedServices);

    if (step >= 2) {
      range = applyMultiplier(range, sizeMultipliers[selectedSize]);
    }

    if (step >= 3) {
      range = applyMultiplier(range, timelineMultipliers[selectedTimeline]);
    }

    if (step >= 4) {
      range = addFeatureEstimate(range, selectedFeatures);
    }

    if (step >= 5) {
      range = addEstimate(range, integrationAddons[selectedIntegration]);
    }

    if (step >= 6) {
      range = addEstimate(range, supportAddons[selectedSupport]);
    }

    if (step >= 7) {
      range = addEstimate(range, industryAddons[selectedIndustry]);
      range = addEstimate(range, urgencyAddons[selectedUrgency]);
    }

    return {
      low: roundToHundreds(range.low),
      high: roundToHundreds(range.high),
    };
  }, [
    step,
    selectedServices,
    selectedSize,
    selectedTimeline,
    selectedFeatures,
    selectedIntegration,
    selectedSupport,
    selectedIndustry,
    selectedUrgency,
  ]);

  const canProceed = useMemo(() => {
    if (step === 1) return selectedServices.length > 0;
    if (step === 2) return Boolean(selectedSize);
    if (step === 3) return Boolean(selectedTimeline);
    if (step === 4) return true;
    if (step === 5) return Boolean(selectedIntegration);
    if (step === 6) return Boolean(selectedSupport);
    if (step === 7) return Boolean(selectedIndustry) && Boolean(selectedUrgency);
    if (step === 8) return name.trim().length > 1 && /.+@.+\..+/.test(email.trim());
    return false;
  }, [
    step,
    selectedServices,
    selectedSize,
    selectedTimeline,
    selectedIntegration,
    selectedSupport,
    selectedIndustry,
    selectedUrgency,
    name,
    email,
  ]);

  const progress = Math.round((step / TOTAL_STEPS) * 100);

  return (
    <section className="instant-quote-bg min-h-[calc(100vh-64px)] pb-14 pt-12 sm:min-h-[calc(100vh-80px)] sm:pt-14">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#6434da] bg-[#3d158a] px-6 py-2 text-[0.82rem] font-semibold tracking-[0.16em] text-[#6f58d8]">
            <SparklesIcon className="size-3.5" />
            INSTANT QUOTE CALCULATOR
          </div>
          <h1 className="mx-auto mt-8 max-w-[960px] text-[clamp(2.4rem,5.5vw,4.4rem)] font-semibold leading-[1.08] text-[#f3f4fd]">
            Get Your Custom Quote in 2 Minutes
          </h1>
          <p className="mx-auto mt-5 max-w-[840px] text-[1.22rem] leading-[1.45] text-[#d8cff9]">
            Answer a few questions and get an instant estimate for your project
          </p>
        </div>

        <div className="mt-14 flex items-center justify-between text-[1.08rem] font-semibold tracking-[0.07em] text-[#aca1db]">
          <p>
            Step {step} of {TOTAL_STEPS}
          </p>
          <p>{progress}% Complete</p>
        </div>

        <div className="mt-4 h-2 rounded-full bg-[#6731d8]/45">
          <div
            className="h-full rounded-full bg-[#8b54ff] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-12 rounded-[30px] border border-[#6633dc] bg-[#3f109d] p-6 sm:p-8 md:p-10">
          <StepCard
            step={step}
            selectedServices={selectedServices}
            setSelectedServices={setSelectedServices}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedTimeline={selectedTimeline}
            setSelectedTimeline={setSelectedTimeline}
            selectedFeatures={selectedFeatures}
            setSelectedFeatures={setSelectedFeatures}
            selectedIntegration={selectedIntegration}
            setSelectedIntegration={setSelectedIntegration}
            selectedSupport={selectedSupport}
            setSelectedSupport={setSelectedSupport}
            selectedIndustry={selectedIndustry}
            setSelectedIndustry={setSelectedIndustry}
            selectedUrgency={selectedUrgency}
            setSelectedUrgency={setSelectedUrgency}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            company={company}
            setCompany={setCompany}
            phone={phone}
            setPhone={setPhone}
          />
        </div>

        <div className="mt-10 rounded-[20px] border border-[#6330d4] bg-[#351081] px-6 py-8 text-center sm:px-8">
          <p className="text-[0.95rem] font-semibold tracking-[0.12em] text-[#afa0de]">CURRENT ESTIMATE</p>
          <p className="mt-3 text-[clamp(2rem,4vw,3rem)] font-semibold leading-none text-[#f4f5ff]">
            {formatGbp(estimate.low)} - {formatGbp(estimate.high)}
          </p>
        </div>

        <div className={cn("mt-10 grid gap-4", step === 1 ? "mx-auto max-w-[520px]" : "sm:grid-cols-2") }>
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep((prev) => Math.max(1, prev - 1))}
              className="inline-flex h-16 items-center justify-center gap-3 rounded-2xl border border-[#6b3ddd] bg-[#4815ae] text-[1.15rem] font-semibold text-white transition-colors hover:bg-[#5420bc]"
            >
              <ArrowLeftIcon className="size-5" />
              Back
            </button>
          ) : null}

          <button
            type="button"
            onClick={() => {
              if (!canProceed) return;

              if (step < TOTAL_STEPS) {
                setStep((prev) => prev + 1);
                return;
              }

              // no-op submit placeholder for now
            }}
            disabled={!canProceed}
            className={cn(
              "inline-flex h-16 items-center justify-center gap-3 rounded-2xl border text-[1.15rem] font-semibold transition-colors",
              canProceed
                ? "border-[#6d42de] bg-[#4f1ab8] text-white hover:bg-[#5a24c6]"
                : "border-[#6541b9] bg-[#4d2b90] text-[#a596cf]",
              step === 1 && "sm:col-span-2",
            )}
          >
            {step === TOTAL_STEPS ? "Get My Quote" : "Next"}
            <ArrowRightIcon className="size-5" />
          </button>
        </div>
      </div>

      <button
        type="button"
        aria-label="Help"
        className="fixed bottom-4 right-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#2f2e43] bg-[#1b1a2f] text-xl text-[#c5bfdc] shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
      >
        ?
      </button>
    </section>
  );
}

type StepCardProps = {
  step: number;
  selectedServices: ServiceKey[];
  setSelectedServices: (value: ServiceKey[] | ((prev: ServiceKey[]) => ServiceKey[])) => void;
  selectedSize: SizeKey;
  setSelectedSize: (value: SizeKey) => void;
  selectedTimeline: TimelineKey;
  setSelectedTimeline: (value: TimelineKey) => void;
  selectedFeatures: FeatureKey[];
  setSelectedFeatures: (value: FeatureKey[] | ((prev: FeatureKey[]) => FeatureKey[])) => void;
  selectedIntegration: IntegrationKey;
  setSelectedIntegration: (value: IntegrationKey) => void;
  selectedSupport: SupportKey;
  setSelectedSupport: (value: SupportKey) => void;
  selectedIndustry: IndustryKey;
  setSelectedIndustry: (value: IndustryKey) => void;
  selectedUrgency: UrgencyKey;
  setSelectedUrgency: (value: UrgencyKey) => void;
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  company: string;
  setCompany: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
};

function StepCard({
  step,
  selectedServices,
  setSelectedServices,
  selectedSize,
  setSelectedSize,
  selectedTimeline,
  setSelectedTimeline,
  selectedFeatures,
  setSelectedFeatures,
  selectedIntegration,
  setSelectedIntegration,
  selectedSupport,
  setSelectedSupport,
  selectedIndustry,
  setSelectedIndustry,
  selectedUrgency,
  setSelectedUrgency,
  name,
  setName,
  email,
  setEmail,
  company,
  setCompany,
  phone,
  setPhone,
}: StepCardProps) {
  if (step === 1) {
    return (
      <div>
        <StepTitle
          icon={<TargetIcon className="size-9 text-[#6f31f0]" />}
          title="What services do you need?"
          subtitle="Select all that apply - we can combine multiple services"
        />
        <div className="mt-8 space-y-4">
          {services.map((service) => (
            <MultiOptionCard
              key={service.key}
              label={service.title}
              selected={selectedServices.includes(service.key)}
              icon={service.icon}
              onClick={() => {
                setSelectedServices((prev) =>
                  prev.includes(service.key)
                    ? prev.filter((item) => item !== service.key)
                    : [...prev, service.key],
                );
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div>
        <StepTitle
          icon={<UsersIcon className="size-9 text-[#6f31f0]" />}
          title="What&apos;s your business size?"
          subtitle="This helps us tailor the solution to your scale"
        />
        <div className="mt-8 space-y-4">
          {businessSizes.map((size) => (
            <SingleOptionCard
              key={size.key}
              label={size.title}
              description={size.description}
              selected={selectedSize === size.key}
              onClick={() => setSelectedSize(size.key)}
            />
          ))}
        </div>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div>
        <StepTitle
          icon={<ClockIcon className="size-9 text-[#6f31f0]" />}
          title="What&apos;s your ideal timeline?"
          subtitle="Faster timelines may affect cost"
        />
        <div className="mt-8 space-y-4">
          {timelines.map((timeline) => (
            <SingleOptionCard
              key={timeline.key}
              label={timeline.title}
              suffix={timeline.suffix}
              selected={selectedTimeline === timeline.key}
              onClick={() => setSelectedTimeline(timeline.key)}
            />
          ))}
        </div>
      </div>
    );
  }

  if (step === 4) {
    return (
      <div>
        <StepTitle
          icon={<BoltIcon className="size-9 text-[#6f31f0]" />}
          title="What features do you need?"
          subtitle="Select all key features for your solution"
        />
        <div className="mt-8 space-y-4">
          {featureOptions.map((feature) => (
            <MultiOptionCard
              key={feature.key}
              label={feature.title}
              selected={selectedFeatures.includes(feature.key)}
              onClick={() => {
                setSelectedFeatures((prev) =>
                  prev.includes(feature.key)
                    ? prev.filter((item) => item !== feature.key)
                    : [...prev, feature.key],
                );
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (step === 5) {
    return (
      <div>
        <StepTitle
          icon={<BoltIcon className="size-9 text-[#6f31f0]" />}
          title="Integration complexity?"
          subtitle="How many existing systems need to connect?"
        />
        <div className="mt-8 space-y-4">
          {integrations.map((integration) => (
            <SingleOptionCard
              key={integration.key}
              label={integration.title}
              description={integration.description}
              selected={selectedIntegration === integration.key}
              onClick={() => setSelectedIntegration(integration.key)}
            />
          ))}
        </div>
      </div>
    );
  }

  if (step === 6) {
    return (
      <div>
        <StepTitle
          icon={<ShieldIcon className="size-9 text-[#6f31f0]" />}
          title="Post-launch support level?"
          subtitle="How much ongoing support after launch?"
        />
        <div className="mt-8 space-y-4">
          {supports.map((support) => (
            <SingleOptionCard
              key={support.key}
              label={support.title}
              description={support.description}
              selected={selectedSupport === support.key}
              onClick={() => setSelectedSupport(support.key)}
            />
          ))}
        </div>
      </div>
    );
  }

  if (step === 7) {
    return (
      <div>
        <StepTitle
          icon={<TargetIcon className="size-9 text-[#6f31f0]" />}
          title="Final details"
          subtitle="Just a couple more questions"
        />
        <div className="mt-8 space-y-6">
          <SelectField
            label="Your Industry"
            value={selectedIndustry}
            onChange={(value) => setSelectedIndustry(value as IndustryKey)}
            options={industries}
            placeholder="Select your industry"
          />
          <SelectField
            label="How urgent is this project?"
            value={selectedUrgency}
            onChange={(value) => setSelectedUrgency(value as UrgencyKey)}
            options={urgencyLevels}
            placeholder="Select urgency level"
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <StepTitle
        icon={<MailIcon className="size-9 text-[#6f31f0]" />}
        title="Where should we send your quote?"
        subtitle="We&apos;ll send a detailed breakdown to your email"
      />
      <div className="mt-8 space-y-5">
        <InputField label="Your Name *" value={name} onChange={setName} placeholder="John Smith" />
        <InputField
          label="Email Address *"
          value={email}
          onChange={setEmail}
          placeholder="john@company.com"
          type="email"
        />
        <InputField
          label="Company Name"
          value={company}
          onChange={setCompany}
          placeholder="Your Company Ltd"
        />
        <InputField
          label="Phone Number"
          value={phone}
          onChange={setPhone}
          placeholder="+44 20 1234 5678"
          type="tel"
        />
      </div>
    </div>
  );
}

type StepTitleProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
};

function StepTitle({ icon, title, subtitle }: StepTitleProps) {
  return (
    <div>
      <h2 className="flex items-center gap-4 text-[clamp(2rem,3.8vw,3.45rem)] font-semibold leading-[1.12] text-[#f2f3fd]">
        {icon}
        {title}
      </h2>
      <p className="mt-5 text-[1.2rem] leading-[1.45] text-[#d3c9f7]">{subtitle}</p>
    </div>
  );
}

type MultiOptionCardProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
  icon?: ReactNode;
};

function MultiOptionCard({ label, selected, onClick, icon }: MultiOptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-20 w-full items-center gap-4 rounded-2xl border px-6 text-left transition-colors",
        selected
          ? "border-[#9164ff] bg-[#5821c9]"
          : "border-[#6c3de0] bg-[#4a16b6] hover:bg-[#5420bf]",
      )}
    >
      {icon ? <span className="text-[#6f31f0]">{icon}</span> : null}
      <span className="text-[1.26rem] font-semibold text-[#f5f6ff]">{label}</span>
    </button>
  );
}

type SingleOptionCardProps = {
  label: string;
  description?: string;
  suffix?: string;
  selected: boolean;
  onClick: () => void;
};

function SingleOptionCard({
  label,
  description,
  suffix,
  selected,
  onClick,
}: SingleOptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full rounded-2xl border px-6 py-5 text-left transition-colors",
        selected
          ? "border-[#9164ff] bg-[#5821c9]"
          : "border-[#6c3de0] bg-[#4a16b6] hover:bg-[#5420bf]",
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-[1.22rem] font-semibold text-[#f5f6ff]">{label}</p>
        {suffix ? <p className="text-[1.1rem] font-semibold text-[#aa9fdc]">{suffix}</p> : null}
      </div>
      {description ? <p className="mt-2 text-[1.08rem] text-[#d3c8f8]">{description}</p> : null}
    </button>
  );
}

type SelectFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ key: string; title: string }>;
  placeholder: string;
};

function SelectField({ label, value, onChange, options, placeholder }: SelectFieldProps) {
  return (
    <div>
      <label className="mb-3 block text-[1.2rem] font-semibold text-[#f5f6ff]">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-16 w-full appearance-none rounded-2xl border border-[#6c3de0] bg-[#4a16b6] px-5 pr-12 text-[1.2rem] text-[#f4f6ff] outline-none focus:border-[#9164ff]"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.key} value={option.key}>
              {option.title}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-[#c8bef0]" />
      </div>
    </div>
  );
}

type InputFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: "text" | "email" | "tel";
};

function InputField({ label, value, onChange, placeholder, type = "text" }: InputFieldProps) {
  return (
    <div>
      <label className="mb-3 block text-[1.2rem] font-semibold text-[#f5f6ff]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-16 w-full rounded-2xl border border-[#6c3de0] bg-[#4a16b6] px-5 text-[1.2rem] text-[#f4f6ff] outline-none placeholder:text-[#a593df] focus:border-[#9164ff]"
      />
    </div>
  );
}

function getBaseEstimate(selectedServices: ServiceKey[]): Estimate {
  if (!selectedServices.length) {
    return { low: 0, high: 0 };
  }

  return selectedServices.reduce(
    (acc, key) => ({
      low: acc.low + servicePriceMap[key].low,
      high: acc.high + servicePriceMap[key].high,
    }),
    { low: 0, high: 0 },
  );
}

function applyMultiplier(range: Estimate, multiplier: { low: number; high: number }): Estimate {
  return {
    low: range.low * multiplier.low,
    high: range.high * multiplier.high,
  };
}

function addEstimate(base: Estimate, addon: Estimate): Estimate {
  return {
    low: base.low + addon.low,
    high: base.high + addon.high,
  };
}

function addFeatureEstimate(base: Estimate, features: FeatureKey[]): Estimate {
  if (!features.length) {
    return base;
  }

  const added = features.reduce(
    (acc, feature) => ({
      low: acc.low + featurePriceMap[feature].low,
      high: acc.high + featurePriceMap[feature].high,
    }),
    { low: 0, high: 0 },
  );

  return {
    low: base.low + added.low,
    high: base.high + added.high,
  };
}

function roundToHundreds(value: number) {
  return Math.round(value / 100) * 100;
}

function formatGbp(value: number) {
  return `£${value.toLocaleString("en-GB")}`;
}

function SparklesIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" />
      <path d="M5 15.5 6 18l2.5 1-2.5 1L5 22l-1-2.5-2.5-1 2.5-1L5 15.5Z" />
    </svg>
  );
}

function TargetIcon(props: SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}

function BoltIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="m13.5 2.7-8.2 10.2h5.5l-1.1 8.4 8-10.2h-5.3z" />
    </svg>
  );
}

function TrendIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="m4 16 5.2-5.2 3.6 3.6L20 7.1" />
      <path d="M15.5 7H20v4.5" />
    </svg>
  );
}

function RocketIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M14.9 9.1c1.7-1.7 2.4-4.1 2.1-6.4-2.3-.3-4.7.4-6.4 2.1L6.8 8.6a4.5 4.5 0 0 0-1.2 2.2L4.8 14l3.3-.8a4.5 4.5 0 0 0 2.2-1.2l4.6-2.9Z" />
      <path d="M14 10 10 6M7.1 13.7l-2.6 2.6M9.5 16.1 12 18.6" />
    </svg>
  );
}

function UsersIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M9.3 11.3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.2-.7a2.4 2.4 0 1 0 0-4.8" />
      <path d="M4 18.7c.6-2.7 2.8-4.2 5.3-4.2s4.7 1.5 5.3 4.2M15.2 14.9c1.6.1 3 .9 3.8 2.4" />
    </svg>
  );
}

function ClockIcon(props: SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.5l3 1.8" />
    </svg>
  );
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M12 3.5 4.7 6.7v5.5c0 4.2 2.8 7.8 7.3 9.8 4.5-2 7.3-5.6 7.3-9.8V6.7L12 3.5Z" />
    </svg>
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

function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="m15 18-6-6 6-6" />
      <path d="M9 12h10" />
    </svg>
  );
}

function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="m9 18 6-6-6-6" />
      <path d="M5 12h10" />
    </svg>
  );
}

function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
