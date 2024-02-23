import { createContext, useContext, useEffect, useState } from "react";

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

const reduceCartItem = (cartItems, productToReduce) => {
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

const removeCartItem = (cartItems, productToRemove) => {
    return cartItems.filter(item => item.id !== productToRemove.id);
}

export const CartContext = createContext({
    cartItems: [],
    isCartOpen: false,
    cartCount: 0,
    setIsCartOpen: () => { },
    addItemsToCart: () => { },
    removeItemsFromCart: () => { },
});

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const reduceItemFromCart = (productToReduce) => {
        setCartItems(reduceCartItem(cartItems, productToReduce));
    }

    const removeItemsFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItems) => total + cartItems.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    const value = { cartItems, isCartOpen, cartCount, setIsCartOpen, addItemsToCart, removeItemsFromCart, reduceItemFromCart };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext);
}