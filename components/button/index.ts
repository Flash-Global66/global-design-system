import { withInstall, type SFCWithInstall } from '@flash-global66/g-utils'
import Button from './src/Button.vue'

export const GButton: SFCWithInstall<typeof Button> & {
  Button: typeof Button
} = withInstall(Button, {
  Button,
})
export default GButton

export * from './src/types/button.type'

export type ButtonInstance = InstanceType<typeof Button>
