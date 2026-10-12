import { build } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Run Vite build programmatically with configFile: false to bypass esbuild config bundling
await build({
  configFile: false,
  plugins: [react(), tailwindcss()],
});
