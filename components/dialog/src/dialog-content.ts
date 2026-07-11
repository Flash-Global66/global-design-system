import { buildProps } from '@flash-global66/g-utils';
import type { ExtractPropTypes } from 'vue';
import type { DialogSizeMode, FooterButton } from './types/types';

export const dialogContentProps = buildProps({
  /**
   * @description whether Dialog takes up full screen
   */
  fullscreen: Boolean,
  /**
   * @description whether Dialog can be dragged
   */
  draggable: Boolean,
  /**
   * @description set overflow
   */
  overflow: {
    type: Boolean,
    default: true,
  },
  /**
   * @description control the body element overflow
   */
  alignCenter: {
    type: Boolean,
    default: false,
  },
  /**
   * @description size mode for dialog width
   */
  sizeMode: {
    type: String,
    values: ['default', 'fixed', 'adaptive'],
    default: 'default',
  } as const,
  /**
   * @description title of Dialog
   */
  title: {
    type: String,
    default: '',
  },
  /**
   * @description custom class names for header wrapper
   */
  headerClass: String,
  /**
   * @description custom class names for body wrapper
   */
  bodyClass: String,
  /**
   * @description custom class names for footer wrapper
   */
  footerClass: String,
  /**
   * @description whether the Dialog displays a close button
   */
  showClose: {
    type: Boolean,
    default: true,
  },
  /**
   * @description width of Dialog. Required when sizeMode is set to "fixed".
   */
  width: {
    type: [String, Number],
  },
  /**
   * @description header's aria-level attribute
   */
  ariaLevel: {
    type: String,
    default: '2',
  },
  /**
   * @description buttons to show in footer
   */
  footerButtons: {
    type: Array as () => FooterButton[],
    default: () => [],
  },
} as const);

export const validateDialogProps = (props: {
  // `@flash-global66/g-utils`'s `buildProps` no angosta el tipo literal a
  // partir de `values` (a diferencia del `buildProp` de element-plus, que
  // usa un sistema de tipos condicional); el validador en tiempo de
  // ejecución sigue aplicando el conjunto de `values`, por lo que se acepta
  // `string` aquí para reflejar el tipo real que `defineProps` infiere.
  sizeMode?: DialogSizeMode | string;
  width?: string | number;
  alignCenter?: boolean;
  top?: string;
}) => {
  const { sizeMode, width } = props;

  if (sizeMode === 'fixed' && (!width || width === '')) {
    console.warn(
      '[g-dialog] When sizeMode is set to "fixed", width must be defined.',
    );
  }
};

export type DialogContentProps = ExtractPropTypes<typeof dialogContentProps>;

export const dialogContentEmits = {
  close: () => true,
};

export type DialogContentEmits = typeof dialogContentEmits;
