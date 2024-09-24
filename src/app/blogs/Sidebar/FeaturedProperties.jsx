import React from "react";
import FeaturedPropertycard from "./FeaturedPropertycard";
import propertiesData from "../../properties/propertiesData.json"; 

const FeaturedProperties = () => {

  const featuredProperties = propertiesData.properties.filter(property => property.featured).slice(1,5);

  return (
    <div>
      <h3 className="text-[22px] font-bold mb-4 font-serif pt-10">
        Featured Properties
      </h3>
      <div className="flex flex-wrap">
        {featuredProperties.map(property => (
          <FeaturedPropertycard
            key={property.id}
            image={property.image}
            id={property.id}
            title={property.name}
            date={property.date}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
