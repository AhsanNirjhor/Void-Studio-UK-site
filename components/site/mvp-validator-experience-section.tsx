"use client";

import type { ReactNode, SVGProps } from "react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ValidatorPhase = "intro" | "assessment" | "analyzing" | "report";

type BlockOneChoice = "yes" | "no" | "team";
type MarketSizeChoice = "lt1" | "1to10" | "10to100" | "100plus";
type StageChoice = "idea" | "prototype" | "waitlist" | "paying" | "revenue";
type InterviewChoice = "0" | "1to5" | "6to20" | "20plus";
type TeamChoice = "solo" | "cofounders" | "full";
type TechPartnerChoice = "inhouse" | "outsourced" | "no";
type TimelineChoice = "built" | "1to3" | "3to6" | "6plus" | "unsure";
type BlockerChoice = "notech" | "nofunding" | "unclear" | "all" | "other";
type PartnerChoice = "yes" | "possibly" | "notnow";

type DimensionResult = {
  title: string;
  score: number;
  color: "purple" | "amber" | "cyan";
  description: string;
};

type ReportResult = {
  readinessScore: number;
  stage: string;
  summary: string;
  intro: string;
  gap: string;
  risk: string;
  recommendations: [string, string, string];
  dimensions: DimensionResult[];
};

const TOTAL_BLOCKS = 5;
const TEXTAREA_MAX = 300;

const reportTemplate: ReportResult = {
  readinessScore: 42,
  stage: "Concept stage",
  summary: "Early stage - validation work needed before building",
  intro:
    "Your concept addresses a real market need. The strongest aspects of your approach are your hands-on validation approach and early traction signals.",
  gap:
    "The critical gaps are in customer discovery depth and technical execution planning. Your customer conversations are a strong foundation - now validate commercial intent.",
  risk:
    "Your biggest risk is that your core value proposition remains untested. This needs validation before significant development investment.",
  recommendations: [
    "Conduct 10-15 structured customer discovery interviews using the \"Mom Test\" framework",
    "Create a detailed feature prioritization matrix based on customer feedback",
    "Define your MVP scope ruthlessly - aim for 30% of planned features to launch in 4 weeks",
  ],
  dimensions: [
    {
      title: "Problem Fit",
      score: 5,
      color: "purple",
      description:
        "Your problem statement shows understanding of the pain point. Consider deepening your research on why existing solutions fail.",
    },
    {
      title: "Market Readiness",
      score: 4,
      color: "amber",
      description:
        "ICP definition needs more specificity. Focus on describing one very specific customer segment.",
    },
    {
      title: "Traction Signal",
      score: 3,
      color: "amber",
      description:
        "Strong validation efforts. Continue customer discovery and document specific learnings.",
    },
    {
      title: "Tech Viability",
      score: 3,
      color: "amber",
      description:
        "Technical execution capability is solid. Ensure timeline estimates account for edge cases and polish.",
    },
    {
      title: "Team Strength",
      score: 4,
      color: "amber",
      description:
        "Team composition looks balanced. Consider filling any remaining skill gaps early.",
    },
    {
      title: "Void Opportunity",
      score: 8,
      color: "cyan",
      description:
        "Void Studio can accelerate your path to market with our rapid MVP build program.",
    },
  ],
};

export function MvpValidatorExperienceSection() {
  const [phase, setPhase] = useState<ValidatorPhase>("intro");
  const [block, setBlock] = useState(1);

  const [productProblem, setProductProblem] = useState("");
  const [whoHasProblem, setWhoHasProblem] = useState("");
  const [whyDifferent, setWhyDifferent] = useState("");
  const [experiencedProblem, setExperiencedProblem] =
    useState<BlockOneChoice | null>(null);

  const [idealCustomer, setIdealCustomer] = useState("");
  const [marketSize, setMarketSize] = useState<MarketSizeChoice | null>(null);
  const [competitors, setCompetitors] = useState("");

  const [currentStage, setCurrentStage] = useState<StageChoice | null>(null);
  const [customerConversations, setCustomerConversations] =
    useState<InterviewChoice | null>(null);
  const [earlyValidation, setEarlyValidation] = useState("");
  const [biggestAssumption, setBiggestAssumption] = useState("");

  const [teamSetup, setTeamSetup] = useState<TeamChoice | null>(null);
  const [techPartner, setTechPartner] =
    useState<TechPartnerChoice | null>(null);
  const [buildTimeline, setBuildTimeline] = useState<TimelineChoice | null>(null);

  const [successVision, setSuccessVision] = useState("");
  const [biggestBlocker, setBiggestBlocker] =
    useState<BlockerChoice | null>(null);
  const [partnerReadiness, setPartnerReadiness] =
    useState<PartnerChoice | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const progress = Math.round((block / TOTAL_BLOCKS) * 100);

  const report = useMemo(() => {
    const safeName = name.trim() || "Founder";
    const safeEmail = email.trim() || "founder@startup.com";

    return {
      ...reportTemplate,
      intro: `${safeName}, your concept addresses a real market need. The strongest aspects of your approach are your hands-on validation approach and early traction signals.`,
      summary: `${safeEmail}, here\'s your personalized startup assessment`,
    };
  }, [name, email]);

  const canMoveNext = useMemo(() => {
    if (block === 1) {
      return (
        productProblem.trim().length > 0 &&
        whoHasProblem.trim().length > 0 &&
        whyDifferent.trim().length > 0 &&
        Boolean(experiencedProblem)
      );
    }

    if (block === 2) {
      return (
        idealCustomer.trim().length > 0 &&
        Boolean(marketSize) &&
        competitors.trim().length > 0
      );
    }

    if (block === 3) {
      return (
        Boolean(currentStage) &&
        Boolean(customerConversations) &&
        earlyValidation.trim().length > 0 &&
        biggestAssumption.trim().length > 0
      );
    }

    if (block === 4) {
      return Boolean(teamSetup) && Boolean(techPartner) && Boolean(buildTimeline);
    }

    return (
      successVision.trim().length > 0 &&
      Boolean(biggestBlocker) &&
      Boolean(partnerReadiness) &&
      name.trim().length > 1 &&
      /.+@.+\..+/.test(email.trim())
    );
  }, [
    block,
    productProblem,
    whoHasProblem,
    whyDifferent,
    experiencedProblem,
    idealCustomer,
    marketSize,
    competitors,
    currentStage,
    customerConversations,
    earlyValidation,
    biggestAssumption,
    teamSetup,
    techPartner,
    buildTimeline,
    successVision,
    biggestBlocker,
    partnerReadiness,
    name,
    email,
  ]);

  const startAssessment = () => {
    setPhase("assessment");
    setBlock(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goNext = () => {
    if (!canMoveNext) return;

    if (block < TOTAL_BLOCKS) {
      setBlock((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setPhase("analyzing");

    window.setTimeout(() => {
      setPhase("report");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 2200);
  };

  const goBack = () => {
    if (block <= 1) return;
    setBlock((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetAssessment = () => {
    setPhase("intro");
    setBlock(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="mvp-validator-bg min-h-[calc(100vh-64px)] pb-16 pt-10 sm:min-h-[calc(100vh-80px)] sm:pb-20 sm:pt-14">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        {phase === "intro" ? (
          <IntroPanel onStart={startAssessment} />
        ) : null}

        {phase === "assessment" ? (
          <AssessmentPanel
            block={block}
            progress={progress}
            canMoveNext={canMoveNext}
            onBack={goBack}
            onNext={goNext}
            productProblem={productProblem}
            setProductProblem={setProductProblem}
            whoHasProblem={whoHasProblem}
            setWhoHasProblem={setWhoHasProblem}
            whyDifferent={whyDifferent}
            setWhyDifferent={setWhyDifferent}
            experiencedProblem={experiencedProblem}
            setExperiencedProblem={setExperiencedProblem}
            idealCustomer={idealCustomer}
            setIdealCustomer={setIdealCustomer}
            marketSize={marketSize}
            setMarketSize={setMarketSize}
            competitors={competitors}
            setCompetitors={setCompetitors}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
            customerConversations={customerConversations}
            setCustomerConversations={setCustomerConversations}
            earlyValidation={earlyValidation}
            setEarlyValidation={setEarlyValidation}
            biggestAssumption={biggestAssumption}
            setBiggestAssumption={setBiggestAssumption}
            teamSetup={teamSetup}
            setTeamSetup={setTeamSetup}
            techPartner={techPartner}
            setTechPartner={setTechPartner}
            buildTimeline={buildTimeline}
            setBuildTimeline={setBuildTimeline}
            successVision={successVision}
            setSuccessVision={setSuccessVision}
            biggestBlocker={biggestBlocker}
            setBiggestBlocker={setBiggestBlocker}
            partnerReadiness={partnerReadiness}
            setPartnerReadiness={setPartnerReadiness}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            company={company}
            setCompany={setCompany}
          />
        ) : null}

        {phase === "analyzing" ? <AnalyzingPanel /> : null}

        {phase === "report" ? (
          <ReportPanel
            report={report}
            email={email}
            onTakeAgain={resetAssessment}
          />
        ) : null}
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

type IntroPanelProps = {
  onStart: () => void;
};

function IntroPanel({ onStart }: IntroPanelProps) {
  return (
    <div>
      <div className="mx-auto max-w-[1020px] text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#6434da] bg-[#3d158a] px-6 py-2 text-[0.82rem] font-semibold tracking-[0.16em] text-[#6f58d8]">
          <SparklesIcon className="size-3.5" />
          MVP VALIDATOR - FREE AI ASSESSMENT
        </div>

        <h1 className="mx-auto mt-8 max-w-[1000px] text-[clamp(2.6rem,6vw,5.2rem)] font-semibold leading-[1.08] text-[#f4f5ff]">
          Find Out Exactly Where Your MVP Stands
        </h1>

        <p className="mx-auto mt-7 max-w-[980px] text-[1.24rem] leading-[1.48] text-[#ddd3fb]">
          Get a personalized AI-powered assessment of your startup idea in under
          10 minutes. Discover your strengths, identify gaps, and get a clear
          roadmap to launch.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          <StatItem value="150+" label="Startups Assessed" />
          <StatItem value="10 min" label="Average Completion Time" />
          <StatItem value="100%" label="Free & Confidential" />
        </div>

        <button
          type="button"
          onClick={onStart}
          className="mx-auto mt-14 inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-[#531ae3] to-[#6b2ef7] px-12 text-[1.35rem] font-semibold text-white shadow-[0_16px_34px_rgba(38,10,130,0.35)] transition-all hover:from-[#5a24ea] hover:to-[#7440fb]"
        >
          <RocketIcon className="size-6" />
          Start Your Free Assessment
          <ArrowRightIcon className="size-6" />
        </button>

        <p className="mt-7 text-[1rem] text-[#b1a6e1]">
          No credit card required • Results delivered instantly • Your data stays
          private
        </p>
      </div>

      <div className="mt-14 rounded-[28px] border border-[#6633dc] bg-[#3e109a] px-6 py-11 sm:px-10">
        <h2 className="text-center text-[clamp(2rem,4vw,3.2rem)] font-semibold text-[#f3f4ff]">
          What You&apos;ll Receive
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <ReceiveItem
            icon={<TargetIcon className="size-6" />}
            title="6-Dimension Scorecard"
            description="Deep analysis across problem fit, market readiness, traction, tech viability, team strength, and more"
          />
          <ReceiveItem
            icon={<DocumentIcon className="size-6" />}
            title="Personalized AI Report"
            description="300-word strategic assessment written specifically for your startup, not generic templates"
          />
          <ReceiveItem
            icon={<CheckIcon className="size-6" />}
            title="Priority Action Plan"
            description="3 specific recommendations you can execute in the next 30 days"
          />
          <ReceiveItem
            icon={<BoltIcon className="size-6" />}
            title="Matched Services"
            description="See exactly how Void Studio can help based on your biggest gaps"
          />
        </div>
      </div>

      <div className="mt-12 rounded-[22px] border border-[#6633dc] bg-[#3d0f97] px-8 py-10 text-center">
        <div className="flex items-center justify-center gap-1 text-[#64dccf]">
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon key={index} className="size-6 fill-current" />
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-[980px] text-[clamp(1.35rem,2.6vw,2rem)] leading-[1.45] text-[#f3f4fd]">
          &ldquo;The MVP Validator gave me clarity I couldn&apos;t get from 10
          advisor meetings. The AI report pinpointed exactly where I was
          hand-waving and what to focus on next.&rdquo;
        </p>

        <p className="mt-6 text-[1.4rem] text-[#b8abd9]">
          - Sarah Chen, Founder @ LogisticsAI (Now raised £500k seed)
        </p>
      </div>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-[3rem] font-semibold leading-none text-[#5be0cf]">{value}</p>
      <p className="mt-3 text-[1.2rem] text-[#cbc0ee]">{label}</p>
    </div>
  );
}

function ReceiveItem({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#35107f] text-[#6d3cf0]">
        {icon}
      </div>
      <div>
        <h3 className="text-[1.95rem] font-semibold leading-[1.2] text-[#f2f3fc]">{title}</h3>
        <p className="mt-2 text-[1.15rem] leading-[1.45] text-[#d0c5f4]">{description}</p>
      </div>
    </div>
  );
}

type AssessmentPanelProps = {
  block: number;
  progress: number;
  canMoveNext: boolean;
  onBack: () => void;
  onNext: () => void;
  productProblem: string;
  setProductProblem: (value: string) => void;
  whoHasProblem: string;
  setWhoHasProblem: (value: string) => void;
  whyDifferent: string;
  setWhyDifferent: (value: string) => void;
  experiencedProblem: BlockOneChoice | null;
  setExperiencedProblem: (value: BlockOneChoice) => void;
  idealCustomer: string;
  setIdealCustomer: (value: string) => void;
  marketSize: MarketSizeChoice | null;
  setMarketSize: (value: MarketSizeChoice) => void;
  competitors: string;
  setCompetitors: (value: string) => void;
  currentStage: StageChoice | null;
  setCurrentStage: (value: StageChoice) => void;
  customerConversations: InterviewChoice | null;
  setCustomerConversations: (value: InterviewChoice) => void;
  earlyValidation: string;
  setEarlyValidation: (value: string) => void;
  biggestAssumption: string;
  setBiggestAssumption: (value: string) => void;
  teamSetup: TeamChoice | null;
  setTeamSetup: (value: TeamChoice) => void;
  techPartner: TechPartnerChoice | null;
  setTechPartner: (value: TechPartnerChoice) => void;
  buildTimeline: TimelineChoice | null;
  setBuildTimeline: (value: TimelineChoice) => void;
  successVision: string;
  setSuccessVision: (value: string) => void;
  biggestBlocker: BlockerChoice | null;
  setBiggestBlocker: (value: BlockerChoice) => void;
  partnerReadiness: PartnerChoice | null;
  setPartnerReadiness: (value: PartnerChoice) => void;
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  company: string;
  setCompany: (value: string) => void;
};

function AssessmentPanel(props: AssessmentPanelProps) {
  return (
    <div>
      <div className="flex items-center justify-between text-[1.08rem] font-semibold tracking-[0.07em] text-[#b7aae4]">
        <p>
          Block {props.block} of {TOTAL_BLOCKS}
        </p>
        <p>{props.progress}% Complete</p>
      </div>

      <div className="mt-4 h-2 rounded-full bg-[#6731d8]/45">
        <div
          className="h-full rounded-full bg-linear-to-r from-[#6f53ff] to-[#68d8ce] transition-all duration-300"
          style={{ width: `${props.progress}%` }}
        />
      </div>

      <div className="mt-12 rounded-[30px] border border-[#6633dc] bg-[#3f109d] p-6 sm:p-8 md:p-10">
        {props.block === 1 ? <BlockOneForm {...props} /> : null}
        {props.block === 2 ? <BlockTwoForm {...props} /> : null}
        {props.block === 3 ? <BlockThreeForm {...props} /> : null}
        {props.block === 4 ? <BlockFourForm {...props} /> : null}
        {props.block === 5 ? <BlockFiveForm {...props} /> : null}
      </div>

      <div className={cn("mt-10 grid gap-4", props.block === 1 ? "mx-auto max-w-[520px]" : "sm:grid-cols-2") }>
        {props.block > 1 ? (
          <button
            type="button"
            onClick={props.onBack}
            className="inline-flex h-16 items-center justify-center gap-3 rounded-2xl border border-[#6b3ddd] bg-[#4815ae] text-[1.15rem] font-semibold text-white transition-colors hover:bg-[#5420bc]"
          >
            <ArrowLeftIcon className="size-5" />
            Back
          </button>
        ) : null}

        <button
          type="button"
          onClick={props.onNext}
          disabled={!props.canMoveNext}
          className={cn(
            "inline-flex h-16 items-center justify-center gap-3 rounded-2xl border text-[1.15rem] font-semibold transition-colors",
            props.canMoveNext
              ? "border-[#6d42de] bg-[#4f1ab8] text-white hover:bg-[#5a24c6]"
              : "border-[#6541b9] bg-[#4d2b90] text-[#a596cf]",
            props.block === 1 && "sm:col-span-2",
          )}
        >
          {props.block === TOTAL_BLOCKS ? "Get My Assessment" : "Next Block"}
          <ArrowRightIcon className="size-5" />
        </button>
      </div>
    </div>
  );
}

function BlockOneForm(props: AssessmentPanelProps) {
  return (
    <div>
      <BlockHeader
        icon={<TargetIcon className="size-9 text-[#6f31f0]" />}
        title="Idea & Problem Fit"
        subtitle="Let\'s understand what you\'re building and why it matters"
      />

      <div className="mt-8 space-y-8">
        <TextAreaField
          label="What does your product do, and what specific problem does it solve? *"
          placeholder="e.g. We\'re building an AI-powered invoice reconciliation tool for small accounting firms that cuts manual processing time by 60%..."
          value={props.productProblem}
          onChange={props.setProductProblem}
        />

        <TextAreaField
          label="Who has this problem today, and how are they currently solving it? *"
          placeholder="e.g. Small accounting firms (5-15 staff) currently use a mix of Excel spreadsheets, manual bank statement checking, and basic accounting software..."
          value={props.whoHasProblem}
          onChange={props.setWhoHasProblem}
        />

        <TextAreaField
          label="Why does your solution win? What is fundamentally different? *"
          placeholder="e.g. Our AI learns from transaction patterns across all clients to automatically categorize and flag anomalies, not just match line items..."
          value={props.whyDifferent}
          onChange={props.setWhyDifferent}
        />

        <ChoiceGroup
          label="Have you personally experienced this problem? *"
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
            { value: "team", label: "Our team has" },
          ]}
          selected={props.experiencedProblem}
          onSelect={(value) => props.setExperiencedProblem(value as BlockOneChoice)}
        />
      </div>
    </div>
  );
}

function BlockTwoForm(props: AssessmentPanelProps) {
  return (
    <div>
      <BlockHeader
        icon={<TrendIcon className="size-9 text-[#6f31f0]" />}
        title="Market & ICP Clarity"
        subtitle="Understanding your market and ideal customer"
      />

      <div className="mt-8 space-y-8">
        <TextAreaField
          label="Who is your ideal first customer? Be as specific as possible. *"
          placeholder="e.g. Owner-operated accounting firms in the UK with 5-15 employees, managing 40-100 SME clients, frustrated with manual reconciliation..."
          value={props.idealCustomer}
          onChange={props.setIdealCustomer}
        />

        <ChoiceGroup
          label="What is the estimated size of your target market in the UK or EU? *"
          options={[
            { value: "lt1", label: "<£1M" },
            { value: "1to10", label: "£1M-10M" },
            { value: "10to100", label: "£10M-£100M" },
            { value: "100plus", label: "£100M+" },
          ]}
          selected={props.marketSize}
          onSelect={(value) => props.setMarketSize(value as MarketSizeChoice)}
        />

        <TextAreaField
          label="Who are your 2-3 closest competitors and what do they charge? *"
          placeholder="e.g. Xero (£25/mo + accountant fees), QuickBooks (£12-35/mo), Receipt Bank (£55-155/mo). All require significant manual setup..."
          value={props.competitors}
          onChange={props.setCompetitors}
        />
      </div>
    </div>
  );
}

function BlockThreeForm(props: AssessmentPanelProps) {
  return (
    <div>
      <BlockHeader
        icon={<BoltIcon className="size-9 text-[#6f31f0]" />}
        title="Traction & Validation"
        subtitle="Let\'s see what validation you\'ve done so far"
      />

      <div className="mt-8 space-y-8">
        <ChoiceGroup
          label="What stage are you currently at? *"
          options={[
            { value: "idea", label: "Idea only" },
            { value: "prototype", label: "Prototype" },
            { value: "waitlist", label: "Waitlist" },
            { value: "paying", label: "Paying users" },
            { value: "revenue", label: "Revenue" },
          ]}
          selected={props.currentStage}
          onSelect={(value) => props.setCurrentStage(value as StageChoice)}
        />

        <ChoiceGroup
          label="How many real potential customers (not friends/family) have you had structured conversations with? *"
          options={[
            { value: "0", label: "0" },
            { value: "1to5", label: "1-5" },
            { value: "6to20", label: "6-20" },
            { value: "20plus", label: "20+" },
          ]}
          selected={props.customerConversations}
          onSelect={(value) =>
            props.setCustomerConversations(value as InterviewChoice)
          }
        />

        <TextAreaField
          label="Do you have any early validation? (LOIs, waitlist, paid pilots, beta users)"
          placeholder="e.g. 45 people on waitlist, 2 LOIs from accounting firms willing to pilot, conducted 12 customer interviews..."
          value={props.earlyValidation}
          onChange={props.setEarlyValidation}
        />

        <TextAreaField
          label="What is the single biggest assumption your business depends on being true? *"
          placeholder="e.g. That accounting firm owners will pay £200/mo to save 10hrs/week of bookkeeping time..."
          value={props.biggestAssumption}
          onChange={props.setBiggestAssumption}
        />
      </div>
    </div>
  );
}

function BlockFourForm(props: AssessmentPanelProps) {
  return (
    <div>
      <BlockHeader
        icon={<UsersIcon className="size-9 text-[#6f31f0]" />}
        title="Team & Execution Readiness"
        subtitle="Understanding your team\'s ability to execute"
      />

      <div className="mt-8 space-y-8">
        <ChoiceGroup
          label="What does your founding team look like? *"
          options={[
            { value: "solo", label: "Solo" },
            { value: "cofounders", label: "Tech+Business co-founders" },
            { value: "full", label: "Full team" },
          ]}
          selected={props.teamSetup}
          onSelect={(value) => props.setTeamSetup(value as TeamChoice)}
        />

        <ChoiceGroup
          label="Do you have a technical co-founder or development partner in place? *"
          options={[
            { value: "inhouse", label: "Yes in-house" },
            { value: "outsourced", label: "Yes outsourced" },
            { value: "no", label: "No" },
          ]}
          selected={props.techPartner}
          onSelect={(value) => props.setTechPartner(value as TechPartnerChoice)}
        />

        <ChoiceGroup
          label="What is your current timeline to a first usable version of your product? *"
          options={[
            { value: "built", label: "Already built" },
            { value: "1to3", label: "1-3m" },
            { value: "3to6", label: "3-6m" },
            { value: "6plus", label: "6m+" },
            { value: "unsure", label: "Unsure" },
          ]}
          selected={props.buildTimeline}
          onSelect={(value) => props.setBuildTimeline(value as TimelineChoice)}
        />
      </div>
    </div>
  );
}

function BlockFiveForm(props: AssessmentPanelProps) {
  return (
    <div>
      <BlockHeader
        icon={<RocketIcon className="size-9 text-[#6f31f0]" />}
        title="Goals & Next Steps"
        subtitle="Final questions about your ambitions and needs"
      />

      <div className="mt-8 space-y-8">
        <TextAreaField
          label="What does success look like for you in 12 months? *"
          placeholder="e.g. 50 paying accounting firms using our product, £50k MRR, validated unit economics, raised seed round..."
          value={props.successVision}
          onChange={props.setSuccessVision}
        />

        <ChoiceGroup
          label="What is the primary thing holding you back from moving faster? *"
          options={[
            { value: "notech", label: "No tech resource" },
            { value: "nofunding", label: "No funding" },
            { value: "unclear", label: "Unclear strategy" },
            { value: "all", label: "All three" },
            { value: "other", label: "Other" },
          ]}
          selected={props.biggestBlocker}
          onSelect={(value) => props.setBiggestBlocker(value as BlockerChoice)}
          showTick
        />

        <ChoiceGroup
          label="Are you open to working with a development partner to accelerate your build? *"
          options={[
            { value: "yes", label: "Yes, actively looking" },
            { value: "possibly", label: "Possibly" },
            { value: "notnow", label: "Not right now" },
          ]}
          selected={props.partnerReadiness}
          onSelect={(value) => props.setPartnerReadiness(value as PartnerChoice)}
        />

        <div className="border-t border-[#5a2cc6] pt-8">
          <h3 className="text-[1.75rem] font-semibold text-[#f5f6ff]">
            Where should we send your results?
          </h3>

          <div className="mt-5 space-y-4">
            <InputField
              label="Your Name *"
              placeholder="John Smith"
              value={props.name}
              onChange={props.setName}
            />
            <InputField
              label="Email Address *"
              placeholder="john@startup.com"
              value={props.email}
              onChange={props.setEmail}
              type="email"
            />
            <InputField
              label="Company Name (optional)"
              placeholder="Your Startup Ltd"
              value={props.company}
              onChange={props.setCompany}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BlockHeader({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <h2 className="flex items-center gap-4 text-[clamp(2rem,4vw,3.45rem)] font-semibold leading-[1.14] text-[#f4f5ff]">
        {icon}
        {title}
      </h2>
      <p className="mt-5 text-[1.2rem] text-[#d5c9f8]">{subtitle}</p>
    </div>
  );
}

function TextAreaField({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-3 block text-[1.2rem] font-semibold text-[#f5f6ff]">
        {label}
      </label>
      <textarea
        rows={4}
        maxLength={TEXTAREA_MAX}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full resize-none rounded-2xl border border-[#6738dc] bg-[#4a16b6] px-5 py-4 text-[1.22rem] leading-[1.42] text-[#f3f4ff] outline-none placeholder:text-[#9f8cd9] focus:border-[#8f64ff]"
      />
      <p className="mt-2 text-right text-[0.96rem] text-[#b6a8e3]">
        {value.length}/{TEXTAREA_MAX}
      </p>
    </div>
  );
}

function InputField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email";
}) {
  return (
    <div>
      <label className="mb-3 block text-[1.15rem] font-semibold text-[#f5f6ff]">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-16 w-full rounded-2xl border border-[#6738dc] bg-[#4a16b6] px-5 text-[1.2rem] text-[#f3f4ff] outline-none placeholder:text-[#9f8cd9] focus:border-[#8f64ff]"
      />
    </div>
  );
}

function ChoiceGroup({
  label,
  options,
  selected,
  onSelect,
  showTick = false,
}: {
  label: string;
  options: Array<{ value: string; label: string }>;
  selected: string | null;
  onSelect: (value: string) => void;
  showTick?: boolean;
}) {
  return (
    <div>
      <p className="mb-4 text-[1.2rem] font-semibold text-[#f5f6ff]">{label}</p>
      <div className="space-y-3">
        {options.map((option) => {
          const isSelected = selected === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(option.value)}
              className={cn(
                "flex h-16 w-full items-center justify-between rounded-2xl border px-5 text-left text-[1.22rem] font-semibold transition-colors",
                isSelected
                  ? "border-[#8e64ff] bg-[#5821c9] text-[#f5f6ff]"
                  : "border-[#6738dc] bg-[#4a16b6] text-[#f1f3ff] hover:bg-[#5420c0]",
              )}
            >
              <span>{option.label}</span>
              {showTick && isSelected ? (
                <CheckIcon className="size-5 text-[#62decf]" />
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function AnalyzingPanel() {
  return (
    <div className="flex min-h-[62vh] flex-col items-center justify-center text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#5f34c9] bg-[#3a118e] text-[#6d3af1]">
        <SparklesIcon className="size-10" />
      </div>

      <h2 className="mt-10 text-[clamp(2.2rem,4.5vw,4.2rem)] font-semibold text-[#f5f6ff]">
        Analyzing Your Startup...
      </h2>
      <p className="mt-4 text-[1.65rem] text-[#5fdccf]">Identifying execution gaps...</p>

      <div className="mt-8 h-2 w-full max-w-[420px] overflow-hidden rounded-full bg-[#5b2fbf]">
        <div className="h-full w-2/3 rounded-full bg-linear-to-r from-[#6a48ff] to-[#64d8cf]" />
      </div>
    </div>
  );
}

function ReportPanel({
  report,
  email,
  onTakeAgain,
}: {
  report: ReportResult;
  email: string;
  onTakeAgain: () => void;
}) {
  const safeEmail = email.trim() || "founder@startup.com";

  return (
    <div>
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#6687b3] bg-[#2d2f78] px-6 py-2 text-[0.82rem] font-semibold tracking-[0.14em] text-[#69dccf]">
          <CheckCircleIcon className="size-4" />
          ASSESSMENT COMPLETE
        </div>

        <h1 className="mt-8 text-[clamp(2.6rem,5.4vw,5rem)] font-semibold leading-[1.1] text-[#f4f5ff]">
          Your MVP Validation Report
        </h1>
        <p className="mt-4 text-[1.3rem] text-[#d3c9f5]">
          {safeEmail}, here&apos;s your personalized startup assessment
        </p>
      </div>

      <div className="mt-12 rounded-[28px] border border-[#6633dc] bg-[#3f109d] px-6 py-10 sm:px-10">
        <p className="text-center text-[1rem] font-semibold tracking-[0.16em] text-[#b9acdf]">
          OVERALL READINESS SCORE
        </p>

        <div className="mt-8 flex flex-col items-center gap-8">
          <ReadinessRing score={report.readinessScore} />
          <span className="rounded-full bg-[#2d0f73] px-8 py-2 text-[2rem] font-semibold text-[#f4f5ff]">
            {report.stage}
          </span>
          <p className="text-center text-[2rem] text-[#ddd1fb]">{report.summary}</p>
        </div>
      </div>

      <div className="mt-12 rounded-[28px] border border-[#6633dc] bg-[#3f109d] px-6 py-10 sm:px-10">
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold text-[#f3f4ff]">
          6-Dimension Analysis
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {report.dimensions.map((item) => (
            <DimensionCard key={item.title} item={item} />
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-[28px] border border-[#6633dc] bg-[#3f109d] px-6 py-10 sm:px-10">
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold text-[#f3f4ff]">
          Your Personalized Assessment
        </h2>

        <div className="mt-8 space-y-7 text-[1.95rem] leading-[1.45] text-[#e2d8fc]">
          <p>{report.intro}</p>
          <p>{report.gap}</p>
          <p>{report.risk}</p>
        </div>

        <h3 className="mt-9 text-[2.1rem] font-semibold text-[#f3f4ff]">
          Priority Recommendations (Next 30 Days):
        </h3>

        <div className="mt-6 space-y-5">
          {report.recommendations.map((recommendation, index) => (
            <div key={recommendation} className="flex items-start gap-4">
              <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#381091] text-[1.3rem] font-semibold text-[#6e42ef]">
                {index + 1}
              </span>
              <p className="text-[1.85rem] leading-[1.45] text-[#ece3ff]">
                {recommendation}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-[28px] border border-[#6633dc] bg-[#3f109d] px-6 py-10 sm:px-10">
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold text-[#f3f4ff]">
          How Void Studio Can Help
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <HelpCard
            title="Product Strategy & Discovery Workshop"
            description="Refine your ICP, validate assumptions, and build a clear product roadmap"
            chip="2-4 week sprint"
          />
          <HelpCard
            title="Rapid MVP Build Programme"
            description="Get from concept to market-ready product in 8-12 weeks"
            chip="8-12 week build"
          />
        </div>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <CtaCard
          icon={<CalendarIcon className="size-9" />}
          title="Book Discovery Call"
          description="30-minute strategy session to discuss your assessment and next steps"
          cta="Schedule now"
          ctaColor="white"
        />
        <CtaCard
          icon={<DownloadIcon className="size-9" />}
          title="Download PDF Report"
          description={`Full assessment report emailed to ${safeEmail}`}
          cta="Get PDF"
          ctaColor="cyan"
        />
      </div>

      <div className="pb-2 pt-10 text-center">
        <button
          type="button"
          onClick={onTakeAgain}
          className="text-[1.6rem] font-medium text-[#c8bbef] underline underline-offset-4 hover:text-[#e9ddff]"
        >
          Take assessment again
        </button>
      </div>
    </div>
  );
}

function ReadinessRing({ score }: { score: number }) {
  const degree = Math.max(0, Math.min(100, score)) * 3.6;

  return (
    <div className="relative h-[240px] w-[240px]">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(#8b5dff ${degree}deg, rgba(90,38,197,0.9) ${degree}deg)`,
        }}
      />
      <div className="absolute inset-[20px] rounded-full bg-[#3f109d]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <p className="text-[4.4rem] font-semibold leading-none">{score}</p>
        <p className="mt-1 text-[1.3rem] text-[#b8addd]">/ 100</p>
      </div>
    </div>
  );
}

function DimensionCard({ item }: { item: DimensionResult }) {
  return (
    <div className="rounded-2xl bg-[#341084] px-5 py-5">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-[1.55rem] font-semibold text-[#f4f5ff]">{item.title}</h3>
        <div className="flex items-center gap-3">
          <div className="h-2 w-26 rounded-full bg-[#4f2ba8]">
            <div
              className={cn(
                "h-full rounded-full",
                item.color === "purple" && "bg-[#8c5dff]",
                item.color === "amber" && "bg-[#f1ba4f]",
                item.color === "cyan" && "bg-[#67dbcf]",
              )}
              style={{ width: `${item.score * 10}%` }}
            />
          </div>
          <p className="text-[1.45rem] font-semibold text-[#f4f5ff]">
            {item.score}/10
          </p>
        </div>
      </div>
      <p className="mt-3 text-[1.15rem] leading-[1.42] text-[#d7cdf8]">
        {item.description}
      </p>
    </div>
  );
}

function HelpCard({
  title,
  description,
  chip,
}: {
  title: string;
  description: string;
  chip: string;
}) {
  return (
    <div className="rounded-2xl border border-[#5a2dc4] bg-[#341084] px-6 py-7">
      <h3 className="text-[2rem] font-semibold leading-[1.2] text-[#f4f5ff]">{title}</h3>
      <p className="mt-3 text-[1.2rem] leading-[1.4] text-[#d4c7f6]">{description}</p>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-[1.15rem] font-semibold tracking-[0.06em] text-[#67dace]">
          {chip}
        </p>
        <Link href="/services" className="text-[1.2rem] font-semibold text-[#6f35f1]">
          Learn more →
        </Link>
      </div>
    </div>
  );
}

function CtaCard({
  icon,
  title,
  description,
  cta,
  ctaColor,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  cta: string;
  ctaColor: "white" | "cyan";
}) {
  return (
    <div className="rounded-[22px] border border-[#e7e5ff] bg-[#4511aa] px-7 py-8">
      <div className={cn("text-[#f1f2ff]", ctaColor === "cyan" && "text-[#6bdfd0]")}>{icon}</div>
      <h3 className="mt-6 text-[2.2rem] font-semibold text-[#f3f4ff]">{title}</h3>
      <p className="mt-3 text-[1.2rem] leading-[1.4] text-[#d4c7f6]">{description}</p>
      <button
        type="button"
        className={cn(
          "mt-6 inline-flex items-center gap-3 text-[1.45rem] font-semibold",
          ctaColor === "white" ? "text-white" : "text-[#66dbcd]",
        )}
      >
        {cta}
        <ArrowRightIcon className="size-5" />
      </button>
    </div>
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

function BoltIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M13.6 2.8 5.9 13h5.6l-1.1 8.2 7.8-10.2h-5.5l.9-8.2Z" />
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

function DocumentIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M7 3.8h7l3.2 3.2v13.2H7z" />
      <path d="M14 3.8V7h3.2M9.4 11.2h5.2M9.4 14.2h5.2M9.4 17.2h4" />
    </svg>
  );
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m5.5 12.4 4.2 4.1 8.8-9.1" />
    </svg>
  );
}

function CheckCircleIcon(props: SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="9" />
      <path d="m8.2 12.4 2.4 2.4 5.2-5.3" />
    </svg>
  );
}

function CalendarIcon(props: SVGProps<SVGSVGElement>) {
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
      <rect x="3.5" y="5.5" width="17" height="15" rx="2.5" />
      <path d="M8 3.5v4M16 3.5v4M3.5 10h17" />
    </svg>
  );
}

function DownloadIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M12 3.5v10" />
      <path d="m8 10.5 4 4 4-4" />
      <path d="M4.5 14.5V18a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-3.5" />
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

function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="none" {...props}>
      <path d="m12 2.6 2.7 5.5 6 1-4.4 4.3 1 6-5.3-2.8-5.3 2.8 1-6L3.3 9l6-1L12 2.6Z" />
    </svg>
  );
}
