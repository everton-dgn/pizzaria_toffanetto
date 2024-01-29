export type ProductItems = {
  id: string
  product: string
  description: string
  img?: string
  price: number
  hasFixedPrice: boolean
}

export type ProductList = ProductItems[]

export type ProductCategory = {
  id: string
  category: string
  items: ProductList
}

export type AvailableProducts = ProductCategory[] | null

export interface AvailableProductsFindAllType {
  data: AvailableProducts
  error: string
}
