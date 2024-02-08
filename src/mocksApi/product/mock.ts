import { additional } from './additional'
import { edgeFlavor } from './edgeFlavor'
import { flavor } from './flavor'
import { orderComment } from './orderComment'
import { size } from './size'

export const product: ProductOptions = {
  id: 'sfglkn345908bnbuh2bedfp34',
  product: 'Pizza Calabresa',
  description:
    'Mussarela, molho especial, alho, azeitona, pimentão, milho, cebola, ervilha, orégano, tomate, azeite, pepperoni, pimenta-do-reino e catupiri.',
  img: '/img/pizzas/traditionalPizzas/calabresa.jpg',
  size,
  flavor,
  edgeFlavor,
  additional,
  orderComment
}
