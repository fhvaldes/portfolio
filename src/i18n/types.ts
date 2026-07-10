export type Language = "es" | "en";

export interface Translations {
  // Navigation
  nav: {
    projects: string;
    experience: string;
    techStack: string;
    terminal: string;
    linkedin: string;
    hire: string;
  };
  // Hero
  hero: {
    available: string;
    name: string;
    subtitle: string;
    description: string;
    experience: string;
    experienceValue: string;
    specialty: string;
    specialtyValue: string;
    location: string;
    locationValue: string;
    viewStack: string;
    github: string;
    contactTitle: string;
    email: string;
    phone: string;
    locationLabel: string;
    workStatus: string;
    workStatusValue: string;
  };
  // Projects
  projects: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterBackend: string;
    filterAI: string;
    learnMore: string;
    hideDetails: string;
    details: string;
    repository: string;
    // Project 1: CineMatch
    cinematch: {
      category: string;
      description: string;
      longDescription: string;
    };
    // Project 2: TFM
    tfm: {
      category: string;
      description: string;
      longDescription: string;
    };
    // Project 3: FitTracker
    fittracker: {
      category: string;
      description: string;
      longDescription: string;
    };
    // Project 4: Receipt Tracker
    receipt: {
      category: string;
      description: string;
      longDescription: string;
    };
  };
  // TechStack
  techStack: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterAI: string;
    filterLanguages: string;
    filterFrameworks: string;
    filterDatabases: string;
    filterInfra: string;
    clickForMore: string;
    candidateLevel: string;
    ecosystem: string;
    pythonStack: string;
    // Tech items
    techs: {
      python: { name: string; details: string };
      bash: { name: string; details: string };
      sql: { name: string; details: string };
      perl: { name: string; details: string };
      javascript: { name: string; details: string };
      html5: { name: string; details: string };
      css3: { name: string; details: string };
      langchain: { name: string; details: string };
      rag: { name: string; details: string };
      openai: { name: string; details: string };
      huggingface: { name: string; details: string };
      llamaindex: { name: string; details: string };
      django: { name: string; details: string };
      fastapi: { name: string; details: string };
      postgresql: { name: string; details: string };
      mysql: { name: string; details: string };
      sqlite: { name: string; details: string };
      redis: { name: string; details: string };
      docker: { name: string; details: string };
      aws: { name: string; details: string };
      linux: { name: string; details: string };
      ubuntu: { name: string; details: string };
      git: { name: string; details: string };
    };
  };
  // Timeline
  timeline: {
    title: string;
    subtitle: string;
    performanceMetrics: string;
    savedPerWeek: string;
    manualSteps: string;
    // Jobs
    westcon: {
      role: string;
      company: string;
      location: string;
      period: string;
      achievements: string[];
      tags: string[];
    };
    seresco: {
      role: string;
      company: string;
      location: string;
      period: string;
      achievements: string[];
      tags: string[];
    };
    cuba: {
      role: string;
      company: string;
      location: string;
      period: string;
      achievements: string[];
      tags: string[];
    };
  };
  // Terminal
  terminal: {
    title: string;
    subtitle: string;
    sandbox: string;
    welcome: string;
    welcomeHelp: string;
    helpTitle: string;
    helpWhoami: string;
    helpSysMonitor: string;
    helpRagPipeline: string;
    helpApiTest: string;
    helpContact: string;
    helpClear: string;
    whoamiUser: string;
    whoamiRole: string;
    whoamiSpecialty: string;
    whoamiLocation: string;
    contactTitle2: string;
    contactEmail: string;
    contactPhone: string;
    contactSLA: string;
    sysMonitorStart: string;
    sysMonitorConnecting: string;
    sysMonitorAnalyzing: string;
    sysMonitorSystems: string;
    sysMonitorMetric: string;
    sysMonitorSuccess: string;
    ragStart: string;
    ragStep1: string;
    ragStep2: string;
    ragStep3: string;
    ragResponse: string;
    ragSuccess: string;
    apiTestStart: string;
    apiTestDrf: string;
    apiTestGet: string;
    apiTestPost: string;
    apiTestMetrics: string;
    apiTestSavings: string;
    apiTestSuccess: string;
    unknownCommand: string;
    quickDemos: string;
    runSysMonitor: string;
    runRagPipeline: string;
    runApiTest: string;
    runContact: string;
    inputPlaceholder: string;
    execute: string;
    reset: string;
    running: string;
  };
  // Footer
  footer: {
    copyright: string;
    designed: string;
  };
}
