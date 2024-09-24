import React from "react";


const Amenities = ({amenitiesList}) => {
  return (
    <div className='container mx-auto'>
      <section className="text-gray-600 bg-white body-font border py-6 rounded-3xl mt-10 mx-4 sm:mx-6 md:mx-10 lg:mx-[130px]">
        <h1 className="pb-4 text-xl text-blue-800 ml-6 font-bold">Amenities</h1>
        <div className="container px-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col mx-2">
          <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-3 md:text-left text-center">
            {amenitiesList.map((column, index) => (
              <div key={index} className={`lg:w-1/3 md:w-1/2 w-full ${index > 0 ? 'md:pl-28' : ''}`}>
                <nav className="list-none mb-10">
                  {column.map((amenity, idx) => (
                    <li key={idx} className={`flex gap-2 ${idx > 0 ? 'pt-2' : ''}`}>
                      <img src={amenity.img} className="h-5" alt={amenity.text} />{" "}
                      <a className="text-gray-600 hover:text-gray-800">{amenity.text}</a>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;
