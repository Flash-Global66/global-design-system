import Logo from './src/Logo.vue';
import { withInstall, SFCWithInstall } from 'element-plus/es/utils/index.mjs';

export const GLogo: SFCWithInstall<typeof Logo> & {
  Logo: typeof Logo;
} = withInstall(Logo, { Logo });

export default GLogo;

export * from './src/logo.props';
export * from './src/types/logo.types';
export * from './src/constants/logo.constants';
export * from './src/hooks/use-logo';

export type LogoInstance = InstanceType<typeof Logo>;
