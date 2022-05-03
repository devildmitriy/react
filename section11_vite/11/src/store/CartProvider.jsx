import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingcartItem = state.items[existingCartItemIndex];

    let updateItems;

    if (existingcartItem) {
      const updateItem = {
        ...existingcartItem,
        amount: existingcartItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existingCartItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }

    return {
      items: updateItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    
    let updateItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    let existingItem = state.items[updateItemIndex];    
    let updateItems;

    if (existingItem.amount > 1) {
      let updateItem = {...existingItem,amount: existingItem.amount - 1};
      updateItems = [...state.items];
      updateItems[updateItemIndex] = updateItem;
    } else {
      updateItems = state.items.filter((item) => item.id !== action.id);
    }
    
    const updatedTotalAmount = updateItems.reduce(
      (summ, current) => summ + current.amount * current.price,
      0
    );
    return {
      items: updateItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItem = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };
  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
