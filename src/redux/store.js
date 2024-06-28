import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/slice";

const store = configureStore({ reducer: { cart: cartReducer } });
console.log(`store onCreate : ${JSON.stringify(store.getState())}`);

// store.subscribe(() => {
//   console.log(`store add : ${JSON.stringify(store.getState())}`);
// });

export default store;
