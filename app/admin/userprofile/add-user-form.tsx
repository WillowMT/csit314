'use client'

import React, { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem } from "@nextui-org/react";
import { countries } from "@/utils/countries";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import { submit } from "../../signup/_action";
import toast from "react-hot-toast";

export default function AddUserForm() {
    const { isOpen, onOpen,onClose, onOpenChange } = useDisclosure();
    const [state, formAction] = useFormState(submit, null);

    useEffect(() => {
        if (!state?.message) return

        if (state?.success) {
            toast.success('Account created successfully')
             onClose()
        }

        if (!state?.success && state?.message) {
            toast.error(state?.message || 'An error occurred. Please try again.')
        }
    }, [state])

    return (
        <>
            <Button onPress={onOpen}>Add Profile</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="py-4">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Create User</ModalHeader>
                            <ModalBody>
                                <form action={formAction} className="max-h-[400px] overflow-scroll">
                                    <div className="space-y-10 mb-4">
                                        <Input
                                            isRequired
                                            name="role"
                                            className="mb-4 max-w-[400px] mx-auto"
                                            type="string"
                                            label="Role"
                                            labelPlacement={'outside'}
                                            placeholder="Role"
                                            />
                                        <Select
                                            name="activated"
                                            className="mb-4 max-w-[400px] mx-auto"
                                            label="Activated"
                                            labelPlacement={'outside'}
                                            placeholder="Activated"
                                            defaultSelectedKeys={['true']}
                                        >
                                            <SelectItem value={"true"} key={"true"}>
                                                active
                                            </SelectItem>
                                            <SelectItem value={"false"} key={"false"}>
                                                suspended
                                            </SelectItem>
                                            
                                        </Select>

                                    </div>
                                    <Btn />
                                </form>
                            </ModalBody>
                        </>
                    )}
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
                {pending ? 'Loading...' : 'Create User Profile'}
            </Button>
        </div>
    );
}
