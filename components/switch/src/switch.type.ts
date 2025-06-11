export type SwitchSize = 'small' | 'default' | 'large'

export type SwitchValue = string | number | boolean

export type SwitchState = 'default' | 'loading' | 'disabled'

export type SwitchBeforeChangeFn = () => Promise<boolean> | boolean

export enum EnumSwitchSize {
  Small = 'small',
  Default = 'default',
  Large = 'large',
}