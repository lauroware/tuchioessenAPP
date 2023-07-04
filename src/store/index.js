import { applyMiddleware, combineReducers, createStore } from "redux";
import CategoryReducer from "./reducers/category.reducers";
import ProductReducer from "./reducers/products.reducers";
import thunk from "redux-thunk";
import CartReducer from "./reducers/cart.reducer";
import OrdersReducer from "./reducers/orders.reducer";
import AuthReducer from "./reducers/auth.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  products: ProductReducer,
  cart: CartReducer,
  orders: OrdersReducer,
  auth: AuthReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
