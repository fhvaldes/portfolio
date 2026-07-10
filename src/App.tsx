import React, { useRef } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Terminal from "./components/Terminal";
import Timeline from "./components/Timeline";
import { Code, Briefcase, Activity, ExternalLink, Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function App() {
  const techSectionRef = useRef<HTMLDivElement>(null);

  const scrollToTech = () => {
    techSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("fredyhdezv31@gmail.com");
    alert("¡Email de Fredy copiado al portapapeles!");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden flex flex-col relative selection:bg-blue-500/20">
      
      {/* Absolute Ambient Background Lights as per Sleek Design */}
      <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[35%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[45%] h-[45%] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none"></div>

      {/* Modern Navigation Header */}
      <nav className="relative z-50 flex flex-col sm:flex-row justify-between items-center px-6 sm:px-12 py-6 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center font-mono font-bold text-white text-sm shadow-md shadow-blue-500/10">
            FH
          </div>
          <div>
            <div className="text-lg font-extrabold tracking-tighter uppercase">Fredy Hernández</div>
            <div className="text-[10px] text-blue-400 font-mono uppercase tracking-widest">Backend Developer · Python · Django</div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-xs font-medium uppercase tracking-widest text-slate-400">
          <a href="#projects" className="hover:text-white transition-colors text-blue-400 hover:text-blue-350">Proyectos</a>
          <a href="#experience" className="hover:text-white transition-colors">Experiencia</a>
          <a href="#tech-stack" className="hover:text-white transition-colors">Tecnologías</a>
          <a href="#terminal" className="hover:text-white transition-colors">Consola Unix</a>
          <a href="https://www.linkedin.com/in/fredy-hern%C3%A1ndez-vald%C3%A9s-b26516202/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </a>
        </div>

        <button
          onClick={handleCopyEmail}
          className="px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-slate-200 transition cursor-pointer"
        >
          Contratar
        </button>
      </nav>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex flex-col">
        
        {/* Hero Section */}
        <Hero onExploreTech={scrollToTech} />

        {/* New Projects Showcase Section */}
        <Projects />

        {/* Section: Timeline Experience */}
        <Timeline />

        {/* Section: Tech Stack */}
        <div ref={techSectionRef}>
          <TechStack />
        </div>

        {/* Section: Interactive Terminal simulation */}
        <Terminal />

      </main>

      {/* Footer conform to physical and location elements in Sleek theme */}
      <footer className="relative z-10 px-6 sm:px-12 py-10 flex flex-col md:flex-row justify-between items-center border-t border-white/5 bg-[#050505] gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="text-[10px] text-slate-500 font-medium uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Fredy Hernández · Backend Developer & Automation Engineer
          </div>
          <p className="text-xs text-slate-650 font-mono">Diseñado bajo la directriz Sleek Interface | Servidor Cloud Run</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 items-center">
          <div className="text-xs text-slate-400 flex items-center space-x-2 bg-slate-900/40 p-2 rounded-full border border-white/5 px-4">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            <span>Ubicación: España (U.E.)</span>
          </div>

          <a href="mailto:fredyhdezv31@gmail.com" className="text-xs text-slate-400 hover:text-white transition cursor-pointer">
            fredyhdezv31@gmail.com
          </a>
          <a href="tel:+34674867848" className="text-xs text-slate-400 hover:text-white transition cursor-pointer">
            +34 674 867 848
          </a>
          <a href="https://www.linkedin.com/in/fredy-hern%C3%A1ndez-vald%C3%A9s-b26516202/" target="_blank" rel="noreferrer" className="text-xs text-slate-400 hover:text-white transition cursor-pointer flex items-center gap-1">
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </a>
          <a href="https://github.com/fhvaldes" target="_blank" rel="noreferrer" className="text-xs text-slate-400 hover:text-white transition cursor-pointer flex items-center gap-1">
            GitHub
          </a>
        </div>
      </footer>

    </div>
  );
}
