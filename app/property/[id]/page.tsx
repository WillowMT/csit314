import Navigation from "@/components/nav";
import './style.css';
import React from "react";
import AgentCard from './agentCard';
import { Divider, Chip, Card, CardHeader, Image, CardBody } from "@nextui-org/react";
import ListingButton from "./listting-button";
import MortageCal from "./mortgageCal";
import { demo } from "@/utils/demo";
import { faker } from "@faker-js/faker";

const YourPage = () => {

    const property = demo.properties[0]

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

                                <ListingButton />
                            </div>

                            <p className="text-large pl-4">123 Figuenrter Street, Gedasg, 1235</p>
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
                            <AgentCard/>
                        </div>
                        <Divider className="my-3" />
                        <div className="text-medium pb-2 pl-4">
                            <h1>Description</h1>
                            <div className="pl-3">
                                <p>* 2.5-storey gem bathed in natural light with unique skylight.</p>

                                <p>* 5 bedrooms + helper&apos;s room for ultimate comfort.</p>

                                <p>* Unlike most Inter-Terrace, this house is bright and breezy, with Skylight bathes the home in natural light around the stairs.</p>

                                <p>* Modernised bathrooms for a touch of luxury.</p>

                                <p>* Excellent Connectivity: Just an apprx. 2 mins walk to the nearest bus-stop, and not forgetting the convenient access to NEX or Woodleigh mall, amenities, and Woodleigh or Serangoon MRT stations, Bus-Interchange,
                                    Various Expressway like CTE, PIE, KPE.</p>

                                <p>Prime Location for Families & Investors:
                                    <br></br>- Top local schools nearby (Yangzheng Primary, St. Gabriel&apos;s Primary & Secondary, Maris Stella High School, Zhonghua Secondary, Nanyang JC, Raffles Institution, Raffles Girls&apos; Secondary and More)
                                    <br></br>- International schools like Australian Int&apos;l School, Stamford American School, International French School, NEXUS, etc</p>
                            </div>
                        </div>
                        <Divider className="my-3" />
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

export default YourPage;