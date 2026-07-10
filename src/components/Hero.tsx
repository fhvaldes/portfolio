import { motion } from "motion/react";
import { Terminal, Mail, Phone, MapPin, Download, CheckCircle, Linkedin, Github } from "lucide-react";

interface HeroProps {
  onExploreTech: () => void;
}

export default function Hero({ onExploreTech }: HeroProps) {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("fredyhdezv31@gmail.com");
    alert("¡Email copiado al portapapeles!");
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-100 py-20 px-6 border-b border-slate-900">
      {/* Background Decorative Gradients/Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Disponible para Proyectos / Contrataciones Estables</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl font-sans font-extrabold tracking-tight text-white leading-none"
              >
                Fredy Hernández
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl sm:text-2xl font-mono text-cyan-400 font-medium"
              >
                Backend Developer · Python · Django · FastAPI
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed font-sans"
            >
              Backend engineer specialising in <strong className="text-white">Python</strong> and <strong className="text-white">Django</strong>, with hands-on experience building production-grade APIs with <strong className="text-white">Django REST Framework</strong> and <strong className="text-white">FastAPI</strong>. Currently expanding into <strong className="text-white">AI/LLM integration</strong> for applied products.
            </motion.p>

            {/* Quick Stats Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 border-y border-slate-900 font-mono"
            >
              <div className="space-y-1">
                <span className="text-xs text-slate-500 block">EXPERIENCIA</span>
                <span className="text-lg font-bold text-white">3+ Años</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-500 block">ESPECIALIDAD</span>
                <span className="text-lg font-bold text-teal-400">Django & REST APIs</span>
              </div>
              <div className="space-y-1 col-span-2 sm:col-span-1">
                <span className="text-xs text-slate-500 block">UBICACIÓN / REMOTO</span>
                <span className="text-lg font-bold text-indigo-400">España / 100% Remoto</span>
              </div>
            </motion.div>

            {/* Quick Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={onExploreTech}
                className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white rounded-lg font-medium transition shadow-lg shadow-cyan-500/20 flex items-center gap-2 group cursor-pointer"
              >
                <Terminal className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Ver Stack & Tecnologías</span>
              </button>

              <a
                href="https://github.com/fhvaldes"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-200 rounded-lg font-medium transition flex items-center gap-2 cursor-pointer"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/fredy-hern%C3%A1ndez-vald%C3%A9s-b26516202/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-200 rounded-lg font-medium transition flex items-center gap-2 cursor-pointer"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>

          {/* Graphical/Creative Contact Card */}
          <div className="lg:col-span-5 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-sm rounded-xl border border-slate-800/80 bg-slate-900/60 p-6 backdrop-blur-md space-y-6 shadow-xl relative"
            >
              <div className="absolute top-3 right-3 flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>

              <div className="space-y-2">
                <h3 className="text-white text-sm font-mono block text-slate-500">&lt;contact_info&gt;</h3>
                <h4 className="text-white font-sans font-bold text-lg">Información de Contacto</h4>
              </div>

              {/* Contact item list */}
              <div className="space-y-4 font-mono text-sm text-slate-300">
                <div className="flex items-center gap-3 py-2 border-b border-slate-800/50">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <div className="flex-1 overflow-hidden text-ellipsis">
                    <span className="text-xs text-slate-500 block">EMAIL</span>
                    <button
                      onClick={handleCopyEmail}
                      className="hover:text-cyan-400 transition cursor-pointer text-left focus:outline-none"
                      title="Copiar email"
                    >
                      fredyhdezv31@gmail.com
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3 py-2 border-b border-slate-800/50">
                  <Phone className="w-4 h-4 text-teal-400" />
                  <div>
                    <span className="text-xs text-slate-500 block">TELÉFONO</span>
                    <a href="tel:+34674867848" className="hover:text-teal-400 transition">
                      +34 674 867 848
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 py-2 border-b border-slate-800/50">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <div>
                    <span className="text-xs text-slate-500 block">UBICACIÓN</span>
                    <span>España (Trabajo 100% Remoto)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 py-1">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="text-xs text-slate-500 block">ESTATUS UE</span>
                    <span>Permiso de trabajo activo en UE</span>
                  </div>
                </div>
              </div>

              {/* Dynamic decorative visual code chunk */}
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs font-mono text-slate-400 space-y-1">
                <span className="text-pink-400">import</span> django_rest_framework
                <div>
                  <span className="text-cyan-400">class</span> <span className="text-blue-400">BackendEngineer</span>:
                </div>
                <div className="pl-4">
                  <span className="text-pink-400">def</span> <span className="text-blue-400">build_apis</span>(self):
                </div>
                <div className="pl-8">
                  <span className="text-pink-400">return</span> <span className="text-emerald-400">"Production-ready REST APIs"</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
