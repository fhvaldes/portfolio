import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, FolderGit2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface ProjectItem {
  id: string;
  title: string;
  category: "ai" | "backend" | "automation";
  categoryLabel: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  techGroup: string;
  metrics: string;
  githubUrl: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "cinematch",
    title: "CineMatch AI Recommendation Engine",
    category: "backend",
    categoryLabel: "cinematch",
    description: "cinematch",
    longDescription: "cinematch",
    image: "/images/projects/cinematch-placeholder.png",
    tags: ["Python", "Django", "DRF", "PostgreSQL", "REST API", "CI/CD"],
    techGroup: "Backend API",
    metrics: "MIT License",
    githubUrl: "https://github.com/fhvaldes/CineMatch",
  },
  {
    id: "tfm",
    title: "TFM: Automated Robobo with LLM (GPT-4)",
    category: "automation",
    categoryLabel: "tfm",
    description: "tfm",
    longDescription: "tfm",
    image: "/images/projects/tfm-placeholder.png",
    tags: ["Python", "OpenAI API", "GPT-4", "Robotics", "Computer Vision", "UDC"],
    techGroup: "AI & Robotics",
    metrics: "MSc · Universidade da Coruña",
    githubUrl: "https://github.com/fhvaldes/TFMproject",
  },
  {
    id: "fittracker",
    title: "FitTrack Pro",
    category: "automation",
    categoryLabel: "fittracker",
    description: "fittracker",
    longDescription: "fittracker",
    image: "/images/projects/fittracker-placeholder.png",
    tags: ["Python", "Django", "DRF", "React", "JWT", "LLM", "PostgreSQL"],
    techGroup: "Full-Stack & AI",
    metrics: "Frontend + Backend + LLM",
    githubUrl: "https://github.com/fhvaldes/FitTracker",
  },
  {
    id: "receipt-tracker",
    title: "Receipt Tracker",
    category: "backend",
    categoryLabel: "receipt",
    description: "receipt",
    longDescription: "receipt",
    image: "/images/projects/receipt-tracker-placeholder.png",
    tags: ["Python", "Django", "PostgreSQL", "OCR", "Docker", "Bootstrap"],
    techGroup: "Backend & DevOps",
    metrics: "Docker + PostgreSQL",
    githubUrl: "https://github.com/fhvaldes/receipt_tracker",
  }
];

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<"all" | "ai" | "backend" | "automation">("all");
  const [activeDetails, setActiveDetails] = useState<string | null>(null);

  const filteredProjects = PROJECTS.filter(p => filter === "all" || p.category === filter);

  const getProjectTranslation = (id: string, field: "categoryLabel" | "description" | "longDescription") => {
    const translations: Record<string, Record<string, string>> = {
      cinematch: t.projects.cinematch,
      tfm: t.projects.tfm,
      fittracker: t.projects.fittracker,
      "receipt-tracker": t.projects.receipt,
    };
    return translations[id]?.[field] || "";
  };

  return (
    <section id="projects" className="py-24 px-6 relative border-b border-white/5 bg-[#050505]">
      {/* Decorative localized blur highlight */}
      <div className="absolute top-1/2 left-1/3 w-[30%] h-[30%] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Section Title */}
        <div className="space-y-4">
          <div className="p-1 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl w-fit">
            <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] rounded w-fit">
              <FolderGit2 className="w-3.5 h-3.5 inline mr-1" /> {t.projects.title}
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tighter text-white">
            {t.projects.title}
          </h2>
          <p className="text-slate-400 max-w-2xl font-sans leading-relaxed text-sm sm:text-base">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2.5 pb-4 border-b border-white/5">
          {[
            { id: "all", label: t.projects.filterAll },
            { id: "backend", label: t.projects.filterBackend },
            { id: "automation", label: t.projects.filterAI }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setFilter(tab.id as any);
                setActiveDetails(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-widest transition cursor-pointer ${
                filter === tab.id
                  ? "bg-white text-black font-bold shadow-md shadow-white/5"
                  : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-850"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col bg-[#0b0b0b]/80 border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 relative"
              >
                {/* Project Image */}
                <div className="h-44 relative bg-gradient-to-br from-slate-900 to-slate-950 border-b border-white/5 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Fallback gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 flex items-center justify-center">
                    <div className="text-center space-y-1 px-4">
                      <div className="text-[9px] font-mono uppercase text-slate-500 tracking-wider">
                        {project.techGroup}
                      </div>
                      <div className="text-[10px] font-mono text-cyan-400 font-bold">
                        {project.metrics}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                      {getProjectTranslation(project.id, "categoryLabel")}
                    </span>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed line-clamp-3">
                      {getProjectTranslation(project.id, "description")}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map(t => (
                      <span key={t} className="text-[9px] font-mono bg-slate-950 px-2 py-0.5 rounded text-slate-300 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Button details AND Link out */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                    <button
                      onClick={() => setActiveDetails(activeDetails === project.id ? null : project.id)}
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1 cursor-pointer focus:outline-none"
                    >
                      <span>{activeDetails === project.id ? t.projects.hideDetails : t.projects.learnMore}</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-[#111111] hover:bg-slate-800 text-slate-450 hover:text-white transition-all border border-white/5 shrink-0 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5"
                      title="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Absolute Expanded Detail Layer */}
                <AnimatePresence>
                  {activeDetails === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-slate-950/95 border-t border-white/5 p-5 font-sans space-y-3"
                    >
                      <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{t.projects.details}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {getProjectTranslation(project.id, "longDescription")}
                      </p>
                      <div className="bg-slate-900/40 border border-white/5 p-2 rounded text-[11px] font-mono text-slate-400">
                        <strong className="text-white">{t.projects.repository}</strong> {project.githubUrl}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
