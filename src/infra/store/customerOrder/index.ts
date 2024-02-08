import { customerOrder } from './slice'

export const useCustomerOrder = () => {
  const stateCustomerOrder = {
    ...customerOrder.get(),
    setCustomerOrder: (newCustomerOrder: Partial<CustomerOrder>) => {
      customerOrder.set(newCustomerOrder)
    },
    setFlavorOptions: (flavorOptions: FlavorOptions[]) => {
      customerOrder.flavorOptions.set(flavorOptions)
    },
    setEdgeFlavorOptions: (edgeFlavorOptions: CustomerOrderOptions) => {
      customerOrder.edgeFlavorOptions.set(edgeFlavorOptions)
    },
    setAdditionalOptions: (additionalOptions: CustomerOrderOptions) => {
      customerOrder.additionalOptions.set(additionalOptions)
    },
    setSizeOptions: (sizeOptions: SizeOptions) => {
      customerOrder.sizeOptions.set(sizeOptions)
    },
    setOrderComment: (orderComment: string) => {
      customerOrder.orderComment.set(orderComment)
    }
  }

  return { stateCustomerOrder }
}
