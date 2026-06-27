// Central content for the ViramTech enterprise-AI site.

export const TAGLINE =
  "Transforming Enterprise Operations with Intelligent AI Solutions";

// ① The Enterprise AI Gap
export const gaps = [
  {
    title: "Data trapped in silos",
    body: "Enterprises struggle to integrate fragmented data scattered across systems.",
  },
  {
    title: "Manual, repetitive work",
    body: "Skilled teams lose hours to repetitive tasks that should be automated.",
  },
  {
    title: "AI without ROI",
    body: "Most AI investments fail to deliver measurable, bottom-line returns.",
  },
  {
    title: "Fragmented tooling",
    body: "A patchwork of point solutions only adds cost and complexity.",
  },
];

// ② Our Vision
export const vision = [
  {
    title: "AI-native architecture",
    body: "Mathematically rigorous and AI-native by design — not bolted onto legacy systems.",
  },
  {
    title: "Enterprise ready",
    body: "Security and scalability are built in from the first line of code.",
  },
  {
    title: "Results driven",
    body: "Every engagement is anchored to measurable ROI, not vanity metrics.",
  },
];

// ③ Technology Foundation
export const foundation = [
  {
    title: "AI / ML Capabilities",
    items: [
      "Natural Language Processing",
      "Computer Vision",
      "Speech Recognition",
      "Predictive Analytics",
      "Agentic AI Systems",
    ],
  },
  {
    title: "Infrastructure",
    items: [
      "Multi-cloud (AWS, GCP, Azure)",
      "DevOps & CI/CD",
      "Scalable Microservices",
      "Enterprise Security",
    ],
  },
  {
    title: "AI Frameworks",
    items: [
      "LangChain",
      "Custom LLM integration",
      "Open-source models",
      "Fine-tuning pipelines",
    ],
  },
];

// ④–⑩ Products / Solutions
export type Product = {
  slug: string;
  name: string;
  kicker: string;
  summary: string;
  features: string[];
  useCases: string;
  icon: string;
};

export const products: Product[] = [
  {
    slug: "dataforge",
    name: "DataForge",
    kicker: "Talk with your data",
    summary:
      "Turn raw data into actionable insight through natural-language conversations.",
    features: [
      "Natural-language queries across all data sources",
      "Real-time analytics & visualization",
      "Multi-source data integration",
      "Automated report generation",
    ],
    useCases:
      "Banks analyzing customer behavior, retail forecasting trends, healthcare extracting patient insights.",
    icon: "💬",
  },
  {
    slug: "predictive-demand-intelligence",
    name: "Predictive Demand Intelligence",
    kicker: "AI-driven forecasting",
    summary:
      "Advanced ML models for accurate demand prediction and inventory optimization.",
    features: [
      "Multivariate trend analysis",
      "Supply-chain optimization",
      "Real-time forecast adjustments",
      "Risk assessment & scenario modelling",
    ],
    useCases:
      "Retail inventory optimization, manufacturing planning, logistics capacity management.",
    icon: "📈",
  },
  {
    slug: "document-intelligence-suite",
    name: "Document Intelligence Suite",
    kicker: "Classification & extraction",
    summary:
      "Automated document processing that extracts, classifies and validates information.",
    features: [
      "Intelligent document classification",
      "High-accuracy data extraction",
      "Workflow integration & compliance",
      "Automated validation & error detection",
    ],
    useCases:
      "Financial loan processing, legal contract analysis, healthcare claims — 90% faster processing.",
    icon: "📄",
  },
  {
    slug: "predictive-maintenance-ai",
    name: "Predictive Maintenance AI",
    kicker: "Industrial IoT & ML",
    summary:
      "Prevent equipment failures and optimize maintenance using predictive analytics.",
    features: [
      "Real-time sensor data analysis",
      "Failure prediction with high accuracy",
      "Maintenance schedule optimization",
      "Cost-benefit analysis & ROI tracking",
    ],
    useCases:
      "Manufacturing reducing downtime by 40%, utilities extending asset life, fleet optimization.",
    icon: "🛰️",
  },
  {
    slug: "enterprise-content-studio",
    name: "Enterprise Content Studio",
    kicker: "AI-powered content creation",
    summary:
      "Generate high-quality, brand-aligned content at scale with advanced generative AI.",
    features: [
      "Multi-format content generation",
      "Brand-voice consistency",
      "Content performance analytics",
      "Multi-language support with localization",
    ],
    useCases:
      "Marketing teams scaling content 10×, e-commerce product descriptions.",
    icon: "✍️",
  },
  {
    slug: "whatsapp-ai-reach",
    name: "WhatsApp AI Reach",
    kicker: "Intelligent lead generation",
    summary:
      "An AI conversational-marketing platform for enterprise sales and customer acquisition.",
    features: [
      "Automated personalized outreach at scale",
      "Intelligent lead qualification",
      "Multi-lingual support with cultural context",
      "CRM & marketing-automation integration",
    ],
    useCases:
      "Banks promoting products, insurance lead nurturing, retail campaigns — 90% lower prospecting cost.",
    icon: "🟢",
  },
  {
    slug: "agentic-ai-platform",
    name: "Agentic AI Platform",
    kicker: "Autonomous intelligent agents",
    summary:
      "Deploy AI agents that autonomously execute complex, multi-step tasks across your enterprise.",
    features: [
      "Custom LLM-powered agents",
      "Multi-agent collaboration",
      "Enterprise system integration",
      "Continuous learning & optimization",
    ],
    useCases:
      "Customer support hitting 80% resolution, sales agents qualifying leads 24/7, HR streamlining onboarding.",
    icon: "🤖",
  },
];

// ⑪ Market Opportunity
export const marketStats = [
  { value: "$150B+", label: "Global enterprise AI market" },
  { value: "88%", label: "Enterprises going AI-first" },
  { value: "62%", label: "Adopting agentic AI" },
  { value: "2028", label: "Autonomous decisions go mainstream" },
];

// ⑫ Target Sectors
export const sectors = [
  {
    name: "Retail & E-commerce",
    icon: "🛍️",
    points: ["Demand forecasting", "Personalization", "Inventory optimization"],
  },
  {
    name: "Logistics",
    icon: "🚚",
    points: ["Route optimization", "Demand prediction", "Fleet management"],
  },
  {
    name: "Banking & Financial Services",
    icon: "🏦",
    points: ["Product marketing", "Fraud detection", "Analytics"],
  },
  {
    name: "Healthcare",
    icon: "🩺",
    points: ["Document processing", "Patient analytics", "Operations"],
  },
  {
    name: "Manufacturing",
    icon: "🏭",
    points: ["Predictive maintenance", "Supply chain", "Quality control"],
  },
  {
    name: "Insurance",
    icon: "🛡️",
    points: ["Claims processing", "Risk assessment", "Engagement"],
  },
];

// ⑬ Why ViramTech Wins
export const whyUs = [
  {
    title: "Speed to value",
    body: "Pre-built solutions deployed in weeks, not months.",
  },
  {
    title: "Industry expertise",
    body: "Deep domain knowledge across key verticals.",
  },
  {
    title: "Full-stack control",
    body: "End-to-end ownership from data to deployment.",
  },
  {
    title: "Proven ROI",
    body: "Documented efficiency gains with real clients.",
  },
];

// ⑭ Technical Architecture (top → bottom)
export const architecture = [
  {
    layer: "Presentation Layer",
    items: ["Web & mobile apps", "APIs", "WhatsApp integration"],
  },
  {
    layer: "AI / ML Layer",
    items: ["LLMs", "NLP models", "Computer vision", "Predictive analytics"],
  },
  {
    layer: "Integration Layer",
    items: ["LangChain", "API gateway", "Message queues", "Webhooks"],
  },
  {
    layer: "Data Layer",
    items: ["Vector DBs", "SQL / NoSQL", "Data lakes", "Real-time streams"],
  },
  {
    layer: "Infrastructure",
    items: ["Multi-cloud (AWS / GCP / Azure)", "Kubernetes", "Monitoring"],
  },
];

// ⑮ Go-To-Market Strategy
export const roadmap = [
  {
    phase: "Phase 1",
    period: "Q1–Q2 2026",
    title: "Pilot programs",
    items: [
      "Target 5–10 enterprise pilots",
      "Prove ROI with flagship products",
      "Build case studies",
    ],
  },
  {
    phase: "Phase 2",
    period: "Q3–Q4 2026",
    title: "Scale & expand",
    items: [
      "Launch the full product suite",
      "Expand to 50+ customers",
      "Build a partner ecosystem",
    ],
  },
  {
    phase: "Phase 3",
    period: "2027",
    title: "Market leadership",
    items: [
      "Geographic expansion",
      "Vertical-specific solutions",
      "AI research lab",
    ],
  },
];
