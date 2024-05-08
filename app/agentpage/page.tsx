import Navigation from "@/components/nav";
import Link from "next/link";
import './agent.css';

export default function displayAgentPage() {
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
            <div className="bottomElement">
                <h1>Properties listed by you</h1>
                <br></br>
                <div className="property">
                    <img src="your-image-url.jpg" alt="Property Image" />
                    <div className="property-info">
                        <h2>Property Name</h2>
                        <h2>Property Type</h2>
                        <h2>Address</h2>
                        <h2>Property Description</h2>
                        <div className="property-details">
                            <p>Price</p>
                            <p>Room</p>
                            <p>Showers</p>
                            <p>Measurements</p>
                        </div>
                    </div>
                    <div className="action-buttons">
                        <button>Edit</button>
                        <button>Remove</button>
                    </div>
                </div>
                <br></br>
                <div className="property">
                    <img src="your-image-url.jpg" alt="Property Image" />
                    <div className="property-info">
                        <h2>Property Name</h2>
                        <h2>Property Type</h2>
                        <h2>Address</h2>
                        <h2>Property Description</h2>
                        <div className="property-details">
                            <p>Price</p>
                            <p>Room</p>
                            <p>Showers</p>
                            <p>Measurements</p>
                        </div>
                    </div>
                    <div className="action-buttons">
                        <button>Edit</button>
                        <button>Remove</button>
                    </div>
                </div>
                <br></br>
                <div className="property">
                    <img src="your-image-url.jpg" alt="Property Image" />
                    <div className="property-info">
                        <h2>Property Name</h2>
                        <h2>Property Type</h2>
                        <h2>Address</h2>
                        <h2>Property Description</h2>
                        <div className="property-details">
                            <p>Price</p>
                            <p>Room</p>
                            <p>Showers</p>
                            <p>Measurements</p>
                        </div>
                    </div>
                    <div className="action-buttons">
                        <button>Edit</button>
                        <button>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}