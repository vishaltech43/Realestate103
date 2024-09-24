import React from 'react';
import SourcesFrom from './SourcesFrom';
import sourceData from './sourceData.json'
const SourceFormBanner = () => {
  const sectionStyle = {
    backgroundImage: `url(${sourceData.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
   
    paddingTop: "0px", 
    paddingBottom: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  };

  return (
    <section
      style={sectionStyle}
      className=" text-white flex flex-col items-center justify-center"
    >
      <div className='py-48 flex justify-center'>
      <SourcesFrom />
      </div>
      
    </section>
  );
};

export default SourceFormBanner;
