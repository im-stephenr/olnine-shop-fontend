import React from "react";
import TotalCard from "../shared-ui/TotalCard";
import PaymentMethodForm from "./PaymentMethodForm";

const PaymentTab = () => {
  return (
    <>
      <div className="grid mt-5 md:grid-cols-5 sm:grid-cols-1 gap-x-4 sm:gap-x-4 h-[100] ">
        <div className="col-span-3">
          <PaymentMethodForm />
        </div>
        <div className="col-span-2">
          <TotalCard />
        </div>
      </div>
    </>
  );
};

export default PaymentTab;
