import { defineConfig } from 'vite-plus';

export default defineConfig({
  lint: {
    ignorePatterns: ['**/.astro/**', '**/dist/**', '**/node_modules/**'],
  },
  fmt: {
    ignorePatterns: ['**/.astro/**', '**/dist/**', '**/node_modules/**'],
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
  },
});
