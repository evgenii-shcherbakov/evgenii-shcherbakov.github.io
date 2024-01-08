import { AppComponent } from '../../app';
import { component, HTMLTemplateVars } from 'rxspa';
import template from './telegram.component.html';
import {
  BASE_URL,
  TELEGRAM_API_TOKEN,
  TELEGRAM_AUTHOR_ID,
  TELEGRAM_AUTHOR_NICKNAME,
} from '../../constants/common';

@component({ template })
export class TelegramComponent extends AppComponent {
  protected vars(): HTMLTemplateVars {
    try {
      return {
        date: new Date().toJSON(),
        platform: window.navigator.platform,
        userAgent: window.navigator.userAgent,
        origin: window.location.origin,
        nickname: TELEGRAM_AUTHOR_NICKNAME,
        instanceUrl: BASE_URL,
      };
    } catch (error) {
      return super.vars();
    }
  }

  protected onInit() {
    try {
      fetch(`https://api.telegram.org/bot${TELEGRAM_API_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_AUTHOR_ID,
          text: this.node.innerHTML,
          disable_notification: true,
          parse_mode: 'HTML',
        }),
      });
    } catch (error) {}

    super.onInit();
  }
}
