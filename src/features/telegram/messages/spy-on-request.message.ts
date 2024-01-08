import { Chat } from 'node-telegram-bot-api';

export const spyOnRequestMessage = (
  navigator: Record<string, any>,
  href: string,
  authorChat?: Chat,
) => {
  const greeting = authorChat?.first_name ? authorChat.first_name : `@${authorChat?.username}`;

  return `
<pre>
<b>Spy on request</b> <i>${new Date().toJSON()}</i>
Hey, ${greeting}! Looks like somebody opened website...

Path: ${href}

Navigator:
<code>${JSON.stringify(navigator, null, 4)}</code>
</pre>
  `;
};
