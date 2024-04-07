import { configureStore } from "@reduxjs/toolkit";

// eslint-disable-next-line no-unused-vars
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice
  },
});
export default store;
