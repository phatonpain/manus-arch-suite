import { Building2, Sparkles, Ruler } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  area: string;
  imageUrl: string;
  colSpan?: string;
}

function ProjectCard({ title, category, location, area, imageUrl, colSpan = 'col-span-12 md:col-span-6' }: ProjectCardProps) {
  return (
    <article className={`${colSpan} group relative overflow-hidden rounded-2xl border border-white/10 bg-brand-card/60 p-6 transition-all duration-300 hover:border-brand-accent/40`}>
      <div className="relative h-64 w-full overflow-hidden rounded-xl bg-zinc-900 mb-5">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[11px] text-zinc-300 backdrop-blur-md">
          {category}
        </div>
      </div>

      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-brand-accent transition-colors">
            {title}
          </h3>
          <p className="text-xs text-zinc-400 mt-1">{location}</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-400 border border-white/5 rounded-lg px-2.5 py-1 bg-white/5">
          <Ruler className="h-3 w-3 text-brand-accent" />
          <span>{area}</span>
        </div>
      </div>
    </article>
  );
}

export function BentoGrid() {
  return (
    <section id="bento-grid" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-accent">
            Portfólio & Arquitetura
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
            Projetos Selecionados
          </h2>
        </div>
        <p className="max-w-md text-xs leading-relaxed text-zinc-400">
          Modelos imobiliários com renders foto-realistas gerados por IA e interfaces interativas no padrão Framer S26.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Featured Big Card */}
        <div className="col-span-12 lg:col-span-8 group relative overflow-hidden rounded-2xl border border-white/10 bg-brand-card/60 p-8 transition-all duration-300 hover:border-brand-accent/40">
          <div className="flex items-center gap-2 text-xs font-medium text-brand-accent">
            <Sparkles className="h-4 w-4" />
            <span>Design Inteligente</span>
          </div>
          <h3 className="mt-3 text-2xl font-bold text-zinc-100">
            Residência Bioclimática Aurora
          </h3>
          <p className="mt-2 max-w-xl text-xs text-zinc-400 leading-relaxed">
            Estrutura desenhada com cálculo térmico automatizado e renderização em tempo real via pipeline neural.
          </p>

          <div className="mt-6 h-72 w-full overflow-hidden rounded-xl bg-zinc-900">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
              alt="Aurora Residence"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* High-tech Metric Bento Box */}
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-between rounded-2xl border border-white/10 bg-brand-card/60 p-8">
          <div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
              <Building2 className="h-5 w-5" />
            </div>
            <h4 className="mt-4 text-lg font-bold text-zinc-100">Precisão Cadastral</h4>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              Integração completa entre malha 3D, cálculos de engenharia e exportação para WebGL.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            <div className="flex items-center justify-between border-t border-white/5 pt-3 text-xs">
              <span className="text-zinc-500">Taxa de Ocupação</span>
              <span className="font-mono text-zinc-200">58.4%</span>
            </div>
            <div className="flex items-center justify-between border-t border-white/5 pt-3 text-xs">
              <span className="text-zinc-500">Eficiência Energética</span>
              <span className="font-mono text-brand-accent">Classe A+</span>
            </div>
          </div>
        </div>

        {/* 2 Grid Columns */}
        <ProjectCard
          title="Villa Solarium"
          category="Residencial Luxo"
          location="Florianópolis, SC"
          area="540 m²"
          imageUrl="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop"
          colSpan="col-span-12 md:col-span-6"
        />

        <ProjectCard
          title="Pavilhão Concreto & Vidro"
          category="Corporativo"
          location="São Paulo, SP"
          area="820 m²"
          imageUrl="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
          colSpan="col-span-12 md:col-span-6"
        />
      </div>
    </section>
  );
}
