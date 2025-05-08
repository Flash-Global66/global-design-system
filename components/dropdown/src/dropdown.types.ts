export type actionType = {
  title: string
  icon?: string
  description?: string
  disabled?: boolean
  action?: () => void
  command?: String | number | Record<string, any>
  divider?: boolean
}
