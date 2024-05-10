import React from "react";
import Link from "next/link";

//view property listings by agent #61 sprint 3
// data for mongo DB 
const properties = [
  {
    id: 1,
    name: "Property 1",
    type: "House",
    address: "123 Main St",
    description: "Lorem ipsum dolor sit amet.",
    price: "$500,000",
    room: 3,
    showers: 2,
    measurements: "2000 sqft"
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
    measurements: "1200 sqft"
  }
];

//displays property listings created by agent, if no properties are 
//created, display message "no proerties found"
export default function displayCreatedPropertyListing() {
  // Render properties if available, else show message
  return (
    <div>
      {properties.length > 0 ? (
        properties.map(property => (
          <div key={property.id} className="property">
            <img src="your-image-url" alt="Property Image" />
            <div className="property-info">
              <h2>Property Name: {property.name}</h2>
              <h2>Property Type: {property.type}</h2>
              <h2>Address: {property.address}</h2>
              <h2>Property Description: {property.description}</h2>
              <div className="property-details">
                <p>Price: {property.price}</p>
                <p>Room: {property.room}</p>
                <p>Showers: {property.showers}</p>
                <p>Measurements: {property.measurements}</p>
              </div>
            </div>
            <div className="action-buttons">
              <button>
                <Link href={`/editproperty/${property.id}`}>Edit</Link>
              </button>
              <button>Remove</button>
            </div>
          </div>
        ))
      ) : (
        <p>No properties found.</p>
      )}
    </div>
  );
}
