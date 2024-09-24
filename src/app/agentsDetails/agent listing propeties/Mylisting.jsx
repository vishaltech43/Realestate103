import React from 'react'
import agentProperties from '../../properties/propertiesData.json'
import PropertyCards from '../../../components/property/PropertyCards';
const Mylisting = ({name}) => {
  console.log(name)
  const propertylist=agentProperties.properties.filter((property)=>property.agent.name==name)
  console.log(propertylist)

  
    return (
      <section className="text-gray-600 body-font  pb-0 mx-4 sm:mx-6 md:mx-10 lg:mx-[80px] ">
        <div className="container px-4 md:px-6 py-24 mx-auto">
          <h1 className="text-gray-900 text-4xl md:text-4xl lg:text-5xl font-bold font-serif text-center pb-10">
           My Listings
          </h1>
          <div className="flex flex-wrap -m-4 justify-center">
          {propertylist && propertylist.map((property) => (
             
            <PropertyCards
                key={property.id}
                image={property.image}
                price={property.price}
                title={property.name}
                address={`${property.address.street}, ${property.address.city}`}
                beds={property.beds}
                baths={property.baths}
                sqft={property.squareFootage}
                category={property.category}
                id={property.id}
                featured={property.featured}
            />
        ))
        
        }
        {
          propertylist.length==0 && <div className='text-center text-2xl py-10'>No listed property by {name}</div>
        }
          </div>
        </div>
      </section>
    );
  };
  

export default Mylisting

