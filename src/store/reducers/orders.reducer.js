import { GET_ORDERS } from "../actions/orders.action";
import { REMOVE_ORDER } from "../actions/orders.action";

const initial_state = {
  list: [],
};

const OrdersReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return { ...state, list: action.payload };
    case REMOVE_ORDER:
      return {
        ...state,
        list: state.list.filter((order) => order.id !== action.payload),
      };
    default:
      return state;
  }
};

export default OrdersReducer;
