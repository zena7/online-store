import { configureStore } from '@reduxjs/toolkit';
import { productListApi } from '@/features/product-list';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['basket'],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productListApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
