import { createContext, useContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';
import SHOP_DATA from '../shop-data';

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}


export const useProducts = () => {
    return useContext(ProductsContext);
}