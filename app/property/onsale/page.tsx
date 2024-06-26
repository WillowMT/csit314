import Navigation from "@/components/nav";
import React from 'react';
import './styles.css';
import PropertyBox from './PropertyBox'
import PropertyCard from "./property-card";
import { getSession } from "@/utils/auth";
import { demo } from "@/utils/demo";
import prisma from "@/utils/prisma";
import { BuyerViewOnSalePropertyController } from "@/utils/controllers/property";
import Collapse from "@/app/buy/collapse";

export default async function Page() {

    const session = await getSession()

    const onsale = new BuyerViewOnSalePropertyController()
    const properties = await onsale.getOnSaleProperty()

    return (
        <div>
            <Navigation />
            <div>
                <Collapse />
            </div>
            <div className="title text-center">
                Listed properties
            </div>
            <div className=" pl-4 pr-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        properties.map((property, i) => {
                            return (
                                <PropertyCard key={i} property={property} role='BUYER' />
                            )
                        })
                    }
                </div>
            </div>
            <div className="no-more">
                - You have reached the end of the page -
            </div>
        </div>

    );
}