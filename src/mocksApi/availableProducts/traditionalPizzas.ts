import type {
  ProductCategory,
  ProductList
} from 'infra/services/availableProducts/types'

const items: ProductList = [
  {
    id: 'fdg45jkm345',
    product: 'Pizza Calabresa',
    description:
      'Mussarela, molho especial, alho, azeitona, pimentão, milho, cebola, ervilha, orégano, tomate, azeite, pepperoni, pimenta-do-reino e catupiri',
    img: '/img/pizzas/traditionalPizzas/calabresa.jpg',
    hasFixedPrice: false,
    price: 19
  },
  {
    id: 'l20z5jkm345',
    product: 'Pizza Mussarela',
    description:
      'Queijo mussarela, azeitona, molho de tomate, alho, cebola, azeite e orégano',
    img: '/img/pizzas/traditionalPizzas/mussarela.jpg',
    hasFixedPrice: false,
    price: 19
  },
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

export const traditionalPizzas: ProductCategory = {
  id: 'rfuojnrufjn893434893489th439bt34',
  category: 'Pizzas Tradicionais',
  items
}
