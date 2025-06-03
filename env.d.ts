/// <reference types="vite/client" />
/// <reference types="string-hash" />

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv extends ImportMetaEnv {}
  }
}

interface ImportMetaEnv {
  readonly VITE_API_HOST: string;
  readonly VITE_DEV_HOST: string;
  readonly VITE_PORT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
