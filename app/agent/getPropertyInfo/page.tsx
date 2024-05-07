import Navigation from "@/components/nav";
// import "../../globals.css";
import "./propertyInfo.css";
import * as controller from '@/utils/controllers/globalControllers'
import { demo } from "@/utils/demo";
import Image from 'next/image'

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    Select,
    SelectItem,
} from "@nextui-org/react";

export default async function Page() {
    const properties = await controller.buyerViewOnSalePropertyController.getOnSaleProperty()

    return (
        <>
            <div className="">
                <Navigation />
                <h1>Properties listed by you</h1>
                <div className="col">
                    <main className="container mx-auto py-36- px-8">
                        <div className="grid lg:grid-cols-3 gap-6">
                            {demo.properties.map((property: any) => {
                                return (
                                    <div className="shadow-lg">
                                        <Image className="rounded-t-lg" src={property.imageUrl} alt="image"/>
                                        <div className="p-5">
                                            <h2>Name: {property.name}</h2>
                                            <h2>Address: {property.address}</h2>
                                            <h2>Description: {property.description}</h2>
                                            <h2>Price: ${property.price}</h2>
                                            <h2>Bedrooms: {property.bedrooms}</h2>
                                            <h2>Bathrooms: {property.bathrooms}</h2>
                                            <h2>SqFt: {property.squareFt}</h2>
                                            <Button>Edit</Button>
                                            <Button>Remove</Button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </main>
                </div>
            </div>

        </>
    );
}
