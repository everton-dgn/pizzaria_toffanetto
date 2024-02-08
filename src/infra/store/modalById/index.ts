import { modalById } from './slice'

export const useModalById = () => {
  const stateModalById = {
    ...modalById.get(),
    setShowModal: (id: string) => {
      modalById.id.set(id)
    }
  }

  return { stateModalById }
}
