export function Nav() {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[min(94%,720px)] -translate-x-1/2">
      <nav className="glass flex items-center justify-between rounded-full border border-slate-800/60 px-5 py-2.5">
        <a href="#" className="text-sm font-semibold tracking-tight text-white">
          Rafael Tavares
        </a>
        <div className="hidden items-center gap-6 text-xs text-slate-400 sm:flex">
          <a href="#stack" className="transition-colors hover:text-white">
            Stack
          </a>
          <a href="#projects" className="transition-colors hover:text-white">
            Projetos
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Contato
          </a>
        </div>
        <a
          href="#contact"
          className="rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-black transition-all duration-300 hover:bg-slate-200"
        >
          Contratar
        </a>
      </nav>
    </header>
  );
}
