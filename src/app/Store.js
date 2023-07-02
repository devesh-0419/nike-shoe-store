import {configureStore} from '@reduxjs/toolkit';
import CardSlice from './CartSlice';
import CartSlice from './CartSlice';

const Store = configureStore({
    reducer:{
        cart: CartSlice,
    }
});

export default Store;

