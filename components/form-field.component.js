import React from "react";

const FormField = ({question, name, children}) => 
  <div className="my-6 lg:my-2 w-full justify-between grid grid-cols-1 lg:grid-cols-5">
    <label className="font-semibold lg:self-center col-span-3" htmlFor={name}>
      {question}
    </label>
    <div className="rounded-md focus-within:ring-indigo-500 focus-within:ring-2 col-span-2 flex ">
      <span className="font-bold inline-flex items-center p-3 rounded-l-md border border-r-0 border-grey-600 bg-grey-50 text-grey-500 text-md">
        £
      </span>
      {children}
    </div>
  </div>;


export default FormField
