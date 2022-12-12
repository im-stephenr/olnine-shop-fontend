import React from "react";
const Card = (props) => {
  return (
    <div
      className={`${props.classes} block rounded-lg shadow-md bg-white text-center`}
    >
      {props.children}
    </div>
  );
};

export default Card;
