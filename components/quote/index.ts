import Quote from './src/quote.vue'
import { withInstall, SFCWithInstall } from 'element-plus/es/utils/index.mjs'

export const GQuote: SFCWithInstall<typeof Quote> & {
  Quote: typeof Quote
} = withInstall(Quote, { Quote })

export default GQuote

export * from './src/quote.type'
export * from './src/quote'

export type QuoteInstance = InstanceType<typeof Quote>
