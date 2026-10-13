export const DRAG_THRESHOLDS = {
  /** Distancia mínima (px) para activar el arrastre con mouse. */
  mouseDistance: 4,
  /** Long-press (ms) para activar el arrastre con touch. */
  touchDelay: 200,
  /** Tolerancia de movimiento (px) durante el long-press antes de cancelar. */
  touchTolerance: 8,
  /** Distancia (px) al borde del panel que dispara el auto-scroll. */
  autoScrollEdge: 48,
  /** Velocidad máxima (px por frame) del auto-scroll. */
  autoScrollMaxSpeed: 16,
} as const;
