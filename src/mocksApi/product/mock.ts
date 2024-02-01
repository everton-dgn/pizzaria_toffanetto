import type { ProductOptions } from 'infra/services/product/types'

import { flavor } from './flavor'
import { size } from './size'

export const product: ProductOptions = {
  id: 'sfglkn345908bnbuh2bedfp34',
  product: 'Pizza Calabresa',
  description:
    'Mussarela, molho especial, alho, azeitona, pimentão, milho, cebola, ervilha, orégano, tomate, azeite, pepperoni, pimenta-do-reino e catupiri.',
  img: '/img/pizzas/traditionalPizzas/calabresa.jpg',
  size,
  flavor
}
