export const PORT: string | number = env?.PORT ?? 8080;
export const BASE_URL: string = env?.BASE_URL ?? `http://localhost:${PORT}`;
export const TELEGRAM_API_TOKEN: string = env?.TELEGRAM_API_TOKEN ?? '';
export const TELEGRAM_AUTHOR_ID: string = env?.TELEGRAM_AUTHOR_ID ?? '';
export const TELEGRAM_AUTHOR_NICKNAME: string = env?.TELEGRAM_AUTHOR_NICKNAME ?? '';
