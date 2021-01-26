import React from "react";

const FormField = ({question, value, name}) => 
  <div className="my-6 lg:my-2 w-full justify-between grid grid-cols-1 lg:grid-cols-5">
    <label className="font-semibold lg:self-center col-span-3" htmlFor={name}>
      {question}
    </label>
    <div className="rounded-md focus-within:ring-indigo-500 focus-within:ring-2 col-span-2 flex ">
      <span className="font-bold inline-flex items-center p-3 rounded-l-md border border-r-0 border-grey-600 bg-grey-50 text-grey-500 text-md">
        £
      </span>
      <input
        type="number"
        required
        inputMode="decimal"
        name={name}
        id={name}
        min={1000}
        max={100000000}
        step={1}
        className="w-full p-3 focus:outline-none flex-1 block rounded-none rounded-r-md sm:text-sm border border-grey-600 text-lg"
      />
    </div>
  </div>;


export default FormField
