'use state'

import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { useEffect } from "react";
import { suspendUser } from "./_action";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

export default function SuspendButton({email}: {email: string}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [state, formAction] = useFormState(suspendUser, null);

    useEffect(() => {
        if (!state) return

        if (state) {
            toast.success('User suspended successfully')
        }

    }, [state])



    return (
        <>
            <Button onPress={onOpen} size="sm" color="danger">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>

            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Suspend User</ModalHeader>
                            <ModalBody>
                                <p>Are you sure you want to suspend user?</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="success" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <form action={formAction}>
                                    <Input 
                                    name="email"
                                    defaultValue={email}
                                    className="hidden"
                                    />
                                    <Button type="submit" color="danger" onPress={onClose}>
                                        Confirm
                                    </Button>
                                </form>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
