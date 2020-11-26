import { Context } from "telegraf";
import { Message } from "telegraf/typings/telegram-types";
import { useArgs } from "../hooks/args";
import { shortenAPI } from "../services/urlAPI";

export async function shortnerURL(context: Context): Promise<Message> {
  const [, [url, path]] = useArgs(context.message?.text!, ' ');
  const shortened = await shortenAPI(url, path);
  return context.replyWithMarkdown(
    '*URL Curto:* `{url}`\n\n _Nota: Clique no link para copiar_'.replace('{url}', shortened.short),
    {
      parse_mode: 'MarkdownV2'
    }
  );
}