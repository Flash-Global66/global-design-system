import {
  withInstall,
  withNoopInstall,
  SFCWithInstall,
} from '@flash-global66/g-utils';

import Checkbox from './src/checkbox.vue';
import CheckboxGroup from './src/checkbox-group.vue';

export const GCheckbox: SFCWithInstall<typeof Checkbox> & {
  CheckboxGroup: typeof CheckboxGroup;
} = withInstall(Checkbox, {
  CheckboxGroup,
});
export default GCheckbox;
export const GCheckboxGroup: SFCWithInstall<typeof CheckboxGroup> =
  withNoopInstall(CheckboxGroup);

export * from './src/checkbox';
export * from './src/checkbox-group';
export * from './src/constants';
