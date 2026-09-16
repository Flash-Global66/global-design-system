import type { ExtractPropTypes } from 'vue';
import type Inline from './index.vue';
import { useAriaProps } from '@flash-global66/g-hooks';
import { buildProps, definePropType } from '@flash-global66/g-utils';

import {
  InlineEnum,
  InlineIconAlign,
  InlineLinks,
  InlineSize,
} from '../types/inline.type';
import { IconString } from '@flash-global66/g-icon-font';

export const inlineProps = buildProps({
  /**
   * @description title
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * @description description text
   */
  description: {
    type: String,
    default: '',
  },
  /**
   * @description show close button
   */
  hideClose: {
    type: Boolean,
    default: false,
  },
  /**
   * @description fontawesome icon
   * */
  icon: {
    type: definePropType<IconString>(String),
    default: '',
  },
  /**
   * @description type of inline
   */
  type: {
    type: definePropType<InlineEnum>(String),
    default: 'success',
  },
  /**
   * @description size of inline
   */
  size: {
    type: definePropType<InlineSize>(String),
    default: 'md',
  },
  /**
   * @description inline links
   */
  links: {
    type: definePropType<InlineLinks[]>(Array),
    default: () => [],
  },
  /**
   * @description activates box-shadow
   */
  shadow: {
    type: Boolean,
    default: false,
  },
  /**
   * @description shows/hides the border
   */
  border: {
    type: Boolean,
    default: true,
  },
  /**
   * @description vertical alignment of the left icon
   */
  iconAlign: {
    type: definePropType<InlineIconAlign>(String),
    default: 'medium',
  },
  /**
   * @description adds a filled background behind the left icon
   */
  iconFill: {
    type: Boolean,
    default: false,
  },
  /**
   * @description shows a chevron-right arrow on each link
   */
  showArrow: {
    type: Boolean,
    default: true,
  },
  ...useAriaProps(['ariaLabel']),
});

export const inlineEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
};

export type InlineEmits = typeof inlineEmits;

export type InlineProps = ExtractPropTypes<typeof inlineProps>;

export type InlineInstance = InstanceType<typeof Inline>;
