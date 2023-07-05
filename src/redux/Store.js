import rootReducer from './reducres/rootReducer';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const Store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
const persistor = persistStore(Store);
export {Store, persistor};
