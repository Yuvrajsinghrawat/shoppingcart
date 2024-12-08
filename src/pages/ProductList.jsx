import React, { useContext } from "react";
import shoppingCartContext from "../context/ShoppingCartContext";

const ProductList = () => {
  const { listofProduct, loading } = useContext(shoppingCartContext);
  console.log("list",listofProduct)
  return <div>ProductList</div>;
};

export default ProductList;
