import { Context } from "telegraf";
import { Composer } from "telegraf";
import { useArgs } from "./args";

export function useProtect() {
  let ownerId: number;
  let allowedIds: Array<number> = Array();
  const protect = new Composer();

  protect.command('authorize', (context, next) => {
    let [, [u_id]] = useArgs(context.message?.text!, ' ');

    if (u_id && context.from?.id! === ownerId) {
      if (allowedIds.includes(Number(u_id))) return context.reply('This user already authenticated!');
      allowedIds.push(context.from?.id!);
      return context.reply('OK. User are authenticated!');
    } else if (u_id) {
      return context.reply('This function not is allowed for you.');
    } else {
      if (allowedIds.length < 1) ownerId = context.from?.id!;
      if (allowedIds.includes(context.from?.id!)) return context.reply('You already authenticated');
      allowedIds.push(context.from?.id!);
      return context.reply('OK. You are authenticated!');
    }
  });
  protect.use((context, next) => {
    if (allowedIds.includes(context.from?.id!)) {
      return next();
    }
    return;
  });
  return protect.middleware();
}