import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/slices'
const store = configureStore({
    reducer: {
        user: userReducer, // Add more slices here if needed
    },
});

export default store;
