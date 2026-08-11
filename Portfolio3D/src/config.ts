export const config = {
  developer: {
    name: "Nishant Dixit",
    fullName: "Nishant Dixit",
    title: "Software Engineer",
    // the two lines of the animated hero heading, and the loading marquee
    titleLine1: "Backend & AI",
    titleLine2: "Engineer",
    availability: "Open to backend, full-stack and AI engineering roles.",
    description:
      "Software Engineer specializing in multi-tenant backends, REST APIs, and LLM-powered products. I take systems from architecture to production: Java 21 / Spring Boot and FastAPI on the backend, Anthropic Claude and OpenAI for the intelligence layer.",
  },
  social: {
    github: "NishantDixit1",
    email: "nishantpandit2004@gmail.com",
    location: "Gurugram, India",
  },
  about: {
    title: "About Me",
    description:
      "I build production backends and AI systems that ship. At Supercoder I owned the backend for an AI-driven hiring platform: multi-tenant REST services, the SQL that powered them, and the LLM layer that made the product intelligent. I care about the parts users never see but always feel, correctness, security, and things that do not break at 2am.",
  },
  experiences: [
    {
      position: "Co-founder / Engineer",
      company: "Stackwrights",
      period: "04-2026 - Present",
      location: "Remote",
      description:
        "A small software studio I run with my brother, building and shipping web and AI products for clients. It is where most of my hands-on full-stack and AI work happens: I take builds from scoping through to a live product on a real domain.",
      responsibilities: [
        "Design and ship full-stack products end to end, from data model and API through to deployment",
        "Build AI features on Anthropic Claude and OpenAI, including conversational agents and automation",
        "Own delivery directly with clients: scoping, timelines, and shipping to production",
        "Run the infrastructure the products live on, across Vercel, Render, and managed Postgres and MongoDB",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "Anthropic Claude",
        "Vercel",
      ],
    },
    {
      position: "Software Engineer (SDE 1)",
      company: "Supercoder",
      period: "02-2025 - 07-2026",
      location: "Remote",
      description:
        "Owned the backend for an AI-driven hiring platform. Designed multi-tenant REST services, authored the data layer that powered them, and integrated the LLM and real-time recording systems the product ran on.",
      responsibilities: [
        "Built a multi-tenant Spring Boot 3.4 / Java 21 REST backend with 30+ endpoints across tenant, project and candidate-lifecycle APIs",
        "Secured the API with JWT auth and an AOP @AuthorizationValidator annotation enforcing ADMIN / MEMBER roles",
        "Authored the MyBatis data layer over PostgreSQL with 12 XML mappers covering CRUD, joins and analytical aggregations",
        "Designed 4 Spring @Scheduled services for lifecycle automation, including a 3-tier credit-expiry workflow and daily tenant reports",
        "Engineered Agora RTC integration for real-time interview recording with short-lived tokens and per-session isolation",
      ],
      technologies: [
        "Java 21",
        "Spring Boot 3.4",
        "PostgreSQL",
        "MyBatis",
        "JWT",
        "Spring AOP",
        "Agora RTC",
        "AWS S3",
        "Docker",
      ],
    },
    {
      position: "Programmer Analyst Trainee",
      company: "Cognizant",
      period: "11-2024 - 01-2025",
      location: "Coimbatore, Tamil Nadu",
      description:
        "Completed Cognizant's training program in SQL, DBMS, Python and Data Warehousing, applying ETL patterns and data modeling across relational schema design, query optimization and warehouse-load workflows.",
      responsibilities: [
        "Applied ETL patterns across relational schema design, query optimization and warehouse-load workflows",
        "Built coursework data pipelines in Python practicing extract-transform-load patterns and scheduled batch processing",
        "Applied SDLC methodologies with hands-on version control, code review and defect-tracking practices",
      ],
      technologies: ["SQL", "Python", "DBMS", "Data Warehousing", "ETL", "Git"],
    },
    {
      position: "B.Tech, Computer Science",
      company: "Hindustan College of Science and Technology",
      period: "09-2021 - 05-2025",
      location: "India",
      description:
        "Computer Science degree alongside self-directed work building full-stack and AI projects, from an end-to-end AI interview platform to machine-learning risk models.",
      responsibilities: [
        "Built an end-to-end AI interview platform with 175 FastAPI endpoints",
        "Developed machine-learning projects including an explainable stroke-risk model",
        "Shipped data-analytics work in SQL and Power BI across HR and sales datasets",
      ],
      technologies: ["Python", "FastAPI", "scikit-learn", "MySQL", "Power BI", "JavaScript"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "AI Interview Platform",
      category: "AI · Full Stack",
      technologies:
        "FastAPI, Python, PostgreSQL, SQLAlchemy, Anthropic Claude, OpenAI, AWS S3, Docker",
      image: "/images/projects/ai-interview-platform.jpg",
      description:
        "An end-to-end AI hiring platform with 175 REST endpoints. It parses resumes, screens candidates against a role, generates adaptive interview questions, and grades answers asynchronously. Two LLM providers are wired in with fallback, so a provider outage degrades quality rather than breaking the pipeline.",
      link: "https://github.com/NishantDixit1/interviewIQ",
    },
    {
      id: 2,
      title: "Multi-Tenant Hiring Backend",
      category: "Backend · System Design",
      technologies:
        "Java 21, Spring Boot 3.4, PostgreSQL, MyBatis, JWT, Spring AOP, Agora RTC",
      image: "/images/projects/hiring-backend.jpg",
      description:
        "The production backend behind an AI hiring product. 30+ endpoints across tenant, project and candidate-lifecycle APIs, with authorization enforced at the annotation level, 12 MyBatis mappers over PostgreSQL, and scheduled jobs that automate a candidate's entire lifecycle from credit expiry to deadline reminders.",
      link: "",
    },
    {
      id: 3,
      title: "AI Sales CRM",
      category: "AI · Full Stack",
      technologies: "React, Vite, Node.js, Express, MongoDB, JWT, OpenRouter, Tailwind",
      image: "/images/projects/ai-sales-crm.jpg",
      description:
        "A CRM where the pipeline is a working board: leads move through New, Qualified, Proposal, Won and Lost by drag and drop, with deal value and priority on every card. AI reads each deal's own history to summarize it, draft the follow-up email, and suggest the next step. Pipeline health is computed from live data.",
      link: "https://github.com/NishantDixit1/SalesFlow-AI",
    },
    {
      id: 4,
      title: "Tech Market",
      category: "Full Stack · Real-time",
      technologies:
        "Next.js, TypeScript, Node.js, Express, Socket.IO, MongoDB, Mongoose, Zod, Cloudinary",
      image: "/images/projects/techmarket.jpg",
      description:
        "A two-sided marketplace connecting hirers with developers. Hirers post projects, developers submit proposals and bids, and the two sides talk over real-time chat backed by a dedicated Socket.IO server. Built as a TypeScript monorepo with a shared models package used by both the app and the chat service.",
      link: "https://techmarket.stackwrights.com",
    },
    {
      id: 5,
      title: "NeuroRiskX, Explainable Stroke Risk",
      category: "AI · Machine Learning",
      technologies: "FastAPI, scikit-learn, SHAP, Python, Pandas",
      image: "/images/projects/neuroriskx.jpg",
      description:
        "A stroke-risk model where the explanation is a first-class output. Every scored assessment returns a per-patient SHAP breakdown, and the score is shown against the decision threshold it was actually judged against. A what-if panel rescores against the live model, so a clinician can interrogate it rather than trust a black box.",
      link: "https://github.com/NishantDixit1/NeuroRiskX",
    },
    {
      id: 6,
      title: "Job Application Tracker",
      category: "AI · Full Stack",
      technologies: "Next.js 16, TypeScript, PostgreSQL, Prisma, Tailwind",
      image: "/images/projects/job-tracker.jpg",
      description:
        "An AI-assisted tracker for a live job search. Paste a job posting and it pulls out the company, role, location and key requirements, then tracks every application across Kanban and list views from Applied through to Offer.",
      link: "https://job-application-tracker-q7kr.vercel.app",
    },
    {
      id: 7,
      title: "Scan to Order",
      category: "Full Stack · Product",
      technologies: "Next.js, TypeScript, PostgreSQL, Prisma, Tailwind",
      image: "/images/projects/scan-to-order.jpg",
      description:
        "QR dine-in ordering. A guest scans the table code, browses a photo menu, and orders from their phone; the kitchen sees the ticket immediately. No app install, no waiting to flag someone down.",
      link: "https://scan-to-order-three.vercel.app",
    },
  ],
  contact: {
    email: "nishantpandit2004@gmail.com",
    github: "https://github.com/NishantDixit1",
    linkedin: "https://www.linkedin.com/in/nishant-dixit-741472243/",
    instagram: "https://www.instagram.com/__nishant_.06",
    calendly: "https://calendly.com/nishantpandit2004/30min",
  },
  skills: {
    develop: {
      title: "BACKEND & AI ENGINEER",
      description: "Production backends, APIs & LLM-powered systems",
      details:
        "Designing multi-tenant backends and REST APIs in Java 21 / Spring Boot and FastAPI, over PostgreSQL, then wiring in the LLM layer with Anthropic Claude and OpenAI. From architecture through to deployment on AWS and Docker.",
      tools: [
        "Java 21",
        "Spring Boot",
        "FastAPI",
        "PostgreSQL",
        "TypeScript",
        "Anthropic Claude",
        "AWS",
        "Docker",
      ],
    },
  },
};
