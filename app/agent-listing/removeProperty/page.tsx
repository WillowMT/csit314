
//remove property by agent #63 sprint 4
//data for mongo DB
const initialPropertyData = [
    {
      id: 1,
      name: "Property Name 1",
      location: "Property Location 1",
      price: "Property Price 1",
      type: "Property Type 1",
      measurement: "Property Measurement 1",
      rooms: "Number of Rooms 1",
      bathrooms: "Number of Bathrooms 1",
      image: "URL link to image 1",
      description: "Property Description 1"
    },
    {
      id: 2,
      name: "Property Name 2",
      location: "Property Location 2",
      price: "Property Price 2",
      type: "Property Type 2",
      measurement: "Property Measurement 2",
      rooms: "Number of Rooms 2",
      bathrooms: "Number of Bathrooms 2",
      image: "URL link to image 2",
      description: "Property Description 2"
    },
  ];
/*
const removeProperty = (id) => {
    const updatedProperties = initialPropertyData.filter(property => property.id !== id);
    return updatedProperties;
  };
  
  const propertyIdToRemove = 1;
  const updatedProperties = removeProperty(propertyIdToRemove);
  console.log(updatedProperties); */