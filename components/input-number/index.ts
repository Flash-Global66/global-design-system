import { withInstall } from '@flash-global66/g-utils';
import InputNumber from './src/input-number.vue';

import type { SFCWithInstall } from '@flash-global66/g-utils';

export const GInputNumber: SFCWithInstall<typeof InputNumber> =
  withInstall(InputNumber);

export default GInputNumber;
export * from './src/input-number';

export type InputNumberInstance = InstanceType<typeof InputNumber>;
