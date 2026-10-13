import { useNamespace } from '@flash-global66/g-utils';
import type { UseFlowNodeReturn } from '../../shared/types/engine.type';

/** Namespace BEM del nodo de inicio/fin. */
export function useFlowNode(): UseFlowNodeReturn {
  const ns = useNamespace('drag-list-node');
  return { ns };
}
