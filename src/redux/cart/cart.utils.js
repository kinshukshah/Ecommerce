export const addItemsToCart = (cartItems, cartItemsToAdd) => {
  const existingItem = cartItems.find((item) => item.id === cartItemsToAdd.id);
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === cartItemsToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export const removeItemsFromCart = (cartItems, id) => {
  debugger;
  return cartItems.filter((item) => {
    if (item.id === id) {
      return false;
    } else {
      return true;
    }
  });
};

export const reduceItemQuantity = (cartItems, cartItemToRemove) => {
  if (cartItemToRemove.quantity === 1) {
    return removeItemsFromCart(cartItems, cartItemToRemove.id);
  } else {
    return cartItems.map((item) =>
      item.id === cartItemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};
