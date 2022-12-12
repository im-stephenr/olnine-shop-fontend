import React from "react";

const Input = (props) => {
  if (props.type === "text") {
    return (
      <input
        type={props.type}
        className={`form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white 
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        focus:text-gray-700 
                        focus:bg-white 
                        focus:border-blue-600 
                        focus:outline-none ${props.classes}`}
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
      />
    );
  } else if (props.type === "textarea") {
    return (
      <textarea
        className={`form-control
                   block
                   w-full
                   px-3
                   py-1.5
                   text-base
                   font-normal
                   text-gray-700
                   border border-solid border-gray-300
                   rounded
                   m-0
                   focus:text-gray-700 
                   focus:bg-white 
                   focus:border-blue-600 
                   focus:outline-none ${props.classes}`}
        id={props.id}
        name={props.name}
        rows={props.rows}
        placeholder={props.placeholder}
      ></textarea>
    );
  }
};

export default Input;
