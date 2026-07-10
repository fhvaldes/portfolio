import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TechItem } from "../types";
import { Cpu, Server, Code, Database, Settings, ShieldCheck, BookOpen } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const CATEGORIES = [
  { id: "all", labelKey: "filterAll", icon: Cpu },
  { id: "ai", labelKey: "filterAI", icon: BookOpen },
  { id: "languages", labelKey: "filterLanguages", icon: Code },
  { id: "frameworks", labelKey: "filterFrameworks", icon: Server },
  { id: "databases", labelKey: "filterDatabases", icon: Database },
  { id: "infra", labelKey: "filterInfra", icon: Settings }
] as const;

const TECH_ITEMS: { name: string; category: TechItem["category"]; level: string; techKey: string }[] = [
  { name: "Python", category: "languages", level: "Experto", techKey: "python" },
  { name: "Bash & Shell Scripting", category: "languages", level: "Experto", techKey: "bash" },
  { name: "SQL", category: "languages", level: "Avanzado", techKey: "sql" },
  { name: "Perl", category: "languages", level: "Intermedio", techKey: "perl" },
  { name: "JavaScript", category: "languages", level: "Intermedio", techKey: "javascript" },
  { name: "HTML5", category: "languages", level: "Experto", techKey: "html5" },
  { name: "CSS3", category: "languages", level: "Experto", techKey: "css3" },
  { name: "LangChain", category: "ai", level: "Avanzado", techKey: "langchain" },
  { name: "RAG Systems", category: "ai", level: "Avanzado", techKey: "rag" },
  { name: "OpenAI API", category: "ai", level: "Avanzado", techKey: "openai" },
  { name: "Hugging Face", category: "ai", level: "Avanzado", techKey: "huggingface" },
  { name: "LlamaIndex", category: "ai", level: "Intermedio", techKey: "llamaindex" },
  { name: "Django / DRF", category: "frameworks", level: "Experto", techKey: "django" },
  { name: "FastAPI", category: "frameworks", level: "Intermedio", techKey: "fastapi" },
  { name: "PostgreSQL", category: "databases", level: "Avanzado", techKey: "postgresql" },
  { name: "MySQL", category: "databases", level: "Avanzado", techKey: "mysql" },
  { name: "SQLite", category: "databases", level: "Avanzado", techKey: "sqlite" },
  { name: "Redis", category: "databases", level: "Intermedio", techKey: "redis" },
  { name: "Docker", category: "infra", level: "Avanzado", techKey: "docker" },
  { name: "AWS (Fundamentals)", category: "infra", level: "Intermedio", techKey: "aws" },
  { name: "Linux/Unix", category: "infra", level: "Experto", techKey: "linux" },
  { name: "Ubuntu", category: "infra", level: "Experto", techKey: "ubuntu" },
  { name: "Git", category: "infra", level: "Avanzado", techKey: "git" },
];

export default function TechStack() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const filteredTechs = TECH_ITEMS.filter(
    (tech) => activeCategory === "all" || tech.category === activeCategory
  );

  const getLevelColor = (level: string) => {
    if (level.includes("Experto")) return "bg-teal-500/10 text-teal-400 border-teal-500/30";
    if (level.includes("Avanzado")) return "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
    return "bg-indigo-500/10 text-indigo-400 border-indigo-500/30";
  };

  const getTechDetails = (techKey: string) => {
    const techs = t.techStack.techs as Record<string, { name: string; details: string }>;
    return techs[techKey] || { name: "", details: "" };
  };

  return (
    <section id="tech-stack" className="py-20 px-6 bg-slate-900/40 relative border-b border-slate-900">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            {t.techStack.title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-sans leading-relaxed text-sm sm:text-base">
            {t.techStack.subtitle}
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {CATEGORIES.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeCategory === cat.id;
            const label = t.techStack[cat.labelKey as keyof typeof t.techStack] as string;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedTech(null);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm transition font-sans cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-white border-cyan-500/50 shadow-md shadow-cyan-500/5"
                    : "bg-slate-950/40 text-slate-400 border-slate-800/80 hover:bg-slate-800/40 hover:text-slate-200"
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? "text-cyan-400" : "text-slate-500"}`} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Grid Visualizer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredTechs.map((tech) => {
              const techTranslation = getTechDetails(tech.techKey);
              return (
                <motion.div
                  layout
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedTech(selectedTech === tech.name ? null : tech.name)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer backdrop-blur-sm shadow-sm hover:translate-y-[-2px] ${
                    selectedTech === tech.name
                      ? "bg-slate-950/80 border-cyan-500/80 shadow-md shadow-cyan-500/10 text-white"
                      : "bg-slate-900 border-slate-800 hover:border-slate-700/80 text-slate-300 hover:bg-slate-850/60"
                  }`}
                >
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h4 className="font-sans font-bold text-base text-white">{techTranslation.name}</h4>
                    <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border ${getLevelColor(tech.level)}`}>
                      {tech.level}
                    </span>
                  </div>
                  
                  <p className="text-xs text-slate-400 font-sans line-clamp-2 leading-relaxed">
                    {techTranslation.details}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500 select-none">
                    <span>{t.techStack.clickForMore}</span>
                    <span className="text-cyan-500/80">⚡</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Technology Deep Dive Drawer / Panel */}
        <AnimatePresence>
          {selectedTech && (() => {
            const tech = TECH_ITEMS.find(t => t.name === selectedTech);
            if (!tech) return null;
            const techTranslation = getTechDetails(tech.techKey);
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="p-6 rounded-xl border border-cyan-500/40 bg-slate-950/80 shadow-2xl space-y-4 max-w-3xl mx-auto"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-xl text-white">
                      {techTranslation.name}
                    </h4>
                    <p className="text-xs text-cyan-400 font-mono uppercase tracking-wide">
                      {t.techStack.candidateLevel} {tech.level}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-sans text-slate-300 leading-relaxed">
                    {techTranslation.details}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-900/80 flex justify-between items-center text-xs font-mono text-slate-500">
                  <span>{t.techStack.ecosystem}</span>
                  <span className="text-teal-400">{t.techStack.pythonStack}</span>
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
    </section>
  );
}
