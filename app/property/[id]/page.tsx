import Navigation from "@/components/nav";
import './style.css';
import React from "react";
import AgentCard from './agentCard';
import {Divider, Chip, Checkbox} from "@nextui-org/react";
import {PlusIcon} from './PlusIcon.jsx';

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
                <div className=" flex justify-center">
                    <div className="w-[1300px]">
                        <div className="space-y-1">
                            <h4 className="text-3xl font-bold pl-4">Property 1</h4>
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
                        <Divider className="my-5" />
                        <div className="pl-4">
                            <Checkbox icon={<PlusIcon size={undefined} height={undefined} width={undefined}></PlusIcon>} color="warning">Add to shortlist</Checkbox>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default YourPage;