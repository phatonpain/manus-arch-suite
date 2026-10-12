import { startVitest } from 'vitest/node';

// Run Vitest programmatically with configFile: false to bypass esbuild config bundling
const vitest = await startVitest('test', [], {
  configFile: false,
  environment: 'jsdom',
  watch: false,
  run: true,
});

if (vitest) {
  await vitest.close();
}
