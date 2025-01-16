import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url = "/api/products";
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };
    getData();
  }, []);

  return (
    <>
      <div className="w-[90%] mx-auto pb-14 ">
        <h1 className="text-lg font-bold my-8">Products</h1>
        <div className="grid grid-cols-5 my-8 gap-20">
          {products.map((product,index) => {
            return <Product product={product} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
