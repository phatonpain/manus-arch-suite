import { useState, useRef, type MouseEvent, type TouchEvent } from 'react';

export interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfter({
  beforeImage,
  afterImage,
  beforeLabel = 'Planta Arquitetônica / Wireframe',
  afterLabel = 'Render Redraw IA',
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // Only update if mouse primary button is pressed or hovering
    if (e.buttons === 1) {
      updatePosition(e.clientX);
    }
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      onTouchMove={handleTouchMove}
      data-testid="before-after-container"
      className="group relative h-[420px] md:h-[520px] w-full select-none overflow-hidden rounded-2xl border border-white/10 bg-brand-card cursor-ew-resize shadow-2xl"
    >
      {/* After image (rendered output) */}
      <img
        src={afterImage}
        alt="After AI render"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      {/* Before image (clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        data-testid="before-clipped-layer"
      >
        <img
          src={beforeImage}
          alt="Before CAD or blueprint"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Slider Divider Bar */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-brand-accent shadow-[0_0_12px_rgba(198,155,109,0.9)]"
        style={{ left: `${sliderPosition}%` }}
        data-testid="slider-divider"
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-9 w-9 rounded-full bg-brand-accent text-zinc-950 font-bold text-xs flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
          ↔
        </div>
      </div>

      {/* Status Badges */}
      <span className="absolute bottom-4 left-4 rounded-md border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-medium tracking-wide text-zinc-300 backdrop-blur-md">
        {beforeLabel}
      </span>
      <span className="absolute bottom-4 right-4 rounded-md border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-medium tracking-wide text-brand-accent backdrop-blur-md">
        {afterLabel}
      </span>
    </div>
  );
}
