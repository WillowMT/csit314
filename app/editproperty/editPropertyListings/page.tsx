import React, { useState } from "react";
import Link from "next/link";
import './editProperty.css';

// editing property by agnet #62 sprint 4
// data for mongo DB
const initialPropertyData = {
  name: "Property Name",
  location: "Property Location",
  price: "Property Price",
  type: "Property Type",
  measurement: "Property Measurement",
  rooms: "Number of Rooms",
  bathrooms: "Number of Bathrooms",
  image: "URL link to image",
  description: "Property Description"
};

//handles changes for that property
export default function editPropertyListings() {
  return (
    <div className="flexContainer">
      <div className="first-Element">
        <h2>Edit Property</h2>
      </div>
      <div className="middleColumn">
        <div className="leftColumn">
          <div>Property Name:</div>
          <input
            type="text"
            name="name"
          />
          <br />
          <div>Property Location:</div>
          <input
            type="text"
            name="location"
          />
          <br />
          <div>Property Price:</div>
          <input
            type="text"
            name="price"
          />
          <br />
          <div>Property Type:</div>
          <input
            type="text"
            name="type"
          />
          <br />
        </div>
        <div className="rightColumn">
          <div>Property Measurement:</div>
          <input
            type="text"
            name="measurement"
          />
          <br />
          <div>Number of rooms:</div>
          <input
            type="text"
            name="rooms"
          />
          <br />
          <div>Number of bathrooms:</div>
          <input
            type="text"
            name="bathrooms"
          />
          <br />
          <div>Property Image:</div>
          <input
            type="text"
            name="image"
          />
          <br />
          <div>Property description:</div>
          <textarea
            name="description"
          />
          <br />
        </div>
      </div>
      <div className="buttons">
        <div className="return">
          <Link href={"/agentmainpage"}>Return</Link>
        </div>
        <div className="submit">
          <button >Submit</button>
        </div>
      </div>
    </div>
  );
}
