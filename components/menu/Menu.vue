<template>
  <div class="gui-menu-wrapper">
    <ul
      ref="menuRef"
      role="menubar"
      :class="[ns.b(), ns.m(mode), ns.is('collapse', collapse)]"
      :style="cssVarStyle"
    >
      <!--
        @slot Menu Content
      -->
      <slot />
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  getCurrentInstance,
  onMounted,
  provide,
  reactive,
  ref,
  watch,
  type PropType,
  type StyleValue,
} from 'vue';
import { useNamespace } from '@flash-global66/g-utils';

import {
  menuContextKey,
  subMenuContextKey,
  type MenuItemClickArgs,
  type MenuItemRegistered,
  type SubMenuClickArgs,
} from './constants';

/**
 * Port of element-plus's real `ElMenu` (`node_modules/element-plus/es/components/menu/src/menu.mjs`,
 * 2.9.7) onto the shared `menuContextKey`/`subMenuContextKey` context module
 * (Design Decision 1, ep-extraction-v6 design.md). Zero `element-plus` import.
 *
 * Deliberate scope cuts vs the real `ElMenu` (documented, not silent):
 *  - The horizontal "ellipsis overflow / more" feature (ResizeObserver-driven
 *    `sliceIndex` measurement, `More` icon submenu) is NOT ported. It needs
 *    real browser layout measurement that jsdom cannot reliably provide, and
 *    no current consumer (`../front-b2b`'s only real usage, `MenuRoute`) uses
 *    horizontal mode at all. `ellipsis`/`ellipsisIcon` props are dropped.
 *  - `closeOnClickOutside` is dropped — never declared by the pre-migration
 *    wrapper either, not used anywhere in `../front-b2b`.
 *  - The width-fade `collapseTransition` animation (element-plus's own
 *    `ElMenuCollapseTransition`, which imperatively manipulates
 *    `el.style.width`/`dataset.scrollWidth`) is NOT ported. The prop is kept
 *    for API compatibility but is a no-op: `../front-b2b`'s only real
 *    consumer (`MenuRoute/index.vue`) already passes
 *    `:collapse-transition="false"`, so this is a zero-behavior-change cut
 *    for the one real production usage.
 *  - `backgroundColor`/`textColor`/`activeTextColor` CSS vars are ported, but
 *    the automatic `hover-bg-color` darken-by-20% (element-plus's own
 *    `useMenuColor`, via `@ctrl/tinycolor`) is NOT — it would require adding
 *    a brand-new dependency purely for a color nicety no consumer uses
 *    (`backgroundColor` is not passed anywhere in `../front-b2b`). Falls back
 *    to `backgroundColor` verbatim when provided.
 */

defineOptions({
  name: 'GMenu',
});

const props = defineProps({
  /**
   * layout mode of the menu
   */
  mode: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'vertical',
  },
  /**
   * index of active menu on page load
   */
  defaultActive: {
    type: String,
    default: '',
  },
  /**
   * array that contains indexes of currently active sub-menus
   */
  defaultOpeneds: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  /**
   * whether only one sub-menu can be active
   */
  uniqueOpened: Boolean,
  /**
   * whether vue-router mode is activated. If true, index will be used as
   * 'path' to activate the route action. Use with default-active to set the
   * active item on load.
   */
  router: Boolean,
  /**
   * how sub-menus are triggered, only relevant in `horizontal` mode or when
   * `collapse` is `true`
   */
  menuTrigger: {
    type: String as PropType<'hover' | 'click'>,
    default: 'hover',
  },
  /**
   * whether the menu is collapsed
   */
  collapse: Boolean,
  /**
   * whether to enable the collapse transition
   * @deprecated no-op — see file-level comment for rationale
   */
  collapseTransition: {
    type: Boolean,
    default: true,
  },
  /**
   * background color of Menu (hex format) — CSS var only, no dynamic
   * hover-darken (see file-level comment)
   */
  backgroundColor: String,
  /**
   * text color of Menu (hex format)
   */
  textColor: String,
  /**
   * text color of currently active menu item (hex format)
   */
  activeTextColor: String,
  /**
   * offset of the appended sub menu popper
   */
  popperOffset: {
    type: Number,
    default: 6,
  },
  /**
   * Tooltip theme of sub menu popper, effective for `mode="horizontal"`
   */
  popperEffect: {
    type: String,
    default: 'dark',
  },
  /**
   * custom class name for all popper menus
   */
  popperClass: String,
  /**
   * timeout in milliseconds to show sub menus
   */
  showTimeout: {
    type: Number,
    default: 300,
  },
  /**
   * timeout in milliseconds to hide sub menus
   */
  hideTimeout: {
    type: Number,
    default: 300,
  },
  /**
   * when the sub menu popper is inactive and `persistent` is `false`, it
   * will be destroyed
   */
  persistent: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits<{
  (e: 'open', index: string, indexPath: string[]): void;
  (e: 'close', index: string, indexPath: string[]): void;
  (
    e: 'select',
    index: string,
    indexPath: string[],
    item: { index: string; indexPath: string[]; route?: unknown },
    routerResult?: Promise<unknown>,
  ): void;
}>();

const ns = useNamespace('menu');
const menuRef = ref<HTMLUListElement>();
const instance = getCurrentInstance();

const openedMenus = ref<string[]>(
  props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : [],
);
const activeIndex = ref(props.defaultActive);
const items = ref<Record<string, MenuItemRegistered>>({});
const subMenus = ref<Record<string, MenuItemRegistered>>({});

const isMenuPopup = computed(
  () =>
    props.mode === 'horizontal' ||
    (props.mode === 'vertical' && props.collapse),
);

const getIndexPath = (index: string) => subMenus.value[index]?.indexPath ?? [];

const openMenu = (index: string, indexPath: string[]) => {
  if (openedMenus.value.includes(index)) return;
  if (props.uniqueOpened) {
    openedMenus.value = openedMenus.value.filter(opened =>
      indexPath.includes(opened),
    );
  }
  openedMenus.value.push(index);
  emit('open', index, indexPath);
};

const close = (index: string) => {
  const position = openedMenus.value.indexOf(index);
  if (position !== -1) openedMenus.value.splice(position, 1);
};

const closeMenu = (index: string, indexPath: string[]) => {
  close(index);
  emit('close', index, indexPath);
};

const handleSubMenuClick = ({ index, indexPath }: SubMenuClickArgs) => {
  const isOpened = openedMenus.value.includes(index);
  isOpened ? closeMenu(index, indexPath) : openMenu(index, indexPath);
};

/**
 * Same technique element-plus's own `menu.mjs` uses: reach the app's Vue
 * Router instance (if any) via the global-properties bridge instead of a
 * static `import` from `vue-router` — this package never needs `vue-router`
 * installed to render or to be tested.
 */
const handleMenuItemClick = (menuItem: MenuItemClickArgs) => {
  if (props.mode === 'horizontal' || props.collapse) {
    openedMenus.value = [];
  }
  const { index, indexPath } = menuItem;
  if (index == null || indexPath == null) return;

  const router = instance?.appContext.config.globalProperties.$router as
    | { push: (to: unknown) => Promise<unknown> }
    | undefined;

  if (props.router && router) {
    const route = menuItem.route ?? index;
    const routerResult = router.push(route).then(res => {
      if (!res) activeIndex.value = index;
      return res;
    });
    emit('select', index, indexPath, { index, indexPath, route }, routerResult);
  } else {
    activeIndex.value = index;
    emit('select', index, indexPath, { index, indexPath });
  }
};

const updateActiveIndex = (value: string) => {
  const itemsInData = items.value;
  const item =
    itemsInData[value] ||
    (activeIndex.value && itemsInData[activeIndex.value]) ||
    itemsInData[props.defaultActive];
  activeIndex.value = item?.index ?? value;
};

const initMenu = () => {
  const activeItem = activeIndex.value && items.value[activeIndex.value];
  if (!activeItem || props.mode === 'horizontal' || props.collapse) return;
  activeItem.indexPath.forEach(index => {
    const subMenu = subMenus.value[index];
    if (subMenu) openMenu(index, subMenu.indexPath);
  });
};

const addMenuItem = (item: MenuItemRegistered) => {
  items.value[item.index] = item;
};
const removeMenuItem = (item: MenuItemRegistered) => {
  delete items.value[item.index];
};
const addSubMenu = (item: MenuItemRegistered) => {
  subMenus.value[item.index] = item;
};
const removeSubMenu = (item: MenuItemRegistered) => {
  delete subMenus.value[item.index];
};

watch(
  () => props.defaultActive,
  currentActive => {
    if (!items.value[currentActive]) activeIndex.value = '';
    updateActiveIndex(currentActive);
  },
);

watch(
  () => props.collapse,
  value => {
    if (value) openedMenus.value = [];
  },
);

watch(items, initMenu, { deep: true });

onMounted(() => {
  initMenu();
});

provide(menuContextKey, {
  props: reactive({
    mode: computed(() => props.mode),
    collapse: computed(() => props.collapse),
    uniqueOpened: computed(() => props.uniqueOpened),
    router: computed(() => props.router),
    menuTrigger: computed(() => props.menuTrigger),
    backgroundColor: computed(() => props.backgroundColor),
    textColor: computed(() => props.textColor),
    activeTextColor: computed(() => props.activeTextColor),
    popperEffect: computed(() => props.popperEffect),
    popperClass: computed(() => props.popperClass),
    popperOffset: computed(() => props.popperOffset),
    showTimeout: computed(() => props.showTimeout),
    hideTimeout: computed(() => props.hideTimeout),
    persistent: computed(() => props.persistent),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any,
  openedMenus,
  items,
  subMenus,
  activeIndex,
  isMenuPopup,
  addMenuItem,
  removeMenuItem,
  addSubMenu,
  removeSubMenu,
  openMenu,
  closeMenu,
  handleMenuItemClick,
  handleSubMenuClick,
});

const mouseInChild = ref(false);
provide(subMenuContextKey, {
  level: 0,
  indexPath: [],
  addSubMenu,
  removeSubMenu,
  mouseInChild,
});

const cssVarStyle = computed<StyleValue>(() => {
  return ns.cssVarBlock({
    'text-color': props.textColor ?? '',
    'hover-text-color': props.textColor ?? '',
    'bg-color': props.backgroundColor ?? '',
    'hover-bg-color': props.backgroundColor ?? '',
    'active-color': props.activeTextColor ?? '',
    level: '0',
  });
});

defineExpose({
  open: (index: string) => {
    const indexPath = getIndexPath(index);
    indexPath.forEach(i => openMenu(i, indexPath));
  },
  close,
  activeIndex,
  openedMenus,
});
</script>
