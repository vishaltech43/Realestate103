import React from 'react';
import data from '../../properties/propertiesData.json';

import PropertyCards from '@/components/property/PropertyCards';

const SimilarProperties = ({city,name}) => {
  const properties = data.properties;
  const recentProperties = properties.filter(property =>
    property.cityName==city && property.name!=name
  
  );

  console.log('Recent Properties:', recentProperties);

  return (
    <div>
      <section className="text-gray-600 body-font bg-gray-200 pb-0 md:px-[67px] px:12 container mx-auto">
        <div className="container px-[20px] md:px-10 py-24 mx-auto">
          <h1 className="text-gray-900 md:text-[48px] text-center pb-10 text-[35px] font-bold font-serif">
            Similar Properties
          </h1>
       
          <div className="flex flex-wrap justify-center">

            { recentProperties.map((property) => (
              <PropertyCards
            key={property.id}
            image={property.image}
            price={property.price}
            title={property.name}
            address={`${property.address?.street || "N/A"}, ${
              property.address?.city || "N/A"
            }`}
            beds={property.beds}
            baths={property.baths}
            sqft={property.squareFootage}
            category={property.category}
            id={property.id}
            featured={property.featured}
          />
            ))}
            {
              recentProperties==0 && <h1 >No similar properties available where city name is {city}</h1>
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimilarProperties;
