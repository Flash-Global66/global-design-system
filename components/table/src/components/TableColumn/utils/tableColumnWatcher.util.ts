export function getAllAliases(
  props: string[],
  aliases: Record<string, string>,
): Record<string, string> {
  return props.reduce((prev, cur) => {
    prev[cur] = cur;
    return prev;
  }, aliases);
}
