import { legacy_createStore as createStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart';

const store = createStore(cartReducer);

export default store;
