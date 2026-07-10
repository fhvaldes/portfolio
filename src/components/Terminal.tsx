import React, { useState, useRef, useEffect } from "react";
import { Terminal as TermIcon, Play, RefreshCw, ChevronRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface LogLine {
  text: string;
  type: "input" | "system" | "success" | "warning" | "error" | "info";
}

export default function Terminal() {
  const { t } = useLanguage();
  const [history, setHistory] = useState<LogLine[]>([
    { text: t.terminal.welcome, type: "system" },
    { text: t.terminal.welcomeHelp, type: "system" },
    { text: t.terminal.helpTitle, type: "info" },
  ]);
  const [inputVal, setInputVal] = useState<string>("");
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const addLog = (text: string, type: LogLine["type"] = "system") => {
    setHistory((prev) => [...prev, { text, type }]);
  };

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setHistory((prev) => [...prev, { text: `$ ${rawCmd}`, type: "input" }]);

    if (cmd === "help") {
      addLog(t.terminal.helpTitle, "info");
      addLog(t.terminal.helpWhoami, "info");
      addLog(t.terminal.helpSysMonitor, "info");
      addLog(t.terminal.helpRagPipeline, "info");
      addLog(t.terminal.helpApiTest, "info");
      addLog(t.terminal.helpContact, "info");
      addLog(t.terminal.helpClear, "info");
    } else if (cmd === "clear") {
      setHistory([]);
    } else if (cmd === "whoami") {
      addLog(t.terminal.whoamiUser, "success");
      addLog(t.terminal.whoamiRole, "success");
      addLog(t.terminal.whoamiSpecialty, "success");
      addLog(t.terminal.whoamiLocation, "success");
    } else if (cmd === "contact") {
      addLog(t.terminal.contactTitle2, "info");
      addLog(t.terminal.contactEmail, "success");
      addLog(t.terminal.contactPhone, "success");
      addLog(t.terminal.contactSLA, "success");
    } else if (cmd === "run sys_monitor") {
      addLog(t.terminal.sysMonitorStart, "info");
      addLog(t.terminal.sysMonitorConnecting, "system");
      addLog(t.terminal.sysMonitorAnalyzing, "success");
      addLog(t.terminal.sysMonitorSystems, "success");
      addLog(t.terminal.sysMonitorMetric, "success");
      addLog(t.terminal.sysMonitorSuccess, "success");
    } else if (cmd === "run rag_pipeline") {
      addLog(t.terminal.ragStart, "info");
      addLog(t.terminal.ragStep1, "system");
      addLog(t.terminal.ragStep2, "system");
      addLog(t.terminal.ragStep3, "system");
      addLog(t.terminal.ragResponse, "success");
      addLog(t.terminal.ragSuccess, "success");
    } else if (cmd === "run api_test") {
      addLog(t.terminal.apiTestStart, "info");
      addLog(t.terminal.apiTestDrf, "system");
      addLog(t.terminal.apiTestGet, "success");
      addLog(t.terminal.apiTestPost, "success");
      addLog(t.terminal.apiTestMetrics, "info");
      addLog(t.terminal.apiTestSavings, "success");
      addLog(t.terminal.apiTestSuccess, "success");
    } else {
      addLog(t.terminal.unknownCommand.replace("{cmd}", rawCmd), "error");
    }

    setInputVal("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  const getLineStyle = (type: LogLine["type"]) => {
    switch (type) {
      case "input":
        return "text-slate-100 font-bold";
      case "system":
        return "text-slate-400";
      case "success":
        return "text-emerald-400";
      case "warning":
        return "text-yellow-400 text-xs";
      case "error":
        return "text-rose-450 font-semibold";
      case "info":
        return "text-cyan-400";
      default:
        return "text-slate-300";
    }
  };

  const COMMAND_SUGGESTIONS = [
    { label: t.terminal.runSysMonitor, cmd: "run sys_monitor" },
    { label: t.terminal.runRagPipeline, cmd: "run rag_pipeline" },
    { label: t.terminal.runApiTest, cmd: "run api_test" },
    { label: t.terminal.runContact, cmd: "contact" },
  ];

  return (
    <section id="terminal" className="py-20 px-6 bg-slate-950 relative border-b border-slate-900">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono rounded-md">
            <TermIcon className="w-3.5 h-3.5" />
            <span>{t.terminal.sandbox}</span>
          </div>
          <h2 className="text-3xl font-sans font-bold text-white tracking-tight">
            {t.terminal.title}
          </h2>
          <p className="text-slate-400 max-w-2xl font-sans leading-relaxed text-sm">
            {t.terminal.subtitle}
          </p>
        </div>

        {/* Console Box */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/80 shadow-2xl overflow-hidden font-mono text-sm">
          {/* Windows bar decor */}
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-slate-500 ml-2">bash - fredy@portfolio:~/automations</span>
            </div>
            <button
              onClick={() => {
                setHistory([
                  { text: "[INFO] Console re-initialized.", type: "info" },
                  { text: t.terminal.welcomeHelp, type: "system" }
                ]);
              }}
              title={t.terminal.reset}
              className="p-1 text-slate-500 hover:text-slate-300 transition cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Logs Terminal Body */}
          <div className="p-5 h-72 sm:h-96 overflow-y-auto space-y-2 bg-slate-950/90 selection:bg-cyan-500/30">
            {history.map((line, idx) => (
              <div key={idx} className={`leading-relaxed whitespace-pre-wrap ${getLineStyle(line.type)}`}>
                {line.text}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleFormSubmit} className="bg-slate-950/55 p-3.5 border-t border-slate-800 flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-cyan-400 animate-pulse" />
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={t.terminal.inputPlaceholder}
              className="flex-1 bg-transparent text-slate-200 outline-none placeholder:text-slate-700 caret-cyan-400"
            />
            <button
              type="submit"
              className="p-1 px-3 bg-slate-900 hover:bg-slate-850 rounded border border-slate-800 hover:border-slate-700 text-slate-300 transition cursor-pointer flex items-center gap-1.5 text-xs text-cyan-400"
            >
              <Play className="w-3 h-3" />
              <span>{t.terminal.execute}</span>
            </button>
          </form>
        </div>

        {/* Suggestion Quick Chips */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-slate-500 block uppercase tracking-wider">{t.terminal.quickDemos}</span>
          <div className="flex flex-wrap gap-2">
            {COMMAND_SUGGESTIONS.map((sug) => (
              <button
                key={sug.cmd}
                onClick={() => handleCommand(sug.cmd)}
                className="py-1.5 px-3 rounded-md bg-slate-900/50 hover:bg-slate-850 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition cursor-pointer"
              >
                {sug.label} ({sug.cmd})
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
