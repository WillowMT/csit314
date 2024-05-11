import Navigation from "@/components/nav";
import Link from "next/link";
import Searchbar from "../searchcreatedproperties/page";
import './agent.css';
import { demo } from "@/utils/demo";
import PropertyCard from "./property-card";

export default function Page() {

    return (
        <div className="flexContainer">
            <Navigation />
            <Searchbar />
            <div className="middleElement">
                <div className="midTabs">
                    <div className="tab">
                        <Link className="tab-left" href={"/agentpage"}>Properties</Link>
                        <Link className="tab-right" href={"/agent-review-and-rating"}>Reviews</Link>
                    </div>
                </div>
                <Link className="new-listing" href={"/createproperty"}>Create New Listing</Link>
            </div>
            <div className="p-10">
                <h1 className=" text-center text-4xl my-4">Properties listed by you</h1>
                <div className=" space-y-4">
                    {
                        demo.properties.map((property, i) => {
                            return (
                                <PropertyCard key={i} property={property} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}