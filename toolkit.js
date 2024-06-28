import { createReducer, configureStore, createAction } from "@reduxjs/toolkit";

// reducer
const cartReducerAction = createAction("ADD_TO_CART");
const cartReducer = createReducer([], (builder) => {
  builder.addCase(cartReducerAction, (state, action) => {
    state.push(action.payload);
  });
});

// store
const store = configureStore({ reducer: { cart: cartReducer } });
console.log(`store onCreate : ${JSON.stringify(store.getState())}`);

// subribe
store.subscribe(() => {
  console.log(`store onCreate : ${JSON.stringify(store.getState())}`);
});

// dispacth
const action1 = cartReducerAction({ id: 0, data: "halo" });
store.dispatch(action1);
