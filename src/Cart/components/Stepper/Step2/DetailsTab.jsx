import React from "react";
import ShippingForm from "./ShippingForm";
import TotalCard from "../shared-ui/TotalCard";

const DetailsTab = (props) => {
  return (
    <>
      <div className="grid mt-5 md:grid-cols-5 sm:grid-cols-1 gap-x-4 sm:gap-x-4 h-[100] ">
        <div className="col-span-3">
          <ShippingForm />
        </div>
        <div className="col-span-2">
          <TotalCard />
        </div>
      </div>
    </>
  );
};

export default DetailsTab;
