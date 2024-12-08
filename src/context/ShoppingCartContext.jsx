import { createContext, useEffect, useState } from "react";

export const shoppingCartContext = createContext(null);

const ShoppingCartProvider = ({ child }) => {
  const [listofProduct, setListofProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const apiResponse = await fetch("https://dummyjson.com/products");
    const response = await apiResponse.json();
    console.log(response);

    if (response && response.products) {
      setListofProduct(response.products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <shoppingCartContext.Provider value={{ listofProduct, loading }}>
      {child}
    </shoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
