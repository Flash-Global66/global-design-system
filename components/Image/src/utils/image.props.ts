import type { ExtractPropTypes, PropType } from "vue";
import { buildProps, debugWarn } from "element-plus/es/utils/index";
import type { ImageName, ImageSize, ImageLazyLoad } from "../types/image.types";
import { IMAGE_NAMES } from "../constants/image.constants";

/**
 * Props definition for the Image component
 */
export const imageProps = buildProps({
  /**
   * Name of the illustration to display
   * Must be one of the predefined names in IMAGE_NAMES
   */
  name: {
    type: String as PropType<ImageName>,
    required: true,
  },
  /**
   * Size of the illustration
   * Valid values: 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'
   */
  size: {
    type: String as PropType<ImageSize>,
    default: 'md',
  },
  /**
   * Whether to lazy load the image
   * If true, the image will be loaded when it enters the viewport
   */
  lazyLoad: {
    type: Boolean as PropType<ImageLazyLoad>,
    default: true,
  },
});

export type ImageProps = ExtractPropTypes<typeof imageProps>;

/**
 * Validates the image props
 * @param props - Props of the Image component
 */
export function validateImageProps(props: ImageProps) {
  if (props.name && !IMAGE_NAMES.includes(props.name as ImageName)) {
    debugWarn(
      "Image",
      `Invalid image name: "${props.name}". Available image names: ${IMAGE_NAMES.join(', ')}`
    );
  }
}