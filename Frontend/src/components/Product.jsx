import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { product } = props;
  // console.log(product._id.$oid);
  

  return (
    <Link to={`/products/${product._id.$oid}`}>
      <div className="card">
        <div className="bg-gray-200" style={{
              height:"250px",
              width:"250px",
              overflow: "hidden",
            }}>
          <img  style={{
                mixBlendMode: "multiply",
                width: "100%",
                height: "auto",
              }} src={product.image} alt="pizza" />
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold py-2">{product.name}</h2>
          <span className="bg-gray-200 text-sm py-1 px-4 rounded-full">
            {product.size}
          </span>
          <div className="flex items-center justify-between mt-3">
            <span>₹ {product.price}</span>
            <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold hover:bg-yellow-400">
              ADD
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
