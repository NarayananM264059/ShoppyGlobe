// Selector to get all cart items from the state
export const selectCartItems = (state) => state.cart.items;

// Selector to calculate the total price of all items in the cart
export const selectCartTotal = (state) => {
    return state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
};
