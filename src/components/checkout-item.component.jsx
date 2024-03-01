import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemsToCart,
  removeItemFromCart,
  clearItemsFromCart,
} from "../store/cart/cart.reducer";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price } = item;

  const dispatch = useDispatch();

  const handleLeftButtonClick = () => dispatch(removeItemFromCart(item));

  const handleRightButtonClick = () => dispatch(addItemsToCart(item));

  const handleCrossButtonClick = () => dispatch(clearItemsFromCart(item));

  return (
    <div className="grid grid-cols-5 border-b-4 gap-16 py-10">
      <img className="" src={imageUrl} alt="" />
      <div className="flex items-center justify-between text-start text-lg w-full col-span-4">
        <h1 className="text-lg">{name}</h1>
        <span className="flex gap-2 items-center align-middle justify-center text-center">
          <FontAwesomeIcon
            icon={faAngleLeft}
            onClick={handleLeftButtonClick}
            className="cursor-pointer"
          />
          {quantity}
          <FontAwesomeIcon
            icon={faAngleRight}
            onClick={handleRightButtonClick}
            className="cursor-pointer"
          />
        </span>
        <span className="text-lg">{price}</span>
        <FontAwesomeIcon
          icon={faX}
          onClick={handleCrossButtonClick}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CheckoutItem;
