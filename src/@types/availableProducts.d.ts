type ProductItems = {
  id: string
  product: string
  description: string
  img?: string
  price: number
  hasFixedPrice: boolean
}

type ProductList = ProductItems[]

type ProductCategory = {
  id: string
  category: string
  items: ProductList
}

type AvailableProducts = ProductCategory[] | null

type AvailableProductsFindAllType = {
  data: AvailableProducts
  error: string
}
