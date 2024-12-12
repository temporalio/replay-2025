import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vitest/config';
import yaml from '@modyfi/vite-plugin-yaml';

export default defineConfig({
  plugins: [enhancedImages(), sveltekit(), yaml()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
});
