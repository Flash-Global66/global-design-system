import { useNamespace } from '@flash-global66/g-utils';

/** Namespace BEM del nodo de inicio/fin. */
export function useFlowNode() {
  const ns = useNamespace('drag-list-node');
  return { ns };
}
