import { drinks } from './drinks'
import { promotionsOfTheDay } from './promotionsOfTheDay'
import { sweetPizzas } from './sweetPizzas'
import { traditionalPizzas } from './traditionalPizzas'

export const availableProducts: AvailableProducts = [
  promotionsOfTheDay,
  traditionalPizzas,
  sweetPizzas,
  drinks
]
