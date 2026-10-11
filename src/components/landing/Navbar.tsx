import { Layers, Compass, Cpu, ExternalLink } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-6 z-50 mx-auto max-w-6xl px-4">
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-brand-card/80 px-6 py-3 shadow-lg backdrop-blur-md">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-accent/20 text-brand-accent border border-brand-accent/30 font-bold">
            <Layers className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold tracking-wider uppercase text-zinc-100">
            Arch<span className="text-brand-accent">Studio</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
          <a href="#3d-hero" className="transition hover:text-zinc-100 flex items-center gap-1.5">
            <Compass className="h-3.5 w-3.5" /> 3D View
          </a>
          <a href="#arch-compare" className="transition hover:text-zinc-100 flex items-center gap-1.5">
            <Cpu className="h-3.5 w-3.5" /> IA Redraw
          </a>
          <a href="#bento-grid" className="transition hover:text-zinc-100">Projetos</a>
        </div>

        {/* Action Button */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-full bg-brand-accent px-4 py-1.5 text-xs font-semibold text-zinc-950 transition hover:bg-brand-accent/90"
        >
          <span>Acessar Git</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </nav>
    </header>
  );
}
