import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleClick = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <span className="cursor-pointer" onClick={() => handleClick()}>
      {cartCount}
    </span>
  );
};

export default CartIcon;