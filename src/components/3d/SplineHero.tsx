import { Suspense, lazy } from 'react';
import { Box, Sparkles } from 'lucide-react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export interface SplineHeroProps {
  sceneUrl?: string;
}

export function SplineHero({ sceneUrl = 'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode' }: SplineHeroProps) {
  return (
    <div className="relative w-full h-[540px] md:h-[640px] overflow-hidden rounded-3xl border border-white/10 bg-brand-card/40 backdrop-blur-xl shadow-2xl">
      <Suspense
        fallback={
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-zinc-500">
            <Box className="h-10 w-10 animate-pulse text-brand-accent" />
            <span className="text-xs uppercase tracking-widest text-zinc-400">Loading 3D Environment...</span>
          </div>
        }
      >
        <Spline scene={sceneUrl} className="w-full h-full" />
      </Suspense>

      {/* Interactive Overlay Badge */}
      <div className="pointer-events-none absolute top-5 right-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-1.5 text-xs text-zinc-300 backdrop-blur-md">
        <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
        <span>3D Interativo • Spline Engine</span>
      </div>
    </div>
  );
}
