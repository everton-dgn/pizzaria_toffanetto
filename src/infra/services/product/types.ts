type OptionBase = {
  title: string
  description?: string
  isRequired: boolean
}

export type SizeValues = 'mini' | 'small' | 'medium' | 'big' | 'family'

export interface Size extends OptionBase {
  options: Array<{
    id: string
    name: string
    price: number
    value: SizeValues
    quantityOfFlavors: 1 | 2 | 3 | 4
  }>
}

export interface Flavor extends OptionBase {
  options: Array<{
    id: string
    name: string
    sizePricing: Record<SizeValues, number>
    description: string
  }>
}

export interface EdgeFlavor extends OptionBase {
  options: Array<{ id: string; name: string; price: number }>
}

export interface Additional extends OptionBase {
  options: Array<{ id: string; name: string; price: number }>
}

export interface OrderComment extends OptionBase {}

export type ProductType = {
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

export type ProductOptions = ProductType | null

export type ProductFindByIdType = {
  data: ProductOptions
  error: string
}
