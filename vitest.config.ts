import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';
import { configDefaults, defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default defineConfig((env) =>
  mergeConfig(
    viteConfig(env),
    defineConfig({
      test: {
        setupFiles: ['./vitest.setup.ts'],
        environment: 'jsdom',
        exclude: [...configDefaults.exclude, 'e2e/*'],
        root: fileURLToPath(new URL('./', import.meta.url)),
        coverage: {
          provider: 'v8',
          reporter: ['text', 'json', 'html'],
        },
        restoreMocks: true,
        unstubGlobals: true,
      },
    }),
  ),
);
