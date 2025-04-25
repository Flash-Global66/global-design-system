import { buildProps } from "element-plus/es/utils/index.mjs";

import Icon from "./Icon.vue";
import { ExtractPropTypes, PropType } from "vue";
import { IconString } from "./types";

export const iconProps = buildProps({
  name: {
    type: String as PropType<IconString>,
    required: true
  },
})

export type IconFontProps = ExtractPropTypes<typeof iconProps>
export type IconInstance = InstanceType<typeof Icon>