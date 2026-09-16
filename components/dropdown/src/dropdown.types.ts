import type { IconString } from '@flash-global66/g-icon-font';

export type actionType = {
  title: string;
  icon?: IconString;
  description?: string;
  disabled?: boolean;
  action?: () => void;
  command?: string | number | Record<string, any>;
  divider?: boolean;
  [x: string]:
    | string
    | number
    | Record<string, any>
    | undefined
    | boolean
    | ((...args: unknown[]) => unknown);
};
