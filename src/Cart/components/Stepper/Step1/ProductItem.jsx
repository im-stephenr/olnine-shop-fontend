import React from "react";
import {
  MinusIcon,
  PlusIcon,
  StarIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
const ProductItem = (props) => {
  return (
    <div className="flex justify-center w-full">
      <div className="relative flex w-full my-4 flex-col md:flex-row rounded-lg bg-white shadow-md h-full">
        <button
          type="button"
          className="absolute right-2 top-2 p-1 border-none text-black hover:text-white font-medium text-xs leading-tight uppercase rounded hover:bg-orange-500 hover:bg-opacity-4 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          <XMarkIcon className="w-4 h-4" />
        </button>
        <img
          className="w-30 object-cover rounded"
          src={`https://picsum.photos/150?random=${props.id}`}
          alt=""
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-xl font-medium">
            {props.product_name}
          </h5>
          <p className="text-gray-700 text-base mb-3">{props.description}</p>
          <p className="m-0 font-semibold">₱ {props.price}</p>
          <div className="w-full mt-2 flex justify-start">
            <button
              type="button"
              className="inline-block p-2 border-1 border-orange-500 text-orange-500 hover:text-white font-medium text-xs leading-tight uppercase rounded hover:bg-orange-500 hover:bg-opacity-4 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              <MinusIcon className="w-3 h-3" />
            </button>
            <p className="mx-3 mt-1 font-bold">1</p>
            <button
              type="button"
              className="inline-block p-2 border-1 border-orange-500 text-orange-500 hover:text-white font-medium text-xs leading-tight uppercase rounded hover:bg-orange-500 hover:bg-opacity-4 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              <PlusIcon className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
