import { NOOP } from '@flash-global66/g-utils';

/**
 * Portado byte-exact desde `useSameTarget` de element-plus 2.9.7
 * (`es/hooks/use-same-target/index.mjs`).
 *
 * Evita que un click disparado por una selección de texto arrastrada con el
 * mouse (mousedown en un elemento, mouseup en otro) se interprete como un
 * click real sobre el `currentTarget`. Solo invoca `handleClick` cuando el
 * mismo elemento fue el objetivo tanto del `mousedown` como del `mouseup`.
 *
 * Referencia: https://javascript.info/mouse-events-basics — los eventos se
 * disparan en el orden mousedown -> mouseup -> click; el flag de mousedown
 * se resetea después de cada click.
 *
 * @param handleClick - Handler a invocar solo cuando mousedown y mouseup/click
 * comparten el mismo `currentTarget`. Si se omite, retorna handlers no-op.
 */
export const useSameTarget = (handleClick?: (e: MouseEvent) => void) => {
  if (!handleClick) {
    return { onClick: NOOP, onMousedown: NOOP, onMouseup: NOOP };
  }

  let mousedownTarget = false;
  let mouseupTarget = false;

  const onClick = (e: MouseEvent) => {
    // Solo si y solo si ambos targets coinciden con el currentTarget.
    if (mousedownTarget && mouseupTarget) {
      handleClick(e);
    }
    mousedownTarget = mouseupTarget = false;
  };

  const onMousedown = (e: MouseEvent) => {
    // Marca el target del mousedown actual.
    mousedownTarget = e.target === e.currentTarget;
  };

  const onMouseup = (e: MouseEvent) => {
    // Marca el target del mouseup actual.
    mouseupTarget = e.target === e.currentTarget;
  };

  return { onClick, onMousedown, onMouseup };
};
