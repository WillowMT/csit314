import Navigation from "@/components/nav";
import './style.css';
import React from "react";
import AgentCard from './agentCard';
import ShortList from "./shortlistIcon";
import {Divider, Chip} from "@nextui-org/react";

const YourPage = () => {

    return(
        <div>
            <Navigation />
            <div className="image_layout">
                <div className="image_box">
                    <div className="image"><img src='https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912' alt="image 1" /></div>
                    <div className="image"><img src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg' alt="image 2" /></div>
                    <div className="image"><img src='https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912' alt="image 3" /></div>
                    <div className="image"><img src='https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912' alt="image 4" /></div>
                    <div className="image"><img src='https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912' alt="image 5" /></div>
                    <div className="image"><img src='https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912' alt="image 5" /></div>
                    <div className="image"><img src='https://www.bankrate.com/2023/06/12125257/buying-a-house-worth-it.jpg?auto=webp&optimize=high&crop=16:9&width=912' alt="image 5" /></div>
                </div>
            </div>
                <div className="info_box">
                    <div className="max-w-md">
                        <div className="space-y-1">
                            <br></br>
                            <br></br>
                            <h4 className="text-3xl font-bold">Property 1</h4>
                            <p className="text-medium">123 Figuenrter Street, Gedasg, 1235</p>
                        </div>
                        <br></br>
                        <div className="flex h-5 items-center space-x-4 text-small">
                            <Chip color="warning" variant="solid">HDB</Chip>
                            <Divider orientation="vertical" />
                            <Chip color="warning" variant="solid">99 years lease</Chip>
                            <Divider orientation="vertical" />
                            <Chip color="warning" variant="solid">Built in 2022</Chip>
                        </div>
                    <Divider className="my-5" />
                        <div className="flex h-5 items-center space-x-10 text-small">
                            <div>Starting from</div>
                            <Divider orientation="vertical" />
                            <div className=" text-xl">$120,000,000</div>
                        </div>
                    <Divider className="my-5" />
                        <div className="flex h-5 items-center space-x-4 text-small">
                            <img className="bed_icon" src="https://icons.veryicon.com/png/o/miscellaneous/alan-ui/ios-bed-3.png" alt="bed" />
                            
                            <div>2</div>
                            <Divider orientation="vertical" />
                            <img className="bed_icon" src="https://icons.veryicon.com/png/o/miscellaneous/site-icon-library-1/bathroom-products-1.png" alt="bed" />
                            
                            <div>2</div>
                            <Divider orientation="vertical" />
                            <img className="bed_icon" src="https://icons.veryicon.com/png/o/construction-tools/supermap-gis-product-dark-color-function-icon/measured-area.png" alt="bed" />
                            
                            <div>2</div>
                        </div>
                    <Divider className="my-5" />
                        <div className="flex h-5 items-center space-x-4 text-small">
                            <ShortList></ShortList>
                        </div>
                    </div>
                </div>
                <div className="agent_card">
                    <AgentCard></AgentCard>
                </div>
        </div>
    )
};

export default YourPage;