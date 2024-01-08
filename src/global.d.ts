import { PageIncrementalCache } from '@/features/core/types/page-cache.type';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TELEGRAM_API_TOKEN?: string;
      TELEGRAM_AUTHOR_ID?: string;
      TELEGRAM_AUTHOR_NICKNAME?: string;
      NEXT_PUBLIC_TELEGRAM_API_TOKEN?: string;
      NEXT_PUBLIC_TELEGRAM_AUTHOR_ID?: string;
      NEXT_PUBLIC_TELEGRAM_AUTHOR_NICKNAME?: string;
    }
  }

  var __incrementalCache: PageIncrementalCache | undefined;
}

export {};
