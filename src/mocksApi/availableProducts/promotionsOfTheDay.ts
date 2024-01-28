import type {
  ProductCategory,
  ProductList
} from 'infra/services/availableProducts/types'

const items: ProductList = [
  {
    id: 'fdg45jkmmwl4',
    product: 'Pizza Napolitana',
    description:
      'Mussarela, tomate, cebola, molho de tomate, azeite, orégano e parmesão ralado',
    img: '/img/pizzas/traditionalPizzas/napolitana.jpg',
    hasFixedPrice: false,
    price: 19
  },
  {
    id: 'fdg4lght345',
    product: 'Pizza Peperoni',
    description:
      'Mussarela, alho, azeitona, molho de tomate, azeite, orégano e pepperoni',
    img: '/img/pizzas/traditionalPizzas/peperoni.jpg',
    hasFixedPrice: false,
    price: 19
  }
]

export const promotionsOfTheDay: ProductCategory = {
  id: 'rfdfkljk23ij23ij23wedsdsd34',
  category: 'Promoções do dia',
  items
}
