import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './root-reducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';

const middlewares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean);
const composer = compose(applyMiddleware(...middlewares));

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composer);

export const persistor = persistStore(store);