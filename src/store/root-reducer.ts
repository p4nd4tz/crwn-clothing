import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./category/category.reducer";
import { cartReducer } from "./cart/cart.reducer";

export default combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
});