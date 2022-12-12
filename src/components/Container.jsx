import React from "react";

const Container = (props) => {
  return (
    <div className={`container w-[80%] m-auto p-10 ${props.classes}`}>
      {props.children}
    </div>
  );
};

export default Container;
