import React from "react";
import Image from "next/image";
const OurWorkOverview = () => {
  const sectionStyle = {
    backgroundImage: 'url("/images/img-3.png")',

    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    Height: "100vh",
  };
  return (
    <div>
      <section class=" text-gray-600 body-font py-24">
        <div  class=" mx-auto flex  md:flex-row flex-col items-center gap-20 justify-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
              className="object-cover object-center  rounded"
              alt="hero"
              src="/images/img-2.png"
              layout="responsive" 
              width={500} 
              height={300} 
            />
          </div>

          <div style={sectionStyle}>
            <div class="lg:flex-grow  lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center lg:py-5 sm:py-4 md:py-5 py-4  px-3">
              <div className="bg-gradient-to-l from-violet-200 from-10% via-white via-30% to-white to-90%  shadow-2xl p-6 py-8 w-5/6 pr-4 pr-10">
                <h1 className="text-4xl font-medium text-blue-900">
                  30<span className="text-[23px]">k+</span>
                </h1>
                <h1 className="text-sm font-bold py-3 mb-3 font-serif text-black">
                  Project Done
                </h1>
                <p className="text-[12px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque omnis, consequuntur iste sequi minus ipsa, ratione.
                </p>
              </div>

              <div className="bg-gradient-to-l from-violet-200 from-10% via-white via-30% to-white to-90%  shadow-2xl  py-8 p-6 w-5/6 pr-4 pr-10 mt-10">
                <h1 className="text-4xl font-medium text-blue-900">11</h1>
                <h1 className="text-sm font-bold py-3 mb-3 font-serif text-black">
                  Year of Experiences
                </h1>
                <p className="text-[12px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Itaque omnis, consequuntur iste sequi minus ipsa, ratione.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-10 md:gap-20 text-[12px] px-10  pt-[56px] ">
          <h1 className="text-blue-900">
            12k <span className="text-black">DAILY STANDUPS</span>
          </h1>
          <h1 className="text-blue-900">
            12k <span className="text-black">HAPPY CLIENTS</span>
          </h1>
          <h1 className="text-blue-900">
            10k <span className="text-black">USER STORIES</span>
          </h1>
        </div>
      </section>
    </div>
  );
};

export default OurWorkOverview;


