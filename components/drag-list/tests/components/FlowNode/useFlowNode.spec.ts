import { describe, expect, it } from 'vitest';
import { withSetup } from '../../../../../tests/utils/withSetup';
import { useFlowNode } from '../../../src/components/FlowNode/useFlowNode';

describe('useFlowNode', () => {
  it('expone el namespace BEM del nodo', () => {
    const { result } = withSetup(() => useFlowNode());
    expect(result.ns.b()).toBe('gui-drag-list-node');
    expect(result.ns.e('label')).toBe('gui-drag-list-node__label');
  });
});
