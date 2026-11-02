import { computed } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import type {
  UseFlowConnectorProps,
  UseFlowConnectorReturn,
} from '../../shared/types/engine.type';

/** Clases del conector; en horizontal agrega el modificador que gira la flecha. */
export function useFlowConnector(
  props: UseFlowConnectorProps,
): UseFlowConnectorReturn {
  const ns = useNamespace('drag-list-connector');
  const connectorClass = computed(() =>
    [ns.b(), props.direction === 'horizontal' && ns.m('horizontal')].filter(
      Boolean,
    ),
  );
  return { ns, connectorClass };
}
