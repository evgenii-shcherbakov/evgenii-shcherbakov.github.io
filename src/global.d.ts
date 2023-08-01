declare global {
  declare interface Env {
    PORT?: string | number;
    BASE_URL?: string;
    TELEGRAM_API_TOKEN?: string;
    TELEGRAM_AUTHOR_ID?: string;
    TELEGRAM_AUTHOR_NICKNAME?: string;
  }

  declare const env: Env | undefined;
}

export {};
