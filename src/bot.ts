import { Composer } from "telegraf";
import { SceneContextMessageUpdate } from "telegraf/typings/stage";
import { shortnerURL } from "./controllers/shortnerURL.controller";
import { useProtect } from "./hooks/protect";

export const Bot = new Composer<SceneContextMessageUpdate>();
Bot.use(useProtect());

Bot.start((context) => context.reply('Wow! Thanks!'));
Bot.command('pechincheiros', (context) => context.scene.enter('pechincheiros'));

Bot.command('short', shortnerURL);