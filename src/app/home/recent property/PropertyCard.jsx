import React from "react";
import Link from "next/link";
const PropertyCard = ({
  id,
  image,
  price,
  title,
  address,
  beds,
  baths,
  sqft,
}) => {
  return (
    <div className="p-2 md:w-1/3 ">
      <div className=" border-2   bg-white border-gray-200 border-opacity-60 rounded-tr-[60px] overflow-hidden ">
        <Link href={`./properties/${id}`}>
          <img
            className="h-[20rem] rounded-bl-[60px] md:h-[15rem] w-7xl object-cover object-center rounded-tl-[10px]  rounded-br-[10px]"
            src={image}
            alt={title}
          />

          <div className="p-6 ">
            <h2 className="tracking-widest text-[17px] title-font font-medium text-gray-650 mb-1">
              <span className="bg-blue-800 px-5 py-1 text-[13px] rounded-lg text-white mr-2">
                Sales
              </span>
              ${price}
            </h2>
            <h1 className="title-font text-[23px] font-medium text-blue-900 mb-3">
              {title}
            </h1>
            <div className="leading-relaxed mb-3 flex text-black text-[13px]">
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
              <span className="pb-3">{address}</span>
            </div>
            <div className="bg-gray-300 h-[1px] mt-2"></div>
            <div className="flex items-center flex-wrap pt-4 space-x-2 sm:space-x-2 md:space-x-2">
              <div className="flex items-center">
                <img
                  src="/Images/bed.png"
                  className="w-5 sm:w-6 md:w-7"
                  alt="Bed"
                />
                <span className="ml-1 text-xs sm:text-sm md:text-base">
                  {beds} Bed
                </span>
              </div>
              <div className="w-[0.1%] h-5 bg-gray-300"></div>
              <div className="flex items-center">
                <img
                  src="/Images/bath.png"
                  className="w-5 sm:w-6 md:w-4"
                  alt="Bath"
                />
                <span className="ml-1 text-xs sm:text-sm md:text-base">
                  {baths} Bath
                </span>
              </div>
              <div className="w-[0.1%] h-5 bg-gray-300"></div>
              <div className="flex items-center">
                <img
                  src="/Images/sqft.png"
                  className="w-5 sm:w-6 md:w-7"
                  alt="Sqft"
                />
                <span className="ml-1 text-xs sm:text-sm md:text-base">
                  {sqft} Sqft
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
