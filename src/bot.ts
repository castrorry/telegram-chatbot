import { Composer } from "telegraf";
import { useArgs } from "./hooks/args";
import { useProtect } from "./hooks/protect";
import { shortenLink } from "./services/urlAPI";

let allowedIds: Array<number> = [];

export const Bot = new Composer();
Bot.use(useProtect());

Bot.start((context) => context.reply('Wow! Thanks!'));

Bot.command('short', async (context) => {
  const [, [url, path]] = useArgs(context.message?.text!, ' ');
  const shortened = await shortenLink(url, path);
  context.replyWithMarkdown(
    '*URL Curto:* `{url}`\n\n _Nota: Clique no link para copiar_'.replace('{url}', shortened.short),
    {
      parse_mode: 'MarkdownV2'
    }
  );
});