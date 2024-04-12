'use client'
import React from "react";
import {
    Tabs, Tab, Card, CardBody, Button, Link, Input, Select, SelectItem
} from "@nextui-org/react";
import { useFormState, useFormStatus } from "react-dom";
import { submit } from "./_action";
import { countries } from '@/utils/countries'
import { useEffect, useState } from "react";
import toast from 'react-hot-toast'


export default function Form() {
    const [state, formAction] = useFormState(submit, null);
    const [country, setCountry] = useState('Singapore')
    const [dialCode, setDialCode] = useState('+65')

    useEffect(() => {
        const selectedCountry = countries.find((c) => c.name === country)
        if (!selectedCountry) return

        setDialCode(selectedCountry.dial_code)
    }, [country])


    useEffect(() => {
        if (!state?.message) return

        if (state?.success) {
            toast.success('Account created successfully')
        }

        if (!state?.success && state?.message) {
            toast.error(state?.message || 'An error occurred. Please try again.')
        }
    }, [state])


    return (
        <div className="flex w-full flex-col">
            <Tabs aria-label="Options" radius="full" className="mx-auto">
                <Tab key="user" title="User">
                    <Card className=" p-4 m-4">
                        <CardBody>
                            <form action={formAction} className="">
                                <div className="grid md:grid-cols-2 gap-4">

                                    <Input
                                        isRequired
                                        name="email"
                                        className="mb-4 max-w-[400px] mx-auto"
                                        type="email"
                                        label="Email"
                                        labelPlacement={'outside'}
                                        placeholder="Email"
                                    />
                                    <Input
                                        isRequired
                                        name="firstName"
                                        className="mb-4 max-w-[400px] mx-auto"
                                        type="firstName"
                                        label="First Name"
                                        labelPlacement={'outside'}
                                        placeholder="First Name"
                                    />

                                    <Input
                                        isRequired
                                        name="lastName"
                                        className="mb-4 max-w-[400px] mx-auto"
                                        type="lastName"
                                        label="Last Name"
                                        labelPlacement={'outside'}
                                        placeholder="Last Name"
                                    />
                                    <Select
                                        isRequired
                                        name="country"
                                        className="mb-4 max-w-[400px] mx-auto"
                                        defaultSelectedKeys={['Singapore']}
                                        label="Country"
                                        labelPlacement={'outside'}
                                        placeholder="Country"
                                        onChange={(e) => setCountry(e.target.value)}
                                    >
                                        {countries.map((country) => (
                                            <SelectItem key={country.name} value={country.name}>
                                                {country.name}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                    <Input
                                        isRequired
                                        name="phoneNumber"
                                        className="mb-4 max-w-[400px] mx-auto"
                                        type="phoneNumber"
                                        label="Phone Number"
                                        labelPlacement={'outside'}
                                        placeholder="Phone Number"
                                        startContent={<span className=" text-gray-500 text-sm">{dialCode}</span>}
                                    />
                                    <Input
                                        isRequired
                                        name="password"
                                        className="mb-4 max-w-[400px] mx-auto"
                                        type="password"
                                        label="Password"
                                        labelPlacement={'outside'}
                                        placeholder="Password"
                                    />
                                    <Input
                                        isRequired
                                        name="passwordConfirm"
                                        className="mb-4 max-w-[400px] mx-auto"
                                        type="passwordConfirm"
                                        label="Confirm Password"
                                        labelPlacement={'outside'}
                                        placeholder="Confirm Password"
                                    />
                                </div>
                                <Btn />
                            </form>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="agent" title="Agent">
                    <Card className=" p-4 m-4">
                        <CardBody>
                            <form action={formAction} className=" space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">

                                    <Input
                                        isRequired
                                        name="email"
                                        className="mb-4 max-w-[400px] mx-auto"
                                        type="email"
                                        label="Email"
                                        labelPlacement={'outside'}
                                        placeholder="Email"
                                    />
                                    <Input
                                        isRequired
                                        name="firstName"
                                        className="mb-4 max-w-[400px] mx-auto"
                                        type="firstName"
                                        label="First Name"
                                        labelPlacement={'outside'}
                                        placeholder="First Name"
                                    />

                                    <Input
                                        isRequired
                                        name="lastName"
                                        className="mb-4 max-w-[400px] mx-auto"
                                        type="lastName"
                                        label="Last Name"
                                        labelPlacement={'outside'}
                                        placeholder="Last Name"
                                    />
                                    <Select
                                        isRequired
                                        name="country"
                                        className="mb-4 max-w-[400px] mx-auto"
                                        defaultSelectedKeys={['Singapore']}
                                        label="Country"
                                        labelPlacement={'outside'}
                                        placeholder="Country"
                                        onChange={(e) => setCountry(e.target.value)}
                                    >
                                        {countries.map((country) => (
                                            <SelectItem key={country.name} value={country.name}>
                                                {country.name}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                    <Input
                                        name="agency"
                                        isRequired
                                        className="mb-4 max-w-[400px] mx-auto"
                                        type="agency"
                                        label="Agency"
                                        labelPlacement={'outside'}
                                        placeholder="Agency"
                                    />
                                    <Input
                                        name="jobDesignation"
                                        isRequired
                                        className="mb-4 max-w-[400px] mx-auto"
                                        type="jobDesignation"
                                        label="Job Designation"
                                        labelPlacement={'outside'}
                                        placeholder="Job Designation"
                                    />
                                    <Input
                                        isRequired
                                        name="license"
                                        className="mb-4 max-w-[400px] mx-auto"
                                        type="license"
                                        label="License"
                                        labelPlacement={'outside'}
                                        placeholder="License"
                                    />
                                    <Input
                                        isRequired
                                        name="ceaNumber"
                                        className="mb-4 max-w-[400px] mx-auto"
                                        type="ceaNumber"
                                        label="CEA Number"
                                        labelPlacement={'outside'}
                                        placeholder="CEA Number"
                                    />
                                    <Input
                                        isRequired
                                        name="phoneNumber"
                                        className="mb-4 max-w-[400px] mx-auto"
                                        type="phoneNumber"
                                        label="Phone Number"
                                        labelPlacement={'outside'}
                                        placeholder="Phone Number"
                                        startContent={<span className=" text-gray-500 text-sm">{dialCode}</span>}
                                    />
                                    <Input
                                        isRequired
                                        name="password"
                                        className="mb-4 max-w-[400px] mx-auto"
                                        type="password"
                                        label="Password"
                                        labelPlacement={'outside'}
                                        placeholder="Password"
                                    />
                                    <Input
                                        isRequired
                                        name="passwordConfirm"
                                        className="mb-4 max-w-[400px] mx-auto"
                                        type="passwordConfirm"
                                        label="Confirm Password"
                                        labelPlacement={'outside'}
                                        placeholder="Confirm Password"
                                    />
                                </div>
                                <Btn />
                            </form>
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    );
}



function Btn() {
    const { pending } = useFormStatus();
    return (
        <div className="  grid place-items-center">
            <Button type="submit" className=" rounded-full bg-brand-200 font-bold text-white">
                {pending ? 'Loading...' : 'Create Account'}
            </Button>
            <br />
            <small>Already have an account? <Link className=" text-sm underline" href="/signin">Sign In</Link></small>
        </div>
    );
}
