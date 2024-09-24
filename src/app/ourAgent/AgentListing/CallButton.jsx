"use client";

import React from 'react';

const CallButton = () => {
  const handleClick = () => {
    window.location.href = 'tel:6376318678';
  };

  return (
    <button
      type="button" 
      onClick={handleClick}
      className="bg-blue-900 text-white py-0 px-5 text-[18px] font-bold rounded-3xl flex items-center gap-2 hover:bg-blue-800"
    >
      <img src='/Images/call.png' alt="icon" className='h-5' />
      <h1>Call</h1>
    </button>
  );
};

export default CallButton;
