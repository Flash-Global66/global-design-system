import { computed, getCurrentInstance, onMounted, watch } from 'vue';
import {
  buildProp,
  definePropType,
  isBoolean,
  isClient,
  isFunction,
} from '@flash-global66/g-utils';

import type { ComponentInternalInstance, ExtractPropTypes, Ref } from 'vue';

/**
 * Portado byte-exact desde `createModelToggleComposable` de element-plus
 * 2.9.7 (`es/hooks/use-model-toggle/index.mjs`) — la copia de mayor deriva
 * junto con `usePopper` (design §"HOOK LAYERS").
 *
 * Es una factory: dado el nombre de un prop (p. ej. `'visible'`), genera un
 * trío `useXModelToggle`/props/emits que sincroniza un `Ref<boolean>`
 * indicador local con un `v-model` externo opcional, soportando tanto uso
 * controlado (`v-model:visible`) como no controlado.
 */

const _prop = buildProp({
  type: definePropType<boolean | null>(Boolean),
  default: null,
});

const _event = buildProp({
  type: definePropType<(val: boolean) => void>(Function),
});

export type UseModelTogglePropsRaw<T extends string> = {
  [K in T]: typeof _prop;
} & {
  [K in `onUpdate:${T}`]: typeof _event;
};

export type ModelToggleParams = {
  indicator: Ref<boolean>;
  toggleReason?: Ref<Event | undefined>;
  shouldHideWhenRouteChanges?: Ref<boolean>;
  shouldProceed?: () => boolean;
  onShow?: (event?: Event) => void;
  onHide?: (event?: Event) => void;
};

export const createModelToggleComposable = <T extends string>(name: T) => {
  const updateEventKey = `update:${name}`;
  const updateEventKeyRaw = `onUpdate:${name}`;

  const useModelToggleEmits = [updateEventKey];

  const useModelToggleProps: UseModelTogglePropsRaw<T> = {
    [name]: _prop,
    [updateEventKeyRaw]: _event,
  } as UseModelTogglePropsRaw<T>;

  const useModelToggle = ({
    indicator,
    toggleReason,
    shouldHideWhenRouteChanges,
    shouldProceed,
    onShow,
    onHide,
  }: ModelToggleParams) => {
    const instance = getCurrentInstance() as ComponentInternalInstance;
    const { emit } = instance;
    const props = instance.props as Record<string, unknown>;

    const hasUpdateHandler = computed(() =>
      isFunction(props[updateEventKeyRaw]),
    );
    const isModelBindingAbsent = computed(() => props[name] === null);

    const doShow = (event?: Event) => {
      if (indicator.value === true) {
        return;
      }
      indicator.value = true;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction(onShow)) {
        onShow(event);
      }
    };

    const doHide = (event?: Event) => {
      if (indicator.value === false) {
        return;
      }
      indicator.value = false;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction(onHide)) {
        onHide(event);
      }
    };

    const show = (event?: Event) => {
      if (
        props.disabled === true ||
        (isFunction(shouldProceed) && !shouldProceed())
      )
        return;

      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, true);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doShow(event);
      }
    };

    const hide = (event?: Event) => {
      if (props.disabled === true || !isClient) return;

      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, false);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doHide(event);
      }
    };

    const onChange = (val: unknown) => {
      if (!isBoolean(val)) return;

      if (props.disabled && val) {
        if (hasUpdateHandler.value) {
          emit(updateEventKey, false);
        }
      } else if (indicator.value !== val) {
        if (val) {
          doShow();
        } else {
          doHide();
        }
      }
    };

    const toggle = () => {
      if (indicator.value) {
        hide();
      } else {
        show();
      }
    };

    watch(() => props[name], onChange);

    if (
      shouldHideWhenRouteChanges &&
      (instance.appContext.config.globalProperties as Record<string, unknown>)
        .$route !== undefined
    ) {
      watch(
        () => ({
          ...(instance.proxy as unknown as { $route: Record<string, unknown> })
            .$route,
        }),
        () => {
          if (shouldHideWhenRouteChanges.value && indicator.value) {
            hide();
          }
        },
      );
    }

    onMounted(() => {
      onChange(props[name]);
    });

    return {
      hide,
      show,
      toggle,
      hasUpdateHandler,
    };
  };

  return {
    useModelToggle,
    useModelToggleProps,
    useModelToggleEmits,
  };
};

export const { useModelToggle, useModelToggleProps, useModelToggleEmits } =
  createModelToggleComposable('modelValue');

export type UseModelToggleProps = ExtractPropTypes<typeof useModelToggleProps>;
