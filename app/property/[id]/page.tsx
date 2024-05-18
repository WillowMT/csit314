import Navigation from "@/components/nav";
import './style.css';
import React from "react";
import AgentCard from './agentCard';
import { Divider, Chip, Card, CardHeader, Image, CardBody } from "@nextui-org/react";
import ListingButton from "./listting-button";
import MortageCal from "./mortgageCal";
import { demo } from "@/utils/demo";
import { faker } from "@faker-js/faker";
import prisma from "@/utils/prisma";

export default async function Page({ params }: { params: { id: string } }) {

    const property = await prisma.property.findUnique({
        where: {
            publicId: params.id
        },
        include: {
            listing: {
                select: {
                    user: true
                }
            }
        }
    })

    
    if (!property) {
        return <div>Property not found</div>
    }

    // update view count
    await prisma.property.update({
        where: {
            publicId: params.id
        },
        data: {
            views: (property.views || 0) + 1
        }
    })

    return (
        <div>
            <Navigation />

            <div className=" max-w-4xl mx-auto mt-8">

                <div className=" w-full flex place-content-center place-items-center">
                    <img className=" w-full object-cover aspect-video rounded-md mb-8 mx-4" src={property.imageUrl} alt="" />
                </div>


                <div className=" flex justify-left pl-4">
                    <div className="w-full">
                        <div className="space-y-1">
                            <div className="flex flex-row">
                                <h4 className="text-3xl font-bold pl-4 pr-3">{property.name}</h4>
                                <ListingButton propertyId={property.id} />
                            </div>
                            <span className="inline-flex text-sm place-items-center ml-4 text-black/50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                {property.views}
                            </span>

                            <p className="text-large pl-4">{property.address}</p>
                        </div>
                        <br></br>
                        <div className="flex h-2 items-center space-x-4 text-small justify-start pl-4">
                            <Chip color="warning" variant="solid">{property.propertyType}</Chip>
                            <Chip color="warning" variant="solid">{2024 - property.leaseYear} years lease</Chip>
                            <Chip color="warning" variant="solid">Built in {property.builtYear}</Chip>
                        </div>
                        <Divider className="my-5" />
                        <div className="flex h-5 items-center space-x-10 justify-start pl-4">
                            <div className=" text-medium">Starting from</div>
                            <Divider orientation="vertical" />
                            <div className=" text-xl">${property.price}</div>
                        </div>
                        <Divider className="my-5" />
                        <div className="flex h-5 items-center space-x-4 text-small justify-start pl-4">
                            <img className="bed_icon" src="https://icons.veryicon.com/png/o/miscellaneous/alan-ui/ios-bed-3.png" alt="bed" />

                            <div>{property.bedroom}</div>
                            <Divider orientation="vertical" />
                            <img className="bed_icon" src="https://icons.veryicon.com/png/o/miscellaneous/site-icon-library-1/bathroom-products-1.png" alt="bed" />

                            <div>{property.bathroom}</div>
                            <Divider orientation="vertical" />
                            <img className="bed_icon" src="https://icons.veryicon.com/png/o/construction-tools/supermap-gis-product-dark-color-function-icon/measured-area.png" alt="bed" />

                            <div>{property.squareFt} sq/ft</div>
                        </div>
                        <Divider className="my-5" />
                        <p className="text-medium pb-2 pl-4">Contact Agent</p>
                        <div className="pl-4">
                            {
                                property.listing[0].user && (
                                    <AgentCard user={property.listing[0].user || null} />
                                )
                            }
                        </div>
                        <Divider className="my-3" />
                        <div>{property.description}</div>
                    </div>
                </div>
                <div>
                    <Card className=" max-w-lg  mx-auto my-8">
                        <CardBody className="grid place-items-center">
                            <h2 className="text-lg font-bold mb-4">Mortgage Calculator</h2>
                            <MortageCal price={property.price} />
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
};
