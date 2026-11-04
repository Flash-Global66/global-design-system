import { computed } from 'vue';
import type { SetupContext } from 'vue';
import { useNamespace } from '@flash-global66/g-utils';
import { LINK_ACTIVATION_KEYS } from './constants/link.constant';
import type { LinkEmits, LinkProps, UseLinkReturn } from './types/link.type';

export function useLink(
  props: LinkProps,
  emit: SetupContext<LinkEmits>['emit'],
): UseLinkReturn {
  const ns = useNamespace('link');

  const linkKls = computed(() => [
    ns.b(),
    ns.m(props.type),
    ns.m(props.size),
    ns.m(props.status),
    ns.is('disabled', props.disabled),
    ns.is('underline', props.underline && !props.disabled),
  ]);

  const isButtonLike = computed(() => !props.href);

  const role = computed(() => (isButtonLike.value ? 'button' : undefined));

  const tabindex = computed(() =>
    isButtonLike.value && !props.disabled ? 0 : undefined,
  );

  const ariaDisabled = computed(() => (props.disabled ? 'true' : undefined));

  function handleKeydown(event: KeyboardEvent) {
    if (!isButtonLike.value || props.disabled) return;
    if (!LINK_ACTIVATION_KEYS.includes(event.code)) return;
    event.preventDefault();
    (event.currentTarget as HTMLElement).click();
  }

  function handleClick(event: MouseEvent) {
    if (!props.disabled) emit('click', event);
  }

  return {
    ns,
    linkKls,
    role,
    tabindex,
    ariaDisabled,
    handleKeydown,
    handleClick,
  };
}
