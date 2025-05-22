import { ICON_SETS } from "./icon-sets";

export type IconWeight = keyof typeof ICON_SETS;
export type IconsByWeight<T extends IconWeight> = typeof ICON_SETS[T][number];
export type IconString = {
  [K in IconWeight]: `${K} ${IconsByWeight<K>}`
}[IconWeight];

export type IconSize = '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';

export type IconRotation = 90 | 180 | 270 | '90' | '180' | '270';

export type IconPull = 'right' | 'left';