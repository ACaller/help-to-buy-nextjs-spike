import Head from "next/head";
import React, { useState } from "react";
import FormField from "../components/form-field.component";
import Button from "../components/button.component";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Help To Buy Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col align-start min-h-screen py-8 mx-4">
        <div className="">
          <h1 className="font-bold text-xl text-green-800 text-center">
            Welcome to the Help To Buy Calculator
          </h1>
          <p className="text-lg text-green-700 text-center">
            Just enter a few simple details to calculate what you could afford
          </p>
        </div>
        <form className="m-auto mt-8" action="/results">
          <FormField
            question="How much money do you have for your deposit?"
            name="deposit"
          />
          <FormField
            question="What is your annual salary?"
            name="salary"
          />
          <FormField
            question="How much is the house you wish you could buy?"
            name="propertyValue"
          />
          <div className="flex flex-col ">
            <p className="py-8">
              Remember to leave about £1,500 for legal fees and also consider
              moving costs and essential furniture purchases
            </p>
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
