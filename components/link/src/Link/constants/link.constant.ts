import type { PropType } from 'vue';
import { EVENT_CODE, buildProps } from '@flash-global66/g-utils';
import type { IconString } from '@flash-global66/g-icon-font';

export const LINK_ACTIVATION_KEYS: string[] = [
  EVENT_CODE.enter,
  EVENT_CODE.numpadEnter,
  EVENT_CODE.space,
];

export const linkProps = buildProps({
  /**
   * @description type of link
   */
  type: {
    type: String,
    values: ['primary', 'secondary', 'tertiary'],
    default: 'primary',
  },
  /**
   * @description size of link
   */
  size: {
    type: String,
    values: ['sm', 'md', 'lg'],
    default: 'md',
  },
  /**
   * @description whether the component always shows an underline
   */
  underline: {
    type: Boolean,
    default: false,
  },
  /**
   * @description whether the component is disabled
   */
  disabled: Boolean,
  /**
   * @description same as native hyperlink's `href`.
   * Without `href` the link is exposed as a button: `role="button"`,
   * reachable with Tab and activated with Enter or Space
   */
  href: { type: String, default: '' },
  /**
   * @description same as native hyperlink's `target`
   */
  target: {
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | string>,
    default: '_self',
  },
  /**
   * @description left icon name for the link
   */
  iconLeft: {
    type: String as PropType<IconString>,
    default: '',
  },
  /**
   * @description right icon name for the link
   */
  iconRight: {
    type: String as PropType<IconString>,
    default: '',
  },
  /**
   * @description status of the link, controls contextual appearance
   * - default: Standalone link with standard styling
   * - inline: Link designed to be embedded within text paragraphs
   *
   * Note: Use inline status for links that appear within paragraphs of text
   */
  status: {
    type: String,
    values: ['default', 'inline'],
    default: 'default',
  },
} as const);

export const linkEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
};
