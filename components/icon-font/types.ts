import { ICON_SETS } from "./iconSets";

export type IconWeight = keyof typeof ICON_SETS;
export type IconsByWeight<T extends IconWeight> = typeof ICON_SETS[T][number];
export type IconString = {
  [K in IconWeight]: `${K} ${IconsByWeight<K>}`
}[IconWeight];