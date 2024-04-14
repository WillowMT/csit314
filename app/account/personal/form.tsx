'use client'

import { Button, Input } from "@nextui-org/react";
import {submit} from './action'
import { useEffect } from "react";
import { useFormState } from "react-dom";
import toast from 'react-hot-toast'


export default function UserForm({fname, lname, email, phone}:{fname:string, lname:string, email:string, phone:string}) {
    const [state, formAction] = useFormState(submit, null);

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
            <div className="">
                <Input

                    name="firstName"
                    className="mb-8 max-w-[400px] mx-auto"
                    type="firstName"
                    label="First Name"
                    labelPlacement={'outside'}
                    placeholder="First Name"
                    defaultValue={fname}
                />
                <Input

                    name="lastName"
                    className="mb-8 max-w-[400px] mx-auto"
                    type="lastName"
                    label="Last Name"
                    labelPlacement={'outside'}
                    placeholder="Last Name"
                    defaultValue={lname}
                />
                <Input

                    name="phoneNumber"
                    className="mb-8 max-w-[400px] mx-auto"
                    type="number"
                    label="Phone Number"
                    labelPlacement={'outside'}
                    placeholder="Phone Number"
                    defaultValue={phone}
                />
            </div>
            <Button type="submit">Save Changes</Button>
        </form>
    )
}