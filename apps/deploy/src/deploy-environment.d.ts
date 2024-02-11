declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VERCEL_TOKEN?: string;
      VERCEL_BACKEND_PROJECT_ID?: string;
      VERCEL_ADMIN_PROJECT_ID?: string;
      VERCEL_FRONTEND_PROJECT_ID?: string;
      [variable: string]: string;
    }
  }
}

export {};
