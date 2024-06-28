import { createSlice, configureStore, createAction } from "@reduxjs/toolkit";

// reducer
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

// store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
console.log(`store onCreate : ${JSON.stringify(store.getState())}`);

// subribe
store.subscribe(() => {
  console.log(`store onCreate : ${JSON.stringify(store.getState())}`);
});

// dispact
store.dispatch(cartSlice.actions.addToCart({ id: 0, data: "halo" }));
