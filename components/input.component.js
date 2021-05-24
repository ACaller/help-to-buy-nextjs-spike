import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => (
  <input
    type="number"
    required
    inputMode="decimal"
    min={1000}
    max={100000000}
    step={1}
    className="w-full p-3 focus:outline-none flex-1 block rounded-none rounded-r-md sm:text-sm border border-grey-600 text-lg"
    {...props}
  />
));

export default Input;
