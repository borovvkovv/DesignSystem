import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import stringHash from 'string-hash';

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    base: '/design-system/',
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      rollupOptions: {
        input: {
          app: './index.html', // default
        },
      },
    },
    server: {
      port: Number(process.env.VITE_PORT),
      watch: {
        ignored: ['**.d.ts'],
      },
    },
    css: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
          require('./plugins/postcss-tailwindcss-ts-classnames')({
            dest: 'src/types/cssClasses.d.ts',
            // Set isModule if you want to import ClassNames from another file
            isModule: true,
            exportAsDefault: true, // to use in combination with isModule
          }),
        ],
      },
      modules: {
        generateScopedName: (name, filename, css) => {
          const hash = stringHash(css).toString(36).substring(0, 5);
          const fileAndQueryName = filename.split('/').pop();
          const fileName = fileAndQueryName && fileAndQueryName.split('.').shift();
          return `${fileName}_${name}_${hash}`;
        },
      },
    },
  });
};
