import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TechItem } from "../types";
import { Cpu, Server, Code, Database, Settings, ShieldCheck, BookOpen } from "lucide-react";

const TECH_ITEMS: TechItem[] = [
  {
    name: "Python",
    category: "languages",
    level: "Experto",
    details: "Lenguaje principal utilizado durante más de 3 años para APIs (Django, FastAPI), microcontroladores, scripts de automatización industrial y arquitectura LLM."
  },
  {
    name: "Bash & Shell Scripting",
    category: "languages",
    level: "Experto",
    details: "Creación de 6+ complejas herramientas de automatización de operaciones críticas para mas de 200 servidores Unix en SERESCO."
  },
  {
    name: "SQL",
    category: "languages",
    level: "Avanzado",
    details: "Optimización de consultas relacionales complejas, reducción de tiempos de respuesta del 30% al 50% en bases de datos productivas."
  },
  {
    name: "Perl",
    category: "languages",
    level: "Intermedio",
    details: "Mantenimiento y desarrollo de scripts legados para automatización en servidores Unix."
  },
  {
    name: "JavaScript",
    category: "languages",
    level: "Intermedio",
    details: "Uso en scripts de automatización, integración con APIs REST y build tools. Familiaridad con React en proyectos propios."
  },
  {
    name: "HTML5",
    category: "languages",
    level: "Experto",
    details: "Estructuración semántica de interfaces web, formularios accesibles y integración con frameworks CSS."
  },
  {
    name: "CSS3",
    category: "languages",
    level: "Experto",
    details: "Diseño responsive, Flexbox, Grid, animaciones y frameworks como Tailwind CSS y Bootstrap."
  },
  {
    name: "LangChain",
    category: "ai",
    level: "Avanzado",
    details: "Desarrollo de flujos de Agentes Inteligentes, encadenamiento de prompts complejos y almacenamiento de contexto con bases vectoriales."
  },
  {
    name: "Sistemas RAG",
    category: "ai",
    level: "Avanzado",
    details: "Arquitectura completa de Retrieval-Augmented Generation conectando documentos corporativos con bases vectoriales con mínima alucinación."
  },
  {
    name: "OpenAI API",
    category: "ai",
    level: "Avanzado",
    details: "Integración de modelos GPT-4 y GPT-3.5 para clasificación, resúmenes automáticos de datos estructurados y llamadas a funciones (tools)."
  },
  {
    name: "Hugging Face",
    category: "ai",
    level: "Avanzado",
    details: "Inferencia local de modelos de código abierto y fine-tuning básico para tareas de clasificación semántica."
  },
  {
    name: "LlamaIndex",
    category: "ai",
    level: "Intermedio",
    details: "Indexación e ingesta eficiente de datos empresariales multi-formato para alimentar motores semánticos rápidos."
  },
  {
    name: "Django / DRF",
    category: "frameworks",
    level: "Experto",
    details: "Desarrollo completo de aplicaciones backend multi-capa robustas, incluyendo integración de 4+ APIs REST con distribuidores externos en Westcon-Comstor."
  },
  {
    name: "FastAPI",
    category: "frameworks",
    level: "Intermedio / Conocimientos fundamentales",
    details: "Creación de microservicios asíncronos rápidos auto-documentados con Swagger/OpenAPI."
  },
  {
    name: "PostgreSQL",
    category: "databases",
    level: "Avanzado",
    details: "Administración, indexación y optimización de base de datos relacionales en entornos industriales de alta disponibilidad."
  },
  {
    name: "MySQL",
    category: "databases",
    level: "Avanzado",
    details: "Administración y estructuración de bases de datos para sistemas de adquisición con más de 30 sensores en tiempo real."
  },
  {
    name: "SQLite",
    category: "databases",
    level: "Avanzado",
    details: "Base de datos ligera para desarrollo local y prototipado rápido en proyectos Django y aplicaciones embebidas."
  },
  {
    name: "Redis",
    category: "databases",
    level: "Intermedio",
    details: "Caché en memoria, colas de mensajes y almacenamiento de sesiones para aplicaciones de alto rendimiento."
  },
  {
    name: "Docker",
    category: "infra",
    level: "Avanzado",
    details: "Contenerización de microservicios Python/Django para estandarizar entornos de desarrollo, testing y producción."
  },
  {
    name: "AWS (Fundamentos)",
    category: "infra",
    level: "Intermedio",
    details: "Despliegue de instancias EC2, almacenamiento S3 e inicio en administración fundamental cloud."
  },
  {
    name: "Entornos Linux/Unix",
    category: "infra",
    level: "Experto",
    details: "Especialista en servidores SuSE, Solaris, AIX. Gestión de infraestructuras críticas y mantenimiento bajo SLA del 99.9%."
  },
  {
    name: "Ubuntu",
    category: "infra",
    level: "Experto",
    details: "Administración de servidores Ubuntu/Debian, despliegue de aplicaciones, configuración de servicios y seguridad del sistema."
  },
  {
    name: "Git",
    category: "infra",
    level: "Avanzado",
    details: "Control de versiones, flujos de GitFlow colaborativos con múltiples equipos de desarrollo."
  }
];

const CATEGORIES = [
  { id: "all", label: "Todos", icon: Cpu },
  { id: "ai", label: "IA, LLMs & RAG", icon: BookOpen },
  { id: "languages", label: "Lenguajes", icon: Code },
  { id: "frameworks", label: "Web Frameworks", icon: Server },
  { id: "databases", label: "Bases de Datos", icon: Database },
  { id: "infra", label: "Infra & Unix", icon: Settings }
] as const;

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  const filteredTechs = TECH_ITEMS.filter(
    (tech) => activeCategory === "all" || tech.category === activeCategory
  );

  const getLevelColor = (level: string) => {
    if (level.includes("Experto")) return "bg-teal-500/10 text-teal-400 border-teal-500/30";
    if (level.includes("Avanzado")) return "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
    return "bg-indigo-500/10 text-indigo-400 border-indigo-500/30";
  };

  return (
    <section id="tech-stack" className="py-20 px-6 bg-slate-900/40 relative border-b border-slate-900">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Tecnologías y Stack Técnico
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-sans leading-relaxed text-sm sm:text-base">
            Especializado en el ecosistema de Python de alto rendimiento y soluciones de Inteligencia Artificial aplicada. Filtra las habilidades para explorar detalles.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {CATEGORIES.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeCategory === cat.id;
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
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Grid Visualizer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredTechs.map((tech) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedTech(selectedTech?.name === tech.name ? null : tech)}
                className={`p-5 rounded-xl border transition-all cursor-pointer backdrop-blur-sm shadow-sm hover:translate-y-[-2px] ${
                  selectedTech?.name === tech.name
                    ? "bg-slate-950/80 border-cyan-500/80 shadow-md shadow-cyan-500/10 text-white"
                    : "bg-slate-900 border-slate-800 hover:border-slate-700/80 text-slate-300 hover:bg-slate-850/60"
                }`}
              >
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h4 className="font-sans font-bold text-base text-white">{tech.name}</h4>
                  <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border ${getLevelColor(tech.level)}`}>
                    {tech.level}
                  </span>
                </div>
                
                <p className="text-xs text-slate-400 font-sans line-clamp-2 leading-relaxed">
                  {tech.details}
                </p>

                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500 select-none">
                  <span>Haga clic para ver más</span>
                  <span className="text-cyan-500/80">⚡</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Technology Deep Dive Drawer / Panel */}
        <AnimatePresence>
          {selectedTech && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="p-6 rounded-xl border border-cyan-500/40 bg-slate-950/80 shadow-2xl space-y-4 max-w-3xl mx-auto "
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-xl text-white">
                    {selectedTech.name}
                  </h4>
                  <p className="text-xs text-cyan-400 font-mono uppercase tracking-wide">
                    Nivel del Candidato: {selectedTech.level}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-sans text-slate-300 leading-relaxed">
                  {selectedTech.details}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-900/80 flex justify-between items-center text-xs font-mono text-slate-500">
                <span>Ecosistema Fredy Hernández</span>
                <span className="text-teal-400">#PythonStack</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
