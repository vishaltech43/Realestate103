import React from "react";

const OverView = ({beds,baths,squareFootage,date}) => {
  return (
    <div className='container mx-auto'>
    <section className="mx-4 sm:mx-6 md:mx-10 lg:mx-[130px] border mt-10 px-6 py-8 rounded-3xl bg-white">
      <h1 className="text-blue-900 font-bold">Overview</h1>
      <div className="flex gap-10 pt-5">
        <div >
          <h1 className="text-[15px] text-gray-900">Updated On:</h1>
          <p className="text-[15px] text-gray-900">{date}</p>
        </div>

        <div>
          <div className="flex items-center flex-wrap pt-4 gap-2 space-x-1 sm:space-x-2 md:space-x-3">
            <div className="flex items-center">
              <img
                src="/Images/bed.png"
                className="w-5 sm:w-6 md:w-7 sm:ml-3"
                alt="Bed"
              />
              <span className="ml-1  text-xs sm:text-sm md:text-base">
                {beds} Bed
              </span>
            </div>
            <div className="flex items-center ">
              <img
                src="/Images/bath.png"
                className="w-5 sm:w-6 md:w-7"
                alt="Bath"
              />
              <span className="ml-1 text-xs text-gray-900 sm:text-sm md:text-base">
                {baths} Bath
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="/Images/sqft.png"
                className="w-5 sm:w-6 md:w-7"
                alt="Sqft"
              />
              <span className="ml-1 text-xs text-gray-900 sm:text-sm md:text-base">
                {squareFootage} Sqft
              </span>
            </div>
          </div>
        </div>
      </div>
    </section></div>
  );
};

export default OverView;
