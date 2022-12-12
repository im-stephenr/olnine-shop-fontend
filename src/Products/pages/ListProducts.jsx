import React, { useEffect, useState } from "react";
import { useFetchData } from "../../hooks/useFetch";
import ProductItem from "../components/ProductItem";
import Loading from "../../components/Loading";
const Products = (props) => {
  const [products, setProducts] = useState(null);
  const { fetchData, isLoading } = useFetchData();
  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchData("http://localhost:3000/products", "GET");
        setProducts(data);
      } catch (err) {
        setProducts(null);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      {isLoading && <Loading />}

      <div className="grid md:grid-cols-4 gap-x-6 lg:gap-x-12 text-center">
        {products &&
          products.map((product) => {
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
      <div className="flex w-full">
        <a
          href="#"
          className="m-auto my-20 px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          View More
        </a>
      </div>
    </>
  );
};

export default Products;
