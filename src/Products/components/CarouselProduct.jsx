import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { useFetchData } from "../../hooks/useFetch";
import ProductItem from "./ProductItem";
const CarouselProduct = () => {
  const { fetchData, isLoading } = useFetchData();
  const [products, setProducts] = useState(null);

  // fetch data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseData = await fetchData(
          "http://localhost:3000/products",
          "GET"
        );
        setProducts(responseData);
        console.log(responseData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

  // Carousel next/prev buttons
  let defaultTransform = 0;
  function goNext() {
    defaultTransform = defaultTransform - 398;
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7)
      defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
  }
  function goPrev() {
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
  }

  return (
    <>
      {isLoading && <Loading />}
      <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
        <div className="w-full relative flex items-center justify-center">
          <button
            aria-label="slide backward"
            className="absolute z-30 left-0 ml-10 focus:outline-none cursor-pointer"
            id="prev"
            onClick={goPrev}
          >
            <svg
              className="dark:text-orange-500"
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
            <div
              id="slider"
              className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
            >
              {products &&
                products
                  .filter((product) => product.rating === 5)
                  .map((product) => {
                    return (
                      <div
                        key={product.id}
                        className="flex flex-shrink-0 text-center w-full sm:w-auto"
                      >
                        <ProductItem
                          product_name={product.name}
                          description={product.description}
                          price={product.price}
                          image={product.image}
                          rating={product.rating}
                          id={product.id}
                          key={product.id}
                        />
                      </div>
                    );
                  })}
            </div>
          </div>
          <button
            aria-label="slide forward"
            className="absolute z-30 right-0 mr-10 focus:outline-none  cursor-pointer"
            id="next"
            onClick={goNext}
          >
            <svg
              className="dark:text-orange-500"
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default CarouselProduct;
