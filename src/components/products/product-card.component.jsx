import { useDispatch, useSelector } from "react-redux";
import Button from "../button.component";
import { addItemsToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    const dispatch = useDispatch();
    
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => dispatch(addItemsToCart(cartItems, product));

    return (
        <div className={`mb-10 relative hover:opacity-80 bg-slate-50 p-4 pb-6`}>
            <img className="w-full h-96" src={imageUrl} alt=""></img>
            <div className="flex justify-between text-xl">
                <p className="mt-3">{name}</p>
                <p className="mt-3">{price}</p>
            </div>
            <Button
                backgroundColor="bg-white"
                textColor="text-black"
                className="absolute py-6 px-10 m-auto top-1/2 left-20 hover:bg-black hover:text-white opacity-80"
                onClick={addProductToCart}
            >
                Add to cart
            </Button>
        </div>
    )
}

export default ProductCard;