import { toast } from './slice'
import { type ToastListItems } from './types'

export const useGlobalToast = () => {
  const stateToast = {
    ...toast.get(),
    setToastList: (options: ToastListItems) => {
      toast.toastList.set([
        { ...options, animationClass: options.animationClass || 'fade_enter' },
        ...toast.toastList.get()
      ])
    },
    setRemoveToast: (id: string) => {
      toast.toastList.set(
        toast.toastList.get().filter(toast => toast.id !== id)
      )
    },
    setUpdateToast: (id: string) => {
      toast.toastList.set(
        toast.toastList.get().map(toast => {
          if (toast.id === id) {
            return { ...toast, animationClass: 'fade_exit' }
          }
          return toast
        })
      )
    }
  }

  return { stateToast }
}
