import { TelegramConfig } from '@/features/telegram/types';
import TelegramBot, { Chat } from 'node-telegram-bot-api';
import { spyOnRequestMessage } from '@/features/telegram/messages/spy-on-request.message';

export class TelegramService {
  private readonly bot: TelegramBot;
  private authorChat: Chat | undefined;

  constructor(private readonly config: TelegramConfig) {
    if (!config.token) {
      throw new Error('Telegram token not provided');
    }

    this.bot = new TelegramBot(config.token, { polling: true });
  }

  async spyOnRequest(navigator?: Record<string, any>, href?: string) {
    if (!this.config.authorId || !navigator || !href) {
      return;
    }

    const authorChat = await this.getAuthorChat();

    await this.bot.sendMessage(
      this.config.authorId,
      spyOnRequestMessage(navigator, href, authorChat),
      {
        disable_notification: true,
        parse_mode: 'HTML',
      },
    );
  }

  private async getAuthorChat() {
    if (this.authorChat) {
      return this.authorChat;
    }

    const chat = await this.bot.getChat(this.config.authorId ?? '');
    this.authorChat = chat;
    return chat;
  }
}
