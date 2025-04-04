import {
  withInstall,
  withNoopInstall,
  SFCWithInstall,
} from "element-plus/es/utils/index.mjs";
import Button from "./src/button.vue";
export const GButton: SFCWithInstall<typeof Button> & {
  Button: typeof Button;
} = withInstall(Button, {
  Button,
});
export default GButton;

export * from "./src/button.type";

export type ButtonInstance = InstanceType<typeof Button>;
