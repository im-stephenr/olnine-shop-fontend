import React, { Component, useEffect, useState } from "react";
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import { useFetchData } from "../hooks/useFetch";

const NavBar = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { fetchData } = useFetchData();
  const handleModal = (toggleValue) => {
    setShowModal(toggleValue);
  };

  // Cart Count
  useEffect(() => {
    const getCartData = async () => {
      try {
        const responseData = await fetchData(
          "http://localhost:3000/cart",
          "GET"
        );
        setCartCount(responseData.length);
      } catch (err) {
        console.log(err);
      }
    };
    getCartData();
  }, []);
  return (
    <>
      <div className="w-screen h-[80px] items-center pt-5 mb-10">
        <div className="flex flex-row w-[70%] mx-auto h-full">
          <div className="flex-auto w-10 h-full">
            <Link to="/">
              <img src="./src/assets/OLNINE.png" className="logo" alt="" />
            </Link>
          </div>
          <div className="flex-auto w-60 h-full">
            <div className="flex justify-center">
              <input
                type="search"
                className="form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid
                            border-gray-300
                            rounded-xl
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700
                            focus:bg-white
                            focus:border-blue-600 focus:outline-none
                            mt-4"
                id="exampleSearch"
                placeholder="Search Product"
              />
            </div>
          </div>
          <div className="flex-auto w-30">
            <div className="w-full flex place-content-center">
              <button
                type="button"
                className="bg-gray-100 hover:bg-gray-200 text-white p-2 rounded-full mt-5 mr-5"
                onClick={() => setShowModal(true)}
              >
                <UserIcon className="h-5 w-5 text-gray-500" />
              </button>
              <Link
                to="/cart"
                type="button"
                className="bg-gray-100 hover:bg-gray-200 text-white p-2 rounded-full mt-5 mr-5"
              >
                <ShoppingCartIcon className="h-5 w-5 text-gray-500 " />
                {cartCount > 0 && (
                  <span className="absolute justify-center px-2 py-1 text-xs font-bold bg-red-600 rounded-full top-6 ">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <Modal title="Login" toggleModal={handleModal} width="w-[40%]">
          <LoginForm />
        </Modal>
      ) : null}
    </>
  );
};

export default NavBar;
