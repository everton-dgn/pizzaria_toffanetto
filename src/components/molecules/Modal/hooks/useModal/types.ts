import { type RefObject } from 'react'

export interface UseModalReturnType {
  btnCloseModalRef: RefObject<HTMLButtonElement>
  changeStateComponent: () => void
  isRenderComponent: boolean
  isVisible: boolean
  modalRef: RefObject<HTMLDivElement>
}
