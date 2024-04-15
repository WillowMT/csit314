'use client'

import { Input, Button } from "@nextui-org/react"
import { useFormState, useFormStatus } from "react-dom"
import { submit } from "./action"
import toast from "react-hot-toast"
import { useEffect } from "react"

export default function Form() {
    const [state, formAction] = useFormState(submit, null)

    useEffect(() => {
        if (!state?.message) return

        if (state?.success) {
            toast.success('User info updated')
        }

        if (!state?.success && state?.message) {
            toast.error(state?.message || 'An error occurred. Please try again.')
        }
    }, [state])

    return(
        <form action={formAction} className=" space-y-10">
            <Input
                isRequired
                name="oldPassword"
                className="mb-4 max-w-[400px] mx-auto"
                type="password"
                label="Old Password"
                labelPlacement={'outside'}
                placeholder="Old Password"
            />
            <Input
                isRequired
                name="newPassword"
                className="mb-4 max-w-[400px] mx-auto"
                type="password"
                label="New Password"
                labelPlacement={'outside'}
                placeholder="New Password"
            />
            <Input
                isRequired
                name="newPassword2"
                className="mb-4 max-w-[400px] mx-auto"
                type="password"
                label="Repeat Password"
                labelPlacement={'outside'}
                placeholder="Repeat Password"
            />
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
