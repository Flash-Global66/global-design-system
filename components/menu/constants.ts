import { computed, type ComputedRef, type InjectionKey, type Ref } from 'vue';
import type { RouteLocationRaw } from 'vue-router';
import { useNamespace } from '@flash-global66/g-utils';

/**
 * Shared provide/inject context module for the whole menu family
 * (`Menu` / `MenuItem` / `MenuSub` / `MenuItemGroup`).
 *
 * Design Decision 1 (ep-extraction-v6 design.md): port `menuContextKey` /
 * `subMenuContextKey` into ONE shared module that every one of the 4
 * components imports from — never redeclare/duplicate the key in a
 * per-component file. A `Symbol()` created in two different files is a
 * DIFFERENT symbol even with the same variable name; `inject` would then
 * silently resolve to the fallback (`undefined`) instead of throwing, which
 * is exactly the class of bug WU5 (form-item) shipped and only caught by
 * empirically mounting real components, not by reading source.
 *
 * Deliberately `Symbol()`, NOT `Symbol.for('...')`: this package's context
 * has no cross-package interop requirement (unlike WU2's `radio-group`,
 * which intentionally used the global symbol registry to interoperate with
 * a *different* already-native package, `@flash-global66/g-radio`). Here all
 * 4 consumers live in this one package and import the key from this one
 * module, so a registry-scoped symbol would only add an unnecessary global
 * side effect with zero benefit.
 */

export interface MenuItemRegistered {
  index: string;
  indexPath: string[];
  active: boolean;
}

export interface MenuItemClickArgs {
  index: string;
  indexPath: string[];
  route?: RouteLocationRaw | string;
}

export interface SubMenuClickArgs {
  index: string;
  indexPath: string[];
}

export interface RootMenuProps {
  mode: 'horizontal' | 'vertical';
  collapse: boolean;
  uniqueOpened: boolean;
  router: boolean;
  menuTrigger: 'hover' | 'click';
  backgroundColor?: string;
  textColor?: string;
  activeTextColor?: string;
  popperEffect: string;
  popperClass?: string;
  popperOffset: number;
  showTimeout: number;
  hideTimeout: number;
  persistent: boolean;
}

/**
 * Root menu shared state — provided once by `Menu.vue`, injected by every
 * `MenuItem`/`MenuSub` descendant regardless of nesting depth.
 */
export interface RootMenuContext {
  props: RootMenuProps;
  openedMenus: Ref<string[]>;
  items: Ref<Record<string, MenuItemRegistered>>;
  subMenus: Ref<Record<string, MenuItemRegistered>>;
  activeIndex: Ref<string>;
  isMenuPopup: ComputedRef<boolean>;
  addMenuItem: (item: MenuItemRegistered) => void;
  removeMenuItem: (item: MenuItemRegistered) => void;
  addSubMenu: (item: MenuItemRegistered) => void;
  removeSubMenu: (item: MenuItemRegistered) => void;
  openMenu: (index: string, indexPath: string[]) => void;
  closeMenu: (index: string, indexPath: string[]) => void;
  handleMenuItemClick: (args: MenuItemClickArgs) => void;
  handleSubMenuClick: (args: SubMenuClickArgs) => void;
}

/**
 * Per-level shared state — provided by `Menu.vue` itself for level 0, and
 * re-provided by every `MenuSub` for its own descendants at `level + 1`.
 * `MenuItemGroup` deliberately does NOT provide its own context: it is a
 * purely presentational wrapper, so `inject` transparently bubbles through
 * it to the nearest real `Menu`/`MenuSub` ancestor — matching element-plus's
 * own real behavior, where a group never appears in an item's `indexPath`.
 */
export interface SubMenuContext {
  level: number;
  /** Accumulated index chain of every ancestor `MenuSub` (own index included). */
  indexPath: string[];
  addSubMenu: (item: MenuItemRegistered) => void;
  removeSubMenu: (item: MenuItemRegistered) => void;
  mouseInChild: Ref<boolean>;
  handleMouseleave?: (deepDispatch?: boolean) => void;
}

export const menuContextKey: InjectionKey<RootMenuContext> =
  Symbol('menuContextKey');

export const subMenuContextKey: InjectionKey<SubMenuContext> =
  Symbol('subMenuContextKey');

/**
 * Fail fast (matching element-plus's own `throwError` behavior) instead of
 * silently rendering with `undefined` context — this is exactly the kind of
 * handshake mismatch that must surface immediately in tests, not at runtime
 * in production.
 */
export const assertMenuContext = <T>(
  value: T | undefined,
  componentName: string,
  contextLabel: string,
): T => {
  if (!value) {
    throw new Error(
      `[${componentName}] can not inject ${contextLabel} — make sure it is rendered inside a <GMenu>`,
    );
  }
  return value;
};

/**
 * Port of element-plus's real `useMenuCssVar`
 * (`node_modules/element-plus/es/components/menu/src/use-menu-css-var.mjs`,
 * 2.9.7). Real EP's `sub-menu.mjs` calls this with `subMenu.level + 1` and
 * binds the resulting object as `:style` on EVERY `<ul>` it renders (both
 * the popup-container `<ul>` and the inline-accordion `<ul>`) — that `:style`
 * binding is what propagates `--gui-menu-level` one level deeper at each
 * nesting level. `menu.styles.scss` computes indentation from
 * `padding-left: calc(base + var(--gui-menu-level) * level-padding)` with no
 * fallback default, so without this every nested submenu's items would
 * inherit `level: 0` from `Menu.vue`'s own root `<ul>` via the CSS cascade —
 * nested items would never get progressively deeper indentation.
 *
 * The automatic `hover-bg-color` darken-by-20% (element-plus's own
 * `useMenuColor`, via `@ctrl/tinycolor`) is intentionally NOT ported here
 * either, matching the same documented scope cut already made by
 * `Menu.vue`'s own `cssVarStyle` (see that file's header comment).
 */
export const useMenuCssVar = (
  props: RootMenuProps,
  level: number,
): ComputedRef<Record<string, string>> => {
  const ns = useNamespace('menu');
  return computed(() =>
    ns.cssVarBlock({
      'text-color': props.textColor ?? '',
      'hover-text-color': props.textColor ?? '',
      'bg-color': props.backgroundColor ?? '',
      'hover-bg-color': props.backgroundColor ?? '',
      'active-color': props.activeTextColor ?? '',
      level: `${level}`,
    }),
  );
};
