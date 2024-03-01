import { useNavigate } from "react-router-dom";
import Button from "../button.component";
import CartItem from "./cart-item.component";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropDown = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const handleCheckout = () => navigate("/checkout");

  return (
    <div className="border-2 border-black w-80 p-6 absolute right-24 z-10 mt-8 bg-white">
      <div className="max-h-80 overflow-auto mb-3">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button className={`w-full py-4`} onClick={handleCheckout}>
        Go To Checkout
      </Button>
    </div>
  );
};

export default CartDropDown;
