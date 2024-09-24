import React from "react";

const PropertyHead = ({ profile, name, price, category,featured }) => {
  return (
    <div className='container mx-auto'>
      <section class="text-gray-600 body-font mx-4 sm:mx-6 md:mx-10 lg:mx-[110px] pt-20">
        <div class="container px-5 py-6 mx-auto flex items-center md:flex-row flex-col">
          <div class="flex flex-col md:pr-10 md:mb-0  pr-0 w-full md:w-auto md:text-left ">
            <div class="md:text-2xl text-2xl font-bold title-font text-blue-800 mr-3">
              <span>{name}</span>{" "}
              <div className="leading-relaxed  flex text-black text-[13px]">
                <div className="flex flex-col">
                  <div className="flex">
                    <svg
                      width="20px"
                      height="20px"
                      className="mt-2"
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
                    <span className="pt-2 text-gray-500">
                      <span>{profile.street}, </span>
                      {profile.city}
                    </span>
                  </div>
                  <div className="flex">
                    {" "}
                    <div className="flex items-center">
                      <div>
                        <span
                          className={
                            category === "sales"
                              ? "bg-blue-800 text-white px-3 py-1 rounded-lg mr-2"
                              : "bg-sky-500 rounded-lg  mr-2 text-white px-3 py-1"
                          }
                        >
                          {category}
                        </span>
                      </div>
                    </div>
                    <h1 className="pl-3 font-bold text-[20px]">$ {price}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          {featured && (
                <div class="flex md:ml-auto md:mr-0  flex-shrink-0 space-x-4">
                <h1 className="bg-red-600 px-3 text-white text-left text-[13px] py-[2px] rounded-lg">
                  Featured
                </h1>
                
              </div>
            )}
        </div>
      </section>
    </div>
  );
};

export default PropertyHead;
