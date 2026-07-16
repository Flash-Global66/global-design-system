<template>
  <li
    role="menuitem"
    aria-haspopup="true"
    :aria-expanded="opened"
    :class="[
      ns.b(),
      ns.is('active', active),
      ns.is('opened', opened),
      ns.is('disabled', disabled),
    ]"
    @mouseenter="handleMouseenter"
    @mouseleave="() => handleMouseleave()"
    @focus="handleMouseenter"
    @click="$emit('click')"
  >
    <g-tooltip
      v-if="rootMenu.isMenuPopup.value"
      :visible="opened"
      effect="light"
      :pure="true"
      :offset="subMenuPopperOffset"
      :show-arrow="false"
      :persistent="rootMenu.props.persistent"
      :popper-class="subMenuPopperClass"
      :placement="currentPlacement"
      :teleported="appendToBody"
      :fallback-placements="fallbackPlacements"
      :transition="menuTransitionName"
      :gpu-acceleration="false"
    >
      <div :class="ns.e('title')" @click="handleClick">
        <!--
          @slot title of the sub menu
        -->
        <slot name="title" />
        <span
          :class="ns.e('icon-arrow')"
          :style="{ transform: opened ? 'rotateZ(180deg)' : 'none' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            width="1em"
            height="1em"
          >
            <path
              fill="currentColor"
              d="M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
            />
          </svg>
        </span>
      </div>
      <template #content>
        <div
          :class="[
            nsMenu.m(mode),
            nsMenu.m('popup-container'),
            subMenuPopperClass,
          ]"
          @mouseenter="(evt: MouseEvent) => handleMouseenter(evt, 100)"
          @mouseleave="() => handleMouseleave(true)"
          @focus="(evt: FocusEvent) => handleMouseenter(evt, 100)"
        >
          <ul
            :class="[
              nsMenu.b(),
              nsMenu.m('popup'),
              nsMenu.m(`popup-${currentPlacement}`),
            ]"
            :style="ulStyle"
          >
            <!--
              @slot Sub Menu Content
            -->
            <slot />
          </ul>
        </div>
      </template>
    </g-tooltip>
    <template v-else>
      <div ref="verticalTitleRef" :class="ns.e('title')" @click="handleClick">
        <!--
          @slot title of the sub menu
        -->
        <slot name="title" />
        <span
          :class="ns.e('icon-arrow')"
          :style="{ transform: opened ? 'rotateZ(180deg)' : 'none' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            width="1em"
            height="1em"
          >
            <path
              fill="currentColor"
              d="M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
            />
          </svg>
        </span>
      </div>
      <transition
        name="gui-collapse-transition"
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @enter-cancelled="onAfterLeave"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
        @after-leave="onAfterLeave"
        @leave-cancelled="onAfterLeave"
      >
        <ul
          v-show="opened"
          role="menu"
          :class="[nsMenu.b(), nsMenu.m('inline')]"
          :style="ulStyle"
        >
          <!--
            @slot Sub Menu Content
          -->
          <slot />
        </ul>
      </transition>
    </template>
  </li>
</template>

<script lang="ts" setup>
import {
  computed,
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
} from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import { GTooltip } from '@flash-global66/g-tooltip';

import type { Placement } from '@popperjs/core';
import {
  assertMenuContext,
  menuContextKey,
  subMenuContextKey,
  useMenuCssVar,
  type MenuItemRegistered,
} from './constants';

/**
 * Port of element-plus's real `ElSubMenu`
 * (`node_modules/element-plus/es/components/menu/src/sub-menu.mjs`, 2.9.7)
 * onto the shared context module. Zero `element-plus` import.
 *
 * Deliberate scope cuts vs the real `ElSubMenu` (documented, not silent):
 *  - `expandCloseIcon`/`expandOpenIcon`/`collapseCloseIcon`/`collapseOpenIcon`
 *    props are dropped — the pre-migration wrapper already had them commented
 *    out (dead code), so this is a zero-behavior-change cut. The arrow icon
 *    is always the same inlined `ArrowDown` glyph (same technique WU3
 *    /skeleton used for its own icon: raw `<svg>` extracted from
 *    `@element-plus/icons-vue`'s bundled source, zero new dependency).
 *  - `doDestroy()`/`handleCollapseToggle()` (explicit popper-instance
 *    teardown when `collapse` flips off) is not ported: this component
 *    renders either the popup (`<g-tooltip>`) branch OR the inline-accordion
 *    branch via `v-if`/`v-else`, so switching `rootMenu.isMenuPopup` already
 *    fully unmounts the popup branch through Vue's own lifecycle — an
 *    explicit teardown call would be redundant.
 */

defineOptions({
  name: 'GSubMenu',
});

const props = defineProps({
  index: {
    type: String,
    required: true,
  },
  showTimeout: {
    type: Number,
    default: undefined,
  },
  hideTimeout: {
    type: Number,
    default: undefined,
  },
  popperClass: String,
  disabled: Boolean,
  /** @deprecated use `teleported` instead */
  popperAppendToBody: {
    type: Boolean,
    default: undefined,
  },
  teleported: {
    type: Boolean,
    default: undefined,
  },
  popperOffset: {
    type: Number,
    default: undefined,
  },
});

defineEmits<{
  (e: 'click'): void;
}>();

const ns = useNamespace('sub-menu');
const nsMenu = useNamespace('menu');

const rootMenu = assertMenuContext(
  inject(menuContextKey, undefined),
  'GSubMenu',
  'root menu context',
);
const parentSubMenu = assertMenuContext(
  inject(subMenuContextKey, undefined),
  'GSubMenu',
  'sub menu context',
);

const items = ref<Record<string, MenuItemRegistered>>({});
const subMenus = ref<Record<string, MenuItemRegistered>>({});
const mouseInChild = ref(false);
const verticalTitleRef = ref<HTMLDivElement>();

let showTimer: ReturnType<typeof setTimeout> | undefined;
let hideTimer: ReturnType<typeof setTimeout> | undefined;

const isFirstLevel = computed(() => parentSubMenu.level === 0);
const mode = computed(() => rootMenu.props.mode);
const opened = computed(() => rootMenu.openedMenus.value.includes(props.index));
const indexPath = computed(() => [...parentSubMenu.indexPath, props.index]);
const active = computed(() =>
  [...Object.values(items.value), ...Object.values(subMenus.value)].some(
    child => child.active,
  ),
);

const appendToBody = computed(() => {
  if (props.teleported !== undefined) return props.teleported;
  if (props.popperAppendToBody !== undefined) return props.popperAppendToBody;
  return isFirstLevel.value;
});

const currentPlacement = computed<Placement>(() =>
  mode.value === 'horizontal' && isFirstLevel.value
    ? 'bottom-start'
    : 'right-start',
);

const fallbackPlacements = computed<Placement[]>(() =>
  mode.value === 'horizontal' && isFirstLevel.value
    ? [
        'bottom-start',
        'bottom-end',
        'top-start',
        'top-end',
        'right-start',
        'left-start',
      ]
    : [
        'right-start',
        'right',
        'right-end',
        'left-start',
        'bottom-start',
        'bottom-end',
        'top-start',
        'top-end',
      ],
);

const menuTransitionName = computed(() =>
  rootMenu.props.collapse
    ? `${nsMenu.namespace.value}-zoom-in-left`
    : `${nsMenu.namespace.value}-zoom-in-top`,
);

const ulStyle = useMenuCssVar(rootMenu.props, parentSubMenu.level + 1);

const subMenuPopperOffset = computed(
  () => props.popperOffset ?? rootMenu.props.popperOffset,
);
const subMenuPopperClass = computed(
  () => props.popperClass ?? rootMenu.props.popperClass,
);
const subMenuShowTimeout = computed(
  () => props.showTimeout ?? rootMenu.props.showTimeout,
);
const subMenuHideTimeout = computed(
  () => props.hideTimeout ?? rootMenu.props.hideTimeout,
);

const item = reactive({
  index: props.index,
  indexPath,
  active,
}) as unknown as MenuItemRegistered;

const handleClick = () => {
  const trigger = rootMenu.props.menuTrigger;
  const triggerIsHoverHorizontal =
    trigger === 'hover' && mode.value === 'horizontal';
  const collapsedVertical =
    rootMenu.props.collapse && mode.value === 'vertical';
  if (triggerIsHoverHorizontal || collapsedVertical || props.disabled) return;
  rootMenu.handleSubMenuClick({
    index: props.index,
    indexPath: indexPath.value,
  });
};

const clearTimers = () => {
  if (showTimer) clearTimeout(showTimer);
  if (hideTimer) clearTimeout(hideTimer);
};

const handleMouseenter = (
  event: MouseEvent | FocusEvent,
  showTimeoutOverride = subMenuShowTimeout.value,
) => {
  if (event.type === 'focus') return;
  const clickHorizontal =
    rootMenu.props.menuTrigger === 'click' && mode.value === 'horizontal';
  const inlineVertical = !rootMenu.props.collapse && mode.value === 'vertical';
  if (clickHorizontal || inlineVertical || props.disabled) {
    mouseInChild.value = true;
    return;
  }
  mouseInChild.value = true;
  clearTimers();
  showTimer = setTimeout(() => {
    rootMenu.openMenu(props.index, indexPath.value);
  }, showTimeoutOverride);
  if (appendToBody.value) {
    parentSubMenu.mouseInChild.value = true;
  }
};

const handleMouseleave = (deepDispatch = false) => {
  const clickHorizontal =
    rootMenu.props.menuTrigger === 'click' && mode.value === 'horizontal';
  const inlineVertical = !rootMenu.props.collapse && mode.value === 'vertical';
  if (clickHorizontal || inlineVertical) {
    mouseInChild.value = false;
    return;
  }
  clearTimers();
  mouseInChild.value = false;
  hideTimer = setTimeout(() => {
    if (!mouseInChild.value) rootMenu.closeMenu(props.index, indexPath.value);
  }, subMenuHideTimeout.value);
  if (appendToBody.value && deepDispatch) {
    parentSubMenu.handleMouseleave?.(true);
  }
};

const addSubMenu = (child: MenuItemRegistered) => {
  subMenus.value[child.index] = child;
};
const removeSubMenu = (child: MenuItemRegistered) => {
  delete subMenus.value[child.index];
};

// Re-provide `subMenuContextKey` from THIS shared module (not a new
// `Symbol()`) for this level's own descendants — `level`/`indexPath`
// increment by one relative to whatever was injected above, so nesting
// depth is unlimited while every level still shares the same single key.
provide(subMenuContextKey, {
  level: parentSubMenu.level + 1,
  indexPath: indexPath.value,
  addSubMenu,
  removeSubMenu,
  mouseInChild,
  handleMouseleave,
});

onMounted(() => {
  rootMenu.addSubMenu(item);
  parentSubMenu.addSubMenu(item);
});

onBeforeUnmount(() => {
  parentSubMenu.removeSubMenu(item);
  rootMenu.removeSubMenu(item);
  clearTimers();
});

/**
 * Inline port of element-plus's own `ElCollapseTransition`
 * (`node_modules/element-plus/es/components/collapse-transition/src/collapse-transition.mjs`)
 * — imperative `maxHeight`/`padding` interpolation driving the inline
 * (non-popup) accordion open/close animation. The `gui-collapse-transition`
 * CSS class (transition-duration hook) already exists in
 * `@flash-global66/g-utils/transition` (ported by an earlier SCSS
 * foundation task), so only the JS hooks need porting here.
 */
const resetTransitionStyles = (el: HTMLElement) => {
  el.style.maxHeight = '';
  el.style.overflow = el.dataset.oldOverflow ?? '';
  el.style.paddingTop = el.dataset.oldPaddingTop ?? '';
  el.style.paddingBottom = el.dataset.oldPaddingBottom ?? '';
};

const onBeforeEnter = (el: Element) => {
  const node = el as HTMLElement;
  node.dataset.oldPaddingTop = node.style.paddingTop;
  node.dataset.oldPaddingBottom = node.style.paddingBottom;
  if (node.style.height) node.dataset.elExistsHeight = node.style.height;
  node.style.maxHeight = '0';
  node.style.paddingTop = '0';
  node.style.paddingBottom = '0';
};

const onEnter = (el: Element) => {
  const node = el as HTMLElement;
  requestAnimationFrame(() => {
    node.dataset.oldOverflow = node.style.overflow;
    if (node.dataset.elExistsHeight) {
      node.style.maxHeight = node.dataset.elExistsHeight;
    } else if (node.scrollHeight !== 0) {
      node.style.maxHeight = `${node.scrollHeight}px`;
    } else {
      node.style.maxHeight = '0';
    }
    node.style.paddingTop = node.dataset.oldPaddingTop ?? '';
    node.style.paddingBottom = node.dataset.oldPaddingBottom ?? '';
    node.style.overflow = 'hidden';
  });
};

const onAfterEnter = (el: Element) => {
  const node = el as HTMLElement;
  node.style.maxHeight = '';
  node.style.overflow = node.dataset.oldOverflow ?? '';
};

const onBeforeLeave = (el: Element) => {
  const node = el as HTMLElement;
  node.dataset.oldPaddingTop = node.style.paddingTop;
  node.dataset.oldPaddingBottom = node.style.paddingBottom;
  node.dataset.oldOverflow = node.style.overflow;
  node.style.maxHeight = `${node.scrollHeight}px`;
  node.style.overflow = 'hidden';
};

const onLeave = (el: Element) => {
  const node = el as HTMLElement;
  if (node.scrollHeight !== 0) {
    node.style.maxHeight = '0';
    node.style.paddingTop = '0';
    node.style.paddingBottom = '0';
  }
};

const onAfterLeave = (el: Element) => resetTransitionStyles(el as HTMLElement);
</script>
