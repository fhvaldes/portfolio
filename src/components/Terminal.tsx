import React, { useState, useRef, useEffect } from "react";
import { Terminal as TermIcon, Play, RefreshCw, ChevronRight } from "lucide-react";

interface LogLine {
  text: string;
  type: "input" | "system" | "success" | "warning" | "error" | "info";
}

const COMMAND_SUGGESTIONS = [
  { label: "Ver Identidad", cmd: "whoami" },
  { label: "Pipeline RAG (IA)", cmd: "run rag_pipeline" },
  { label: "Monitoreo Unix", cmd: "run sys_monitor" },
  { label: "Test APIs Django", cmd: "run api_test" },
];

export default function Terminal() {
  const [history, setHistory] = useState<LogLine[]>([
    { text: "Fredy GNU/Linux Terminal v3.1.2 (tty1)", type: "system" },
    { text: "Escribe un comando o selecciona una de las automatizaciones rápidas a continuación.", type: "system" },
    { text: "Escribe 'help' para ver la lista de comandos disponibles.", type: "info" },
  ]);
  const [inputVal, setInputVal] = useState<string>("");
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Desplazar la consola hasta abajo
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const addLog = (text: string, type: LogLine["type"] = "system") => {
    setHistory((prev) => [...prev, { text, type }]);
  };

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    // Registrar comando escrito
    setHistory((prev) => [...prev, { text: `$ ${rawCmd}`, type: "input" }]);

    if (cmd === "help") {
      addLog("Comandos disponibles:", "info");
      addLog("  whoami               Muestra la identidad técnica rápida del desarrollador.", "info");
      addLog("  run sys_monitor      Simula automatización de servidores Unix empresariales.", "info");
      addLog("  run rag_pipeline     Simula proceso de carga semántica RAG con LangChain.", "info");
      addLog("  run api_test         Valida el estado de APIs Django & DRF.", "info");
      addLog("  contact              Detalles de contacto de Fredy.", "info");
      addLog("  clear                Limpia toda la pantalla de la consola.", "info");
    } else if (cmd === "clear") {
      setHistory([]);
    } else if (cmd === "whoami") {
      addLog("Usuario: Fredy Hernández", "success");
      addLog("Rol: Python Backend Developer / AI Applications Creator", "success");
      addLog("Especialidad: Django, Automatizaciones Unix, RAG pipelines, LangChain", "success");
      addLog("Ubicación: España | Remoto 100% | Con permiso de trabajo UE", "success");
    } else if (cmd === "contact") {
      addLog("Información de Contacto:", "info");
      addLog("  Email:    fredyhdezv31@gmail.com", "success");
      addLog("  Teléfono: +34 674 867 848", "success");
      addLog("  SLA:      Respuesta inmediata < 12 horas.", "success");
    } else if (cmd === "run sys_monitor") {
      addLog("Iniciando script: sys_monitor.py ...", "info");
      addLog("[INFO] Conectando a infraestructuras Unix de SERESCO ...", "system");
      addLog("[OK] Analizando 214 servidores en producción ...", "success");
      addLog("[OK] Sistemas SuSE, Solaris, AIX escaneados de forma automatizada.", "success");
      addLog("[METRIC] SLA corporativo mantenido al 99.9% de alta disponibilidad.", "success");
      addLog("[SUCCESS] Monitoreo Unix finalizado con 0 alertas prioritarias activas.", "success");
    } else if (cmd === "run rag_pipeline") {
      addLog("Ejecutando pipeline_rag.py con LangChain & OpenAI API ...", "info");
      addLog("[STEP 1/3] Cargando PDFs corporativos y segmentando párrafos ...", "system");
      addLog("[STEP 2/3] Generando vectores semánticos en db vectorial (Hugging Face / OpenAI Embeddings) ...", "system");
      addLog("[STEP 3/3] Recuperando contexto para prompt con RAG (LangChain) ...", "system");
      addLog("[IA RESPONSE] 'La inteligencia artificial ha sido integrada con éxito minimizando alucinaciones.'", "success");
      addLog("[SUCCESS] Pipeline completado. Búsqueda semántica activa. Precisión: 98.4%", "success");
    } else if (cmd === "run api_test") {
      addLog("Iniciando suite de tests para APIs en Django & FastAPI ...", "info");
      addLog("[DRF] Testeando endpoints de integración con Westcon-Comstor España ...", "system");
      addLog("[OK] GET /api/v1/distribution-sync/ -> HTTP 200 OK (0.32s)", "success");
      addLog("[OK] POST /api/v1/orders-push/ -> HTTP 201 Created (0.45s)", "success");
      addLog("[METRICS] Sincronización automática de inventario ejecutandose con regularidad.", "info");
      addLog("[AHORRO] Evitando llamadas manuales: Sincronización ahorra ~8 horas/semana.", "success");
      addLog("[SUCCESS] 4 APIs robustas testeadas en producción. Cobertura: 100%", "success");
    } else {
      addLog(`Comando no reconocido: ${rawCmd}. Escribe 'help' para ver opciones.`, "error");
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

  return (
    <section id="terminal" className="py-20 px-6 bg-slate-950 relative border-b border-slate-900">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono rounded-md">
            <TermIcon className="w-3.5 h-3.5" />
            <span>Sandbox de Automatizaciones</span>
          </div>
          <h2 className="text-3xl font-sans font-bold text-white tracking-tight">
            Consola de Ejecución en Vivo - Automatizaciones de Fredy
          </h2>
          <p className="text-slate-400 max-w-2xl font-sans leading-relaxed text-sm">
            Prueba de forma interactiva algunas de las herramientas y scripts automatizados en Python y Shell que Fredy ha implementado. Haz clic en los botones de acceso rápido o interactúa en la línea de comandos.
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
                  { text: "[INFO] Consola re-inicializada con éxito.", type: "info" },
                  { text: "Escribe 'help' para comandos.", type: "system" }
                ]);
              }}
              title="Reiniciar consola"
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
              placeholder="Escribe 'run sys_monitor', 'whoami', 'help'..."
              className="flex-1 bg-transparent text-slate-200 outline-none placeholder:text-slate-700 caret-cyan-400"
            />
            <button
              type="submit"
              className="p-1 px-3 bg-slate-900 hover:bg-slate-850 rounded border border-slate-800 hover:border-slate-700 text-slate-300 transition cursor-pointer flex items-center gap-1.5 text-xs text-cyan-400"
            >
              <Play className="w-3 h-3" />
              <span>Ejecutar</span>
            </button>
          </form>
        </div>

        {/* Suggestion Quick Chips */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-slate-500 block uppercase tracking-wider">Demostraciones Automáticas en Un-Clic:</span>
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
