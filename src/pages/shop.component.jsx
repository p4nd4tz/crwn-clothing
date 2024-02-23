import ProductCard from "../components/products/product-card.component";
import { useProducts } from "../context/products.context"

const Shop = () => {
    const { products } = useProducts();

    return (
        <div className="grid grid-cols-4 gap-5">
            {
                products.map((p) => (
                    <ProductCard product={p} key={p.id} />
                ))
            }
        </div>
    )
}

export default Shop;