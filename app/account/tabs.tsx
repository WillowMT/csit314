'use client'
import { Tab, Chip, Tabs } from "@nextui-org/react";
import { demo } from "@/utils/demo";
import PropertyCard from "./property-card";
import { Rate } from 'antd'
import RatingForm from "./rating-form";
import ReviewForm from "./review-form";
import PropertyCardBuyer from "./property-card-buyer";


export default function UserTabs({ role, listings, shortListings, ratingsAndReviews }: { role: string, listings: any, shortListings:any, ratingsAndReviews: any}) {
    

    return (
        <div className="flex w-full flex-col mt-4">
            <Tabs
                aria-label="Options"
                color="primary"
                variant="underlined"
                classNames={{
                    tabList: "gap-8 w-full relative rounded-none p-0 border-b border-divider",
                    cursor: "w-full bg-brand-400",
                    tab: "max-w-fit px-0 h-12",
                    tabContent: "group-data-[selected=true]:text-brand-400"
                }}
            >
                {
                    role === 'AGENT' && (
                        <Tab
                            key="listings"
                            title={
                                <div className="flex items-center space-x-2">
                                    <span>My Listings</span>
                                </div>
                            }
                        >
                            <div className="">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {
                                        listings.map((p:any, i:any) => {
                                            return (
                                                <PropertyCard key={i} property={p.property} role={role} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </Tab>
                    )
                }

                {
                    role === 'BUYER' && (

                        <Tab
                            key="listings"
                            title={
                                <div className="flex items-center space-x-2">
                                    <span>My Shortlists</span>
                                </div>
                            }
                        >
                            <div className="">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {
                                        shortListings.map((p:any, i:any) => {
                                            return (
                                                <PropertyCardBuyer key={i} property={p.property} role={role} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </Tab>
                    )
                }

                {
                    role.includes("AGENT") && (
                        <Tab
                            key="ratings"
                            title={
                                <div className="flex items-center space-x-2">
                                    <span>Ratings and Reviews</span>

                                </div>
                            }
                        > <div>
                                {
                                    (role.includes("BUYER") || role.includes("SELLER")) && (
                                        <div className=" flex flex-col space-y-4 my-4 border-b pb-4">
                                            <h2 className="text-xl">Create Rating and Review</h2>
                                            <RatingForm />
                                            <ReviewForm />
                                        </div>
                                    )
                                }

                                {
                                    ratingsAndReviews.map((rating:any, i:number) => {
                                        return (
                                            <div key={i} className=" space-y-4 mb-4 border-b pb-4">
                                                <div className=" italic text-slate-600/60 text-sm">Anonymous</div>
                                                <Rate disabled defaultValue={rating?.rating || 0} />
                                                <div>{rating?.review || ""}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Tab>
                    )
                }


            </Tabs>
        </div>
    )
}