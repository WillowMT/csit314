'use client'

import { submit } from './action'
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from 'react-hot-toast'
import { UserInterface } from "@/utils/demo";
import { countries } from '@/utils/countries'
import {
    Button, Input, Select, SelectItem
} from "@nextui-org/react";
import { SessionData } from '@/utils/types';


export default function UserForm({ session }: { session: SessionData }) {
    const [state, formAction] = useFormState(submit, null);

    useEffect(() => {
        if (!state) return

        toast.success('User updated successfully')
    }, [state])


    return (

        <form action={formAction} className="mt-14 border w-fit mx-auto rounded-xl px-10 mb-10">
            <div className=" flex flex-col py-8">
                <h1 className=" text-3xl mb-6">Edit Account Info</h1>
                <div className="space-y-12">

                    <Input
                        name="firstName"
                        className="mb-8 w-[400px] mr-auto"
                        type="firstName"
                        label="First Name"
                        labelPlacement={'outside'}
                        placeholder="First Name"
                        defaultValue={session.firstName}
                    />
                    <Input

                        name="lastName"
                        className="mb-8 w-[400px] mr-auto"
                        type="lastName"
                        label="Last Name"
                        labelPlacement={'outside'}
                        placeholder="Last Name"
                        defaultValue={session.lastName}
                    />
                    <Input
                        name="phoneNumber"
                        className="mb-8 w-[400px] mr-auto"
                        type="text"
                        label="Phone Number"
                        labelPlacement={'outside'}
                        placeholder="Phone Number"
                        defaultValue={session.phoneNumber}
                    />

                    <Input
                        name="email"
                        className="mb-8 w-[400px] mr-auto"
                        type="email"
                        label="Email"
                        labelPlacement={'outside'}
                        placeholder="Email"
                        defaultValue={session.email}
                    />

                    <Select
                        name="country"
                        className="mb-4 w-[400px] mr-auto"
                        defaultSelectedKeys={['Singapore']}
                        label="Country"
                        labelPlacement={'outside'}
                        placeholder="Country"
                    >
                        {countries.map((country) => (
                            <SelectItem key={country.name} value={country.name}>
                                {country.name}
                            </SelectItem>
                        ))}
                    </Select>
                    {
                        session.role === 'AGENT' && (

                            <div>
                                <Input
                                    name="agency"
                                    isRequired
                                    className="mb-8 w-[400px] mr-auto"
                                    type="agency"
                                    label="Agency"
                                    labelPlacement={'outside'}
                                    placeholder="Agency"
                                    defaultValue={session.agency}
                                />
                                <Input
                                    name="jobDesignation"
                                    isRequired
                                    className="mb-8 w-[400px] mr-auto"
                                    type="jobDesignation"
                                    label="Job Designation"
                                    labelPlacement={'outside'}
                                    placeholder="Job Designation"
                                    defaultValue={session.jobDesignation}
                                />
                                <Input
                                    isRequired
                                    name="license"
                                    className="mb-8 w-[400px] mr-auto"
                                    type="license"
                                    label="License"
                                    labelPlacement={'outside'}
                                    placeholder="License"
                                    defaultValue={session.license}
                                />
                                <Input
                                    isRequired
                                    name="ceaNumber"
                                    className="mb-8 w-[400px] mr-auto"
                                    type="ceaNumber"
                                    label="CEA Number"
                                    labelPlacement={'outside'}
                                    placeholder="CEA Number"
                                    defaultValue={session.ceaNumber}
                                />
                            </div>
                        )
                    }
                    <Btn />
                </div>

            </div>
        </form>
    )
}

function Btn() {
    const { pending } = useFormStatus();
    return (
        <div className=" ">
            <Button type="submit" className=" rounded-full bg-brand-200 font-bold text-white">
                {pending ? 'Loading...' : 'Save Changes'}
            </Button>
        </div>
    );
}
