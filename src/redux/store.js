import { createStore } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import AsyncStorage from "@react-native-async-storage/async-storage"

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"
import rootReducer from "./reducers"

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
}

const pReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(pReducer)
export const persistor = persistStore(store)
