import { buildProps } from "element-plus/es/utils/index.mjs";

import Icon from "./Icon.vue";
import { ExtractPropTypes, PropType } from "vue";
import { IconPull, IconRotation, IconSize, IconString } from "./types";

export const iconProps = buildProps({
  name: {
    type: String as PropType<IconString>,
    required: true
  },
  size: {
    type: String as PropType<IconSize>,
    default: undefined
  },
  fixedWidth: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  rotation: {
    type: [String, Number] as PropType<IconRotation>,
    default: undefined,
    validator: (val: IconRotation) => [90, 180, 270, '90', '180', '270'].includes(val)
  },
  spin: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  pulse: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  pull: {
    type: String as PropType<IconPull>,
    default: undefined,
    validator: (val: IconPull) => ['left', 'right'].includes(val)
  },
  bounce: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  shake: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  beat: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  fade: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  beatFade: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  title: {
    type: String as PropType<string>,
    default: undefined
  },
  ariaLabel: {
    type: String as PropType<string>,
    default: undefined
  },
  ariaHidden: {
    type: Boolean as PropType<boolean>,
    default: undefined
  },
})

export type IconFontProps = ExtractPropTypes<typeof iconProps>
export type IconInstance = InstanceType<typeof Icon>