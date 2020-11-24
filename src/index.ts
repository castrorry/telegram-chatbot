import Telegraf, { session } from "telegraf";
import { Bot } from "./bot";

const telegraf = new Telegraf(process.env.BOT_TOKEN!);
telegraf.use(session());
telegraf.use(Bot);
// telegraf.start((context) => context.reply('Ok!'));

telegraf.launch();