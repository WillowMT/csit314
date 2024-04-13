'use client'
import React from "react";
import {
    Tabs, Tab, Card, CardBody, Button, Link, Input, Select, SelectItem
} from "@nextui-org/react";
import { useFormState, useFormStatus } from "react-dom";
import { countries } from '@/utils/countries'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/utils/actions";
import toast from 'react-hot-toast'

export default function Form() {
    const [state, formAction] = useFormState(login, null);

    useEffect(() => {
        if (!state || !state.error) return;

        if (state.error) {
            toast.error(state.message)
        }
    }, [state])

    return (
        <div className="flex w-full flex-col my-4 py-8">
            <Card className="mx-4" >
                <CardBody className="">

                    <form action={formAction} className="w-full px-4 py-[7rem]">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="mb-[1.75rem]">

                                <Select
                                    isRequired
                                    name="role"
                                    className="max-w-[400px] mx-auto"
                                    defaultSelectedKeys={['User']}
                                    label="Login As"
                                    labelPlacement={'outside'}
                                    placeholder="Login As"
                                >
                                    {['User', 'Agent'].map((item) => {
                                        return <SelectItem key={item} value={item}>{item}</SelectItem>
                                    })}
                                </Select>
                            </div>

                            <div className=" space-y-[4rem]">
                                <Input
                                    isRequired
                                    name="email"
                                    className=" max-w-[400px] mx-auto"
                                    type="email"
                                    label="Email"
                                    labelPlacement={'outside'}
                                    placeholder="Email"
                                />
                                <Input
                                    isRequired
                                    name="password"
                                    className=" max-w-[400px] mx-auto"
                                    type="password"
                                    label="Password"
                                    labelPlacement={'outside'}
                                    placeholder="Password"
                                />
                            </div>


                        </div>
                        <div className=" mt-[4rem]">
                            <Btn />
                        </div>
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
            <small>Dont have an account? <Link className=" text-sm underline" href="/signup">Sign Up</Link></small>
        </div>
    );
}
