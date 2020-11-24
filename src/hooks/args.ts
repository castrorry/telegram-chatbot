export function useArgs(message: string, delimiter: string): Array<string | Array<string>> {
  const [prefix, ...args] = message.split(delimiter);
  return [prefix, args];
}