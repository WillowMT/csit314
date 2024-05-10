import Navigation from "@/components/nav";
import Link from "next/link";
import Searchbar from "../searchagentproperty/page";
import { useState } from "react";
import { demo } from "@/utils/demo";
import './agent.css';


//displays property listings created by agent
export default async function MainRealEstateAgentPage() {
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
            <div className="bottomElement">
                <h1>Properties listed by you</h1>
                <br></br>
                <div className="property">
                    <img src="your-image-url" alt="Property Image" />
                    <div className="property-info">
                        <h2>Property Name: </h2>
                        <h2>Property Type: </h2>
                        <h2>Address: </h2>
                        <h2>Property Description: </h2>
                        <div className="property-details">
                            <p>Price: </p>
                            <p>Room: </p>
                            <p>Showers: </p>
                            <p>Measurements: </p>
                        </div>
                    </div>
                    <div className="action-buttons">
                        <button><Link href={"/editproperty"}>Edit</Link></button>
                        <button>Remove</button>
                    </div>
                </div>
                <br></br>
                <div className="property">
                    <img src="your-image-url" alt="Property Image" />
                    <div className="property-info">
                        <h2>Property Name: </h2>
                        <h2>Property Type: </h2>
                        <h2>Address: </h2>
                        <h2>Property Description: </h2>
                        <div className="property-details">
                            <p>Price: </p>
                            <p>Room: </p>
                            <p>Showers: </p>
                            <p>Measurements: </p>
                        </div>
                    </div>
                    <div className="action-buttons">
                        <button><Link href={"/editproperty"}>Edit</Link></button>
                        <button>Remove</button>
                    </div>
                </div>
                <br></br>
                <div className="property">
                    <img src="your-image-url" alt="Property Image" />
                    <div className="property-info">
                        <h2>Property Name: </h2>
                        <h2>Property Type: </h2>
                        <h2>Address: </h2>
                        <h2>Property Description: </h2>
                        <div className="property-details">
                            <p>Price: </p>
                            <p>Room: </p>
                            <p>Showers: </p>
                            <p>Measurements: </p>
                        </div>
                    </div>
                    <div className="action-buttons">
                        <button><Link href={"/editproperty"}>Edit</Link></button>
                        <button>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}