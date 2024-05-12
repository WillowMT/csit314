'use client'

import React from "react";
import {
    Card, CardBody, Button, Link, Input, Select, SelectItem
} from "@nextui-org/react";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { login } from "./action";
import toast from 'react-hot-toast'
import { useRouter } from "next/navigation";

export default function Form() {
    // const [state, formAction] = useFormState(login, null);
    const router = useRouter()

    return (
        <div className="flex w-full flex-col my-4 py-8">
            <Card className="mx-4" >
                <CardBody className="">
                    <form action={
                        async (data) => {
                            const {success} = await login(data)
                            if(success){
                                toast.success('Login successful')
                                router.push('/buy')
                            }
                            else{
                                toast.error('Login failed')
                            }
                        }
                    } className="w-full px-4 py-[7rem]">
                        <div className="grid grid-cols-1 gap-4">
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
                {pending ? 'Loading...' : 'Sign In'}
            </Button>
            <br />
            <small>Dont have an account? <Link className=" text-sm underline" href="/signup">Sign Up</Link></small>
        </div>
    );
}
