import Navigation from "@/components/nav";
import Link from "next/link";
import './agent.css';
import { demo } from "@/utils/demo";
import PropertyCard from "./property-card";

export default function Page() {
    return (
        <div className="flexContainer">
            <Navigation />
            <div className="topElement">
                <div className="crave-search-bar">
                    <input className="searchbox" type="text" placeholder="Search Location" />
                    <button className="custom-button">Search</button>
                </div>
            </div>
            <div className="middleElement">
                <div className="midTabs">
                    <div className="tab">
                        <Link className="tab-left" href={"/agentpage"}>Properties</Link>
                        <Link className="tab-right" href={"/agentReviewAndRating"}>Reviews</Link>
                    </div>
                </div>
                <Link className="new-listing" href={"/createproperty"}>Create New Listing</Link>
            </div>
            <div className="">
                <h1 className=" text-center text-4xl">Properties listed by you</h1>
                <div className=" space-y-4">
                    {
                        demo.properties.map((property, i) => {
                            return (
                                <PropertyCard property={property} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}