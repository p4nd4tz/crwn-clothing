import { CartItem } from './cart.types';
import { CategoryItem } from '../category/category.types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartState = {
    readonly isCartOpen: boolean,
    readonly cartItems: CartItem[],
    readonly cartCount: number,
    readonly cartTotal: number,
}

export const CART_INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
    const existingCartItem = cartItems.find(
        (item) => item.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((item) =>
            item.id === productToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: CartItem[], productToReduce: CartItem): CartItem[] => {
    console.log(productToReduce);

    const existingCartItem = cartItems.find(
        (item) => item.id === productToReduce.id && item.quantity > 0
    );

    if (!existingCartItem) {
        return cartItems;
    }

    return cartItems.map((item) =>
        item.id === productToReduce.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
    );
};

const clearCartItems = (cartItems: CartItem[], productToRemove: CategoryItem): CartItem[] => {
    return cartItems.filter((item) => item.id !== productToRemove.id);
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: CART_INITIAL_STATE,
    reducers: {
        setIsCartOpen(state, action: PayloadAction<boolean>) {
            state.isCartOpen = action.payload;
        },

        addItemsToCart(state, action: PayloadAction<CategoryItem>) {
            const cartItems = state.cartItems;
            state.cartItems = addCartItem(cartItems, action.payload);
        },

        removeItemFromCart(state, action: PayloadAction<CartItem>) {
            state.cartItems = removeCartItem(state.cartItems, action.payload);
        },

        clearItemsFromCart(state, action: PayloadAction<CategoryItem>) {
            state.cartItems = clearCartItems(state.cartItems, action.payload);
        },
    },
});

export const {
    setIsCartOpen,
    addItemsToCart,
    removeItemFromCart,
    clearItemsFromCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;