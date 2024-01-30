export const PORT = process.env.PORT ?? 3000;
export const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET ?? 'abcdefghiklmnop';
export const DATABASE_URL = process.env.DATABASE_URL ?? 'mongodb://127.0.0.1:27017/test';
export const BACKEND_URL =
  process.env.BACKEND_URL ?? process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://127.0.0.1:5555';
export const AUTH_TOKEN = process.env.AUTH_TOKEN ?? process.env.NEXT_PUBLIC_AUTH_TOKEN ?? '';
