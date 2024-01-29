import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import shopReducer from '../features/shop/shopSlice'
import { shopApi } from "./services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "../features/cart/cartSlice";
import { authApi } from "./services/auth";
import authReducer from "../features/auth/authSlice"


export const store = configureStore({
    reducer: {
      counter: counterReducer,
      shop: shopReducer,
      cart: cartReducer,
      auth: authReducer,
      [shopApi.reducerPath]: shopApi.reducer,
      [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware,authApi.middleware),
  })

  setupListeners(store.dispatch)