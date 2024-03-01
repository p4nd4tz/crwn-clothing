import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import ProductCard from "../products/product-card.component";
import { useSelector } from "react-redux";
import Spinner from "../spinner.component";
import {
  selectCategories,
  selectCategoriesIsLoading,
} from "../../store/category/category.selector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategories);
  const categoriesIsLoading = useSelector(selectCategoriesIsLoading);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Resetting the search term when category changes
    setSearchTerm("");
  }, [category]);

  const filteredProducts = categories[category]?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchIcon = useMemo(
    () => (
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute right-64 top-3 translate-x-2 translate-y-1"
      />
    ),
    []
  );

  return (
    <>
      <div className="flex align-middle justify-between items-center mb-5">
        <h1 className="text-2xl uppercase font-medium">{category}</h1>
        <div className="relative">
          <input
            type="text"
            name="search-products"
            className="border rounded-lg p-2 pl-10 text-gray-500 border-gray-500 placeholder-gray-500"
            placeholder={`search ${category.toLowerCase()}...`}
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchIcon}
        </div>
      </div>

      {categoriesIsLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
          {filteredProducts?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Category;
