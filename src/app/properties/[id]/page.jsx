import React from "react";
import propertiesData from "../propertiesData.json";
import AgentProfile from "@/app/properties_details/agent_profile/AgentProfile";
import PropertyHead from "@/app/properties_details/property-heading/PropertyHead";
import OverView from "@/app/properties_details/overview/OverView";
import Descriptions from "@/app/properties_details/property-description/Descriptions";
import Amenities from "@/app/properties_details/amenities/Amenities";
import Video from "@/app/properties_details/property-video/Video";
import GoogleMap from "@/app/properties_details/location-map/GoogleMap";
import SimilarProperties from "../../properties_details/similar-properties/SimilarProperties";
import Floorplans from "@/app/properties_details/floor-plans/Floorplans";
import ImageSlider from "../../properties_details/image-slider/ImageSlider";
const getPropertyById = (id) => {
  return propertiesData.properties.find((property) => property.id === id);
};

const PropertyDetails = ({ params }) => {
  const { id } = params;
  console.log(id);
  const property = getPropertyById(id);
  const cityname=property.cityName;
  console.log("hello",cityname)
  if (!property) {
    return <div>Property not found.</div>;
  }

  return (
    <div className="bg-gray-200 ">
      <ImageSlider />
      <PropertyHead
        profile={property.address}
        name={property.name}
        price={property.price}
        category={property.category}
        featured={property.featured}
      />
      <AgentProfile agent={property.agent} />
      <OverView beds={property.beds} baths={property.baths} squareFootage={property.squareFootage} date={property.date}/>
      <Descriptions description={property.description} />
      <Amenities amenitiesList={property.amenitiesList} />
      <Floorplans />
      <Video image={property.image} videoLink={property.videoLink}/>
      <GoogleMap />
      <SimilarProperties city={cityname} name={property.name}/>
    </div>
  );
};

export default PropertyDetails;
