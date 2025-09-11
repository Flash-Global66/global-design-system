export type actionType = {
  title: string
  icon?: string
  description?: string
  disabled?: boolean
  action?: () => void
  command?: string | number | Record<string, any>
  divider?: boolean
  [x: string]: string | number | Record<string, any> | undefined | boolean | Function
}
