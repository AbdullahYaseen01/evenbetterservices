export const accents = {
  emerald: "#087F5B",
  lime: "#D8F36A",
  sky: "#ADD9F3",
  peach: "#FFBEA7",
  lavender: "#C9BEF5",
  forest: "#123C35",
} as const;

export type Accent = keyof typeof accents;

export type ServiceGroupId = "ai" | "software" | "systems" | "design";

export type Service = {
  slug: string;
  name: string;
  number: string;
  group: ServiceGroupId;
  accent: Accent;
  summary: string;
  introduction: string;
  problems: string[];
  capabilities: string[];
  cardPoints: string[];
  useCases: { title: string; detail: string }[];
  delivery: { title: string; detail: string }[];
  faqs: { question: string; answer: string }[];
};

export const groups: Record<
  ServiceGroupId,
  { id: ServiceGroupId; title: string; lede: string }
> = {
  ai: {
    id: "ai",
    title: "AI and automation",
    lede: "Voice, chat, and workflows that take repetitive communication and process steps off the team.",
  },
  software: {
    id: "software",
    title: "Software and digital products",
    lede: "Systems and products people can sign in to, understand, and use in the course of real work.",
  },
  systems: {
    id: "systems",
    title: "Intelligent and connected systems",
    lede: "Software that can see, sense, and report on what is happening in a physical operation.",
  },
  design: {
    id: "design",
    title: "Design and frontend",
    lede: "Interfaces, prototypes, and frontend implementation shaped around the people who will use them.",
  },
};

export const groupOrder: ServiceGroupId[] = ["ai", "software", "systems", "design"];

const sharedDeliveryNote =
  "Each step is confirmed in the project scope. Nothing here is a promise of a fixed timeline.";

export const services: Service[] = [
  {
    slug: "ai-voice-agents",
    name: "AI Voice Agents",
    number: "01",
    group: "ai",
    accent: "lime",
    summary:
      "Voice assistants for enquiries, appointment scheduling, call routing, and business follow-ups.",
    introduction:
      "An AI voice agent answers routine calls in a consistent way, so customers can get a useful response without waiting for a free person. It is a fit when the same questions, bookings, and follow-ups keep arriving by phone.",
    problems: [
      "Calls queue while the team is with other customers.",
      "Appointment requests are written down and retyped later.",
      "After-hours callers leave messages that are easy to miss.",
      "Simple questions take the same time as complex ones.",
    ],
    capabilities: [
      "Enquiry handling with a defined set of answers and handoff rules.",
      "Appointment scheduling against availability you provide.",
      "Call routing to the right person or queue.",
      "Follow-up calls for reminders and missing information.",
      "A written summary of what the caller asked for.",
    ],
    cardPoints: ["Enquiries", "Scheduling", "Call routing"],
    useCases: [
      {
        title: "Front-desk overflow",
        detail:
          "A clinic or studio uses the agent for hours, directions, and booking requests, and passes clinical or commercial decisions to staff.",
      },
      {
        title: "After-hours intake",
        detail:
          "Callers can leave a structured request in the evening. The team starts the next day with a clear list instead of a voicemail pile.",
      },
      {
        title: "Reminder calls",
        detail:
          "The agent confirms an upcoming visit and records whether the caller wants to keep, change, or cancel it.",
      },
    ],
    delivery: [
      {
        title: "Map the calls",
        detail: `We list the conversations the agent may handle and the ones that must reach a person. ${sharedDeliveryNote}`,
      },
      {
        title: "Design the dialogue",
        detail:
          "We write the prompts, the questions the agent may ask, and the point where a human takes over.",
      },
      {
        title: "Build and review",
        detail:
          "We connect the agreed phone setup and business tools, then review sample conversations with you.",
      },
      {
        title: "Launch and adjust",
        detail:
          "We release the agreed flow, document how to change it, and list any improvements for a later phase.",
      },
    ],
    faqs: [
      {
        question: "Will the agent pretend to be a person?",
        answer:
          "The agent should identify itself and hand the call to a person when the request is outside its brief.",
      },
      {
        question: "Can it book into our existing calendar?",
        answer:
          "It can when the calendar or booking tool provides a suitable connection. We confirm that during scoping rather than assuming it.",
      },
      {
        question: "Do you place live test calls on this website?",
        answer:
          "No. Demonstrations on this site use sample conversations stored in the page. A real phone setup is part of a project, not the public website.",
      },
    ],
  },
  {
    slug: "whatsapp-ai-agents",
    name: "WhatsApp AI Agents",
    number: "02",
    group: "ai",
    accent: "emerald",
    summary:
      "Conversational assistants for customer questions, lead qualification, booking flows, and order updates.",
    introduction:
      "A WhatsApp assistant meets customers in a channel they already use. It can answer common questions, collect the details a sale or booking needs, and keep people updated without a teammate retyping the same messages.",
    problems: [
      "WhatsApp enquiries sit unread during busy periods.",
      "Lead details arrive as unstructured chat and get lost.",
      "Customers ask for order or booking updates one by one.",
      "Staff repeat the same answers across many conversations.",
    ],
    capabilities: [
      "Answers for a defined set of customer questions.",
      "Lead qualification that collects the fields your team needs.",
      "Booking flows that offer available options.",
      "Order or appointment updates drawn from your records.",
      "A clear handoff when a person should continue the chat.",
    ],
    cardPoints: ["Questions", "Qualification", "Order updates"],
    useCases: [
      {
        title: "New enquiry",
        detail:
          "A customer asks about a service. The assistant collects the location, timing, and contact details, then prepares them for the sales team.",
      },
      {
        title: "Booking change",
        detail:
          "The assistant shows open times from the rules you set and records the request for confirmation.",
      },
      {
        title: "Status update",
        detail:
          "A customer asks where an order or appointment stands and receives the status your system is allowed to share.",
      },
    ],
    delivery: [
      {
        title: "Choose the conversations",
        detail:
          "We define which chats the assistant owns and which must be answered by the team.",
      },
      {
        title: "Write the flows",
        detail:
          "We map questions, qualification steps, and the tone of the replies so they sound like your business.",
      },
      {
        title: "Connect the channel",
        detail:
          "We use the WhatsApp business setup available to your account and the tools that should receive the results.",
      },
      {
        title: "Review before customers rely on it",
        detail:
          "Sample conversations are reviewed with you. Public use starts only after the agreed flows are accepted.",
      },
    ],
    faqs: [
      {
        question: "Is the chat on this website a real WhatsApp message?",
        answer:
          "No. The website shows an illustrative conversation. It does not send a WhatsApp message or update an external inbox.",
      },
      {
        question: "Can it qualify leads without annoying people?",
        answer:
          "The flow should ask only for details your team will use, and it should offer a person when the customer wants one.",
      },
      {
        question: "What do you need from us?",
        answer:
          "Access to the WhatsApp business channel you want to use, the questions you already answer, and the place new leads should go.",
      },
    ],
  },
  {
    slug: "ai-chatbots",
    name: "AI Chatbots",
    number: "03",
    group: "ai",
    accent: "sky",
    summary:
      "Website and application assistants for customer support, knowledge access, and guided user journeys.",
    introduction:
      "A chatbot on your website or product gives people a direct way to find an answer or complete a task. It works best when it is grounded in your own content and knows when to stop and involve a person.",
    problems: [
      "Help articles exist, but visitors cannot find the right one.",
      "Support repeats the same product and policy answers.",
      "New users abandon a journey because the next step is unclear.",
      "Questions arrive outside the hours the team is online.",
    ],
    capabilities: [
      "Answers drawn from pages, documents, or a knowledge base you approve.",
      "Guided journeys for signup, booking, or troubleshooting.",
      "Support handoff with the conversation context attached.",
      "Different behaviour for public visitors and signed-in users.",
      "A review log so weak answers can be corrected.",
    ],
    cardPoints: ["Support", "Knowledge", "Guided journeys"],
    useCases: [
      {
        title: "Product help",
        detail:
          "A signed-in user asks how to change a setting. The assistant points to the exact step and offers support if that does not solve it.",
      },
      {
        title: "Public website",
        detail:
          "A visitor asks what you offer and is guided toward the relevant service, example, or enquiry form.",
      },
      {
        title: "Internal knowledge",
        detail:
          "A teammate asks for a policy or procedure and receives the approved version, with the source visible.",
      },
    ],
    delivery: [
      {
        title: "Gather the source material",
        detail:
          "We identify the pages, documents, and answers the assistant is allowed to use.",
      },
      {
        title: "Design the boundaries",
        detail:
          "We decide what it should answer, what it should refuse, and how a person joins the conversation.",
      },
      {
        title: "Build it into the product",
        detail:
          "The assistant is placed where the question actually happens, on the site or inside the application.",
      },
      {
        title: "Improve from real questions",
        detail:
          "After launch, agreed review sessions can tighten answers. Ongoing care is included only when it is in scope.",
      },
    ],
    faqs: [
      {
        question: "Will it invent answers?",
        answer:
          "The design should prefer your approved material and say when it does not know. We test sample questions with you before release.",
      },
      {
        question: "Can it live inside an existing web app?",
        answer:
          "Yes, when we can place it in the interface and give it the right user context. That is scoped with the product team.",
      },
      {
        question: "Is the homepage demonstration connected to a model?",
        answer:
          "No. The interactive demo uses prepared sample replies so you can see the shape of the experience.",
      },
    ],
  },
  {
    slug: "business-automation",
    name: "Business Automation",
    number: "04",
    group: "ai",
    accent: "peach",
    summary:
      "Connected workflows that reduce repetitive work across tools, departments, and business processes.",
    introduction:
      "Business automation joins the steps your team already repeats: an enquiry arrives, details are checked, a record is created, and the right person is told. The aim is less retyping and fewer missed handoffs.",
    problems: [
      "The same customer details are copied between inbox, spreadsheet, and CRM.",
      "Approvals wait because nobody can see the queue.",
      "Follow-ups depend on memory.",
      "Departments use different tools and lose the thread.",
    ],
    capabilities: [
      "Workflows that move an enquiry, order, or request to the next step.",
      "Connections between the tools you already use, where an interface exists.",
      "Notifications for the person who needs to act.",
      "Checks that stop incomplete information from moving forward.",
      "A simple audit of what the workflow did.",
    ],
    cardPoints: ["Handoffs", "Tool connections", "Follow-ups"],
    useCases: [
      {
        title: "Enquiry to CRM",
        detail:
          "A form or inbox message creates a structured record, assigns an owner, and stores the original request.",
      },
      {
        title: "Internal request",
        detail:
          "A teammate submits a request, the right approver is notified, and the outcome is written back to the tracker.",
      },
      {
        title: "Operations handoff",
        detail:
          "When a sale is marked ready, the operations tool receives the details needed to start the work.",
      },
    ],
    delivery: [
      {
        title: "Trace the current path",
        detail:
          "We follow one real process from the first trigger to the last person who touches it.",
      },
      {
        title: "Decide what should change",
        detail:
          "We separate steps a workflow can take from steps that still need a person’s judgment.",
      },
      {
        title: "Build the connections",
        detail:
          "We implement the agreed path and review it with sample records before it carries live work.",
      },
      {
        title: "Hand it over",
        detail:
          "You receive a description of the triggers, the tools involved, and how to pause or adjust the flow.",
      },
    ],
    faqs: [
      {
        question: "Will this replace the team?",
        answer:
          "It is meant to remove repetitive transfer work. Decisions, exceptions, and customer relationships stay with people.",
      },
      {
        question: "Can every tool be connected?",
        answer:
          "Only when that tool offers a suitable API, export, or supported integration. We check this before it is included in scope.",
      },
      {
        question: "Does the website demo update a CRM?",
        answer:
          "No. The example workflow animates sample data in the browser. No external system is changed.",
      },
    ],
  },
  {
    slug: "crm-erp-systems",
    name: "CRM & ERP Systems",
    number: "05",
    group: "software",
    accent: "peach",
    summary:
      "Custom systems for managing customer relationships, sales, operations, inventory, and internal workflows.",
    introduction:
      "A custom CRM or ERP is worth considering when packaged software fights the way your business actually runs. The system should make customers, sales, stock, and daily operations visible in one place your team will use.",
    problems: [
      "Customer history is split across inboxes and spreadsheets.",
      "Sales and operations do not share one version of a job.",
      "Inventory or workload is updated too late to be useful.",
      "Off-the-shelf software contains a lot you do not need and misses what you do.",
    ],
    capabilities: [
      "Customer and company records shaped around your sales cycle.",
      "Pipelines, tasks, and internal handoffs.",
      "Operational records for jobs, inventory, or scheduling.",
      "Roles and permissions for different teams.",
      "Imports from the spreadsheets or tools you are leaving.",
    ],
    cardPoints: ["Customers", "Operations", "Internal workflow"],
    useCases: [
      {
        title: "Sales desk",
        detail:
          "A growing team tracks enquiries, proposals, and next actions without building a private spreadsheet for each person.",
      },
      {
        title: "Job tracking",
        detail:
          "Operations can see what was sold, what is scheduled, and what is waiting on a part or a decision.",
      },
      {
        title: "Light inventory",
        detail:
          "Stock movements are recorded beside the orders that cause them, with a view the team can check.",
      },
    ],
    delivery: [
      {
        title: "Model the records",
        detail:
          "We define the customers, jobs, and items the system must know about, and who is allowed to change them.",
      },
      {
        title: "Design the daily screens",
        detail:
          "The interface follows the work of a morning, not a generic module list.",
      },
      {
        title: "Build in milestones",
        detail:
          "You review a working slice before the rest of the system is added.",
      },
      {
        title: "Migrate and hand over",
        detail:
          "Agreed data is imported, the team is shown how to run it, and the scope of support is written down.",
      },
    ],
    faqs: [
      {
        question: "Should we buy a CRM instead?",
        answer:
          "Sometimes. We will say so if a product you can configure is a better fit than a custom build.",
      },
      {
        question: "Can it start small?",
        answer:
          "Yes. A first release can cover one team and one workflow, with a structure that later departments can join.",
      },
      {
        question: "Do you include every ERP module?",
        answer:
          "No. Finance, payroll, manufacturing, and inventory are included only when they are part of the agreed scope.",
      },
    ],
  },
  {
    slug: "saas-products",
    name: "SaaS Products",
    number: "06",
    group: "software",
    accent: "lavender",
    summary:
      "Subscription-based software products with clear onboarding, useful dashboards, account management, and scalable foundations.",
    introduction:
      "A SaaS product turns a repeated business problem into software other people can subscribe to. The first version should teach itself, show value quickly, and sit on a foundation that can accept more customers later.",
    problems: [
      "The idea is clear, but the first version is not.",
      "Early users get lost between signup and the first useful result.",
      "Accounts, billing, and permissions are bolted on too late.",
      "The product cannot be explained in a single screen.",
    ],
    capabilities: [
      "Account signup, sign-in, and team access.",
      "Onboarding that leads to one meaningful action.",
      "Dashboards and settings people can understand.",
      "Subscription and plan handling when billing is in scope.",
      "An architecture that can grow with the product’s agreed direction.",
    ],
    cardPoints: ["Onboarding", "Accounts", "Dashboards"],
    useCases: [
      {
        title: "Workflow product",
        detail:
          "A founder wants other businesses to run a specific process in a shared product rather than in a private spreadsheet.",
      },
      {
        title: "Client portal product",
        detail:
          "A service firm productises reporting or requests so each customer has a login and a clear set of actions.",
      },
      {
        title: "MVP",
        detail:
          "The first release proves the core journey with real accounts before secondary features are added.",
      },
    ],
    delivery: [
      {
        title: "Define the first value",
        detail:
          "We choose the smallest journey that makes a new account successful.",
      },
      {
        title: "Design the product surface",
        detail:
          "Onboarding, the main workspace, and account settings are designed together.",
      },
      {
        title: "Build the foundation",
        detail:
          "Authentication, data, and the core screens are implemented in reviewable releases.",
      },
      {
        title: "Prepare to launch",
        detail:
          "We test the agreed paths, document how the product is run, and list what belongs in a later version.",
      },
    ],
    faqs: [
      {
        question: "Can you build an MVP first?",
        answer:
          "Yes. An MVP can cover the core journey, a clear interface, and accounts. Billing and extra roles are added when the scope includes them.",
      },
      {
        question: "Do you guarantee a number of customers?",
        answer:
          "No. We build the product experience and the technical foundation. Commercial results depend on the offer and the market.",
      },
      {
        question: "Who owns the product?",
        answer:
          "Ownership, repositories, and accounts are agreed in the project terms before work starts. They are not assumed on this website.",
      },
    ],
  },
  {
    slug: "web-applications",
    name: "Web Applications",
    number: "07",
    group: "software",
    accent: "sky",
    summary:
      "Responsive portals, dashboards, marketplaces, and custom business applications.",
    introduction:
      "A web application is the right shape when people need to sign in and get something done: request a service, manage a record, or work together on a dashboard. It should be clear on a laptop and comfortable on a phone.",
    problems: [
      "An important process still lives in email attachments.",
      "Customers cannot see the status of their own request.",
      "Internal dashboards are hard to trust or hard to read.",
      "A public site is not enough for the work that happens after the enquiry.",
    ],
    capabilities: [
      "Customer portals and staff workspaces.",
      "Dashboards for the records people need each day.",
      "Marketplaces or directories when that model fits the product.",
      "Responsive interfaces for desk and phone use.",
      "Access control for customers, staff, and administrators.",
    ],
    cardPoints: ["Portals", "Dashboards", "Marketplaces"],
    useCases: [
      {
        title: "Customer portal",
        detail:
          "Clients submit requests, upload files, and see what is happening without calling for an update.",
      },
      {
        title: "Operations dashboard",
        detail:
          "A team watches jobs, exceptions, and assignments in one workspace.",
      },
      {
        title: "Marketplace",
        detail:
          "Buyers and sellers, or clients and providers, can find each other and complete an agreed transaction path.",
      },
    ],
    delivery: [
      {
        title: "Name the users",
        detail:
          "We separate the jobs of a customer, a staff member, and an administrator before drawing screens.",
      },
      {
        title: "Prototype the main path",
        detail:
          "The most important journey is made clickable so the flow can be checked early.",
      },
      {
        title: "Implement and review",
        detail:
          "The application is built in slices you can try, with responsive layouts included.",
      },
      {
        title: "Release",
        detail:
          "We test the agreed browsers and paths, then document how the application is operated.",
      },
    ],
    faqs: [
      {
        question: "Is this the same as a marketing website?",
        answer:
          "No. A web application is software with accounts, data, and tasks. A marketing site can sit beside it, and the interface work can be scoped together.",
      },
      {
        question: "Will it work on mobile?",
        answer:
          "Yes. Responsive behaviour is part of the build. A native app is a separate service when the phone itself needs to do more.",
      },
      {
        question: "Can you extend software we already have?",
        answer:
          "Often, after we see how it is built and what can be changed safely. That review is part of scoping.",
      },
    ],
  },
  {
    slug: "android-ios-applications",
    name: "Android & iOS Applications",
    number: "08",
    group: "software",
    accent: "emerald",
    summary:
      "Mobile applications with intuitive interfaces, connected backend services, and thoughtful user journeys.",
    introduction:
      "A mobile application makes sense when the work happens away from a desk, or when the phone’s camera, location, or notifications are part of the product. The app and the service behind it are designed as one journey.",
    problems: [
      "Field teams need a task list that works in their hand.",
      "Customers expect to book, track, or pay from a phone.",
      "A mobile website cannot use the device capability the product needs.",
      "iOS and Android are being planned as two unrelated projects.",
    ],
    capabilities: [
      "iOS and Android interfaces for the same product journey.",
      "Account sign-in and secure access to your backend.",
      "Booking, tracking, capture, or approval flows.",
      "Push notifications when they are part of the scope.",
      "A release plan for the app stores you choose.",
    ],
    cardPoints: ["iOS and Android", "Connected services", "Field journeys"],
    useCases: [
      {
        title: "Booking app",
        detail:
          "A customer chooses a service, a time, and gets a confirmation they can revisit on the phone.",
      },
      {
        title: "Field work",
        detail:
          "A technician sees the job, records notes or photos, and syncs them when a connection is available.",
      },
      {
        title: "Companion app",
        detail:
          "An existing web product gains a focused mobile journey for the actions people repeat on the move.",
      },
    ],
    delivery: [
      {
        title: "Choose the mobile job",
        detail:
          "We decide what belongs in the app and what should stay on the web.",
      },
      {
        title: "Design both platforms",
        detail:
          "The journey stays shared, while familiar iOS and Android patterns are respected.",
      },
      {
        title: "Build app and service together",
        detail:
          "The interface, API, and account behaviour are developed against the same scope.",
      },
      {
        title: "Prepare the release",
        detail:
          "We test the agreed devices and help you through the store steps included in the project.",
      },
    ],
    faqs: [
      {
        question: "Do you build both Android and iOS?",
        answer:
          "Yes. Both can be included in one project. If you only need one platform first, that can be the starting scope.",
      },
      {
        question: "Can you publish the app for us?",
        answer:
          "We can prepare the release and guide the submission. Store accounts remain yours, and review decisions belong to the stores.",
      },
      {
        question: "Do you need an existing backend?",
        answer:
          "Not always. The service behind the app can be part of the same project when it is scoped.",
      },
    ],
  },
  {
    slug: "computer-vision-solutions",
    name: "Computer Vision Solutions",
    number: "09",
    group: "systems",
    accent: "emerald",
    summary:
      "Image and video analysis for detection, inspection, recognition, and visual business workflows.",
    introduction:
      "Computer vision is useful when a person is checking the same kind of image again and again: a part, a delivery, a document, or a place. The software flags what the business asked it to look for and leaves the judgment calls you specify with a person.",
    problems: [
      "Visual checks are slow or inconsistent between shifts.",
      "Photos are collected but never reviewed in a structured way.",
      "Staff need a second look at defects, labels, or missing items.",
      "There is no record of what was seen and what was decided.",
    ],
    capabilities: [
      "Detection of objects, conditions, or events you define.",
      "Inspection support that highlights items for a person to confirm.",
      "Recognition flows for documents, labels, or known item types.",
      "A review screen for the images and the result.",
      "A record of the check that operations can revisit.",
    ],
    cardPoints: ["Detection", "Inspection", "Review screens"],
    useCases: [
      {
        title: "Quality check",
        detail:
          "A production or packing photo is checked for a missing piece or a damaged label, then queued for confirmation.",
      },
      {
        title: "Site capture",
        detail:
          "Field photos are organised by job so a reviewer can see what the model noticed.",
      },
      {
        title: "Document intake",
        detail:
          "A photographed form is read for the fields the process needs, with low-confidence fields marked for a person.",
      },
    ],
    delivery: [
      {
        title: "Define the visual task",
        detail:
          "We agree what “found” and “not found” mean, using examples from your operation.",
      },
      {
        title: "Test with your images",
        detail:
          "Sample images are used to see whether the approach is sound before a full build is committed.",
      },
      {
        title: "Build the workflow",
        detail:
          "The model, the review screen, and the place the result is stored are delivered together.",
      },
      {
        title: "Set the human check",
        detail:
          "We document when a person must confirm a result and how corrections are recorded.",
      },
    ],
    faqs: [
      {
        question: "Can you promise a detection rate?",
        answer:
          "No. Accuracy depends on the images, the task, and the review process. We evaluate with your sample material and report what we observe.",
      },
      {
        question: "Do you need our photos to start?",
        answer:
          "A serious build needs representative images. An early conversation can start from a description and a few examples.",
      },
      {
        question: "Is camera hardware included?",
        answer:
          "Only when the project scope includes devices. Many projects start with photos you already capture.",
      },
    ],
  },
  {
    slug: "embedded-systems-iot",
    name: "Embedded Systems & IoT",
    number: "10",
    group: "systems",
    accent: "lavender",
    summary:
      "Connected-device solutions involving sensors, firmware, device communication, and monitoring interfaces.",
    introduction:
      "Connected devices are useful when the business needs to know what a place, machine, or product is doing. The work covers the device, the way it communicates, and the screen a person uses to understand it.",
    problems: [
      "Someone has to visit a site to know whether equipment is fine.",
      "Sensor readings sit on a device and never reach the team.",
      "Alerts are noisy, so real issues are ignored.",
      "Firmware, connectivity, and the dashboard are being treated as separate projects.",
    ],
    capabilities: [
      "Sensor selection support for the measurement you actually need.",
      "Firmware that reads, stores, and sends device data.",
      "Communication between the device and your service.",
      "A monitoring interface for status and history.",
      "A basic alert when a reading crosses a threshold you set.",
    ],
    cardPoints: ["Sensors", "Firmware", "Monitoring"],
    useCases: [
      {
        title: "Condition watch",
        detail:
          "A storage or plant space reports temperature or another agreed reading to a dashboard.",
      },
      {
        title: "Equipment status",
        detail:
          "A machine or door reports a simple state so the team can see exceptions without a site visit.",
      },
      {
        title: "Product prototype",
        detail:
          "A connected product prototype sends sample events to an application the team can try.",
      },
    ],
    delivery: [
      {
        title: "Define the signal",
        detail:
          "We agree what is measured, how often, and what a person should do with the result.",
      },
      {
        title: "Plan the device path",
        detail:
          "Hardware, firmware, connectivity, and the monitoring screen are scoped as one system.",
      },
      {
        title: "Build a reviewable prototype",
        detail:
          "A limited set of devices is used to prove the path before a wider rollout is discussed.",
      },
      {
        title: "Document the system",
        detail:
          "You receive the operating notes, the data path, and the limits of what was built.",
      },
    ],
    faqs: [
      {
        question: "Do you manufacture devices?",
        answer:
          "We design and build the connected solution in scope. Volume manufacturing is a separate arrangement and is not implied here.",
      },
      {
        question: "Can this use hardware we already own?",
        answer:
          "Sometimes. We need the device details and what it can already send before including it.",
      },
      {
        question: "Is the operations demo on this site live?",
        answer:
          "No. The dashboard uses illustrative sample readings. It is not connected to a device.",
      },
    ],
  },
  {
    slug: "ui-ux-frontend-development",
    name: "UI/UX & Frontend Development",
    number: "11",
    group: "design",
    accent: "lime",
    summary:
      "User research, interface design, interactive prototypes, design systems, and responsive frontend implementation.",
    introduction:
      "Interface work is how a service becomes something people can actually use. We research the task, design the flow, and implement a responsive frontend that engineering and content can keep building on.",
    problems: [
      "A product works, but people hesitate because the next step is unclear.",
      "Design and development are producing two different interfaces.",
      "There is no shared set of components, so every screen is a one-off.",
      "The mobile layout was treated as an afterthought.",
    ],
    capabilities: [
      "User research and task mapping for the people who will use the product.",
      "Interface design for marketing sites, applications, and product flows.",
      "Interactive prototypes you can click through before build.",
      "A design system of type, colour, and components.",
      "Responsive frontend implementation.",
    ],
    cardPoints: ["Research", "Prototypes", "Frontend"],
    useCases: [
      {
        title: "Product redesign",
        detail:
          "An existing tool is reworked around the main job, then implemented without throwing away what already functions.",
      },
      {
        title: "New product surface",
        detail:
          "A founder needs the first screens of a SaaS or portal before, or alongside, the backend work.",
      },
      {
        title: "Design system",
        detail:
          "A team with several products needs shared components so new screens stay consistent.",
      },
    ],
    delivery: [
      {
        title: "Study the task",
        detail:
          "We talk to the people involved, watch the current path, and write down what the interface must help them do.",
      },
      {
        title: "Explore the interface",
        detail:
          "Flows and screens are reviewed while they are still easy to change.",
      },
      {
        title: "Prototype the decisions",
        detail:
          "An interactive prototype lets you try the journey before it is fully built.",
      },
      {
        title: "Implement the frontend",
        detail:
          "The agreed design is built as responsive interface code, with the components documented.",
      },
    ],
    faqs: [
      {
        question: "Can design be commissioned on its own?",
        answer:
          "Yes. Research, interface design, and a prototype can be a complete project. Frontend implementation can follow in the same scope or a later one.",
      },
      {
        question: "Do you only design and hand over pictures?",
        answer:
          "Not unless that is what was agreed. The service includes frontend implementation when it is part of the scope.",
      },
      {
        question: "Will you research real users?",
        answer:
          "When research is included, we speak with the people you can introduce and use what they show us. We do not invent research findings.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function servicesInGroup(group: ServiceGroupId) {
  return services.filter((service) => service.group === group);
}

export const enquiryServices = [
  { value: "help", label: "Help me choose" },
  ...services.map((service) => ({ value: service.slug, label: service.name })),
];
