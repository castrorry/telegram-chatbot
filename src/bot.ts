import { Composer } from "telegraf";
import { useProtect } from "./hooks/protect";

let allowedIds: Array<number> = [];

export const Bot = new Composer();
Bot.use(useProtect());

Bot.start((context) => context.reply('Wow! Thanks!'));

Bot.command('authorize', (context) => {
  allowedIds.push(context.from?.id!);
  return context.reply('Your is allowed!');
});
