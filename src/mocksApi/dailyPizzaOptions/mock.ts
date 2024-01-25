import type { DailyPizzaOptionsList } from 'infra/services/pizzas/types'

export const dailyPizzaOptions: DailyPizzaOptionsList = [
  {
    id: 'fdg45jkm345',
    name: 'Calabresa',
    img: 'calabresa',
    ingredients: 'Mussarela, calabresa e cebola, orégano.',
    recommendationDay: true,
    points: 300
  },
  {
    id: 'l20z5jkm345',
    name: 'Mussarela',
    img: 'mussarela',
    ingredients: 'Queijo mussarela e orégano.',
    recommendationDay: false,
    points: 360
  },
  {
    id: 'fdg45jkmmwl4',
    name: 'Napolitana',
    img: 'napolitana',
    ingredients: 'Mussarela, tomate, orégano e parmesão ralado.',
    recommendationDay: false,
    points: 250
  },
  {
    id: 'fdg4lght345',
    name: 'Peperoni',
    img: 'peperoni',
    ingredients: 'Mussarela, orégano e pepperoni.',
    recommendationDay: false,
    points: 400
  }
]
