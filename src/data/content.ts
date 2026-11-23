export const processSteps = [
  {
    number: "01",
    title: "Understand",
    detail: "Clarify the business problem, users, goals, and project scope.",
  },
  {
    number: "02",
    title: "Design",
    detail: "Map the experience and explore the interface or solution architecture.",
  },
  {
    number: "03",
    title: "Build",
    detail: "Develop the agreed solution with reviewable milestones.",
  },
  {
    number: "04",
    title: "Launch & Improve",
    detail: "Test, release, document, and agree on any ongoing improvements.",
  },
] as const;

export const reasons = [
  {
    number: "01",
    title: "Solutions shaped around actual workflows",
    detail:
      "We start from the work people already do, then decide what software or automation should change.",
  },
  {
    number: "02",
    title: "Design and engineering considered together",
    detail:
      "Interface, content, and implementation are planned as one piece so the result is usable as well as functional.",
  },
  {
    number: "03",
    title: "Clear scope and communication",
    detail:
      "You can see what is included, what can wait, and what we need from you at each milestone.",
  },
  {
    number: "04",
    title: "Integration with existing systems where appropriate",
    detail:
      "New work can sit beside the tools you already rely on, when a sound connection is available.",
  },
  {
    number: "05",
    title: "Maintainable implementation",
    detail: "The build is structured so a future change has a sensible place to land.",
  },
  {
    number: "06",
    title: "Documentation and handover agreed in scope",
    detail:
      "The notes, access, and walkthrough needed to run the work are part of what the project agrees to deliver.",
  },
] as const;

export const faqs = [
  {
    question: "Which service is right for my business?",
    answer:
      "Start from the job to be done. Repeat phone or message questions point toward voice, WhatsApp, or chat agents. Information being retyped between tools points toward automation or a CRM. A new product points toward SaaS, web, or mobile. If you are unsure, choose “Help me choose” and describe the workflow.",
  },
  {
    question: "Can you connect with our existing tools?",
    answer:
      "Often, when the tool offers an API, export, or supported integration. During scoping we confirm what can be connected, what should stay as it is, and what would need a workaround.",
  },
  {
    question: "Can you build an MVP or SaaS product?",
    answer:
      "Yes. An MVP can cover the smallest useful version: the core journey, a clear interface, and a foundation that can grow. A SaaS product can include accounts, subscriptions, and an admin view when that is part of the agreed scope.",
  },
  {
    question: "Do you develop both web and mobile applications?",
    answer:
      "Yes. Web applications, and Android and iOS applications, are both part of the studio’s work. The right form depends on who uses the product and where the work happens.",
  },
  {
    question: "How are project scope, cost, and timelines determined?",
    answer:
      "From the problem, the people involved, the systems to connect, and the level of finish required. After an initial conversation we propose a scope, milestones, and a commercial outline. Cost and timing are agreed for that scope. There is no fixed public price list.",
  },
  {
    question: "What information do you need to start?",
    answer:
      "A description of the workflow or product, who it is for, what exists today, and any deadline you are working toward. Examples and access to current tools help when you are ready to share them. A finished specification is not required to begin.",
  },
  {
    question: "Can ongoing maintenance be included?",
    answer:
      "It can, when it is agreed as part of the project or as a separate arrangement. That may cover fixes, small improvements, and keeping the implementation documented. The terms are set in the scope.",
  },
] as const;

export const budgetOptions = [
  "Prefer not to say",
  "Still deciding",
  "Under $5,000",
  "$5,000–$15,000",
  "$15,000–$40,000",
  "$40,000–$80,000",
  "$80,000+",
] as const;

export const timelineOptions = [
  "Not sure yet",
  "Exploring",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Flexible",
] as const;

export const examples = [
  {
    id: "support",
    title: "AI customer support workspace",
    label: "Concept",
    frame: "browser" as const,
    summary:
      "A support desk where a conversation, the source material, and a suggested reply sit in one view.",
    related: { href: "/services/ai-chatbots", label: "AI Chatbots" },
  },
  {
    id: "crm",
    title: "CRM and workflow dashboard",
    label: "Concept",
    frame: "browser" as const,
    summary:
      "A workspace that moves a sample enquiry from new, to qualified, to scheduled without a second spreadsheet.",
    related: { href: "/services/crm-erp-systems", label: "CRM & ERP Systems" },
  },
  {
    id: "saas",
    title: "SaaS management platform",
    label: "Concept",
    frame: "browser" as const,
    summary:
      "An account home with onboarding, a plain dashboard, and the settings a subscriber would expect to find.",
    related: { href: "/services/saas-products", label: "SaaS Products" },
  },
  {
    id: "mobile",
    title: "Mobile booking application",
    label: "Demo",
    frame: "phone" as const,
    summary:
      "A phone journey for choosing a service, a day, and a time, with the confirmation kept on the device.",
    related: { href: "/services/android-ios-applications", label: "Android & iOS Applications" },
  },
] as const;
