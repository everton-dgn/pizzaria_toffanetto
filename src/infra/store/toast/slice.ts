import { observable } from '@legendapp/state'

import { type Toast } from './types'

const toast = observable<Toast>({
  toastList: []
})

export default toast
