import CheckoutItem from "../components/checkout-item.component";
import { useCart } from "../context/cart.context"

const Checkout = () => {
    const { cartItems, cartCount } = useCart();

    return (
        <div className="">
            {cartCount > 0 && <div className="w-1/2 m-auto flex justify-between text-xl mb-5">
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
            }
            <div className="">
                {cartItems.map(item => (<CheckoutItem key={item.id} item={item} />))}
            </div>
        </div>
    )
}

export default Checkout