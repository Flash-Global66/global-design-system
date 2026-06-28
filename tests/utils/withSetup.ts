import { createApp } from 'vue'
import type { App } from 'vue'

/**
 * Utility for testing composables inside a real Vue app instance.
 * This ensures provide/inject, lifecycle hooks, and reactivity work correctly.
 *
 * Pattern from front-b2b testing conventions.
 *
 * NOTE: This utility is NOT exported from @flash-global66/g-utils.
 * It lives only in the monorepo test utilities.
 *
 * @example
 * const { result } = withSetup(() => useCounter())
 * expect(result.count.value).toBe(0)
 */
export function withSetup<T>(composable: () => T): { result: T; app: App } {
  let result!: T

  const app = createApp({
    setup() {
      result = composable()
      // suppress the "Template missing" warning
      return () => null
    },
  })

  app.mount(document.createElement('div'))

  return { result, app }
}
