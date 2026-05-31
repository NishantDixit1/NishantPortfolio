import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  reactjs,
  nodejs,
  mongodb,
  git,
  n8n,
  make,
  zapier,
  ghl,
  openai,
  langchain,
  supercoder,
  cognizant,
  gaurav,
  bhaiya,
  akshit,
  hin,
  kanha,
  voiceAgent,
  leadAutomation,
  ragChatbot,
  outreach,
  saasDashboard,
  docAgent,
} from "../assets";

export const CALENDLY_URL = "https://calendly.com/nishantpandit2004";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "expertise",
    title: "Expertise",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Agent Development",
    icon: creator,
  },
  {
    title: "Workflow Automation",
    icon: web,
  },
  {
    title: "GHL / CRM Automation",
    icon: backend,
  },
  {
    title: "Full-Stack Development",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "n8n",
    icon: n8n,
  },
  {
    name: "Make",
    icon: make,
  },
  {
    name: "Zapier",
    icon: zapier,
  },
  {
    name: "GoHighLevel",
    icon: ghl,
  },
  {
    name: "OpenAI",
    icon: openai,
  },
  {
    name: "LangChain",
    icon: langchain,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
];

const educations = [
  {
    title: "B.Tech, Information Technology",
    company_name: "Hindustan College of Science and Technology",
    icon: hin,
    iconBg: "#383E56",
    date: "Aug 2017 - 2021",
    points: [
      "Graduated with a strong foundation in software engineering, data structures, databases, and applied machine learning.",
      "Built multiple full-stack and AI-driven projects, bridging classic web development with modern automation and LLM workflows.",
      "Led student dev initiatives and collaborated on team projects, focusing on clean architecture and maintainable code.",
      "Self-directed deep dives into AI agents, prompt engineering, and no-code/low-code automation platforms.",
    ],
  },
  {
    title: "Senior Secondary",
    company_name: "Kanha Makhan Public School",
    icon: kanha,
    iconBg: "#383E56",
    date: "2015 - 2017",
    points: [
      "Completed senior secondary education with a focus on mathematics and computer science.",
      "Began programming with Java and Python, developing an early interest in automation and problem solving.",
      "Built small utility scripts and bots that sparked a long-term focus on automating repetitive work.",
    ],
  },
];

const experiences = [
  {
    title: "AI Automation & Agent Developer",
    company_name: "SuperCoder",
    icon: supercoder,
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "Designed and shipped 30+ production AI agents and automation workflows using n8n, Make, and Zapier, cutting manual operational work by 60%+ for clients across sales, support, and operations.",
      "Built LLM-powered agents with OpenAI and LangChain — including RAG knowledge assistants, lead-qualification bots, and AI voice/chat agents integrated directly into client CRMs.",
      "Architected end-to-end GoHighLevel (GHL) automations: funnels, pipelines, SMS/email sequences, appointment booking, and webhook integrations with external APIs.",
      "Developed full-stack tooling (React, Node.js, MongoDB) to orchestrate, monitor, and scale automation pipelines with reliable error handling and observability.",
    ],
  },
  {
    title: "Software Engineer (Automation)",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "#E6DEDD",
    date: "2021 - 2022",
    points: [
      "Delivered process-automation solutions for enterprise clients, integrating internal systems and third-party APIs to streamline business workflows.",
      "Built and maintained backend services and data pipelines in Python and Node.js, improving processing reliability and reducing manual handoffs.",
      "Collaborated with cross-functional teams in an Agile environment to gather requirements, ship features, and support production automations.",
      "Established the foundation in scalable automation and integration patterns that now drives my AI agent and workflow work.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Nishant automated our entire lead-to-booking flow in GHL and n8n. What used to take our team hours now runs on autopilot — booked calls went up and nothing slips through the cracks.",
    name: "Gaurav Raj",
    designation: "Founder",
    company: "GrowthLabs Agency",
    image: gaurav,
  },
  {
    testimonial:
      "The AI agent Nishant built handles our customer queries 24/7 and routes the right leads to sales instantly. He genuinely understands both the automation tools and the business goal behind them.",
    name: "Divyansh Dixit",
    designation: "SDE 2",
    company: "SuperCoder",
    image: bhaiya,
  },
  {
    testimonial:
      "We replaced three manual processes with Nishant's automations and an AI assistant. Reliable, well-documented, and he thinks about edge cases most developers miss.",
    name: "Akshit Singh",
    designation: "Product Lead",
    company: "Microsoft",
    image: akshit,
  },
];

const projects = [
  {
    name: "AI Voice & Chat Booking Agent",
    description:
      "An AI agent that answers inbound leads over chat and voice, qualifies them, and books appointments straight into the calendar. Built with OpenAI + LangChain, wired into GoHighLevel and n8n for end-to-end follow-up automation.",
    tags: [
      { name: "OpenAI", color: "blue-text-gradient" },
      { name: "LangChain", color: "green-text-gradient" },
      { name: "GoHighLevel", color: "pink-text-gradient" },
    ],
    image: voiceAgent,
    source_code_link: "https://github.com/NishantDixit1",
  },
  {
    name: "Lead-to-CRM Automation Engine",
    description:
      "An end-to-end n8n + GHL pipeline that captures leads from ads and forms, enriches and scores them with AI, then triggers personalized SMS/email sequences and pipeline updates — with a live analytics dashboard for the whole funnel.",
    tags: [
      { name: "n8n", color: "blue-text-gradient" },
      { name: "GoHighLevel", color: "green-text-gradient" },
      { name: "Automation", color: "pink-text-gradient" },
    ],
    image: leadAutomation,
    source_code_link: "https://github.com/NishantDixit1",
  },
  {
    name: "RAG Customer Support Assistant",
    description:
      "A retrieval-augmented support assistant that answers questions from a company's knowledge base with cited sources. Vector search over docs, OpenAI for generation, and automatic escalation to a human when confidence is low.",
    tags: [
      { name: "RAG", color: "blue-text-gradient" },
      { name: "OpenAI", color: "green-text-gradient" },
      { name: "Vector DB", color: "pink-text-gradient" },
    ],
    image: ragChatbot,
    source_code_link: "https://github.com/NishantDixit1",
  },
  {
    name: "Multi-Channel Outreach Automation",
    description:
      "A Make + Zapier workflow that runs personalized cold outreach across email and LinkedIn, drafts AI-written first touches, logs replies, and syncs every interaction back to the CRM — turning a manual SDR process into a hands-off system.",
    tags: [
      { name: "Make", color: "blue-text-gradient" },
      { name: "Zapier", color: "green-text-gradient" },
      { name: "OpenAI", color: "pink-text-gradient" },
    ],
    image: outreach,
    source_code_link: "https://github.com/NishantDixit1",
  },
  {
    name: "Full-Stack Automation Control Panel",
    description:
      "A React + Node.js + MongoDB dashboard to launch, monitor, and debug automation workflows in one place — real-time run logs, retry handling, and webhook management for the agents and pipelines powering client operations.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: saasDashboard,
    source_code_link: "https://github.com/NishantDixit1",
  },
  {
    name: "AI Document & Invoice Processing Agent",
    description:
      "An AI agent that reads invoices, receipts, and PDFs, extracts structured data with OCR + OpenAI, validates it, and pushes clean records into accounting tools and Google Sheets via n8n — eliminating manual data entry and cutting processing time from hours to seconds.",
    tags: [
      { name: "OpenAI", color: "blue-text-gradient" },
      { name: "n8n", color: "green-text-gradient" },
      { name: "OCR", color: "pink-text-gradient" },
    ],
    image: docAgent,
    source_code_link: "https://github.com/NishantDixit1",
  },
];

const stats = [
  { value: "50+", label: "Automations Shipped" },
  { value: "30+", label: "AI Agents Built" },
  { value: "60%", label: "Avg. Time Saved" },
  { value: "4+", label: "Years Experience" },
];

const highlights = [
  {
    title: "Technical Excellence",
    description:
      "Deep expertise across AI agents, no-code/low-code automation, and full-stack engineering. I pick the right tool for the job and build it to last.",
  },
  {
    title: "Automation Impact",
    description:
      "Shipped automations that cut manual work by 60%+ and run 24/7, freeing teams to focus on the work that actually moves the business.",
  },
  {
    title: "Reliability & Ownership",
    description:
      "End-to-end ownership with monitoring, error handling, and clean documentation — systems that keep running without hand-holding.",
  },
];

const skills = [
  {
    title: "Automation Platforms",
    items: ["n8n", "Make", "Zapier", "GoHighLevel", "Webhooks", "REST APIs"],
  },
  {
    title: "AI & LLMs",
    items: [
      "OpenAI",
      "Claude",
      "LangChain",
      "RAG",
      "Vector Databases",
      "Prompt Engineering",
      "AI Voice & Chat Agents",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Python", "FastAPI", "Flask"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker", "Postman", "Vercel", "CI/CD"],
  },
  {
    title: "Integrations",
    items: ["Twilio", "Stripe", "Google Workspace", "Slack", "WhatsApp API", "Airtable"],
  },
];

const expertiseAreas = [
  {
    title: "AI Agent Development",
    subtitle: "Intelligent Agents",
    description:
      "Design and deploy LLM-powered agents that talk to customers, qualify leads, and take action across your stack.",
    points: [
      "AI voice & chat agents (OpenAI, Claude)",
      "RAG knowledge assistants with cited answers",
      "Agent tool-use & multi-step API orchestration",
    ],
    tools: ["OpenAI", "LangChain", "Python"],
    achievement: "Built 30+ production AI agents",
  },
  {
    title: "Workflow Automation",
    subtitle: "No-Code / Low-Code",
    description:
      "Connect your apps into reliable, automated pipelines that run 24/7 — no manual work, no dropped tasks.",
    points: [
      "n8n, Make & Zapier pipelines",
      "Webhook & REST API integrations",
      "Error handling, retries & monitoring",
    ],
    tools: ["n8n", "Make", "Zapier"],
    achievement: "Cut manual work by 60%+",
  },
  {
    title: "GHL / CRM Automation",
    subtitle: "Growth Systems",
    description:
      "End-to-end GoHighLevel builds — funnels, pipelines, and follow-up that turn leads into booked calls automatically.",
    points: [
      "Funnels, pipelines & calendars",
      "SMS / email nurture sequences",
      "Lead scoring & CRM sync",
    ],
    tools: ["GoHighLevel", "n8n", "Webhooks"],
    achievement: "Automated lead-to-booking flows",
  },
  {
    title: "Full-Stack Development",
    subtitle: "Custom Tooling",
    description:
      "When no-code isn't enough, I build custom dashboards and services to orchestrate and scale your automations.",
    points: [
      "React / Node dashboards & control panels",
      "REST APIs & backend services",
      "MongoDB / Postgres data layers",
    ],
    tools: ["React", "Node.js", "MongoDB"],
    achievement: "Full-stack automation control panels",
  },
];

export {
  services,
  technologies,
  educations,
  experiences,
  testimonials,
  projects,
  stats,
  highlights,
  skills,
  expertiseAreas,
};
