import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExperienceItem } from "../types";
import { Briefcase, Calendar, MapPin, Percent, Clock, Database, Server } from "lucide-react";

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "westcon",
    role: "Backend Python Developer",
    company: "Westcon-Comstor España",
    location: "España (Remoto / Presencial)",
    period: "Marzo 2025 – Octubre 2025",
    achievements: [
      "Diseñé e integré 4 APIs REST en Python/Django para conectar sistemas internos con plataformas externas de distribución, suprimiendo procesos manuales de sincronización que consumían ~8 horas semanales.",
      "Automaticé 3 flujos críticos de ingesta y transformación de datos aplicando patrones de código reutilizables en Python, recortando la intervención manual en un 60%.",
      "Optimicé 12 consultas complejas en PostgreSQL y MySQL, mejorando los tiempos de respuesta de procesos de negocio neurálgicos entre un 30% y un 50%."
    ]
  },
  {
    id: "seresco",
    role: "Desarrollador Software",
    company: "SERESCO, S.A.",
    location: "España",
    period: "Febrero 2024 – Marzo 2025",
    achievements: [
      "Diseñé y programé 6 utilidades internas en Python, Bash y Perl destinadas a la automatización de operaciones rutinarias en infraestructuras empresariales sobre Unix (sistemas SuSE, Solaris y AIX) de más de 200 servidores administrados.",
      "Aseguré el soporte avanzado constante sobre infraestructuras de misión crítica redundantes de alta disponibilidad, manteniendo un estricto acuerdo de nivel de servicio (SLA) del 99.9% durante 13 meses consecutivos.",
      "Coordiné exitósamente despliegues de infraestructura y correcciones de incidencias críticas colaborando con 3 equipos multidisciplinares integrando metodologías Jira."
    ]
  },
  {
    id: "cuba",
    role: "Especialista en Automatización",
    company: "Empresa TI Cuba",
    location: "La Habana, Cuba",
    period: "2022 – 2023",
    achievements: [
      "Lideré el diseño y la implementación de 2 plataformas web desarrolladas en Django orientadas a la visualización y control de métricas industriales en vivo para más de 15 operadores de planta simultáneos.",
      "Conecté scripts de Python con sistemas embebidos de microcontroladores integrando protocolos robustos como Modbus y MQTT para consolidar datos en producción de más de 30 sensores.",
      "Asumí la completa administración y mantenimiento de bases de datos relacionales MySQL y PostgreSQL en producción para dar soporte a 5 flujos ininterrumpidos de monitorización activa."
    ]
  }
];

export default function Timeline() {
  const [selectedJob, setSelectedJob] = useState<string>("westcon");

  const activeJob = EXPERIENCES.find((job) => job.id === selectedJob)!;

  return (
    <section id="experience" className="py-20 px-6 bg-slate-950 relative border-b border-slate-900">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono rounded-md">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Trayectoria Profesional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Experiencia Profesional de Fredy
          </h2>
          <p className="text-slate-400 max-w-2xl font-sans leading-relaxed text-sm sm:text-base">
            Tres años enfocados en resolver problemas complejos de backend, APIs REST y automatización a nivel de sistemas y bases de datos relacionales.
          </p>
        </div>

        {/* Master Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Navigation vertical list */}
          <div className="md:col-span-4 space-y-2">
            {EXPERIENCES.map((job) => {
              const isActive = selectedJob === job.id;
              return (
                <button
                  key={job.id}
                  onClick={() => setSelectedJob(job.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex flex-col gap-1.5 font-sans cursor-pointer ${
                    isActive
                      ? "bg-slate-900 border-cyan-500/50 shadow-md text-white"
                      : "bg-slate-950/40 border-slate-900 hover:bg-slate-900/40 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span className={`text-xs font-mono uppercase tracking-wider ${isActive ? "text-cyan-400" : "text-slate-600"}`}>
                    {job.period}
                  </span>
                  <span className="font-semibold text-sm sm:text-base leading-tight">
                    {job.role}
                  </span>
                  <span className="text-xs text-slate-500">
                    {job.company}
                  </span>
                </button>
              );
            })}

            {/* Micro achievement highlights indicator */}
            <div className="mt-8 p-4 bg-slate-900/30 border border-slate-800/80 rounded-xl space-y-3 font-sans text-xs text-slate-400">
              <span className="text-white block font-semibold uppercase text-[10px] tracking-wide text-slate-400">Métricas de Rendimiento Destacadas:</span>
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-900 text-teal-400">
                  <span className="font-bold text-base block">~8h</span>
                  <span>Ahorradas/semana</span>
                </div>
                <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-900 text-cyan-400">
                  <span className="font-bold text-base block">-60%</span>
                  <span>Pasos manuales</span>
                </div>
              </div>
            </div>
          </div>

          {/* Job description section animates when a job is picked */}
          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeJob.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6 backdrop-blur-sm"
              >
                <div className="flex flex-wrap justify-between items-start gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg sm:text-2xl font-sans font-bold text-white">
                      {activeJob.role}
                    </h3>
                    <div className="text-cyan-400 hover:underline text-sm font-medium mt-1">
                      {activeJob.company}
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-400 text-left sm:text-right font-mono">
                    <div className="flex items-center gap-1.5 justify-start sm:justify-end">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{activeJob.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-start sm:justify-end">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{activeJob.location}</span>
                    </div>
                  </div>
                </div>

                {/* Performance focus indicators tags */}
                <div className="flex flex-wrap gap-2">
                  {activeJob.id === "westcon" && (
                    <>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase bg-slate-950 px-2 py-1 rounded text-teal-400 border border-slate-800">
                        <Clock className="w-3 h-3" /> Django REST APIs
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase bg-slate-950 px-2 py-1 rounded text-cyan-400 border border-slate-800">
                        <Percent className="w-3 h-3" /> Automatización (60%)
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase bg-slate-950 px-2 py-1 rounded text-indigo-400 border border-slate-800">
                        <Database className="w-3 h-3" /> Tuning Query SQL
                      </span>
                    </>
                  )}
                  {activeJob.id === "seresco" && (
                    <>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase bg-slate-950 px-2 py-1 rounded text-teal-400 border border-slate-800">
                        <Server className="w-3 h-3" /> +200 Servidores Unix
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase bg-slate-950 px-2 py-1 rounded text-cyan-400 border border-slate-800">
                        <Percent className="w-3 h-3" /> SLA 99.9%
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase bg-slate-950 px-2 py-1 rounded text-indigo-400 border border-slate-800">
                        <Briefcase className="w-3 h-3" /> Colaboración Jira
                      </span>
                    </>
                  )}
                  {activeJob.id === "cuba" && (
                    <>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase bg-slate-950 px-2 py-1 rounded text-teal-400 border border-slate-800">
                        <Server className="w-3 h-3" /> Sistemas de Control Web
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase bg-slate-950 px-2 py-1 rounded text-cyan-400 border border-slate-800">
                        <Percent className="w-3 h-3" /> Modbus/MQTT PLC
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase bg-slate-950 px-2 py-1 rounded text-indigo-400 border border-slate-800">
                        <Database className="w-3 h-3" /> Sensores e IoT
                      </span>
                    </>
                  )}
                </div>

                {/* Structured achievements items list */}
                <ul className="space-y-3.5">
                  {activeJob.achievements.map((ach, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-slate-300 font-sans leading-relaxed">
                      <span className="text-cyan-400 select-none mt-1">✔</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
