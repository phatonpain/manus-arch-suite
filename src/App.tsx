import { Navbar } from './components/landing/Navbar';
import { SplineHero } from './components/3d/SplineHero';
import { BeforeAfter } from './components/arch/BeforeAfter';
import { BentoGrid } from './components/landing/BentoGrid';
import { Sparkles, GitBranch, Cpu, Code2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-zinc-100 flex flex-col justify-between selection:bg-brand-accent selection:text-black">
      {/* Framer-inspired Floating Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with Spline 3D */}
        <section id="3d-hero" className="mx-auto max-w-6xl px-4 pt-16 pb-12">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-xs text-brand-accent mb-6 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Fusão: Spline 3D + Framer Bento + Redraw AI</span>
            </div>

            <h1 className="max-w-4xl text-4xl md:text-6xl font-bold tracking-tight text-zinc-100 leading-tight">
              Arquitetura de Alta Fidelidade com <span className="text-brand-accent">Inteligência Artificial</span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm md:text-base text-zinc-400">
              Ambiente unificado para geração de maquetes interativas, renders paramétricos e interfaces imobiliárias de alto padrão.
            </p>
          </div>

          {/* Spline 3D Embedded Scene */}
          <SplineHero />
        </section>

        {/* Redraw Interactive Before/After Section */}
        <section id="arch-compare" className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-brand-accent">
                Tecnologia Neural (Redraw)
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100">
                Comparador Planta vs Render 3D
              </h2>
            </div>
            <p className="text-xs text-zinc-400 max-w-md">
              Arraste o cursor horizontalmente para inspecionar a conversão entre o traço técnico estrutural e o render fotorrealista.
            </p>
          </div>

          <BeforeAfter
            beforeImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
            afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
            beforeLabel="Estrutura / Wireframe"
            afterLabel="Render Fotorrealista Redraw"
          />
        </section>

        {/* Framer Bento Grid Projects */}
        <BentoGrid />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-brand-card/40 py-12 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <Code2 className="h-4 w-4 text-brand-accent" />
            <span>React 19 • Tailwind CSS v4 • Spline • Redraw Pattern</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <GitBranch className="h-3.5 w-3.5 text-brand-accent" />
              <span>Governança via AGENTS.md</span>
            </span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <Cpu className="h-3.5 w-3.5 text-brand-accent" />
              <span>Pronto para Manus & Agentes Autônomos</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
