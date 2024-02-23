// import ShoppingIcon from '../../assets/shopping-bag.svg'

import { useEffect } from "react";
import { useCart } from "../../context/cart.context"

const CartIcon = () => {
    const { isCartOpen, cartItems, cartCount, setIsCartOpen } = useCart();

    return (
        <span className="cursor-pointer" onClick={() => setIsCartOpen(!isCartOpen)}>
            {cartCount}
        </span>
    )
}

export default CartIcon