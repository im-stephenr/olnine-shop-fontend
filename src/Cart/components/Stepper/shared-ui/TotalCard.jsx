import React from "react";
import Card from "../../../../components/Card";

const TotalCard = (props) => {
  return (
    <>
      <div className="col-span-2 w-full">
        <Card>
          <div className="grid grid-cols-2 p-5">
            <div className="text-left">
              <p className="font-light my-2 text-gray-400 ">Subtotal:</p>
              <p className="font-light my-2 text-gray-400 ">Shipping:</p>
              <p className="font-light my-2 text-gray-400 ">Tax:</p>
              <p className="font-light my-2 text-gray-400 ">Discount:</p>
            </div>
            <div className="text-right font-bold">
              <p className="my-2">₱</p>
              <p className="my-2">₱</p>
              <p className="my-2">₱</p>
              <p className="my-2">₱</p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default TotalCard;
