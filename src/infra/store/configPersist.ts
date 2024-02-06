import { configureObservablePersistence } from '@legendapp/state/persist'
import { ObservablePersistIndexedDB } from '@legendapp/state/persist-plugins/indexeddb'

configureObservablePersistence({
  pluginLocal: ObservablePersistIndexedDB
})
