import {
  createSlice
} from "@reduxjs/toolkit";


const initialState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      state.changed = true;
      state.totalQuantity++;
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.itemId === newItem.id);
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        })
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
    },
    removeItemFromCart(state, action) {
      state.changed = true;
      state.totalQuantity--;
      const id = action.payload;
      const existingItem = state.items.find(item => item.itemId === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.itemId !== id)
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    replaceItemsCart(state,action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity
    }
  }
})

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;