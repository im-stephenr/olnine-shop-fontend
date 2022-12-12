import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import CartTab from "../components/Stepper/Step1/CartTab";
import DetailsTab from "../components/Stepper/Step2/DetailsTab";
import PaymentTab from "../components/Stepper/Step3/PaymentTab";

const stepper_list = [
  {
    step_number: 1,
    title: "Cart",
  },
  {
    step_number: 2,
    title: "Details",
  },
  {
    step_number: 3,
    title: "Payment",
  },
];

const ShoppingCart = () => {
  const [stepperValue, setStepperValue] = useState(1);
  const handleStepperToggle = (step) => {
    setStepperValue(step);
  };

  return (
    <>
      <Container classes="h-[70%]">
        <div className="w-full">
          <ul className="stepper">
            {stepper_list.map((stepper, number) => {
              return (
                <li
                  key={stepper.step_number}
                  className={`stepper-step ${
                    stepperValue === stepper.step_number && "stepper-active "
                  }`}
                  onClick={() => handleStepperToggle(stepper.step_number)}
                >
                  <div className="stepper-head">
                    <span className="stepper-head-icon">
                      {stepper.step_number}
                    </span>
                    <span className="stepper-head-text"> {stepper.title} </span>
                  </div>
                </li>
              );
            })}
          </ul>
          {stepperValue && stepperValue === 1 && (
            <CartTab stepperToggle={handleStepperToggle} />
          )}
          {stepperValue && stepperValue === 2 && <DetailsTab />}
          {stepperValue && stepperValue === 3 && <PaymentTab />}
        </div>
      </Container>
    </>
  );
};

export default ShoppingCart;
