import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExperienceItem } from "../types";
import { Briefcase, Calendar, MapPin, Percent, Clock, Database, Server } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const JOB_IDS = ["westcon", "seresco", "cuba"] as const;

export default function Timeline() {
  const { t } = useLanguage();
  const [selectedJob, setSelectedJob] = useState<string>("westcon");

  const getJobData = (jobId: string) => {
    const jobs: Record<string, any> = {
      westcon: t.timeline.westcon,
      seresco: t.timeline.seresco,
      cuba: t.timeline.cuba,
    };
    return jobs[jobId] || jobs.westcon;
  };

  const activeJob = getJobData(selectedJob);

  return (
    <section id="experience" className="py-20 px-6 bg-slate-950 relative border-b border-slate-900">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono rounded-md">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.nav.experience}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            {t.timeline.title}
          </h2>
          <p className="text-slate-400 max-w-2xl font-sans leading-relaxed text-sm sm:text-base">
            {t.timeline.subtitle}
          </p>
        </div>

        {/* Master Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Navigation vertical list */}
          <div className="md:col-span-4 space-y-2">
            {JOB_IDS.map((jobId) => {
              const job = getJobData(jobId);
              const isActive = selectedJob === jobId;
              return (
                <button
                  key={jobId}
                  onClick={() => setSelectedJob(jobId)}
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
              <span className="text-white block font-semibold uppercase text-[10px] tracking-wide text-slate-400">{t.timeline.performanceMetrics}</span>
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-900 text-teal-400">
                  <span className="font-bold text-base block">~8h</span>
                  <span>{t.timeline.savedPerWeek}</span>
                </div>
                <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-900 text-cyan-400">
                  <span className="font-bold text-base block">-60%</span>
                  <span>{t.timeline.manualSteps}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Job description section animates when a job is picked */}
          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedJob}
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
                  {activeJob.tags?.map((tag: string, idx: number) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase bg-slate-950 px-2 py-1 rounded text-cyan-400 border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Structured achievements items list */}
                <ul className="space-y-3.5">
                  {activeJob.achievements?.map((ach: string, idx: number) => (
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
