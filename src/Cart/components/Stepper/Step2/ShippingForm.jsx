import React from "react";
import Card from "../../../../components/Card";
import Input from "../../../../components/Input";

const ShippingForm = (props) => {
  return (
    <>
      <Card classes="col-span-3 p-3 w-full ">
        <div className="grid md:grid-cols-2 gap-x-3">
          <div>
            <h6 className="font-bold mb-2 text-left">Shipping Address</h6>
            <Input
              type="text"
              classes="y-2"
              id="fullname"
              placeholder="Full Name"
            />
            <Input
              type="text"
              classes="my-2"
              id="phone_number"
              placeholder="Phone Number"
            />
            <Input
              type="text"
              classes="my-2"
              id="zipcode"
              placeholder="Zip Code"
            />
            <Input
              type="text"
              classes="my-2"
              id="address"
              placeholder="Address"
            />
          </div>
          <div>
            &nbsp;
            <Input type="text" classes="my-2" id="email" placeholder="Email" />
            <Input
              type="text"
              classes="my-2"
              id="company"
              placeholder="Company"
            />
            <Input
              type="text"
              classes="my-2"
              id="country"
              placeholder="Country"
            />
            <Input
              type="text"
              classes="my-2"
              id="address2"
              placeholder="Address 2"
            />
          </div>
        </div>
      </Card>

      <Card classes="col-span-3 p-3 w-full mt-10">
        <div className="form-check flex place-content-start mb-2">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            id="flexCheckDefault"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexCheckDefault"
          >
            Same as Shipping Address
          </label>
        </div>
        <div className="grid md:grid-cols-2 gap-x-3">
          <div>
            <h6 className="font-bold mb-2 text-left">Billing Address</h6>
            <Input
              type="text"
              classes="y-2"
              id="billing_fullname"
              name="billing_fullname"
              placeholder="Full Name"
            />
            <Input
              type="text"
              classes="my-2"
              id="billing_phone_number"
              placeholder="Phone Number"
            />
            <Input
              type="text"
              classes="my-2"
              id="billing_zipcode"
              placeholder="Zip Code"
            />
            <Input
              type="text"
              classes="my-2"
              id="billing_address"
              placeholder="Address"
            />
          </div>
          <div>
            &nbsp;
            <Input
              type="text"
              classes="my-2"
              id="billing_email"
              placeholder="Email"
            />
            <Input
              type="text"
              classes="my-2"
              id="billing_company"
              placeholder="Company"
            />
            <Input
              type="text"
              classes="my-2"
              id="billing_country"
              placeholder="Country"
            />
            <Input
              type="text"
              classes="my-2"
              id="billing_address2"
              placeholder="Address 2"
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default ShippingForm;
