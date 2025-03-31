import {
  withInstall,
  withNoopInstall,
  SFCWithInstall,
} from "element-plus/es/utils/index.mjs";
import Input from "./src/input.vue";
export const GInput: SFCWithInstall<typeof Input> & {
  Input: typeof Input;
} = withInstall(Input, {
  Input,
});
export default GInput;

export * from "./src/input.type";

export type InputInstance = InstanceType<typeof Input>;
