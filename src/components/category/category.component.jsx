import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../products/product-card.component";
import { useSelector } from "react-redux";
import Spinner from "../spinner.component";
import {
  selectCategories,
  selectCategoriesIsLoading,
} from "../../store/category/category.selector";

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategories);
  const categoriesIsLoading = useSelector(selectCategoriesIsLoading);
  console.log(categoriesIsLoading);
  const [products, setProducts] = useState(categories[categories]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <>
      <h1 className="text-2xl mb-5 uppercase text-center font-medium">
        {category}
      </h1>

      {categoriesIsLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
          {products?.map((p) => (
            <ProductCard product={p} key={p.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Category;
