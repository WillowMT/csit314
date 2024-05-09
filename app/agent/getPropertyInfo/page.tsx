import Navigation from "@/components/nav";
// import "../../globals.css";
import "./propertyInfo.css";
import { demo } from "@/utils/demo";
import Image from 'next/image'

import {
    Button,
} from "@nextui-org/react";

export default async function Page() {
    // const properties = await controller.buyerViewOnSalePropertyController.getOnSaleProperty()

    return (
        <>
            <div className="">
                <Navigation />
                <h1 className=" text-center text-5xl py-8">Properties listed by you</h1>
                <div className="col py-4">
                    <main className="container mx-auto py-36- px-8">
                        <div className="grid lg:grid-cols-3 gap-6">
                            {demo.properties.map((property, i) => {
                                return (
                                    <div key={i} className="shadow-lg">
                                        <img className="rounded-t-lg w-full" src={property.imageUrl} alt="image" />
                                        <div className="p-5 flex flex-col min-h-[350px]">
                                            <div className=" flex-grow">
                                                <h2>Name: {property.name}</h2>
                                                <h2>Address: {property.address}</h2>
                                                <h2>Description: {property.description}</h2>
                                                <h2>Price: ${property.price}</h2>
                                                <h2>Bedrooms: {property.bedroom}</h2>
                                                <h2>Bathrooms: {property.bathroom}</h2>
                                                <h2>SqFt: {property.squareFt}</h2>
                                            </div>
                                            <div className=" space-x-2 mt-2">
                                                <Button>Edit</Button>
                                                <Button>Remove</Button>
                                            </div>
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
