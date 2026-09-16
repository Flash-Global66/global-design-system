import Quote from './src/quote.vue';
import { withInstall, type SFCWithInstall } from '@flash-global66/g-utils';

export const GQuote: SFCWithInstall<typeof Quote> & {
  Quote: typeof Quote;
} = withInstall(Quote, { Quote });

export default GQuote;

export * from './src/quote.type';
export * from './src/quote';

export type QuoteInstance = InstanceType<typeof Quote>;
