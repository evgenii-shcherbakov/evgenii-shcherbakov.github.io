import dotenv from 'dotenv';
import { ADMIN_ENV_FILE_PATH } from '@shared/constants/paths';

dotenv.config({ path: ADMIN_ENV_FILE_PATH });

export const PORT = process.env.PORT ?? 3000;
export const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET ?? 'abcdefghiklmnop';

export const DATABASE_URL = process.env.DATABASE_URL ?? 'mongodb://127.0.0.1:27017/test';
