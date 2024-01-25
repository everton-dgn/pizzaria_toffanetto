import { type Status } from 'hooks/useToast/types'

type AnimationClass = 'fade_enter' | 'fade_exit'

export interface ToastListItems {
  animationClass: AnimationClass
  description: string
  id: string
  status: Status
}

export type ToastList = ToastListItems[] | []

export interface Toast {
  toastList: ToastList
}
