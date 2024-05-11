'use client'

import { Button, Input } from "@nextui-org/react";
import { submit } from './action'
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from 'react-hot-toast'



export default function PropertyForm() {
    const [state, formAction] = useFormState(submit, null);


    useEffect(() => {
        if (!state) return

        toast.success('Property created successfully')
    }, [state])


    return (

        <form action={formAction} className="mt-14 mb-8">
            <div className=" bg-brand-100 mx-4 my-8 py-8 rounded-md">
                <h1 className="text-center text-3xl mb-20">Property Registration</h1>
                <div className=" grid md:grid-cols-2">
                    <Input
                        isRequired
                        name="name"
                        className="mb-8 max-w-[400px] mx-auto"
                        type="string"
                        label="Name"
                        labelPlacement={'outside'}
                        placeholder="Name"
                    />
                    <Input
                        isRequired
                        name="address"
                        className="mb-8 max-w-[400px] mx-auto"
                        type="string"
                        label="Address"
                        labelPlacement={'outside'}
                        placeholder="Address"
                    />
                    <Input
                        isRequired
                        name="description"
                        className="mb-8 max-w-[400px] mx-auto"
                        type="string"
                        label="Description"
                        labelPlacement={'outside'}
                        placeholder="Description"
                    />
                    <Input
                        isRequired
                        name="bedroom"
                        className="mb-8 max-w-[400px] mx-auto"
                        type="number"
                        label="Bedroom"
                        labelPlacement={'outside'}
                        placeholder="Bedroom"
                    />
                    <Input
                        isRequired
                        name="bathroom"
                        className="mb-8 max-w-[400px] mx-auto"
                        type="number"
                        label="Bathroom"
                        labelPlacement={'outside'}
                        placeholder="Bathroom"
                    />


                    <Input
                        isRequired
                        name="leaseYear"
                        className="mb-8 max-w-[400px] mx-auto"
                        type="number"
                        label="Lease Year"
                        labelPlacement={'outside'}
                        placeholder="Lease Year"
                    />
                    <Input
                        isRequired
                        name="squareFt"
                        className="mb-8 max-w-[400px] mx-auto"
                        type="number"
                        label="Square Feet"
                        labelPlacement={'outside'}
                        placeholder="Square Feet"
                    />
                    <Input
                        isRequired
                        name="builtYear"
                        className="mb-8 max-w-[400px] mx-auto"
                        type="number"
                        label="Built Year"
                        labelPlacement={'outside'}
                        placeholder="Built Year"
                    />
                    <Input
                        isRequired
                        name="price"
                        className="mb-8 max-w-[400px] mx-auto"
                        type="number"
                        label="Price"
                        labelPlacement={'outside'}
                        placeholder="Price"
                    />
                    <Input
                        isRequired
                        name="propertyType"
                        className="mb-8 max-w-[400px] mx-auto"
                        type="string"
                        label="Property Type"
                        labelPlacement={'outside'}
                        placeholder="Property Type"
                    />
                    <Input
                        isRequired
                        name="imageUrl"
                        className="mb-8 max-w-[400px] mx-auto"
                        type="string"
                        label="Image Url"
                        labelPlacement={'outside'}
                        placeholder="Image Url"
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
