import React from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";

const CartForm = (props) => {
  return (
    <div className="flex justify-center w-full mt-7">
      <div className="block rounded-lg shadow-md bg-white max-w-sm text-center">
        <div className="py-3 px-6 border-b border-gray-300 flex justify-between">
          <div className="text-black">Total : </div>
          <div className="font-bold">₱ 100</div>
        </div>
        <div className="p-6">
          <div className="flex border-b-2 justify-start">
            <div className="mb-5 xl:w-96">
              <label
                htmlFor="additionalNotes"
                className="form-label float-left"
              >
                Additional Note
              </label>
              <Input
                type="textarea"
                id="additionalNotes"
                rows="3"
                placeholder="Your message"
              />
            </div>
          </div>
          <div className="relative mt-4 pb-4">
            <Input type="text" id="voucher" placeholder="Voucher" />
            <Button type="button" inverted>
              APPLY VOUCHER
            </Button>
          </div>
        </div>
        <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
          <Button type="button" onClick={() => props.stepperToggle(2)}>
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartForm;
