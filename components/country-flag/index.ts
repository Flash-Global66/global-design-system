import CountryFlag from './src/CountryFlag.vue'
import { withInstall, SFCWithInstall } from 'element-plus/es/utils/index.mjs'

export const GCountryFlag: SFCWithInstall<typeof CountryFlag> & {
  CountryFlag: typeof CountryFlag
} = withInstall(CountryFlag, { CountryFlag })

export default GCountryFlag

export * from './src/country-flag.props'
export * from './src/types/country-flag.types'
export * from './src/constants/country-flag.constants'
export * from './src/hooks/use-country-flag'

export type CountryFlagInstance = InstanceType<typeof CountryFlag>