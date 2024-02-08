import { observable } from '@legendapp/state'

import type { Cart } from './types'

export const cart = observable<Cart>({
  items: [],
  total: 0
})
