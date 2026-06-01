import { ArrowRight, Github } from "lucide-react";

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
      <div className="glass mb-8 inline-flex items-center gap-2 rounded-full border border-slate-800/60 px-4 py-1.5 text-xs text-slate-300 animate-fade-in">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Disponível para novos projetos
      </div>

      <h1 className="text-gradient max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
        Construindo aplicações robustas e escaláveis de ponta a ponta
      </h1>

      <p className="mt-6 max-w-2xl text-balance text-base text-slate-400 sm:text-lg">
        Engenheiro de Software Full Stack. Uno a solidez de arquiteturas backend
        com o dinamismo de interfaces frontend modernas para entregar produtos
        digitais que escalam.
      </p>

      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <a
          href="#projects"
          className="btn-glow group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-slate-200"
        >
          Ver Projetos
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-white/[0.02] px-6 py-3 text-sm font-medium text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-slate-700 hover:bg-white/[0.05]"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
      </div>
    </section>
  );
}
