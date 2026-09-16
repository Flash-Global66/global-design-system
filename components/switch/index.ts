import Switch from './src/switch.vue';
import { withInstall, SFCWithInstall } from '@flash-global66/g-utils';

export const GSwitch: SFCWithInstall<typeof Switch> & {
  Switch: typeof Switch;
} = withInstall(Switch, {
  Switch,
});

export default GSwitch;

export * from './src/switch';
export * from './src/constants';
export * from './src/switch.type';
export type SwitchInstance = InstanceType<typeof Switch>;
