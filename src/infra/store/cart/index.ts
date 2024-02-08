import { cart } from './slice'

export const useCart = () => {
  const stateCart = {
    ...cart.get(),
    setAddItem: (item: CustomerOrder) => {
      cart.set({
        items: [...cart.get().items, item],
        total: cart.get().total + item.price
      })
    },
    setRemoveItem: (id: string) => {
      const item = cart.get().items.find(item => item.id === id)
      if (item) {
        cart.set({
          items: cart.get().items.filter(item => item.id !== id),
          total: cart.get().total - item.price
        })
      }
    },
    setUpdateItem: (id: string, quantity: number) => {
      const item = cart.get().items.find(item => item.id === id)
      if (item) {
        cart.set({
          items: cart.get().items.map(item => {
            if (item.id === id) {
              return { ...item, quantity }
            }
            return item
          }),
          total: cart.get().total + item.price * quantity
        })
      }
    }
  }

  return { stateCart }
}
