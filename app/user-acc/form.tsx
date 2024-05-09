'use client'

import { submit } from './action'
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from 'react-hot-toast'
import { UserInterface } from "@/utils/demo";
import { countries } from '@/utils/countries'
import {
    Tabs, Tab, Card, CardBody, Button, Link, Input, Select, SelectItem
} from "@nextui-org/react";


export default function UserForm(user: UserInterface) {
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
            toast.success('User info updated')
        }

        if (!state?.success && state?.message) {
            toast.error(state?.message || 'An error occurred. Please try again.')
        }
    }, [state])


    return (

        <form action={formAction} className="mt-14">
            <div className=" flex space-x-10">
                <div className="">

                    <Input
                        name="firstName"
                        className="mb-8 max-w-[400px] mx-auto"
                        type="firstName"
                        label="First Name"
                        labelPlacement={'outside'}
                        placeholder="First Name"
                        defaultValue={user.firstName}
                    />
                    <Input

                        name="lastName"
                        className="mb-8 max-w-[400px] mx-auto"
                        type="lastName"
                        label="Last Name"
                        labelPlacement={'outside'}
                        placeholder="Last Name"
                        defaultValue={user.lastName}
                    />
                    <Input
                        name="phoneNumber"
                        className="mb-8 max-w-[400px] mx-auto"
                        type="text"
                        label="Phone Number"
                        labelPlacement={'outside'}
                        placeholder="Phone Number"
                        defaultValue={user.phoneNumber}
                    />

                    <Input
                        name="email"
                        className="mb-8 max-w-[400px] mx-auto"
                        type="email"
                        label="Email"
                        labelPlacement={'outside'}
                        placeholder="Email"
                        defaultValue={user.email}
                    />

                    <Select
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
                        name="password"
                        className="mb-8 max-w-[400px] mx-auto"
                        type="password"
                        label="Password"
                        labelPlacement={'outside'}
                        placeholder="Password"
                        defaultValue=""
                    />

                    <Input
                        name="confirm-password"
                        className="mb-8 max-w-[400px] mx-auto"
                        type="password"
                        label="Confirm Password"
                        labelPlacement={'outside'}
                        placeholder="Confirm Password"
                        defaultValue=""
                    />
                </div>
            </div>
            <Btn />
        </form>
    )
}

function Btn() {
    const { pending } = useFormStatus();
    return (
        <div className="  grid place-items-center">
            <Button type="submit" className=" rounded-full bg-brand-200 font-bold text-white">
                {pending ? 'Loading...' : 'Save Changes'}
            </Button>
        </div>
    );
}
