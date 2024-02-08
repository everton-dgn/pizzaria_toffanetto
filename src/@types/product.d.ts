type OptionBase = {
  title: string
  description?: string
  isRequired: boolean
}

type SizeValues = 'mini' | 'small' | 'medium' | 'big' | 'family'

interface Size extends OptionBase {
  options: Array<{
    id: string
    name: SizeValues
    price: number
    label: string
    quantityOfFlavors: 1 | 2 | 3 | 4
  }>
}

interface Flavor extends OptionBase {
  options: Array<{
    id: string
    name: string
    sizePricing: Record<SizeValues, number>
    description: string
  }>
}

interface EdgeFlavor extends OptionBase {
  options: Array<{ id: string; name: string; price: number }>
}

interface Additional extends OptionBase {
  options: Array<{ id: string; name: string; price: number }>
}

type OrderComment = OptionBase

type ProductType = {
  id: string
  product: string
  description: string
  img?: string
  size?: Size
  flavor?: Flavor
  edgeFlavor?: EdgeFlavor
  additional?: Additional
  orderComment?: OrderComment
}

type ProductOptions = ProductType | null

type ProductFindByIdType = {
  data: ProductOptions
  error: string
}
