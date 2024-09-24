import React from 'react';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4 ">
      <div className="bg-white px-10 py-12 p-6 rounded-lg shadow-md rounded-tr-[60px] rounded-bl-[60px] hover:bg-gray-200">
        <div className='p-3 bg-blue-100 w-[60px] h-[60px] flex justify-center rounded-tr-[15px] rounded-bl-[15px]'>
        <img className="h-8 rounded w-[35px] object-cover object-center mb-6  " src={image} alt={title} />
            </div>
        <h2 className="text-[20px] text-gray-900 font-medium title-font mb-4 pt-6  font-serif" ><span className='font-bold'>{title}</span></h2>
        <p className="leading-relaxed text-base">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
