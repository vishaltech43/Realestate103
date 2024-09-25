"use client"
import React, { useState} from "react";
import GetstartedBtn from "@/components/CommonBtn";
import dealOfDay from './dealOfDay.json'
const DealOfDay = () => {
  const [deal] = useState(dealOfDay);

  return (
    <div>
      <section className="text-gray-600 bg-gray-100 body-font overflow-hidden px-8">
        <h1 className="text-gray-900 md:text-[50px] text-center text-[35px] font-bold font-serif">
          Deal Of The Day
        </h1>
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-80 object-cover object-center rounded-bl-[30%]"
              src={deal.imageSrc}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-4xl title-font font-bold mb-1 font-serif pt-7">
                {deal.title}
              </h1>
              <div className="flex mb-4 pt-4">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 13V7M15 10.0008L9 10M19 10.2C19 14.1764 15.5 17.4 12 21C8.5 17.4 5 14.1764 5 10.2C5 6.22355 8.13401 3 12 3C15.866 3 19 6.22355 19 10.2Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="pb-3">{deal.location}</span>
              </div>
              <p className="leading-relaxed">
                {deal.description}
              </p>
              <div className="flex items-center flex-wrap pt-4 space-x-2">
  <div className="flex items-center pr-5">
    <img
      src="/Images/bed.png"
      className="w-6 sm:w-7 md:w-8"
      alt="Bed"
    />
    <span className="ml-2 text-sm sm:text-base text-[#20208a] md:text-lg">
      {deal.bedCount}
    </span>
  </div>
  <div className="w-[1px] h-7 bg-gray-300"></div>
  <div className="flex items-center px-5">
    <img
      src="/Images/bath.png"
      className="w-6 sm:w-7 md:w-8"
      alt="Bath"
    />
    <span className="ml-2 text-sm sm:text-base md:text-lg text-[#20208a]">
      {deal.bathCount}
    </span>
  </div>
  <div className="w-[1px] h-7 bg-gray-300"></div>
  <div className="flex items-center px-5">
    <img
      src="/Images/sqft.png"
      className="w-6 sm:w-7 md:w-8"
      alt="Sqft"
    />
    <span className="ml-2 text-sm sm:text-base md:text-lg text-[#20208a]">
      {deal.sqft}
    </span>
  </div>
</div>

              <div className="mt-16">
                <GetstartedBtn px={'px-12px'} mdpx={'md:px-[60px]'} mdp={'p-5'} mdtext={'md:text-[20px]'} name={'MORE'}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DealOfDay;
