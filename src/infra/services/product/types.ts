type OptionBase = {
  title: string
  description?: string
  isRequired: boolean
}

type SizeName = 'Mini' | 'Pequena' | 'Média' | 'Grande' | 'Família'

export interface Size extends OptionBase {
  options: Array<{
    id: string
    name: SizeName
    slices: 4 | 6 | 8 | 12
    quantityOfFlavors: 1 | 2 | 3 | 4
    price: number
  }>
}

export interface Flavor extends OptionBase {
  options: Array<{
    id: string
    name: string
    description: string
    price: number
  }>
}

export interface EdgeFlavor extends OptionBase {
  options: Array<{ id: string; name: string; price: number }>
}

export type ProductType = {
  id: string
  product: string
  description: string
  img?: string
  size?: Size
  flavor?: Flavor
  edgeFlavor?: EdgeFlavor
  comments?: OptionBase
}

export type ProductOptions = ProductType | null

export type ProductFindByIdType = {
  data: ProductOptions
  error: string
}
