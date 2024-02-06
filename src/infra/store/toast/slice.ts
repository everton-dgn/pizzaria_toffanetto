import { observable } from '@legendapp/state'

import { type Toast } from './types'

export const toast = observable<Toast>({
  toastList: []
})
