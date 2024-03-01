import { Fragment, useMemo } from "react";
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

  const renderedCategories = useMemo(() => {
    if (isLoading) return <Spinner />;

    return Object.keys(categories).map((title) => (
      <Fragment key={title}>
        <h1 className="text-2xl mb-5 capitalize">
          <Link to={title}>{title}</Link>
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
          {categories[title].slice(0, 4).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </Fragment>
    ));
  }, [categories, isLoading]);

  return <>{renderedCategories}</>;
};

export default Categories;
