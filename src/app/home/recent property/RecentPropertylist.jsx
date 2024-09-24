import React from 'react';
import PropertyCards from '../../../components/property/PropertyCards';
import data from '../../../app/properties/propertiesData.json';

const RecentPropertylist = () => {
  const properties = data.properties;
  const recentProperties = properties.filter(property =>
    property.id === '1' || property.id === '2' || property.id === '3'
  );

  return (
    <div>
      <section className="text-gray-600 body-font bg-gray-100 pb-0 md:px-12 px-4">
        <div className="container px-[20px] md:px-10 py-24 mx-auto">
          <h1 className="text-gray-900 md:text-[48px] text-center pb-10 text-[35px] font-bold font-serif">
            Recent Listed Properties
          </h1>
          <div className="flex flex-wrap justify-center">
            {recentProperties.map((property) => (
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecentPropertylist;
