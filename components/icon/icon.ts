import {
  buildProps,
  definePropType,
  isBoolean,
  isNumber,
  isString
} from "element-plus/es/utils/index.mjs";

import Icon from "./Icon.vue";
import { ExtractPropTypes, PropType } from "vue";

export const iconProps = buildProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String as PropType<string | number>,
    default: "1em",
  },
  color: String,
  style: Object,
  title: String,
  class: {
    type: [String, Object, Array] as PropType<string | Record<string, boolean> | Array<string | Record<string, boolean>>>,
    default: "",
  },
  disableFill: Boolean,
  removeInitialStyle: Boolean,
  
})

export type IconProps = ExtractPropTypes<typeof iconProps>
export type IconInstance = InstanceType<typeof Icon>