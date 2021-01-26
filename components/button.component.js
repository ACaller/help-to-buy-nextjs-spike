import React from "react";

const Button = ({ children, onClick }) => (
  <button onClick={onClick} className="my-8 m-auto bg-green-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-500 active:bg-green-800 focus:outline-none">
    {children}
  </button>
);

export default Button;
