import type { ReactElement, SVGProps } from "react";
import {
  CalculatorIcon,
  ChartIcon,
  CodeIcon,
  RobotIcon,
  RouteIcon,
  ScaleIcon,
} from "@/components/site/icons";

export type IconComponent = (props: SVGProps<SVGSVGElement>) => ReactElement;

export type NavItem = {
  label: string;
  href: string;
};

export type OperationalCardItem = {
  chip: string;
  title: string;
  description: string;
};

export type ServiceCardItem = {
  icon: IconComponent;
  title: string;
  description: string;
  highlighted?: boolean;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type CaseStudyItem = {
  sector: string;
  title: string;
  metrics: [string, string, string];
  tags: string[];
  highlighted?: boolean;
};

export type TeamMemberCard = {
  name: string;
  role: string;
  avatar: "purple" | "teal" | "blue";
  wide?: boolean;
};

export type TeamStat = {
  label: string;
  value: string;
};

export type PricingTier = {
  title: string;
  price: string;
  description: string;
  highlighted?: boolean;
};

export type FooterColumn = {
  title: string;
  links: string[];
};

export type DetailedServiceItem = {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  range: string;
};

export type AboutStat = {
  value: string;
  label: string;
};

export type BeliefCard = {
  title: string;
  description: string;
  icon:
    | "target"
    | "bolt"
    | "users"
    | "brain"
    | "code"
    | "badge";
};

export type AudienceCard = {
  title: string;
  description: string;
  sectors: string;
};

export type AboutProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type TeamPageStat = {
  value: string;
  label: string;
};

export type TeamCoreMember = {
  name: string;
  role: string;
  description: string;
  tags: string[];
  socials: Array<"linkedin" | "github" | "twitter">;
};

export type TeamExpertiseCard = {
  title: string;
  description: string;
  bullets: string[];
  icon: "code" | "brain" | "shield" | "palette" | "trend" | "users";
};

export const navItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/#case-studies" },
  { label: "MVP Validator", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "For Startups", href: "/#industries" },
];

export const operationalCards: OperationalCardItem[] = [
  {
    chip: "15-20 hrs/week",
    title: "Lost to Manual Work",
    description:
      "Staff copying data between systems, chasing invoices, reconciling transactions manually",
  },
  {
    chip: "£25k-£80k/year",
    title: "Hidden Operational Costs",
    description:
      "Inefficiencies you can't see: duplicate data entry, process delays, human error corrections",
  },
  {
    chip: "3-5 systems",
    title: "That Don't Talk to Each Other",
    description:
      "Accounting, CRM, spreadsheets, WhatsApp — critical insights lost in the gaps",
  },
];

export const serviceCards: ServiceCardItem[] = [
  {
    icon: RobotIcon,
    title: "AI Automation & Agents",
    description:
      "Intelligent AI agents that handle customer service, lead generation, and workflow automation 24/7.",
  },
  {
    icon: CalculatorIcon,
    title: "Accounting & Financial Automation",
    description:
      "Cut bookkeeping time by 60% with AI-powered transaction intelligence and anomaly detection.",
  },
  {
    icon: ScaleIcon,
    title: "eLegal — Law Firm Practice Management",
    description:
      "SRA-compliant practice management platform with built-in AML compliance, Legal Aid billing, and AI-powered legal assistant.",
  },
  {
    icon: CodeIcon,
    title: "Custom Software Development",
    description:
      "Bespoke platforms built around your exact workflows—from fleet management to clinic booking.",
  },
  {
    icon: RouteIcon,
    title: "Fleet & Logistics Platforms",
    description:
      "Real-time tracking, route optimization, and intelligent dispatch systems for transport operations.",
    highlighted: true,
  },
  {
    icon: ChartIcon,
    title: "Data & Business Intelligence",
    description:
      "Transform raw data into actionable insights with custom dashboards and predictive analytics.",
  },
];

export const industries = [
  "Accounting Firms",
  "Professional Services",
  "Hospitality & Restaurants",
  "Healthcare Admin",
  "Finance & FinTech",
  "Aviation & Aerospace",
  "Manufacturing",
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "We map your current operations and identify automation opportunities",
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "Bespoke AI systems and software engineered for your specific workflows",
  },
  {
    number: "03",
    title: "Deploy & Optimise",
    description:
      "Live deployment with ongoing support, monitoring and iteration",
  },
];

export const whyUsPoints = [
  "Custom-built — no off-the-shelf SaaS reselling",
  "Deep vertical expertise in logistics, finance, and professional services",
  "AI-native from the ground up — not bolted on",
  "Full lifecycle ownership from audit to deployment to support",
];

export const caseStudies: CaseStudyItem[] = [
  {
    sector: "LOGISTICS & FLEET",
    title: "AI-Powered Fleet Management",
    metrics: ["40% faster dispatch", "28% fleet utilization", "£180k saved/year"],
    tags: ["AI Automation", "Custom Software", "Data & BI"],
  },
  {
    sector: "PROFESSIONAL SERVICES",
    title: "Accounting Automation Suite",
    metrics: ["65% less bookkeeping time", "40+ clients automated", "20hrs/week saved"],
    tags: ["Accounting Automation", "AI Automation"],
    highlighted: true,
  },
  {
    sector: "HOSPITALITY",
    title: "Multi-Location Booking Platform",
    metrics: [
      "25% table turnover increase",
      "60% fewer no-shows",
      "8 locations unified",
    ],
    tags: ["Custom Software", "AI Automation"],
  },
  {
    sector: "MANUFACTURING",
    title: "Production Analytics Platform",
    metrics: ["15% throughput improvement", "22% waste reduction", "£250k saved/year"],
    tags: ["Data & BI", "Custom Software"],
  },
];

export const teamStats: TeamStat[] = [
  { label: "Core Team", value: "8 makers" },
  { label: "Combined Experience", value: "15+ years" },
  { label: "Projects Delivered", value: "50+" },
  { label: "Client Satisfaction", value: "100%" },
];

export const teamMembers: TeamMemberCard[] = [
  { name: "Alex M.", role: "Technical Lead", avatar: "purple" },
  { name: "Sarah C.", role: "Product Designer", avatar: "teal" },
  { name: "James P.", role: "Full-Stack Dev", avatar: "blue" },
  { name: "Emily R.", role: "AI Engineer", avatar: "purple" },
  { name: "Michael F.", role: "DevOps Lead", avatar: "teal" },
  { name: "Sophie A.", role: "Product Strategy", avatar: "blue", wide: true },
];

export const pricingTiers: PricingTier[] = [
  {
    title: "Project",
    price: "£500 - £5k",
    description: "One-time automation projects and process improvements",
  },
  {
    title: "Retainer",
    price: "£100 - £400/mo",
    description: "Ongoing support, maintenance, and iterative improvements",
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "Full-scale digital transformation and platform development",
    highlighted: true,
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      "AI Automation",
      "Accounting Automation",
      "eLegal",
      "Custom Software",
      "Data & BI",
      "Consulting",
    ],
  },
  {
    title: "Company",
    links: ["About", "Work", "For Startups", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];

export const detailedServices: DetailedServiceItem[] = [
  {
    number: "01",
    title: "AI Automation & Autonomous Agents",
    description:
      "Deploy intelligent AI agents that handle customer service, sales outreach, and complex workflow automation autonomously. From voice assistants to email processors, we build agents that work 24/7.",
    bullets: [
      "AI Customer Service & Voice Agents",
      "AI Sales & Lead Generation Automation",
      "Email & Document Processing",
      "Workflow Orchestration & Integration",
      "Multi-channel Communication (Voice, SMS, WhatsApp)",
    ],
    tags: ["Professional Services", "Hospitality", "Logistics", "Healthcare"],
    range: "£2k - £15k setup",
  },
  {
    number: "02",
    title: "Accounting & Financial Automation",
    description:
      "Cut bookkeeping time by 60%+ with AI-powered transaction intelligence, automated reconciliation, and real-time anomaly detection. Built specifically for accounting firms and finance teams.",
    bullets: [
      "Context-Aware Transaction Intelligence",
      "AI-Generated Monthly Reports",
      "Cross-Client Anomaly Detection",
      "Smart Document Validation & OCR",
      "MTD & VAT Compliance Automation",
    ],
    tags: ["Accounting Firms", "Finance", "Professional Services"],
    range: "£3k - £12k setup",
  },
  {
    number: "03",
    title: "eLegal — Law Firm Practice Management",
    description:
      "Purpose-built, AI-native practice management platform for UK law firms. SRA-compliant case management with built-in AML compliance, Legal Aid (CCMS) billing, client portals, and AI-powered legal assistant. Designed for SME solicitors who need enterprise-grade compliance without enterprise pricing.",
    bullets: [
      "SRA-Compliant Case Management",
      "AML & Compliance Workflows",
      "Legal Aid (CCMS) Billing",
      "Client Portal & Matter Tracking",
      "Time Recording & Billing Automation",
    ],
    tags: ["Law Firms", "Legal Services", "Solicitors", "Barristers"],
    range: "£5k - £20k setup",
  },
  {
    number: "04",
    title: "Custom Software Development",
    description:
      "Bespoke platforms engineered around your exact workflows. No templates, no compromises. From restaurant management systems to fleet tracking dashboards — if you need it, we build it.",
    bullets: [
      "Full-Stack Web Applications",
      "Custom CRM & ERP Systems",
      "API Development & Integration",
      "Mobile-Responsive Dashboards",
      "Real-Time Data Synchronization",
    ],
    tags: ["All Industries", "Hospitality", "Healthcare", "Logistics"],
    range: "£2k - £25k project",
  },
  {
    number: "05",
    title: "Data & Business Intelligence",
    description:
      "Transform raw operational data into actionable insights. Custom BI dashboards, predictive analytics, and real-time reporting that actually drive decisions.",
    bullets: [
      "Custom BI Dashboard Development",
      "Predictive Analytics & Forecasting",
      "Data Pipeline Engineering",
      "Real-Time KPI Monitoring",
      "Advanced Visualisation & Reporting",
    ],
    tags: ["Logistics", "Finance", "Retail", "Manufacturing"],
    range: "£1.5k - £10k project",
  },
  {
    number: "06",
    title: "Compliance & Governance",
    description:
      "Build compliant-by-design operations with audit-ready workflows and policy automation. Reduce risk while keeping teams fast and accountable.",
    bullets: [
      "Risk & Control Monitoring",
      "Audit Trail & Documentation",
      "Policy Workflow Automation",
      "Compliance Alerting & Escalation",
      "Regulatory Reporting Automation",
    ],
    tags: ["Finance", "Healthcare", "Legal", "Government"],
    range: "£800 - £5k audit",
  },
  {
    number: "07",
    title: "Consulting & Retainer Services",
    description:
      "Ongoing strategic support, maintenance, and iterative improvements. From fractional CTO advisory to monthly dev hours — we scale with your needs.",
    bullets: [
      "Fractional CTO & Strategy Consulting",
      "Technical Architecture Review",
      "Ongoing Maintenance & Support",
      "Sprint-Based Feature Development",
      "Technology Stack Optimisation",
    ],
    tags: ["Startups", "SMEs", "Growing Businesses"],
    range: "£100 - £400/month",
  },
];

export const aboutStats: AboutStat[] = [
  { value: "2021", label: "Founded" },
  { value: "50+", label: "Projects Delivered" },
  { value: "35+", label: "Happy Clients" },
  { value: "£2.4M", label: "Client ROI Generated" },
];

export const beliefCards: BeliefCard[] = [
  {
    title: "Outcomes Over Technology",
    description:
      "We do not care about using the latest shiny framework. We care about solving your problem and delivering measurable ROI.",
    icon: "target",
  },
  {
    title: "Speed Matters",
    description:
      "SMEs move fast. We match that pace. No 6-month discovery phases. We ship working software in weeks, not quarters.",
    icon: "bolt",
  },
  {
    title: "Partnership, Not Vendors",
    description:
      "We are not here to throw code over the fence. We become an extension of your team and care about your success.",
    icon: "users",
  },
  {
    title: "AI is a Tool, Not Magic",
    description:
      "We are pragmatic about AI. Sometimes a simple automation beats a complex AI model. We build what actually works.",
    icon: "brain",
  },
  {
    title: "No Vendor Lock-In",
    description:
      "You own your code. You own your data. We use open standards and never hold your business hostage.",
    icon: "code",
  },
  {
    title: "Quality Without Bloat",
    description:
      "Enterprise-grade architecture and security without the enterprise bureaucracy, timelines, or price tags.",
    icon: "badge",
  },
];

export const audienceCards: AudienceCard[] = [
  {
    title: "Ambitious SMEs (10-100 employees)",
    description:
      "You have outgrown spreadsheets and off-the-shelf SaaS is not cutting it. You need custom solutions but do not have enterprise budgets.",
    sectors: "Logistics, professional services, hospitality, manufacturing",
  },
  {
    title: "Startups (Pre-Seed to Series A)",
    description:
      "You need to move fast, prove traction, and build scalable systems without burning cash on a full in-house tech team.",
    sectors: "FinTech, PropTech, HealthTech, B2B SaaS",
  },
  {
    title: "Accounting & Finance Firms",
    description:
      "You want to automate client work, improve margins, and offer more value with the same headcount.",
    sectors: "Practices with 5-100 clients looking to scale",
  },
  {
    title: "Established Businesses Going Digital",
    description:
      "You have been running on legacy systems or manual processes and need to modernize without disrupting operations.",
    sectors: "Traditional businesses embracing digital transformation",
  },
];

export const aboutProcessSteps: AboutProcessStep[] = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "Free 30-minute call to understand your challenge and explore if we are a good fit.",
  },
  {
    number: "02",
    title: "Proposal & Scoping",
    description:
      "Detailed scope, timeline, and fixed-price quote. No hidden fees or scope creep.",
  },
  {
    number: "03",
    title: "Sprint-Based Delivery",
    description:
      "Weekly demos and continuous feedback. You see progress every week, not at the end.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Smooth deployment, training, and ongoing support. We are here after go-live.",
  },
];

export const teamPageStats: TeamPageStat[] = [
  { value: "8", label: "Core Team Members" },
  { value: "50+", label: "Projects Delivered" },
  { value: "15+", label: "Years Combined Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

export const teamCoreMembers: TeamCoreMember[] = [
  {
    name: "Alex Morrison",
    role: "Founder & Technical Lead",
    description:
      "Full-stack engineer with 8+ years building SaaS products. Previously led engineering at a Series B FinTech startup. Specializes in AI/ML integration and scalable architectures.",
    tags: ["System Architecture", "AI/ML", "Team Leadership"],
    socials: ["linkedin", "github", "twitter"],
  },
  {
    name: "Sarah Chen",
    role: "Lead Product Designer",
    description:
      "Product designer who bridges business goals and user needs. Former design lead at award-winning B2B SaaS companies. Expert in design systems and conversion optimization.",
    tags: ["UI/UX Design", "Design Systems", "User Research"],
    socials: ["linkedin", "twitter"],
  },
  {
    name: "James Patel",
    role: "Senior Full-Stack Engineer",
    description:
      "Polyglot developer who loves solving complex problems with elegant code. Built MVPs for 15+ startups. Expert in React, Node.js, and cloud infrastructure.",
    tags: ["React", "Node.js", "DevOps"],
    socials: ["linkedin", "github"],
  },
  {
    name: "Emily Roberts",
    role: "AI & Data Engineer",
    description:
      "Specialist in intelligent automation, data pipelines, and production-ready ML implementations for SME operations teams.",
    tags: ["AI Agents", "Data Engineering", "Automation"],
    socials: ["linkedin", "github"],
  },
  {
    name: "Michael Foster",
    role: "DevOps & Security Lead",
    description:
      "Infrastructure and security expert ensuring reliable deployments, observability, and compliance-ready architectures from day one.",
    tags: ["AWS", "Security", "CI/CD"],
    socials: ["linkedin", "github"],
  },
  {
    name: "Sophie Anderson",
    role: "Product Strategist",
    description:
      "Connects business strategy to execution with clear roadmaps, measurable outcomes, and practical delivery plans.",
    tags: ["Roadmaps", "Discovery", "Product Ops"],
    socials: ["linkedin", "twitter"],
  },
];

export const teamExpertiseCards: TeamExpertiseCard[] = [
  {
    title: "Full-Stack Development",
    description:
      "React, Node.js, Python, PostgreSQL, MongoDB. We build modern, scalable web applications with best practices.",
    bullets: [
      "React & Next.js",
      "Node.js & Express",
      "Database Design",
      "API Development",
    ],
    icon: "code",
  },
  {
    title: "AI & Machine Learning",
    description:
      "GPT integration, computer vision, NLP, and custom ML models. Making AI practical for business.",
    bullets: ["GPT-4 Integration", "Computer Vision", "NLP", "Data Science"],
    icon: "brain",
  },
  {
    title: "Security & Compliance",
    description:
      "GDPR, FCA, ISO 27001, penetration testing. Enterprise-grade security without enterprise complexity.",
    bullets: ["GDPR Compliance", "Security Audits", "Encryption", "Access Control"],
    icon: "shield",
  },
  {
    title: "Product Design",
    description:
      "User research, UI/UX design, prototyping, and conversion optimization. Design that drives results.",
    bullets: ["UI/UX Design", "User Research", "Figma & Design Systems", "A/B Testing"],
    icon: "palette",
  },
  {
    title: "Product Strategy",
    description:
      "MVP definition, roadmap planning, feature prioritization. Strategic guidance for product success.",
    bullets: ["Product Roadmaps", "User Stories", "Market Research", "KPI Definition"],
    icon: "trend",
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "AWS, Docker, Kubernetes, CI/CD. Reliable, scalable infrastructure that grows with you.",
    bullets: ["AWS & Cloud", "CI/CD Pipelines", "Monitoring", "Performance"],
    icon: "users",
  },
];
