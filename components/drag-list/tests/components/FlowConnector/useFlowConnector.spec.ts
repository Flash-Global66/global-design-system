import { describe, expect, it } from 'vitest';
import { withSetup } from '../../../../../tests/utils/withSetup';
import { useFlowConnector } from '../../../src/components/FlowConnector/useFlowConnector';

describe('useFlowConnector', () => {
  it('vertical no agrega modificador', () => {
    const { result } = withSetup(() =>
      useFlowConnector({ direction: 'vertical' }),
    );
    expect(result.connectorClass.value).toEqual(['gui-drag-list-connector']);
  });

  it('horizontal agrega el modificador que lo gira', () => {
    const { result } = withSetup(() =>
      useFlowConnector({ direction: 'horizontal' }),
    );
    expect(result.connectorClass.value).toContain(
      'gui-drag-list-connector--horizontal',
    );
  });
});
