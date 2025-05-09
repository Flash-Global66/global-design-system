import IconButton from "./src/IconButton.vue";
import {
  withInstall,
  withNoopInstall,
  SFCWithInstall,
} from "element-plus/es/utils/index.mjs";

export const GIconButton: SFCWithInstall<typeof IconButton> & {
  IconButton: typeof IconButton;
} = withInstall(IconButton, {
  IconButton,
});

export default GIconButton;

export * from './src/icon-button.type';
export * from './src/icon-button';
export type IconButtonInstance = InstanceType<typeof IconButton>;
