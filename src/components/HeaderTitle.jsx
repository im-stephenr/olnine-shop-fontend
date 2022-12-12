import React from "react";

const HeaderTitle = (props) => {
  return (
    <h6 className="text-4xl leading-tight text-center border-b-2 border-orange-500 w-[50%] m-auto pb-8">
      {props.title}
    </h6>
  );
};

export default HeaderTitle;
