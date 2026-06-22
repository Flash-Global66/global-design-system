/**
 * Generates the golden CSS baseline for button.styles.scss.
 *
 * HOW IT WORKS:
 * In production, button.styles.scss is compiled with the namespace 'gui'
 * because config-provider/config.styles.scss does:
 *   @forward 'element-plus/theme-chalk/src/mixins/config.scss' with ($namespace: 'gui')
 * which is loaded FIRST in assets/scss/index.scss.
 *
 * To replicate this in isolation, we compile a synthetic entry that:
 *   1. Configures the EP config module with $namespace: 'gui' via @use ... with
 *   2. Then @uses the mixins (which will pick up that configured namespace)
 *   3. Then includes the button styles inline
 *
 * The button SCSS content is read from disk and inlined (stripping its own @use
 * directives for config/mixins/utils/var since we inject them with correct namespace).
 *
 * Re-run this script if button.styles.scss changes before WU-2 starts.
 */
import { compileString } from 'sass'
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

const BUTTON_STYLES = resolve(ROOT, 'components/button/src/button.styles.scss')
const GOLDEN_OUT = resolve(ROOT, 'tests/golden/button.baseline.css')
const EP_MIXINS = resolve(ROOT, 'node_modules/element-plus/theme-chalk/src/mixins')
const EP_COMMON = resolve(ROOT, 'node_modules/element-plus/theme-chalk/src/common')

// Read button styles and strip the @use directives that reference ep internals.
// We'll inject those ourselves with the correct namespace configuration.
const buttonContent = readFileSync(BUTTON_STYLES, 'utf-8')
  .split('\n')
  .filter(line => !line.trim().startsWith('@use '))
  .join('\n')

// Entry SCSS: configure namespace FIRST (Sass module system requires @use to
// happen before content, and the first @use of a module wins the configuration).
const entry = `
@use 'config' with ($namespace: 'gui');
@use 'mixins' as *;
@use 'sass:map';

@mixin ripple-animation($duration: 0.6s, $ease: ease-out, $fill-mode: forwards) {
  animation: ripple-effect $duration $ease $fill-mode;
}

@mixin hover-animation {
  transition: all 400ms cubic-bezier(0.42, 0, 0.58, 1);
}

${buttonContent}
`

const result = compileString(entry, {
  loadPaths: [EP_MIXINS, EP_COMMON],
})

mkdirSync(dirname(GOLDEN_OUT), { recursive: true })
writeFileSync(GOLDEN_OUT, result.css, 'utf-8')

console.log(`Golden CSS generated: ${GOLDEN_OUT}`)
console.log(`Size: ${result.css.length} bytes`)

// Verify the output contains gui-button selectors (not el-button)
if (result.css.includes('.gui-button') && !result.css.includes('.el-button')) {
  console.log('Verification PASSED: output contains .gui-button selectors')
} else {
  console.error('Verification FAILED: wrong namespace in output')
  process.exit(1)
}
