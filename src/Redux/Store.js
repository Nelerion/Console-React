import { configureStore } from '@reduxjs/toolkit';
import { printReducer } from './Slices/printSlice';

export const store = configureStore({

    reducer: {
        printState: printReducer
    }
});

window.store = store;
export default store;