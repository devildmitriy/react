import {
  createSlice
} from "@reduxjs/toolkit";

const initialState = {
  cartIsVisible: false,
  notification: null
}

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    toogleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      }
    }
  }
})

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;