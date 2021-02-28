import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const additems = (item) => ({
  type: CartActionTypes.ADD_ITEMS,
  payload: item,
});

export const removeitems = (item) => ({
  type: CartActionTypes.REMOVE_ITEMS,
  payload: item,
});

export const reduceItemQuantity = (item) => ({
  type: CartActionTypes.REDUCE_ITEM_QUANTITY,
  payload: item,
});
