import { createVNode, defineComponent, h, renderSlot } from 'vue';
import {
  PatchFlags,
  buildProps,
  definePropType,
  useNamespace,
} from '@flash-global66/g-utils';
import { useSameTarget } from '@flash-global66/g-hooks';

import type { CSSProperties, ExtractPropTypes } from 'vue';
import type { Property } from 'csstype';

export const overlayProps = buildProps({
  mask: {
    type: Boolean,
    default: true,
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: definePropType<string | string[] | Record<string, boolean>>([
      String,
      Array,
      Object,
    ]),
  },
  zIndex: {
    type: definePropType<Property.ZIndex>([String, Number]),
  },
} as const);
export type OverlayProps = ExtractPropTypes<typeof overlayProps>;

export const overlayEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
};
export type OverlayEmits = typeof overlayEmits;

const BLOCK = 'overlay';

export default defineComponent({
  name: 'GOverlay',

  props: overlayProps,
  emits: overlayEmits,

  setup(props, { slots, emit }) {
    // Sin reactividad en esta prop porque, al renderizarse como componente
    // global, este flag se mantiene constante.
    const ns = useNamespace(BLOCK);

    const onMaskClick = (e: MouseEvent) => {
      emit('click', e);
    };

    const { onClick, onMousedown, onMouseup } = useSameTarget(
      props.customMaskEvent ? undefined : onMaskClick,
    );

    // Inicialización del render.
    return () => {
      // Cuando el vnode mantiene la misma estructura pero cambia el trigger,
      // no se actualiza automáticamente; por eso usamos `h`/`createVNode`
      // directamente para gestionar la actualización.
      return props.mask
        ? createVNode(
            'div',
            {
              class: [ns.b(), props.overlayClass],
              style: {
                zIndex: props.zIndex,
              },
              onClick,
              onMousedown,
              onMouseup,
            },
            [renderSlot(slots, 'default')],
            PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS,
            ['onClick', 'onMouseup', 'onMousedown'],
          )
        : h(
            'div',
            {
              class: props.overlayClass,
              style: {
                zIndex: props.zIndex,
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
              } as CSSProperties,
            },
            [renderSlot(slots, 'default')],
          );
    };
  },
});
