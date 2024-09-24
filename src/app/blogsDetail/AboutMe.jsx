import React from "react";
import Socialicons from "../../components/Socialicons";
import Image from 'next/image'; 

const AboutMe = ({ name, image, desc, date }) => {
  console.log(name);
  console.log(image);

  const sectionStyle = {
    position: "relative",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
    zIndex: 1,
  };

  return (
    <div className="container w-4/5 md:full mx-auto pt-5 md:pt-28 mb-5">
      <div className="border px-9 py-9 mt-5 rounded-3xl">
        <div className="pb-7 style rounded-3xl h-[10rem] md:h-[30rem]" style={sectionStyle}></div>

        <div className="flex gap-6 py-5">
          <div className="flex items-center gap-3">
            <div className="bg-gray-300 h-8 w-8 rounded-full flex justify-center items-center">
              <Image src="/images/calendar (2).png" alt="" width={16} height={16} /> 
            </div>
            <p className="text-gray-500">Posted by remus {date}</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-gray-300 h-8 w-8 rounded-full flex justify-center items-center">
              <Image src="/images/comment.png" alt="" width={16} height={16} /> 
            </div>
            <p className="text-gray-500">0</p>
          </div>
        </div>

        <h1 className="text-4xl pb-10 font-serif font-bold">{name}</h1>
        <p className="flex flex-wrap text-gray-500">{desc}</p>
        <p className="flex flex-wrap leading-7 pt-6 text-gray-500">{desc}</p>

        <div className="w-[17rem] mt-3">
          <Socialicons />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
