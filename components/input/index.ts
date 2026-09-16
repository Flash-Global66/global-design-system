import { withInstall, SFCWithInstall } from '@flash-global66/g-utils';
import Input from './src/input.vue';
export const GInput: SFCWithInstall<typeof Input> & {
  Input: typeof Input;
} = withInstall(Input, {
  Input,
});
export default GInput;

export * from './src/input.type';

export type InputInstance = InstanceType<typeof Input>;
