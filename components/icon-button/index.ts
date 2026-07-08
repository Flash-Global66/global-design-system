import IconButton from './src/IconButton.vue';
import { withInstall, type SFCWithInstall } from '@flash-global66/g-utils';

export const GIconButton: SFCWithInstall<typeof IconButton> & {
  IconButton: typeof IconButton;
} = withInstall(IconButton, {
  IconButton,
});

export default GIconButton;

export * from './src/icon-button.type';
export * from './src/icon-button';
export type IconButtonInstance = InstanceType<typeof IconButton>;
