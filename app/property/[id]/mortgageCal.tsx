'use client'

import React from "react";
import { Textarea, Button, Input } from "@nextui-org/react";

import { calculateMonthlyPayment } from "./action";
import { useFormState } from "react-dom";

export default function MortageCal({ price }: { price: number }) {
    const [state, formAction] = useFormState(calculateMonthlyPayment,0)

    

    return (
        <form action={formAction} className="w-[350px] flex flex-col gap-2 items-center space-y-4">
            <Input
                className="h-[50px]"
                type="number"
                name="interest"
                label="Interest Rate"
                labelPlacement="inside"
                placeholder="Enter your monthly interest rate"
                isRequired
            />
            <Input
                className="h-[50px]"
                type="number"
                name="years"
                label="Years of payment"
                labelPlacement="inside"
                placeholder="Enter your lease year"
                isRequired
            />
            <Input
                className="h-[50px] hidden"
                type="number"
                name="price"
                label="Price"
                labelPlacement="inside"
                placeholder="Enter your Price"
                defaultValue={price.toString()}
                isRequired
            />
            <Button color="default" type="submit">
                Calculate
            </Button>
            {state != 0 && (
                <p>
                    Estimated monthly payment is <strong>${state.toFixed(2)}</strong>
                </p>
            )}

        </form>
    );
}