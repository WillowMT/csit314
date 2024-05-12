'use client'
import React from "react";
import {
    Tabs, Tab, Card, CardBody, Button, Link, Input, Select, SelectItem
} from "@nextui-org/react";
import { useFormStatus } from "react-dom";
import { countries } from '@/utils/countries'
import { useEffect, useState } from "react";
import toast from 'react-hot-toast'
import { UserProfileInterface } from "@/utils/demo";
import { createUser } from "../admin/useraccount/_action";


export default function Form({ roles }: { roles: UserProfileInterface[] }) {
    const [country, setCountry] = useState('Singapore')
    const [dialCode, setDialCode] = useState('+65')
    const [role, setRole] = useState('BUYER')

    useEffect(() => {
        const selectedCountry = countries.find((c) => c.name === country)
        if (!selectedCountry) return

        setDialCode(selectedCountry.dial_code)
    }, [country])


    return (
        <div className="flex w-full flex-col">
            <Card className=" p-4 m-4">
                <CardBody>
                    <form action={
                        async (data) => {
                            const { success, message } = await createUser(data)
                            if (success) {
                                toast.success('Account created successfully')
                            }
                            else {
                                toast.error(message)
                            }
                        }
                    } className="">
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
                            <Select
                                isRequired
                                name="role"
                                className="mb-4 max-w-[400px] mx-auto"
                                defaultSelectedKeys={[role]}
                                label="Role"
                                labelPlacement={'outside'}
                                placeholder="Role"
                                onChange={(e) => setRole(e.target.value)}
                            >
                                {//Todo: Link to UserProfile table through a controller, viewUserProfileController, and use its getUserProfile() function??
                                    //Make sure in the prisma tables BUYER, SELLER, SYSADMIN, REALESTATEAGENT always exists...
                                    roles.map((item) => (
                                        <SelectItem key={item.role} value={item.role}>
                                            {item.role}
                                        </SelectItem>
                                    ))}
                            </Select>


                            {
                                role.includes("AGENT") && (
                                    <>
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
                                    </>
                                )
                            }

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
                                type="password"
                                label="Confirm Password"
                                labelPlacement={'outside'}
                                placeholder="Confirm Password"
                            />
                        </div>
                        <Btn />
                    </form>
                </CardBody>
            </Card>

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
