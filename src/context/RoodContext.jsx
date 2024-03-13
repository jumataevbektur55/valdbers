import React, { useEffect, useState } from "react";
import { ProductContext } from ".";

const RootContext = ({ children }) => {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productAll, setProductAll] = useState([]);
  const [basket, setBasket] = useState([]);

  const getProduct = () => {
    let res = JSON.parse(localStorage.getItem("product")) || [];
    setProductAll(res);
  };

  const getBasket = () => {
    let res = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(res);
  };

  useEffect(() => {
    getProduct();
    getBasket();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productUrl,
        productName,
        productPrice,
        productAll,
        basket,
        setProductUrl,
        setProductName,
        setProductPrice,
        setProductAll,
        setBasket,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default RootContext;
