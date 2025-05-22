import { baseApi } from "./api/baseApi";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Features/Auth/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "./Features/Orders/cartSlice";
const persistConfig = {
  key: "Auth",
  storage,
};
const persistCartConfig = {
  key: "Cart",
  storage,
};
const persistedAuthReducer = persistReducer(persistConfig, authSlice);
const persistedCartReducer = persistReducer(persistCartConfig, cartSlice);
export const Store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer,
    cart: persistedCartReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(baseApi.middleware);
  },
});
export const persistor = persistStore(Store);
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
