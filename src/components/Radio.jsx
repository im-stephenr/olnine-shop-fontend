import React from "react";

const Radio = (props) => {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name={props.name}
          id={props.id}
          value={props.value}
        />
        <label
          className="form-check-label inline-block text-gray-800"
          htmlFor={props.id}
        >
          {props.label}
        </label>
      </div>
    </>
  );
};

export default Radio;
