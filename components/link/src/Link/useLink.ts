import { computed } from 'vue';
import type { SetupContext } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import type { LinkEmits, LinkProps } from './types/link.type';

export function useLink(
  props: LinkProps,
  emit: SetupContext<LinkEmits>['emit'],
) {
  const ns = useNamespace('link');

  const linkKls = computed(() => [
    ns.b(),
    ns.m(props.type),
    ns.m(props.size),
    ns.m(props.status),
    ns.is('disabled', props.disabled),
    ns.is('underline', props.underline && !props.disabled),
  ]);

  function handleClick(event: MouseEvent) {
    if (!props.disabled) emit('click', event);
  }

  return { ns, linkKls, handleClick };
}
