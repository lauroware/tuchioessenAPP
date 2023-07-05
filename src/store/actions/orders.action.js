import { URL_API } from "../../constants/database";

export const GET_ORDERS = "GET_ORDERS";
export const REMOVE_ORDER = "REMOVE_ORDER";

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/ordenes.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
      const orders = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));
      console.log(orders);
      dispatch({ type: GET_ORDERS, payload: orders });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeOrder = (orderId) => {
  return async (dispatch) => {
    try {
      await fetch(`${URL_API}/ordenes/${orderId}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch({ type: REMOVE_ORDER, payload: orderId });
    } catch (error) {
      console.log(error);
    }
  };
};
