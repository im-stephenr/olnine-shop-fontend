import React from "react";

const Button = (props) => {
  let btn_class;
  if (props.inverted) {
    btn_class =
      "border-2 border-orange-600 text-orange-600 font-medium hover:bg-black hover:bg-opacity-5 focus:outline-none";
  } else {
    btn_class =
      "inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg";
  }
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${props.classes} block m-auto mt-3 px-6 py-2  text-xs leading-tight uppercase rounded ${btn_class}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
