import {createStore, applyMiddleware} from 'redux';
import {allReducer} from '../reducers/index';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //  whitelist: []
};

//AsyncStorage.removeItem('persist:root')
const persistedReducer = persistReducer(persistConfig, allReducer);
const middleware = applyMiddleware(thunk, logger);
export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);

//console.log(store.getState())
