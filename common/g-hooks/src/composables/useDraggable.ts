import { onBeforeUnmount, onMounted, watchEffect } from 'vue';
import { addUnit } from '@flash-global66/g-utils';
import type { ComputedRef, Ref } from 'vue';

/**
 * Portado byte-exact desde `useDraggable` de element-plus 2.9.7
 * (`es/hooks/use-draggable/index.mjs`).
 *
 * Permite arrastrar `targetRef` usando `dragRef` como handle: escucha
 * `mousedown` en el handle, luego `mousemove`/`mouseup` en `document` para
 * calcular el desplazamiento y aplicarlo como `transform: translate(...)`
 * sobre el elemento objetivo. Cuando `overflow` es falso, restringe el
 * movimiento para que el objetivo no salga del viewport.
 *
 * @param targetRef - Elemento que recibe el `transform` de arrastre.
 * @param dragRef - Elemento (handle) que dispara el arrastre al presionar el mouse.
 * @param draggable - Habilita/deshabilita el arrastre de forma reactiva.
 * @param overflow - Si es verdadero, permite que el objetivo se mueva fuera del viewport.
 */
export const useDraggable = (
  targetRef: Ref<HTMLElement | undefined>,
  dragRef: Ref<HTMLElement | undefined>,
  draggable: ComputedRef<boolean>,
  overflow?: ComputedRef<boolean>,
) => {
  let transform = {
    offsetX: 0,
    offsetY: 0,
  };

  const onMousedown = (e: MouseEvent) => {
    const downX = e.clientX;
    const downY = e.clientY;
    const { offsetX, offsetY } = transform;
    const targetRect = targetRef.value!.getBoundingClientRect();
    const targetLeft = targetRect.left;
    const targetTop = targetRect.top;
    const targetWidth = targetRect.width;
    const targetHeight = targetRect.height;
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    const minLeft = -targetLeft + offsetX;
    const minTop = -targetTop + offsetY;
    const maxLeft = clientWidth - targetLeft - targetWidth + offsetX;
    const maxTop = clientHeight - targetTop - targetHeight + offsetY;

    const onMousemove = (e2: MouseEvent) => {
      let moveX = offsetX + e2.clientX - downX;
      let moveY = offsetY + e2.clientY - downY;

      if (!overflow?.value) {
        moveX = Math.min(Math.max(moveX, minLeft), maxLeft);
        moveY = Math.min(Math.max(moveY, minTop), maxTop);
      }

      transform = {
        offsetX: moveX,
        offsetY: moveY,
      };

      if (targetRef.value) {
        targetRef.value.style.transform = `translate(${addUnit(moveX)}, ${addUnit(moveY)})`;
      }
    };

    const onMouseup = () => {
      document.removeEventListener('mousemove', onMousemove);
      document.removeEventListener('mouseup', onMouseup);
    };

    document.addEventListener('mousemove', onMousemove);
    document.addEventListener('mouseup', onMouseup);
  };

  const onDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.addEventListener('mousedown', onMousedown);
    }
  };

  const offDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.removeEventListener('mousedown', onMousedown);
    }
  };

  const resetPosition = () => {
    transform = {
      offsetX: 0,
      offsetY: 0,
    };
    if (targetRef.value) {
      targetRef.value.style.transform = 'none';
    }
  };

  onMounted(() => {
    watchEffect(() => {
      if (draggable.value) {
        onDraggable();
      } else {
        offDraggable();
      }
    });
  });

  onBeforeUnmount(() => {
    offDraggable();
  });

  return {
    resetPosition,
  };
};
