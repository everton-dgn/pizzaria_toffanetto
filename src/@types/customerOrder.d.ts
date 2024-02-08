type CustomerOrderOptions = {
  id: string
  name: string
  price: number
}

interface SizeOptions extends CustomerOrderOptions {
  name: SizeValues
}

interface FlavorOptions extends CustomerOrderOptions {
  quantity: number
}

type CustomerOrder = {
  id: string
  name: string
  price: number
  quantity: number
  sizeOptions?: SizeOptions
  flavorOptions?: FlavorOptions[]
  edgeFlavorOptions?: CustomerOrderOptions
  additionalOptions?: CustomerOrderOptions
  orderComment?: string
}
