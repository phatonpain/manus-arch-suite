import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import { BeforeAfter } from './BeforeAfter';

afterEach(cleanup);

describe('BeforeAfter Component', () => {
  it('renders before and after labels correctly', () => {
    render(
      <BeforeAfter
        beforeImage="https://example.com/before.jpg"
        afterImage="https://example.com/after.jpg"
        beforeLabel="CAD Blueprint"
        afterLabel="AI Finished Render"
      />
    );

    expect(screen.getByText('CAD Blueprint')).toBeDefined();
    expect(screen.getByText('AI Finished Render')).toBeDefined();
  });

  it('renders divider and container elements', () => {
    render(
      <BeforeAfter
        beforeImage="https://example.com/before.jpg"
        afterImage="https://example.com/after.jpg"
      />
    );

    const container = screen.getByTestId('before-after-container');
    const divider = screen.getByTestId('slider-divider');
    const clipped = screen.getByTestId('before-clipped-layer');

    expect(container).toBeDefined();
    expect(divider).toBeDefined();
    expect(clipped).toBeDefined();
  });
});
