import { Composer } from "telegraf";
import { shortnerURL } from "./controllers/shortnerURL.controller";
import { useProtect } from "./hooks/protect";

export const Bot = new Composer();
Bot.use(useProtect());

Bot.start((context) => context.reply('Wow! Thanks!'));

Bot.command('short', shortnerURL);