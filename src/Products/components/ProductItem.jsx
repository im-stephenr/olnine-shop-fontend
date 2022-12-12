import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
const ProductItem = (props) => {
  // Rating
  let star_rating = [];
  for (let i = 0; i < props.rating; i++) {
    star_rating.push(<StarIcon key={i} className="h-5 w-5 text-yellow-300 " />);
  }
  return (
    <div className="mb-6 mt-10 lg:mb-0">
      <div className="bg-white block rounded-lg shadow-sm hover:shadow-lg">
        <div className="relative overflow-hidden bg-no-repeat bg-cover">
          <img
            src={`https://picsum.photos/300?random=${props.id}`}
            className="w-full rounded-t-lg"
          />
          <a href="#!">
            <div className="absolute top-2 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
              <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-500 text-white rounded">
                ₱ {props.price}
              </span>
            </div>
          </a>
        </div>
        <div className="p-6">
          <h5 className="text-lg font-bold mb-2">{props.product_name}</h5>
          <p className="text-gray-500 mb-2">{props.description}</p>
          {props.rating && (
            <div className="flex justify-center my-2">
              {star_rating}
              <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-orange-600 text-white rounded ml-3">
                {props.rating}.0
              </span>
            </div>
          )}
          <button
            type="button"
            className="inline-block px-6 py-2 border-2 border-orange-600 text-orange-600 font-medium text-xs leading-tight uppercase rounded hover:bg-orange-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
