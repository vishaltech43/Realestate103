import React from "react";
import GetstartedBtn from "@/components/CommonBtn";
import basicDetail  from './BasicDetail.json'
const BasicDetails = () => {
  return (
    <section class=" text-gray-600 body-font bg-gray-100  overflow-hidden mb-[70px ] px-20 md:px-20">
      <div class="container  py-24  mx-auto mt-20">
        <div class="lg:w-4/5 mx-auto scale-125 flex flex-wrap">
          <img
            alt="home"
            class="lg:w-1/2 w-full rounded-bl-[30%] object-cover object-center"
            src={basicDetail.image}
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 mb-10">
            <h1 class="text-gray-900 md:text-[40px] text-[30px] font-bold font-serif">
              The Better way
            </h1>
            <h1 class="text-gray-900 md:text-[40px] text-[30px]  font-bold mb-1 font-serif pb-5">
              to buy real estate.
            </h1>
            <p class="leading-relaxed mb-4 ">
              {basicDetail.description1}
            </p>
            <p class="leading-relaxed mb-10">
            {basicDetail.description2}
            </p>
            
            <GetstartedBtn px={'px-12px'} mdpx={'md:px-[33px]'} mdp={'p-4'} mdtext={'md:text-[16px]'} name={'GET STARTED'}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicDetails;
