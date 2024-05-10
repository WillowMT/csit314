import React, { useState } from "react";
import Link from "next/link";
import './propertysearch.css';

//seacrh property for agent #64 sprint 4
// add data for mongo DB
const mockProperties = [
  {
    id: 1,
    name: "Property 1",
    type: "House",
    address: "123 Main St",
    description: "Lorem ipsum dolor sit amet.",
    price: "$500,000",
    room: 3,
    showers: 2,
    measurements: "2000 sqft",
    imageUrl: "your-image-url.jpg"
  },
  {
    id: 2,
    name: "Property 2",
    type: "Apartment",
    address: "456 Elm St",
    description: "Consectetur adipiscing elit.",
    price: "$300,000",
    room: 2,
    showers: 1,
    measurements: "1200 sqft",
    imageUrl: "your-image-url.jpg"
  },
];

//shows result of property created by agent, if no property is 
//created show message "no properties created"
export default function PropertySearch() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Location..."
      />
      <button>Search</button>
        <div>
            <div className="property">
              <img alt="Property Image" />
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
                <Link href={`/editproperty`}>Edit</Link>
                <button>Remove</button>
              </div>
            </div>
        </div>
    </div>
  );
}
