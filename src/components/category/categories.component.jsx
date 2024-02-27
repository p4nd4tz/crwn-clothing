import { Fragment } from "react";
import ProductCard from "../products/product-card.component";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCategories,
  selectCategoriesIsLoading,
} from "../../store/category/category.selector";
import Spinner from "../spinner.component";

const Categories = () => {
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((title) => (
          <Fragment key={title}>
            <h1 className="text-2xl mb-5">
              <Link to={title}>{title}</Link>
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
              {categories[title].slice(0, 4).map((p) => (
                <ProductCard product={p} key={p.id} />
              ))}
            </div>
          </Fragment>
        ))
      )}
    </>
  );
};

export default Categories;
