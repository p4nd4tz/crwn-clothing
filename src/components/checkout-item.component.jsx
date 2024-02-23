import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft, faX } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/cart.context";

const CheckoutItem = ({ item }) => {
    const { imageUrl, name, quantity, price } = item;
    const { cartItems, addItemsToCart, removeItemsFromCart, reduceItemFromCart } = useCart();

    const handleLeftButtonClick = () => reduceItemFromCart(item);

    const handleRightButtonClick = () => addItemsToCart(item);

    const handleCrossButtonClick = () => removeItemsFromCart(item);

    return (
        <div className="grid grid-cols-5 border-t-4 w-1/2 gap-16 py-12 m-auto items-center text-center">
            <img className="w-56 h-56" src={imageUrl}></img>
            <div className="flex items-center justify-between text-xl col-span-4">
                <h1 className="text-xl">{name}</h1>
                <span className="flex gap-3 items-center align-middle justify-center text-center">
                    <FontAwesomeIcon icon={faAngleLeft} onClick={handleLeftButtonClick} className="cursor-pointer" />
                    {quantity}
                    <FontAwesomeIcon icon={faAngleRight} onClick={handleRightButtonClick} className="cursor-pointer" />
                </span>
                <span className="text-xl">{price}</span>
                <FontAwesomeIcon icon={faX} onClick={handleCrossButtonClick} className="cursor-pointer" />
            </div>
        </div>
    )
}

export default CheckoutItem
