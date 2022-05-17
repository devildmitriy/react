import {
  createSlice,
  configureStore
} from "@reduxjs/toolkit"
import counterReducer  from "./counter";
import authReducer  from "./auth";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
});


/* const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
          showCounter: state.showCounter,
      };
    case "increase": {
      return {
        counter: state.counter + action.value,
        showCounter: state.showCounter,
      };
    }
    case "decrement":
      return {
        counter: state.counter - 1,
          showCounter: state.showCounter,
      };

    case "toogle": {
      return {
        showCounter: !state.showCounter,
        counter: state.counter,
      };
    }

    default:
      return state;
  }
};
const store = createStore(counterReducer); */

export default store;