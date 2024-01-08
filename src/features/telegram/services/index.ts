import { TelegramService } from '@/features/telegram/services/telegram.service';

console.log(process.env);

export const telegramService = new TelegramService({
  token: process.env.TELEGRAM_API_TOKEN ?? process.env.NEXT_PUBLIC_TELEGRAM_API_TOKEN,
  authorId: process.env.TELEGRAM_AUTHOR_ID ?? process.env.NEXT_PUBLIC_TELEGRAM_AUTHOR_ID,
  authorNickname:
    process.env.TELEGRAM_AUTHOR_NICKNAME ?? process.env.NEXT_PUBLIC_TELEGRAM_AUTHOR_NICKNAME,
});
