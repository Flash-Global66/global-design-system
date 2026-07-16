import { computed, ref } from 'vue';
import type { SetupContext } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import { useFormSize } from '@flash-global66/g-form';
import type { InlineEmits, InlineProps } from './defaults';

export function useInline(
  props: InlineProps,
  emit: SetupContext<InlineEmits>['emit']
) {
  const visible = ref(true);

  const ns = useNamespace('inline');
  const inlineSize = useFormSize();

  const inlineRef = ref<HTMLElement | null>(null);

  const inlineClass = computed(() => [
    ns.b(),
    ns.m(inlineSize.value),
    ns.m(props.type),
    props.shadow && ns.m('shadow'),
    !props.border && ns.m('no-border'),
    ns.m(`icon-align-${props.iconAlign}`),
  ]);

  function onClose(event: MouseEvent) {
    visible.value = false;
    emit('close', event);
  }

  return { visible, ns, inlineRef, inlineClass, onClose };
}
