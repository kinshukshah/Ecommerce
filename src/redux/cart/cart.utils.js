export const addItemsToCart = (cartItems, cartItemsToAdd) => {
  const existingItem = cartItems.find((item) => item.id === cartItemsToAdd.id);
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === cartItemsToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : cartItems
    );
  }
  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};