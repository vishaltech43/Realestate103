import React from 'react';
import ServiceCard from './ServiceCard';
import servicesData from './services.json'; 

const Services = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gray-100 md:px-20">
        <div className="container px-3 py-24 mx-auto">
          <h1 className="text-gray-900 md:text-[50px] mb-4 text-center text-[35px] font-bold font-serif">
            Our Services
          </h1>
          <div className="flex flex-wrap">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
