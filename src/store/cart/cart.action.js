import { createAction } from "../../utils/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (boolean) =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const setCartItems = (cartItems) =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);

export const addItemsToCart = (cartItems, productToAdd) => setCartItems(addCartItem(cartItems, productToAdd));

export const removeItemFromCart = (cartItems, productToRemove) => setCartItems(removeCartItem(cartItems, productToRemove));

export const clearItemsFromCart = (cartItems, productToClear) => setCartItems(clearCartItems(cartItems, productToClear));

// Helper Functions
const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map(item =>
            item.id === productToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, productToReduce) => {
    const existingCartItem = cartItems.find(item => item.id === productToReduce.id && item.quantity > 0);

    if (!existingCartItem) {
        return cartItems;
    }

    return cartItems.map(item =>
        item.id === productToReduce.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
    );
}

const clearCartItems = (cartItems, productToRemove) => {
    return cartItems.filter(item => item.id !== productToRemove.id);
}