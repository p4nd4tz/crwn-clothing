import { useSelector } from "react-redux";
import CheckoutItem from "../components/checkout-item.component";
import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from "../store/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="w-1/2 m-auto">
      {cartCount > 0 && (
        <div className=" flex justify-between text-lg mb-5 border-b-4 pb-10">
          <span>Product</span>
          <span>Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span></span>
        </div>
      )}
      <div className="items-center text-center">
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} item={item} />
        ))}
        <div className="text-lg absolute py-12">{`Total Price: $${cartTotal}`}</div>
      </div>
    </div>
  );
};

export default Checkout;
