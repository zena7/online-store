import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { basketSlice } from '@/features/basket/basket-slice';
import { productListApi } from '@/features/product-list/service';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const rootReducer = combineReducers({
  basket: basketSlice.reducer,
  [productListApi.reducerPath]: productListApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['basket'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productListApi.middleware),
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
