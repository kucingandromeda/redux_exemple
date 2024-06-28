import { createStore } from "redux";

// reducer
const cartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};

// store
const store = createStore(cartReducer);
console.log(`store onCreate : ${JSON.stringify(store.getState())}`);

// subscribe
store.subscribe(() => {
  console.log(`store onCreate : ${JSON.stringify(store.getState())}`);
});

//dispatch
const action1 = { type: "ADD_TO_CART", payload: { id: 0, data: "halo" } };
const action2 = { type: "ADD_TO_CART", payload: { id: 1, data: "YZM" } };
store.dispatch(action1);
store.dispatch(action2);
