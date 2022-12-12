import React, { useEffect, useState } from "react";
import { useFetchData } from "../../../../hooks/useFetch";
import Loading from "../../../../components/Loading";
import ProductItem from "./ProductItem";
import CartForm from "./CartForm";

const CartDetails = (props) => {
  const { fetchData, isLoading } = useFetchData();
  const [cartDetails, setCartDetails] = useState(null);
  useEffect(() => {
    const getCartDetails = async () => {
      try {
        const responseData = await fetchData(
          "http://localhost:3000/cart",
          "GET"
        );
        setCartDetails(responseData);
      } catch (err) {
        console.log(err);
      }
    };
    getCartDetails();
  }, []);
  return (
    <>
      <div className="grid md:grid-cols-5 sm:grid-cols-1 gap-x-4 sm:gap-x-0 ">
        <div className="col-span-3 p-3">
          {isLoading && <Loading />}
          {cartDetails &&
            cartDetails.map((product) => {
              return (
                <ProductItem
                  product_name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                  key={product.id}
                  id={product.id}
                />
              );
            })}
        </div>
        <div className="col-span-2">
          <CartForm stepperToggle={props.stepperToggle} />
        </div>
      </div>
    </>
  );
};

export default CartDetails;
