import React, { useEffect, useState } from "react";
import { useParams, useNavigate  } from "react-router-dom";

const SingleProduct = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  useEffect(() => {
    const getData = async () => {
      const url = `/api/products/${params._id}`;
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };
    getData();
  }, [params._id]);

  return (
    <>
      <div className="w-[90%] mx-auto mt-10 ">
        <button className="mb-8 font-bold" onClick={goBack}>Back</button>
        <div className="flex">
          <div
            style={{
              backgroundColor: "",
              width: "300px",
              height: "300px",
              overflow: "hidden",
            }}
            className="bg-gray-200 p-3"
          >
            <img
              style={{
                mixBlendMode: "multiply",
                width: "100%",
                height: "auto",
              }}
              className="h-[16rem] mask mask-circle "
              src={products.image}
              alt="pizza"
            />
          </div>
          <div className="ml-16">
            <h1 className="text-xl font-bold">{products.name}</h1>
            <div className="text-md">{products.size}</div>
            <div className="font-bold mt-2">₹{products.price}</div>
            <button className="bg-yellow-500 py-1 mt-4 px-8 rounded-full font-bold">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
