import {
  withInstall,
  withNoopInstall,
  SFCWithInstall
} from 'element-plus/es/utils/index.mjs'

import Radio from './src/radio.vue'
import RadioGroup from './src/radio-group.vue'

export const GRadio: SFCWithInstall<typeof Radio> & {
  RadioGroup: typeof RadioGroup
} = withInstall(Radio, {
  RadioGroup,
})
export default GRadio
export const GRadioGroup: SFCWithInstall<typeof RadioGroup> =
  withNoopInstall(RadioGroup)

export * from './src/radio'
export * from './src/radio-group'
export * from './src/constants'
export * from './src/radio-group.types'
