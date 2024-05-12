'use client'

import { PropertyInterface } from "@/utils/demo"
import { Button, Card, CardBody, Chip } from "@nextui-org/react"
import EditProperty from "./edit-property"
import Link from "next/link"
import { suspendProperty } from "./action"
import toast from "react-hot-toast"


export default function PropertyCard({ property, role }: { property: PropertyInterface, role?: string }) {
    return (
        <>
            <div className="border w-full m-2 rounded-lg overflow-hidden text-left shadow-md text-sm">
                <img src={property.imageUrl} className=" w-full h-[250px] object-cover" alt="" />
                <div className=" px-4 py-8 flex flex-col min-h-[250px] w-full">
                    <div className=" flex-grow space-y-2">
                        <div className=" flex">
                            <span className=" mr-auto font-extrabold">{property.name}</span>
                            <Chip size="sm">{property.propertyType}</Chip>
                        </div>
                        <p>{property.address}</p>
                        <p className=" opacity-60">
                            <span className="inline-flex space-x-2 place-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                {property.views}
                            </span>
                        </p>
                        <div className="space-x-2">
                            <Chip size="sm" variant={'bordered'} color={property.onSale ? 'success' : 'danger'}>{property.onSale ? 'On Sale' : 'Sold'}</Chip>
                            {
                                !property.activated && (
                                    <Chip size="sm" variant={'bordered'} color={'danger'}>Suspended</Chip>
                                )
                            }
                        </div>
                    </div>
                    <div className=" space-x-2 inline-flex place-items-center">
                        <Button size="sm" isIconOnly variant="bordered">
                            <Link href={`/property/${property.publicId}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                                </svg>
                            </Link>
                        </Button>
                        <EditProperty property={property} />
                        <Button onClick={
                            async () => {
                                await suspendProperty(property.id as string).then(
                                    () => {
                                        toast.success('Property suspended')
                                    }
                                ).catch
                                    (
                                        () => {
                                            toast.error('Failed to suspend property')
                                        }
                                    )
                            }
                        } size="sm" color='danger'>Suspend</Button>
                    </div>
                </div>
            </div>
        </>
    )
}