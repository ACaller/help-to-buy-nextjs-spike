import React from "react";
import { useRouter } from "next/router";
import Button from "../components/button.component";
import Head from "next/head";

export async function getServerSideProps({ query }) {
  const { deposit, salary, propertyValue, london40 } = query;
  const helptoBuyPercentage = london40==="on"? 40:20;
  const maxMortgage = salary * 4.5;
  const helpToBuyLoan = helptoBuyPercentage / 100  * propertyValue;
  const depositAt5 = 0.05 * propertyValue;
  const shortfall = propertyValue - helpToBuyLoan - maxMortgage;
  const minimumDeposit = shortfall > depositAt5 ? shortfall : depositAt5;
  const depositPercentage = ((minimumDeposit / propertyValue) * 100).toFixed(2);
  const actualMortgage = propertyValue - helpToBuyLoan - minimumDeposit;
  const mortgagePercentage = ((actualMortgage / propertyValue) * 100).toFixed(
    2
  );
  const depositGap = deposit - minimumDeposit;

  return {
    props: {
      ...query,
      helptoBuyPercentage,
      maxMortgage,
      helpToBuyLoan,
      minimumDeposit,
      depositAt5,
      depositPercentage,
      actualMortgage,
      mortgagePercentage,
      affordable: minimumDeposit <= deposit,
      depositGap
    }
  };
}

const Row = ({ label, value }) => (
  <>
    <p className="col-span-2 pr-4">{label}</p>
    <p className="">{value}</p>
  </>
);

const SectionTitle = ({ children }) => (
  <p className="col-span-3 font-semibold text-green-700 border-b border-green-700 mt-8">
    {children}
  </p>
);

const Results = props => {
  const router = useRouter();

  return (
    <div className="overflow-y-scroll bg-green-800">
      <Head>
        <title>Help To Buy Calculator: Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-start min-h-screen p-8 max-w-xl m-auto bg-white">
        <h1 className="font-bold text-xl text-green-800 text-center">
          Help To Buy Calculator
        </h1>
        <p className="text-lg text-green-700 text-center">
          Your personalised results
        </p>
        <div className="grid grid-cols-3 gap-y-2 mb-16">
          <SectionTitle>Your information</SectionTitle>

          <Row label="Deposit" value={props.deposit} />
          <Row label="Salary" value={props.salary} />
          <Row label="Property Value" value={props.propertyValue} />
          <SectionTitle>Calculated restraints</SectionTitle>

          <Row
            label="Maximum available mortgage based on your salary"
            value={props.maxMortgage}
          />
          <Row
            label="Minimum deposit required based on the property value"
            value={`${props.depositAt5} (5%)`}
          />
          <SectionTitle>Your package</SectionTitle>

          <Row
            label="Help To Buy Loan"
            value={`${props.helpToBuyLoan} (${props.helptoBuyPercentage}%)`}
          />
          <Row
            label="Mortgage"
            value={`${props.actualMortgage} (${props.mortgagePercentage}%)`}
          />
          <Row
            label="Minimum Required Deposit"
            value={`${props.minimumDeposit} (${props.depositPercentage}%)`}
          />
        </div>
        {props.depositGap < 0 ? (
          <div className="flex flex-col items-center">
            <img
              src="https://media.giphy.com/media/xT0GqgeTVaAdWZD1uw/giphy.gif"
              width="480"
              height="266"
              frameBorder="0"
              allowFullScreen
            />
            <p className="pt-4">
              Aww no. Unfortunately you need to save another £
              {Math.abs(props.depositGap)} before you can afford this home
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <img
              src="https://media.giphy.com/media/l4JySAWfMaY7w88sU/giphy.gif"
              width="480"
              height="266"
              frameBorder="0"
              allowFullScreen
            />
            <p className="pt-4">
              Hooray! It looks like you can afford this property on Help To Buy.
              And you should even have £{props.depositGap} left over!
            </p>
          </div>
        )}
        <Button onClick={router.back}>Back</Button>
      </div>
    </div>
  );
};
export default Results;
