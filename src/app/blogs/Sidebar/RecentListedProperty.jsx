import React from "react";
import RecentPropertycard from "./RecentPropertycard";
import propertiesData from '../../properties/propertiesData.json'

const RecentListedProperty = () => {
 
  const allProperties = propertiesData.properties;


  const recentProperties = allProperties.filter(property => property.recent);

  return (
    <div>
      <h3 className="text-[22px] font-bold mb-4 font-serif pt-5">
        Recently Listed Properties
      </h3>
      <div className="flex flex-wrap">
        {recentProperties.map(property => (
          <RecentPropertycard
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

export default RecentListedProperty;
