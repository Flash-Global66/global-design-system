import { withInstall } from '@flash-global66/g-utils';
import Select from './src/select.vue';

import type { SFCWithInstall } from '@flash-global66/g-utils';

export const GSelect: SFCWithInstall<typeof Select> = withInstall(Select);
export type SelectInstance = InstanceType<typeof Select>;
export default GSelect;

export * from './src/types/token';
export * from './src/types/select.types';
export * from './src/defaults';
