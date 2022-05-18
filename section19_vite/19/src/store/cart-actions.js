import {
  uiActions
} from "./ui-slice";
import {
  cartActions
} from "./cart-slice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-3bdcd-default-rtdb.europe-west1.firebasedatabase.app/cart.json", {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart failed");
      }
    };

    try {
      await sendRequest()
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart failed!",
        })
      );
    }
  }
}

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch('https://react-http-3bdcd-default-rtdb.europe-west1.firebasedatabase.app/cart.json')

      if (!response.ok) {
        throw new Error('fetching data error!')
      }

      const responseData = await response.json();
      return responseData;
    }

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceItemsCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
      }))
    } catch {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart failed!",
        })
      );
    }

  }
}