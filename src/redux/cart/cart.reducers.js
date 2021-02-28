import { CartActionTypes } from "./cart.types";
import {
  addItemsToCart,
  removeItemsFromCart,
  reduceItemQuantity,
} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEMS:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEMS:
      return {
        ...state,
        cartItems: removeItemsFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REDUCE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: reduceItemQuantity(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
