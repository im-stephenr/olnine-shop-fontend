import React from "react";
import Button from "../../../../components/Button";
import Card from "../../../../components/Card";
import Input from "../../../../components/Input";
import Radio from "../../../../components/Radio";

const PaymentMethodForm = (props) => {
  return (
    <>
      <Card>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="flush-headingOne">
              <button
                className="accordion-button
                           relative
                           flex
                           items-center
                           w-full
                           py-4
                           px-5
                           text-base text-gray-800 text-left
                           bg-white
                           border-0
                           rounded-none
                           transition
                           focus:outline-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <Radio
                  id="payWithCard"
                  label="Pay with Card"
                  name="paymentMethod"
                  value="card"
                />
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse border-0 collapse show"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body py-4 px-5 grid md:grid-cols-2 gap-x-4 place-content-start ">
                <div className="col-span-1">
                  <Input
                    type="text"
                    classes="my-2"
                    id="card_number"
                    name="card_number"
                    placeholder="Card Number"
                  />
                  <Input
                    type="text"
                    classes="my-2"
                    id="card_name"
                    name="card_name"
                    placeholder="Name on Card"
                  />
                </div>
                <div className="col-span-1">
                  <Input
                    type="text"
                    classes="my-2"
                    id="exp_date"
                    name="exp_date"
                    placeholder="Exp Date"
                  />
                  <Input
                    type="text"
                    classes="my-2"
                    id="name_on_card"
                    name="name_on_card"
                    placeholder="Name on Card"
                  />
                  <Button type="button" classes="float-right" inverted>
                    SUBMIT
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="flush-headingTwo">
              <button
                className="accordion-button
                           collapsed
                           relative
                           flex
                           items-center
                           w-full
                           py-4
                           px-5
                           text-base text-gray-800 text-left
                           bg-white
                           border-0
                           rounded-none
                           transition
                           focus:outline-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <Radio
                  id="payWithPaypal"
                  label="Pay with Paypal"
                  name="paymentMethod"
                  value="paypal"
                />
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse border-0 collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body py-4 px-5 flex">
                <Input
                  type="text"
                  classes="my-2 w-[70%] float-left"
                  id="paypal_email"
                  name="paypal_email"
                  placeholder="Email"
                />
                <Button type="button" classes="float-right mt-2" inverted>
                  SUBMIT
                </Button>
              </div>
            </div>
          </div>
          <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="flush-headingThree">
              <button
                className="accordion-button
                           collapsed
                           relative
                           flex
                           items-center
                           w-full
                           py-4
                           px-5
                           text-base text-gray-800 text-left
                           bg-white
                           border-0
                           rounded-none
                           transition
                           focus:outline-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <Radio
                  id="cashOnDelivery"
                  label="Cash On Delivery"
                  name="paymentMethod"
                  value="cod"
                />
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body py-4 px-5 flex ">
                <Button type="button" classes="float-right mt-2" inverted>
                  Proceed
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default PaymentMethodForm;
