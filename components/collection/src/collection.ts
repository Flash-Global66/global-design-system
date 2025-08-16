import { inject, onBeforeUnmount, onMounted, provide, ref, unref, defineComponent } from 'vue'

import type { InjectionKey } from 'vue'
import type { SetupContext } from '@vue/runtime-core'
import type {
  CollectionItem as CollectionItemType,
  GCollectionInjectionContext,
  GCollectionItemInjectionContext
} from './tokens'

export const COLLECTION_ITEM_SIGN = `data-g-collection-item`

export const createCollectionWithScope = (
  name: string
): {
  COLLECTION_INJECTION_KEY: InjectionKey<GCollectionInjectionContext>
  COLLECTION_ITEM_INJECTION_KEY: InjectionKey<GCollectionItemInjectionContext>
  GCollection: any
  GCollectionItem: any
} => {
  const COLLECTION_NAME = `G${name}Collection`
  const COLLECTION_ITEM_NAME = `${COLLECTION_NAME}Item`
  const COLLECTION_INJECTION_KEY: InjectionKey<GCollectionInjectionContext> =
    Symbol(COLLECTION_NAME)
  const COLLECTION_ITEM_INJECTION_KEY: InjectionKey<GCollectionItemInjectionContext> =
    Symbol(COLLECTION_ITEM_NAME)

  // Create GCollection component
  const GCollection = defineComponent({
    name: COLLECTION_NAME,
    template: '<slot />',
    setup() {
      const collectionRef = ref<HTMLElement>()
      const itemMap: GCollectionInjectionContext['itemMap'] = new Map()
      const getItems = <T>() => {
        const collectionG = unref(collectionRef)

        if (!collectionG) return []
        const orderedNodes = Array.from(collectionG.querySelectorAll(`[${COLLECTION_ITEM_SIGN}]`))

        const items = [...itemMap.values()]

        return items.sort(
          (a, b) => orderedNodes.indexOf(a.ref!) - orderedNodes.indexOf(b.ref!)
        ) as CollectionItemType<T>[]
      }

      provide(COLLECTION_INJECTION_KEY, {
        itemMap,
        getItems,
        collectionRef
      })
    }
  })

  // Create GCollectionItem component
  const GCollectionItem = defineComponent({
    name: COLLECTION_ITEM_NAME,
    template: '<div :data-g-collection-item="true" v-bind="$attrs"><slot /></div>',
    inheritAttrs: false,
    setup(_: unknown, { attrs }: SetupContext) {
      const collectionItemRef = ref<HTMLElement>()
      const collectionInjection = inject(COLLECTION_INJECTION_KEY, undefined)!

      provide(COLLECTION_ITEM_INJECTION_KEY, {
        collectionItemRef
      })

      onMounted(() => {
        const collectionItemG = unref(collectionItemRef)
        if (collectionItemG) {
          collectionInjection.itemMap.set(collectionItemG, {
            ref: collectionItemG,
            ...attrs
          })
        }
      })

      onBeforeUnmount(() => {
        const collectionItemG = unref(collectionItemRef)!
        collectionInjection.itemMap.delete(collectionItemG)
      })
    }
  })

  return {
    COLLECTION_INJECTION_KEY,
    COLLECTION_ITEM_INJECTION_KEY,
    GCollection,
    GCollectionItem
  }
}
