import {
  configureObservablePersistence,
  persistObservable
} from '@legendapp/state/persist'
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage'

import { cart } from './slices'

configureObservablePersistence({
  pluginLocal: ObservablePersistLocalStorage
})

persistObservable(cart, {
  local: 'cart'
})
