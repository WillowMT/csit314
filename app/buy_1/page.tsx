import Navigation from "@/components/nav";
import './style.css';
import React from "react";
import AgentCard from './agentCard';
import {Divider, Chip, Card, CardHeader, CardBody, CardFooter, Input, Textarea} from "@nextui-org/react";
import ShortList from "./shortlistIcon";
import MortageCal from "./mortgageCal";

const YourPage = () => {

    return(
        <div>
            <Navigation />
            <div className="flex justify-center w-full">
                <div className="flex p-3 justify-left w-full">
                        <div className="image"><img src='https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912' alt="image 1" /></div>
                        <div className="w-[300px]"></div>
                        <Card className="py-4 w-[400px]">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                            <p className="text-medium font-bold">Mortgage Calculator</p>
                            <MortageCal></MortageCal>
                        </CardHeader>
                        </Card>
                        
                </div>
            </div>
            
                <div className=" flex justify-left pl-4">
                    <div className="w-full">
                        <div className="space-y-1">
                            <div className="flex flex-row">
                                <h4 className="text-3xl font-bold pl-4 pr-3">Property 1</h4>
                                
                                <ShortList></ShortList>
                            </div>
                            
                            <p className="text-large pl-4">123 Figuenrter Street, Gedasg, 1235</p>
                        </div>
                        <br></br>
                        <div className="flex h-2 items-center space-x-4 text-small justify-start pl-4">
                            <Chip color="warning" variant="solid">HDB</Chip>
                            <Divider orientation="vertical" />
                            <Chip color="warning" variant="solid">99 years lease</Chip>
                            <Divider orientation="vertical" />
                            <Chip color="warning" variant="solid">Built in 2022</Chip>
                        </div>
                    <Divider className="my-5" />
                        <div className="flex h-5 items-center space-x-10 justify-start pl-4">
                            <div className=" text-medium">Starting from</div>
                            <Divider orientation="vertical" />
                            <div className=" text-xl">$120,000,000</div>
                        </div>
                    <Divider className="my-5" />
                        <div className="flex h-5 items-center space-x-4 text-small justify-start pl-4">
                            <img className="bed_icon" src="https://icons.veryicon.com/png/o/miscellaneous/alan-ui/ios-bed-3.png" alt="bed" />
                            
                            <div>2</div>
                            <Divider orientation="vertical" />
                            <img className="bed_icon" src="https://icons.veryicon.com/png/o/miscellaneous/site-icon-library-1/bathroom-products-1.png" alt="bed" />
                            
                            <div>3</div>
                            <Divider orientation="vertical" />
                            <img className="bed_icon" src="https://icons.veryicon.com/png/o/construction-tools/supermap-gis-product-dark-color-function-icon/measured-area.png" alt="bed" />
                            
                            <div>200 sq/ft</div>
                        </div>
                        <Divider className="my-5" />
                            <p className="text-medium pb-2 pl-4">Contact Agent</p>
                            <div className="pl-4">
                                <AgentCard></AgentCard>
                            </div>
                        <Divider className="my-3" />
                        <div className="text-medium pb-2 pl-4">
                            <h1>Description</h1>
                            <div className="pl-3">
                                <p>* 2.5-storey gem bathed in natural light with unique skylight.</p>

                                <p>* 5 bedrooms + helper's room for ultimate comfort.</p>

                                <p>* Unlike most Inter-Terrace, this house is bright and breezy, with Skylight bathes the home in natural light around the stairs.</p>

                                <p>* Modernised bathrooms for a touch of luxury.</p>

                                <p>* Excellent Connectivity: Just an apprx. 2 mins walk to the nearest bus-stop, and not forgetting the convenient access to NEX or Woodleigh mall, amenities, and Woodleigh or Serangoon MRT stations, Bus-Interchange,
                                Various Expressway like CTE, PIE, KPE.</p>

                                <p>Prime Location for Families & Investors:
                                <br></br>- Top local schools nearby (Yangzheng Primary, St. Gabriel's Primary & Secondary, Maris Stella High School, Zhonghua Secondary, Nanyang JC, Raffles Institution, Raffles Girls' Secondary and More)
                                <br></br>- International schools like Australian Int'l School, Stamford American School, International French School, NEXUS, etc</p>
                            </div>
                        </div>
                        <Divider className="my-3" />
                    </div>
                </div>
        </div>
    )
};

export default YourPage;