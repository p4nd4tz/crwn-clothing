import { useCart } from "../../context/cart.context";
import Button from "../button.component";

const ProductCard = ({ product }) => {
    const { id, name, price, imageUrl } = product;
    const { addItemsToCart } = useCart();

    const addProductToCart = () => addItemsToCart(product);

    return (
        <div className={`mb-10 relative hover:opacity-80 bg-slate-50 p-4 pb-6`}>
            <img className="w-full h-96" src={imageUrl}></img>
            <div className="flex justify-between text-2xl">
                <p className="mt-3">{name}</p>
                <p className="mt-3">{price}</p>
            </div>
            <Button
                backgroundColor="bg-white"
                textColor="text-black"
                className="absolute py-6 px-10 m-auto top-1/2 left-24 hover:bg-black hover:text-white opacity-80"
                onClick={addProductToCart}
            >
                Add to cart
            </Button>
        </div>
    )
}

export default ProductCard;