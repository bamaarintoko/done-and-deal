// const { default: logger } = require("redux-logger")
import logger from 'redux-logger'
import { Middleware } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import doneanddeal from './slice/doneanddeal'
import sliceTask from './slice/sliceTask'
import sliceProducts from './slice/sliceProducts'
import sliceCart from './slice/sliceCart'
import sliceAuth from './slice/sliceAuth'
const middlewares: Middleware[] = [];

if (process.env.NODE_ENV === `development`) {
    // const { logger } = require(`redux-logger`)
    middlewares.push(logger as Middleware)
}

const appReducers = combineReducers({
    doneanddeal,
    sliceTask,
    sliceProducts,
    sliceCart,
    sliceAuth

})

const persistConfig = {
    key: 'doneanddeal',
    storage: storage,
    whitelist: [
        'sliceTask',
        'sliceCart',
        'sliceAuth'
    ]
}

const persistedReducer = persistReducer(persistConfig, appReducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST'],
        }
    }).concat(
        middlewares)
})
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;