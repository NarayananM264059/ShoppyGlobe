import { createSlice } from "@reduxjs/toolkit";

// Retrieve cart items from local storage
const cartItems = JSON.parse(localStorage.getItem('items'));

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: cartItems || [] // initialize items with local storage data or empty array
    },
    reducers: {
        // Action to add item to cart
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (!existingItem) {
                state.items.push({ ...action.payload, quantity: action.payload.quantity });
            }
            localStorage.setItem('items', JSON.stringify(state.items)); // update local storage
        },
        // Action to remove item from cart
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem('items', JSON.stringify(state.items)); // update local storage
        },
        // Action to increase item quantity in cart
        increaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1; // increase quantity by 1
            }
            localStorage.setItem('items', JSON.stringify(state.items)); // update local storage
        },
        // Action to decrease item quantity in cart
        decreaseQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1; // decrease quantity by 1
            }
            localStorage.setItem('items', JSON.stringify(state.items)); // update local storage
        },
        // Action to clear the cart
        clearCart: (state) => {
            state.items = []; // reset items to empty array
            localStorage.setItem('items', JSON.stringify(state.items)); // update local storage
        }
    }
});

// Export actions
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
