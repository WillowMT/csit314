'use client'

import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Input, Select, SelectItem } from "@nextui-org/react";
import { countries } from "@/utils/countries";
import { useFormState, useFormStatus } from "react-dom";
import { createUser } from "./_action";
import toast from "react-hot-toast";
import { UserProfileInterface } from "@/utils/demo";

export default function AddUserForm({ roles }: { roles: UserProfileInterface[] }) {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const [role, setRole] = useState('BUYER')

    return (
        <>
            <Button onPress={onOpen}>Add User</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="py-4">
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Create User</ModalHeader>
                    <ModalBody>
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
                        } className="max-h-[400px] overflow-scroll">
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
                                // onChange={(e) => setCountry(e.target.value)}
                                >
                                    {countries.map((country) => (
                                        <SelectItem key={country.name} value={country.name}>
                                            {country.name}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <Select
                                    isRequired
                                    name="role"
                                    className="mb-4 max-w-[400px] mx-auto"
                                    defaultSelectedKeys={['BUYER']}
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

                                <Input
                                    isRequired
                                    name="phoneNumber"
                                    className="mb-4 max-w-[400px] mx-auto"
                                    type="phoneNumber"
                                    label="Phone Number"
                                    labelPlacement={'outside'}
                                    placeholder="Phone Number"
                                // startContent={<span className=" text-gray-500 text-sm">{dialCode}</span>}
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
                                    type="password"
                                    label="Confirm Password"
                                    labelPlacement={'outside'}
                                    placeholder="Confirm Password"
                                />
                                {
                                    role == 'AGENT' && (
                                        <>

                                            <Input
                                                name="agency"

                                                className="mb-4 max-w-[400px] mx-auto"
                                                type="agency"
                                                label="Agency"
                                                labelPlacement={'outside'}
                                                placeholder="Agency"
                                            />
                                            <Input

                                                name="license"
                                                className="mb-4 max-w-[400px] mx-auto"
                                                type="license"
                                                label="License"
                                                labelPlacement={'outside'}
                                                placeholder="License"
                                            />
                                            <Input

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
                            </div>
                            <Btn />
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}



function Btn() {
    const { pending } = useFormStatus();
    return (
        <div className="  grid place-items-center">
            <Button type="submit" className=" rounded-full bg-brand-200 font-bold text-white">
                {pending ? 'Loading...' : 'Create Account'}
            </Button>
        </div>
    );
}
