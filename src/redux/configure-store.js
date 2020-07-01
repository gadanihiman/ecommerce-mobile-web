import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { composeWithDevTools } from "redux-devtools-extension"
import immutableTransform from "redux-persist-transform-immutable"

import rootReducer from "./root-reducer"
import rootSaga from "./root-saga"

const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = (middleware) => {
  const middlewares = applyMiddleware(...middleware)
  if (process.env.NODE_ENV === "development") {
    return composeWithDevTools(middlewares)
  }
  return compose(middlewares)
}

function configureStore(initialState = {}) {
  const persistConfig = {
    transforms: [immutableTransform()],
    key: "root",
    // whitelist: ['home'],
    storage,
  }

  const store = createStore(
    persistReducer(persistConfig, rootReducer),
    initialState,
    bindMiddleware([sagaMiddleware])
  )
  const persistor = persistStore(store)

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  store.runSagaTask()
  return { store, persistor }
}

export default configureStore
