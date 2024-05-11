'use client'
import React from "react";
import { Textarea, Button } from "@nextui-org/react";

export default function MortageCal() {
    const [interest_value, setInterestValue] = React.useState("");
    const [year_value, setYearValue] = React.useState("");
    const [monthlyPayment, setMonthlyPayment] = React.useState("");

    const calculateMonthlyPayment = () => {
        const interestRate = parseFloat(interest_value) / 100 / 12;
        const termInYears = parseFloat(year_value);
        const monthlyPayment = 120000000 *
            interestRate * Math.pow(1 + interestRate, termInYears) /
            (1 - Math.pow(1 + interestRate, -12 * termInYears));
        setMonthlyPayment(monthlyPayment.toFixed(2));
    };

    return (
        <div className="w-[350px] flex flex-col gap-2 items-center">
        <Textarea
            label="Interest Rate"
            labelPlacement="outside"
            placeholder="Enter your monthly interest rate"
            value={interest_value}
            onValueChange={(value) => setInterestValue(value)}
        />
        <Textarea
            label="Years of payment"
            labelPlacement="outside"
            placeholder="Enter your lease year"
            value={year_value}
            onValueChange={(value) => setYearValue(value)}
        />
        <Button color="default" onClick={calculateMonthlyPayment}>
            Calculate
        </Button>
        {monthlyPayment && (
        <p>
        Estimated monthly payment is <strong>${monthlyPayment}</strong>
        </p>
        )}
        
        </div>
    );
}