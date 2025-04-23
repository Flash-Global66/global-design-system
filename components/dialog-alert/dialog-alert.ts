import { createVNode, render } from 'vue'
import DialogAlert from './dialog-alert.vue'
import { AlertButtonResult, AlertOptions } from './types/types'

/**
 * Programmatic function to display an alert dialog
 * Allows showing a dialog without the need for a provider
 * @param options The dialog configuration options
 * @returns A promise that resolves when the user interacts with the dialog
 */
export function openAlert(options: AlertOptions): Promise<AlertButtonResult> {
  return new Promise((resolve) => {
    const container = document.createElement('div')
    let closed = false

    const onNext = (action: AlertButtonResult) => {
      if (closed) return
      closed = true
      render(null, container)
      resolve(action)
    }

    const handleClose = () => {
      if (closed) return
      closed = true
      render(null, container)
      resolve({ isPrimary: false, isSecondary: false })
    }

    const vnode = createVNode(DialogAlert, {
      showAlert: true,
      type: options.type || 'info',
      title: options.title || '',
      description: options.description || '',
      imageName: options.imageName || '',
      imageSize: options.imageSize || 'lg',
      primaryText: options.primaryText || '',
      secondaryText: options.secondaryText || '',
      reverseButtons: options.reverseButtons || false,
      hideButtonClose: options.hideButtonClose || false,
      onNext,
      onClose: handleClose
    })

    render(vnode, container)
    document.body.appendChild(container.firstElementChild!)
  })
}

export default openAlert