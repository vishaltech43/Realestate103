import Link from "next/link";
import React from "react";

const PropertyCards = ({
  image,
  price,
  title,
  address,
  beds,
  baths,
  sqft,
  category,
  id,
  featured,
}) => {
  return (
    <div className="container-fluid mx-auto  md:w-1/3 sm:w-full px-1 mb-3">
      <div className="relative h-full border-2 bg-white hover:shadow-2xl border-gray-200 border-opacity-60 rounded-tr-[60px] rounded-tl-2xl overflow-hidden">
        <Link href={`/properties/${id}`} passHref legacyBehavior>
          <a className="block">
            <img
              className="w-full sm:h-auto md:h-[15rem] object-cover object-center rounded-tl-[10px] rounded-br-[10px]"
              src={image}
              alt={title}
            />
            {featured && (
              <div className="absolute top-10 right-0 bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold">
                Featured
              </div>
            )}
            <div className="p-2 md:p-6">
              <h2 className="tracking-widest title-font font-medium text-gray-650 mb-1">
                <span
                  className={`bg-${category === "sales" ? "blue-800" : "sky-500"} text-white text-[13px] px-5 py-1 rounded-lg mr-2`}
                >
                  {category}
                </span>
                <span className="text-[17px]">${price}</span>
              </h2>
              <h1 className="title-font text-[20px] md:text-[23px] font-medium text-blue-900 mb-3">
                {title}
              </h1>
              <div className="leading-relaxed mb-3 flex text-black text-[12px]">
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
                <span className="pb-3 ml-2">{address}</span>
              </div>
              <hr />
              <div className="flex items-center flex-wrap pt-4 space-x-1">
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
                <div className="w-px h-5 bg-gray-300 mx-2"></div>
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
                <div className="w-px h-5 bg-gray-300 mx-2"></div>
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
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCards;
