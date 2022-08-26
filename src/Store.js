import { createContext, useReducer } from "react";
const Store = createContext();

//======================== Cart Items Add start here =======================
const cartInitialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};

function cartReducer(state, action) {
  switch (action.type) {
    case "CART_PRODUCT_ADD": {
      const newItem = action.payload;

      const existingItem = state.cart.cartItems.find(
        (item) => item.id === newItem.id
      );

      const cartItems = existingItem
        ? state.cart.cartItems.map((item) =>
            item.id === existingItem.id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_PRODUCT_REMOVE": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CLEAR_CART": {
      localStorage.removeItem("cartItems");
      return { ...state, cart: { ...state.cart, cartItems: [] } };
    }
    default:
      return state;
  }
}

//======================== Cart Items Add end here =======================
//======================== Provider start here =======================

function StoreProvider(props) {
  let [cartstate, cartdispatch] = useReducer(cartReducer, cartInitialState);

  const value = {
    cartstate,
    cartdispatch,
  };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

//======================== Provider end here =======================
export { Store, StoreProvider };
