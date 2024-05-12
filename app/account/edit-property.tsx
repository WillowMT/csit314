'use client'

import React, { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Input, Select, SelectItem } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { editProperty } from "./action";
import toast from "react-hot-toast";
import { PropertyInterface } from "@/utils/demo";

export default function EditProperty({ property }: { property: PropertyInterface }) {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const [state, formAction] = useFormState(editProperty, null);

    useEffect(() => {
        if (!state) return

        toast.success('User updated successfully')

    }, [state])

    return (
        <>
            <Button size="sm" onPress={onOpen} color='secondary'>Edit</Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="py-4">
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Update Property</ModalHeader>
                    <ModalBody>
                        <div>
                            <form action={formAction}>
                                <div className=" grid grid-cols-2 gap-4 mb-4 max-h-[400px] overflow-y-scroll">

                                    <Input
                                        isRequired
                                        name="name"
                                        className="max-w-[400px] mx-auto"
                                        type="text"
                                        label="Name"
                                        labelPlacement={'outside'}
                                        placeholder="Name"
                                        defaultValue={property.name}
                                    />
                                    <Input
                                        isRequired
                                        name="address"
                                        className="max-w-[400px] mx-auto"
                                        type="text"
                                        label="Address"
                                        labelPlacement={'outside'}
                                        placeholder="Address"
                                        defaultValue={property.address}
                                    />
                                    {/* description */}
                                    <Input
                                        isRequired
                                        name="description"
                                        className="max-w-[400px] mx-auto"
                                        type="text"
                                        label="Description"
                                        labelPlacement={'outside'}
                                        placeholder="Description"
                                        defaultValue={property.description}
                                    />
                                    {/* onSale : boolean with select element */}
                                    <Select
                                        isRequired
                                        name="onSale"
                                        className="max-w-[400px] mx-auto"
                                        label="On Sale"
                                        labelPlacement={'outside'}
                                        placeholder="On Sale"
                                        defaultSelectedKeys={[property.onSale ? "true" : "false"]}
                                    >
                                        <SelectItem key={'true'} value="true">Yes</SelectItem>
                                        <SelectItem key={'false'} value="false">No</SelectItem>
                                    </Select>

                                    <Input
                                        isRequired
                                        name="bedroom"
                                        className="max-w-[400px] mx-auto"
                                        type="number"
                                        label="Bedroom"
                                        labelPlacement={'outside'}
                                        placeholder="bedroom"
                                        defaultValue={property.bedroom.toString()}
                                    />
                                    <Input
                                        isRequired
                                        name="bathroom"
                                        className="max-w-[400px] mx-auto"
                                        type="number"
                                        label="Bathroom"
                                        labelPlacement={'outside'}
                                        placeholder="Bathroom"
                                        defaultValue={property.bathroom.toString()}
                                    />
                                    <Input
                                        isRequired
                                        name="leaseYear"
                                        className="max-w-[400px] mx-auto"
                                        type="number"
                                        label="Lease Year"
                                        labelPlacement={'outside'}
                                        placeholder="Lease Year"
                                        defaultValue={property.leaseYear.toString()}
                                    />
                                    <Input
                                        isRequired
                                        name="squareFt"
                                        className="max-w-[400px] mx-auto"
                                        type="number"
                                        label="Square Feet"
                                        labelPlacement={'outside'}
                                        placeholder="Square Feet"
                                        defaultValue={property.squareFt.toString()}
                                    />
                                    <Input
                                        isRequired
                                        name="builtYear"
                                        className="max-w-[400px] mx-auto"
                                        type="number"
                                        label="Built Year"
                                        labelPlacement={'outside'}
                                        placeholder="Built Year"
                                        defaultValue={property.builtYear.toString()}
                                    />
                                    <Input
                                        isRequired
                                        name="price"
                                        className="max-w-[400px] mx-auto"
                                        type="number"
                                        label="Price"
                                        labelPlacement={'outside'}
                                        placeholder="Price"
                                        defaultValue={property.price.toString()}
                                    />
                                    <Input
                                        isRequired
                                        name="imageUrl"
                                        className="max-w-[400px] mx-auto"
                                        type="string"
                                        label="Image Url"
                                        labelPlacement={'outside'}
                                        placeholder="Image Url"
                                        defaultValue={property.imageUrl.toString()}
                                    />
                                    <Select
                                        isRequired
                                        name="activated"
                                        className="max-w-[400px] mx-auto"
                                        label="Activated"
                                        labelPlacement={'outside'}
                                        placeholder="Activated"
                                        defaultSelectedKeys={[property.activated ? "true" : "false"]}
                                    >
                                        <SelectItem key={'true'} value="true">Yes</SelectItem>
                                        <SelectItem key={'false'} value="false">No</SelectItem>
                                    </Select>

                                    <Input
                                        isRequired
                                        name="propertyType"
                                        className="max-w-[400px] mx-auto"
                                        type="string"
                                        label="Property Type"
                                        labelPlacement={'outside'}
                                        placeholder="Property Type"
                                        defaultValue={property.propertyType.toString()}
                                    />

                                </div>
                                <div className="grid place-items-center">
                                    <Button className=" mx-auto" color="success" type="submit">
                                        Save
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    );
}
