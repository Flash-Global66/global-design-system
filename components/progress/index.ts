import { withInstall, type SFCWithInstall } from '@flash-global66/g-utils';
import Progress from './src/progress.vue';

export const GProgress: SFCWithInstall<typeof Progress> = withInstall(Progress);
export default GProgress;

export * from './src/progress';
