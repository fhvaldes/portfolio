import { Translations } from "./types";

export const en: Translations = {
  nav: {
    projects: "Projects",
    experience: "Experience",
    techStack: "Tech Stack",
    terminal: "Unix Terminal",
    linkedin: "LinkedIn",
    hire: "Hire Me",
  },
  hero: {
    available: "Available for Projects / Full-time Positions",
    name: "Fredy Hernández",
    subtitle: "Backend Developer · Python · Django · FastAPI",
    description:
      'Backend engineer specialising in <strong class="text-white">Python</strong> and <strong class="text-white">Django</strong>, with hands-on experience building production-grade APIs with <strong class="text-white">Django REST Framework</strong> and <strong class="text-white">FastAPI</strong>. Currently expanding into <strong class="text-white">AI/LLM integration</strong> for applied products.',
    experience: "EXPERIENCE",
    experienceValue: "3+ Years",
    specialty: "SPECIALTY",
    specialtyValue: "Django & REST APIs",
    location: "LOCATION / REMOTE",
    locationValue: "Spain / 100% Remote",
    viewStack: "View Stack & Technologies",
    github: "GitHub",
    contactTitle: "Contact Information",
    email: "EMAIL",
    phone: "PHONE",
    locationLabel: "LOCATION",
    workStatus: "EU STATUS",
    workStatusValue: "Active work permit in EU",
  },
  projects: {
    title: "Featured Projects",
    subtitle:
      "Real-world implementations in Django, DRF, AI, and automation. All repositories are public on GitHub.",
    filterAll: "All Projects",
    filterBackend: "Backend & Full-Stack",
    filterAI: "AI & Robotics",
    learnMore: "Learn More ▼",
    hideDetails: "Hide Details ▲",
    details: "Detailed Information:",
    repository: "Repository:",
    cinematch: {
      category: "Backend & AI",
      description:
        "Django movie-recommendation platform with TMDB ingestion, user profiles, genre-based recommendations, and a DRF API. Backend split into services layer and selectors for clean separation of concerns.",
      longDescription:
        "CineMatch is a movie recommendation system built with Django and DRF. Features TMDB data ingestion, user profiles, genre-based recommendations, and a complete REST API. Backend is split into a services layer (business logic + third-party calls) and selectors for clean separation of concerns. CI on Python 3.12/3.13 with coverage.",
    },
    tfm: {
      category: "MSc Thesis · AI & Robotics",
      description:
        "MSc thesis at Universidade da Coruña: vision-language control of a Robobo robot using GPT-4. The model interprets the robot's camera feed and decides the next action in real time.",
      longDescription:
        "MSc thesis at Universidade da Coruña: vision-language control of a Robobo robot using GPT-4. The model interprets the robot's camera feed and decides the next action (move, turn, speak) in real time, with structured JSON dispatch. OpenAI API integration, base64 image pipelines, env-driven config.",
    },
    fittracker: {
      category: "Full-Stack · AI & LLM Integration",
      description:
        "Full-stack platform for generating personalized workout routines and nutrition plans using LLM integration, with JWT authentication, progress tracking, and a modern React interface.",
      longDescription:
        "Full-stack platform for generating personalized workout routines and nutrition plans using LLM integration. Features JWT authentication, physical progress tracking, goal-adapted workout generation, nutritional plans, and a Material UI frontend panel. Django 6 backend with DRF, ready for PostgreSQL in production.",
    },
    receipt: {
      category: "Backend · Django & OCR",
      description:
        "Django web app for tracking and splitting receipt expenses between friends, with OCR support for automatic receipt scanning and product categorization.",
      longDescription:
        "Django web app for tracking and splitting receipt expenses between friends. Features receipt and product management, proportional expense splitting, product categorization, per-user totals visualization, multi-store support, OCR with Tesseract for automatic receipt scanning, and deployment with Docker and Gunicorn.",
    },
  },
  techStack: {
    title: "Technologies & Tech Stack",
    subtitle:
      "Specialized in the high-performance Python ecosystem and applied Artificial Intelligence solutions. Filter skills to explore details.",
    filterAll: "All",
    filterAI: "AI, LLMs & RAG",
    filterLanguages: "Languages",
    filterFrameworks: "Web Frameworks",
    filterDatabases: "Databases",
    filterInfra: "Infra & Unix",
    clickForMore: "Click for more",
    candidateLevel: "Candidate Level:",
    ecosystem: "Fredy Hernández Ecosystem",
    pythonStack: "#PythonStack",
    techs: {
      python: {
        name: "Python",
        details:
          "Primary language used for 3+ years for APIs (Django, FastAPI), microcontrollers, industrial automation scripts, and LLM architecture.",
      },
      bash: {
        name: "Bash & Shell Scripting",
        details:
          "Created 6+ complex automation tools for critical operations on 200+ Unix servers at SERESCO.",
      },
      sql: {
        name: "SQL",
        details:
          "Complex relational query optimization, reducing response times by 30% to 50% in production databases.",
      },
      perl: {
        name: "Perl",
        details:
          "Maintenance and development of legacy scripts for Unix server automation.",
      },
      javascript: {
        name: "JavaScript",
        details:
          "Used in automation scripts, REST API integration, and build tools. Familiarity with React in personal projects.",
      },
      html5: {
        name: "HTML5",
        details:
          "Semantic web interface structuring, accessible forms, and CSS framework integration.",
      },
      css3: {
        name: "CSS3",
        details:
          "Responsive design, Flexbox, Grid, animations, and frameworks like Tailwind CSS and Bootstrap.",
      },
      langchain: {
        name: "LangChain",
        details:
          "Intelligent Agent flow development, complex prompt chaining, and context storage with vector databases.",
      },
      rag: {
        name: "RAG Systems",
        details:
          "Complete Retrieval-Augmented Generation architecture connecting corporate documents with vector databases with minimal hallucination.",
      },
      openai: {
        name: "OpenAI API",
        details:
          "Integration of GPT-4 and GPT-3.5 models for classification, automatic structured data summaries, and function calls (tools).",
      },
      huggingface: {
        name: "Hugging Face",
        details:
          "Local inference of open-source models and basic fine-tuning for semantic classification tasks.",
      },
      llamaindex: {
        name: "LlamaIndex",
        details:
          "Efficient indexing and ingestion of multi-format corporate data to power fast semantic engines.",
      },
      django: {
        name: "Django / DRF",
        details:
          "Complete development of robust multi-layer backend applications, including integration of 4+ REST APIs with external distributors at Westcon-Comstor.",
      },
      fastapi: {
        name: "FastAPI",
        details:
          "Creation of fast, self-documented async microservices with Swagger/OpenAPI.",
      },
      postgresql: {
        name: "PostgreSQL",
        details:
          "Administration, indexing, and optimization of relational databases in high-availability industrial environments.",
      },
      mysql: {
        name: "MySQL",
        details:
          "Database administration and structuring for acquisition systems with 30+ real-time sensors.",
      },
      sqlite: {
        name: "SQLite",
        details:
          "Lightweight database for local development and rapid prototyping in Django projects and embedded applications.",
      },
      redis: {
        name: "Redis",
        details:
          "In-memory caching, message queues, and session storage for high-performance applications.",
      },
      docker: {
        name: "Docker",
        details:
          "Containerization of Python/Django microservices to standardize development, testing, and production environments.",
      },
      aws: {
        name: "AWS (Fundamentals)",
        details:
          "EC2 instance deployment, S3 storage, and foundational cloud administration.",
      },
      linux: {
        name: "Linux/Unix Environments",
        details:
          "Specialist in SuSE, Solaris, AIX servers. Critical infrastructure management and 99.9% SLA maintenance.",
      },
      ubuntu: {
        name: "Ubuntu",
        details:
          "Ubuntu/Debian server administration, application deployment, service configuration, and system security.",
      },
      git: {
        name: "Git",
        details:
          "Version control, collaborative GitFlow workflows with multiple development teams.",
      },
    },
  },
  timeline: {
    title: "Fredy's Professional Experience",
    subtitle:
      "Three years focused on solving complex backend problems, REST APIs, and system-level and relational database automation.",
    performanceMetrics: "Key Performance Metrics:",
    savedPerWeek: "Saved/week",
    manualSteps: "Manual steps",
    westcon: {
      role: "Backend Python Developer",
      company: "Westcon-Comstor Spain",
      location: "Spain (Remote / On-site)",
      period: "March 2025 – October 2025",
      achievements: [
        "Designed and integrated 4 REST APIs in Python/Django to connect internal systems with external distribution platforms, eliminating manual synchronization processes that consumed ~8 hours weekly.",
        "Automated 3 critical data ingestion and transformation flows using reusable Python code patterns, reducing manual intervention by 60%.",
        "Optimized 12 complex queries in PostgreSQL and MySQL, improving response times for critical business processes by 30% to 50%.",
      ],
      tags: ["Django REST APIs", "Automation (60%)", "SQL Query Tuning"],
    },
    seresco: {
      role: "Software Developer",
      company: "SERESCO, S.A.",
      location: "Spain",
      period: "February 2024 – March 2025",
      achievements: [
        "Designed and developed 6 internal tools in Python, Bash, and Perl for automating routine operations on enterprise Unix infrastructure (SuSE, Solaris, and AIX systems) across 200+ managed servers.",
        "Provided constant advanced support on redundant mission-critical high-availability infrastructure, maintaining a strict 99.9% Service Level Agreement (SLA) for 13 consecutive months.",
        "Successfully coordinated infrastructure deployments and critical incident corrections collaborating with 3 multidisciplinary teams using Jira methodologies.",
      ],
      tags: ["200+ Unix Servers", "SLA 99.9%", "Jira Collaboration"],
    },
    cuba: {
      role: "Automation Specialist",
      company: "IT Company Cuba",
      location: "Havana, Cuba",
      period: "2022 – 2023",
      achievements: [
        "Led the design and implementation of 2 Django-based web platforms for real-time industrial metrics visualization and control, operated daily by 15+ plant operators.",
        "Connected Python scripts with embedded microcontroller systems integrating robust protocols like Modbus and MQTT to consolidate production data from 30+ sensors.",
        "Managed and maintained MySQL and PostgreSQL relational databases in production to support 5 continuous active monitoring flows.",
      ],
      tags: ["Web Control Systems", "Modbus/MQTT PLC", "Sensors & IoT"],
    },
  },
  terminal: {
    title: "Live Execution Console - Fredy's Automations",
    subtitle:
      "Interactively test some of the Python and Shell automation tools and scripts Fredy has implemented. Click the quick access buttons or interact via the command line.",
    sandbox: "Automation Sandbox",
    welcome: "Fredy GNU/Linux Terminal v3.1.2 (tty1)",
    welcomeHelp:
      "Type a command or select one of the quick automations below.",
    helpTitle: "Available commands:",
    helpWhoami:
      "  whoami               Show quick technical identity of the developer.",
    helpSysMonitor:
      "  run sys_monitor      Simulate enterprise Unix server automation.",
    helpRagPipeline:
      "  run rag_pipeline     Simulate RAG semantic loading process with LangChain.",
    helpApiTest:
      "  run api_test         Validate Django & DRF API status.",
    helpContact: "  contact              Fredy's contact details.",
    helpClear:
      "  clear                Clear the entire console screen.",
    whoamiUser: "User: Fredy Hernández",
    whoamiRole: "Role: Python Backend Developer / AI Applications Creator",
    whoamiSpecialty:
      "Specialty: Django, Unix Automations, RAG pipelines, LangChain",
    whoamiLocation:
      "Location: Spain | 100% Remote | EU work permit",
    contactTitle2: "Contact Information:",
    contactEmail: "  Email:    fredyhdezv31@gmail.com",
    contactPhone: "  Phone:    +34 674 867 848",
    contactSLA: "  SLA:      Immediate response < 12 hours.",
    sysMonitorStart: "Starting script: sys_monitor.py ...",
    sysMonitorConnecting:
      "[INFO] Connecting to SERESCO Unix infrastructure ...",
    sysMonitorAnalyzing:
      "[OK] Analyzing 214 production servers ...",
    sysMonitorSystems:
      "[OK] SuSE, Solaris, AIX systems scanned automatically.",
    sysMonitorMetric:
      "[METRIC] Corporate SLA maintained at 99.9% high availability.",
    sysMonitorSuccess:
      "[SUCCESS] Unix monitoring completed with 0 priority alerts active.",
    ragStart:
      "Running pipeline_rag.py with LangChain & OpenAI API ...",
    ragStep1:
      "[STEP 1/3] Loading corporate PDFs and segmenting paragraphs ...",
    ragStep2:
      "[STEP 2/3] Generating semantic vectors in vector db (Hugging Face / OpenAI Embeddings) ...",
    ragStep3:
      "[STEP 3/3] Retrieving context for prompt with RAG (LangChain) ...",
    ragResponse:
      "[AI RESPONSE] 'Artificial intelligence successfully integrated minimizing hallucinations.'",
    ragSuccess:
      "[SUCCESS] Pipeline completed. Semantic search active. Accuracy: 98.4%",
    apiTestStart:
      "Starting test suite for Django & FastAPI APIs ...",
    apiTestDrf:
      "[DRF] Testing integration endpoints with Westcon-Comstor Spain ...",
    apiTestGet: "[OK] GET /api/v1/distribution-sync/ -> HTTP 200 OK (0.32s)",
    apiTestPost:
      "[OK] POST /api/v1/orders-push/ -> HTTP 201 Created (0.45s)",
    apiTestMetrics:
      "[METRICS] Automatic inventory synchronization running regularly.",
    apiTestSavings:
      "[SAVINGS] Avoiding manual calls: Synchronization saves ~8 hours/week.",
    apiTestSuccess:
      "[SUCCESS] 4 robust APIs tested in production. Coverage: 100%",
    unknownCommand: "Unknown command: {cmd}. Type 'help' to see options.",
    quickDemos: "One-Click Automatic Demos:",
    runSysMonitor: "Unix Monitoring",
    runRagPipeline: "RAG Pipeline (AI)",
    runApiTest: "Django API Test",
    runContact: "Contact",
    inputPlaceholder:
      "Type 'run sys_monitor', 'whoami', 'help'...",
    execute: "Run",
    reset: "Reset",
    running: "Running...",
  },
  footer: {
    copyright: "© {year} Fredy Hernández · Backend Developer & Automation Engineer",
    designed:
      "Designed under Sleek Interface guidelines | Cloud Run Server",
  },
};
