declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VERCEL_TOKEN?: string;
      VERCEL_BACKEND_PROJECT_ID?: string;
      VERCEL_BACKEND_APP_NAME?: string;
      VERCEL_ADMIN_PROJECT_ID?: string;
      VERCEL_ADMIN_APP_NAME?: string;
      VERCEL_FRONTEND_PROJECT_ID?: string;
      VERCEL_FRONTEND_APP_NAME?: string;
      GITHUB_REPOSITORY_URL?: string;
      GITHUB_COMMIT_MESSAGE?: string;
      GITHUB_COMMITTER?: string;
      [variable: string]: string;
    }
  }
}

export {};
