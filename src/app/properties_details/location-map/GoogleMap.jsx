import React from 'react';

const GoogleMap = () => {
  const sectionStyle = {
    backgroundImage: "url('  /images/address-map.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
   
    position: 'relative', 
};

  return (
  

    <div className='container mx-auto'>
    <div className='mx-4 sm:mx-6 md:mx-10 lg:mx-[130px] px-10 rounded-3xl py-9 border mt-12 bg-white'>
        <h1 className="text-blue-900 text-xl font-bold">Map</h1>
        <div className='mt-6 rounded-3xl  h-[33rem]' style={sectionStyle}>
        </div>
    </div></div>
  );
};

export default GoogleMap;
