import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";
import searchReducer from "./reducers/searchReducer";

// Configure the Redux store
const store = configureStore({
    reducer: {
        cart: cartReducer,      // Reducer for managing cart state
        search: searchReducer,   // Reducer for managing search state
    },
});

export default store;
