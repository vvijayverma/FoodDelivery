// import storage from "redux-persist/lib/storage";
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from '../_components/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import authReducer from './authSlice';
import updateReducer from './updateSlice';
import { cartReducer } from './cartSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'cart'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  update: updateReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
