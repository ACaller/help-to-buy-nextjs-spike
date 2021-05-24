import React, { useRef, forwardRef, createRef } from "react";
import Button from '../components/button.component';
import FormField from '../components/form-field.component';
import Input from '../components/input.component';

const validateInput = value => value === "valid";



const renderJSONToJSX = ({ as: Component, children, ...props }) => (
  <Component {...props}>
    {typeof children === "object" ? children.map(renderJSONToJSX):children}
  </Component>
);

const Testing = () => {

  const handleBlur = (e) => {
    console.log(e.target, e.target.ref)
    console.log(componentsToRender[0].children[1].children[0].validate())
  }
  
  const componentsToRender = [
  {
    as: "div",
    className: "flex flex-col items-center justify-items-center h-screen",
    children: [
      {
        as: "div",
        className:
          "font-bold text-xl text-green-800",
        children: "Hello world"
      },
      {
        as: FormField,
        question: "What is up?",
        name: "what",
        children: [
          {
            as: Input,
            ref: useRef(),
            onBlur: handleBlur,
            validate: () => validateInput(this.ref.current.value)
          }
        ]
      },
      {
        as: Button,
        className: "",
        children: "Bye world"
      }
    ]
  }
];
  return componentsToRender.map(renderJSONToJSX);
};

export default Testing;
